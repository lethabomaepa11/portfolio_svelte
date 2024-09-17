
<script>
    export let name, languages,description, link, images;
    link = link != undefined> 0?link:"";
</script>


    <div class="px-3 rounded-md max-w-screen-sm md:max-w-sm flex flex-col gap-3 border py-2 lg:min-w-80">
        <h1>{name}</h1> 
        <p class="text-xs text-blue-600">{languages}</p>
        
        <p class="text-sm h-28 overflow-hidden">{description}</p>
        <a href="javascript:void(0)" class="text-blue-500 text-sm hover:underline">See more...</a>
        <!--When you click on the screenshots, a modal is displayed with the image scroller-->
        <div class="screenshots w-full h-9 flex gap-2">
            {#each images as  image}
            <img src={`/screenshots/${image}`} alt={image} class="w-9"/>
            {/each}
        </div>
        
        {#if link != undefined}
        <a href={link != undefined> 0?link:""}>
            <button class="p-2 rounded-md bg-blue-500 w-full hover:bg-blue-800 transition-all">
                Visit
            </button>
        </a>
        {/if}
    </div>

        