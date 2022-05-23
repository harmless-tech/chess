export default abstract class ChessGen {
    private static readonly worker = new Worker(new URL("./chess-gen.worker", import.meta.url));

    public static test() {
        this.worker.postMessage({});
    }
}

// import * as Comlink from "comlink";
// import test from "./chess.worker";
// import type {VoidConstructor} from "./chess.worker";

// export default class ChessGenProxy {
//     private worker: Worker;
//     private proxy: Comlink.Remote<void>|null;

//     constructor() {
//         this.worker = new Worker(new URL("./chess.worker", import.meta.url));
//         this.proxy = null;
//     }

//     public async generate(): Promise<void> {
//         if(this.proxy == null) {
//             const factory = Comlink.wrap<{ (): void }>(this.worker);
//             this.proxy = await factory.test();
//         }
//         return this.proxy;
//     }

//     public async dispose() {
//         if(this.proxy)
//             this.proxy[Comlink.releaseProxy]();
//         this.worker.terminate();
//     }
// }

// Provides a wrapping around the chess worker.
// import * as Comlink from "comlink";

// if(typeof(Worker)) {
//     console.info("Web workers supported by this browser.");
// } else {
//     console.error("Web workers are not supported by this browser.");
// } 

// const worker = new Worker(new URL("./chess.worker", import.meta.url));
// const { test } = await Comlink.wrap(worker);

// console.log("Run")
// test();
// console.log("Stop")

// export {
// }

// export class ChessGen {
//     private static readonly worker = new Worker(new URL("./chess.worker", import.meta.url));

//     public static async test() {
//         const { test } = await Comlink.wrap(this.worker);
//         test();
//     }
// }
