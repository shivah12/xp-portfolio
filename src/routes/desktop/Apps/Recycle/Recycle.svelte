<script>
	import { onMount } from 'svelte';
	import HeaderWindow from '../../Window/WindowDropDowns/HeaderWindow.svelte';
	import menuItems from './menuItems.js';

	import search from '$lib/assets/windowsIcons/Search.png';
	import back from '$lib/assets/windowsIcons/Back.png';
	import forward from '$lib/assets/windowsIcons/Forward.png';
	import up from '$lib/assets/windowsIcons/up.png';
	import menu from '$lib/assets/windowsIcons/Start Menu Programs.png';
	import folderOpen from '$lib/assets/windowsIcons/337(32x32).png';
	import windows from '$lib/assets/windowsIcons/windows.png';

	export let onClose;

	function onClickOptionItem(item) {
		switch (item) {
			case 'Close':
				onClose();
				break;
			default:
		}
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
		<div class="function_bar__button">
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
		<div class="function_bar__button">
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
			<img src={computer} alt="Computer" class="address_bar__img" />
			<div class="address_bar__text">My Computer</div>
			<img src={dropdown} alt="Dropdown" class="address_bar__img" />
		</div>
		<div class="address_bar__go">
			<img class="address_bar__go__img" src={go} alt="Go" />
			<span class="address_bar__go__text">Go</span>
		</div>
	</section>
	<div class="content">
		<div class="inner">
			<div class="left">
				<div class="left__card">
					<div class="left__card__header">
						<div class="left__card__header__text">Recycle Bin Tasks</div>
						<img src={pullup} alt="Pull Up" class="left__card__header__img" />
					</div>
					<div class="left__card__content">
						<div class="left__card__row">
							<img class="left__card__img" src={recycle} alt="View" />
							<div class="left__card__text link">Empty the Recycle Bin</div>
						</div>
						<div class="left__card__row">
							<img class="left__card__img" src={restore} alt="Remove" />
							<div class="left__card__text link">Restore all items</div>
						</div>
					</div>
				</div>
				<div class="left__card">
					<div class="left__card__header">
						<div class="left__card__header__text">Other Places</div>
						<img src={pullup} alt="Pull Up" class="left__card__header__img" />
					</div>
					<div class="left__card__content">
						<div class="left__card__row">
							<img class="left__card__img" src={network} alt="Network" />
							<div class="left__card__text link">My Network Places</div>
						</div>
						<div class="left__card__row">
							<img class="left__card__img" src={document} alt="Document" />
							<div class="left__card__text link">My Documents</div>
						</div>
						<div class="left__card__row">
							<img class="left__card__img" src={folderSmall} alt="Folder" />
							<div class="left__card__text link">Shared Documents</div>
						</div>
						<div class="left__card__row">
							<img class="left__card__img" src={control} alt="Control" />
							<div class="left__card__text link">Control Panel</div>
						</div>
					</div>
				</div>
				<div class="left__card">
					<div class="left__card__header">
						<div class="left__card__header__text">Details</div>
						<img src={pulldown} alt="Pull Down" class="left__card__header__img" />
					</div>
					<!-- <div class="left__card__content">
						<div class="left__card__row">	</div></div> -->
				</div>
			</div>
			<div class="right"></div>
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

	.forward,
	.back {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
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
		border-bottom: 1px solid rgba(255, 255, 255, 0.7);
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
	}

	.inner {
		display: flex;
		height: 100%;
		overflow: hidden;
	}

	.left {
		width: 180px;
		height: 100%;
		background: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);
		padding: 10px;
	}

	.left__card {
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		width: 100%;
		overflow: hidden;
		margin-bottom: 12px;
	}

	.left__card__header {
		display: flex;
		align-items: center;
		height: 23px;
		padding-left: 11px;
		padding-right: 2px;
		cursor: pointer;
		background: linear-gradient(
			to right,
			rgb(240, 240, 255) 0,
			rgb(240, 240, 255) 30%,
			rgb(168, 188, 255) 100%
		);
	}

	.left__card__header:hover .left__card__header__text {
		color: #1c68ff;
	}

	.left__card__header__text {
		font-weight: 700;
		color: #0c327d;
		flex: 1;
	}

	.left__card__header__img {
		width: 18px;
		height: 18px;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
	}

	.left__card__content {
		padding: 5px 10px;
		background: linear-gradient(
			to right,
			rgb(180, 200, 251) 0%,
			rgb(164, 185, 251) 50%,
			rgb(180, 200, 251) 100%
		);
		background-color: rgba(198, 211, 255, 0.87);
	}

	.left__card__row {
		display: flex;
		margin-bottom: 2px;
	}

	.left__card__img {
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}

	.left__card__text {
		font-size: 10px;
		line-height: 14px;
		color: #0c327d;
	}

	.left__card__text.link:hover {
		cursor: pointer;
		color: #2b72ff;
		text-decoration: underline;
	}

	.right {
		height: 100%;
		overflow: auto;
		background-color: #fff;
		flex: 1;
	}
</style>
