<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	const skills = [
		{ name: 'React', percent: 50, level: 3 },
		{ name: 'NextJS', percent: 25, level: 3 },
		{ name: 'SQL', percent: 25, level: 3 },
		{ name: 'HTML5/CSS3', percent: 50, level: 4 },
		{ name: 'JavaScript', percent: 50, level: 4 },
		{ name: 'Responsive Web Design', percent: 50, level: 3 },
		{ name: 'Version Control (Git)', percent: 25, level: 2 },
		{ name: 'UI/UX Principles', percent: 25, level: 1 },
		{ name: 'Problem-Solving', percent: 25, level: 4 },
		{ name: 'Team Collaboration', percent: 25, level: 3 },
		{ name: 'Svelte', percent: 25, level: 1 }
	];

	//levels
	const levels = ['Novice', 'Advanced Beginner', 'Competent', 'Proficient', 'Expert'];
</script>

<section in:slide id="skills" class="flex flex-col gap-4">
	<h1 class="md:hidden font-bold text-2xl page">Skills</h1>
	<!-- Skills will be updated and fetched from database-->
	<h1>Skill levels</h1>
	<div class="grid lg:grid-cols-2 gap-5 items-start justify-start">
		{#each skills as skill}
			<div class="flex flex-col items-center mb-1 hover:bg-gray-700 rounded-md transition-all">
				<span class="text-base font-medium text-blue-700 dark:text-white">{skill.name}</span>
				<div class="levels flex bg-slate-700 gap-2 rounded-md overflow-hidden p-2">
					{#each levels as level, index}
						<div class={`text-xs i ${skill.level > index ? 'isLevel' : 'isNotLevel'}`}>{level}</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<h2>Education</h2>
	<p>
		<b>Bachelor of Science in Information Technology</b><br />
		<i>
			North West University, Vanderbiljpark<br />
			Expected Graduation: 2026
		</i>
	</p>
</section>
