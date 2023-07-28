<script lang="ts">
	import config from '$lib/config/sanity/sanity.config';
	import SanityStudio from '$lib/utils/sanity-studio.svelte';
</script>

<SanityStudio {config} />

<style>
	body {
		margin: 0;
		padding: 0;
	}
</style>
