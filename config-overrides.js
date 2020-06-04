const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        "@actions": path.resolve(__dirname, "src/actions"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@reducers": path.resolve(__dirname, "src/reducers"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@view": path.resolve(__dirname, "src/view")
    }),
);