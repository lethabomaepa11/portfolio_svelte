<script>
	import Icon from './Icon.svelte';
	export let href;
	export let icon;
	export let label;
	export let className;
</script>

<a {href} target="_blank" class="z-50">
	<li class="flex gap-3 items-center transition-all hover:text-indigo-600 {className}">
		<Icon className={icon} />
		<span>
			<p class="text-sm">{label}</p>
			<slot />
		</span>
	</li>
</a>
