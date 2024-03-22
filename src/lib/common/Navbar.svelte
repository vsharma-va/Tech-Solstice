<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import {signIn, signOut} from "@auth/sveltekit/client";
    import {page} from '$app/stores';

    let navOpen = false;
    let navBarOpenTimeline;
    let navBarCloseTimeline;
    let homeScreenNavTimeline;
    let homeNavLink;
    let loginNavLink;
    let passesNavLink;
    let eventsNavLink;
    let travelTo;
    let myPassNavLink;
    let navbarOffsetClass = '-translate-y-[100%]';

    onMount(() => {
        var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
            navigator.userAgent &&
            navigator.userAgent.indexOf('CriOS') == -1 &&
            navigator.userAgent.indexOf('FxiOS') == -1;
        if(isSafari) {
            navbarOffsetClass = '-translate-y-[94%]';
        }
        // if (navigator.userAgent.toLowerCase().includes("safari")){
        //     navbarOffsetClass = '-translate-y-[97%]';
        // }


        navBarOpenTimeline = gsap.timeline({
            onStart: () => {
                navBarButtonTimeline.play(0);
                navBarLinksTimeline.play(0);
            },
        });
        navBarOpenTimeline.to('.navbar-div', {
            y: 0,
            duration: 1,
            ease: "elastic.out(1,0.3)"
        })
        navBarOpenTimeline.pause(0);

        navBarCloseTimeline = gsap.timeline({
            onStart: () => {
                navBarButtonTimeline.reverse();
                navBarLinksTimeline.reverse();
            }
        });
        navBarCloseTimeline.to('.navbar-div', {
            y: "-100%",
            duration: 1,
            ease: "elastic.out(1,0.3)"
        })
        navBarCloseTimeline.pause(0);

        let navBarButtonTimeline = gsap.timeline();
        navBarButtonTimeline.to('.top-line-nav', {
            translateY: "6px",
            rotateZ: "45deg",
        });
        navBarButtonTimeline.to('.mid-line-nav', {
            opacity: 0,
        }, "<");
        navBarButtonTimeline.to('.bottom-line-nav', {
            translateY: "-6px",
            rotateZ: "-45deg",
        }, "<");
        navBarButtonTimeline.pause(0);

        let navBarLinksTimeline = gsap.timeline();
        navBarLinksTimeline.to('.nav-letter-down', {
            y: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1.5,
        })
        navBarLinksTimeline.pause(0);
    })

    function animateNavButton() {
        if (navOpen) {
            navOpen = false;
            navBarCloseTimeline.play(0);
        } else {
            navOpen = true;
            navBarOpenTimeline.play(0);
        }
    }

    function clearSpecialNavClasses(target) {
        target.classList.remove("to-hide-nav-link");
        target.classList.remove("to-scale-nav-link");
    }

    function navClickAnimation() {
        let homeScreenNavTimeline = gsap.timeline({
            onComplete: () => {
                if (travelTo !== "/login") {
                    if (travelTo === $page.url.pathname) {
                        homeScreenNavTimeline.reverse();
                    } else {
                        goto(travelTo);
                    }
                }
            }
        });
        homeScreenNavTimeline.to('.to-scale-nav-link', {
            position: "absolute",
            top: "50%",
            left: "50%",
            yPercent: -50,
            xPercent: -50,
            scale: 2,
        });
        homeScreenNavTimeline.to('.to-hide-nav-link', {
            display: "hidden",
            opacity: 0,
        }, "<")
        homeScreenNavTimeline.to('.to-hide-nav-link', {
            display: "hidden",
            opacity: 0,
        }, "<")
        homeScreenNavTimeline.to('.to-hide-nav-link', {
            display: "hidden",
            opacity: 0,
        }, "<")
        homeScreenNavTimeline.to('.spinner-loader', {
            display: "flex",
            scale: 1,
            ease: "circ.out",
        }, "<")
    }

    function homeButtonClicked() {
        clearSpecialNavClasses(homeNavLink);
        clearSpecialNavClasses(loginNavLink);
        clearSpecialNavClasses(passesNavLink);
        clearSpecialNavClasses(eventsNavLink);
        homeNavLink.classList.add("to-scale-nav-link");
        loginNavLink.classList.add("to-hide-nav-link");
        passesNavLink.classList.add("to-hide-nav-link");
        eventsNavLink.classList.add("to-hide-nav-link");
        if (myPassNavLink) {
            myPassNavLink.classList.add("to-hide-nav-link");
        }
        travelTo = "/";
        navClickAnimation();
    }

    function loginButtonClicked() {
        clearSpecialNavClasses(homeNavLink);
        clearSpecialNavClasses(loginNavLink);
        clearSpecialNavClasses(passesNavLink);
        clearSpecialNavClasses(eventsNavLink);
        loginNavLink.classList.add("to-scale-nav-link");
        homeNavLink.classList.add("to-hide-nav-link");
        passesNavLink.classList.add("to-hide-nav-link");
        eventsNavLink.classList.add("to-hide-nav-link");
        if (myPassNavLink) {
            myPassNavLink.classList.add("to-hide-nav-link");
        }
        travelTo = "/login";
        navClickAnimation();
    }

    function passesButtonClicked() {
        clearSpecialNavClasses(homeNavLink);
        clearSpecialNavClasses(loginNavLink);
        clearSpecialNavClasses(passesNavLink);
        clearSpecialNavClasses(eventsNavLink);
        passesNavLink.classList.add("to-scale-nav-link");
        homeNavLink.classList.add("to-hide-nav-link");
        loginNavLink.classList.add("to-hide-nav-link");
        eventsNavLink.classList.add("to-hide-nav-link");
        if (myPassNavLink) {
            myPassNavLink.classList.add("to-hide-nav-link");
        }
        travelTo = "/passes";
        navClickAnimation();
    }

    function myPassButtonClicked() {
        clearSpecialNavClasses(homeNavLink);
        clearSpecialNavClasses(loginNavLink);
        clearSpecialNavClasses(passesNavLink);
        clearSpecialNavClasses(eventsNavLink);
        myPassNavLink.classList.add("to-scale-nav-link");
        homeNavLink.classList.add("to-hide-nav-link");
        loginNavLink.classList.add("to-hide-nav-link");
        eventsNavLink.classList.add("to-hide-nav-link");
        passesNavLink.classList.add("to-hide-nav-link");
        travelTo = "/my-passes";
        navClickAnimation();
    }

    function eventsButtonClicked() {
        clearSpecialNavClasses(homeNavLink);
        clearSpecialNavClasses(loginNavLink);
        clearSpecialNavClasses(passesNavLink);
        clearSpecialNavClasses(eventsNavLink);
        eventsNavLink.classList.add("to-scale-nav-link");
        homeNavLink.classList.add("to-hide-nav-link");
        loginNavLink.classList.add("to-hide-nav-link");
        passesNavLink.classList.add("to-hide-nav-link");
        if (myPassNavLink) {
            myPassNavLink.classList.add("to-hide-nav-link");
        }
        travelTo = "/events";
        navClickAnimation();
    }
</script>

<div class="h-fit w-full fixed flex flex-col items-center justify-center top-0 {navbarOffsetClass} z-[5] px-5 pt-2 navbar-div">
    <div class="h-[250px] bg-primary w-full sm:w-[57%] md:w-[45%] lg:w-[33%] xl:w-[28%] 2xl:w-[24%] rounded-2xl relative z-[3]">
        <svg width="521" height="170" viewBox="0 0 521 170"
             class="fill-primary h-fit w-full absolute -bottom-[17%] z-[2] nav-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 52V50C0 22.3858 22.3858 0 50 0H471C498.614 0 521 22.3858 521 50V52C521 79.6142 498.614 102 471 102H404C385.222 102 370 117.222 370 136C370 154.778 354.778 170 336 170H186C167.222 170 152 154.778 152 136C152 117.222 136.778 102 118 102H50C22.3858 102 0 79.6142 0 52Z"/>
        </svg>
        <div class="h-full w-full flex flex-col items-center justify-center gap-2 p-5 z-[7] relative">
            <button class="brand-font text-3xl font-thin tracking-wide text-on-primary flex flex-row h-fit w-full overflow-hidden items-center justify-center home-nav-link"
                    on:click={homeButtonClicked}
                    bind:this={homeNavLink}>
                <span class="nav-letter-down -translate-y-[30px]">H</span>
                <span class="nav-letter-down -translate-y-[50px]">O</span>
                <span class="nav-letter-down -translate-y-[70px]">M</span>
                <span class="nav-letter-down -translate-y-[90px]">E</span>
            </button>
            <button
                    class="brand-font text-3xl font-thin tracking-wide text-on-primary flex flex-row h-fit w-full overflow-hidden items-center justify-center passes-nav-link"
                    on:click={passesButtonClicked}
                    bind:this={passesNavLink}>
                <span class="nav-letter-down -translate-y-[30px]">P</span>
                <span class="nav-letter-down -translate-y-[50px]">A</span>
                <span class="nav-letter-down -translate-y-[70px]">S</span>
                <span class="nav-letter-down -translate-y-[90px]">S</span>
                <span class="nav-letter-down -translate-y-[110px]">E</span>
                <span class="nav-letter-down -translate-y-[130px]">S</span>
            </button>
            <button
                    class="brand-font text-3xl font-thin tracking-wide text-on-primary flex flex-row h-fit w-full overflow-hidden items-center justify-center events-nav-link"
                    on:click={eventsButtonClicked}
                    bind:this={eventsNavLink}>
                <span class="nav-letter-down -translate-y-[30px]">E</span>
                <span class="nav-letter-down -translate-y-[50px]">V</span>
                <span class="nav-letter-down -translate-y-[70px]">E</span>
                <span class="nav-letter-down -translate-y-[90px]">N</span>
                <span class="nav-letter-down -translate-y-[110px]">T</span>
                <span class="nav-letter-down -translate-y-[130px]">S</span>
            </button>
            {#if $page.data.session?.user}
                <button
                        class="brand-font text-3xl font-thin tracking-wide text-on-primary flex flex-row h-fit w-full overflow-hidden items-center justify-center events-nav-link"
                        on:click={myPassButtonClicked}
                        bind:this={myPassNavLink}>
                    <span class="nav-letter-down -translate-y-[30px]">M</span>
                    <span class="nav-letter-down -translate-y-[50px]">Y</span>
                    <span class="nav-letter-down -translate-y-[70px]">&nbsp;</span>
                    <span class="nav-letter-down -translate-y-[90px]">P</span>
                    <span class="nav-letter-down -translate-y-[110px]">A</span>
                    <span class="nav-letter-down -translate-y-[130px]">S</span>
                    <span class="nav-letter-down -translate-y-[150px]">S</span>
                    <span class="nav-letter-down -translate-y-[170px]">E</span>
                    <span class="nav-letter-down -translate-y-[190px]">S</span>
                </button>
            {/if}
            <button class="brand-font text-3xl font-thin tracking-wide text-on-primary flex flex-row h-fit w-full overflow-hidden items-center justify-center login-nav-link"
                    on:click={async () => {
                        if($page.data.session?.user){
                            await signOut({ callbackUrl: '/?signedOut'});
                        } else {
                            console.debug("SOMETHING HERE");
                            await signIn('google', {callbackUrl: `${$page.url.pathname}?signedIn`})
                        }
                    }}
                    on:click={loginButtonClicked}
                    bind:this={loginNavLink}>
                {#if $page.data.session?.user}
                    <span class="nav-letter-down -translate-y-[30px]">L</span>
                    <span class="nav-letter-down -translate-y-[50px]">O</span>
                    <span class="nav-letter-down -translate-y-[70px]">G</span>
                    <span class="nav-letter-down -translate-y-[90px]">O</span>
                    <span class="nav-letter-down -translate-y-[110px]">U</span>
                    <span class="nav-letter-down -translate-y-[1100px]">T</span>
                {:else}
                    <span class="nav-letter-down -translate-y-[30px]">L</span>
                    <span class="nav-letter-down -translate-y-[50px]">O</span>
                    <span class="nav-letter-down -translate-y-[70px]">G</span>
                    <span class="nav-letter-down -translate-y-[90px]">I</span>
                    <span class="nav-letter-down -translate-y-[1100px]">N</span>
                {/if}
            </button>
            <div class="h-fit w-full flex-col spinner-loader items-center justify-center hidden scale-0">
                <svg viewBox="25 25 50 50" class="svg-circle">
                    <circle r="20" cy="50" cx="50" class="svg-circle-path stroke-on-primary stroke-2"></circle>
                </svg>
            </div>
        </div>
        <div class="h-fit w-[7%] absolute left-1/2 -translate-x-1/2 -bottom-[9%] rounded-full bg-primary cursor-pointer z-[10]"
             on:click={animateNavButton}>
            <div class="h-[1px] w-full bg-surface top-line-nav"></div>
            <div class="h-[1px] mt-1 w-full bg-surface mid-line-nav"></div>
            <div class="h-[1px] mt-1 w-full bg-surface bottom-line-nav"></div>
        </div>
    </div>
</div>