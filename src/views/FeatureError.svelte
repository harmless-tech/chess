<script lang="ts">
    export let chess: boolean;
    export let checkFeaturesMsg: string;
</script>

<div class="feature-error d-flex container vh-100 align-items-center justify-content-center">
    <div class="align-self-center text-center">
        <h1 class="mb-4">Feature Error</h1>
        <p>{checkFeaturesMsg}</p>
        <p>Try updating or switching your browser.</p>
        <p>If you are using Safari try the <a class="link-info" href="https://developer.apple.com/safari/resources/">Safari Technology Preview</a>.</p>
        <br>
        <p>You can press the button below to try and load the game anyways.</p>
        <button class="btn btn-primary" on:click={() => chess = true}>Force Game Load</button>
    </div>
</div>

<style lang="scss">
</style>
 