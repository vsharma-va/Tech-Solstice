<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";

    let flagshipCardTimeline;
    let flagshipBuyTimeline;
    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to(".letter-down", {
            y: 0,
        });
        onLoadTimeline.to('.passes-div', {
            x: 0,
            ease: "back.out(1.7)",
            duration: 1.25,
        });
        onLoadTimeline.to('.typewriter-1', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-2', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-3', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-4', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-5', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-6', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-7', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-8', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-9', {
            opacity: 1,
            duration: 0.25,
        });

        let eventsBannerTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.pass-trigger',
                start: 'top top',
                end: 'top -60%',
                scrub: true,
                markers: false,
            }
        });
        eventsBannerTl.to('.intro-banner', {
            opacity: 0.6,
            scale: 0.75,
            yPercent: 10,
        });


        flagshipCardTimeline = gsap.timeline();
        flagshipCardTimeline.to('.pass-1', {
            scale: 1.02,
            y: -10,
            ease: "back.out(1.7)",
        });
        flagshipCardTimeline.pause(0);


        flagshipBuyTimeline = gsap.timeline();
        flagshipBuyTimeline.to('.flagship-buy-button', {
            backgroundColor: onSurface,
            color: surface,
            ease: "steps(12)",
        });
        flagshipBuyTimeline.to('.flagship-buy-text', {
            backgroundColor: primary,
            color: onPrimaryContainer,
            ease: "steps(12)",
        }, "<")
        flagshipBuyTimeline.pause(0);

    });

    function flagshipCardHovered() {
        flagshipCardTimeline.play(0);
    }

    function flagshipCardInactive() {
        flagshipCardTimeline.reverse();
    }

    function flagshipBuyHovered() {
        flagshipBuyTimeline.play(0);
    }

    function flagshipBuyExit() {
        flagshipBuyTimeline.reverse();
    }
</script>

<Navbar/>
<div class="h-fit w-full pass-trigger bg-surface">
    <div class="h-[150vh] w-full flex flex-col">
        <div class="h-[90vh] w-full flex flex-col items-center justify-center intro-banner sticky top-0">
            <div class="h-fit w-full flex flex-col overflow-hidden">
                <div
                        class="pt-14 px-5 brand-font text-left h-fit w-full -translate-x-9 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
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

                </div>
                <div
                        class="px-5 brand-font text-right h-fit w-full translate-x-9 lg:translate-x-24 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                    <span class="letter-down -translate-y-[260px]">P</span>
                    <span class="letter-down -translate-y-[280px]">A</span>
                    <span class="letter-down -translate-y-[300px]">S</span>
                    <span class="letter-down -translate-y-[320px]">S</span>
                    <span class="letter-down -translate-y-[340px]">E</span>
                    <span class="letter-down -translate-y-[360px]">S</span>
                </div>
            </div>
            <div class="h-fit w-full flex flex-col items-center justify-center px-5 mt-24">
                <p class="brand-font text-3xl sm:text-4xl lg:text-5xl text-primary tracking-wide text-center">
                    <span class="typewriter-1 opacity-0">SECURE</span>
                    <span class="typewriter-2 opacity-0">YOUR</span>
                    <span class="typewriter-3 opacity-0">TECH</span>
                    <span class="typewriter-4 opacity-0">VOYAGE: </span>
                    <span class="typewriter-5 opacity-0">PASSES</span>
                    <span class="typewriter-6 opacity-0">FOR</span>
                    <span class="typewriter-7 opacity-0">LIMITLESS</span>
                    <span class="typewriter-8 opacity-0">FESTIVAL</span>
                    <span class="typewriter-9 opacity-0">THRILLS!</span>
                </p>
            </div>
        </div>
        <!--        <div-->
        <!--                class="pt-14 px-5 brand-font text-left h-1/2 w-full font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip">-->
        <!--            <span class="letter-down -translate-y-[70px]">A</span>-->
        <!--            <span class="letter-down -translate-y-[90px]">V</span>-->
        <!--            <span class="letter-down -translate-y-[110px]">A</span>-->
        <!--            <span class="letter-down -translate-y-[130px]">I</span>-->
        <!--            <span class="letter-down -translate-y-[150px]">L</span>-->
        <!--            <span class="letter-down -translate-y-[170px]">A</span>-->
        <!--            <span class="letter-down -translate-y-[180px]">B</span>-->
        <!--            <span class="letter-down -translate-y-[200px]">L</span>-->
        <!--            <span class="letter-down -translate-y-[220px]">E</span>-->
        <!--            <span class="letter-down -translate-y-[240px]">&nbsp;</span>-->
        <!--            <span class="letter-down -translate-y-[260px]">P</span>-->
        <!--            <span class="letter-down -translate-y-[280px]">A</span>-->
        <!--            <span class="letter-down -translate-y-[300px]">S</span>-->
        <!--            <span class="letter-down -translate-y-[320px]">S</span>-->
        <!--            <span class="letter-down -translate-y-[340px]">E</span>-->
        <!--            <span class="letter-down -translate-y-[360px]">S</span>-->
        <!--        </div>-->
        <div class="h-[60vh] w-full overflow-x-hidden">
            <div class="h-[60vh] box-border relative pl-5 py-[10px] translate-x-[100%] passes-div">
                <div
                        class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                        on:mouseenter={flagshipCardHovered}
                        on:mouseleave={flagshipCardInactive}
                >
                    <div
                            class="w-[81%] min-[410px]:w-[71%] min-[500px]:w-[56%] min-[600px]:w-[45%] sm:w-[43%] md:w-[34%] lg:w-[23%] xl:w-[19%] h-full flex-shrink-0 flex flex-col items-start justify-start rounded-2xl border-2 border-surface bg-on-surface -rotate-[4deg] pass-1 p-5"
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
                                    class="rounded-2xl bg-primary text-2xl flex flex-row items-center justify-center gap-3 text-on-primary brand-font px-5 py-1 flagship-buy-button"
                                    on:mouseenter={flagshipBuyHovered}
                                    on:mouseleave={flagshipBuyExit}
                            >
                                BUY
                                <div class="bg-on-surface brand-font text-2x rounded-2xl flex flex-row items-center justify-center px-4 py-1 flagship-buy-text">
                                    <p>₹200</p>
                                </div>
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