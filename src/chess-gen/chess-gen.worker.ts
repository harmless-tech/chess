self.onmessage = async ({}) => {
    const { test } = await import("../../wasm/pkg");
    test();
};

export {}

// const { run, test } = await import("../wasm/pkg");
// test();

// self.onmessage = ({ data: { ask } }) => {
//     self.postMessage({
//         answer: 42
//     });
// }

// self.onmessage = async ({ data: { ask1, ask2 } }) => {
//     console.log("Hello!");
//     const { run, test } = await import("../wasm/pkg");
//     run();
//     test();

//     self.postMessage({
//         answer: 420
//     });
// }

// export {}

// import * as Comlink from "comlink";

// const { test } = await import("../../wasm/pkg");

// export type VoidConstructor = { new (): void }
// export default test;

// Comlink.expose({
//     test
// });
