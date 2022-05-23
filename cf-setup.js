const path = require('path')
const managePath = require('manage-path')
const execSync = require("child_process").execSync;

// Install rust
execSync("curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y");
let alterPath = managePath(process.env);
alterPath.push(path.join(process.env.HOME, ".cargo/bin"));
execSync("rustup target add wasm32-unknown-unknown");

// wasm-pack should be installed through yarn or npm globally before this is run. (Cloudflare)
