<script>
    import {gsap} from "gsap/dist/gsap";

    // to do add different color palettes for different categories
    export let eventName;
    export let taglineHere;
    export let descriptionText;
    export let showPrizePool;
    export let includedWith;
    export let first;
    export let second;
    export let third;
    export let handbookLink;
    export let flagship;
    export let esports;
    export let technical;

    let gradientClass;

    if (flagship) {
        gradientClass = "flagship-gradient";
    } else if (esports) {
        gradientClass = "linkedin";
    } else if (technical) {
        gradientClass = "technical-gradient";
    }

    function moveCarouselRight(trigger, scrollToClass) {
        console.debug("Right");
        gsap.to(`.${trigger}`, {
            duration: 1,
            scrollTo: `.${scrollToClass}`,
        });
        let tl = gsap.timeline();
        tl.to('.on-right-indicator', {
            opacity: 1,
        });
        tl.to('.on-left-indicator', {
            opacity: 0.2,
        })
    }

    function moveCarouselLeft(trigger, scrollToClass) {
        gsap.to(`.${trigger}`, {
            duration: 1,
            scrollTo: {x: `.${scrollToClass}`, offsetX: 176},
        })
        let tl = gsap.timeline();
        tl.to('.on-left-indicator', {
            opacity: 1,
        });
        tl.to('.on-right-indicator', {
            opacity: 0.2,
        })
    }
</script>
<div class="h-fit w-full flex flex-col relative">
    <div class="h-[85dvh] w-full flex flex-row px-5 lg:px-36 flex-nowrap overflow-x-scroll overflow-y-visible gap-2 no-scrollbar relative event-carousel-1 lg:gap-10">
        <div class="w-full h-full sm:w-[75%] relative text-on-surface flex-shrink-0 image-div-event-1 {gradientClass}">
            <!--            <img src="{eventBackground}" alt=""-->
            <!--                 class="h-full w-full object-cover inline-block display-image absolute top-0 bottom-0 z-0">-->
            <div class="absolute bottom-2 left-2 h-fit w-[75%] flex flex-col items-start justify-center p-5 bg-surface gap-1">
                <div class="brand-font text-4xl sm:text-5xl tracking-wide text-on-surface leading-[1] h-fit max-w-prose relative">
                    <p>{eventName}</p>
                    <div class="absolute bottom-0 h-[10px] w-full bg-primary/70"></div>
                </div>
                <p class="brand-font text-2xl lg:text-3xl tracking-wide text-on-surface/80">{taglineHere}</p>
                <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2">
                    Register
                </button>
            </div>
        </div>
        <div class="w-full h-full sm:w-[75%] border-[1.5px] border-on-surface relative text-on-surface flex-shrink-0 flex flex-col p-5 lg:p-10 gap-5 lg:gap-9 description-div-event-1 items-start justify-start backdrop-blur-lg overflow-y-scroll">
            <div class="w-full h-fit flex flex-col gap-2 lg:gap-4">
                <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                    <p>Description</p>
                    <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                </div>
                <p class="regular-font text-sm sm:text-lg lg:text-xl sm:leading-[1.2] text-on-surface/80">
                    {#if descriptionText.includes("__namehere__")}
                        {descriptionText.split("__namehere__")[0]}<span class="blur-sm relative">Name<div
                            class="w-full h-full bg-primary absolute top-0"></div></span>{descriptionText.split("__namehere__")[1]}
                    {:else}
                        {descriptionText}
                    {/if}
                </p>
                {#if showPrizePool}
                    <a class="px-4 py-1 bg-primary w-fit text-on-primary brand-font text-2xl sm:text-3xl flex flex-row"
                       href="{handbookLink}" target="_blank">
                        {#if handbookLink === '-1'}
                            Handbook (Soon)
                        {:else}
                            Handbook
                        {/if}
                    </a>
                {/if}
            </div>
            {#if showPrizePool}
                <div class="w-full h-fit flex flex-col gap-2 lg:gap-4">
                    <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                        <p>Prize Pool</p>
                        <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                    </div>
                    <div class="flex flex-row w-full h-fit items-center justify-around">
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                            {#if first === -1}
                                <div class="brand-font text-2xl sm:text-3xl lg:text-4xl blur-sm text-on-surface/80 relative">
                                    <p>PrizePool</p>
                                    <div class="w-full h-full absolute bg-primary top-0"></div>
                                </div>
                            {:else}
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">₹{first}</p>
                            {/if}
                        </div>
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-gray-300"></div>
                            {#if second === -1}
                                <div class="brand-font text-2xl sm:text-3xl lg:text-4xl blur-sm text-on-surface/80 relative">
                                    <p>PrizePool</p>
                                    <div class="w-full h-full absolute bg-primary top-0"></div>
                                </div>
                            {:else}
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">₹{second}</p>
                            {/if}
                        </div>
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-yellow-950"></div>
                            {#if third === -1}
                                <div class="brand-font text-2xl sm:text-3xl lg:text-4xl blur-sm text-on-surface/80 relative">
                                    <p>PrizePool</p>
                                    <div class="w-full h-full absolute bg-primary top-0"></div>
                                </div>
                            {:else}
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">₹{third}</p>
                            {/if}
                        </div>
                    </div>
                </div>
            {/if}
            <div class="w-full h-fit flex flex-col gap-3 lg:gap-4">
                <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                    <p>Included With</p>
                    <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                </div>
                <div class="w-full h-fit flex flex-row">
                    <div class="w-fit h-fit bg-on-surface sm:text-2xl flex flex-row px-3 py-1">
                        <p class="brand-font text-2xl lg:text-4xl text-surface">{includedWith}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute hidden sm:flex -top-2 w-fit h-fit left-1/2 -translate-x-1/2 flex-row items-center justify-center gap-2 bg-surface border-[1px] border-on-surface p-2">
        <button class="h-3 w-3 rounded-full bg-primary on-left-indicator"
                on:mousedown={() => moveCarouselLeft("event-carousel-1", "image-div-event-1")}
        ></button>
        <button class="h-3 w-3 rounded-full bg-primary opacity-[0.2] on-right-indicator"
                on:mousedown={() => moveCarouselRight("event-carousel-1", "description-div-event-1")}
        ></button>
    </div>
</div>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>