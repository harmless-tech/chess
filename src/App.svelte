<script lang="ts">
	import Chess from "./views/Chess.svelte";
	import FeatureError from "./views/FeatureError.svelte";

	export let chess: boolean;
	export let checkFeaturesMsg: string;
	export let hidden = false;

	function press() {
		hidden = !hidden;
	}
</script>

<main class="d-flex container min-vw-100 vw-100 min-vh-100 vh-100">
	{#if chess}
		<Chess/>
	{:else}
		<FeatureError bind:chess={chess} checkFeaturesMsg={checkFeaturesMsg}/>
	{/if}
</main>

<!-- <svelte:window on:load={onload}/> -->

<!-- <button on:click={press}>Click Me!</button>

{#if !hidden}
<div>
	<h1>Cats</h1>
</div>
{/if} -->

<style lang="scss">
</style>
 