<script>
    import {gsap} from "gsap/dist/gsap";
    import {page} from "$app/stores";
    import {signIn} from "@auth/sveltekit/client";
    import {goto} from "$app/navigation";
    import {clickedPassRedirectToken} from "../../store.js";

    export let displayName;
    export let rotateClass;
    export let cardBackgroundColorClass;
    export let headingTextColorClass;
    export let headingTextUnderlineColorClass;
    export let entryTextColorClass;
    export let buttonBgColorClass;
    export let buttonTextColorClass;
    export let buttonPriceBgColorClass;
    export let buttonPriceTextColorClass;
    export let includesArray;
    export let excludedArray;
    export let price;
    export let redirectToken;
    export let owned;
    export let token;
    export let userData;

    function animateLoadingPhase() {
        gsap.to('.button-inner-text', {
            display: 'none',
            duration: 0,
        })
        gsap.to('.loader-buy', {
            display: "flex",
            scale: 1,
            opacity: 1,
            ease: "circ.out",
            duration: 0.3,
        })
        let load = gsap.timeline({repeat: -1,})
        load.to('.loader', {
            scale: 0.75,
            opacity: 0.8,
            ease: "bounce.out",
        });
        load.to('.loader', {
            scale: 1,
            opacity: 1,
            ease: "bounce.out",
        });
    }

    function showDataForm() {
        let dataTimeline = gsap.timeline();
        dataTimeline.to('.data-form', {
            display: 'flex',
        });
        dataTimeline.to('.data-form', {
            top: 0,
            duration: 0.5,
            ease: "power4.out",
        });
    }
</script>

<div
        class="w-[81%] min-[410px]:w-[71%] min-[500px]:w-[56%] min-[600px]:w-[45%] sm:w-[43%] md:w-[34%] lg:w-[23%] xl:w-[19%] h-full flex-shrink-0 flex flex-col items-start justify-start border-2 border-surface {cardBackgroundColorClass} {rotateClass} pass-1 p-5 hover:-translate-y-[8px] hover:scale-[1.01] transition-all duration-300"
>
    <div
            class="h-fit w-fit brand-font text-4xl {headingTextColorClass} relative"
    >
        {displayName}
        <div
                class="h-[10px] w-full absolute bottom-0 {headingTextUnderlineColorClass}"
        ></div>
    </div>
    {#if !owned}
        <div
                class="h-full w-full flex flex-col items-start justify-between"
        >
            <div
                    class="h-full w-full flex flex-col items-start justify-center p-4"
            >
                <div
                        class="h-fit w-full flex flex-col items-start justify-center py-2"
                >
                    {#each includesArray as includeValue}
                        <div
                                class="relative brand-font text-2xl tracking-wide {entryTextColorClass} flex flex-row items-center justify-start gap-1"
                        >
                            <div
                                    class="h-3 w-3 rounded-full bg-success/70"
                            ></div>
                            <p>{includeValue}</p>
                        </div>
                    {/each}
                    {#each excludedArray as excludedValue}
                        <div
                                class="relative brand-font text-2xl tracking-wide {entryTextColorClass} flex flex-row items-center justify-start gap-1"
                        >
                            <div
                                    class="h-3 rounded-full bg-error/70 w-3 flex items-center justify-center"
                            ></div>
                            {excludedValue}
                            <div
                                    class="absolute top-1/2 -translate-y-1/2 h-[4px] w-full bg-error/60 left-0"
                            ></div>
                        </div>
                    {/each}
                </div>
            </div>
<!--            <button-->
<!--                    class="{buttonBgColorClass} text-2xl flex flex-row items-center justify-center gap-3 {buttonTextColorClass} brand-font px-5 py-1 flagship-buy-button group hover:bg-on-surface hover:text-surface"-->
<!--                    on:click={async () => {-->
<!--                                    $clickedPassRedirectToken = redirectToken;-->
<!--                                 if(!$page.data.session?.user) {-->
<!--                                   animateLoadingPhase();-->
<!--                                     await signIn('google', {callbackUrl: `${$page.url.pathname}?signedIn`})-->
<!--                                 } else {-->
<!--                                     if(!userData) {-->
<!--                                         showDataForm();-->
<!--                                     } else {-->
<!--                                        animateLoadingPhase();-->
<!--                                        await goto(`/payment/${redirectToken}`)-->
<!--                                     }-->
<!--                                 }-->
<!--                            }}-->
<!--            >-->
<!--                {#if $page.data.session?.user}-->
<!--                    <p class="button-inner-text">BUY</p>-->
<!--                {:else}-->
<!--                    <p class="button-inner-text">LOGIN</p>-->
<!--                {/if}-->
<!--                <div class="h-full w-full flex-col items-center justify-center loader-buy hidden scale-0">-->
<!--                    <div class="rounded-full bg-on-primary h-8 w-8 loader"></div>-->
<!--                </div>-->
<!--                <div class="{buttonPriceBgColorClass} {buttonPriceTextColorClass} group-hover:bg-primary group-hover:text-on-primary brand-font text-2xl flex flex-row items-center justify-center px-4 py-1 flagship-buy-text">-->
<!--                    <p>₹{price}</p>-->
<!--                </div>-->
<!--            </button>-->
                        <button class="{buttonBgColorClass} text-2xl flex flex-row items-center justify-center
                            gap-3 {buttonTextColorClass} brand-font px-5 py-1 flagship-buy-button group hover:bg-on-surface
                            hover:text-surface">
                            Coming Soon
                        </button>
        </div>
    {:else}
        <div class="h-full w-full flex flex-col">
            <div class="h-full w-full flex flex-col items-center justify-end">
                <p class="brand-font text-4xl tracking-wider {entryTextColorClass}">{token}</p>
            </div>
            <div class="h-full w-full flex flex-col items-end justify-end">
                <p class="brand-font text-2xl tracking-wider {entryTextColorClass}">Thank You!</p>
            </div>
        </div>
    {/if}
</div>