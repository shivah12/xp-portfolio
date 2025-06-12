<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';
	import menuItems from './menuItems';

	let textarea;
	let docText = `😎 Oh hey, didn’t see you there.
I’m Shreeti, a UI/UX Designer and Full Stack Developer (yes, I like both colors and code).

Since 2021, I’ve been on a mission to make the internet a prettier, faster, and less frustrating place. I design things that make sense and build things that actually work (wild, I know).

Sometimes I obsess over pixel alignment. Sometimes I fight bugs at 2AM. Either way, I love what I do — and I’m probably doing it with too much coffee.

Take a scroll, check out my work, and if you vibe with it, let’s chat. No bugs guaranteed… mostly.`;

	let wordWrap = true;

	export let onClose;

	function handleClickItem(item) {
		switch (item) {
			case 'Exit':
				onClose();
				break;
			case 'Word Wrap':
				wordWrap = !wordWrap;
				break;
			case 'Time/Date':
				const date = new Date();
				docText += `${date.toLocaleTimeString()} ${date.toLocaleDateString()}\n`;
				break;
			default:
		}
	}

	onMount(() => {
		// Set the initial focus on the textarea
		textarea.focus();
		// Set the cursor (caret) position to the top
		textarea.setSelectionRange(0, 0);
	});
</script>

<div>
	<header><HeaderWindow items={menuItems} onClickItem={handleClickItem} /></header>
	<textarea bind:value={docText} bind:this={textarea} wrap={wordWrap ? 'soft' : 'off'}></textarea>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	header {
		color: black;
		padding-left: 5px;
		margin: 0;
		border-bottom: 1px solid #0831d9;
		border-top: 1px solid #0831d9;
	}

	textarea {
		background-color: white;
		width: calc(100% - 1px);
		height: calc(100% - 25px);
		resize: none;
		overflow: scroll;
		color: black;
		outline: none;
		border: none;
		padding: 0;
		margin: 0;
	}
</style>
