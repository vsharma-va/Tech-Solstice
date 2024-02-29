<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to(".letter-down", {
            y: 0,
        })

        let horizontalTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.pass-trigger',
                start: 'top top',
                end: 'top -300%',
                scrub: true,
                markers: false,
            }
        });
        horizontalTimeline.to('.horizontal-scroll-element', {
            xPercent: -175,
        });

        let changeCurrentActiveTimeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.pass-trigger',
                start: 'top top',
                end: 'top -200%',
                scrub: true,
                markers: false,
            }
        })
        changeCurrentActiveTimeline1.to('.pass-1', {
            scale: 1,
            y: 0,
        });
        changeCurrentActiveTimeline1.to('.pass-2', {
            scale: 1.07,
            y: -4,
        }, "<");
        changeCurrentActiveTimeline1.to('.pass-2', {
            scale: 1,
            y: 0,
        });
        changeCurrentActiveTimeline1.to('.pass-3', {
            scale: 1.07,
            y: -4,
        }, "<")

        let changeCurrentActiveTimeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.pass-trigger',
                start: 'top -100%',
                end: 'top -200%',
                scrub: true,
                markers: false,
            }
        })
        // changeCurrentActiveTimeline1.to('.pass-1', {
        //     scale: 1,
        //     y: 0,
        // })
    })


    function handleSwipingCards(e) {
        console.log("what");
        // console.log(e.pageX);
    }
</script>
<Navbar/>
<div class="h-[300vh] w-full pass-trigger">
    <div class="h-screen w-full bg-surface flex flex-col sticky top-0">
        <div class="pt-14 px-5 brand-font text-left h-fit w-full font-bold flex flex-row items-center justify-start text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip">
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
        <div class="h-full box-border relative px-5 py-24 overflow-hidden ">
            <div class="relative w-full h-full flex flex-row items-center justify-start flex-nowrap box-border gap-0 px-5 horizontal-scroll-element">
                <div class="w-[90%] h-full flex-shrink-0 flex flex-col items-start justify-start rounded-2xl border-2 border-surface bg-on-surface -rotate-[4deg] pass-1 -translate-y-1 scale-[1.07] p-5">
                    <div class="h-fit w-fit brand-font text-4xl text-surface relative">
                        Flagship Pass
                        <div class="h-[10px] w-full absolute bottom-0 bg-primary/80"></div>
                    </div>
                    <div class="h-full w-full flex flex-col items-start justify-between">
                        <div class="h-full w-full flex flex-col items-start justify-center p-4">
                            <div class="h-fit w-full flex flex-col items-start justify-center py-2">
                                <div class="relative brand-font text-2xl tracking-wide text-surface">
                                    Proshow
                                    <div class="absolute bottom-0 h-[8px] bg-success/60 w-full"></div>
                                </div>
                                <div class="relative brand-font text-2xl tracking-wide text-surface">
                                    Standup
                                    <div class="absolute bottom-0 h-[8px] bg-success/60 w-full"></div>
                                </div>
                                <div class="relative brand-font text-2xl tracking-wide text-surface">
                                    <p class="">All Flagship Events</p>
                                    <div class="absolute bottom-0 h-[8px] bg-success/60 w-full"></div>
                                </div>
                                <div class="relative brand-font text-2xl tracking-wide text-surface">
                                    Esports
                                    <div class="absolute bottom-0 h-[8px] bg-error/60 w-full"></div>
                                </div>
                            </div>
                        </div>
                        <button class="rounded-2xl bg-primary text-2xl text-on-primary brand-font px-9 py-1">
                            Buy
                        </button>
                    </div>
                </div>
                <div class="w-[90%] h-full flex-shrink-0 rounded-2xl bg-primary rotate-[8deg] z-[2] pass-2"></div>
                <div class="w-[90%] h-full flex-shrink-0 rounded-2xl bg-on-primary -rotate-[4deg] z-[2] pass-3"></div>
            </div>
        </div>
    </div>
</div>