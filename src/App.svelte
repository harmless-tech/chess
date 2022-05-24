<script lang="ts">
	import Chess from "./views/Chess.svelte";
	import FeatureError from "./views/FeatureError.svelte";

	export let chess: boolean;
	export let checkFeaturesMsg: string;
</script>

<main class="d-flex container min-vw-100 vw-100 min-vh-100 vh-100">
	{#if chess}
		<Chess/>
	{:else}
		<FeatureError bind:chess={chess} checkFeaturesMsg={checkFeaturesMsg}/>
	{/if}
</main>

<style lang="scss">
</style>
 