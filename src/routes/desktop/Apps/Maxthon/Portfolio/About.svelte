<script>
	import { time } from '../../../stores/stores';

	const formatter = new Intl.DateTimeFormat('en', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});

	let skills = [
		{ name: 'Figma' },
		{ name: 'Adobe XD' },
		{ name: 'JavaScript' },
		{ name: 'React' },
		{ name: 'CSS' },
		{ name: 'HTML' },
		{ name: 'Svelte' },
		{ name: 'Java' },
		{ name: 'Python' },
		{ name: 'C/C++' },
		{ name: 'TypeScript' },
		{ name: 'Next.js' },
		{ name: 'Node.js' },
		{ name: 'Express' },
		{ name: 'Spring Boot' },
		{ name: 'Redux' },
		{ name: 'Tailwind CSS' },
		{ name: 'MongoDB' },
		{ name: 'MySQL' },
		{ name: 'Git' },
		{ name: 'Postman' },
		{ name: 'Supabase' },
		{ name: 'Prisma' },
		{ name: 'Mongoose' },
		{ name: 'Problem Solving' },
		{ name: 'Team Collaboration' }
	];

	let showAllSkills = false;
</script>

<div class="facebook-2006-container">
	<div class="content-area-2006">
		<div class="left-sidebar-2006">
			<div class="change-log-2006">
				<span class="new">New!</span> Change Log
				<p>Added the "Modern Landing Page Template" in design projects!</p>
				<p>Added 2 more in design projects!</p>
			</div>
		</div>

		<div class="main-content-2006">
			<div class="profile-header-2006">
				<div class="profile-pic-2006">
					<img src="https://media1.tenor.com/m/AlUkiGkR2j8AAAAC/new-game-ahagon-umiko-programming.gif" alt="Profile" />
				</div>
				<div class="profile-info-2006">
					<h1>Shreeti Mohapatra</h1>
					<p class="status">is excited about the new redesign</p>
					<p class="updated">Updated one minute ago</p>
					<div class="details-2006">
						<p><strong>Education</strong> Senior at VSSUT, Burla</p>
						<p><strong>Interested In</strong> MERN Stack Development and UI/UX Development</p>
						<p><strong>Age</strong> 21</p>
					</div>
				</div>
			</div>

			<div class="profile-actions-2006">
				<a href="https://www.linkedin.com/in/shreeti-mohapatra-ba8715252/">Add Shreeti as a Friend</a>
			</div>

			<div class="info-box-2006">
				<div class="skills-grid-2006">
					{#each skills.slice(0, showAllSkills ? skills.length : 6) as skill}
						<div class="skill-item-2006">
							<span>{skill.name}</span>
						</div>
					{/each}
				</div>
				{#if skills.length > 6}
					<button class="view-more-skills-2006" on:click={() => (showAllSkills = !showAllSkills)}>
						{showAllSkills ? 'Show Less Skills' : 'View More Skills'}
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	/* Your existing CSS (unchanged) */
	.facebook-2006-container {
		background-color: #f0f2f5;
		min-height: 100vh;
		font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
		color: #333;
	}

	.header-2006 {
		background-color: #3b5998;
		border-bottom: 1px solid #133783;
		padding: 8px 16px;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
	}

	.logo-2006 img {
		height: 24px;
		margin-right: 16px;
	}

	.nav-2006 {
		display: flex;
		gap: 16px;
		margin-right: auto;
	}

	.nav-2006 a,
	.right-nav-2006 a {
		color: #fff;
		text-decoration: none;
		font-size: 13px;
		font-weight: bold;
		padding: 4px 8px;
	}

	.nav-2006 a.active {
		background-color: #133783;
		border-radius: 2px;
	}

	.right-nav-2006 {
		display: flex;
		gap: 16px;
	}

	.content-area-2006 {
		display: flex;
		padding: 60px 16px 16px;
		max-width: 1000px;
		margin: 0 auto;
		gap: 16px;
	}

	.left-sidebar-2006 {
		width: 180px;
		flex-shrink: 0;
	}

	.change-log-2006 {
		background-color: #e6ffe6;
		border: 1px solid #c2e6c2;
		padding: 8px;
		font-size: 12px;
		margin-bottom: 16px;
	}

	.change-log-2006 .new {
		background-color: #72a64c;
		color: #fff;
		font-weight: bold;
		padding: 2px 4px;
		margin-right: 4px;
	}

	.main-content-2006 {
		flex-grow: 1;
	}

	.profile-header-2006 {
		display: flex;
		background-color: #fff;
		border: 1px solid #ccc;
		margin-bottom: 16px;
		padding: 16px;
	}

	.profile-pic-2006 {
		width: 180px;
		height: 180px;
		border: 1px solid #ccc;
		margin-right: 16px;
		flex-shrink: 0;
	}

	.profile-pic-2006 img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.profile-info-2006 h1 {
		font-size: 24px;
		color: #3b5998;
		margin: 0 0 4px;
	}

	.profile-info-2006 .status {
		font-size: 13px;
		color: #666;
		margin-bottom: 8px;
	}

	.profile-info-2006 .updated {
		font-size: 11px;
		color: #999;
		margin-bottom: 12px;
	}

	.details-2006 p {
		font-size: 13px;
		margin: 4px 0;
	}

	.profile-actions-2006 {
		display: flex;
		flex-direction: column;
		margin-bottom: 16px;
		background-color: #f7f7f7;
		border: 1px solid #ccc;
		border-top: none;
	}

	.profile-actions-2006 a {
		color: #3b5998;
		text-decoration: none;
		padding: 8px 16px;
		border-bottom: 1px solid #eee;
	}

	.profile-actions-2006 a:hover {
		background-color: #eceff5;
	}

	.info-box-2006 {
		background-color: #fff;
		border: 1px solid #ccc;
		margin-bottom: 16px;
		padding: 12px;
	}

	.skills-grid-2006 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
		gap: 8px;
	}

	.skill-item-2006 {
		background-color: #f0f2f5;
		padding: 4px 8px;
		border-radius: 2px;
		font-size: 13px;
		text-align: center;
	}

	.view-more-skills-2006 {
		background: none;
		border: none;
		color: #3b5998;
		cursor: pointer;
		padding: 4px 0;
		width: 100%;
		text-align: right;
		font-size: 12px;
		margin-top: 8px;
	}
</style>
