<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onDestroy, onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import Terminal from "$lib/Landing/Terminal.svelte";
    import {goto} from "$app/navigation";
    import Footer from "$lib/common/Footer.svelte";
    import jrnySponsor from "$lib/assets/images/jrny_sponsor.png";
    import mboscSponsor from "$lib/assets/images/mbosc_sponsor.svg";


    let topologyHomeEffect;
    let terminalFeaturedGsap;
    let terminalTechGsap;
    let terminalEsportsGsap;
    terminalFeaturedGsap = gsap.timeline({repeat: -1,});
    terminalTechGsap = gsap.timeline({repeat: -1,});
    terminalEsportsGsap = gsap.timeline({repeat: -1,});

    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";
    // let primary = "#d2cb00";
    // let primaryContainer = "#4b4900";
    // let onPrimaryContainer = "#f0e81e";
    // let surface = "#1c1c16";
    // let onSurface = "#e6e2d9";
    // let primary = "#80d998";
    // let primaryContainer = "#005228";
    // let onPrimaryContainer = "#9bf6b2";
    // let surface = "#191c19";
    // let onSurface = "#e1e3de";
    // let primary = "rgba(248,86,43,0.8)";
    // let primaryContainer = "#611300";
    // let onPrimaryContainer = "#891e00";
    // let surface = "#201a19";
    // let onSurface = "#ede0dd";

    onMount(() => {
        let checkPaymentCookie = document.cookie;
        if (checkPaymentCookie) {
            if (checkPaymentCookie.includes("triedPaying=true")) {
                goto('/payment/manipal-dumb-check');
            }
        }
        let isMobile = function () {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };


        gsap.registerPlugin(ScrollTrigger);

        // if (isMobile()) {
        //     console.log("TOUCH DEVICE FOUND");
        //     let destroyTopologyTimeline = gsap.timeline(
        //         {
        //             scrollTrigger: {
        //                 trigger: ".featured-events-trigger",
        //                 start: "top 70%",
        //                 end: "top 70%",
        //                 scrub: false,
        //                 markers: false,
        //             },
        //         },
        //     );
        //     destroyTopologyTimeline.to('.featured-events-trigger', {
        //         onComplete: () => {
        //             console.debug("Topology Destoryed");
        //             topologyHomeEffect.destroy();
        //         },
        //         onReverseComplete: () => {
        //             console.debug("Topology Restored");
        //             topologyHomeEffect = VANTA.TOPOLOGY({
        //                 el: ".topology-animation-home",
        //                 mouseControls: false,
        //                 touchControls: false,
        //                 gyroControls: false,
        //                 minHeight: 200.0,
        //                 minWidth: 200.0,
        //                 scale: 1.0,
        //                 scaleMobile: 100.0,
        //                 color: primaryContainer,
        //                 backgroundColor: "transparent",
        //                 THREE,
        //                 p5,
        //             });
        //         }
        //     })
        // }

        let waitTimeline = gsap.timeline({
            onComplete: () => {
                topologyHomeEffect.setOptions({
                    color: primary,
                })
                waitTimeline.reverse();
            },
            onReverseComplete: () => {
                topologyHomeEffect.setOptions({
                    color: primaryContainer,
                })
            }
        })
        waitTimeline.to('#body', {
            duration: 5,
        })

        let load = gsap.timeline({repeat: -1,})
        load.to('.loader-nothing', {
            scale: 0.75,
            opacity: 0.8,
            ease: "bounce.out",
        });
        load.to('.loader-nothing', {
            scale: 1,
            opacity: 1,
            ease: "bounce.out",
        });

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to('.load-background', {
            backgroundColor: onSurface,
            delay: 1,
            duration: 1,
        })
        onLoadTimeline.to('.main-text', {
            display: "flex",
            scale: 1,
            opacity: 1,
        })
        onLoadTimeline.to('.main-text-1', {
            display: "flex",
            opacity: 1,
            scale: 1,
        });
        onLoadTimeline.to('.main-text', {
            fontSize: "125px",
            duration: 0,
        }, "<");
        onLoadTimeline.to('.main-text-2', {
            display: "flex",
            opacity: 1,
            scale: 1,
        });
        onLoadTimeline.to('.main-text', {
            fontSize: "66px",
            duration: 0,
        }, "<");
        onLoadTimeline.to('.main-text-1', {
            fontSize: "125px",
            duration: 0,
        }, "<");
        onLoadTimeline.to('.bar-reveal', {
            height: "100%",
        });
        onLoadTimeline.to('.minus-blur', {
            display: "flex",
            filter: "blur(0)",
        })
        onLoadTimeline.to('.letter-up-1', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-2', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-3', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-4', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-5', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-6', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-7', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.letter-up-8', {
            y: 0,
            opacity: 1,
        }, "<");
        onLoadTimeline.to('.load-background', {
            display: "none",
            // duration: 0,
        });
        onLoadTimeline.to('.letter-appear-1', {
            opacity: 1,
            duration: 0.1,
        });
        onLoadTimeline.to('.letter-appear-2', {
            opacity: 1,
            duration: 0.1,
        });
        onLoadTimeline.to('.letter-appear-3', {
            opacity: 1,
            duration: 0.1,
        });
        onLoadTimeline.to('.letter-appear-4', {
            opacity: 1,
            duration: 0.1,
        });
        onLoadTimeline.to('.letter-appear-5', {
            opacity: 1,
            duration: 0.1,
        });
        onLoadTimeline.to('.brand-name', {
            display: "none",
        })
        onLoadTimeline.to('.brand-name-copy', {
            display: "flex",
        })

        let scrollAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '.basic-scroll-animation',
                start: 'top top',
                end: '50% top',
                scrub: true,
                markers: false,
            }
        })
        scrollAnimation.to(".first-division-container", {
            scale: 0.65,
            y: 200,
        });
        scrollAnimation.to(".first-division-container", {
            display: "none",
        });

        let alwaysBlinkTimeline = gsap.timeline({
            repeat: -1,
        });
        alwaysBlinkTimeline.to('.always-blink', {
            opacity: 0,
            duration: 0.15
        });
        alwaysBlinkTimeline.to('.always-blink', {
            opacity: 1,
            duration: 0.15
        })

        let featuredEventsHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".featured-events-trigger",
                start: 'top top',
                end: 'top -25%',
                scrub: true,
                markers: false,
            }
        })
        featuredEventsHeadingTimeline.to('.letter-down', {
            y: 0,
        });
        featuredEventsHeadingTimeline.to('.featured-events-tagline-div', {
            opacity: 1,
        }, "<");

        let featuredEventsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.featured-events-trigger',
                start: 'top top',
                end: 'top -700%',
                scrub: true,
                markers: false,
            }
        });
        featuredEventsTimeline.to('.laptop-card-solstice', {
            display: "flex",
        })
        featuredEventsTimeline.to('.rotate-d-3', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-3deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        featuredEventsTimeline.to('.rotate-d-3-reveal', {
            rotate: "-6deg",
            opacity: 1
        }, ">");
        featuredEventsTimeline.to('.featured-events-initial', {
            top: 0,
            left: 0,
            scale: 0.7,
            transform: "none",
        }, "<")
        featuredEventsTimeline.to('.featured-events-d-3', {
            display: "flex",
            opacity: 1,
        }, "<");
        featuredEventsTimeline.to('.rotate-d-6', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        featuredEventsTimeline.to('.rotate-d-6-reveal', {
            rotate: "-12deg",
            opacity: 1
        }, ">")
        featuredEventsTimeline.to('.featured-events-d-6', {
            display: "flex",
            opacity: 1,
        }, "<");
        featuredEventsTimeline.to('.rotate-d-9', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        featuredEventsTimeline.to('.rotate-d-9-reveal', {
            rotate: "-18deg",
            opacity: 1
        }, ">")
        featuredEventsTimeline.to('.featured-events-d-9', {
            display: "flex",
            opacity: 1,
        }, "<");
        featuredEventsTimeline.to('.laptop-card-solstice', {
            bottom: 5,
        });
        featuredEventsTimeline.to('.convert-to-laptop-card', {
            right: 12,
            bottom: 50,
            scale: 0.5,
            opacity: 0,
            transform: "none",
        });
        featuredEventsTimeline.to(".letter-down", {
            opacity: 0,
        }, "<");
        featuredEventsTimeline.to(".featured-events-tagline-div", {
            opacity: 0,
        }, "<");
        featuredEventsTimeline.to('.featured-events-card-on-laptop', {
            display: "flex",
            opacity: 1,
        }, "<");
        featuredEventsTimeline.to('.laptop-card-solstice', {
            bottom: "-100%",
        });

        let techEventsHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-events-trigger",
                start: 'top top',
                end: 'top -25%',
                scrub: true,
                markers: false,
            }
        })
        techEventsHeadingTimeline.to('.tech-letter-down', {
            y: 0,
        });
        techEventsHeadingTimeline.to('.tech-events-tagline-div', {
            opacity: 1,
        }, "<");

        let techEventImmediate = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-events-trigger",
                start: "top top",
                end: "top -15%",
                scrub: true,
                markers: false,
            }
        });
        techEventImmediate.to('.laptop-card-solstice', {
            backgroundColor: onSurface,
        });
        techEventImmediate.to('.laptop-solstice-heading', {
            color: surface,
        }, "<");


        let techEventsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.tech-events-trigger',
                start: 'top top',
                end: 'top -800%',
                scrub: true,
                markers: false,
            }
        });
        techEventsTimeline.to('.tech-rotate-d-3', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-3deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        techEventsTimeline.to('.tech-rotate-d-3-reveal', {
            rotate: "-6deg",
            opacity: 1
        }, ">");
        techEventsTimeline.to('.tech-events-initial', {
            top: 0,
            left: 0,
            scale: 0.7,
            transform: "none",
        }, "<")
        techEventsTimeline.to('.tech-events-d-3', {
            display: "flex",
            opacity: 1,
        }, "<");
        techEventsTimeline.to('.tech-rotate-d-6', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        techEventsTimeline.to('.tech-rotate-d-6-reveal', {
            rotate: "-12deg",
            opacity: 1
        }, ">")
        techEventsTimeline.to('.tech-events-d-6', {
            display: "flex",
            opacity: 1,
        }, "<");
        techEventsTimeline.to('.tech-rotate-d-9', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        techEventsTimeline.to('.tech-rotate-d-9-reveal', {
            rotate: "-18deg",
            opacity: 1
        }, ">")
        techEventsTimeline.to('.tech-events-d-9', {
            display: "flex",
            opacity: 1,
        }, "<");
        techEventsTimeline.to('.laptop-card-solstice', {
            bottom: 5,
        });
        techEventsTimeline.to('.tech-convert-to-laptop-card', {
            right: 12,
            bottom: 50,
            scale: 0.5,
            opacity: 0,
            transform: "none",
        });
        techEventsTimeline.to(".tech-letter-down", {
            opacity: 0,
        }, "<");
        techEventsTimeline.to(".tech-events-tagline-div", {
            opacity: 0,
        }, "<");
        techEventsTimeline.to('.tech-events-card-on-laptop', {
            display: "flex",
            opacity: 1,
        }, "<");
        techEventsTimeline.to('.laptop-card-solstice', {
            bottom: "-100%",
        })


        let esportsEventsHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".esports-events-trigger",
                start: 'top top',
                end: 'top -25%',
                scrub: true,
                markers: false,
            }
        })
        esportsEventsHeadingTimeline.to('.esports-letter-down', {
            y: 0,
        });
        esportsEventsHeadingTimeline.to('.esports-events-tagline-div', {
            opacity: 1,
        }, "<");

        let esportsEventImmediate = gsap.timeline({
            scrollTrigger: {
                trigger: ".esports-events-trigger",
                start: "top top",
                end: "top -15%",
                scrub: true,
                markers: false,
            }
        });
        esportsEventImmediate.to('.laptop-card-solstice', {
            backgroundColor: surface,
        });
        esportsEventImmediate.to('.laptop-solstice-heading', {
            color: onSurface,
        }, "<");


        let esportsEventsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.esports-events-trigger',
                start: 'top top',
                end: 'top -800%',
                scrub: true,
                markers: false,
            }
        });
        esportsEventsTimeline.to('.esports-rotate-d-3', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-3deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        esportsEventsTimeline.to('.esports-rotate-d-3-reveal', {
            rotate: "-6deg",
            opacity: 1
        }, ">");
        esportsEventsTimeline.to('.esports-events-initial', {
            top: 0,
            left: 0,
            scale: 0.7,
            transform: "none",
        }, "<")
        esportsEventsTimeline.to('.esports-events-d-3', {
            display: "flex",
            opacity: 1,
        }, "<");
        esportsEventsTimeline.to('.esports-rotate-d-6', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        esportsEventsTimeline.to('.esports-rotate-d-6-reveal', {
            rotate: "-12deg",
            opacity: 1
        }, ">")
        esportsEventsTimeline.to('.esports-events-d-6', {
            display: "flex",
            opacity: 1,
        }, "<");
        esportsEventsTimeline.to('.esports-rotate-d-9', {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        })
        esportsEventsTimeline.to('.esports-rotate-d-9-reveal', {
            rotate: "-18deg",
            opacity: 1
        }, ">")
        esportsEventsTimeline.to('.esports-events-d-9', {
            display: "flex",
            opacity: 1,
        }, "<");
        esportsEventsTimeline.to('.laptop-card-solstice', {
            bottom: 5,
        });
        esportsEventsTimeline.to('.esports-convert-to-laptop-card', {
            right: 12,
            bottom: 50,
            scale: 0.5,
            opacity: 0,
            transform: "none",
        });
        esportsEventsTimeline.to(".esports-letter-down", {
            opacity: 0,
        }, "<");
        esportsEventsTimeline.to(".esports-events-tagline-div", {
            opacity: 0,
        }, "<");
        esportsEventsTimeline.to('.esports-events-card-on-laptop', {
            display: "flex",
            opacity: 1,
        }, "<");
        esportsEventsTimeline.to('.laptop-card-solstice', {
            bottom: "-28%",
        })

        let callToActionHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".call-to-action-trigger",
                start: 'top top',
                end: 'top -120%',
                scrub: true,
                markers: false,
            }
        })
        // callToActionHeadingTimeline.to(".laptop-card-solstice", {
        //     // clearProps: "left,top,translate,transform"
        // });
        callToActionHeadingTimeline.to('.call-to-action-letter-down', {
            y: 0,
        });

        let callToActionTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".call-to-action-trigger",
                start: "35% top",
                end: "top -600%",
                scrub: true,
                markers: false,
            }
        });
        callToActionTimeline.to(".laptop-card-solstice", {
            display: "flex",
            translateX: 0,
            bottom: "50%",
            right: "50%",
            xPercent: 50,
            yPercent: 50,
        });
        callToActionTimeline.to(".laptop-card-solstice", {
            // scale: 1.05,
            border: "2",
            borderColor: onSurface,
        }, "<");
        callToActionTimeline.to(".call-to-action-button-div", {
            display: "flex",
        });
        callToActionTimeline.to(".call-to-action-button", {
            y: 0,
            opacity: 1,
        });
        callToActionTimeline.to(".laptop-card-solstice", {
            scale: 0,
            opacity: 0,
        }, ">2");
        // callToActionTimeline.to(".laptop-card-solstice", {
        //
        // });

    });

    onDestroy(() => {
        if (topologyHomeEffect) {
            topologyHomeEffect.destroy();
        }
    });
</script>
<svelte:head>
    <title>HOME</title>
</svelte:head>


<div class="h-screen w-full bg-primary flex flex-col items-center justify-center load-background">
    <p class="brand-font font-bold text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container tracking-wide main-text leading-[0.78]">
        WELCOME</p>
    <p class="brand-font font-bold text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container tracking-wide main-text-1 leading-[0.98]">
        TO</p>
    <p class="brand-font text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container main-text-2 tracking-wide leading-[0.78]">
        SOLSTICE</p>
</div>
<div class="h-fit w-full absolute top-0 basic-scroll-animation">
    <div class="h-screen w-full sticky top-0 first-division-container">
        <div class="h-full w-full z-2 grid grid-cols-3 absolute top-0 overflow-hidden">
            <div class="h-full w-full topology-animation-home absolute z-1 top-0"></div>
            <div class="col-start-1 bg-surface h-0 w-full bar-reveal"></div>
            <div class="col-start-2 bg-surface h-0 w-full bar-reveal self-end"></div>
            <div class="col-start-3 bg-surface h-0 w-full bar-reveal"></div>
            <!--            <div class="h-[140%] w-full bg-transparent hidden absolute top-0 left-1/2 -translate-x-1/2 spotlight spot-left rotate-[20deg]"></div>-->
            <!--            <div class="h-[140%] w-full bg-transparent hidden absolute top-0 left-1/2 -translate-x-1/2 spotlight spot-center"></div>-->
            <!--            <div class="h-[140%] w-full bg-transparent hidden absolute top-0 left-1/2 -translate-x-1/2 spotlight spot-right -rotate-[20deg]"></div>-->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="h-fit w-full brand-font text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] tracking-wide hidden text-primary-container minus-blur overflow-y-clip flex-row items-center justify-center first-division-tech-container">
                    <div class="w-full h-full flex flex-row">
                        <span class="translate-y-14 opacity-0 letter-up-1 left-of-make-italic leading-[0.88]">T</span><span
                            class="translate-y-[70px] opacity-0 letter-up-2 make-italic leading-[0.88]">E</span><span
                            class="translate-y-[90px] opacity-0 letter-up-3 leading-[0.88]">C</span><span
                            class="translate-y-[110px] opacity-0 letter-up-4 leading-[0.88]">H</span>
                    </div>
                </div>

                <!--                <div class="h-fit w-full brand-font text-[155px] sm:text-[175px] md:text-[210px] lg:text-[210px] xl:text-[275px] tracking-wide hidden text-primary minus-blur overflow-y-clip flex-row items-center justify-start first-division-solstice-container">-->
                <!--                    <span class="translate-y-14 opacity-0 letter-up-1 leading-[0.88]">N</span>-->
                <!--                    <span-->
                <!--                            class="translate-y-[70px] opacity-0 letter-up-2 left-of-make-italic leading-[0.88]">E</span><span-->
                <!--                        class="translate-y-[90px] opacity-0 letter-up-3 make-italic leading-[0.88]">X</span><span-->
                <!--                        class="translate-y-[110px] opacity-0 letter-up-4 leading-[0.88]">U</span>-->
                <!--                    <span class="translate-y-[130px] opacity-0 letter-up-5 leading-[0.88]">S</span>-->
                <!--&lt;!&ndash;                    <span class="translate-y-[150px] opacity-0 letter-up-6 left-of-make-italic leading-[0.88]">I</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                    <span class="translate-y-[170px] opacity-0 letter-up-7 make-italic leading-[0.88]">C</span>&ndash;&gt;-->
                <!--&lt;!&ndash;                    <span class="translate-y-[190px] opacity-0 letter-up-8 make-italic leading-[0.88]">E</span>&ndash;&gt;-->
                <!--                </div>-->
                <div class="h-fit w-full brand-font text-[155px] sm:text-[175px] md:text-[210px] lg:text-[210px] xl:text-[275px] tracking-wide hidden text-primary minus-blur overflow-y-clip flex-row items-center justify-center first-division-solstice-container">
                    <span class="translate-y-14 opacity-0 letter-up-1 leading-[0.88]">S</span>
                    <span
                            class="translate-y-[70px] opacity-0 letter-up-2 left-of-make-italic leading-[0.88]">O</span><span
                        class="translate-y-[90px] opacity-0 letter-up-3 make-italic leading-[0.88]">L</span><span
                        class="translate-y-[110px] opacity-0 letter-up-4 leading-[0.88]">S</span>
                    <span class="translate-y-[130px] opacity-0 letter-up-5 leading-[0.88]">T</span>
                    <span class="translate-y-[150px] opacity-0 letter-up-6 left-of-make-italic leading-[0.88]">I</span>
                    <span class="translate-y-[170px] opacity-0 letter-up-7 make-italic leading-[0.88]">C</span>
                    <span class="translate-y-[190px] opacity-0 letter-up-8 make-italic leading-[0.88]">E</span>
                </div>
                <!--                <div class="flex flex-col items-center justify-center w-full h-[128px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">-->
                <!--                    <div class="style-font text-9xl h-full w-full font-[300] text-white text-center flex flex-row items-center justify-center brand-name">-->
                <!--                        <span class="letter-appear-1 opacity-0">N</span><span class="letter-appear-2 opacity-0">e</span><span-->
                <!--                            class="letter-appear-3 opacity-0">x</span><span-->
                <!--                            class="letter-appear-4 opacity-0">u</span><span-->
                <!--                            class="letter-appear-5 opacity-0">s</span>-->
                <!--                    </div>-->
                <!--                </div>-->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-9xl md:text-[10rem] xl:text-[13rem] text-white text-center style-font -translate-y-1/2 flex flex-row items-center justify-center h-full w-full brand-name">
                    <span class="letter-appear-1 opacity-0">N</span><span
                        class="letter-appear-2 opacity-0">e</span><span
                        class="letter-appear-3 opacity-0">x</span><span
                        class="letter-appear-4 opacity-0">u</span><span
                        class="letter-appear-5 opacity-0">s</span>
                </div>

                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-9xl md:text-[10rem] xl:text-[13rem] text-white text-center style-font -translate-y-1/2 flex flex-row items-center justify-center h-full w-full brand-name-copy hidden">
                    <p class="glitch" data-glitch="Nexus">Nexus</p>
                </div>
            </div>
            <svg id="Group_1" xmlns="http://www.w3.org/2000/svg"
                 class="h-32 w-32 fill-primary-container col-start-3 absolute right-5 top-5"
                 x="0px" y="0px" viewBox="0 0 287.54 354.05" style="" xml:space="preserve">
        <g>
	        <path class="st0" d="M239.18,185.7c-44.05-23-98.34-5.89-121.29,38.2c-10.2,19.61-12.47,41.22-8.02,61.2
		        c0.7-5.89,2.41-11.73,5.29-17.34c12.7-24.39,42.75-33.85,67.13-21.14c24.39,12.7,33.84,42.79,21.14,67.18
		        c-11.22,21.51-33.29,33.52-62.82,28.88c51.6,24.25,113.78,8.48,136.73-35.61c22.95-44.09,5.89-98.43-38.16-121.43V185.7z"></path>
            <path class="st0" d="M179.04,161.5c38.16-10.62,49.98-33.84,52.02-56.93c3.43-38.81-28.37-64.54-56.24-67.37
		        C87.71,28.29,36.34,110.36,38.89,181.8c1.58,44.74,15.39,88.55,58.7,132.6c-9.83-19.06-27.31-132.88,81.51-152.95L179.04,161.5z"></path>
        </g>
    </svg>
        </div>
    </div>
    <div class="h-fit w-full">
        <Navbar/>
        <div class="h-screen w-full bg-transparent fixed top-0 z-[3]">
            <div class="h-full w-full sticky top-0">
                <div class="h-[350px] xl:w-[450px] w-[95%] sm:w-[80%] md:w-[65%] lg:w-[45%] absolute right-1/2 translate-x-1/2 lg:right-3 xl:right-3 lg:translate-x-0 -bottom-[100%] xl:-bottom-[100%] bg-surface flex flex-col items-center justify-start p-5 laptop-card-solstice hidden">
                    <p class="brand-font text-4xl tracking-wide font-bold text-on-surface laptop-solstice-heading">
                        Solstice
                    </p>
                    <div class="h-full w-full grid grid-cols-2 grid-rows-2 pt-5 gap-5">
                        <div class="h-full w-full col-start-1 row-start-1 relative featured-events-card-on-laptop hidden opacity-0">
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-[9deg] z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary -rotate-6 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface -rotate-3 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center">
                                <div class="style-font text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial">
                                    Nexus<span class="always-blink">_</span>
                                    <div class="h-1 w-[45%] bg-on-primary-container"></div>
                                </div>
                                <p class="brand-font text-xl mt-2 sm:mt-0 text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0">
                                    DJ</p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0">
                                    Artist</p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0">
                                    Standup</p>
                            </div>
                        </div>
                        <div class="h-full w-full col-start-2 row-start-1 relative tech-events-card-on-laptop hidden opacity-0">
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-[9deg] z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary -rotate-6 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary-container -rotate-3 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center">
                                <div class="style-font text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial">
                                    Nexus<span class="always-blink">_</span>
                                    <div class="h-1 w-[45%] bg-on-primary-container"></div>
                                </div>
                                <p class="brand-font text-xl mt-2 sm:mt-0 text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0">
                                    Hackathon</p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0">
                                    Tech Exhibition </p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0">
                                    CTF</p>
                            </div>
                        </div>
                        <div class="h-full w-full col-start-1 row-start-2 relative esports-events-card-on-laptop hidden opacity-0">
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-[9deg] z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary -rotate-6 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface -rotate-3 z-[0]"></div>
                            <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center">
                                <div class="style-font text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial">
                                    Nexus<span class="always-blink">_</span>
                                    <div class="h-1 w-[45%] bg-on-primary-container"></div>
                                </div>
                                <p class="brand-font text-xl mt-2 sm:mt-0 text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0">
                                    BGMI</p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0">
                                    COD</p>
                                <p class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0">
                                    FIFA</p>
                            </div>
                        </div>
                        <div class="h-full w-full col-start-2 row-start-2 items-center justify-center relative call-to-action-button-div hidden">
                            <button class="bg-primary brand-font text-2xl -translate-y-24 opacity-0 call-to-action-button py-1 h-fit w-full text-on-primary"
                                    on:click={() => {goto("/passes")}}>
                                Passes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="h-[800vh] w-full sticky top-0 bg-on-surface featured-events-trigger">
        <div class="h-screen w-full absolute -top-[48px] items-center justify-center overflow-hidden">
            <svg width="1920" height="48" viewBox="0 0 1920 48" fill="none" class="fill-on-surface"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M944.931 4.96811L948.426 8.47002L951.934 4.96811H944.931ZM1193.34 13.0261H1187.65L1187.68 13.0504H1193.31L1193.34 13.0261ZM1586.65 12.8323L1580.12 6.27678H1569.09L1555.46 20.5752L1555.44 20.551V20.5752L1547.59 13.0504H1193.3L1190.48 15.8737L1195.19 20.5752H1185.79L1190.48 15.8737L1187.66 13.0504H1117.91L1113.91 9.02741L1106.01 1.11479L1100.75 6.38584L1074.08 6.26466H1069.8L1059 17.0854H1030.29L1024.1 10.8935L960.715 10.9298L955.792 15.8616L948.414 8.4579L945.947 10.9298L804.968 10.8935L794.083 0L773.558 20.5631L765.829 12.8201H762.551L760.761 14.6135L763.604 17.4611H757.919L760.749 14.6135L758.995 12.8565L701.012 12.8201V48H1920V12.8201H1586.69L1586.65 12.8323ZM1074 14.9891H1072.52V13.5108H1074V14.9891ZM1074 12.0204H1072.52V10.5421H1074V12.0204ZM1085.46 14.9891H1083.99V10.5421H1085.46V14.9891ZM1091.13 12.0204H1089.66V10.5421H1091.13V12.0204ZM1501.22 20.5631H1496.78V16.1161H1501.22V20.5631ZM1516.01 20.5631H1514.53V16.1161H1516.01V20.5631ZM1526.36 20.5631H1524.89V16.1161H1526.36V20.5631ZM1528.6 20.5631H1527.12V16.1161H1528.6V20.5631Z"
                />
                <path d="M589.936 6.97182L593.432 10.4737L593.434 10.4718L596.939 6.97182H589.936Z" fill="#FCEE0A"/>
                <path d="M593.432 10.4737L593.42 10.4616L590.952 12.9335L337.976 12.8972L330.494 5.92295H320.995L306.565 20.5632L298.836 12.8202H295.559L293.768 14.6135L296.611 17.4611H290.926L293.756 14.6135L292.003 12.8565L265.019 12.8202L254.996 24.4569H211.996V48H700.988V38.4826L701.109 17.0855V12.8972L605.72 12.9335L600.798 15.8616L593.434 10.4718L593.432 10.4737Z"
                />
                <path d="M0 36.9798H211.996V48H0V36.9798Z"/>
                <path d="M207.996 24.5H209.996V36.9798H207.996V24.5Z"/>
                <path d="M199.997 24.5H201.997V36.9798H199.997V24.5Z"/>
                <path d="M190.997 24.5H192.997V36.9798H190.997V24.5Z"/>
                <path d="M194.997 24.5H197.997V36.9798H194.997V24.5Z"/>
                <path d="M204.997 24.5H205.997V36.9798H204.997V24.5Z"/>
                <path d="M188.997 24.5H189.997V36.9798H188.997V24.5Z"/>
                <path d="M181.997 24.5H182.997V36.9798H181.997V24.5Z"/>
                <path d="M178.997 24.5H179.997V36.9798H178.997V24.5Z"/>
            </svg>
        </div>
        <div class="h-screen w-full flex sticky top-0 items-center justify-center featured-events-main-container">
            <div class="lg:h-[250px] h-[200px] sm:h-[225px] xl:h-[250px] w-[85%] sm:w-[45%] lg:w-[35%] xl:w-[30%] bg-primary-container flex flex-col justify-center items-center z-[2] absolute convert-to-laptop-card">
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rotate-d-9-reveal opacity-0 "></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary rotate-d-6-reveal opacity-0"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface rotate-d-3-reveal"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center">
                    <div class="style-font text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial">
                        <p>Nexus<span class="always-blink">_</span></p>
                        <div class="h-1 w-[45%] bg-on-primary-container"></div>
                    </div>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0">
                        DJ</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0">
                        Artist</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0">
                        Standup</p>
                    <Terminal sectionName="FEAT" arrayOfEventNames="{['DJ', 'Artist', 'Standup']}"
                              gsapTimeline="{terminalFeaturedGsap}"/>
                </div>
            </div>

            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] h-[70px] w-[70%] sm:w-[37%] bg-primary/90 absolute bottom-24 sm:bottom-30 left-2 xl:left-14 flex flex-col items-start justify-center px-5 rotate-d-9">
                <p class="brand-font text-2xl lg:text-3xl text-on-primary tracking-wide">
                    Standup
                </p>
                <p class="regular-font text-sm text-on-primary tracking-wide">
                    Laugh. Enjoy. Repeat.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[37%] bg-on-primary/90 absolute top-32 xl:top-28 xl:right-14 right-2 lg:right-5 flex flex-col items-start justify-center px-5 rotate-d-6">
                <p class="brand-font text-2xl lg:text-3xl text-primary tracking-wide">
                    Artist
                </p>
                <p class="regular-font text-sm text-primary tracking-wide">
                    Harmony. Passion. Performance.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[40%] bg-surface/90 absolute top-12 left-2 lg:left-9 xl:bottom-32 xl:right-24 flex flex-col items-start justify-center px-5 rotate-d-3">
                <p class="brand-font text-2xl lg:text-3xl text-on-surface tracking-wide">
                    DJ
                </p>
                <p class="regular-font text-sm text-on-surface tracking-wide">
                    Beats. Groove. Dance.
                </p>
            </div>
            <div class="h-full w-full flex flex-col absolute top-0 items-center justify-end">
                <div class="brand-font h-fit w-full font-bold flex flex-row items-end justify-center text-6xl sm:text-7xl lg:text-8xl text-surface overflow-y-clip">
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
                <div class="regular-font text-center font-thin h-fit w-full tracking-wide flex flex-col text-surface capitalize items-center justify-center pb-2 sm:pb-4 lg:pb-9 text-sm opacity-0 featured-events-tagline-div">
                    featuring three flagship events that redefine the boundaries of technology and celebration!
                </div>
            </div>
        </div>
    </div>
    <div class="h-[800vh] w-full sticky top-0 bg-surface tech-events-trigger z-[2]">
        <div class="h-screen w-full absolute -top-[48px] items-center justify-center overflow-hidden">
            <svg width="1920" height="48" viewBox="0 0 1920 48" fill="none" class="fill-surface"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M944.931 4.96811L948.426 8.47002L951.934 4.96811H944.931ZM1193.34 13.0261H1187.65L1187.68 13.0504H1193.31L1193.34 13.0261ZM1586.65 12.8323L1580.12 6.27678H1569.09L1555.46 20.5752L1555.44 20.551V20.5752L1547.59 13.0504H1193.3L1190.48 15.8737L1195.19 20.5752H1185.79L1190.48 15.8737L1187.66 13.0504H1117.91L1113.91 9.02741L1106.01 1.11479L1100.75 6.38584L1074.08 6.26466H1069.8L1059 17.0854H1030.29L1024.1 10.8935L960.715 10.9298L955.792 15.8616L948.414 8.4579L945.947 10.9298L804.968 10.8935L794.083 0L773.558 20.5631L765.829 12.8201H762.551L760.761 14.6135L763.604 17.4611H757.919L760.749 14.6135L758.995 12.8565L701.012 12.8201V48H1920V12.8201H1586.69L1586.65 12.8323ZM1074 14.9891H1072.52V13.5108H1074V14.9891ZM1074 12.0204H1072.52V10.5421H1074V12.0204ZM1085.46 14.9891H1083.99V10.5421H1085.46V14.9891ZM1091.13 12.0204H1089.66V10.5421H1091.13V12.0204ZM1501.22 20.5631H1496.78V16.1161H1501.22V20.5631ZM1516.01 20.5631H1514.53V16.1161H1516.01V20.5631ZM1526.36 20.5631H1524.89V16.1161H1526.36V20.5631ZM1528.6 20.5631H1527.12V16.1161H1528.6V20.5631Z"
                />
                <path d="M589.936 6.97182L593.432 10.4737L593.434 10.4718L596.939 6.97182H589.936Z" fill="#FCEE0A"/>
                <path d="M593.432 10.4737L593.42 10.4616L590.952 12.9335L337.976 12.8972L330.494 5.92295H320.995L306.565 20.5632L298.836 12.8202H295.559L293.768 14.6135L296.611 17.4611H290.926L293.756 14.6135L292.003 12.8565L265.019 12.8202L254.996 24.4569H211.996V48H700.988V38.4826L701.109 17.0855V12.8972L605.72 12.9335L600.798 15.8616L593.434 10.4718L593.432 10.4737Z"
                />
                <path d="M0 36.9798H211.996V48H0V36.9798Z"/>
                <path d="M207.996 24.5H209.996V36.9798H207.996V24.5Z"/>
                <path d="M199.997 24.5H201.997V36.9798H199.997V24.5Z"/>
                <path d="M190.997 24.5H192.997V36.9798H190.997V24.5Z"/>
                <path d="M194.997 24.5H197.997V36.9798H194.997V24.5Z"/>
                <path d="M204.997 24.5H205.997V36.9798H204.997V24.5Z"/>
                <path d="M188.997 24.5H189.997V36.9798H188.997V24.5Z"/>
                <path d="M181.997 24.5H182.997V36.9798H181.997V24.5Z"/>
                <path d="M178.997 24.5H179.997V36.9798H178.997V24.5Z"/>
            </svg>
        </div>
        <div class="h-screen w-full flex sticky top-0 items-center justify-center">
            <div class="lg:h-[250px] h-[200px] sm:h-[225px] xl:h-[250px] w-[85%] sm:w-[45%] lg:w-[35%] xl:w-[30%] bg-primary-container flex flex-col justify-center items-center z-[2] absolute tech-convert-to-laptop-card">
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary tech-rotate-d-9-reveal opacity-0 "></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary tech-rotate-d-6-reveal opacity-0"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary-container tech-rotate-d-3-reveal"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center">
                    <div class="style-font text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide tech-events-initial">
                        <p>Nexus<span class="always-blink">_</span></p>
                        <div class="h-1 w-[45%] bg-on-primary-container"></div>
                    </div>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-3 opacity-0">
                        Hackathon</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-6 opacity-0">
                        Tech Exhibition</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-9 opacity-0">
                        CTF</p>
                    <Terminal sectionName="TECH" arrayOfEventNames="{['Hackathon', 'Tech Exhibition', 'CTF']}"
                              gsapTimeline="{terminalTechGsap}"/>
                </div>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] h-[70px] w-[70%] sm:w-[37%] bg-primary/90 absolute bottom-24 sm:bottom-30 left-2 xl:left-14 flex flex-col items-start justify-center px-5 tech-rotate-d-9">
                <p class="brand-font text-2xl lg:text-3xl text-on-primary tracking-wide">
                    CTF
                </p>
                <p class="regular-font text-sm text-on-primary tracking-wide">
                    Strategy. Victory. Thrill.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[37%] bg-on-primary/90 absolute top-32 xl:top-28 xl:right-14 right-2 lg:right-5 flex flex-col items-start justify-center px-5 tech-rotate-d-6">
                <p class="brand-font text-2xl lg:text-3xl text-primary tracking-wide">
                    Tech Exhibition
                </p>
                <p class="regular-font text-sm text-primary tracking-wide">
                    Innovation. Discovery. Future.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[40%] bg-on-primary-container absolute top-12 left-2 lg:left-9 xl:bottom-32 xl:right-24 flex flex-col items-start justify-center px-5 tech-rotate-d-3">
                <p class="brand-font text-2xl lg:text-3xl text-primary-container tracking-wide">
                    Hackathon
                </p>
                <p class="regular-font text-sm text-primary-container tracking-wide">
                    Innovate. Code. Collaborate.
                </p>
            </div>
            <div class="h-full w-full flex flex-col absolute top-0 items-center justify-end">
                <div class="brand-font h-fit w-full font-bold flex flex-row items-end justify-center text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip">
                    <span class="tech-letter-down -translate-y-[70px]">T</span>
                    <span class="tech-letter-down -translate-y-[90px]">E</span>
                    <span class="tech-letter-down -translate-y-[110px]">C</span>
                    <span class="tech-letter-down -translate-y-[130px]">H</span>
                    <span class="tech-letter-down -translate-y-[150px]">N</span>
                    <span class="tech-letter-down -translate-y-[170px]">I</span>
                    <span class="tech-letter-down -translate-y-[180px]">C</span>
                    <span class="tech-letter-down -translate-y-[200px]">A</span>
                    <span class="tech-letter-down -translate-y-[220px]">L</span>
                    <span class="tech-letter-down -translate-y-[240px]">&nbsp;</span>
                    <span class="tech-letter-down -translate-y-[260px]">E</span>
                    <span class="tech-letter-down -translate-y-[280px]">V</span>
                    <span class="tech-letter-down -translate-y-[300px]">E</span>
                    <span class="tech-letter-down -translate-y-[320px]">N</span>
                    <span class="tech-letter-down -translate-y-[340px]">T</span>
                    <span class="tech-letter-down -translate-y-[360px]">S</span>
                </div>
                <div class="regular-font text-center font-thin h-fit w-full tracking-wide flex flex-col text-on-surface capitalize items-center justify-center pb-2 sm:pb-4 lg:pb-9 text-sm opacity-0 tech-events-tagline-div">
                    Explore, innovate, and excel in our technical events lineup!
                </div>
            </div>
        </div>
    </div>

    <div class="h-[800vh] w-full sticky top-0 bg-on-surface esports-events-trigger z-[2]">
        <div class="h-screen w-full absolute -top-[48px] items-center justify-center overflow-hidden">
            <svg width="1920" height="48" viewBox="0 0 1920 48" fill="none" class="fill-on-surface"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M944.931 4.96811L948.426 8.47002L951.934 4.96811H944.931ZM1193.34 13.0261H1187.65L1187.68 13.0504H1193.31L1193.34 13.0261ZM1586.65 12.8323L1580.12 6.27678H1569.09L1555.46 20.5752L1555.44 20.551V20.5752L1547.59 13.0504H1193.3L1190.48 15.8737L1195.19 20.5752H1185.79L1190.48 15.8737L1187.66 13.0504H1117.91L1113.91 9.02741L1106.01 1.11479L1100.75 6.38584L1074.08 6.26466H1069.8L1059 17.0854H1030.29L1024.1 10.8935L960.715 10.9298L955.792 15.8616L948.414 8.4579L945.947 10.9298L804.968 10.8935L794.083 0L773.558 20.5631L765.829 12.8201H762.551L760.761 14.6135L763.604 17.4611H757.919L760.749 14.6135L758.995 12.8565L701.012 12.8201V48H1920V12.8201H1586.69L1586.65 12.8323ZM1074 14.9891H1072.52V13.5108H1074V14.9891ZM1074 12.0204H1072.52V10.5421H1074V12.0204ZM1085.46 14.9891H1083.99V10.5421H1085.46V14.9891ZM1091.13 12.0204H1089.66V10.5421H1091.13V12.0204ZM1501.22 20.5631H1496.78V16.1161H1501.22V20.5631ZM1516.01 20.5631H1514.53V16.1161H1516.01V20.5631ZM1526.36 20.5631H1524.89V16.1161H1526.36V20.5631ZM1528.6 20.5631H1527.12V16.1161H1528.6V20.5631Z"
                />
                <path d="M589.936 6.97182L593.432 10.4737L593.434 10.4718L596.939 6.97182H589.936Z" fill="#FCEE0A"/>
                <path d="M593.432 10.4737L593.42 10.4616L590.952 12.9335L337.976 12.8972L330.494 5.92295H320.995L306.565 20.5632L298.836 12.8202H295.559L293.768 14.6135L296.611 17.4611H290.926L293.756 14.6135L292.003 12.8565L265.019 12.8202L254.996 24.4569H211.996V48H700.988V38.4826L701.109 17.0855V12.8972L605.72 12.9335L600.798 15.8616L593.434 10.4718L593.432 10.4737Z"
                />
                <path d="M0 36.9798H211.996V48H0V36.9798Z"/>
                <path d="M207.996 24.5H209.996V36.9798H207.996V24.5Z"/>
                <path d="M199.997 24.5H201.997V36.9798H199.997V24.5Z"/>
                <path d="M190.997 24.5H192.997V36.9798H190.997V24.5Z"/>
                <path d="M194.997 24.5H197.997V36.9798H194.997V24.5Z"/>
                <path d="M204.997 24.5H205.997V36.9798H204.997V24.5Z"/>
                <path d="M188.997 24.5H189.997V36.9798H188.997V24.5Z"/>
                <path d="M181.997 24.5H182.997V36.9798H181.997V24.5Z"/>
                <path d="M178.997 24.5H179.997V36.9798H178.997V24.5Z"/>
            </svg>
        </div>
        <div class="h-screen w-full flex sticky top-0 items-center justify-center">
            <div class="lg:h-[250px] h-[200px] sm:h-[225px] xl:h-[250px] w-[85%] sm:w-[45%] lg:w-[35%] xl:w-[30%] bg-primary-container flex flex-col justify-center items-center z-[2] absolute esports-convert-to-laptop-card">
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary esports-rotate-d-9-reveal opacity-0 "></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary esports-rotate-d-6-reveal opacity-0"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface esports-rotate-d-3-reveal"></div>
                <div class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container flex flex-col items-center justify-center ripple-shadow">
                    <div class="style-font text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide esports-events-initial">
                        <p>Nexus<span class="always-blink">_</span></p>
                        <div class="h-1 w-[45%] bg-on-primary-container"></div>
                    </div>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden esports-events-d-3 opacity-0">
                        BGMI</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden esports-events-d-6 opacity-0">
                        COD</p>
                    <p class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden esports-events-d-9 opacity-0">
                        FIFA</p>
                    <Terminal sectionName="ESPORTS" arrayOfEventNames="{['BGMI', 'COD', 'FIFA']}"
                              gsapTimeline="{terminalEsportsGsap}"/>
                </div>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] h-[70px] w-[70%] sm:w-[37%] bg-primary/90 absolute bottom-24 sm:bottom-30 left-2 xl:left-14 flex flex-col items-start justify-center px-5 esports-rotate-d-9">
                <p class="brand-font text-2xl lg:text-3xl text-on-primary tracking-wide">
                    FIFA
                </p>
                <p class="regular-font text-sm text-on-primary tracking-wide">
                    Passion. Precision. Victory.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[37%] bg-on-primary/90 absolute top-32 xl:top-28 xl:right-14 right-2 lg:right-5 flex flex-col items-start justify-center px-5 esports-rotate-d-6">
                <p class="brand-font text-2xl lg:text-3xl text-primary tracking-wide">
                    COD
                </p>
                <p class="regular-font text-sm text-primary tracking-wide">
                    Action. Precision. Strategy.
                </p>
            </div>
            <div class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[40%] bg-surface absolute top-12 left-2 lg:left-9 xl:bottom-32 xl:right-24 flex flex-col items-start justify-center px-5 esports-rotate-d-3">
                <p class="brand-font text-2xl lg:text-3xl text-on-surface tracking-wide">
                    BGMI
                </p>
                <p class="regular-font text-sm text-on-surface tracking-wide">
                    Battle. Survive. Conquer.
                </p>
            </div>
            <div class="h-full w-full flex flex-col absolute top-0 items-center justify-end">
                <div class="brand-font h-fit w-full font-bold flex flex-row items-end justify-center text-6xl sm:text-7xl lg:text-8xl text-surface overflow-y-clip">
                    <span class="esports-letter-down -translate-y-[70px]">E</span>
                    <span class="esports-letter-down -translate-y-[90px]">S</span>
                    <span class="esports-letter-down -translate-y-[110px]">P</span>
                    <span class="esports-letter-down -translate-y-[130px]">O</span>
                    <span class="esports-letter-down -translate-y-[150px]">R</span>
                    <span class="esports-letter-down -translate-y-[170px]">T</span>
                    <span class="esports-letter-down -translate-y-[180px]">S</span>
                    <span class="esports-letter-down -translate-y-[200px]">&nbsp;</span>
                    <span class="esports-letter-down -translate-y-[220px]">E</span>
                    <span class="esports-letter-down -translate-y-[240px]">V</span>
                    <span class="esports-letter-down -translate-y-[260px]">E</span>
                    <span class="esports-letter-down -translate-y-[280px]">N</span>
                    <span class="esports-letter-down -translate-y-[300px]">T</span>
                    <span class="esports-letter-down -translate-y-[320px]">S</span>
                </div>
                <div class="regular-font text-center font-thin h-fit w-full tracking-wide flex flex-col text-surface capitalize items-center justify-center pb-2 sm:pb-4 lg:pb-9 text-sm opacity-0 esports-events-tagline-div">
                    Dive into the electrifying world of esports competition!
                </div>
            </div>
        </div>
    </div>
    <div class="h-[600vh] w-full sticky top-0 bg-surface call-to-action-trigger z-[2]">
        <div class="h-fit w-full absolute -top-[48px] items-center justify-center overflow-hidden">
            <svg width="1920" height="48" viewBox="0 0 1920 48" fill="none" class="fill-surface"
                 xmlns="http://www.w3.org/2000/svg">
                <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/>
                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/>
                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>
                <path d="M944.931 4.96811L948.426 8.47002L951.934 4.96811H944.931ZM1193.34 13.0261H1187.65L1187.68 13.0504H1193.31L1193.34 13.0261ZM1586.65 12.8323L1580.12 6.27678H1569.09L1555.46 20.5752L1555.44 20.551V20.5752L1547.59 13.0504H1193.3L1190.48 15.8737L1195.19 20.5752H1185.79L1190.48 15.8737L1187.66 13.0504H1117.91L1113.91 9.02741L1106.01 1.11479L1100.75 6.38584L1074.08 6.26466H1069.8L1059 17.0854H1030.29L1024.1 10.8935L960.715 10.9298L955.792 15.8616L948.414 8.4579L945.947 10.9298L804.968 10.8935L794.083 0L773.558 20.5631L765.829 12.8201H762.551L760.761 14.6135L763.604 17.4611H757.919L760.749 14.6135L758.995 12.8565L701.012 12.8201V48H1920V12.8201H1586.69L1586.65 12.8323ZM1074 14.9891H1072.52V13.5108H1074V14.9891ZM1074 12.0204H1072.52V10.5421H1074V12.0204ZM1085.46 14.9891H1083.99V10.5421H1085.46V14.9891ZM1091.13 12.0204H1089.66V10.5421H1091.13V12.0204ZM1501.22 20.5631H1496.78V16.1161H1501.22V20.5631ZM1516.01 20.5631H1514.53V16.1161H1516.01V20.5631ZM1526.36 20.5631H1524.89V16.1161H1526.36V20.5631ZM1528.6 20.5631H1527.12V16.1161H1528.6V20.5631Z"
                />
                <path d="M589.936 6.97182L593.432 10.4737L593.434 10.4718L596.939 6.97182H589.936Z" fill="#FCEE0A"/>
                <path d="M593.432 10.4737L593.42 10.4616L590.952 12.9335L337.976 12.8972L330.494 5.92295H320.995L306.565 20.5632L298.836 12.8202H295.559L293.768 14.6135L296.611 17.4611H290.926L293.756 14.6135L292.003 12.8565L265.019 12.8202L254.996 24.4569H211.996V48H700.988V38.4826L701.109 17.0855V12.8972L605.72 12.9335L600.798 15.8616L593.434 10.4718L593.432 10.4737Z"
                />
                <path d="M0 36.9798H211.996V48H0V36.9798Z"/>
                <path d="M207.996 24.5H209.996V36.9798H207.996V24.5Z"/>
                <path d="M199.997 24.5H201.997V36.9798H199.997V24.5Z"/>
                <path d="M190.997 24.5H192.997V36.9798H190.997V24.5Z"/>
                <path d="M194.997 24.5H197.997V36.9798H194.997V24.5Z"/>
                <path d="M204.997 24.5H205.997V36.9798H204.997V24.5Z"/>
                <path d="M188.997 24.5H189.997V36.9798H188.997V24.5Z"/>
                <path d="M181.997 24.5H182.997V36.9798H181.997V24.5Z"/>
                <path d="M178.997 24.5H179.997V36.9798H178.997V24.5Z"/>
            </svg>
        </div>
        <div class="h-screen w-full sticky top-0 flex flex-col items-center justify-center">
            <div class="brand-font h-fit w-full font-bold flex flex-row items-center justify-center text-[14vw] text-on-surface overflow-y-clip">
                <span class="call-to-action-letter-down -translate-y-[70px]">G</span>
                <span class="call-to-action-letter-down -translate-y-[90px]">E</span>
                <span class="call-to-action-letter-down -translate-y-[110px]">T</span>
                <span class="call-to-action-letter-down -translate-y-[130px]">&nbsp;</span>
                <span class="call-to-action-letter-down -translate-y-[150px]">Y</span>
                <span class="call-to-action-letter-down -translate-y-[170px]">O</span>
                <span class="call-to-action-letter-down -translate-y-[190px]">U</span>
                <span class="call-to-action-letter-down -translate-y-[210px]">R</span>
                <span class="call-to-action-letter-down -translate-y-[230px]">&nbsp;</span>
                <span class="call-to-action-letter-down -translate-y-[250px]">T</span>
                <span class="call-to-action-letter-down -translate-y-[270px]">I</span>
                <span class="call-to-action-letter-down -translate-y-[290px]">C</span>
                <span class="call-to-action-letter-down -translate-y-[310px]">K</span>
                <span class="call-to-action-letter-down -translate-y-[330px]">E</span>
                <span class="call-to-action-letter-down -translate-y-[350px]">T</span>
                <span class="call-to-action-letter-down -translate-y-[370px]">S</span>
                <span class="call-to-action-letter-down -translate-y-[390px]">&nbsp;</span>
                <span class="call-to-action-letter-down -translate-y-[410px]">N</span>
                <span class="call-to-action-letter-down -translate-y-[430px]">O</span>
                <span class="call-to-action-letter-down -translate-y-[450px]">W</span>
                <span class="call-to-action-letter-down -translate-y-[450px]">!</span>
            </div>
        </div>
    </div>
    <div class="h-[200vh] w-full bg-on-surface sticky top-0 z-[4] faq-trigger">
        <div class="h-screen w-full absolute -top-[48px] items-center justify-center overflow-hidden">
            <svg width="1920" height="48" viewBox="0 0 1920 48" fill="none" class="fill-on-surface"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M944.931 4.96811L948.426 8.47002L951.934 4.96811H944.931ZM1193.34 13.0261H1187.65L1187.68 13.0504H1193.31L1193.34 13.0261ZM1586.65 12.8323L1580.12 6.27678H1569.09L1555.46 20.5752L1555.44 20.551V20.5752L1547.59 13.0504H1193.3L1190.48 15.8737L1195.19 20.5752H1185.79L1190.48 15.8737L1187.66 13.0504H1117.91L1113.91 9.02741L1106.01 1.11479L1100.75 6.38584L1074.08 6.26466H1069.8L1059 17.0854H1030.29L1024.1 10.8935L960.715 10.9298L955.792 15.8616L948.414 8.4579L945.947 10.9298L804.968 10.8935L794.083 0L773.558 20.5631L765.829 12.8201H762.551L760.761 14.6135L763.604 17.4611H757.919L760.749 14.6135L758.995 12.8565L701.012 12.8201V48H1920V12.8201H1586.69L1586.65 12.8323ZM1074 14.9891H1072.52V13.5108H1074V14.9891ZM1074 12.0204H1072.52V10.5421H1074V12.0204ZM1085.46 14.9891H1083.99V10.5421H1085.46V14.9891ZM1091.13 12.0204H1089.66V10.5421H1091.13V12.0204ZM1501.22 20.5631H1496.78V16.1161H1501.22V20.5631ZM1516.01 20.5631H1514.53V16.1161H1516.01V20.5631ZM1526.36 20.5631H1524.89V16.1161H1526.36V20.5631ZM1528.6 20.5631H1527.12V16.1161H1528.6V20.5631Z"
                />
                <path d="M589.936 6.97182L593.432 10.4737L593.434 10.4718L596.939 6.97182H589.936Z" fill="#FCEE0A"/>
                <path d="M593.432 10.4737L593.42 10.4616L590.952 12.9335L337.976 12.8972L330.494 5.92295H320.995L306.565 20.5632L298.836 12.8202H295.559L293.768 14.6135L296.611 17.4611H290.926L293.756 14.6135L292.003 12.8565L265.019 12.8202L254.996 24.4569H211.996V48H700.988V38.4826L701.109 17.0855V12.8972L605.72 12.9335L600.798 15.8616L593.434 10.4718L593.432 10.4737Z"
                />
                <path d="M0 36.9798H211.996V48H0V36.9798Z"/>
                <path d="M207.996 24.5H209.996V36.9798H207.996V24.5Z"/>
                <path d="M199.997 24.5H201.997V36.9798H199.997V24.5Z"/>
                <path d="M190.997 24.5H192.997V36.9798H190.997V24.5Z"/>
                <path d="M194.997 24.5H197.997V36.9798H194.997V24.5Z"/>
                <path d="M204.997 24.5H205.997V36.9798H204.997V24.5Z"/>
                <path d="M188.997 24.5H189.997V36.9798H188.997V24.5Z"/>
                <path d="M181.997 24.5H182.997V36.9798H181.997V24.5Z"/>
                <path d="M178.997 24.5H179.997V36.9798H178.997V24.5Z"/>
            </svg>
        </div>
        <div class="min-h-screen max-h-fit w-full flex sticky top-0 flex-col items-center justify-center p-5">
            <section class="p-8">
                <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <p class="w-full h-full text-center text-[12vw] font-bold tracking-wide brand-font text-on-primary leading-[1.1]">PREMIUM SPONSORS</p>
                    <div class="grid grid-cols-1 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-2 lg:grid-cols-2 dark:text-gray-400">
                        <a class="flex flex-col items-center lg:justify-center" target="_blank">
                            <img src="{jrnySponsor}" alt="">
                        </a>
                        <a class="flex flex-col justify-center items-center lg:justify-center" target="_blank">
                            <img src="{mboscSponsor}" alt="">
                        </a>
<!--                        <a class="flex items-center lg:justify-center" target="_blank">-->
<!--                            <svg class="h-8 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 151 34"-->
<!--                                 fill="currentColor"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                <g clip-path="url(#clip0_3753_27919)">-->
<!--                                    <path-->
<!--                                            d="M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z"-->
<!--                                            fill="currentColor"></path>-->
<!--                                </g>-->
<!--                                <defs>-->
<!--                                    <clipPath id="clip0_3753_27919">-->
<!--                                        <rect width="150" height="32.8125" fill="white"-->
<!--                                              transform="translate(0.0820312 0.835449)">-->
<!--                                        </rect>-->
<!--                                    </clipPath>-->
<!--                                </defs>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a class="flex items-center lg:justify-center" target="_blank">-->
<!--                            <svg class="h-9 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 124 38"-->
<!--                                 fill="currentColor"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path-->
<!--                                        d="M50.8299 17.3952C54.7246 18.342 56.3124 19.8121 56.3124 22.4701C56.3124 25.615 53.9096 27.6473 50.1907 27.6473C47.5621 27.6473 45.1252 26.7135 43.1446 24.9452C43.104 24.9089 43.0791 24.8582 43.0754 24.8038C43.0716 24.7494 43.0893 24.6957 43.1246 24.6542L44.8747 22.5724C44.8926 22.5512 44.9145 22.5336 44.9392 22.5209C44.9639 22.5082 44.9909 22.5005 45.0185 22.4983C45.0462 22.4961 45.0741 22.4995 45.1005 22.5082C45.1269 22.5169 45.1513 22.5307 45.1723 22.5489C46.8747 24.0226 48.3966 24.6506 50.2619 24.6506C51.9419 24.6506 52.9857 23.9232 52.9857 22.7541C52.9857 21.6986 52.4694 21.1088 49.4104 20.4043C45.8174 19.5351 43.7374 18.4108 43.7374 15.2323C43.7374 12.2686 46.1484 10.1986 49.5991 10.1986C51.9455 10.1986 53.9548 10.8937 55.7384 12.3244C55.8243 12.3938 55.8419 12.5185 55.7778 12.609L54.2165 14.8084C54.2002 14.831 54.1796 14.8501 54.1558 14.8647C54.1321 14.8793 54.1057 14.8891 54.0781 14.8935C54.0506 14.8978 54.0224 14.8967 53.9953 14.8902C53.9682 14.8837 53.9427 14.8718 53.9202 14.8554C52.4218 13.7381 50.9928 13.1959 49.5509 13.1959C48.0643 13.1959 47.0646 13.9104 47.0646 14.9718C47.0646 16.095 47.635 16.6302 50.8305 17.3934L50.8299 17.3952ZM64.7256 14.2432C63.1144 14.2432 61.7924 14.8783 60.7016 16.1779V14.7137C60.7016 14.6582 60.6795 14.6049 60.6403 14.5657C60.601 14.5264 60.5478 14.5043 60.4922 14.5043H57.6308C57.5752 14.5043 57.522 14.5264 57.4827 14.5657C57.4435 14.6049 57.4214 14.6582 57.4214 14.7137V30.9851C57.4214 31.0998 57.5155 31.1939 57.6308 31.1939H60.4928C60.6087 31.1939 60.7028 31.0998 60.7028 30.9846V25.8479C61.793 27.0711 63.1156 27.6697 64.7274 27.6697C67.7235 27.6697 70.755 25.3645 70.755 20.9565C70.755 16.5484 67.7218 14.2432 64.7256 14.2432ZM67.4248 20.9571C67.4248 23.2011 66.0429 24.7676 64.0635 24.7676C62.1053 24.7676 60.6293 23.1299 60.6293 20.9571C60.6293 18.7842 62.1053 17.1465 64.0635 17.1465C66.0111 17.1465 67.4254 18.7489 67.4254 20.9571H67.4248ZM78.5255 14.2432C74.6679 14.2432 71.6465 17.2129 71.6465 21.0059C71.6465 24.7565 74.6467 27.695 78.4773 27.695C82.3485 27.695 85.3793 24.7347 85.3793 20.9571C85.3793 17.1923 82.3684 14.2427 78.5249 14.2427L78.5255 14.2432ZM78.5249 24.7906C76.4726 24.7906 74.926 23.1423 74.926 20.9565C74.926 18.7618 76.4197 17.1694 78.4779 17.1694C80.542 17.1694 82.1003 18.8177 82.1003 21.0047C82.1003 23.1981 80.5961 24.79 78.5249 24.79V24.7906ZM93.6168 14.5043C93.7326 14.5043 93.8261 14.5984 93.8261 14.7137V17.1735C93.8262 17.201 93.8208 17.2282 93.8104 17.2536C93.7999 17.279 93.7846 17.3021 93.7652 17.3215C93.7458 17.341 93.7227 17.3564 93.6974 17.3669C93.672 17.3774 93.6448 17.3829 93.6173 17.3829H90.4683V23.2993C90.4683 24.2343 90.8788 24.6506 91.7973 24.6506C92.3818 24.6538 92.9582 24.5145 93.4768 24.2449C93.5089 24.229 93.5444 24.2215 93.5802 24.2232C93.6159 24.2249 93.6507 24.2356 93.6811 24.2545C93.7115 24.2733 93.7366 24.2996 93.7541 24.3308C93.7715 24.3621 93.7807 24.3973 93.7808 24.433V26.7747C93.7808 26.8494 93.7397 26.9199 93.675 26.957C92.8723 27.4115 92.0208 27.6232 90.9934 27.6232C88.4689 27.6232 87.1887 26.3195 87.1887 23.7468V17.3834H85.8127C85.7853 17.3834 85.7581 17.3779 85.7328 17.3673C85.7075 17.3568 85.6846 17.3413 85.6652 17.3219C85.6459 17.3024 85.6306 17.2794 85.6202 17.254C85.6098 17.2287 85.6044 17.2015 85.6045 17.1741V14.7137C85.6045 14.5984 85.6974 14.5043 85.8127 14.5043H87.1887V11.2841C87.1887 11.1689 87.2828 11.0748 87.3993 11.0748H90.2607C90.3766 11.0748 90.4701 11.1689 90.4701 11.2841V14.5043H93.6191H93.6168ZM109.48 14.5167C109.566 14.5167 109.644 14.5696 109.675 14.6519L113.018 23.3751L116.07 14.6566C116.085 14.6155 116.112 14.5798 116.147 14.5545C116.183 14.5293 116.225 14.5156 116.269 14.5155H119.248C119.282 14.5155 119.316 14.5238 119.346 14.5398C119.376 14.5558 119.402 14.5789 119.421 14.6072C119.441 14.6354 119.452 14.668 119.456 14.7019C119.46 14.7359 119.455 14.7702 119.442 14.8019L114.477 27.6332C113.448 30.2812 112.279 31.2656 110.166 31.2656C109.036 31.2656 108.122 31.0316 107.108 30.4835C107.062 30.4584 107.027 30.4163 107.01 30.366C106.993 30.3157 106.997 30.261 107.019 30.213L107.989 28.0843C108.001 28.058 108.018 28.0345 108.04 28.0151C108.061 27.9957 108.086 27.9808 108.113 27.9714C108.14 27.9626 108.169 27.9595 108.198 27.9622C108.227 27.9649 108.255 27.9734 108.28 27.9872C108.823 28.2842 109.354 28.4342 109.859 28.4342C110.482 28.4342 110.939 28.2295 111.404 27.1981L107.311 17.3834H104.638V27.201C104.638 27.3169 104.544 27.4109 104.429 27.4109H101.567C101.539 27.4109 101.512 27.4055 101.486 27.395C101.461 27.3844 101.438 27.3689 101.418 27.3494C101.399 27.3299 101.384 27.3068 101.373 27.2813C101.363 27.2558 101.357 27.2286 101.357 27.201V17.3834H99.9824C99.9269 17.383 99.8738 17.3607 99.8345 17.3215C99.7952 17.2822 99.773 17.229 99.7725 17.1735V14.7019C99.7725 14.5861 99.8666 14.492 99.9818 14.492H101.357V13.8863C101.357 11.0719 102.754 9.58291 105.398 9.58291C106.484 9.58291 107.209 9.75638 107.777 9.92398C107.866 9.95162 107.925 10.0334 107.925 10.1251V12.5361C107.926 12.5695 107.918 12.6024 107.903 12.6322C107.888 12.662 107.866 12.6878 107.839 12.7074C107.813 12.727 107.781 12.7398 107.748 12.7448C107.715 12.7498 107.682 12.7468 107.65 12.7361C107.113 12.5573 106.634 12.4385 106.038 12.4385C105.038 12.4385 104.591 12.9578 104.591 14.1215V14.5167H109.479H109.48ZM98.2289 14.5043C98.3441 14.5043 98.4382 14.5984 98.4382 14.7137V27.2004C98.4382 27.3157 98.3441 27.4098 98.2283 27.4098H95.3662C95.3106 27.4098 95.2573 27.3877 95.218 27.3485C95.1786 27.3092 95.1564 27.256 95.1563 27.2004V14.7137C95.1563 14.5984 95.2504 14.5043 95.3656 14.5043H98.2277H98.2289ZM96.8122 8.81903C97.3565 8.81903 97.8786 9.03525 98.2634 9.42013C98.6483 9.80502 98.8645 10.327 98.8645 10.8713C98.8645 11.4156 98.6483 11.9377 98.2634 12.3225C97.8786 12.7074 97.3565 12.9236 96.8122 12.9236C96.2679 12.9236 95.7459 12.7074 95.361 12.3225C94.9762 11.9377 94.7599 11.4156 94.7599 10.8713C94.7599 10.327 94.9762 9.80502 95.361 9.42013C95.7459 9.03525 96.2679 8.81903 96.8122 8.81903ZM121.886 18.5184C121.621 18.5194 121.359 18.468 121.114 18.3671C120.869 18.2663 120.646 18.118 120.459 17.9307C120.272 17.7435 120.124 17.5211 120.023 17.2763C119.922 17.0314 119.871 16.7691 119.872 16.5043C119.872 16.2385 119.924 15.9752 120.026 15.7296C120.127 15.484 120.277 15.2608 120.465 15.0729C120.653 14.8849 120.876 14.7358 121.122 14.6341C121.367 14.5324 121.63 14.4801 121.896 14.4802C122.161 14.4791 122.423 14.5303 122.668 14.631C122.913 14.7318 123.135 14.88 123.323 15.0671C123.51 15.2543 123.658 15.4766 123.759 15.7214C123.86 15.9661 123.911 16.2284 123.91 16.4931C123.91 16.7591 123.858 17.0225 123.756 17.2682C123.655 17.514 123.506 17.7373 123.318 17.9254C123.13 18.1135 122.906 18.2627 122.661 18.3646C122.415 18.4664 122.152 18.5189 121.886 18.519V18.5184ZM121.896 14.6808C120.865 14.6808 120.084 15.5011 120.084 16.5049C120.084 17.5087 120.859 18.3179 121.886 18.3179C122.917 18.3179 123.699 17.4981 123.699 16.4937C123.699 15.4899 122.922 14.6808 121.896 14.6808ZM122.343 16.7007L122.912 17.4981H122.432L121.92 16.7666H121.479V17.4981H121.077V15.3841H122.02C122.51 15.3841 122.834 15.6358 122.834 16.0586C122.834 16.4055 122.634 16.6172 122.343 16.6995L122.343 16.7007ZM122.002 15.7469H121.478V16.4149H122.002C122.264 16.4149 122.419 16.2867 122.419 16.0797C122.419 15.8622 122.264 15.7463 122.002 15.7463V15.7469ZM18.9768 0.305176C8.75288 0.305176 0.464844 8.70847 0.464844 18.933C0.464256 28.54 7.78083 36.2953 17.1462 37.4714H20.8074C30.1728 36.2953 37.4893 28.54 37.4893 18.9324C37.4893 8.70847 29.2007 0.305176 18.9774 0.305176H18.9768ZM27.4665 27.0064C27.3877 27.1359 27.284 27.2486 27.1616 27.3379C27.0391 27.4273 26.9002 27.4917 26.7528 27.5273C26.6054 27.5629 26.4525 27.5691 26.3027 27.5455C26.1529 27.5219 26.0093 27.469 25.88 27.3898C21.5325 24.733 16.0612 24.1331 9.61732 25.605C9.46966 25.639 9.31676 25.6435 9.16736 25.6183C9.01796 25.5931 8.87499 25.5387 8.74664 25.4582C8.61829 25.3777 8.50707 25.2726 8.41934 25.1491C8.33162 25.0256 8.26911 24.886 8.23539 24.7382C8.20146 24.5905 8.19701 24.4375 8.22229 24.2881C8.24756 24.1386 8.30207 23.9956 8.3827 23.8672C8.46332 23.7389 8.56848 23.6277 8.69214 23.54C8.8158 23.4523 8.95554 23.3899 9.10336 23.3563C16.1553 21.745 22.204 22.439 27.0837 25.4204C27.3446 25.5803 27.5314 25.8371 27.603 26.1346C27.6747 26.4321 27.6254 26.7458 27.4659 27.007L27.4665 27.0064ZM29.7317 21.9656C29.5314 22.2916 29.2099 22.5248 28.8377 22.6139C28.4656 22.703 28.0733 22.6407 27.747 22.4407C22.7721 19.3828 15.1862 18.4966 9.29977 20.2837C8.93342 20.3943 8.53819 20.3552 8.2006 20.175C7.86301 19.9948 7.61058 19.6882 7.49856 19.3223C7.26922 18.5578 7.6985 17.7539 8.46121 17.5228C15.1856 15.4823 23.5436 16.4702 29.2577 19.9809C29.5837 20.1813 29.8168 20.5029 29.9058 20.875C29.9948 21.2472 29.9324 21.6394 29.7323 21.9656H29.7317ZM29.9269 16.7166C23.9594 13.173 14.1165 12.8472 8.42004 14.5761C7.98054 14.7093 7.50613 14.6624 7.10118 14.4458C6.69622 14.2292 6.3939 13.8606 6.26071 13.4211C6.12752 12.9816 6.17437 12.5072 6.39096 12.1023C6.60756 11.6973 6.97615 11.395 7.41565 11.2618C13.9548 9.27712 24.8256 9.66053 31.6952 13.7375C31.8908 13.8535 32.0617 14.0069 32.198 14.1889C32.3343 14.371 32.4334 14.5781 32.4897 14.7984C32.5459 15.0188 32.5582 15.248 32.5258 15.4731C32.4934 15.6982 32.417 15.9148 32.3009 16.1103C32.185 16.3061 32.0316 16.477 31.8495 16.6134C31.6674 16.7498 31.4603 16.849 31.2398 16.9053C31.0194 16.9615 30.79 16.9738 30.5648 16.9413C30.3397 16.9088 30.1231 16.8323 29.9275 16.716L29.9269 16.7166Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a class="flex items-center lg:justify-center" target="_blank">-->
<!--                            <svg class="h-9 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 137 37"-->
<!--                                 fill="currentColor"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path-->
<!--                                        d="M53.3228 13.9636C51.5883 13.9636 50.7303 15.3285 50.3366 16.209C50.1166 16.7006 50.0551 17.0893 49.8767 17.0893C49.6253 17.0893 49.8054 16.7514 49.5997 16.0022C49.329 15.0165 48.5133 13.9636 46.78 13.9636C44.9577 13.9636 44.1775 15.5032 43.8075 16.3493C43.5545 16.9276 43.5542 17.0893 43.3597 17.0893C43.0778 17.0893 43.3113 16.6298 43.4381 16.0897C43.688 15.0263 43.498 14.2136 43.498 14.2136H40.6094V25.0758H44.5523C44.5523 25.0758 44.5523 20.5363 44.5523 19.6714C44.5523 18.6054 44.9982 17.2528 45.7625 17.2528C46.6456 17.2528 46.8224 17.931 46.8224 19.1869C46.8224 20.3255 46.8224 25.0781 46.8224 25.0781H50.7812C50.7812 25.0781 50.7812 20.511 50.7812 19.6714C50.7812 18.7226 51.1684 17.2528 51.9972 17.2528C52.8926 17.2528 53.0511 18.2056 53.0511 19.1869C53.0511 20.1682 53.0511 25.0758 53.0511 25.0758H56.9387C56.9387 25.0758 56.9387 20.7719 56.9387 18.6882C56.9387 15.8535 55.9395 13.9636 53.3228 13.9636Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M120.249 13.9636C118.514 13.9636 117.656 15.3285 117.262 16.209C117.042 16.7006 116.981 17.0893 116.802 17.0893C116.551 17.0893 116.719 16.6601 116.526 16.0022C116.237 15.0217 115.518 13.9636 113.706 13.9636C111.884 13.9636 111.103 15.5032 110.733 16.3493C110.48 16.9276 110.48 17.0893 110.286 17.0893C110.004 17.0893 110.237 16.6298 110.364 16.0897C110.614 15.0263 110.424 14.2136 110.424 14.2136H107.535V25.0758H111.478C111.478 25.0758 111.478 20.5363 111.478 19.6714C111.478 18.6054 111.924 17.2528 112.688 17.2528C113.571 17.2528 113.748 17.931 113.748 19.1869C113.748 20.3255 113.748 25.0781 113.748 25.0781H117.707C117.707 25.0781 117.707 20.511 117.707 19.6714C117.707 18.7226 118.094 17.2528 118.923 17.2528C119.819 17.2528 119.977 18.2056 119.977 19.1869C119.977 20.1682 119.977 25.0758 119.977 25.0758H123.865C123.865 25.0758 123.865 20.7719 123.865 18.6882C123.865 15.8535 122.865 13.9636 120.249 13.9636Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M62.7138 22.5371C61.7709 22.7549 61.2821 22.4645 61.2821 21.8395C61.2821 20.9834 62.1676 20.6406 63.4315 20.6406C63.9887 20.6406 64.5126 20.6888 64.5126 20.6888C64.5126 21.0552 63.7172 22.3056 62.7138 22.5371ZM63.6737 13.9661C60.6534 13.9661 58.4862 15.0765 58.4862 15.0765V18.3405C58.4862 18.3405 60.8795 16.9645 62.821 16.9645C64.3707 16.9645 64.5611 17.8003 64.4905 18.494C64.4905 18.494 64.0437 18.3757 62.6797 18.3757C59.4661 18.3757 57.8438 19.8362 57.8438 22.1782C57.8438 24.3997 59.667 25.3284 61.2031 25.3284C63.4446 25.3284 64.4299 23.8221 64.7327 23.1075C64.9428 22.6117 64.9811 22.2776 65.1699 22.2776C65.3849 22.2776 65.3125 22.5172 65.3021 23.0107C65.2839 23.8748 65.3246 24.528 65.4616 25.0782H68.4334V19.7326C68.4334 16.395 67.2525 13.9661 63.6737 13.9661Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path d="M74.9258 25.0783H78.8688V10.9255H74.9258V25.0783Z" fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M83.2111 19.6471C83.2111 18.6705 84.1184 17.7819 85.7842 17.7819C87.5992 17.7819 89.059 18.6558 89.3864 18.8542V15.0765C89.3864 15.0765 88.2331 13.9661 85.3984 13.9661C82.4103 13.9661 79.9219 15.7146 79.9219 19.4781C79.9219 23.2415 82.1801 25.3284 85.3904 25.3284C87.898 25.3284 89.3928 23.9506 89.3928 23.9506V20.3624C88.9199 20.6271 87.6021 21.5415 85.8023 21.5415C83.8964 21.5415 83.2111 20.6648 83.2111 19.6471Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M97.373 13.9662C95.0905 13.9662 94.2223 16.1293 94.047 16.5049C93.8716 16.8804 93.785 17.0964 93.6415 17.0918C93.3923 17.0837 93.566 16.6308 93.6631 16.3375C93.8467 15.7834 94.2357 14.3297 94.2357 12.543C94.2357 11.3311 94.0718 10.9255 94.0718 10.9255H90.668V25.0783H94.611C94.611 25.0783 94.611 20.5543 94.611 19.6741C94.611 18.7937 94.9623 17.2554 95.9556 17.2554C96.7784 17.2554 97.036 17.8651 97.036 19.0927C97.036 20.3201 97.036 25.0783 97.036 25.0783H100.979C100.979 25.0783 100.979 21.7679 100.979 19.3289C100.979 16.5406 100.517 13.9662 97.373 13.9662Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M102.258 14.2285V25.0782H106.201V14.2285C106.201 14.2285 105.538 14.6162 104.233 14.6162C102.929 14.6162 102.258 14.2285 102.258 14.2285Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M104.218 10.8157C102.885 10.8157 101.805 11.521 101.805 12.391C101.805 13.2609 102.885 13.9662 104.218 13.9662C105.551 13.9662 106.632 13.2609 106.632 12.391C106.632 11.521 105.551 10.8157 104.218 10.8157Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M69.707 14.2285V25.0782H73.6499V14.2285C73.6499 14.2285 72.9872 14.6162 71.6825 14.6162C70.3779 14.6162 69.707 14.2285 69.707 14.2285Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M71.6674 10.8157C70.3345 10.8157 69.2539 11.521 69.2539 12.391C69.2539 13.2609 70.3345 13.9662 71.6674 13.9662C73.0005 13.9662 74.0811 13.2609 74.0811 12.391C74.0811 11.521 73.0005 10.8157 71.6674 10.8157Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M130.616 22.744C129.712 22.744 129.047 21.5972 129.047 19.9993C129.047 18.4475 129.73 17.2552 130.585 17.2552C131.682 17.2552 132.15 18.2614 132.15 19.9993C132.15 21.8071 131.719 22.744 130.616 22.744ZM131.699 13.9636C129.672 13.9636 128.743 15.4835 128.339 16.3493C128.072 16.9214 128.086 17.0893 127.891 17.0893C127.609 17.0893 127.843 16.6298 127.97 16.0897C128.219 15.0263 128.029 14.2136 128.029 14.2136H125.141V28.0756H129.084C129.084 28.0756 129.084 25.8073 129.084 23.6807C129.55 24.4722 130.414 25.3179 131.747 25.3179C134.598 25.3179 136.033 22.9056 136.033 19.6462C136.033 15.952 134.315 13.9636 131.699 13.9636Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M26.682 17.2446C26.9471 17.213 27.2012 17.2115 27.4346 17.2446C27.5697 16.9348 27.593 16.4007 27.4714 15.819C27.2907 14.9545 27.0463 14.4313 26.5411 14.5127C26.036 14.5941 26.0173 15.2205 26.1979 16.0851C26.2995 16.5714 26.4804 16.987 26.682 17.2446Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M22.3442 17.9286C22.7056 18.0873 22.9278 18.1924 23.0147 18.1005C23.0706 18.0433 23.054 17.934 22.9677 17.7929C22.7893 17.5017 22.4222 17.2064 22.033 17.0405C21.2368 16.6978 20.2872 16.8118 19.5546 17.3381C19.3129 17.5153 19.0836 17.7608 19.1164 17.9098C19.1271 17.958 19.1633 17.9943 19.2481 18.0062C19.4476 18.029 20.1443 17.6767 20.9468 17.6276C21.5133 17.5929 21.9827 17.7701 22.3442 17.9286Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M21.6149 18.3436C21.1441 18.4179 20.8844 18.5732 20.7177 18.7175C20.5755 18.8417 20.4875 18.9792 20.4883 19.0759C20.4886 19.1219 20.5086 19.1484 20.5243 19.1618C20.5458 19.1806 20.5712 19.1911 20.6017 19.1911C20.7081 19.1911 20.9462 19.0955 20.9462 19.0955C21.6014 18.861 22.0335 18.8895 22.4618 18.9383C22.6985 18.9648 22.8103 18.9795 22.8622 18.8984C22.8776 18.8751 22.8962 18.8247 22.8488 18.7479C22.7385 18.569 22.2632 18.2666 21.6149 18.3436"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M25.2163 19.8666C25.5358 20.0237 25.8877 19.962 26.0024 19.7289C26.1169 19.4959 25.9506 19.1796 25.6309 19.0224C25.3113 18.8655 24.9594 18.927 24.8448 19.1601C24.7303 19.3933 24.8965 19.7094 25.2163 19.8666Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M27.2703 18.0709C27.0106 18.0664 26.7953 18.3516 26.7892 18.7076C26.7831 19.0638 26.9888 19.356 27.2485 19.3604C27.5081 19.3649 27.7236 19.0797 27.7295 18.7237C27.7356 18.3674 27.5299 18.0752 27.2703 18.0709Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M9.83004 24.4919C9.76544 24.411 9.65932 24.4356 9.55655 24.4596C9.48477 24.4764 9.40345 24.4952 9.31429 24.4937C9.1233 24.4899 8.96157 24.4085 8.87074 24.2689C8.75244 24.0872 8.75928 23.8163 8.88991 23.5064C8.90748 23.4644 8.92824 23.418 8.95084 23.3674C9.15903 22.9001 9.50765 22.118 9.11629 21.3728C8.82172 20.812 8.34133 20.4626 7.76373 20.3893C7.20923 20.319 6.63835 20.5246 6.27421 20.9263C5.69973 21.5601 5.60995 22.4226 5.72105 22.7274C5.76179 22.8389 5.82544 22.8698 5.87174 22.8761C5.96945 22.8892 6.11398 22.8181 6.20453 22.5745C6.211 22.557 6.21962 22.5298 6.23042 22.4953C6.27082 22.3666 6.34593 22.1268 6.46897 21.9346C6.61733 21.7028 6.8484 21.5432 7.11962 21.4851C7.39594 21.4259 7.67834 21.4787 7.91474 21.6335C8.31723 21.8967 8.47219 22.3898 8.30037 22.8604C8.21157 23.1037 8.06727 23.569 8.09913 23.9514C8.16344 24.7251 8.63936 25.0359 9.06699 25.069C9.48275 25.0845 9.77331 24.8513 9.84682 24.6806C9.89021 24.5797 9.85359 24.5183 9.83005 24.4919"-->
<!--                                        fill="currentColor"></path>-->
<!--                                <path-->
<!--                                        d="M13.781 10.2801C15.137 8.71317 16.8063 7.35092 18.3016 6.58601C18.3533 6.55944 18.4082 6.61569 18.3802 6.66639C18.2614 6.88141 18.0329 7.34188 17.9604 7.69111C17.9491 7.74554 18.0083 7.78647 18.0542 7.75518C18.9845 7.12106 20.6029 6.44157 22.0223 6.35422C22.0833 6.35044 22.1128 6.42867 22.0643 6.46589C21.8484 6.63154 21.6123 6.86065 21.4398 7.09244C21.4104 7.13187 21.4381 7.18868 21.4873 7.18898C22.484 7.19608 23.8891 7.54489 24.805 8.05859C24.8669 8.09327 24.8227 8.21326 24.7535 8.19739C23.3678 7.87989 21.0996 7.63891 18.7435 8.21358C16.6401 8.72668 15.0346 9.51873 13.8634 10.3705C13.8042 10.4137 13.7331 10.3355 13.781 10.2801L13.781 10.2801ZM20.5345 25.4617C20.5346 25.462 20.5348 25.4626 20.5349 25.4626C20.5352 25.463 20.5353 25.4638 20.5357 25.4642C20.5353 25.4634 20.5349 25.4626 20.5345 25.4617ZM26.1264 26.1218C26.1666 26.1049 26.1944 26.0591 26.1896 26.0136C26.184 25.9575 26.134 25.9167 26.0779 25.9225C26.0779 25.9225 23.1841 26.3507 20.4504 25.3501C20.7482 24.3823 21.5399 24.7317 22.7367 24.8283C24.8938 24.9569 26.827 24.6418 28.2558 24.2316C29.494 23.8765 31.12 23.1759 32.3831 22.1789C32.8091 23.1148 32.9595 24.1446 32.9595 24.1446C32.9595 24.1446 33.2893 24.0857 33.5648 24.2552C33.8252 24.4155 34.0162 24.7486 33.8857 25.6099C33.6201 27.219 32.9362 28.525 31.7868 29.7265C31.087 30.4796 30.2375 31.1345 29.2656 31.6107C28.7494 31.8818 28.1998 32.1164 27.6192 32.3059C23.2857 33.7212 18.85 32.1653 17.4201 28.8239C17.3061 28.5727 17.2095 28.3098 17.1335 28.0347C16.5241 25.8328 17.0414 23.1911 18.6584 21.5282C18.6585 21.528 18.6582 21.5273 18.6584 21.5273C18.758 21.4215 18.8598 21.2967 18.8598 21.1398C18.8598 21.0086 18.7764 20.8701 18.7041 20.7719C18.1383 19.9514 16.1787 18.5531 16.572 15.8472C16.8545 13.9031 18.5546 12.5341 20.1397 12.6152C20.2736 12.6222 20.4078 12.6303 20.5415 12.6382C21.2284 12.679 21.8276 12.7671 22.3931 12.7906C23.3395 12.8316 24.1906 12.6939 25.1986 11.8541C25.5386 11.5707 25.8112 11.3252 26.2725 11.247C26.321 11.2387 26.4416 11.1954 26.6827 11.2068C26.9287 11.2199 27.163 11.2875 27.3735 11.4276C28.1817 11.9654 28.2962 13.2677 28.3381 14.2205C28.362 14.7643 28.4279 16.0801 28.4502 16.4579C28.5017 17.3215 28.7287 17.4433 29.188 17.5945C29.4463 17.6797 29.6861 17.743 30.0395 17.8422C31.1092 18.1425 31.7435 18.4472 32.1431 18.8386C32.3816 19.0831 32.4925 19.3431 32.5268 19.5909C32.6528 20.5111 31.8123 21.6478 29.5872 22.6807C27.1549 23.8095 24.2041 24.0954 22.1653 23.8684C22.009 23.851 21.4529 23.788 21.451 23.7877C19.8201 23.5681 18.8899 25.6757 19.8686 27.1196C20.4995 28.0501 22.2176 28.6558 23.9367 28.6561C27.8783 28.6565 30.9078 26.9734 32.0347 25.5198C32.0685 25.4763 32.0718 25.4716 32.1249 25.3912C32.1803 25.3077 32.1347 25.2616 32.0656 25.3089C31.1448 25.9389 27.0552 28.4401 22.6808 27.6876C22.6808 27.6876 22.1493 27.6002 21.6641 27.4115C21.2785 27.2615 20.4715 26.8902 20.3734 26.0623C23.9036 27.154 26.1264 26.1219 26.1264 26.1219V26.1218ZM6.73637 17.7322C5.50864 17.971 4.42653 18.6668 3.76488 19.6279C3.36935 19.2981 2.63255 18.6595 2.50245 18.4107C1.44601 16.4049 3.65533 12.5048 5.19871 10.3023C9.01295 4.85925 14.9868 0.739281 17.7523 1.48684C18.2019 1.61408 19.6908 3.3404 19.6908 3.3404C19.6908 3.3404 16.9266 4.87423 14.363 7.01221C10.9088 9.6719 8.2995 13.5375 6.73637 17.7322ZM8.79942 26.937C8.61359 26.9687 8.42406 26.9814 8.23288 26.9767C6.38562 26.9272 4.39022 25.2641 4.19193 23.2919C3.97278 21.1119 5.08663 19.4342 7.05879 19.0364C7.29457 18.9889 7.57951 18.9615 7.88676 18.9775C8.99175 19.038 10.6201 19.8864 10.9921 22.2937C11.3216 24.4256 10.7983 26.5961 8.79942 26.937V26.937ZM33.8233 23.0768C33.8075 23.0209 33.7044 22.6441 33.5628 22.1901C33.4211 21.7358 33.2745 21.4162 33.2745 21.4162C33.8426 20.5656 33.8527 19.805 33.7772 19.374C33.6965 18.84 33.4742 18.3849 33.0261 17.9145C32.5779 17.4441 31.6614 16.9623 30.3733 16.6006C30.2261 16.5592 29.7403 16.4259 29.6976 16.413C29.6942 16.3851 29.662 14.8197 29.6328 14.1478C29.6114 13.662 29.5697 12.9036 29.3344 12.1566C29.054 11.1455 28.5653 10.2608 27.9555 9.69474C29.6385 7.95018 30.6892 6.02826 30.6867 4.37951C30.6818 1.20879 26.7878 0.24946 21.9891 2.23648C21.9841 2.23854 20.9797 2.66446 20.9724 2.66802C20.9678 2.66372 19.1343 0.864594 19.1067 0.84057C13.6355 -3.9316 -3.4707 15.0823 1.99847 19.7003L3.19371 20.7129C2.88368 21.516 2.76185 22.4362 2.86137 23.4258C2.9891 24.6967 3.64467 25.915 4.70726 26.8562C5.71596 27.75 7.04217 28.3156 8.32916 28.3145C10.4574 33.2191 15.3203 36.2279 21.0221 36.3972C27.1383 36.5789 32.2724 33.709 34.4238 28.5537C34.5645 28.1919 35.1617 26.5617 35.1617 25.1226C35.1617 23.6763 34.344 23.0768 33.8233 23.0768Z"-->
<!--                                        fill="currentColor"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
<!--                        <a class="flex items-center lg:justify-center" target="_blank">-->
<!--                            <svg class="h-6 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 124 21"-->
<!--                                 fill="currentColor"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M16.813 0.069519L12.5605 11.1781L8.28275 0.069519H0.96875V20.2025H6.23233V6.89245L11.4008 20.2025H13.7233L18.8634 6.89245V20.2025H24.127V0.069519H16.813Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M34.8015 16.461V15.1601C34.3138 14.4663 33.2105 14.1334 32.1756 14.1334C30.9504 14.1334 29.8174 14.679 29.8174 15.8245C29.8174 16.9699 30.9504 17.5155 32.1756 17.5155C33.2105 17.5155 34.3138 17.1533 34.8015 16.4595V16.461ZM34.8015 20.201V18.7519C33.8841 19.8358 32.1117 20.5633 30.213 20.5633C27.9484 20.5633 25.1367 19.0218 25.1367 15.7614C25.1367 12.2326 27.9469 11.0578 30.213 11.0578C32.1756 11.0578 33.9183 11.6885 34.8015 12.7767V11.3277C34.8015 10.0605 33.7042 9.18487 31.8039 9.18487C30.3349 9.18487 28.8658 9.75687 27.6748 10.7542L25.9322 7.52314C27.831 5.92447 30.3691 5.26007 32.6291 5.26007C36.1783 5.26007 39.5179 6.561 39.5179 11.0871V20.2025H34.8015V20.201Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M40.1562 18.3002L42.1145 14.9826C43.2178 15.9447 45.57 16.9421 47.3186 16.9421C48.7237 16.9421 49.3051 16.5461 49.3051 15.9154C49.3051 14.1055 40.7094 15.9741 40.7094 10.0605C40.7094 7.4938 42.9739 5.26007 47.0391 5.26007C49.5489 5.26007 51.6276 6.04474 53.22 7.1902L51.4194 10.4858C50.5303 9.6366 48.8471 8.88127 47.0747 8.88127C45.9715 8.88127 45.2384 9.30514 45.2384 9.8786C45.2384 11.4773 53.7999 9.81994 53.7999 15.7966C53.7999 18.5686 51.3257 20.5633 47.103 20.5633C44.4429 20.5633 41.7205 19.6862 40.1562 18.3002Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M64.7231 20.2025V11.7149C64.7231 9.94019 63.7759 9.36672 62.2712 9.36672C60.8958 9.36672 59.9784 10.1177 59.4313 10.7821V20.201H54.7148V0.069519H59.4313V7.40285C60.3145 6.37619 62.063 5.26152 64.5372 5.26152C67.9065 5.26152 69.4335 7.13299 69.4335 9.81992V20.2025H64.7231Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M80.0535 16.461V15.1601C79.5643 14.4663 78.4626 14.1334 77.4217 14.1334C76.1965 14.1334 75.0635 14.679 75.0635 15.8245C75.0635 16.9699 76.1965 17.5155 77.4217 17.5155C78.4626 17.5155 79.5643 17.1533 80.0535 16.4595V16.461ZM80.0535 20.201V18.7519C79.1346 19.8358 77.3578 20.5633 75.465 20.5633C73.199 20.5633 70.3828 19.0218 70.3828 15.7614C70.3828 12.2326 73.199 11.0578 75.465 11.0578C77.4217 11.0578 79.1644 11.6885 80.0535 12.7767V11.3277C80.0535 10.0605 78.9488 9.18487 77.056 9.18487C75.5869 9.18487 74.1164 9.75687 72.9209 10.7542L71.1783 7.52314C73.0771 5.92447 75.6152 5.26007 77.8812 5.26007C81.4289 5.26007 84.7625 6.561 84.7625 11.0871V20.2025H80.0535V20.201Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M93.8157 16.461C95.6802 16.461 97.0913 15.097 97.0913 12.897C97.0913 10.7263 95.6802 9.36232 93.8157 9.36232C92.8046 9.36232 91.5854 9.90645 90.9995 10.6911V15.1601C91.5854 15.9447 92.8061 16.461 93.8157 16.461ZM86.2891 20.201V0.069519H90.9995V7.34419C92.0485 6.01247 93.6688 5.2418 95.3784 5.26152C99.0778 5.26152 101.895 8.13032 101.895 12.897C101.895 17.847 99.0198 20.5633 95.3784 20.5633C93.7235 20.5633 92.2247 19.8989 90.9995 18.5114V20.2025H86.2891V20.201Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M102.844 0.069519H107.554V20.2025H102.844V0.069519Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                                <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                      d="M116.336 9.00154C114.284 9.00154 113.49 10.2101 113.303 11.2646H119.396C119.27 10.2379 118.508 9.00154 116.336 9.00154ZM108.5 12.897C108.5 8.67447 111.712 5.26007 116.336 5.26007C120.709 5.26007 123.892 8.42807 123.892 13.3781V14.4385H113.368C113.704 15.7335 114.929 16.8218 117.067 16.8218C118.108 16.8218 119.821 16.3686 120.681 15.5839L122.725 18.6317C121.26 19.9267 118.81 20.5633 116.55 20.5633C111.991 20.5633 108.5 17.6358 108.5 12.897Z"-->
<!--                                      fill="currentColor"></path>-->
<!--                            </svg>-->
<!--                        </a>-->
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </div>
</div>

<style>
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
</style>