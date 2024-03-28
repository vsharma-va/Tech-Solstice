<script>
    import {gsap} from "gsap/dist/gsap";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

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
    export let isRegistered;
    export let priority;
    export let userPasses;
    export let date;

    let hasEsports = false;
    let hasFlagship = false;

    for (let pass of userPasses) {
        if (pass.pass_name === 'esports__v2') {
            hasEsports = true;
        } else if (pass.pass_name === 'flagship__v2') {
            hasFlagship = true;
        }
    }

    let gradientClass;
    let registerButton;

    if (flagship) {
        gradientClass = "flagship-gradient";
    } else if (esports) {
        gradientClass = "linkedin";
    } else if (technical) {
        gradientClass = "technical-gradient";
    }

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

    onMount(() => {
        let proshowTimeline = gsap.timeline({
            onComplete: () => {
                proshowTimeline.play(0)
            },
            onReverseComplete: () => {
                setTimeout(() => {
                    proshowTimeline.play(0)
                }, 2000)
            },
        });

    })
</script>

<div class="h-fit w-full flex flex-col relative">
    <div class="h-[85vh] w-full flex flex-row px-5 lg:px-36 flex-nowrap overflow-x-scroll gap-2 no-scrollbar relative event-carousel-1 lg:gap-10">
        <div class="w-full h-full sm:w-[75%] relative text-on-surface flex-shrink-0 image-div-event-1 {gradientClass} overflow-hidden">
            <!--            priority of standup-->
            {#if priority === 1}
                <div class="h-full w-full overflow-hidden relative">
                    <iframe width="560" height="315" class="h-full w-full"
                            src="https://www.youtube-nocookie.com/embed/KBZfnt80s54?si=ysh0XXcmIFlgLKw1&amp;controls=0&amp;start=201&amp;end=207&amp;autoplay=1&amp;showinfo=0&amp;loop=1&amp;mute=1&amp;playlist=KBZfnt80s54"
                            title="YouTube video player" frameborder="0"
                            allow="autoplay; clipboard-write; encrypted-media; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    <div class="absolute top-0 h-full w-full bg-transparent"></div>
                </div>
                <!--                <img src="{akashGupta}" alt=""-->
                <!--                     class="h-full w-full object-contain inline-block display-image absolute top-0 bottom-0 z-0">-->
                <!--                <video src="{standupHidden}" class="h-full w-full object-cover inline-block absolute top-0 bottom-0 z-0"-->
                <!--                       autoplay muted loop></video>-->
            {:else if priority === 2}
                <div class="h-full w-full overflow-hidden relative">
                    <iframe width="560" height="315" class="h-full w-full"
                            src="https://www.youtube.com/embed/vaPJveQ9sWM?si=KV--Py8MHK5TTAaV,eWavfMSj03c&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;loop=1&amp;mute=1&amp;"
                            title="YouTube video player" frameborder="0"
                            allow="autoplay; clipboard-write; encrypted-media; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    <div class="absolute top-0 h-full w-full bg-transparent"></div>
                </div>
                <!--                <img src="{nikhil}" alt=""-->
                <!--                     class="h-full w-full object-contain inline-block display-image absolute top-0 bottom-0 z-0 scale-[1.3] nikhil-image">-->
                <!--                <img src="{vani}" alt=""-->
                <!--                     class="h-full w-full object-contain inline-block display-image absolute top-0 bottom-0 z-0 -translate-x-[25%] vani-image">-->
            {:else if priority === 3}
                <div class="h-full w-full overflow-hidden relative">
                    <iframe width="560" height="315" class="h-full w-full"
                            src="https://www.youtube.com/embed/GKFgUf6AwcU?si=Gjz3Nr4NcMxFZwfj&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;loop=1&amp;mute=1&amp;"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="absolute top-0 h-full w-full bg-transparent"></div>
                </div>
                <!--                <img src="{dj}" alt=""-->
                <!--                     class="h-full w-full object-contain inline-block display-image absolute top-0 bottom-0 z-0">-->
            {/if}
            {#if priority > 3}
                <div class="brand-font text-3xl text-on-surface h-fit w-fit bg-surface absolute top-2 left-2 p-2">
                    <p class="">On {new Date(date).toLocaleDateString()}</p>
                </div>
            {/if}
            <div class="absolute bottom-2 left-2 h-fit w-[75%] flex flex-col items-start justify-center p-5 bg-surface gap-1">
                <div class="brand-font text-4xl sm:text-5xl tracking-wide text-on-surface leading-[1] h-fit max-w-prose relative">
                    <p>{eventName}</p>
                    <div class="absolute bottom-0 h-[10px] w-full bg-primary/70"></div>
                </div>
                <p class="brand-font text-2xl lg:text-3xl tracking-wide text-on-surface/80">{taglineHere}</p>
                {#if !isRegistered}
                    <!--                    <form action="?/registerEvent"-->
                    <!--                          use:enhance={(async ({formData}) => {-->
                    <!--                              formData.set('priority', priority);-->
                    <!--                              return async ({result}) => {-->
                    <!--                                  location.reload();-->
                    <!--                              }-->
                    <!--                          })}-->
                    <!--                          method="post" class="h-full w-full">-->
                    {#if includedWith === "Esports" && priority > 3}
                        {#if hasEsports}
                            <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2"
                                    bind:this={registerButton}
                                    on:click={
                                () => {
                                    //$beforeFormSubmissionPositionEvents = window.scrollY;
                                    //console.log(window.scrollY);
                                    //registerButton.disabled = true;
                                    animateLoadingPhase();
                                    goto('/events/compete');
                                }
                            }>
                                <p class="button-inner-text">Register</p>
                                <div class="h-full w-full flex-col items-center justify-center loader-buy hidden scale-0">
                                    <div class="rounded-full bg-on-primary h-8 w-8 loader"></div>
                                </div>
                            </button>
                        {:else}
                            <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2"
                                    on:click={() => goto('/passes')}>
                                Buy The ESPORTS Pass
                            </button>
                        {/if}
                        <!--                    </form>-->
                    {:else if includedWith === "Flagship" && priority > 3}
                        {#if hasFlagship}
                            <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2"
                                    on:click={() => {animateLoadingPhase(); goto('/events/compete')}}
                                    bind:this={registerButton}>
                                <p class="button-inner-text">Register</p>
                                <div class="h-full w-full flex-col items-center justify-center loader-buy hidden scale-0">
                                    <div class="rounded-full bg-on-primary h-8 w-8 loader"></div>
                                </div>
                            </button>
                        {:else}
                            <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2"
                                    on:click={() => goto('/passes')}>
                                Buy The FLAGSHIP Pass
                            </button>
                        {/if}
                    {/if}
                    <!--                <button class="px-4 py-1 bg-primary w-full text-center flex items-center justify-center text-on-primary brand-font text-2xl sm:text-3xl mt-2"-->
                    <!--                        type="button"-->
                    <!--                        bind:this={registerButton}-->
                    <!--                >-->
                    <!--                    Coming Soon!-->
                    <!--                </button>-->
                {/if}
            </div>
            {#if isRegistered && (priority !== 1 && priority !== 2 && priority !== 3)}
                <div class="absolute flex top-5 right-5 items-center text-2xl h-fit w-fit bg-surface px-2 py-1 brand-font text-success">
                    Registered!
                </div>
            {:else if priority === 1}
                <div class="absolute flex top-6 right-3 sm:right-5 items-center text-3xl h-fit w-fit bg-surface px-2 py-1 style-font text-on-surface">
                    <p class="glitch" data-glitch="AKASH GUPTA">
                        Akash Gupta
                    </p>
                </div>
            {:else if priority === 2}
                <div class="absolute flex flex-col top-6 right-3 sm:right-5 items-center text-3xl h-fit w-fit bg-surface px-2 py-1 style-font text-on-surface">
                    <p class="glitch" data-glitch="Nikhil D Souza">
                        Nikhil D Souza
                    </p>
                    <p class="glitch" data-glitch="&">
                        &
                    </p>
                    <p class="glitch" data-glitch="Vani Bhasin">
                        Vani Bhasin
                    </p>
                </div>
            {:else if priority === 3}
                <div class="absolute flex flex-col top-6 right-3 sm:right-5 items-center text-3xl h-fit w-fit bg-surface px-2 py-1 style-font text-on-surface">
                    <p class="glitch" data-glitch="DJ Suit Up">
                        DJ Suit Up
                    </p>
                </div>
            {/if}
            <div class="absolute flex sm:flex top-1/2 -translate-y-1/2 right-0 w-fit h-fit flex-row items-center justify-center gap-2 bg-surface p-2">
                <button class="on-left-indicator"
                        on:mousedown={() => moveCarouselRight("event-carousel-1", "description-div-event-1")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         class="fill-primary h-full w-full"
                         viewBox="0 0 24 24">
                        <path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full h-full sm:w-[75%] border-[1.5px] border-on-surface relative text-on-surface flex-shrink-0 flex flex-col p-5 lg:p-10 gap-5 lg:gap-9 description-div-event-1 items-start justify-start backdrop-blur-lg overflow-y-auto">

            <div class="w-full h-fit flex flex-col gap-2 lg:gap-4">
                <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                    <p>Description</p>
                    <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                </div>
                <p class="regular-font text-sm sm:text-lg lg:text-xl sm:leading-[1.2] text-on-surface/80">
                    {#if descriptionText.includes("__namehere__")}
                        {descriptionText.split("__namehere__")[0]}<span
                            class="blur-sm relative bg-primary">A$@QF G$%@!</span>{descriptionText.split("__namehere__")[1]}
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
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">
                                    ₹{first}</p>
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
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">
                                    ₹{second}</p>
                            {/if}
                        </div>
                        <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                            {#if !third || third === -1}
                                <div class="h-3 w-3 rounded-full bg-yellow-950 hidden"></div>
                                <div class="brand-font text-2xl sm:text-3xl lg:text-4xl blur-sm text-on-surface/80 relative hidden">
                                    <p>PrizePool</p>
                                    <div class="w-full h-full absolute bg-primary top-0"></div>
                                </div>
                            {:else}
                                <div class="h-3 w-3 rounded-full bg-yellow-950"></div>
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">
                                    ₹{third}</p>
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
    <!--    scroll buttons on top-->
    <div class="absolute flex sm:flex -top-2 w-fit h-fit left-1/2 -translate-x-1/2 flex-row items-center justify-center gap-2 bg-surface border-[1px] border-on-surface p-2">
        <button class="h-3 w-3 rounded-full {gradientClass} on-left-indicator"
                on:mousedown={() => moveCarouselLeft("event-carousel-1", "image-div-event-1")}
        ></button>
        <button class="h-3 w-3 rounded-full {gradientClass} bg-primary opacity-[0.2] on-right-indicator"
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

    .glitch {
        position: relative;
        color: #fff;
        z-index: 1;
        animation: shift 1s ease-in-out infinite alternate;
    }

    .glitch:before,
    .glitch:after {
        display: block;
        content: attr(data-glitch);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;
    }

    .glitch:before {
        animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        color: #e1b6ff;
        z-index: -1;
    }

    .glitch:after {
        animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        color: #490f72;
        z-index: -2;
    }

    @keyframes glitch {
        0% {
            transform: translate(0);
        }

        20% {
            transform: translate(-3px, 3px);
        }

        40% {
            transform: translate(-3px, -3px);
        }

        60% {
            transform: translate(3px, 3px);
        }

        80% {
            transform: translate(3px, -3px);
        }

        to {
            transform: translate(0);
        }
    }

    @keyframes shift {
        0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
            transform: skewX(0deg);
        }

        41% {
            transform: skewX(10deg);
        }

        42% {
            transform: skewX(-10deg);
        }

        59% {
            transform: skewX(40deg) skewY(10deg);
        }

        60% {
            transform: skewX(-40deg) skewY(-10deg);
        }

        63% {
            transform: skewX(10deg) skewY(-5deg);
        }

        70% {
            transform: skewX(-50deg) skewY(-20deg);
        }

        71% {
            transform: skewX(10deg) skewY(-10deg);
        }
    }

    * {
        -webkit-overflow-scrolling: touch;
    }
</style>
