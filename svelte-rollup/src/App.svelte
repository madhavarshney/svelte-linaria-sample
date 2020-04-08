<script>
	import { css } from 'linaria';
	import { externalStyle } from './styles.js';

	export let name;

	const localStyle = css`
		color: green;
	`;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p class={localStyle}>This is styled with Linaria styles in a <code>.svelte</code> file</p>
	<p class={externalStyle}>This is using Linaria styles imported from a <code>.js</code> file!</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	code {
		font-size: 16px;
	}
</style>