<script>
	import LinkCard from './LinkCard.svelte';
</script>

<div id="contact" class="image rounded h-[150px] w-[150px]">
	<img class="rounded-full md:rounded-3xl lg:rounded-md" src="/logo.png" alt="Lethabo Maepa" />
</div>
<a href="/"
	><h1 class="text-3xl font-bold text-gray-400">
		Lethabo <span class="text-indigo-600 font-bold">Maepa</span>
	</h1></a
>
<section>
	<ul class="flex flex-col gap-2 w-full">
		<LinkCard href="mailto:lethabomaepa11@gmail.com" icon="fa fa-envelope" label="Email">
			lethabomaepa11@gmail.com
		</LinkCard>
		<LinkCard href="tel:+27 63 744 0396" icon="fa fa-phone" label="Cell number">
			+27 63 744 0396
		</LinkCard>
		<LinkCard
			href="https://github.com/lethabomaepa11"
			icon="fa-brands fa-github"
			label="Github Profile">github.com/lethabomaepa11</LinkCard
		>
		<LinkCard
			href="https://www.linkedin.com/in/lethabomaepa11/"
			icon="fa-brands fa-linkedin"
			label="Linked Profile">linkedin.com/in/lethabomaepa11/</LinkCard
		>
	</ul>
</section>
