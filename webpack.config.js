const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "fabricator")
                ],
                exclude: /(node_modules|prism\.js)/,
                loader: 'babel-loader',
                query: {
                    presets: ["stage-3"]
                }
            }
        ]
    }
};