<script>
    let isVisible = false; 
    export let pathname;
    export let heading;
    
    let active = "text-indigo-600 font-bold";
    function toggleMenu() {
        isVisible = !isVisible;
    }
    
</script>
<a href="/" class="md:hidden"><h1 class="text-2xl font-bold text-gray-800 fixed top-0 left-0 ml-3 mt-3">Lethabo <span class="text-indigo-600">Maepa</span></h1></a>
<header class="flex justify-between items-center">
    <h1 class="text-white md:text-black font-bold text-2xl">{heading}</h1>
    <button on:click={toggleMenu} class="md:hidden text-white md:text-black"><i class="fa fa-bars"></i></button>
    <nav class="md:flex bg-slate-300 p-2 rounded-md {isVisible ? 'flex flex-col h-screen w-4/5 z-50 fixed bottom-0 p-5 right-0' : 'hidden'}">
        <span class="flex justify-between items-center md:hidden">
            <h1 class="text-2xl">Menu</h1>
            <button class="text-2xl" on:click={toggleMenu}><i class="fa fa-times"></i></button>
        </span>
        <ul class="flex flex-col items-center sm:flex-row gap-3 mt-5 md:mt-0">
            <a href="/" class="transition-all {pathname == "/" && active} hover:text-indigo-600"><li>About</li></a>
            <a href="/resume" class="transition-all {pathname == "/resume" && active} hover:text-indigo-600"><li>Resume</li></a>
            <a href="/projects" class="transition-all {pathname == "/projects" && active} hover:text-indigo-600"><li>Projects</li></a>
            <a href="/contact" class="transition-all {pathname == "/contact" && active} hover:text-indigo-600"><li>Contact</li></a>
        </ul>
    </nav>
</header>


