<script>
  import "../app.css";
  import SideNav from "../components/SideNav.svelte";
  import Header from "../components/Header.svelte";
  import {page} from "$app/stores"
	import PageWrapper from "../components/PageWrapper.svelte";
  const headings = [{
            text: "About Me",
            path: "/"
        },{
            text: "Resume",
            path: "/resume"
        },{
            text: "Projects",
            path: "/projects"
        },{
            text: "Contact Me",
            path: "/contact"
        },];
        let h = $page.url.pathname;
    export let getHeading = () =>{
      h = $page.url.pathname;
        const currentHeading = headings.find(item => item.path === h);
        return currentHeading ? currentHeading.text: "not found";
    }
</script>

<body class="bg-slate-900 min-h-screen">
  <div class="flex items-start gap-3 w-screen">
    <SideNav/>
    <main class="p-5 w-full lg:w-3/4">
      <section class="md:bg-slate-200 p-5 rounded-md flex flex-col gap-5">
          <Header heading={getHeading()} pathname={$page.url.pathname}/>
          <main class="w-full md:bg-slate-300 p-5 rounded md:overflow-scroll" style="max-height: 75vh;">
            <PageWrapper>
              <slot/>
            </PageWrapper> 
          </main>
      </section>
  
  </main>
  </div>
</body>
