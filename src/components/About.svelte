<script>
	import Icon from "./Icon.svelte";

</script>
<section id="about" class="flex flex-col mt-5 gap-5">
    <h1 class="md:hidden font-bold text-2xl">About</h1>
    <p class="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptas voluptatibus similique accusamus non recusandae ducimus magni, aliquam dolor. Libero rem adipisci dignissimos reiciendis veritatis laborum, doloribus sed quo amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores dolorum, eos consequuntur veniam, asperiores mollitia est ratione accusantium laborum laudantium vel corporis ut. Placeat dolores fuga fugiat numquam possimus?
    </p>
    <h1 class="font-bold text-xl">What I am doing</h1>

    <div class="flex flex-wrap gap-3 shadow-md w-fit h-fit p-3 rounded-md">
        <div class="flex items-center gap-3">
            <Icon className="fa fa-code"/>
            <span>
                <h3 class="text-md"> Web Development</h3>
                <p class="text-sm">My description will go here</p>
            </span>
        </div>
    </div>
</section>
