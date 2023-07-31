<script lang="ts">
	export let technologies: {
		name: string;
		image: string;
	}[] = [];
	// Technologies divided into 3 different arrays
	const techScrollerTechnologies = [
		technologies.slice(0, technologies.length / 3),
		technologies.slice(technologies.length / 3, (technologies.length / 3) * 2),
		technologies.slice((technologies.length / 3) * 2, technologies.length)
	];
</script>

<div class="tech-scroller--container">
	{#each techScrollerTechnologies as group, index}
		<div
			class="tech-scroller"
			style={`  animation-direction: ${index % 2 ? 'alternate-reverse' : 'alternate'};
            animation-duration: ${index * 0.7 + 10}s;
            `}
			on:mouseenter={(e) => {
				console.log('enter');
				// stop animation
				e.currentTarget.style.animationPlayState = 'paused';
			}}
			on:mouseleave={(e) => {
				console.log('leave');
				// resume animation
				e.currentTarget.style.animationPlayState = 'running';
			}}
		>
			{#each group as technology}
				<a
					class="tech-scroller--item text-outline"
					href="#"
					on:mouseenter={(e) => {
						e.currentTarget.classList.remove('text-outline');
					}}
					on:mouseleave={(e) => {
						e.currentTarget.classList.add('text-outline');
					}}
				>
					<img src={technology.image} alt={technology.name} />
					<figcaption class="text-size-2 text-size-1-mobile fw-bold line-120">
						{technology.name}
					</figcaption>
				</a>
			{/each}
		</div>
	{/each}
</div>

<style>
	.tech-scroller--container {
		padding: 6rem 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		overflow-x: clip;
		max-width: 100%;
	}
	.tech-scroller {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		gap: 4rem;
		width: 100%;
		animation: scrollXAlternate 10s linear infinite alternate-reverse;
	}

	@keyframes scrollXAlternate {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-130%);
		}
	}
	.tech-scroller--item {
		display: contents;
		gap: 2rem;
		width: 100%;
	}
	.tech-scroller--item:not(.text-outline) {
		text-decoration: underline;
		color: var(--color-text);
	}
	.tech-scroller--item img {
		width: 100%;
		height: 4rem;
		flex: 1;
		display: inline;
		border-radius: 1rem;
		object-fit: cover;
		margin-right: -2rem;
	}
	.tech-scroller--item:hover img {
		filter: grayscale(100%);
	}
	.tech-scroller--item figcaption {
		flex: 1;
		display: inline;
		transition: color 0.2s ease-in-out;
	}
</style>
