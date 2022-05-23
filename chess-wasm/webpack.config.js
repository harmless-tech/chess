const path = require("path")
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    // devtool: "source-map",
    output: {
        filename: "chess.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        library: "ChessWASM"
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: __dirname
        }),
        new HtmlWebpackPlugin()
    ],
    experiments: {
        asyncWebAssembly: true
    }
}
