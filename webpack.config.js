const path = require("path");
const sveltePreprocess = require("svelte-preprocess");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
    entry: "./src/main.ts",
    devtool: prod ? false : "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
        library: "Chess"
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
                    preprocess: sveltePreprocess({ sourceMap: !prod })
                }
            }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: !prod,
                            importLoaders: 2
                        }
                    },
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
            crateDirectory: path.resolve(__dirname, "wasm")
        }),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "." }
            ]
        }),
        new MiniCssExtractPlugin({
			filename: "bundle.css"
		})
    ],
    experiments: {
        asyncWebAssembly: true
    }
}
