<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	import { siteBG as siteBackgroundColor, hideNavbar } from '$lib/stores/layout';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let portfolioContainerElement: HTMLElement | undefined = undefined;
	const containerOptions: Options = {
		// rootMargin: '-200px',
		// root: portfolioContainerElement
		threshold: 0.2
	};
	const options: Options = {
		// rootMargin: '-50px'
		root: portfolioContainerElement,
		threshold: [0, 0.02, 0.05, 0.1, 0.5, 0.925, 0.95, 1]
	};

	export let portfolioItems: {
		title: string;
		description: string;
		image: string;
		slug: string;
	}[];
	const cardPercentages = Array(portfolioItems.length).fill(0);
</script>

<div
	class="portfolio-scrolling-cards--container"
	bind:this={portfolioContainerElement}
	use:inview={containerOptions}
	on:inview_enter={({ detail }) => {
		if (detail.scrollDirection.vertical === 'up') {
			// siteBackgroundColor.setBackgroundColor('var(--color-off-bg)');
			hideNavbar.hideNavbar();
		} else if (detail.scrollDirection.vertical === 'down') {
			console.log('enter', detail.scrollDirection.vertical);
			// siteBackgroundColor.resetBackgroundColor();
			hideNavbar.showNavbar();
		}
	}}
	on:inview_leave={({ detail }) => {
		siteBackgroundColor.resetBackgroundColor();
		hideNavbar.showNavbar();
	}}
>
	{#each portfolioItems as item, index}
		<h3
			class="text-size-5 text-size-5-mobile fw-bold"
			style={`bottom:  0;
			margin-top: -3rem;
		z-index: ${portfolioItems.length - index + 5};
		top:  ${index * 3.55 + 0.05 * index}rem;
		background-color: var(--color-inverse-text);
		`}
		>
			{item.title}
		</h3>
		<div
			class="portfolio-scrolling-card active"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				const percentage = Math.floor(detail.entry.intersectionRatio * 100);
				cardPercentages[index] = percentage;
				percentage > 50
					? detail.node.classList.add('active')
					: detail.node.classList.remove('active');
			}}
			on:inview_leave={({ detail }) => {
				cardPercentages[index] = 0;
				detail.node.classList.remove('active');
			}}
		>
			<figure class={`portfolio-scrolling-card--content-container`}>
				<figcaption class="content">
					<h1 class="text-size-4 fw-bold text-size-4-mobile">{item.title}</h1>
					<p class="line-150 text-size-7">
						{item.description}
					</p>
					<Button class="button" href={`/portfolio/${item.slug}`}>Read more</Button>
				</figcaption>
				<div class="image">
					<img src={item.image} alt={item.title} />
				</div>
			</figure>
		</div>
	{/each}
</div>

<style>
	.portfolio-scrolling-cards--container {
		position: relative;
		border-bottom: 1px solid var(--color-text);
	}

	.portfolio-scrolling-cards--container > div:not(:first-child) {
		margin-top: -2rem;
	}
	.portfolio-scrolling-cards--container > :last-child {
		padding-bottom: 0rem;
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
		padding: 3rem 4rem 4rem;
		border-radius: 0.2rem 0.2rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		/* Animated border */
		/* border: 1px solid var(--color-text); */
		border-bottom-width: 0px !important;
		transition: border-width 0.3s linear border-radius 0.3s linear background 0.3s linear;
	}
	.portfolio-scrolling-card.active,
	:nth-child(1).portfolio-scrolling-card {
		/* background-color: red !important; */
		border-radius: 2rem 2rem 0 0;
	}

	.portfolio-scrolling-cards--container h3 {
		padding: 1rem 4rem;
		display: none;
		text-align: right;
		color: var(--color-text);
		opacity: 1;
		background-color: var(--color-inverse-text);
		transition: translate 0.1s linear opacity 0.3 ease-in;
		border-top: solid 1px var(--color-text);
	}
	@media (min-width: 575px) {
		.portfolio-scrolling-cards--container h3 {
			display: block;
			position: sticky;
			bottom: 0;
		}
	}

	.portfolio-scrolling-cards--container h3:nth-last-child(even) {
		text-align: left;
	}

	.portfolio-scrolling-card--content-container {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		grid-template-rows: 1fr;
		display: grid;
	}
	.active .portfolio-scrolling-card--content-container {
		height: auto;
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
	.portfolio-scrolling-card--content-container .image img {
		height: 110%;
		width: 100%;
		object-fit: cover;
		background: var(--color-gray-light);
		transition: transform 0.3s ease-in-out;
		transform: scale(1);
	}
	.portfolio-scrolling-card.active .image img {
		transform: scale(1.1);
	}
</style>
