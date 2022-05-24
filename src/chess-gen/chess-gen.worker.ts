import { CGProtocol } from "./chess-gen-shared";

addEventListener("connect", e => { // self.onconnect does not exist yet.
    let port: MessagePort = (e as any).ports[0];

    port.onmessage = ({ data: { protocol, data } }: { data: { protocol: CGProtocol, data: any } }) => {
        switch(protocol) {
            case CGProtocol.TEST: {
                test(port, data);
                break;
            }
            case CGProtocol.NUMBER: {
                number(port, data);
                break;
            }
            case CGProtocol.ARRAY: {
                array(port, data);
                break;
            }
            default: {
                console.error(`Protocol ${protocol} is invalid for chess gen worker.`);
            }
        }
    };
});

async function test(port: MessagePort, data: { i: number }): Promise<void> {
    const { test } = await import("../../wasm/pkg");
    test();
    port.postMessage({ i: data.i });
}

async function number(port: MessagePort, _: {}): Promise<void> {
    const { number } = await import("../../wasm/pkg");
    let i = number();
    port.postMessage({ i });
}

async function array(port: MessagePort, _: {}): Promise<void> {
    const { array } = await import("../../wasm/pkg");
    let arr = array();
    port.postMessage({ array: arr });
}

export {}
