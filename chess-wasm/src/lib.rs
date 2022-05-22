use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn run() {
    #[cfg(feature = "console_error_panic_hook")] {
        console_error_panic_hook::set_once();
    }

    alert("Hello, {{project-name}}!");
}
