<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import Project from './Project.svelte';

	const projects = [
		{
			name: 'NWU Vaal GKSS website',
			description:
				'Developed the student society website that features a community forum and event updates.',
			link: 'https://nwu-vaal-gkss.netlify.app',
			languages: 'javascript, sveltekit, tailwindcss, supabase',
			images: []
		},
		{
			name: 'Thuto and tsebo trust website',
			description:
				' Designed and developed the website using NextJs, MantineUI and TailwindCss, Hosted the website on Vercel and used Afrihost for domain pointing and dns management, Used Brevo for transactional emails to clients. Communicated with the client to ensure all requirements are met.',
			languages: 'javascript, react, nextjs',
			images: [],
			link: 'https://thutoandtsebotrust.co.za'
		},
		{
			name: 'PotchStream Hotel',
			description:
				'Used System Analysis and design methodologies and concepts to gather problems and requirements to be able to design and implement the PotchStream Hotel booking system',
			link: 'https://github.com/lethabomaepa11/cmpg223project',
			languages: 'ASP.NET, C#, SQL Server, HTML, TailwindCSS',
			images: []
		}
	];
</script>

<section in:slide id="projects" class="w-[90vw] px-5 lg:p-0">
	<h1 class="md:hidden font-bold text-2xl page">Projects</h1>
	<div class="flex flex-wrap gap-3 flex-col md:flex-row min-w-full py-5">
		{#each projects as project}
			<Project
				name={project.name}
				languages={project.languages}
				description={project.description}
				link={project.link}
				images={project.images}
			/>
		{/each}
	</div>
</section>
