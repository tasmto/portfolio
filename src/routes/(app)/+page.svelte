<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	import NavBar from '$lib/components/navigation/navbar/Navbar.svelte';
	import ScrollingPortfolioCards from '$lib/features/portfolio/scrolling-portfolio-section/ScrollingPortfolioCards.svelte';
	import TechScroller from '$lib/features/portfolio/technologies-scroller/TechScroller.svelte';

	const portfolioItems = [
		{
			title: 'Example project number 1 - title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.',
			slug: 'example-project-number-1',
			image: 'https://source.unsplash.com/random?122'
		},
		{
			title: 'Example project number 2 - title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.',
			slug: 'example-project-number-2',
			image: 'https://source.unsplash.com/random?123'
		},
		{
			title: 'Example project number 3 - title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.',
			slug: 'example-project-number-3',
			image: 'https://source.unsplash.com/random?1224'
		},
		{
			title: 'Example project number 4 - title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl nislLorem ipsum dolor sit amet, consectetur adipiscing elit.',
			slug: 'example-project-number-4',

			image: 'https://source.unsplash.com/random?1225'
		}
	];

	const technologies = [
		{
			name: '.NET',
			image: 'https://source.unsplash.com/random?1225'
		},
		{
			name: 'TypeScript',
			image: 'https://source.unsplash.com/random?1227'
		},
		{
			name: 'JavaScript',
			image: 'https://source.unsplash.com/random?1228'
		},
		{
			name: 'React',
			image: 'https://source.unsplash.com/random?1229'
		},
		{
			name: 'Svelte',
			image: 'https://source.unsplash.com/random?1220'
		},
		{
			name: 'SvelteKit',
			image: 'https://source.unsplash.com/random?1221'
		},
		{
			name: 'NodeJS',
			image: 'https://source.unsplash.com/random?1222'
		},
		{
			name: 'Express',
			image: 'https://source.unsplash.com/random?1223'
		},
		{
			name: 'MongoDB',
			image: 'https://source.unsplash.com/random?1224'
		},
		{
			name: 'SQL',
			image: 'https://source.unsplash.com/random?1225'
		},
		{
			name: 'GraphQL',
			image: 'https://source.unsplash.com/random?1226'
		},
		{
			name: 'HTML',
			image: 'https://source.unsplash.com/random?1227'
		},
		{
			name: 'CSS',
			image: 'https://source.unsplash.com/random?1228'
		},
		{
			name: 'TailwindCSS',
			image: 'https://source.unsplash.com/random?1229'
		},
		{
			name: 'Bootstrap',
			image: 'https://source.unsplash.com/random?1220'
		},
		{
			name: 'MaterialUI',
			image: 'https://source.unsplash.com/random?1221'
		},
		{
			name: 'Git',
			image: 'https://source.unsplash.com/random?1222'
		},
		{
			name: 'GitHub',
			image: 'https://source.unsplash.com/random?1223'
		},
		{
			name: 'GitLab',
			image: 'https://source.unsplash.com/random?1224'
		},
		{
			name: 'Jira',
			image: 'https://source.unsplash.com/random?1225'
		},
		{
			name: 'Confluence',
			image: 'https://source.unsplash.com/random?1226'
		}
	];
</script>

<div class="hero-container container">
	<div class="hero-content--container">
		<h1 class="text-size-2 text-size-1-mobile fw-bold line-120">
			Hey there, my name is Tashinga & <span class="text-outline">I am a full stack developer.</span
			>
		</h1>
		<Button on:click={() => alert(2)} style="align-self: start">Go to my portfolio</Button>
	</div>
	<div class="image" />
</div>

<ScrollingPortfolioCards {portfolioItems} />

<section>
	<article class="text-container--2 text-center container">
		<h2 class="text-size-3 text-size-1-mobile fw-bold line-120">
			Here are some of the technologies I work with
		</h2>
		<p class=" line-150 text-size-7">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt
			lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel
			tincidunt lacinia.
		</p>
	</article>
	<TechScroller {technologies} />
</section>

<style>
	.hero-container {
		padding: 3rem 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 4rem;
		place-items: center;
		min-height: 80vh;
	}
	@media (min-width: 350px) {
		.hero-container {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	.hero-container .image {
		height: 400px;
		width: 100%;
		background-color: var(--color-gray);
	}

	.hero-content--container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.hero-container {
			padding: 3rem 2rem;
			grid-template-columns: 5fr 3fr;
			gap: 4rem;
		}
		.hero-content--container {
			gap: 3rem;
		}
		.hero-container .image {
			height: 70vh;
			max-height: 900px;
		}
	}

	.text-container--2 {
		max-width: 600px;
		margin: 0 auto;
		display: grid;
		gap: 2rem;
		margin-top: 6rem;
	}
</style>
