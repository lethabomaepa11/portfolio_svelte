<script>
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';

	export let name, languages, description, link, images;
	link = link != undefined > 0 ? link : '';
	let isDisplayed = false;
	const display = () => {
		isDisplayed = !isDisplayed;
	};
</script>

<div
	class="px-3 rounded-md max-w-screen-sm md:max-w-sm flex flex-col gap-3 py-2 lg:min-w-80 card shadow-lg bg-slate-900"
>
	<h1>{name}</h1>
	<p class="text-xs text-blue-600">{languages}</p>

	<p class="text-sm h-28 overflow-hidden">{description}</p>
	<!--When you click on the link, a modal is displayed with the image scroller-->
	<a on:click={display} href="javascript:void(0)" class="text-blue-500 text-sm hover:underline"
		>See more...</a
	>

	<div class="screenshots w-full h-9 flex gap-2">
		{#each images as image}
			<img src={`/screenshots/${image}`} alt={image} class="w-9" />
		{/each}
	</div>

	{#if link != undefined}
		<a href={link != undefined > 0 ? link : ''}>
			<button class="p-2 rounded-md w-full btn btn-primary transition-all"> Visit </button>
		</a>
	{/if}
	<Modal {isDisplayed} {display} {name} {description} {images} {link} />
</div>
