<script lang="ts">
	import { t } from '$lib/translations';
	import { theme as currentTheme } from '$lib/stores/theme';
	import Icon from '@iconify/svelte';

	let mobileMenuOpen = false;
</script>

<header data-expanded={mobileMenuOpen}>
	<a
		href="/#main-content"
		target="_self"
		class="sr-only skip-navigation-button"
		on:click={() => {
			const mainContent = document.getElementById('main-content');
		}}
	>
		{$t('nav.accessibility.skipToContent')}
	</a>
	<div class="notice-banner">
		<p class="text-size-8">{@html $t('nav.noticeBannerMessage')}</p>
	</div>
	<nav>
		<ul>
			<li>
				<a class="text-size-7 link-hover-gray-400 link-light-bg no-underline" href="/"
					>{$t('nav.portfolio')}</a
				>
			</li>
			<li>
				<a class="text-size-7 link-hover-gray-400 link-light-bg no-underline" href="/resume"
					>{$t('nav.resume')}</a
				>
			</li>
		</ul>
		<h1 class="text-size-5 text-size-5-mobile fw-bold">tasmto</h1>

		<ul>
			<li class="theme-toggle--button-container">
				<button
					class="text-size-7 theme-toggle--button"
					title={$t('nav.toogleTheme', {
						// @ts-expect-error
						$currentTheme
					})}
					on:click={() => currentTheme.toggleTheme()}
				>
					<span class="light"> ☀️ </span>
					<span class="dark"> 🌚 </span>
				</button>
			</li>
			<li>
				<a class="text-size-7 link-hover-gray-400 link-light-bg no-underline" href="/about"
					>{$t('nav.about')}</a
				>
			</li>
			<li>
				<a class="text-size-7 link-hover-gray-400 link-light-bg no-underline" href="/contact"
					>{$t('nav.contact')}</a
				>
			</li>
		</ul>
		<button
			aria-hidden={!mobileMenuOpen}
			class="mobile-menu-toggle--button"
			on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
			role={'button'}
		>
			{#if mobileMenuOpen}
				<Icon icon="ic:round-close" />
			{:else}
				<Icon icon="tabler:menu" />
			{/if}
		</button>
	</nav>
	<button
		title={$t('nav.accessibility.closeMobileMenu')}
		class="mobile-menu--backdrop"
		on:click={() => (mobileMenuOpen = false)}
		on:keyup={() => (mobileMenuOpen = false)}
	/>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}
	.notice-banner {
		background: var(--color-primary);
		background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%);
		color: var(--color-white);
		padding: 0.75rem 0.25rem;
		text-align: center;
	}

	.skip-navigation-button:focus,
	.skip-navigation-button:focus-visible,
	.skip-navigation-button:focus-within {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		background: var(--color-accent-dark);
		color: var(--color-white);
		padding: 0.5rem 1rem;
		height: auto;
		width: auto;
		clip: inherit;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0.25rem;
		color: var(--color-text);
		background: rgba(250, 250, 250, 0.8);
		backdrop-filter: blur(2px);
	}

	:global(body.dark-theme nav) {
		background: rgba(50, 50, 50, 0.9) !important;
	}

	nav ul {
		display: flex;
		gap: 0.25rem;
		place-items: center;
	}

	nav ul li a {
		padding: 1rem 0.75rem;
		color: var(--color-text);
	}
	nav ul li a:hover {
		color: var(--color-gray);
	}
	body.dark-theme nav ul li a:hover {
		color: var(--color-gray-light);
	}

	.theme-toggle--button-container {
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.25rem;
		overflow: hidden;
		position: relative;
	}

	.theme-toggle--button {
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		transform: translateY(10%);
		transition: transform 700ms cubic-bezier(0.48, 1.12, 0.69, 0.5);
	}
	.theme-toggle--button > span {
		transition: opacity 400ms ease-in-out, transform 700ms ease-in-out, height 700ms ease-in-out;
	}

	.theme-toggle--button .light {
		opacity: 1;
		transform: scale(1);
	}
	.theme-toggle--button .dark {
		opacity: 0;
		transform: scale(0.5);
	}

	:global(body.dark-theme .theme-toggle--button) {
		transform: translateY(-40%) !important;
	}
	body.dark-theme .theme-toggle--button .dark {
		opacity: 1;
		transform: scale(1);
	}
	body.dark-theme .theme-toggle--button .light {
		opacity: 0;
		transform: scale(0.5);
	}

	.mobile-menu-toggle--button {
		display: none;
		color: var(--color-text);
	}
	.mobile-menu--backdrop {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		nav {
			flex-direction: column;
			gap: 0.5rem;
			align-items: start;
			position: relative;
			text-align: center;
			padding: 1rem 0.25rem 0.35rem;
		}
		header[data-expanded='true'] nav {
			background: rgba(255, 255, 255, 1);
		}
		nav ul {
			flex-direction: column;
			gap: 0.25rem;
			width: 100%;
		}
		nav ul:first-child {
			order: 3;
			padding-bottom: 1.25rem;
		}
		nav ul:nth-child(3) {
			order: 2;
			padding-top: 2rem !important;
		}
		nav ul li {
			width: 100%;
		}
		nav ul li a {
			padding: 1.25rem 2rem;

			display: block;
		}

		header[data-expanded='false'] ul {
			display: none;
		}
		.theme-toggle--button-container {
			order: -1;
			width: 100%;
		}
		.theme-toggle--button {
			align-items: center;
			width: 100%;
		}

		.mobile-menu-toggle--button {
			display: block;
			font-size: 2.15rem;
			padding: 0;
			border: none;
			background: none;
			position: absolute;
			right: 0;
			transform: translateY(-20%);
			cursor: pointer;
		}
		header > * {
			z-index: 100;
		}
		header .mobile-menu--backdrop {
			display: block;
			opacity: 0;
			transition: opacity 300ms ease-in-out;
			pointer-events: none;
		}
		header[data-expanded='true'] .mobile-menu--backdrop {
			pointer-events: all;
			opacity: 1;
			position: fixed;
			width: 100%;
			height: 100vh;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 99;
			cursor: pointer;
		}
	}
</style>
