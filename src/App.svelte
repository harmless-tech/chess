<script lang="ts">
	function onload() {
		let chessTag = document.createElement("script");
		chessTag.src = "/chess.js";
		chessTag.defer = true;
		document.getElementsByTagName("head")[0].appendChild(chessTag);
	}
</script>

<main>
	<h1>Hello There!</h1>
</main>

<svelte:window on:load={onload}/>

<style global lang="scss">
	@import "./src/styles.scss";
</style>
 