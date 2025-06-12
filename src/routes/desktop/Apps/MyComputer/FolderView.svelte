<script>
	import HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';
	import menuItems from './menuItems.js';

	import search from '$lib/assets/windowsIcons/299(32x32).png';
	import back from '$lib/assets/windowsIcons/Back.png';
	import forward from '$lib/assets/windowsIcons/Forward.png';
	import up from '$lib/assets/windowsIcons/up.png';
	import menu from '$lib/assets/windowsIcons/Start Menu Programs.png';
	import folderOpen from '$lib/assets/windowsIcons/337(32x32).png';
	import windows from '$lib/assets/windowsIcons/windows.png';
	import computer from '$lib/assets/windowsIcons/676(16x16).png';
	import dropdown from '$lib/assets/windowsIcons/dropdown.png';
	import go from '$lib/assets/windowsIcons/290.png';
	import folder from '$lib/assets/windowsIcons/318(48x48).png';
	import document from '$lib/assets/windowsIcons/308(16x16).png';
	import disk from '$lib/assets/windowsIcons/318(48x48).png';

	export let folderName;
	export let onClose;

	function onClickOptionItem(item) {
		switch (item) {
			case 'Close':
				onClose();
				break;
			default:
		}
	}

	function handleBack() {
		onClose(); // This will close the folder view and return to My Computer
	}

	function openD12UI() {
		window.open('https://github.com/shivah12/d12-ui', '_blank');
	}

	function openChattie() {
		window.open('https://github.com/shivah12/Chattie', '_blank');
	}

	function openMagicPerfume() {
		window.open('https://www.behance.net/gallery/225623875/MAGIC-Perfume-Landing-Page', '_blank');
	}

	function openModernLanding() {
		window.open('https://www.behance.net/gallery/227183783/Modern-Landing-Page-Template', '_blank');
	}

	function openPradaWebsite() {
		window.open('https://www.behance.net/gallery/215504889/Prada-Website-Re-design-Landing-Page-UIUX', '_blank');
	}

	function openResume() {
		window.open('https://drive.google.com/file/d/10hlp-EAVsixCLZzb2cAvaxIDGsOZc8Qk/view', '_blank');
	}
</script>

<div class="main-container">
	<section class="toolBar">
		<div class="options">
			<HeaderWindow items={menuItems} onClickItem={onClickOptionItem} />
		</div>
		<img class="windows-logo" src={windows} alt="windows" />
	</section>
	<section class="function_bar">
		<div class="function_bar__button" on:click={handleBack}>
			<figure>
				<img class="function_bar__icon back" src={back} alt="Back" />
				<figcaption class="function_bar__text">Back</figcaption>
			</figure>
			<div class="function_bar__arrow" />
		</div>
		<div class="function_bar__button">
			<figure>
				<img class="function_bar__icon forward" src={forward} alt="Forward" />
				<figcaption class="function_bar__text">Forward</figcaption>
			</figure>
			<div class="function_bar__arrow" />
		</div>
		<div class="function_bar__button" on:click={handleBack}>
			<figure>
				<img class="function_bar__icon" src={up} alt="Up" />
				<figcaption class="function_bar__text">Up</figcaption>
			</figure>
		</div>
		<div class="function_bar__separate" />
		<div class="function_bar__button">
			<figure>
				<img class="function_bar__icon" src={search} alt="Search" />
				<figcaption class="function_bar__text">Search</figcaption>
			</figure>
		</div>
		<div class="function_bar__button">
			<figure>
				<img class="function_bar__icon" src={folderOpen} alt="Folders" />
				<figcaption class="function_bar__text">Folders</figcaption>
			</figure>
		</div>
		<div class="function_bar__separate" />
		<div class="function_bar__button">
			<figure>
				<img class="function_bar__icon" src={menu} alt="Menu" />
				<figcaption class="function_bar__text">Views</figcaption>
			</figure>
			<div class="function_bar__arrow" />
		</div>
	</section>
	<section class="address_bar">
		<div class="address_bar__title">Address</div>
		<div class="address_bar__content">
			<img src={folder} alt="Folder" class="address_bar__img" />
			<div class="address_bar__text">{folderName}</div>
			<img src={dropdown} alt="Dropdown" class="address_bar__img" />
		</div>
		<div class="address_bar__go">
			<img class="address_bar__go__img" src={go} alt="Go" />
			<span class="address_bar__go__text">Go</span>
		</div>
	</section>
	<div class="content">
		<div class="folder-content">
			{#if folderName === 'coding projects'}
				<div class="folder-item" on:click={openChattie}>
					<img src={folder} alt="Chattie" class="folder-icon" />
					<div class="folder-name">Chattie</div>
				</div>
				<div class="folder-item" on:click={openD12UI}>
					<img src={folder} alt="d12-ui" class="folder-icon" />
					<div class="folder-name">d12-ui</div>
				</div>
			{:else if folderName === 'design projects'}
				<div class="folder-item" on:click={openMagicPerfume}>
					<img src={folder} alt="UI/UX" class="folder-icon" />
					<div class="folder-name">Magic-Perfume Branding Website</div>
				</div>
				<div class="folder-item" on:click={openModernLanding}>
					<img src={folder} alt="Graphics" class="folder-icon" />
					<div class="folder-name">Modern Landing Page Template</div>
				</div>
				<div class="folder-item" on:click={openPradaWebsite}>
					<img src={folder} alt="Branding" class="folder-icon" />
					<div class="folder-name">Prada Website Re-design Landing Page</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.main-container {
		height: 100%;
		width: 100%;
		position: absolute;
		color: black;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
	}

	.toolBar {
		display: flex;
		align-items: center;
		height: 24px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.7);
	}

	.options {
		flex: 1;
		height: 23px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		border-right: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1px 0 1px 2px;
	}

	.windows-logo {
		height: 100%;
		border-left: 1px solid white;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.function_bar {
		height: 36px;
		display: flex;
		align-items: center;
		font-size: 11px;
		padding: 4px 3px 4px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.function_bar__button {
		display: flex;
		height: 100%;
		align-items: center;
		border: 1px solid rgba(0, 0, 0, 0);
		border-radius: 3px;
		cursor: pointer;
	}

	.function_bar__button:hover {
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
	}

	.function_bar__button:active {
		border: 1px solid rgb(185, 185, 185);
		background-color: #dedede;
		box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
	}

	.function_bar__icon {
		height: 22px;
		width: 22px;
		margin: 0 4px 0 1px;
	}

	figure {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}

	figure img {
		vertical-align: middle;
		align-items: center;
	}

	figure figcaption {
		text-align: center;
	}

	.address_bar {
		display: flex;
		align-items: center;
		padding: 5px 2px;
		height: 20px;
		font-size: 11px;
		border-top: 1px solid rgba(255, 255, 255, 0.7);
		box-shadow: inset 0 -2px 3px -1px #b0b0b0;
	}

	.address_bar__title {
		padding: 5px;
		color: rgba(0, 0, 0, 0.5);
	}

	.address_bar__content {
		display: flex;
		align-items: center;
		flex: 1;
		height: 100%;
		border: 1px solid rgba(122, 122, 255, 0.6);
		background-color: white;
		position: relative;
	}

	.forward,
	.back {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}

	.address_bar__img {
		width: 14px;
		height: 14px;
	}

	.address_bar__img:last-child {
		width: 15px;
		height: 15px;
		position: absolute;
		right: 1px;
	}

	.address_bar__text {
		position: absolute;
		left: 16px;
		right: 17px;
		white-space: nowrap;
	}

	.address_bar__go {
		display: flex;
		align-items: center;
		padding: 0 18px 0 5px;
		height: 100%;
		position: relative;
	}

	.address_bar__go__img {
		height: 95%;
		border: 1px solid rgba(255, 255, 255, 0.2);
		margin-right: 3px;
	}

	.content {
		flex: 1;
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-top-width: 0;
		background-color: #f1f1f1;
		font-size: 11px;
		position: relative;
		overflow: auto;
	}

	.folder-content {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: 20px;
	}

	.folder-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		padding: 5px;
		border-radius: 3px;
	}

	.folder-item:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.folder-icon {
		width: 48px;
		height: 48px;
		margin-bottom: 5px;
	}

	.folder-name {
		text-align: center;
		word-break: break-word;
		max-width: 100px;
	}

	.right__card {
		padding: 20px;
		background-color: white;
		border-radius: 3px;
		margin-top: 20px;
	}

	.right__card__header {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.right__card__content {
		display: flex;
		flex-direction: column;
	}

	.right__card__item {
		display: flex;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.right__card__item:last-child {
		border-bottom: none;
	}

	.right__card__img {
		width: 24px;
		height: 24px;
		margin-right: 10px;
	}

	.right__card__img-container {
		display: flex;
		align-items: center;
	}

	.right__card__text {
		font-size: 14px;
	}
</style> 