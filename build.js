const fsExtra = require("fs-extra");
const mkdirp = require("mkdirp");
const path = require("path");
const managePath = require("manage-path")
const rimraf = require("rimraf");
const exec = require("child_process").exec;
const execSync = require("child_process").execSync;

const projectRoot = __dirname;
const frontendDir = path.join(projectRoot, "frontend");
const wasmDir = path.join(projectRoot, "chess-wasm");

// Install and build workspace projects
const install1 = exec("yarn install", {
    cwd: frontendDir,
    encoding: "utf8"
});
const install2 = exec("yarn install", {
    cwd: wasmDir,
    encoding: "utf8"
});
console.log(install1.toString());
console.log(install2.toString());

let alterPath = managePath(process.env);
alterPath.push(path.join(process.env.HOME, ".cargo/bin"));
execSync("wasm-pack build --release", {
    cwd: wasmDir
});

execSync("yarn build");

// Move everything to /public
rimraf.sync("./public");
mkdirp.sync("./public");

// const public = path.join(projectRoot, );
fsExtra.copySync("./frontend/public/", "./public/");
fsExtra.copySync("./chess-wasm/dist/","./public/", {
    filter: (src, dest) => src.indexOf("index.html") == -1
});
