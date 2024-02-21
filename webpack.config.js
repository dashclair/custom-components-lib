const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64:5]",
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
        ],
    },
};
