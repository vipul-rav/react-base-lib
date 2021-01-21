export default () => {
    const { hash }= window.location;
    return hash.substring(1).split("&").reduce((params, pair) => {
        const [key, value] = pair.split("=");
        return value
            ? Object.assign({ [key]: value }, params)
            : params;
    }, {});

};
