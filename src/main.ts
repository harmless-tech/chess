import "./styles.scss";

import ChessGen from "./chess-gen/chess-gen";
// ChessGen.test();

(async () => {
	for(let i = 0; i < 100; i++) {
		ChessGen.test().then(num => {
			let copy = i;
			console.log(`e: ${copy} ${num}`);
		});
	}
})();

export function callGen() {
	return ChessGen.test();
}

import App from "./App.svelte";

const app = new App({
	target: document.body
});

export default app;
