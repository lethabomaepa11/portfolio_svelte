<script>
import About from "../components/About.svelte"
import Resume from "../components/Skills.svelte"
import Projects from "../components/Projects.svelte"
import Contact from "../components/Contact.svelte"
import SideNav from "../components/SideNav.svelte"
import Header from "../components/Header.svelte"
import { onMount, onDestroy } from 'svelte';
	import MyInfo from "../components/MyInfo.svelte";
	import Skills from "../components/Skills.svelte";

  let fragment = '';
  let isVisible = false;
  //$: document.title = "Lethabo Maepa: "+fragment;
 
  const updateFragment = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      fragment = url.hash.substring(1);
      if(fragment.length < 1){
        window.location.href = "/#about";
      }
      isVisible = false;
    }
    

  };

  onMount(() => {
    updateFragment(); // Initial setup
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', updateFragment); // Listen for hash changes
    }
    
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('hashchange', updateFragment); // Clean up event listener
    }
  });


</script>
<body class="bg-slate-900 min-h-screen">
  <div class="flex items-start gap-3 w-screen">
    <SideNav/>
    <main class="lg:p-5 w-full lg:w-3/4 z-40">
      <section class="lg:bg-slate-800 lg:p-5 rounded-lg flex flex-col gap-5">
          <Header {fragment} {isVisible}/>
          <!---Bigger screens-->
          <main class="hidden lg:flex w-full p-5 rounded lg:overflow-y-scroll" style="max-height: 75vh;">
            {#if fragment == "about"}
              <About/>
            {:else if fragment == "skills"}
              <Skills/>
            {:else if fragment == "projects"}
              <Projects/>
            {:else if fragment == "contact"}
              <Contact/>
            {/if}
          </main>
          <!---Mobile Screens-->
          <main class="lg:hidden w-screen lg:bg-slate-800 overflow-hidden  rounded lg:overflow-y-scroll flex flex-col justify-center items-center gap-3 p-3">
            <div data-aos="flip-up" data-aos-duration="2000" class="w-screen p-3">
                <MyInfo/>
              </div>
            <div data-aos="fade-zoom-in-up" data-aos-duration="2000" class=" w-screen p-3"><About/></div>
            <div data-aos="zoom-in-right" data-aos-duration="2000" class=" w-screen p-3"><Skills/> </div>
            <div data-aos="zoom-in-left" data-aos-duration="2000" class="w-screen p-3"><Projects/></div>
              
              
          </main>
      </section>
  
  </main>
  <!--background animation-->
  <div class="area" >
    <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    </ul>
</div >
  </div>
</body>




