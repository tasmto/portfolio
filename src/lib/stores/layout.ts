import { onDestroy, onMount } from 'svelte';
import { writable } from 'svelte/store';

const siteBackgroundColor = () => {
	const { subscribe, update, set } = writable<string | undefined>(undefined);
	const setBackgroundColor = (color: string) => set(color);
	const resetBackgroundColor = () => set(undefined);

	return {
		subscribe,
		setBackgroundColor,
		resetBackgroundColor
	};
};
export const siteBG = siteBackgroundColor();

const toggleNavbar = () => {
	// Navbar hide and show
	const { subscribe, set } = writable<boolean>(false);
	const showNavbar = () => set(false);
	const hideNavbar = () => set(true);

	return {
		subscribe,
		showNavbar,
		hideNavbar
	};
};
export const hideNavbar = toggleNavbar();

siteBG.subscribe((value?: string) => {
	if (typeof window !== 'undefined') {
		document.body.style.backgroundColor = value || '';
	}
});
