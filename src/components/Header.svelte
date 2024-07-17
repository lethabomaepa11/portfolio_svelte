<script>
import Icon from "./Icon.svelte";

    export let isVisible; 
    export let fragment;
    let active = "text-indigo-600 font-bold";
    function toggleMenu() {
        isVisible = !isVisible;
    }
    
</script>
<header class="fixed flex items-center bg-slate-900 top-0 p-1 pt-5 gap-5 md:hidden w-screen">   
    <button on:click={toggleMenu} class="md:hidden  md:text-black"><Icon className="fa fa-bars"/></button>
    <a href="/" class="md:hidden"><h1 class="text-2xl font-bold text-gray-400">Lethabo <span class="text-indigo-600">Maepa</span></h1></a>
</header>

<header class="flex justify-between items-center ">
    <h1 class="hidden md:flex font-bold text-2xl underline underline-offset-4">{fragment.charAt(0).toUpperCase()+fragment.substring(1)}</h1>

    <button on:click={toggleMenu} class="fixed md:hidden bg-blend-overlay w-screen min-h-screen bg-black opacity-40 {isVisible?'flex':'hidden'}"></button>

    <nav class="md:flex p-2 rounded-md md:-mt-7 {isVisible ? 'rounded-none md:rounded-md md:bg-slate-700 bg-slate-950  flex flex-col h-screen md:h-fit md:relative w-4/5 md:w-fit md:p-2  z-50 fixed bottom-0 p-5 pt-10 left-0' : 'hidden md:bg-slate-700'}">
        <span class="flex justify-between items-center md:hidden">
            <h1 class="text-2xl">Menu</h1>
            <button class="text-2xl" on:click={toggleMenu}><Icon className="fa fa-times"/></button>
        </span>

        <ul class="flex flex-col items-center sm:flex-row gap-3 mt-5 md:mt-0">
            <a href="#about" on:click={toggleMenu} class="transition-all {fragment == "about" && active} hover:text-indigo-600"><li>About</li></a>
            <a href="#resume" on:click={toggleMenu} class="transition-all {fragment == "resume" && active} hover:text-indigo-600"><li>Resume</li></a>
            <a href="#projects" on:click={toggleMenu} class="transition-all {fragment == "projects" && active} hover:text-indigo-600"><li>Projects</li></a>
            <a href="#contact" on:click={toggleMenu} class="transition-all {fragment == "contact" && active} hover:text-indigo-600"><li>Contact</li></a>
        </ul>
    </nav>
</header>


