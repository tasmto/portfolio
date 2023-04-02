<script context="module" lang="ts">
	import NavBar from '$lib/components/navigation/navbar/Navbar.svelte';
	import { locale, loadTranslations } from '$lib/translations';

	import '@fontsource/manrope';

	/** @type {import('./$types').LayoutServerLoad} */
	export const load = async ({ url }: any) => {
		const { pathname } = url;

		const defaultLocale = 'en'; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<NavBar />
<main id="main-content">
	<slot />
</main>

<style>
	@import '../../lib/styles/reset.css';
	@import '../../lib/styles/colors.css';
	@import '../../lib/styles/typography.css';
	@import '../../lib/styles/utilities.css';

	main {
		margin-top: 5rem;
	}

	@media (min-width: 768px) {
		main {
			margin-top: 4rem;
		}
	}
</style>
