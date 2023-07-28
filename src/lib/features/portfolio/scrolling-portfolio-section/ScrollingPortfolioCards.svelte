<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	import Image from './Image.svelte';
	import { siteBG as siteBackgroundColor, hideNavbar } from '$lib/stores/layout';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let portfolioContainerElement: HTMLElement | undefined = undefined;
	const options: Options = {
		// rootMargin: '-50px'
		root: portfolioContainerElement
		// threshold: 0.2
	};

	export let portfolioItems: {
		title: string;
		description: string;
		image: string;
		slug: string;
	}[];
</script>

<div class="portfolio-scrolling-cards--container" bind:this={portfolioContainerElement}>
	{#each portfolioItems as item, index}
		<div
			class="portfolio-scrolling-card"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				if (index === 0 && detail.scrollDirection.vertical === 'down')
					siteBackgroundColor.setBackgroundColor('var(--color-primary)');
				if (index === 0 && detail.scrollDirection.vertical === 'down') hideNavbar.hideNavbar();
				if (index === 0 && detail.scrollDirection.vertical === 'up') hideNavbar.showNavbar();
			}}
			on:inview_leave={({ detail }) => {
				if (
					(index === 0 && detail.scrollDirection.vertical === 'up') ||
					(index === portfolioItems.length - 1 && detail.scrollDirection.vertical === 'down')
				) {
					siteBackgroundColor.resetBackgroundColor();
					console.log(
						index === 0 && detail.scrollDirection.vertical === 'up',
						index === portfolioItems.length - 1 && detail.scrollDirection.vertical === 'down'
					);
				}
				if (index === portfolioItems.length - 1 && detail.scrollDirection.vertical === 'up') {
					hideNavbar.showNavbar();
				}
			}}
		>
			<h3 class="text-size-5 text-size-5-mobile fw-bold">{item.title}</h3>

			<figure class="portfolio-scrolling-card--content-container">
				<figcaption class="content">
					<h1 class="text-size-4 fw-bold text-size-4-mobile">{item.title}</h1>
					<p class="line-150">{item.description}</p>
					<Button class="button" href={`/portfolio/${item.slug}`}>Read more</Button>
				</figcaption>
				<div class="image">
					<Image src={item.image} alt={item.title} />
				</div>
			</figure>
		</div>
	{/each}
</div>

<style>
	.portfolio-scrolling-cards--container {
		position: relative;
		padding: 0 2rem;
	}

	.portfolio-scrolling-cards--container > div:not(:first-child) {
		margin-top: -2rem;
	}

	@media (min-width: 575px) {
		.portfolio-scrolling-cards--container
			.portfolio-scrolling-card:nth-last-child(even)
			.portfolio-scrolling-card--content-container
			.content {
			order: 2;
		}
	}

	.portfolio-scrolling-card {
		padding: 3rem 2rem 0;
		border-radius: 2rem 2rem 0 0;
		/* background-color: var(--color-inverse-text); */
		border: 1px solid var(--color-text);
		border-bottom-width: 0px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.portfolio-scrolling-card h3 {
		margin-bottom: 1rem;
		position: sticky;
		top: 7rem;
		display: none;
		/* margin-top: 1rem; */
		text-align: right;
		color: var(--color-text);
		opacity: 0.5;
	}
	@media (min-width: 575px) {
		.portfolio-scrolling-card h3 {
			display: block;
		}
	}
	.portfolio-scrolling-cards--container .portfolio-scrolling-card:nth-last-child(even) h3 {
		text-align: left;
	}

	.portfolio-scrolling-card--content-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		grid-template-rows: 1fr;
	}

	.portfolio-scrolling-card--content-container .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		gap: 2rem;
		padding-bottom: 4rem;
	}
	.portfolio-scrolling-card--content-container .content p {
		max-width: 400px;
	}
	.portfolio-scrolling-card--content-container .content .button {
		margin-top: 2rem;
	}
	.portfolio-scrolling-card--content-container .image {
		max-height: 400px;
		overflow: hidden;
		border-radius: 1.5rem;
		border: 1px solid var(--color-text);
	}
</style>
