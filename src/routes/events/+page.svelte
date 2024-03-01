<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import eventBackground from "$lib/assets/images/example-event-background.webp";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        let onLoadTimeline = gsap.timeline({});
        onLoadTimeline.to('.letter-down', {
            y: 0,
        })
    });
</script>

<div class="h-fit w-full bg-surface">
    <Navbar/>
    <div class="h-[800vh] w-full flex flex-col gap-10">
        <div
                class="pt-14 px-5 brand-font text-left h-fit w-full font-bold flex flex-row items-center justify-start text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip sticky top-0">
            <span class="letter-down -translate-y-[70px]">F</span>
            <span class="letter-down -translate-y-[90px]">E</span>
            <span class="letter-down -translate-y-[110px]">A</span>
            <span class="letter-down -translate-y-[130px]">T</span>
            <span class="letter-down -translate-y-[150px]">U</span>
            <span class="letter-down -translate-y-[170px]">R</span>
            <span class="letter-down -translate-y-[180px]">E</span>
            <span class="letter-down -translate-y-[200px]">D</span>
            <span class="letter-down -translate-y-[220px]">&nbsp;</span>
            <span class="letter-down -translate-y-[240px]">E</span>
            <span class="letter-down -translate-y-[260px]">V</span>
            <span class="letter-down -translate-y-[280px]">E</span>
            <span class="letter-down -translate-y-[300px]">N</span>
            <span class="letter-down -translate-y-[320px]">T</span>
            <span class="letter-down -translate-y-[340px]">S</span>
        </div>
        <div class="h-[70vh] w-full flex flex-row px-5 flex-nowrap overflow-x-scroll gap-2 no-scrollbar">
            <div class="w-full h-full rounded-2xl relative text-on-surface flex-shrink-0">
                <img src="{eventBackground}" alt=""
                     class="h-full w-full object-cover inline-block display-image rounded-2xl absolute top-0 bottom-0 z-0">
                <div class="absolute bottom-2 left-2 h-[25%] w-[60%] rounded-2xl flex flex-col items-start justify-center p-5 bg-surface gap-1">
                    <div class="brand-font text-4xl tracking-wide text-on-surface leading-[1] h-fit max-w-prose relative">
                        <p>EVENT NAME</p>
                        <div class="absolute bottom-0 h-[10px] w-full bg-primary/70"></div>
                    </div>
                    <p class="brand-font text-xl tracking-wide text-on-surface">Tagline Here</p>
                </div>
            </div>
            <div class="w-full h-full rounded-2xl border-2 border-on-surface relative text-on-surface flex-shrink-0 flex flex-col p-5 gap-5">
                <div class="w-full h-fit flex flex-col gap-4">
                    <div class="brand-font text-4xl text-on-surface h-fit w-fit relative">
                        <p>Description</p>
                        <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                    </div>
                    <p class="regular-font text-sm text-on-surface/80">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Accusantium aliquam animi assumenda aut dolorem eum exercitationem fugiat,
                        harum necessitatibus nisi, nobis non nostrum odit officiis quia quo recusandae unde vel?
                    </p>
                </div>
                <div class="w-full h-fit flex flex-col gap-4">
                    <div class="brand-font text-4xl text-on-surface h-fit w-fit relative">
                        <p>Prize Pool</p>
                        <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                    </div>
                    <div class="flex flex-row w-full h-fit items-center justify-around">
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <p class="brand-font text-2xl text-on-surface/80">₹1000</p>
                        </div>
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-gray-300"></div>
                            <p class="brand-font text-2xl text-on-surface/80">₹1000</p>
                        </div>
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            <div class="h-3 w-3 rounded-full bg-yellow-950"></div>
                            <p class="brand-font text-2xl text-on-surface/80">₹1000</p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-fit flex flex-col gap-4">
                    <div class="brand-font text-4xl text-on-surface h-fit w-fit relative">
                        <p>Included In</p>
                        <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                    </div>
                    <div class="w-full h-fit flex flex-row">
                        <div class="w-fit h-fit bg-on-surface rounded-2xl flex flex-row px-3 py-1">
                            <p class="brand-font text-2xl text-surface">Flagship</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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