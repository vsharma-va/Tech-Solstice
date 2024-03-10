<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";
    import {TextPlugin} from "gsap/dist/TextPlugin";

    export let sectionName;
    export let arrayOfEventNames;
    export let gsapTimeline;

    onMount(() => {
        console.log(gsapTimeline);
        gsap.registerPlugin(TextPlugin);
        gsapTimeline.to(`.heading-${sectionName}`, {
            duration: 2,
            text: "Solstice Nexus 1.0.1",
            ease: "none",
        })
        gsapTimeline.to(`.line-2-${sectionName}`, {
            duration: 2,
            text: "PS C:> cd FESTS",
            ease: "none",
        })
        gsapTimeline.to(`.line-3-${sectionName}`, {
            duration: 2,
            text: "PS C:\\FESTS> cd Solstice",
            ease: "none",
        })
        gsapTimeline.to(`.line-4-${sectionName}`, {
            duration: 2,
            text: "PS C:\\FESTS\\Solstice> cd 2024",
            ease: "none",
        })
        gsapTimeline.to(`.line-5-${sectionName}`, {
            duration: 2,
            text: `PS C:\\FESTS\\Solstice\\2024> cd ${sectionName}`,
            ease: "none",
        })
        gsapTimeline.to(`.line-6-${sectionName}`, {
            duration: 2,
            text: `PS C:\\FESTS\\Solstice\\2024\\${sectionName}> ls`,
            ease: "none",
        })
        gsapTimeline.to(`.list-events-${sectionName}`, {
            opacity: 1,
        })
        gsapTimeline.to(`.line-7-${sectionName}`, {
            duration: 4,
            text: `PS C:\\FESTS\\Solstice\\2024\\${sectionName}> clear`,
            ease: "none",
        })
    })
</script>

<div class="h-full w-full -z-[1] flex flex-col overflow-hidden p-5 absolute top-0">
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] heading-{sectionName}">
    </p>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-2-{sectionName}">
    </p>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-3-{sectionName}">
    </p>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-4-{sectionName}">
    </p>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-5-{sectionName}">
    </p>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-6-{sectionName}">
    </p>
    <div class="flex flex-row items-center justify-center flex-wrap gap-2 mt-5 opacity-0 list-events-{sectionName}">
        {#each arrayOfEventNames as eventName}
            <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1]">
                {eventName}
            </p>
            <!--        <p class="regular-font text-sm tracking-wide text-on-primary-container/20 leading-[1.1]">-->
            <!--            Event Name 2</p>-->
            <!--        <p class="regular-font text-sm tracking-wide text-on-primary-container/20 leading-[1.1]">-->
            <!--            Event Name 3</p>-->
        {/each}
    </div>
    <p class="regular-font text-sm md:text-lg md:leading-5 tracking-wide text-on-primary-container/20 leading-[1.1] line-7-{sectionName}">
    </p>
</div>