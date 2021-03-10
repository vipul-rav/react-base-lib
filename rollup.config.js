import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import image from '@rollup/plugin-image';
import autoExternal from 'rollup-plugin-auto-external';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import scss from 'rollup-plugin-scss';

import pkg from './package.json';

const snapshotArgs = process.env.SNAPSHOT === 'match' ? { matchSnapshot: true, threshold: 1000 } : {};

const compileModule = (moduleType) => ({
  input: `${__dirname}/src/baseApp.js`,
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
  plugins: [
    autoExternal(),
    image(),
    json({
      exclude: 'node_modules/**',
      compact: true
    }),
    scss({
      output: 'lib/style.css'
    }),
    babel({
      babelrc: false,
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
              browsers: ['ie>=11']
            }
          }
        ]
      ],
      plugins: ['@babel/plugin-proposal-class-properties']
    }),
    commonjs()
  ]
});

const cjsType = compileModule('cjs');
const esmType = compileModule('esm');

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    inlineDynamicImports: true,
    ...cjsType,
    plugin: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      ...cjsType.plugins,
      terser({
        compress: {
          side_effects: true
        },
        output: {
          preserve_annotations: true
        }
      }),
      sizeSnapshot(snapshotArgs)
    ],
    output: {
      file: path.join(__dirname + '/lib', pkg.main),
      format: 'cjs'
    }
  },
  {
    ...esmType,
    plugin: [...esmType.plugins, sizeSnapshot(snapshotArgs)],
    output: {
      dir: path.join(__dirname + '/lib', pkg.module),
      format: 'esm'
    }
  }
];
