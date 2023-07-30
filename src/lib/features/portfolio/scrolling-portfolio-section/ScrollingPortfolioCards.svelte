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
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
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
			siteBackgroundColor.setBackgroundColor('var(--color-off-bg)');
			hideNavbar.hideNavbar();
		} else if (detail.scrollDirection.vertical === 'down') {
			console.log('enter', detail.scrollDirection.vertical);
			siteBackgroundColor.resetBackgroundColor();
			hideNavbar.showNavbar();
		}
	}}
	on:inview_leave={({ detail }) => {
		siteBackgroundColor.resetBackgroundColor();
		hideNavbar.showNavbar();
	}}
>
	{#each portfolioItems as item, index}
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
			class:card0={cardPercentages[index] < 20}
			class:card20={cardPercentages[index] >= 20 && cardPercentages[index] < 40}
			class:card40={cardPercentages[index] >= 40 && cardPercentages[index] < 60}
			class:card60={cardPercentages[index] >= 60 && cardPercentages[index] < 80}
			class:card80={cardPercentages[index] >= 80 && cardPercentages[index] < 90}
			class:card100={cardPercentages[index] >= 90}
			style={`--cardPercentage: ${cardPercentages[index]}%`}
		>
			<h3 class="text-size-5 text-size-5-mobile fw-bold">{item.title}</h3>

			<figure class={`portfolio-scrolling-card--content-container ${cardPercentages[index]}`}>
				<figcaption class="content">
					<h1 class="text-size-4 fw-bold text-size-4-mobile">{item.title}</h1>
					<p
						class="line-150"
						style={`opacity: ${cardPercentages[index] > 30 ? 1 : 0};
						transition: opacity 0.3s linear ${cardPercentages[index] > 30 ? 0.3 : 0}s;
					`}
					>
						{item.description}
					</p>
					<Button
						class="button"
						href={`/portfolio/${item.slug}`}
						style={`transform: translateX(${
							cardPercentages[index] > 50 ? 0 : index % 2 ? 30 : -30
						}%);
							opacity: ${cardPercentages[index] > 50 ? 1 : 0};
							transition: transform 0.7s linear, opacity 0.3s linear;
						`}>Read more</Button
					>
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
		--borderWidth: 2px;
		--borderInActiveColor: rgb(136, 136, 136);
		--borderActiveColor: var(--color-text);
		padding: 3rem 2rem 0;
		border-radius: 0.2rem 0.2rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		/* Animated border */
		border: var(--borderWidth) solid transparent;
		border-bottom-width: 0px !important;
		transition: border-width 0.3s linear border-radius 0.3s linear background 0.3s linear;
	}
	.portfolio-scrolling-card.active,
	:nth-child(1).portfolio-scrolling-card {
		/* background-color: red !important; */
		border-radius: 2rem 2rem 0 0;
	}

	.portfolio-scrolling-card.card0 {
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderInActiveColor) 0deg,
					var(--borderInActiveColor) 75deg,
					var(--borderInActiveColor) 115deg,
					var(--borderInActiveColor) 180deg,
					var(--borderInActiveColor) 233deg,
					var(--borderInActiveColor) 297deg,
					var(--borderInActiveColor) 358deg,
					var(--borderInActiveColor) 360deg
				)
				border-box;
	}
	.portfolio-scrolling-card.card20 {
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderActiveColor) 0deg,
					var(--borderActiveColor) 75deg,
					var(--borderInActiveColor) 115deg,
					var(--borderInActiveColor) 175deg,
					var(--borderInActiveColor) 235deg,
					var(--borderInActiveColor) 300deg,
					var(--borderInActiveColor) 358deg,
					var(--borderInActiveColor) 360deg
				)
				border-box;
	}
	.portfolio-scrolling-card.card40 {
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderActiveColor) 0deg,
					var(--borderActiveColor) 75deg,
					var(--borderActiveColor) 115deg,
					var(--borderInActiveColor) 175deg,
					var(--borderInActiveColor) 235deg,
					var(--borderInActiveColor) 300deg,
					var(--borderInActiveColor) 358deg,
					var(--borderInActiveColor) 360deg
				)
				border-box;
	}
	.portfolio-scrolling-card.card60 {
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderActiveColor) 0deg,
					var(--borderActiveColor) 75deg,
					var(--borderActiveColor) 115deg,
					var(--borderActiveColor) 175deg,
					var(--borderInActiveColor) 235deg,
					var(--borderInActiveColor) 300deg,
					var(--borderInActiveColor) 358deg,
					var(--borderInActiveColor) 360deg
				)
				border-box;
	}
	.portfolio-scrolling-card.card80 {
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderActiveColor) 0deg,
					var(--borderActiveColor) 75deg,
					var(--borderActiveColor) 115deg,
					var(--borderActiveColor) 175deg,
					var(--borderActiveColor) 235deg,
					var(--borderInActiveColor) 300deg,
					var(--borderInActiveColor) 358deg,
					var(--borderInActiveColor) 360deg
				)
				border-box;
	}
	.portfolio-scrolling-card.card100 {
		--borderWith: 5px;
		background: linear-gradient(var(--color-inverse-text), var(--color-inverse-text)) padding-box,
			conic-gradient(
					from 180deg at 50% 50%,
					var(--borderActiveColor) 0deg,
					var(--borderActiveColor) 75deg,
					var(--borderActiveColor) 115deg,
					var(--borderActiveColor) 175deg,
					var(--borderActiveColor) 235deg,
					var(--borderActiveColor) 300deg,
					var(--borderActiveColor) 358deg,
					var(--borderActiveColor) 360deg
				)
				border-box;
	}

	.portfolio-scrolling-card h3 {
		margin-bottom: 1rem;
		display: none;
		text-align: right;
		color: var(--color-text);
		opacity: 0.5;
		transition: translate 0.1s linear opacity 0.3 ease-in;
	}
	@media (min-width: 575px) {
		.portfolio-scrolling-card h3 {
			display: block;
		}
	}

	:global(.portfolio-scrolling-card.card0 h3) {
		translate: 0 -250%;
		opacity: 0.5;
	}
	:global(.portfolio-scrolling-card.card20 h3) {
		translate: 0 -150%;
		opacity: 1;
	}
	:global(.portfolio-scrolling-card.card40 h3) {
		translate: 0 -100%;
		opacity: 1;
	}
	:global(.portfolio-scrolling-card.card60 h3) {
		translate: 0 -60%;
		opacity: 1;
	}
	:global(.portfolio-scrolling-card.card80 h3) {
		translate: 0 -40%;
		opacity: 0.8;
	}
	:global(.portfolio-scrolling-card.card100 h3) {
		translate: 0 -0%;
		opacity: 0.6;
	}

	.portfolio-scrolling-cards--container .portfolio-scrolling-card:nth-last-child(even) h3 {
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
