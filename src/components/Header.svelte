<script>
	import Icon from './Icon.svelte';

	export let isVisible;
	export let fragment;
	let active = 'text-indigo-600 font-bold';
	function toggleMenu() {
		isVisible = !isVisible;
	}
</script>

<header class="fixed flex items-center bg-slate-900 top-0 p-1 pt-5 gap-5 lg:hidden w-screen z-50">
	<button on:click={toggleMenu} class="lg:hidden lg:text-black"
		><Icon className="fa fa-bars text-2xl ml-3" /></button
	>
	<a href="/" class="lg:hidden"
		><h1 class="text-2xl font-bold text-gray-400">
			Lethabo <span class="text-indigo-600">Maepa</span>
		</h1></a
	>
</header>

<header class="flex justify-between items-center">
	<h1 class="hidden lg:flex font-bold text-xl underline-offset-4 text-indigo-600">
		{fragment.charAt(0).toUpperCase() + fragment.substring(1)}
	</h1>

	<button
		on:click={toggleMenu}
		class="fixed lg:hidden w-screen min-h-screen bottom-0 bg-black opacity-40 z-10 {isVisible
			? 'block '
			: 'hidden'}"
	></button>

	<nav
		id="nav"
		class="slideIn lg:flex p-2 rounded-lg lg:-mt-3 {isVisible
			? 'rounded-none lg:rounded-lg lg:bg-slate-700 bg-slate-950  flex flex-col h-screen lg:h-fit lg:relative w-4/5 lg:w-fit lg:p-2  z-50 fixed bottom-0 p-5 pt-10 left-0'
			: 'hidden lg:bg-slate-700'}"
	>
		<span class="flex justify-between items-center lg:hidden">
			<h1 class="text-2xl">Menu</h1>
			<button class="text-2xl" on:click={toggleMenu}><Icon className="fa fa-times" /></button>
		</span>

		<ul class="flex flex-col items-center lg:flex-row gap-3 mt-10 lg:mt-0">
			<a
				href="#about"
				on:click={toggleMenu}
				class="transition-all {fragment == 'about' && active} hover:text-indigo-600"
				><li>About</li></a
			>
			<a
				href="#skills"
				on:click={toggleMenu}
				class="transition-all {fragment == 'skills' && active} hover:text-indigo-600"
				><li>Skills</li></a
			>
			<a
				href="#projects"
				on:click={toggleMenu}
				class="transition-all {fragment == 'projects' && active} hover:text-indigo-600"
				><li>Projects</li></a
			>
			<a href="/" on:click={toggleMenu} class="transition-all lg:hidden hover:text-indigo-600"
				><li>Contact Me</li></a
			>
			<a
				href="/resume/Lethabo Maepa CV.pdf"
				target="_blank"
				on:click={toggleMenu}
				class="transition-all btn border-none bg-blue-500 rounded-md text-white hover:bg-blue-900"
				><li>Download Resume</li></a
			>
		</ul>
	</nav>
</header>

<style>
	@keyframes slideIn {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.slideIn {
		animation: slideIn 0.5s ease-in-out;
	}
</style>
