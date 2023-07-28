<script lang="ts">
	let className: string | undefined = undefined;
	let href: string | undefined = undefined;
	let target: '_blank' | '_self' | '_parent' | '_top' | undefined = '_self';
	let type: 'button' | 'submit' | 'reset' | undefined = 'button';
	let disabled: boolean | undefined = false;
	let style: string | undefined = '';

	export { className as class, href, target, type, disabled, style };
</script>

{#if href === undefined}
	<a
		class={`primary text-size-7 text-size-7-mobile ${className}`}
		{href}
		{target}
		rel={'noopener noreferrer'}
		{type}
		{style}
		on:click
		role="button"><slot /></a
	>
{:else}
	<button
		class={`primary text-size-7 text-size-7-mobile ${className || ''}`}
		{style}
		{type}
		{disabled}
		on:click><slot /></button
	>
{/if}

<style>
	button.primary,
	a.primary {
		background-color: var(--color-text);
		border: 1px solid var(--color-text) !important;
		color: var(--color-inverse-text);
		padding: 0.95rem 2.45rem;
		border-radius: 4rem;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
		text-decoration: none;
	}
	button.primary:hover,
	a.primary:hover {
		background-color: transparent;
		color: var(--color-text);
	}
</style>
