var path = require('path');
var main = {
    mode: 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'src', 'main'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'main')
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
                test: /.ts?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'ts-loader',
            }]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool:"source-map",
};
var renderer = {
    mode: 'development',
    target: 'electron-renderer',
    //レンダープロセス用のソースコード
    entry: path.join(__dirname, 'src', 'renderer'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'renderer')
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)$/,
                use: [
                    'ts-loader'
                ],
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules'),
                ],
            }]
    },
    devtool:"source-map",
};
module.exports = [
    main, renderer
];