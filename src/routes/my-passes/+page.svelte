<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import PassCard from "$lib/Passes/PassCard.svelte";
    import Loader from "$lib/common/Loader.svelte";

    export let data;

    let cardColorPallets = [{
        cardBackgroundColorClass: "bg-on-surface",
        headingTextColorClass: "text-surface",
        headingTextUnderlineColorClass: "bg-primary/80",
        entryTextColorClass: "text-surface",
        buttonBgColorClass: "bg-primary",
        buttonTextColorClass: "text-on-primary",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }, {
        cardBackgroundColorClass: "bg-primary-container",
        headingTextColorClass: "text-on-primary-container",
        headingTextUnderlineColorClass: "bg-on-primary-container/80",
        entryTextColorClass: "text-on-primary-container",
        buttonBgColorClass: "bg-on-primary-container",
        buttonTextColorClass: "text-primary-container",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }, {
        cardBackgroundColorClass: "bg-primary",
        headingTextColorClass: "text-primary-container",
        headingTextUnderlineColorClass: "bg-on-primary-container/80",
        entryTextColorClass: "text-primary-container",
        buttonBgColorClass: "bg-primary-container",
        buttonTextColorClass: "text-primary",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }]

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        let onLoadTimeline = gsap.timeline({
            delay: 3.1, onStart: () => {
                gsap.set('.letter-down', {clearProps: true})
            }
        })
        onLoadTimeline.to('.letter-down', {
            y: 0,
        });
        onLoadTimeline.to(window, {
            scrollTo: 100,
        })
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
    })
</script>
<Navbar/>
<Loader/>
<div class="h-fit w-full bg-surface pass-trigger">
    <div class="h-[150vh] w-full flex flex-col">
        <div class="h-[90vh] w-full flex flex-col items-center justify-center intro-banner sticky top-0">
            <div class="h-fit w-full flex flex-col overflow-hidden">
                <div
                        class="pt-14 px-5 brand-font text-left h-fit w-full -translate-x-9 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                    <span class="letter-down -translate-y-[70px]">Y</span>
                    <span class="letter-down -translate-y-[90px]">O</span>
                    <span class="letter-down -translate-y-[110px]">U</span>
                    <span class="letter-down -translate-y-[130px]">R</span>
                    <span class="letter-down -translate-y-[150px]">&nbsp;</span>

                </div>
                <div
                        class="px-5 brand-font text-right h-fit w-full translate-x-9 lg:translate-x-24 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                    <span class="letter-down -translate-y-[170px]">P</span>
                    <span class="letter-down -translate-y-[190px]">A</span>
                    <span class="letter-down -translate-y-[210px]">S</span>
                    <span class="letter-down -translate-y-[230px]">S</span>
                    <span class="letter-down -translate-y-[250px]">E</span>
                    <span class="letter-down -translate-y-[270px]">S</span>
                </div>
            </div>
            <div class="h-fit w-full flex flex-col items-center justify-center px-5 mt-24">
                <p class="brand-font text-3xl sm:text-4xl lg:text-5xl text-primary tracking-wide text-center">
                    <span class="typewriter-1 opacity-0">YOUR</span>
                    <span class="typewriter-2 opacity-0">PASSES</span>
                    <span class="typewriter-3 opacity-0">WILL</span>
                    <span class="typewriter-4 opacity-0">BE </span>
                    <span class="typewriter-5 opacity-0">CHECKED</span>
                    <span class="typewriter-6 opacity-0">AT</span>
                    <span class="typewriter-7 opacity-0">THE</span>
                    <span class="typewriter-8 opacity-0">ENTRANCE</span>
                </p>
            </div>
        </div>
        <div class="h-[60vh] w-full overflow-x-hidden">
            <div class="h-[60vh] box-border relative pl-5 py-[10px] translate-x-[100%] passes-div">
                <div
                        class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                >
                    {#if data.ownedPasses.length === 0}
                        <div class="h-full w-full rounded-2xl border-2 border-on-surface flex flex-col items-center justify-center backdrop-blur-lg p-5 gap-5">
                            <p class="brand-font text-5xl lg:text-6xl text-on-surface">No Owned Passes</p>
                            <p class="brand-font text-2xl sm:text-3xl lg:text-4xl text-primary text-center">If you have
                                just made the payment go back to
                                the passes page and click on refresh status on the popup</p>
                        </div>
                    {:else}
                        {#each Object.entries(data.ownedPasses) as [_, value], index}
                            {#if (index + 1) % 2 === 0}
                                <PassCard rotateClass="rotate-[8deg]"
                                          owned="{true}"
                                          token="{value.token}"
                                          displayName="{value.pass_name.split('_')[0].charAt(0).toUpperCase() + value.pass_name.split('_')[0].slice(1)}"
                                          cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                          headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                          headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                          entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                          buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                          buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                          buttonPriceBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceBgColorClass}"
                                          buttonPriceTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceTextColorClass}"/>
                            {:else}
                                <PassCard rotateClass="-rotate-[4deg]"
                                          owned="{true}"
                                          token="{value.token}"
                                          displayName="{value.pass_name.split('_')[0].charAt(0).toUpperCase() + value.pass_name.split('_')[0].slice(1)}"
                                          cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                          headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                          headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                          entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                          buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                          buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                          buttonPriceBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceBgColorClass}"
                                          buttonPriceTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceTextColorClass}"/>
                            {/if}
                        {/each}
                    {/if}

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