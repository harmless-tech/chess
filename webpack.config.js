const path = require("path");
const glob = require("glob");
const sveltePreprocess = require("svelte-preprocess");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");

const mode = process.env.NODE_ENV;
const prod = mode !== "development";

module.exports = {
    entry: "./src/main.ts",
    devtool: prod ? false : "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public"),
        clean: true,
        library: "Chess",
    },
    resolve: {
		alias: {
			svelte: path.dirname(require.resolve("svelte/package.json"))
		},
		extensions: [".mjs", ".js", ".ts", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"]
	},
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
            test: /\.svelte$/,
            use: {
                loader: "svelte-loader",
                options: {
                    compilerOptions: {
                        dev: !prod
                    },
                    emitCss: prod,
                    hotReload: !prod,
                    preprocess: sveltePreprocess({
                        sourceMap: !prod,
                        renderSync: true,
                        postcss: true
                    })
                }
            }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "wasm"),
            forceMode: prod ? "production" : "development"
        }),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "." }
            ]
        }),
        new MiniCssExtractPlugin({
			filename: "bundle.css"
		}),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.resolve(__dirname, "src")}/**/*`,  { nodir: true }),
        })
    ],
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true
    },
    devServer: {
        hot: true,
        port: "8080"
    }
}
