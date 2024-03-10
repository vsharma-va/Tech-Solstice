<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
    import {onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import PassCard from "$lib/Passes/PassCard.svelte";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    export let data;

    let flagshipCardTimeline;
    let flagshipBuyTimeline;
    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";

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
        gsap.registerPlugin(ScrollToPlugin);

        let tl = gsap.timeline();
        tl.to('.login-notif', {
            top: 56,
            duration: 1,
            ease: "elastic.out(1,0.3)",
        });
        tl.to('.login-notif', {
            top: "-100%",
            delay: 2,
        })

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to(".letter-down", {
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
    {#if !$page.data.session?.user}
        <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
            <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
                <div class="flex flex-row h-fit w-fit items-center justify-center">
                    <p class="text-center">Please Login To Buy Passes</p>
                </div>
            </div>
        </div>
    {/if}
    <div class="h-[150dvh] w-full flex flex-col">
        {#if data.existingPayments}
            <div class="h-screen w-full fixed top-0 backdrop-blur-2xl z-[3] flex flex-col items-center justify-center">
                <div class="h-fit w-fit rounded-2xl border-2 border-on-surface bg-surface flex flex-col items-start justify-center p-5 gap-5">
                    <p class="brand-font text-primary text-5xl tracking-wide">ALERT!</p>
                    <div class="h-fit w-fit flex flex-col">
                        <p class="brand-font text-on-surface text-3xl tracking-wide">An already open payment was
                            found!</p>
                        <p class="brand-font text-on-surface text-3xl tracking-wide">What would you like to do?</p>
                        <div class="h-fit w-full flex flex-row items-center justify-between mt-5">
                            <button class="bg-primary text-on-primary rounded-2xl px-2 py-1 brand-font tracking-wide text-xl"
                                    on:click={() => {
                                    console.log("Hello World");
                                    for (let key in data.availablePasses) {
                                        if(data.availablePasses[key].dbName === data.existingPaymentsData.pass_name) {
                                            goto(`/payment/${data.availablePasses[key].token}`);
                                            break;
                                        }
                                    }
                                }}>
                                >
                                Refresh Payment Status?
                            </button>
                            <form action="?/cancelPayment"></form>
                            <button class="bg-primary text-on-primary rounded-2xl px-4 py-1 brand-font tracking-wide text-xl">
                                Cancel?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
        <div class="h-[90dvh] w-full flex flex-col items-center justify-center intro-banner sticky top-0">
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
        <div class="h-[60dvh] w-full overflow-x-hidden">
            <div class="h-[60dvh] box-border relative pl-5 py-[10px] translate-x-[100%] passes-div">
                <div
                        class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                >
                    {#each Object.entries(data.availablePasses) as [key, value], index}
                        {#if (index + 1) % 2 === 0}
                            <PassCard rotateClass="rotate-[8deg]"
                                      includesArray="{value['includes']}"
                                      excludedArray="{value.excluded}"
                                      price="{value.cost}"
                                      redirectToken="{value.token}"
                                      displayName="{value.displayName}"
                                      owned="{false}"
                                      token=""
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
                                      includesArray="{value['includes']}"
                                      excludedArray="{value.excluded}"
                                      price="{value.cost}"
                                      redirectToken="{value.token}"
                                      displayName="{value.displayName}"
                                      owned="{false}"
                                      token=""
                                      cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                      headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                      headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                      entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                      buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                      buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                      buttonPriceBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceBgColorClass}"
                                      buttonPriceTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceTextColorClass}"/>
                        {/if}
                        <!--                    <div-->
                        <!--                            class="w-[90%] min-[410px]:w-[80%] min-[500px]:w-[60%] min-[600px]:w-[48%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full flex-shrink-0 rounded-2xl bg-primary rotate-[8deg] z-[2] pass-2"-->
                        <!--                    ></div>-->
                        <!--                    <div-->
                        <!--                            class="w-[90%] min-[410px]:w-[80%] min-[500px]:w-[60%] min-[600px]:w-[48%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-full flex-shrink-0 rounded-2xl bg-on-primary -rotate-[4deg] z-[2] pass-3"-->
                        <!--                    ></div>-->
                    {/each}
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