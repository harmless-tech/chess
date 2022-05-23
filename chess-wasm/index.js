import("./pkg").then(m => m.run());

export async function test() {
    const wasm = await import("./pkg");
    wasm.test();
}
