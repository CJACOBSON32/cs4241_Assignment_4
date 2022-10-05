const path = require('path');

module.exports = {
    mode: 'development',
    entry: './docs/js/scripts.js',
    output: {
        path: path.resolve(__dirname, './docs/dist'),
        filename: 'index.bundle.js',
    },
};