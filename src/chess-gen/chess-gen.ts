import * as CG from "./chess-gen-protocols";

let i = 0;

export default abstract class ChessGen {
    private static readonly worker = new Worker(new URL("./chess-gen.worker", import.meta.url));

    public static test(): Promise<number> {
        const worker = new SharedWorker(new URL("./chess-gen.worker", import.meta.url));

        return new Promise<number>(resolve => {
            worker.port.postMessage({ i: i++ });
            worker.port.onmessage = ({ data: { i } }) => {
                console.log("msg " + i);
                resolve(i);
            };
        });
    }
}
