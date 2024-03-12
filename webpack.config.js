const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        // key: "path/fileName.js"
        index: "./index.js"
    },

    output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, "./"),
    },

    devServer: {
        hot: true,
        static: {
            watch: true,
            directory: "./"
        }
    }
}