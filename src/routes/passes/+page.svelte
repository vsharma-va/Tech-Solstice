<script>
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onMount } from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to(".letter-down", {
            y: 0,
        });

        let horizontalTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".pass-trigger",
                start: "top top",
                end: "top -300%",
                scrub: true,
                markers: false,
            },
        });
        horizontalTimeline.to(".horizontal-scroll-element", {
            xPercent: -175,
        });

        let changeCurrentActiveTimeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".pass-trigger",
                start: "top top",
                end: "top -200%",
                scrub: true,
                markers: false,
            },
        });
        changeCurrentActiveTimeline1.to(".pass-1", {
            scale: 1,
            y: 0,
        });
        changeCurrentActiveTimeline1.to(
            ".pass-2",
            {
                scale: 1.07,
                y: -4,
            },
            "<",
        );
        changeCurrentActiveTimeline1.to(".pass-2", {
            scale: 1,
            y: 0,
        });
        changeCurrentActiveTimeline1.to(
            ".pass-3",
            {
                scale: 1.07,
                y: -4,
            },
            "<",
        );
    });
</script>

<Navbar />
<div class="h-[300vh] w-full pass-trigger">
    <div class="h-screen w-full bg-surface flex flex-col sticky top-0">
        <div
            class="pt-14 px-5 brand-font text-left h-fit w-full font-bold flex flex-row items-center justify-start text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip"
        >
            <span class="letter-down -translate-y-[70px]">A</span>
            <span class="letter-down -translate-y-[90px]">V</span>
            <span class="letter-down -translate-y-[110px]">A</span>
            <span class="letter-down -translate-y-[130px]">I</span>
            <span class="letter-down -translate-y-[150px]">L</span>
            <span class="letter-down -translate-y-[170px]">A</span>
            <span class="letter-down -translate-y-[180px]">B</span>
            <span class="letter-down -translate-y-[200px]">L</span>
            <span class="letter-down -translate-y-[220px]">E</span>
            <span class="letter-down -translate-y-[240px]">&nbsp;</span>
            <span class="letter-down -translate-y-[260px]">P</span>
            <span class="letter-down -translate-y-[280px]">A</span>
            <span class="letter-down -translate-y-[300px]">S</span>
            <span class="letter-down -translate-y-[320px]">S</span>
            <span class="letter-down -translate-y-[340px]">E</span>
            <span class="letter-down -translate-y-[360px]">S</span>
        </div>
        <div class="h-full box-border relative px-5 py-24 overflow-hidden">
            <div
                class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element"
            >
                <div
                    class="w-[90%] min-[410px]:w-[80%] min-[500px]:w-[60%] min-[600px]:w-[48%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full flex-shrink-0 flex flex-col items-start justify-start rounded-2xl border-2 border-surface bg-on-surface -rotate-[4deg] pass-1 -translate-y-1 scale-[1.07] p-5"
                >
                    <div
                        class="h-fit w-fit brand-font text-4xl text-surface relative"
                    >
                        Flagship Pass
                        <div
                            class="h-[10px] w-full absolute bottom-0 bg-primary/80"
                        ></div>
                    </div>
                    <div
                        class="h-full w-full flex flex-col items-start justify-between"
                    >
                        <div
                            class="h-full w-full flex flex-col items-start justify-center p-4"
                        >
                            <div
                                class="h-fit w-full flex flex-col items-start justify-center py-2"
                            >
                                <div
                                    class="relative brand-font text-2xl tracking-wide text-surface flex flex-row items-center justify-start gap-1"
                                >
                                    <div
                                        class="h-3 w-3 rounded-full bg-success/70"
                                    ></div>
                                    <p>Proshow</p>
                                </div>
                                <div
                                    class="h-fit w-full items-center justify-start relative brand-font text-2xl tracking-wide text-surface flex flex-row gap-1"
                                >
                                    <div
                                        class="h-3 rounded-full bg-success/70 w-3"
                                    ></div>
                                    <p>Standup</p>
                                </div>
                                <div
                                    class="relative brand-font text-2xl tracking-wide text-surface flex flex-row items-center justify-start gap-1"
                                >
                                    <div
                                        class="h-3 rounded-full bg-success/70 w-3"
                                    ></div>
                                    <p class="">All Flagship Events</p>
                                </div>
                                <div
                                    class="relative brand-font text-2xl tracking-wide text-surface flex flex-row items-center justify-start gap-1"
                                >
                                    <div
                                        class="h-3 rounded-full bg-error/70 w-3 flex items-center justify-center"
                                    ></div>
                                    Esports
                                    <div
                                        class="absolute top-1/2 -translate-y-1/2 h-[4px] w-full bg-error/60 left-0"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <button
                            class="rounded-2xl bg-primary text-2xl flex flex-row items-center justify-center gap-3 text-on-primary brand-font px-5 py-1"
                        >
                            BUY
                            <div class="bg-on-surface brand-font text-2x rounded-2xl flex flex-row items-center justify-center px-4 py-1"><p>₹200</p></div>
                        </button>
                    </div>
                </div>
                <div
                    class="w-[90%] min-[410px]:w-[80%] min-[500px]:w-[60%] min-[600px]:w-[48%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full flex-shrink-0 rounded-2xl bg-primary rotate-[8deg] z-[2] pass-2"
                ></div>
                <div
                    class="w-[90%] min-[410px]:w-[80%] min-[500px]:w-[60%] min-[600px]:w-[48%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full flex-shrink-0 rounded-2xl bg-on-primary -rotate-[4deg] z-[2] pass-3"
                ></div>
            </div>
        </div>
    </div>
</div>