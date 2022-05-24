// --- Worker Check ---
function checkWorkers(): boolean {
    return window.Worker !== undefined;
}

function checkSharedWorkers(): boolean {
    return window.SharedWorker !== undefined;
}

// For future reference when Firefox starts to support this.
function checkWorkerModule(): boolean {
    let support = false;
    const test = {
        get type() { support = true; return null; }
    };
    try {
        new Worker("data:,", test).terminate();
    } finally {
        return support;
    }
}

// --- Wasm Check ---
function checkWasm(): boolean {
    return window.WebAssembly !== undefined;
}

// --- Check All ---
export default function checkFeatures(): { check: boolean, msg: string } {
    console.debug("Checking Features...\nNote: Feature detection is not a guarantee of support or non-support of that feature by your browser.");

    let check1 = checkWorkers();
    console.debug("Feature Workers: " + check1);
    if(!check1) {
        return {
            check: false,
            msg: "Workers support could not be detected."
        };
    }

    let check2 = checkSharedWorkers();
    console.debug("Feature SharedWorkers: " + check2);
    if(!check2) {
        return {
            check: false,
            msg: "SharedWorkers support could not be detected."
        };
    }

    console.debug("Feature WorkerType Module: " + checkWorkerModule());

    let check4 = checkWasm();
    console.debug("Feature Wasm: " + check4);
    if(!check4) {
        return {
            check: false,
            msg: "Wasm support could not be detected."
        };
    }

    return {
        check: true,
        msg: "Feature detect thinks that all features needed are supported."
    };
}
