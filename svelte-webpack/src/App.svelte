<script>
	import { css } from 'linaria';
	import { externalStyle } from './styles.js';

	export let name;

	const localStyle = css`
		color: green;
	`;
</script>

<style>
	h1 {
		color: purple;
	}
	code {
		font-size: 16px;
	}
</style>

<h1>Hello {name}!</h1>
<p class={localStyle}>This is styled with Linaria styles in a <code>.svelte</code> file</p>
<p class={externalStyle}>This is using Linaria styles imported from a <code>.js</code> file!</p>