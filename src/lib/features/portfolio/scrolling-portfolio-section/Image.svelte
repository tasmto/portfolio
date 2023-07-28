<script lang="ts">
	export let src: string;
	export let alt: string;

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	let isInView: boolean;
	let scrollDirection: ScrollDirection | 'up' | 'down' | undefined;
	const options: Options = {
		rootMargin: '-100px'
		// unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical as ScrollDirection;
	};
</script>

<img
	{src}
	{alt}
	use:inview={options}
	on:inview_change={handleChange}
	class:animate={isInView}
	class:animateFromBottom={scrollDirection === 'down'}
	class:animateFromTop={scrollDirection === 'up'}
/>

<style>
	img {
		height: 110%;
		width: 100%;
		object-fit: cover;
		background: var(--color-gray-light);
	}

	.animate {
		opacity: 0;
		transform: scale(0.9);
		transition: opacity 300ms ease-in-out, transform 1s ease-in-out;
	}
	.animateFromBottom {
		opacity: 1;
		transform: scale(1.1);
	}
	.animateFromTop {
		opacity: 1;
		transform: scale(1);
	}
</style>
