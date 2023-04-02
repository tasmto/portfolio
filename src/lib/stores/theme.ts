import { onDestroy, onMount } from 'svelte';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const siteTheme = () => {
	const { subscribe, update } = writable<Theme>(
		typeof localStorage !== 'undefined' ? localStorage?.theme || 'light' : 'light'
	);
	const toggleTheme = () => update((cur) => (cur === 'dark' ? 'light' : 'dark'));

	return {
		subscribe,
		toggleTheme
	};
};
export const theme = siteTheme();

theme.subscribe((value: Theme) => {
	if (typeof window !== 'undefined') {
		localStorage.theme = value;
		document.body.classList.toggle(value + '-theme');
		document.body.classList.remove(value === 'light' ? 'dark-theme' : 'light-theme');
	}
});
