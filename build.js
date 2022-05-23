const path = require("path");
const managePath = require("manage-path")
const execSync = require("child_process").execSync;

const projectRoot = __dirname;
const wasmDir = path.join(projectRoot, "wasm");

let alterPath = managePath(process.env);
alterPath.push(path.join(process.env.HOME, ".cargo/bin"));

// Install Rust
execSync("curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y");
execSync("rustup target add wasm32-unknown-unknown");
// wasm-pack should be installed globally through npm before this is run.

// Build Wasm
// console.log(execSync("wasm-pack build --release", {
//     cwd: wasmDir,
//     encoding: "utf8"
// }).toString());

// Build Project
console.log(execSync("yarn build", {
    encoding: "utf8"
}).toString());
