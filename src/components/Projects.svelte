<script>

    import { fade, blur, fly, slide, scale } from "svelte/transition";
	import Project from "./Project.svelte";

    const projects = [{
        name: "Quiz Application",
        description: "This is a quiz application that allows users to create, delete and try quizzes, any user can try any quiz multiple times, each user will be able to view their results to a specific quiz upon completion, they can also get their results in their profile pages, these results are only visible to them.",
        link: "https://looquiz.vercel.app" ,
        languages: "javascript, react, nextjs",
        images: [
            "looquiz_login.png","looquiz_profile.png","looquiz.jpeg"
        ]
    },
    {
        name: "Hotel Room Booking system",
        description: "This is just a small demo website for making hotel room bookings.\
        I made this as a prototype to show my group members how the system we were planning to develop for our System Analysis and design final project would look like.It has also helped to identify the possible ways we can implement some features on the one we were to develop, we developed that one using ASP.NET."
        ,languages: "javascript, react, nextjs",
        images: [
            "potchstream.png","potchstream-admin.png","potchstream_rooms.png","potchstream_help.png","potchstream_admin_rooms.png"
        ],
        link: "https://potchstream.vercel.app"
    }]
</script>
<section in:slide id="projects" class="w-[90vw] px-5 lg:p-0">
    <h1 class="md:hidden font-bold text-2xl page">Projects</h1>
    <div class="flex flex-wrap gap-3 flex-col md:flex-row min-w-full py-5">
        {#each projects as project}
        <Project name={project.name} languages={project.languages} description={project.description} link={project.link} images={project.images}/>
        {/each}
        

    </div>

</section>