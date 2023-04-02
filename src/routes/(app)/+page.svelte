<script lang="ts">
	import NavBar from '$lib/components/navigation/navbar/Navbar.svelte';
</script>

<div class="hero-container">
	<div class="hero-content--container">
		<h1 class="text-size-2 text-size-2-mobile fw-bold line-120">
			Hey there, my name is Tashinga and I am a full stack developer.
		</h1>
		<button class="primary text-size-5 text-size-4-mobile">Go to my portfolio</button>
	</div>
	<div class="image" />
</div>

<style>
	.hero-container {
		padding: 3rem 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 4rem;
		place-items: center;
	}

	.image {
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
	.hero-content--container button {
		align-self: start;
	}

	button.primary {
		background-color: var(--color-text);
		color: var(--color-inverse-text);
		padding: 1.35rem 2.75rem;
		border-radius: 4rem;
		border: none;
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
		.image {
			height: 70vh;
			max-height: 900px;
		}
	}
</style>
