import "./styles.scss";

import * as Comlink from "comlink";

(async function() {
	const worker = new Worker(new URL("./chess.worker", import.meta.url));
	const { test } = await Comlink.wrap(worker);
	console.log("Start!");
	setInterval(() => {
		test();
	}, 1000);
	console.log("End!");
})();

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
