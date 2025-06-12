<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import NoCellphones from '$lib/components/NoCellphones.svelte';
	import loginLogo from '$lib/assets/loginXP.png';
	import turnOff from '$lib/assets/windowsIcons/Power.png';
	let activeUser = null;
	const dispatch = createEventDispatcher();
	let audio;

	onMount(() => {
		audio = new Audio(
			'https://xpportfoliowebsite.s3.amazonaws.com/SystemSoundEffects/Windows+XP+Logon+Sound.wav'
		);
	});

	function handleClickOutside(event) {
		const guestSection = document.querySelector('.guest');
		if (
			guestSection &&
			!guestSection.contains(event.target)
		) {
			activeUser = null;
		}
	}

	function handleGuestLogin() {
		dispatch('login', { username: 'Guest', password: '' });
		goto('/desktop');
		playAudio();
	}

	function playAudio() {
		if (audio) {
			audio.play();
		}
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleSubmit();
		}
	}

	function toggleInput(user) {
		activeUser = activeUser === user ? null : user;
	}

	function showHint() {
		showHintBalloon = true;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="show-large">
	<div class="header" />
	<main>
		<div class="img">
			<img src={loginLogo} alt="Logo Windows XP" />
		</div>
		<div class="line"></div>
		<div class="users">
			<section
				class="guest"
				role="button"
				tabindex="0"
				on:click={handleGuestLogin}
				on:keypress={(event) => handleKeyPress(event, handleGuestLogin)}
				class:active={activeUser === 'guest'}
			>
				<div class="iconB"></div>
				<div class="user">
					<p>Guest</p>
				</div>
			</section>
		</div>
	</main>
	<footer>
		<div class="btn">
			<button> <img src={turnOff} alt="" /> </button>
			<p>Turn off computer</p>
		</div>
		<div class="informations">
			<p>After you log on, you can add or change accounts</p>
			<p>Just go to your Control Panel and click User Accounts</p>
		</div>
	</footer>
</div>

<div class="show-small">
	<NoCellphones />
</div>

<style>
	@font-face {
		font-family: 'Source Sans Pro';
		src: url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
		font-display: swap;
		font-weight: normal;
		font-style: normal;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.balloon-container {
		position: absolute;
		bottom: 25%;
		right: 29%;
	}

	.balloonHint-container {
		position: absolute;
		bottom: 19%;
		right: 24%;
	}
	.header {
		min-height: 12.5vh;
		width: 100%;
		background-color: #084da3;
		position: relative;
	}

	.header::before {
		content: '';
		width: 100%;
		height: 7px;
		position: absolute;
		bottom: 0px;
		background: linear-gradient(
			270deg,
			#084da3 -33.4%,
			#084da3 6.07%,
			#ffffff 49.56%,
			#084da3 82.59%,
			#084da3 121.25%
		);
	}

	footer {
		min-height: 14.5vh;
		width: 100%;
		background-color: #084da3;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer::before {
		content: '';
		width: 100%;
		height: 7px;
		position: absolute;
		align-self: flex-start;
		background: linear-gradient(
			270deg,
			#084da3 -33.4%,
			#084da3 6.07%,
			#ff9933 49.56%,
			#084da3 82.59%,
			#084da3 121.25%
		);
	}

	footer .btn {
		margin-left: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	footer .btn button {
		width: 40px;
		height: 40px;
		all: unset;
		cursor: pointer;
	}

	footer .btn button img {
		width: 40px;
		height: 40px;
	}

	footer .btn p {
		color: #fff;
		margin-left: 20px;
		font-size: 18px;
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
	}

	footer .informations {
		margin-right: 50px;
		color: #fff;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 13px;
		text-align: center;
		letter-spacing: 0.5px;
		font-weight: 400;
	}

	main {
		height: 73vh;
		background: radial-gradient(19.48% 42.48% at 10% 22.48%, #9cc0e9 0%, #508fd9 100%);
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
	}

	main .img {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		position: relative;
		top: 20px;
	}
	.show-small {
		display: none;
	}
	.show-large {
		display: contents;
	}

	@media (max-width: 1088px) {
		.show-small {
			display: contents;
		}
		.show-large {
			display: none;
		}
	}
	main .img h1 {
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		font-weight: 500;
		margin-top: 30px;
		margin-right: 40px;
	}

	main .line {
		width: 2px;
		height: 80%;
		margin: 0 42px;
		background: linear-gradient(180deg, #508fd9 0%, #ffffff 47.4%, #508fd9 98.96%);
	}

	main .users section {
		padding: 15px 20px;
		width: 445px;
		height: 112.5px;
		border-radius: 4px 0px 0px 4px;
		position: relative;
		display: flex;
		opacity: 0.6;
		transition:
			background 0.3s ease,
			opacity 0.3s ease;
		cursor: pointer;
	}

	main .users section.active {
		background: linear-gradient(90deg, #084da3 0%, #508fd9 100%);
		background-image: url('$lib/assets/Rectangle 73 (1).png');
		opacity: 1;
	}

	main .users section .iconA,
	main .users section .iconB {
		width: 81px;
		height: 81px;
		border: 2px solid #fff;
		border-radius: 4px;
	}

	main .users section:hover {
		opacity: 1;
	}

	main .users section:hover .iconA,
	main .users section:hover .iconB {
		border: 2px solid #ffcc00;
		opacity: 1;
	}

	main .users section.active .iconA,
	main .users section.active .iconB {
		border: 2px solid #ffcc00;
	}

	main .users .shreeti .iconA {
		background: url('$lib/assets/icon0.png') no-repeat center center;
		background-size: cover;
	}

	main .users .shreeti .user {
		margin-left: 20px;
		position: relative;
		color: #fff;
	}

	main .users .shreeti .user h3 {
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 400;
		font-size: 20px;
	}

	main .users .shreeti .user p {
		font-family: 'Verdana', sans-serif;
		margin-top: 10px;
		font-size: 13px;
	}

	main .users .shreeti .user .input {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: -24px;
	}

	main .users .shreeti .user .input input {
		padding: 0 0.4rem;
		outline: none;
		height: 40px;
		width: 200px;
		background: #ffffff;
		color: #000000;
		border: 0.5px solid #333333;
		border-radius: 4px;
	}

	main .users .shreeti .user .input .green {
		width: 40px;
		height: 40px;
		background-color: #23b221;
		border: 1px solid #fff;
		box-shadow:
			inset 4px 2px 8px rgba(255, 255, 255, 0.6),
			inset -2px -3px 5px #267c08;
		border-radius: 4px;
		outline: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 10px;
		position: relative;
	}

	main .users .shreeti .user .input .green img {
		position: absolute;
		top: 7px;
	}

	main .users .shreeti .user .input .blue {
		width: 40px;
		height: 40px;
		background-color: #2266f5;
		border: 1px solid #fff;
		box-shadow:
			inset 4px 2px 8px rgba(255, 255, 255, 0.6),
			inset -2px -3px 5px #0844c3;
		border-radius: 4px;
		outline: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	main .users .shreeti .user .input .blue img {
		position: absolute;
		top: 5px;
	}

	main .users .guest {
		margin-top: 40px;
	}

	main .users .guest .iconB {
		background: url('$lib/assets/icon.png') no-repeat center center;
		background-size: cover;
		border-color: #fff;
	}

	main .users .guest .user {
		margin-left: 20px;
		color: #fff;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 20px;
	}
</style>
