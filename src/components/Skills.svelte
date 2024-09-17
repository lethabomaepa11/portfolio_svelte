<script>
	import { fade, blur, fly, slide, scale } from "svelte/transition";

    const skills = [{name:"React",percent:75},
    {name:"NextJS",percent:70},
    {name:"SQL",percent:94},
    {name:"HTML5/CSS3",percent:90},
    {name:"JavaScript",percent:83},
    {name:"Responsive Web Design",percent:60},
    {name:"Version Control (Git)",percent:66},
    {name:"UI/UX Principles",percent:60},
    {name:"Problem-Solving",percent:89},
    {name:"Team Collaboration",percent:88},
    {name:"Svelte",percent:58}]
</script>
<section in:slide id="skills" class="flex flex-col gap-4" data-aos="fade-up">
    <h1 class="md:hidden font-bold text-2xl page">Skills</h1>
    <!-- Skills will be updated and fetched from database-->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 items-start justify-start">
            {#each skills as skill}
                    
                        <div class="flex flex-col items-center mb-1 hover:bg-gray-700 rounded-md">
                            <div class="pie animate" style={`--p:${skill.percent};--c:royalblue`}> {skill.percent}%</div>
                            <span class="text-base font-medium text-blue-700 dark:text-white">{skill.name}</span>
                        </div>
                        
            {/each}
                    </div>
    <h2>Education</h2>
    <p>
        <b>Bachelor of Science in Information Technology</b><br>
        <i>
            North West University, Vanderbiljpark<br>
            Expected Graduation: 2026
        </i>
    </p>
</section>