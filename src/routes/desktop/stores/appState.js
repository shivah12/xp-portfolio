import { writable } from 'svelte/store';
import { reducer, initialState } from './reducer';
import recycleIcon from '$lib/assets/windowsIcons/Recycle Bin (empty).png';
import noteIcon from '$lib/assets/windowsIcons/Notepad.png';
import maxthonIcon from '$lib/assets/windowsIcons/Maxthon.png';
import paintIcon from '$lib/assets/windowsIcons/Paint.png';
import myCompIcon from '$lib/assets/windowsIcons/My Computer.png';
import wmPlayerIcon from '$lib/assets/windowsIcons/Windows Media Player 9.png';
import bovIcon from '$lib/assets/windowsIcons/bladeofvalor.png';

function createAppState() {
	const { subscribe, update } = writable(initialState);

	return {
		subscribe,
		dispatch: (action) => update((state) => reducer(state, action))
	};
}

export const appState = createAppState();

export const iconState = writable([
	{
		id: 0,
		icon: recycleIcon,
		title: 'Recycle Bin',
		component: () => import('../Apps/Recycle/Recycle.svelte'),
		isFocus: false
	},
	{
		id: 1,
		icon: myCompIcon,
		title: 'My Computer',
		component: () => import('../Apps/MyComputer/MyComputer.svelte'),
		isFocus: false
	},
	{
		id: 2,
		icon: noteIcon,
		title: 'Notepad',
		component: () => import('../Apps/Notepad/Notepad.svelte'),
		isFocus: false
	},
	{
		id: 3,
		icon: maxthonIcon,
		title: 'Maxthon',
		component: () => import('../Apps/Maxthon/Maxthon.svelte'),
		isFocus: false
	},
	{
		id: 4,
		icon: wmPlayerIcon,
		title: 'Window Media Player',
		component: () => import('../Apps/WindowMediaPlayer/WMPlayer.svelte'),
		isFocus: false
	},
	{
		id: 5,
		icon: paintIcon,
		title: 'Paint',
		component: () => import('../Apps/Paint/Paint.svelte'),
		isFocus: false
	},
	{
		id: 6,
		icon: bovIcon,
		title: 'Blade of Valor',
		component: () => import('../Apps/BladeOfValor/BladeOfValor.svelte'),
		isFocus: false
	}
]);

export const recycleBinState = writable({
	items: []
});

export function addItemToRecycleBin(item) {
	recycleBinState.update((state) => ({
		...state,
		items: [...state.items, item]
	}));
}

export function addApp(appKey) {
	appState.dispatch({ type: 'ADD_APP', appKey });
}

export function removeApp(id) {
	appState.dispatch({ type: 'REMOVE_APP', id });
}

export function minimizeApp(id) {
	appState.dispatch({ type: 'MINIMIZE_APP', id });
}

export function restoreApp(id) {
	appState.dispatch({ type: 'RESTORE_APP', id });
}

export function focusApp(id) {
	appState.dispatch({ type: 'FOCUS_APP', id });
}

export function toggleMaximizeApp(id) {
	appState.dispatch({ type: 'TOGGLE_MAXIMIZE_APP', id });
}

export function updateAppState(id, width, height, x, y) {
	appState.dispatch({ type: 'UPDATE_APP_STATE', id, width, height, x, y });
}
