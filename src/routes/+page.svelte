
<!--original design-->
<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onDestroy, onMount} from "svelte";



    let topologyHomeEffect;

    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";

    onMount(() => {
        topologyHomeEffect = VANTA.TOPOLOGY({
            el: ".topology-animation-home",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: primaryContainer,
            backgroundColor: "transparent",
            p5
        });
    //
        gsap.registerPlugin(ScrollTrigger);

        let waitTimeline = gsap.timeline({
            onComplete: () => {
                topologyHomeEffect.setOptions({
                    color: onPrimaryContainer,
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
            duration: 10,
        })

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to('.in-left', {
            width: "100%",
            delay: 1,
            duration: 2,
        });
        onLoadTimeline.to('.tagline-div', {
            opacity: 1,
        });
        onLoadTimeline.to('.minus-blur', {
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
        // onLoadTimeline.to('.make-italic', {
        //     skewX: -7,
        //     duration: 1,
        // });
        // onLoadTimeline.to('.left-of-make-italic', {
        //     x: -10,
        //     duration: 1
        // }, "<");

        let oneLinerChangeTimeline = gsap.timeline({
            onComplete: () => {
                oneLinerChangeTimeline.reverse()
            }, onReverseComplete: () => {
                oneLinerChangeTimeline.play(0)
            }
        });
        oneLinerChangeTimeline.to('.one-liner-1', {
            top: "-80%",
            opacity: 0,
            delay: 4,
        });
        oneLinerChangeTimeline.to('.one-liner-2', {
            top: 0,
            opacity: 1,
        }, "<");
        oneLinerChangeTimeline.to('.one-liner-2', {
            top: "-80%",
            opacity: 0,
        }, "<4");
        oneLinerChangeTimeline.to('.one-liner-3', {
            top: 0,
            opacity: 1,
        }, "<");
        oneLinerChangeTimeline.to('.one-liner-3', {
            top: "-80%",
            opacity: 0,
        }, "<4");

        let scrollAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '.basic-scroll-animation',
                start: 'top top',
                end: '50% top',
                scrub: true,
                markers: true,
            }
        })
        scrollAnimation.to('.first-container', {
            scale: 0.88,
            y: 200,
            opacity: 0,
        })
        scrollAnimation.to('.second-container', {
            scale: 1,
        }, "<");
    })

    onDestroy(() => {
        if (topologyHomeEffect) {
            topologyHomeEffect.destroy();
        }
    });

</script>

<!--<div class="h-screen w-full bg-gradient-to-b from-primary-container from-70% to-surface topology-animation-home">-->

<!--</div>-->

<!--ORIGINAL DESIGN-->
<div class="h-[200vh] w-full bg-surface relative basic-scroll-animation overflow-y-clip">
    <div class="h-screen w-full sticky top-0 flex flex-col items-start justify-end bg-gradient-to-b from-primary-container from-70% to-surface first-container rounded-2xl">
        <div class="w-full h-screen flex flex-col topology-animation-home absolute top-0">
            <button class="w-32 h-32 rounded-full bg-surface z-[2] absolute top-[12%] right-32"></button>
            <div class="w-0 h-[5%] in-left absolute top-[2%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[9%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[16%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[23%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[30%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[37%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <div class="w-0 h-[5%] in-left absolute top-[44%] z-[1] bg-gradient-to-l from-primary-container from-70% to-on-surface"></div>
            <!--                        <div class="w-full h-full absolute top-0 bg-gradient-to-b from-primary-container from-70% to-surface"></div>-->
        </div>

        <!--        <div class="w-[38%] h-[250px] absolute top-[13%] right-5">-->
        <!--            <div class="absolute top-0 right-0 h-full w-full border-2 border-primary rounded-2xl rotate-[9deg] flex flex-col items-start justify-center">-->
        <!--                -->
        <!--            </div>-->
        <!--            <div class="absolute top-0 right-0 h-full w-full border-2 border-primary rounded-2xl rotate-[6deg]"></div>-->
        <!--            <div class="absolute top-0 right-0 h-full w-full border-2 border-primary rounded-2xl rotate-[3deg]"></div>-->
        <!--            <div class="absolute top-0 right-0 h-full w-full border-2 border-primary rounded-2xl"></div>-->
        <!--        </div>-->
        <!--        <div class="w-full h-[5%] absolute top-[51%] z-[0] bg-gradient-to-l to-primary-container from-10% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[58%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[65%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[72%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[79%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[86%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <!--        <div class="w-full h-[5%] absolute top-[93%] z-[0] bg-gradient-to-l to-primary-container from-30% from-surface"></div>-->
        <div class="w-full h-full flex flex-col items-start justify-end px-6">
            <p class="heading-font font-[200] text-[1.6em] italic text-primary leading-[0.9em] mb-28 z-[2] blur-sm opacity-0 tagline-div minus-blur">
                OUR AMAZING
                YET<br>UNDECIDED TAGLINE HERE</p>
            <div class="flex flex-row w-full h-fit items-center">
                <div class="heading-font w-fit h-fit flex flex-row text-[16vw] font-[900] text-primary leading-[12.5vw] z-[2] overflow-y-clip blur-sm minus-blur">
                    <span class="translate-y-14 opacity-0 letter-up-1 left-of-make-italic">T</span><span
                        class="translate-y-[70px] opacity-0 letter-up-2 make-italic">E</span><span
                        class="translate-y-[90px] opacity-0 letter-up-3">C</span><span
                        class="translate-y-[110px] opacity-0 letter-up-4">H</span>
                </div>
                <div class="flex flex-col w-full h-[5.5vw] ml-16 overflow-hidden relative z-[2] blur-sm minus-blur">
                    <p class="style-font text-[5.5vw] font-[300] text-primary absolute top-0 one-liner-1 opacity-0 letter-up-1">
                        Innovation</p>
                    <p class="style-font text-[5.5vw] font-[300] text-primary absolute top-[100%] one-liner-2 opacity-0">
                        Fusion</p>
                    <p class="style-font text-[5.5vw] font-[300] text-primary absolute top-[100%] one-liner-3">
                        Celebrate</p>
                </div>
            </div>
            <div class="heading-font w-fit h-fit flex flex-row text-[16vw] font-[900] text-primary leading-[12.5vw] z-[2] blur-sm minus-blur">
                <span class="translate-y-14 opacity-0 letter-up-1">S</span>
                <span
                        class="translate-y-[70px] opacity-0 letter-up-2 left-of-make-italic">O</span><span
                    class="translate-y-[90px] opacity-0 letter-up-3 make-italic">L</span><span
                    class="translate-y-[110px] opacity-0 letter-up-4">S</span>
                <span class="translate-y-[130px] opacity-0 letter-up-1">T</span>
                <span class="translate-y-[150px] opacity-0 letter-up-1 left-of-make-italic">I</span>
                <span class="translate-y-[170px] opacity-0 letter-up-1 make-italic">C</span>
                <span class="translate-y-[190px] opacity-0 letter-up-1">E</span>
            </div>
        </div>

    </div>
    <div class="h-screen w-full sticky top-0 bg-surface scale-[88%] rounded-2xl second-container border-2 border-primary"></div>
</div>