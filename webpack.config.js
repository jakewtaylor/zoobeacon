const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'app/js');
const APP_DIR = path.resolve(__dirname, 'src/js');

const config = {
    entry: path.join(APP_DIR, '/index.js'),
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loader: 'babel-loader',
            },
        ],
    },
};

module.exports = config;
