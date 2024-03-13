<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onDestroy, onMount} from "svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import Terminal from "$lib/Landing/Terminal.svelte";
    import {goto} from "$app/navigation";

    let footerText;

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
                    <Terminal sectionName="FEAT" arrayOfEventNames="{['Event 1', 'Event 2', 'Event 3']}"
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
    <div class="h-[800dvh] w-full sticky top-0 bg-surface tech-events-trigger z-[2]">
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
                    <Terminal sectionName="TECH" arrayOfEventNames="{['Event 1', 'Event 2', 'Event 3']}"
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
                    featuring three flagship events that redefine the boundaries of technology and celebration!
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
                    <Terminal sectionName="ESPORTS" arrayOfEventNames="{['Event 1', 'Event 2', 'Event 3']}"
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
                    featuring three flagship events that redefine the boundaries of technology and celebration!
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
    <div class="h-[200vh] w-full bg-on-surface sticky top-0 z-[2] faq-trigger">
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
        <div class="h-screen w-full flex sticky top-0 flex-col items-center justify-center">

        </div>
        <div class="h-[40vh] w-full bg-surface sticky top-[100%]">
            <div class="h-full w-full absolute -top-[48px] items-center justify-center overflow-hidden">
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
            <div class="h-full w-full flex flex-col items-start justify-end px-5 pt-5 pb-2 overflow-hidden relative">
                <div class="style-font text-[7rem] min-[465px]:text-[9rem] min-[587px]:text-[11rem] sm:text-[12.5rem] md:text-[14.5rem] leading-[1em] text-on-surface text-center absolute w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                     bind:this={footerText} id="footer-text">
                    <div class="flex flex-row h-fit w-full items-center justify-between">
                        <p class="brand-font text-[2rem] leading-9 text-on-surface text-start">©2024</p>
                        <div class="flex flex-row w-f h-fit gap-2 z-[5]">
                            <div class="h-8 w-8 rounded-full instagram hover:-translate-x-1 hover:-translate-y-1 hover:scale-[1.05] loader-nothing"></div>
                            <div class="h-8 w-8 rounded-full bg-on-surface linkedin loader-nothing"></div>
                            <div class="h-8 w-8 rounded-full bg-on-surface youtube loader-nothing"></div>
                        </div>
                    </div>
                    <p class="glitch" data-glitch="SOLSTICE">
                        SOLSTICE
                    </p>
                </div>
            </div>
        </div>
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