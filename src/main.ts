import "./styles.scss";

import checkFeatures from "./feature-check/feature-check";
let features = checkFeatures();

import App from "./App.svelte";
const app = new App({
	target: document.body,
	props: {
		chess: features.check,
		checkFeaturesMsg: features.msg
	}
});

export default app;
