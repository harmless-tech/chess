addEventListener("connect", e => {
    let port = (e as any).ports[0];

    port.onmessage = async ({ data: { i } }) => {
        const { test } = await import("../../wasm/pkg");
        test();
        port.postMessage({ i: i });
    };
})

export {}
