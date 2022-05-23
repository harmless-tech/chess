use wasm_bindgen::prelude::*;
// use web_sys::window;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    type HTMLDocument;
    static document: HTMLDocument;
    #[wasm_bindgen(method)]
    fn createElement(this: &HTMLDocument, tag_name: &str) -> Element;
    #[wasm_bindgen(method, getter)]
    fn body(this: &HTMLDocument) -> Element;

    type Element;
    #[wasm_bindgen(method, setter = innerHTML)]
    fn set_inner_html(this: &Element, html: &str);
    #[wasm_bindgen(method, js_name = appendChild)]
    fn append_child(this: &Element, other: Element);

    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn test() {
    alert("This is a test!");
}

#[wasm_bindgen]
pub fn run() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    let val = document.createElement("p");
    val.set_inner_html("Hello from Rust!");
    document.body().append_child(val);

    // let document = window().unwrap().document().unwrap();
    // let p: web_sys::Node = document.create_element("p")?.into();
    // p.set_text_content(Some("Welcome!"));

    alert("Hello, {{project-name}}!");

    Ok(())
}
