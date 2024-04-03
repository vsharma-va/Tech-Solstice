<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
    import {onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import PassCard from "$lib/Passes/PassCard.svelte";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";
    import {enhance} from "$app/forms";
    import {clickedPassRedirectToken} from "../../store.js";
    import {dragscroll} from '@svelte-put/dragscroll';

    export let data;
    export let form;
    console.log(form);

    let refreshStatusButton;
    let submitFormButton;
    let cancelPaymentButton;
    let showLearnerId;
    let isMahe;
    let userName;
    let userLearnerId;
    let userPhoneNumber;

    let errors = {userNameError: '', userPhoneNumberError: '', userLearnerIdError: '', isMaheError: ''};

    let flagshipCardTimeline;
    let flagshipBuyTimeline;
    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";
    let showRegisterFormAndRedirect = false;

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

        if($page.url.searchParams.get("register")) {
            showRegisterFormAndRedirect = true;
            showDataForm();
        }

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

        let onLoadTimeline = gsap.timeline({
            onStart: () => {
                gsap.set('.letter-down', {
                    clearProps: true,
                })
            }
        });
        onLoadTimeline.to(".letter-down", {
            y: 0,
        }, ">");
        onLoadTimeline.to(window, {
            scrollTo: 100,
        }, ">")
        onLoadTimeline.to('.passes-div', {
            x: 0,
            ease: "back.out(1.7)",
            duration: 1.25,
        }, ">");
        onLoadTimeline.to('.typewriter-1', {
            opacity: 1,
            duration: 0.25,
        }, ">");
        onLoadTimeline.to('.typewriter-2', {
            opacity: 1,
            duration: 0.25,
        }, ">");
        onLoadTimeline.to('.typewriter-3', {
            opacity: 1,
            duration: 0.25,
        }, ">");
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

    function animateLoadingPhase() {
        gsap.to('.button-inner-text', {
            opacity: 0,
            duration: 0,
        })
        gsap.to('.loader-refresh', {
            display: "flex",
            scale: 1,
            opacity: 1,
            ease: "circ.out",
            duration: 0.3,
        })
        let load = gsap.timeline({repeat: -1,})
        load.to('.loader-refresh-dot', {
            scale: 0.75,
            opacity: 0.8,
            ease: "bounce.out",
        });
        load.to('.loader-refresh-dot', {
            scale: 1,
            opacity: 1,
            ease: "bounce.out",
        });
    }


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

    function attemptPayment({formData}) {
        formData.set('userName', userName);
        formData.set('userPhoneNumber', userPhoneNumber);
        formData.set('userLearnerId', userLearnerId);
        formData.set("isMahe", isMahe);
        formData.set("redirectToEvents", showRegisterFormAndRedirect);
        let redirectToken = $clickedPassRedirectToken;
        formData.set('redirectToken', redirectToken);
    }

    function checkUserName() {
        if (userName.length >= 2 && userName.match(/^[A-Za-z\s]*$/)) {
            errors.userNameError = '';
        } else {
            errors.userNameError = 'Please enter a valid name';
        }
    }

    function checkMobileNumber() {
        if (userPhoneNumber?.toString().length === 10) {
            errors.userPhoneNumberError = '';
        } else {
            errors.userPhoneNumberError = 'Please enter a valid mobile number';
        }
    }

    function checkLearnerId() {
        if (userLearnerId.includes('manipal.edu')) {
            errors.userLearnerIdError = '';
        } else {
            errors.userLearnerIdError = 'Please enter a valid learner id';
        }
    }

    function checkMahe() {
        if (isMahe === 'true') {
            showLearnerId = true;
        } else {
            showLearnerId = false;
        }
    }

    function clearFormErrorName() {
        if (form) {
            form.userNameError = '';
        }
    }

    function clearFormErrorMobile() {
        if (form) {
            form.userPhoneNumberError = '';
        }
    }

    function hideForm() {
        let dataTimeline = gsap.timeline();
        dataTimeline.to('.data-form', {
            top: "100%",
            duration: 0.5,
            ease: "power4.out",
        });
        dataTimeline.to('.data-form', {
            display: 'none',
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

<svelte:head>
    <title>PASSES</title>
</svelte:head>

<Navbar/>

<div class="h-fit w-full pass-trigger bg-surface main-wrapper relative">
    <div class="h-screen w-full fixed top-[100%] backdrop-blur-2xl hidden data-form items-center justify-center z-[3] px-4 pt-4">
        <button class="h-screen w-full bg-transparent absolute top-0" on:click={hideForm}></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 pt-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">PLEASE ENTER YOUR DETAILS!</p>
                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left mt-1">Your
                    details will be used for event registeration</p>
                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left">Make
                    sure your details are correct,
                    as they will be used to verify your pass purchase!</p>
            </div>
            <div class="h-fit w-full flex flex-col gap-2">
                <form action="?/registerUserAndProceed" method="post" use:enhance={(event)=>{
                    attemptPayment(event)
                }} class="h-fit w-full">
                    <div class="form__group field">
                        <input type="input" class="form__field regular-font" placeholder="Full Name" required=""
                               bind:value={userName} on:input={checkUserName}>
                        <label for="name" class="form__label regular-font">Full Name</label>
                        {#if form?.userNameError}
                            <p class="text-sm text-error regular-font from-form">{form.userNameError}</p>
                        {/if}
                        <p class="text-sm text-error regular-font">{errors.userNameError}</p>
                    </div>
                    <div class="form__group field">
                        <input type="number" class="form__field regular-font" placeholder="Phone Number" required=""
                               bind:value={userPhoneNumber} on:input={checkMobileNumber}>
                        <label for="name" class="form__label regular-font">Phone Number</label>
                        {#if form?.userPhoneNumberError}
                            <p class="text-sm text-error regular-font">{form.userPhoneNumberError}</p>
                        {/if}
                        <p class="text-sm text-error regular-font">{errors.userPhoneNumberError}</p>
                    </div>
                    <div class="form__group field mt-2 mb-2">
                        <select class="form__field regular-font bg-surface text-on-surface border-2 border-on-surface"
                                type="input"
                                required=""
                                bind:value={isMahe} on:change={checkMahe}>
                            <option value="-1" class="bg-surface text-on-surface" selected disabled>Are You A MAHE
                                Student?
                            </option>
                            <option value="false" class="bg-surface text-on-surface">NO</option>
                            <option value="true" class="bg-surface text-on-surface">YES</option>
                        </select>
                        <label for="name" class="form__label regular-font">MAHE Student?</label>
                        {#if form?.isMaheError}
                            <p class="text-sm text-error regular-font">{form.isMaheError}</p>
                        {/if}
                        <p class="text-sm text-error regular-font">{errors.isMaheError}</p>
                    </div>
                    {#if showLearnerId}
                        <div class="form__group field">
                            <input type="email" class="form__field regular-font" placeholder="Learner Email Id"
                                   required=""
                                   bind:value={userLearnerId} on:input={checkLearnerId}>
                            <label for="name" class="form__label regular-font">Learner Email Id</label>
                            {#if form?.userLearnerIdError}
                                <p class="text-sm text-error regular-font">{form.userLearnerIdError}</p>
                            {/if}
                            <p class="text-sm text-error regular-font">{errors.userLearnerIdError}</p>
                        </div>
                    {/if}
                    {#if isMahe !== "-1" && isMahe !== undefined}
                        <button class="w-full h-fit bg-primary text-on-primary text-3xl py-1 brand-font mt-4"
                                type="submit">
                            Submit
                        </button>
                        <p class="text-lg regular-font text-primary/70 text-center">Click Outside To Close</p>
                    {/if}
                </form>
            </div>
        </div>
    </div>
    {#if !$page.data.session?.user}
        <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
            <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
                <div class="flex flex-row h-fit w-fit items-center justify-center">
                    <p class="text-center">Please Login To Buy Passes</p>
                </div>
            </div>
        </div>
    {/if}
    <div class="h-[150vh] w-full flex flex-col">
        {#if data.existingPayments}
            <div class="h-screen w-full fixed top-0 backdrop-blur-2xl z-[3] flex flex-col items-center justify-center">
                <div class="h-fit w-fit rounded-2xl border-2 border-on-surface bg-surface flex flex-col items-start justify-center p-5 gap-5">
                    <p class="brand-font text-primary text-5xl tracking-wide">ALERT!</p>
                    <div class="h-fit w-fit flex flex-col">
                        <p class="brand-font text-on-surface text-3xl tracking-wide">An already open payment was
                            found!</p>
                        <p class="brand-font text-on-surface text-3xl tracking-wide">What would you like to do?</p>
                        <div class="h-fit w-full flex flex-row items-center justify-between mt-5">
                            <button class="bg-primary text-on-primary rounded-2xl px-3 py-1 regular-font text-lg relative"
                                    bind:this={refreshStatusButton}
                                    on:click={async () => {
                                        animateLoadingPhase();
                                    refreshStatusButton.disabled = true;
                                    for (let key in data.availablePasses) {
                                        if(data.availablePasses[key].dbName === data.existingPaymentsData.pass_name) {
                                            console.log(data.availablePasses[key].token);
                                            await goto(`/payment/${data.availablePasses[key].token}`);
                                            break;
                                        }
                                    }
                                }}>
                                <p class="button-inner-text">Refresh Status?</p>
                                <div class="h-full w-full flex-col items-center justify-center loader-refresh hidden scale-0 absolute top-0 left-0">
                                    <div class="rounded-full bg-on-primary h-8 w-8 loader-refresh-dot"></div>
                                </div>
                            </button>
                            <form action="?/cancelPayment" method="post">
                                <button class="bg-primary text-on-primary rounded-2xl px-4 py-1 regular-font text-lg"
                                        type="submit"
                                        bind:this={cancelPaymentButton}>
                                    Cancel?
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
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
                        use:dragscroll
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
                                      buttonPriceTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceTextColorClass}"
                                      userData="{data.userData}"/>
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
                                      buttonPriceTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonPriceTextColorClass}"
                                      userData="{data.userData}"/>
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

    .form__group {
        position: relative;
        padding: 20px 0 0;
        width: 100%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: none;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 17px;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        font-size: 17px;
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: #9b9b9b;
        pointer-events: none;
    }

    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #490f72, #e1b6ff);
        border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: #e1b6ff;
        font-weight: 700;
    }

    /* reset input */
    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }
</style>