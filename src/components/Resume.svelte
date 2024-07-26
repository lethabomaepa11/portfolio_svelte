<script>
    const skills = [{name:"React",percent:75},
    {name:"NextJS",percent:70},
    {name:"SQL",percent:94},
    {name:"HTML5/CSS3",percent:90},
    {name:"JavaScript",percent:83},
    {name:"Responsive Web Design",percent:60},
    {name:"Version Control (Git)",percent:66},
    {name:"UI/UX Principles",percent:60},
    {name:"Problem-Solving",percent:89},
    {name:"Team Collaboration",percent:88}]
</script>
<section id="resume" class="my-5 flex flex-col gap-4">
    <h1 class="md:hidden font-bold text-2xl">Resume</h1>

    <h2>Professional Summary</h2>
    <p>Motivated and detail-oriented second-year BSc Information student with a strong foundation in web development and
         proficiency in React. Passionate about creating dynamic and responsive web applications. Eager to apply academic 
         knowledge and project experience to contribute to a forward-thinking company.
         Known for excellent problem-solving skills, quick learning ability, and a collaborative mindset</p>

    <h2>Key Skills</h2>
    <!-- Skills will be updated and fetched from database-->
        <ul class="pl-5">
            {#each skills as skill}
                <p><li class="list-disc">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-blue-700 dark:text-white">{skill.name}</span>
                            <span class="text-sm font-medium text-blue-700 dark:text-white">{skill.percent}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: {skill.percent}%"></div>
                        </div>
  
                </li></p>
            {/each}
        </ul>
    <h2>Education</h2>
    <p>
        <b>Bachelor of Science in Information Technology</b><br>
        <i>
            North West University, Vanderbiljpark<br>
            Expected Graduation: 2026
        </i>
    </p>
</section>