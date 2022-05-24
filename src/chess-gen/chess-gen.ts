import { CGProtocol } from "./chess-gen-shared";

let i = 0;

function getSharedWorker(): SharedWorker {
    return new SharedWorker(new URL("./chess-gen.worker", import.meta.url), { name: "chess-gen" });
}

export default abstract class ChessGen {
    private static readonly worker = new Worker(new URL("./chess-gen.worker", import.meta.url), { name: "chess-gen" });

    public static test(): Promise<number> {
        const worker = getSharedWorker();
        return new Promise<number>(resolve => {
            worker.port.postMessage({ protocol: CGProtocol.TEST, data: { i: i++ } });
            worker.port.onmessage = ({ data: { i } }) => {
                console.log("msg " + i);
                resolve(i);
            };
        });
    }

    public static number(): Promise<number> {
        const worker = getSharedWorker();
        return new Promise<number>(resolve => {
            worker.port.postMessage({ protocol: CGProtocol.NUMBER, data: {} });
            worker.port.onmessage = ({ data: { i } }) => {
                console.log("number " + i);
                resolve(i);
            };
        });
    }

    public static array(): Promise<Uint32Array> {
        const worker = getSharedWorker();
        return new Promise<Uint32Array>(resolve => {
            worker.port.postMessage({ protocol: CGProtocol.ARRAY, data: {} });
            worker.port.onmessage = ({ data: { array } }) => {
                console.log("array " + array);
                resolve(array);
            };
        });
    }
}
