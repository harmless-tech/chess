const fs = require("fs");
const fsExtra = require("fs-extra");
const mkdirp = require("mkdirp");
const path = require('path')
const managePath = require('manage-path')
const rimraf = require("rimraf");
const exec = require("child_process").exec;
const execSync = require("child_process").execSync;

const projectRoot = __dirname;

// Install rust
execSync("curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y");
let alterPath = managePath(process.env);
alterPath.push(path.join(process.env.HOME, ".cargo/bin"));
console.log(process.env.HOME)
console.log(process.env.PATH)
execSync("rustup target add wasm32-unknown-unknown");

// Install wasm-pack
execSync("curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y");
