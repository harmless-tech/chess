// import "bootstrap/scss/bootstrap.scss";
import "./styles.scss";

import checkFeatures from "./feature-check/feature-check";
let features = checkFeatures();

// import ChessGen from "./chess-gen/chess-gen";
// // ChessGen.test();
// ChessGen.number();
// setInterval(() => {
// 	ChessGen.number();
// }, 1000);

// ChessGen.array();

// (async () => {
// 	for(let i = 0; i < 100; i++) {
// 		ChessGen.test().then(num => {
// 			let copy = i;
// 			console.log(`e: ${copy} ${num}`);
// 		});
// 	}
// })();

// export function callGen() {
// 	return ChessGen.test();
// }

import App from "./App.svelte";

console.log("FE: " + features.check);
const app = new App({
	target: document.body,
	props: {
		chess: false,//features.check,
		checkFeaturesMsg: features.msg
	}
});

export default app;
