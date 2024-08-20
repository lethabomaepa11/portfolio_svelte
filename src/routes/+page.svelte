<script>
import About from "../components/About.svelte"
import Resume from "../components/Resume.svelte"
import Projects from "../components/Projects.svelte"
import Contact from "../components/Contact.svelte"
import SideNav from "../components/SideNav.svelte"
import Header from "../components/Header.svelte"
import { onMount, onDestroy } from 'svelte';
	import MyInfo from "../components/MyInfo.svelte";

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
    <main class="p-5 w-full lg:w-3/4">
      <section class="lg:bg-slate-800 p-5 rounded-lg flex flex-col gap-5">
          <Header {fragment} {isVisible}/>
          <!---Bigger screens-->
          <main class="hidden lg:flex w-full p-5 rounded lg:overflow-y-scroll" style="max-height: 75vh;">
            {#if fragment == "about"}
              <About/>
            {:else if fragment == "resume"}
              <Resume/>
            {:else if fragment == "projects"}
              <Projects/>
            {:else if fragment == "contact"}
              <Contact/>
            {/if}
          </main>
          <!---Mobile Screens-->
          <main class="lg:hidden w-full lg:bg-slate-800 overflow-hidden  rounded lg:overflow-y-scroll flex flex-col justify-center items-center">
              <MyInfo/>
              <About/>
              <div class="my-80"></div>          
              <Resume/>
              <div class="my-80"></div>
              <Projects/>
              <div class="my-80"></div>
              <Contact/>
          </main>
      </section>
  
  </main>
  </div>
</body>




