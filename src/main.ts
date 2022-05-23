import "./styles.scss";

import ChessGen from "./chess-gen/chess-gen";
ChessGen.test();

export function callGen() {
	ChessGen.test();
}

// import * as Comlink from "comlink";
// (async function() {
// 	const worker = new Worker(new URL("./chess-gen/chess.worker", import.meta.url));
// 	const { test } = await Comlink.wrap(worker);
	
// 	test();
// })();

// import * as Comlink from "comlink";

// function resolveAfter2Seconds() {
// 	return new Promise(resolve => {
// 	  setTimeout(() => {
// 		resolve(null);
// 	  }, 2000);
// 	});
//   }

// (async function() {
// 	const worker = new Worker(new URL("./chess-gen/chess.worker", import.meta.url));
// 	const obj = Comlink.wrap(worker) as any;
// 	console.log("Start!");
// 	(async () => {
// 		// await resolveAfter2Seconds();
// 		// console.log(24);
// 		await obj.test();
// 	})();
// 	console.log("End!");
// })();

// const worker = new Worker(new URL("./chess.worker", import.meta.url));
// worker.postMessage({
// 	ask: 'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
// });
// worker.onmessage = ({ data: { answer } }) => {
// 	console.log(answer);
// };
// worker.postMessage({
// 	ask1: 'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
// 	ask2: 'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
// });

import App from "./App.svelte";

const app = new App({
	target: document.body
});

export default app;
