//webpack.config.js

var webpack = require('webpack')

module.exports = function(env) {
    return {
        entry: "./js/app.js",
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
    }
}