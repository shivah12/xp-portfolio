<title>Shreeti Mohapatra</title>

<body>
	<slot />
</body>

<style global>
	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color-scheme: none;
		color: rgba(255, 255, 255, 0.87);
		background-color: none transparent;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		--transition-duration: 0.3s;
		--transition-timing-function: ease-in-out;
	}

	* {
		transition: all var(--transition-duration) var(--transition-timing-function);
	}

	body {
		overflow: hidden;
		margin: 0;
		place-items: center;
		max-width: 100vw;
		max-height: 100vh;
		background: #000;
		transition: background var(--transition-duration) var(--transition-timing-function);
	}
</style>
