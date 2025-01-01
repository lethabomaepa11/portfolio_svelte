<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof document !== 'undefined') {
			console.log('Document is defined:', document);
			const marquee = document.getElementById('marquee');
			marquee.addEventListener('mouseover', () => {
				marquee.style.animation = 'none';
			});
			marquee.addEventListener('mouseout', () => {
				marquee.style.animation = 'marqueee 10s infinite linear';
			});
		}
	});
</script>

<section in:slide id="about" class="flex flex-col gap-5 overflow-x-hidden">
	<h1 class="md:hidden font-bold text-2xl page">About</h1>
	<p class="text-gray-400">
		Final-year BSc IT student with a strong foundation in programming and software development
		gained through academic studies and independent projects. Proficient in modern technologies and
		passionate about building seamless, scalable solutions
	</p>
	<h1 class="font-bold text-xl">Technologies</h1>
	<!--Languages-->

	<div id="marquee" class="flex gap-5 marquee p-3" data-aos="zoom-in-left" data-aos-duration="2000">
		<i class="fa-brands fa-js text-yellow-300 text-5xl"></i>
		<i class="fa-brands fa-java text-5xl text-orange-300"></i>
		<i class="fa-brands fa-react text-5xl text-blue-500"></i>
		<i class="fa-brands fa-css3-alt text-5xl text-blue-400"></i>
		<i class="fa-brands fa-html5 text-5xl text-orange-500"></i>
		<img src="/logos/next.png" alt="nextjs" class="h-[3rem]" />
		<img src="/logos/sql.png" alt="sql" class="h-[3rem]" />
		<img src="/logos/svelte.png" alt="svelte" class="h-[3rem]" />
		<img src="/logos/tailwind.svg" alt="tailwind" class="h-[3rem] bg-white p-2 rounded-md" />
	</div>
</section>
