use wasm_bindgen::prelude::*;
use rand::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(msg: &str);
}

#[wasm_bindgen]
pub fn test() {
    let mut rng = thread_rng();
    let num: u64 = rng.gen_range(5..=10);

    log(format!("I am a worker you know! {}", num).as_str());
}

#[wasm_bindgen]
pub fn number() -> u64 {
    256
}

#[wasm_bindgen]
pub fn array() -> js_sys::Uint32Array {
    let mut v: Vec<u32> = Vec::new();
    v.push(3);
    v.push(3);
    v.push(3);
    js_sys::Uint32Array::from(&v[..])
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    log("Wasm worker start!");

    let mut rng = thread_rng();
    let num: u64 = rng.gen_range(5..=10);

    log(format!("START! {}", num).as_str());

    Ok(())
}
