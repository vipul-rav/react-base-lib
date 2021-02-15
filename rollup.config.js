import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const babelRuntime = pkg.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const snapshotArgs =
    process.env.SNAPSHOT === 'match'
        ? { matchSnapshot: true, threshold: 1000 }
        : {};

const compileModule = (moduleType) => ({
    input: `${__dirname}/src/index.js`,
    //external: [/@babel\/runtime/],
    external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.devDependencies),
        ...Object.keys(pkg.peerDependencies),
    ],
    plugins: [
        autoExternal(),
        json({
            exclude: 'node_modules/**',
            compact: true,
        }),

        babel({
            babelrc: false,
            //babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-react',
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        loose: true,
                        useBuiltIns: false,
                        targets: {
                            browsers: ['ie>=11'],
                        },
                    },
                ],
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                // [
                //     '@babel/plugin-transform-runtime',
                //     {
                //         version: babelRuntime,
                //         useESModules: moduleType === 'esm',
                //     },
                // ],
            ],
        }),
        commonjs(),
    ],
});

const cjsType = compileModule('cjs');
const esmType = compileModule('esm');

export default [
    {
        inlineDynamicImports: true,
        ...cjsType,
        plugin: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            ...cjsType.plugins,
            terser({
                compress: {
                    side_effects: true,
                },
                output: {
                    preserve_annotations: true,
                },
            }),
            sizeSnapshot(snapshotArgs),
        ],
        output: {
            file: path.join(__dirname, pkg.main),
            format: 'cjs',
        },
    },
    {
        ...esmType,
        plugin: [...esmType.plugins, sizeSnapshot(snapshotArgs)],
        output: {
            dir: path.join(__dirname, pkg.module),
            format: 'esm',
        },
    },
];
