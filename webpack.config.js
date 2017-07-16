'user strict'

const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port:3000
    }
}