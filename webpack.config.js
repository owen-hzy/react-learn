module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname,
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: "./"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
