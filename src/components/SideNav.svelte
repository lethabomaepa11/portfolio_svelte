<script>
	import LinkCard from "./LinkCard.svelte";

</script>

<aside class="hidden lg:flex flex-col gap-5 w-3/12 min-h-screen py-5 px-3 ">
<div class="slideOut transition-all bg-slate-800 h-full flex flex-col justify-center items-center gap-5 rounded-md p-5 overflow-hidden">
    <div class="image rounded h-[150px] w-[150px] bg-slate-700">
        <img src="https://avatars.githubusercontent.com/u/129387924?s=400&u=953c70011c4e2b4c0c05dd51b502e2fc4a7ab06b&v=4" alt="github avatar"/>
    </div>
    <a href="/"><h1 class="text-3xl font-bold text-gray-400">Lethabo <span class="text-indigo-600">Maepa</span></h1></a>
    <section>
        <ul class="flex flex-col gap-2 w-full">
            <LinkCard href="mailto:lethabomaepa11@gmail.com" icon="fa fa-envelope" label="Email">
                lethabomaepa11@gmail.com
            </LinkCard>
            <LinkCard href="tel:+27 63 744 0396" icon="fa fa-phone" label="Cell number">
                +27 63 744 0396
            </LinkCard>
            <LinkCard href="https://github.com/lethabomaepa11" icon="fa-brands fa-github"
                label="Github Profile">github.com/lethabomaepa11</LinkCard> 
            <LinkCard href="https://www.linkedin.com/in/lethabomaepa11/" icon="fa-brands fa-linkedin"
                label="Linked Profile">linkedin.com/in/lethabomaepa11/</LinkCard>
            
        </ul>
    </section>
</div>
</aside>