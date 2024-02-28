<script>
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { onDestroy, onMount } from "svelte";

    let topologyHomeEffect;
    let primary = "#e1b6ff";
    let primaryContainer = "#490f72";
    let onPrimaryContainer = "#612c8a";
    let surface = "#1d1b1e";
    let onSurface = "#e7e1e5";
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
        topologyHomeEffect = VANTA.TOPOLOGY({
            el: ".topology-animation-home",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 210.0,
            color: primaryContainer,
            backgroundColor: "transparent",
            p5,
        });

        gsap.registerPlugin(ScrollTrigger);

        if (ScrollTrigger.isTouch === 1) {
            console.debug("TOUCH DEVICE FOUND");
            let destroyTopologyTimeline = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: ".featured-events-trigger",
                        start: "top top",
                        end: "top -10%",
                        scrub: true,
                        markers: true,
                    },
                },
            );
            destroyTopologyTimeline.to('.featured-events-trigger', {
                onComplete: () => {
                    console.debug("Topology Destoryed");
                    topologyHomeEffect.destroy();
                },
                onReverseComplete: () => {
                    console.debug("Topology Restored"),
                    topologyHomeEffect = VANTA.TOPOLOGY({
                        el: ".topology-animation-home",
                        mouseControls: false,
                        touchControls: false,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 210.0,
                        color: primaryContainer,
                        backgroundColor: "transparent",
                        p5,
                    });
                }
            })
        }

        let waitTimeline = gsap.timeline({
            onComplete: () => {
                topologyHomeEffect.setOptions({
                    color: primary,
                });
                waitTimeline.reverse();
            },
            onReverseComplete: () => {
                topologyHomeEffect.setOptions({
                    color: primaryContainer,
                });
            },
        });
        waitTimeline.to("#body", {
            duration: 10,
        });

        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to(".load-background", {
            backgroundColor: onSurface,
            delay: 1,
            duration: 1,
        });
        onLoadTimeline.to(".main-text", {
            display: "flex",
            scale: 1,
            opacity: 1,
        });
        onLoadTimeline.to(".main-text-1", {
            display: "flex",
            opacity: 1,
            scale: 1,
        });
        onLoadTimeline.to(
            ".main-text",
            {
                fontSize: "125px",
                duration: 0,
            },
            "<",
        );
        onLoadTimeline.to(".main-text-2", {
            display: "flex",
            opacity: 1,
            scale: 1,
        });
        onLoadTimeline.to(
            ".main-text",
            {
                fontSize: "66px",
                duration: 0,
            },
            "<",
        );
        onLoadTimeline.to(
            ".main-text-1",
            {
                fontSize: "125px",
                duration: 0,
            },
            "<",
        );
        onLoadTimeline.to(".bar-reveal", {
            height: "100%",
        });
        onLoadTimeline.to(".minus-blur", {
            display: "flex",
            filter: "blur(0)",
        });
        onLoadTimeline.to(
            ".letter-up-1",
            {
                y: 0,
                opacity: 1,
            },
            "<",
        );
        onLoadTimeline.to(
            ".letter-up-2",
            {
                y: 0,
                opacity: 1,
            },
            "<",
        );
        onLoadTimeline.to(
            ".letter-up-3",
            {
                y: 0,
                opacity: 1,
            },
            "<",
        );
        onLoadTimeline.to(
            ".letter-up-4",
            {
                y: 0,
                opacity: 1,
            },
            "<",
        );
        onLoadTimeline.to(".load-background", {
            display: "none",
        });

        let scrollAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: ".basic-scroll-animation",
                start: "top top",
                end: "50% top",
                scrub: true,
                markers: false,
            },
        });
        scrollAnimation.to(".first-division-container", {
            scale: 0.85,
        });

        let featuredEventsHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".featured-events-trigger",
                start: "top top",
                end: "top -25%",
                scrub: true,
                markers: false,
            },
        });
        featuredEventsHeadingTimeline.to(".letter-down", {
            y: 0,
        });
        featuredEventsHeadingTimeline.to(
            ".featured-events-tagline-div",
            {
                opacity: 1,
            },
            "<",
        );

        let featuredEventsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".featured-events-trigger",
                start: "top top",
                end: "top -200%",
                scrub: true,
                markers: false,
            },
        });
        featuredEventsTimeline.to(".laptop-card-solstice", {
            display: "flex",
        });
        featuredEventsTimeline.to(".rotate-d-3", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-3deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        featuredEventsTimeline.to(
            ".rotate-d-3-reveal",
            {
                rotate: "-6deg",
                opacity: 1,
            },
            ">",
        );
        featuredEventsTimeline.to(
            ".featured-events-initial",
            {
                top: 0,
                left: 0,
                scale: 0.7,
                transform: "none",
            },
            "<",
        );
        featuredEventsTimeline.to(
            ".featured-events-d-3",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        featuredEventsTimeline.to(".rotate-d-6", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        featuredEventsTimeline.to(
            ".rotate-d-6-reveal",
            {
                rotate: "-12deg",
                opacity: 1,
            },
            ">",
        );
        featuredEventsTimeline.to(
            ".featured-events-d-6",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        featuredEventsTimeline.to(".rotate-d-9", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        featuredEventsTimeline.to(
            ".rotate-d-9-reveal",
            {
                rotate: "-18deg",
                opacity: 1,
            },
            ">",
        );
        featuredEventsTimeline.to(
            ".featured-events-d-9",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        featuredEventsTimeline.to(".laptop-card-solstice", {
            bottom: 5,
        });
        featuredEventsTimeline.to(".convert-to-laptop-card", {
            right: 12,
            bottom: 50,
            scale: 0.5,
            opacity: 0,
            transform: "none",
        });
        featuredEventsTimeline.to(
            ".letter-down",
            {
                opacity: 0,
            },
            "<",
        );
        featuredEventsTimeline.to(
            ".featured-events-tagline-div",
            {
                opacity: 0,
            },
            "<",
        );
        featuredEventsTimeline.to(
            ".featured-events-card-on-laptop",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        featuredEventsTimeline.to(".laptop-card-solstice", {
            bottom: "-100%",
        });

        let techEventsHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-events-trigger",
                start: "top top",
                end: "top -25%",
                scrub: true,
                markers: false,
            },
        });
        techEventsHeadingTimeline.to(".tech-letter-down", {
            y: 0,
        });
        techEventsHeadingTimeline.to(
            ".tech-events-tagline-div",
            {
                opacity: 1,
            },
            "<",
        );

        let techEventImmediate = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-events-trigger",
                start: "top top",
                end: "top -15%",
                scrub: true,
                markers: false,
            },
        });
        techEventImmediate.to(".laptop-card-solstice", {
            backgroundColor: onSurface,
        });
        techEventImmediate.to(
            ".laptop-solstice-heading",
            {
                color: surface,
            },
            "<",
        );

        let techEventsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-events-trigger",
                start: "top top",
                end: "top -200%",
                scrub: true,
                markers: false,
            },
        });
        techEventsTimeline.to(".tech-rotate-d-3", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-3deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        techEventsTimeline.to(
            ".tech-rotate-d-3-reveal",
            {
                rotate: "-6deg",
                opacity: 1,
            },
            ">",
        );
        techEventsTimeline.to(
            ".tech-events-initial",
            {
                top: 0,
                left: 0,
                scale: 0.7,
                transform: "none",
            },
            "<",
        );
        techEventsTimeline.to(
            ".tech-events-d-3",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        techEventsTimeline.to(".tech-rotate-d-6", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        techEventsTimeline.to(
            ".tech-rotate-d-6-reveal",
            {
                rotate: "-12deg",
                opacity: 1,
            },
            ">",
        );
        techEventsTimeline.to(
            ".tech-events-d-6",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        techEventsTimeline.to(".tech-rotate-d-9", {
            top: "49%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            rotate: "-6deg",
            height: 200,
            opacity: 0,
            // width: "25%",
        });
        techEventsTimeline.to(
            ".tech-rotate-d-9-reveal",
            {
                rotate: "-18deg",
                opacity: 1,
            },
            ">",
        );
        techEventsTimeline.to(
            ".tech-events-d-9",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        techEventsTimeline.to(".laptop-card-solstice", {
            bottom: 5,
        });
        techEventsTimeline.to(".tech-convert-to-laptop-card", {
            right: 12,
            bottom: 50,
            scale: 0.5,
            opacity: 0,
            transform: "none",
        });
        techEventsTimeline.to(
            ".tech-letter-down",
            {
                opacity: 0,
            },
            "<",
        );
        techEventsTimeline.to(
            ".tech-events-tagline-div",
            {
                opacity: 0,
            },
            "<",
        );
        techEventsTimeline.to(
            ".tech-events-card-on-laptop",
            {
                display: "flex",
                opacity: 1,
            },
            "<",
        );
        techEventsTimeline.to(".laptop-card-solstice", {
            bottom: "-100%",
        });
    });

    onDestroy(() => {
        if (topologyHomeEffect) {
            topologyHomeEffect.destroy();
        }
    });
</script>

<div
    class="h-screen w-full bg-primary flex flex-col items-center justify-center load-background"
>
    <p
        class="brand-font font-bold text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container tracking-wide main-text leading-[0.78]"
    >
        Welcome
    </p>
    <p
        class="brand-font font-bold text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container tracking-wide main-text-1 leading-[0.98]"
    >
        To
    </p>
    <p
        class="brand-font text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] scale-[1.4] hidden text-primary-container main-text-2 tracking-wide leading-[0.78]"
    >
        Solstice
    </p>
</div>
<div class="h-fit w-full absolute top-0 basic-scroll-animation">
    <div class="h-screen w-full sticky top-0 first-division-container">
        <div class="h-full w-full z-2 grid grid-cols-3 absolute top-0">
            <div
                class="h-full w-full topology-animation-home absolute z-1 top-0"
            ></div>
            <div class="col-start-1 bg-surface h-0 w-full bar-reveal"></div>
            <div
                class="col-start-2 bg-surface h-0 w-full bar-reveal self-end"
            ></div>
            <div class="col-start-3 bg-surface h-0 w-full bar-reveal"></div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    class="h-fit w-full brand-font text-[140px] sm:text-[160px] md:text-[195px] lg:text-[210px] xl:text-[233px] tracking-wide hidden text-primary-container minus-blur overflow-y-clip flex-row items-center justify-start"
                >
                    <span
                        class="translate-y-14 opacity-0 letter-up-1 left-of-make-italic leading-[0.88]"
                        >T</span
                    ><span
                        class="translate-y-[70px] opacity-0 letter-up-2 make-italic leading-[0.88]"
                        >E</span
                    ><span
                        class="translate-y-[90px] opacity-0 letter-up-3 leading-[0.88]"
                        >C</span
                    ><span
                        class="translate-y-[110px] opacity-0 letter-up-4 leading-[0.88]"
                        >H</span
                    >
                    <div
                        class="flex flex-col w-full h-[40px] sm:h-[50px] md:h-[60px] ml-2 overflow-hidden relative z-[2] blur-sm minus-blur"
                    >
                        <p
                            class="style-font text-[40px] sm:text-[50px] md:text-[60px] font-[300] text-primary absolute top-0"
                        >
                            Nirvana
                        </p>
                    </div>
                </div>
                <div
                    class="h-fit w-full brand-font text-[155px] sm:text-[175px] md:text-[210px] lg:text-[210px] xl:text-[275px] tracking-wide hidden text-primary minus-blur overflow-y-clip flex-row items-center justify-center"
                >
                    <span
                        class="translate-y-14 opacity-0 letter-up-1 leading-[0.88]"
                        >S</span
                    >
                    <span
                        class="translate-y-[70px] opacity-0 letter-up-2 left-of-make-italic leading-[0.88]"
                        >O</span
                    ><span
                        class="translate-y-[90px] opacity-0 letter-up-3 make-italic leading-[0.88]"
                        >L</span
                    ><span
                        class="translate-y-[110px] opacity-0 letter-up-4 leading-[0.88]"
                        >S</span
                    >
                    <span
                        class="translate-y-[130px] opacity-0 letter-up-1 leading-[0.88]"
                        >T</span
                    >
                    <span
                        class="translate-y-[150px] opacity-0 letter-up-1 left-of-make-italic leading-[0.88]"
                        >I</span
                    >
                    <span
                        class="translate-y-[170px] opacity-0 letter-up-1 make-italic leading-[0.88]"
                        >C</span
                    >
                    <span
                        class="translate-y-[190px] opacity-0 letter-up-1 leading-[0.88]"
                        >E</span
                    >
                </div>
            </div>
            <svg
                version="1.1"
                id="Group_1"
                xmlns="http://www.w3.org/2000/svg"
                class="h-32 w-32 fill-primary-container col-start-3 absolute right-5 top-5"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 287.54 354.05"
                style=""
                xml:space="preserve"
            >
                <g>
                    <path
                        class="st0"
                        d="M239.18,185.7c-44.05-23-98.34-5.89-121.29,38.2c-10.2,19.61-12.47,41.22-8.02,61.2
		        c0.7-5.89,2.41-11.73,5.29-17.34c12.7-24.39,42.75-33.85,67.13-21.14c24.39,12.7,33.84,42.79,21.14,67.18
		        c-11.22,21.51-33.29,33.52-62.82,28.88c51.6,24.25,113.78,8.48,136.73-35.61c22.95-44.09,5.89-98.43-38.16-121.43V185.7z"
                    ></path>
                    <path
                        class="st0"
                        d="M179.04,161.5c38.16-10.62,49.98-33.84,52.02-56.93c3.43-38.81-28.37-64.54-56.24-67.37
		        C87.71,28.29,36.34,110.36,38.89,181.8c1.58,44.74,15.39,88.55,58.7,132.6c-9.83-19.06-27.31-132.88,81.51-152.95L179.04,161.5z"
                    ></path>
                </g>
            </svg>
        </div>
    </div>
    <div class="h-fit w-full">
        <div class="h-screen w-full bg-transparent fixed top-0 z-[3]">
            <div class="h-full w-full sticky top-0">
                <div
                    class="h-[350px] xl:w-[450px] w-[95%] sm:w-[80%] md:w-[65%] lg:w-[45%] absolute right-1/2 translate-x-1/2 lg:right-3 xl:right-3 lg:translate-x-0 -bottom-[100%] xl:-bottom-[100%] rounded-2xl bg-surface flex flex-col items-center justify-start p-5 laptop-card-solstice hidden"
                >
                    <p
                        class="brand-font text-4xl tracking-wide font-bold text-on-surface laptop-solstice-heading"
                    >
                        Solstice
                    </p>
                    <div
                        class="h-full w-full grid grid-cols-2 grid-rows-2 pt-5 gap-5"
                    >
                        <div
                            class="h-full w-full col-start-1 row-start-1 rounded-2xl relative featured-events-card-on-laptop hidden opacity-0"
                        >
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-2xl -rotate-[9deg] z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary rounded-2xl -rotate-6 z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface rounded-2xl -rotate-3 z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container rounded-2xl flex flex-col items-center justify-center"
                            >
                                <p
                                    class="style-font text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial"
                                >
                                    Nirvana
                                </p>
                                <p
                                    class="brand-font text-xl mt-2 sm:mt-0 text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0"
                                >
                                    Event 1
                                </p>
                                <p
                                    class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0"
                                >
                                    Event 2
                                </p>
                                <p
                                    class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0"
                                >
                                    Event 3
                                </p>
                            </div>
                        </div>
                        <div
                            class="h-full w-full col-start-2 row-start-1 rounded-2xl relative tech-events-card-on-laptop hidden opacity-0"
                        >
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-2xl -rotate-[9deg] z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary rounded-2xl -rotate-6 z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary-container rounded-2xl -rotate-3 z-[0]"
                            ></div>
                            <div
                                class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container rounded-2xl flex flex-col items-center justify-center"
                            >
                                <p
                                    class="style-font text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial"
                                >
                                    Nirvana
                                </p>
                                <p
                                    class="brand-font text-xl mt-2 sm:mt-0 text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0"
                                >
                                    Event 1
                                </p>
                                <p
                                    class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0"
                                >
                                    Event 2
                                </p>
                                <p
                                    class="brand-font text-xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0"
                                >
                                    Event 3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="h-[300vh] w-full sticky top-0 bg-on-surface featured-events-trigger"
    >
        <div
            class="h-screen w-full flex sticky top-0 items-center justify-center featured-events-main-container"
        >
            <div
                class="lg:h-[250px] h-[200px] sm:h-[225px] xl:h-[250px] w-[85%] sm:w-[45%] lg:w-[35%] xl:w-[30%] bg-primary-container rounded-2xl flex flex-col justify-center items-center z-[2] absolute convert-to-laptop-card"
            >
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-2xl rotate-d-9-reveal opacity-0"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary rounded-2xl rotate-d-6-reveal opacity-0"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface rounded-2xl rotate-d-3-reveal"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container rounded-2xl flex flex-col items-center justify-center"
                >
                    <p
                        class="style-font text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide featured-events-initial"
                    >
                        Nirvana
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-3 opacity-0"
                    >
                        Event 1
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-6 opacity-0"
                    >
                        Event 2
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden featured-events-d-9 opacity-0"
                    >
                        Event 3
                    </p>
                </div>
            </div>

            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] h-[70px] w-[70%] sm:w-[37%] bg-primary/90 rounded-2xl absolute bottom-24 sm:bottom-30 left-2 xl:left-14 flex flex-col items-start justify-center px-5 rotate-d-9"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-on-primary tracking-wide"
                >
                    Event Name
                </p>
                <p class="regular-font text-sm text-on-primary tracking-wide">
                    Event Description Here
                </p>
            </div>
            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[37%] bg-on-primary/90 rounded-2xl absolute top-32 xl:top-28 xl:right-14 right-2 lg:right-5 flex flex-col items-start justify-center px-5 rotate-d-6"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-primary tracking-wide"
                >
                    Event Name
                </p>
                <p class="regular-font text-sm text-primary tracking-wide">
                    Event Description Here
                </p>
            </div>
            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[40%] bg-surface/90 rounded-2xl absolute top-10 left-2 lg:left-9 xl:bottom-32 xl:right-24 flex flex-col items-start justify-center px-5 rotate-d-3"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-on-surface tracking-wide"
                >
                    Event Name
                </p>
                <p class="regular-font text-sm text-on-surface tracking-wide">
                    Event Description Here
                </p>
            </div>
            <div
                class="h-full w-full flex flex-col absolute top-0 items-center justify-end"
            >
                <div
                    class="brand-font h-fit w-full font-bold flex flex-row items-end justify-center text-6xl sm:text-7xl lg:text-8xl text-surface overflow-y-clip"
                >
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
                <div
                    class="regular-font text-center font-thin h-fit w-full tracking-wide flex flex-col text-surface capitalize items-center justify-center pb-2 sm:pb-4 lg:pb-9 text-sm opacity-0 featured-events-tagline-div"
                >
                    featuring three flagship events that redefine the boundaries
                    of technology and celebration!
                </div>
            </div>
        </div>
    </div>
    <div
        class="h-[300vh] w-full sticky top-0 bg-surface tech-events-trigger z-[2]"
    >
        <div
            class="h-screen w-full flex sticky top-0 items-center justify-center"
        >
            <div
                class="lg:h-[250px] h-[200px] sm:h-[225px] xl:h-[250px] w-[85%] sm:w-[45%] lg:w-[35%] xl:w-[30%] bg-primary-container rounded-2xl flex flex-col justify-center items-center z-[2] absolute tech-convert-to-laptop-card"
            >
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-2xl tech-rotate-d-9-reveal opacity-0"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary rounded-2xl tech-rotate-d-6-reveal opacity-0"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-primary-container rounded-2xl tech-rotate-d-3-reveal"
                ></div>
                <div
                    class="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container rounded-2xl flex flex-col items-center justify-center"
                >
                    <p
                        class="style-font text-5xl lg:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-primary-container tracking-wide tech-events-initial"
                    >
                        Nirvana
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-3 opacity-0"
                    >
                        Event 1
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-6 opacity-0"
                    >
                        Event 2
                    </p>
                    <p
                        class="brand-font text-4xl lg:text-5xl text-on-primary-container tracking-wide hidden tech-events-d-9 opacity-0"
                    >
                        Event 3
                    </p>
                </div>
            </div>
            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] h-[70px] w-[70%] sm:w-[37%] bg-primary/90 rounded-2xl absolute bottom-24 sm:bottom-30 left-2 xl:left-14 flex flex-col items-start justify-center px-5 tech-rotate-d-9"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-on-primary tracking-wide"
                >
                    Event Name
                </p>
                <p class="regular-font text-sm text-on-primary tracking-wide">
                    Event Description Here
                </p>
            </div>
            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[37%] bg-on-primary/90 rounded-2xl absolute top-32 xl:top-28 xl:right-14 right-2 lg:right-5 flex flex-col items-start justify-center px-5 tech-rotate-d-6"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-primary tracking-wide"
                >
                    Event Name
                </p>
                <p class="regular-font text-sm text-primary tracking-wide">
                    Event Description Here
                </p>
            </div>
            <div
                class="lg:w-[30%] xl:w-[25%] xl:h-[85px] w-[70%] h-[70px] sm:w-[40%] bg-on-primary-container rounded-2xl absolute top-10 left-2 lg:left-9 xl:bottom-32 xl:right-24 flex flex-col items-start justify-center px-5 tech-rotate-d-3"
            >
                <p
                    class="brand-font text-2xl lg:text-3xl text-primary-container tracking-wide"
                >
                    Event Name
                </p>
                <p
                    class="regular-font text-sm text-primary-container tracking-wide"
                >
                    Event Description Here
                </p>
            </div>
            <div
                class="h-full w-full flex flex-col absolute top-0 items-center justify-end"
            >
                <div
                    class="brand-font h-fit w-full font-bold flex flex-row items-end justify-center text-6xl sm:text-7xl lg:text-8xl text-on-surface overflow-y-clip"
                >
                    <span class="tech-letter-down -translate-y-[70px]">T</span>
                    <span class="tech-letter-down -translate-y-[90px]">E</span>
                    <span class="tech-letter-down -translate-y-[110px]">C</span>
                    <span class="tech-letter-down -translate-y-[130px]">H</span>
                    <span class="tech-letter-down -translate-y-[150px]">N</span>
                    <span class="tech-letter-down -translate-y-[170px]">I</span>
                    <span class="tech-letter-down -translate-y-[180px]">C</span>
                    <span class="tech-letter-down -translate-y-[200px]">A</span>
                    <span class="tech-letter-down -translate-y-[220px]">L</span>
                    <span class="tech-letter-down -translate-y-[240px]"
                        >&nbsp;</span
                    >
                    <span class="tech-letter-down -translate-y-[260px]">E</span>
                    <span class="tech-letter-down -translate-y-[280px]">V</span>
                    <span class="tech-letter-down -translate-y-[300px]">E</span>
                    <span class="tech-letter-down -translate-y-[320px]">N</span>
                    <span class="tech-letter-down -translate-y-[340px]">T</span>
                    <span class="tech-letter-down -translate-y-[360px]">S</span>
                </div>
                <div
                    class="regular-font text-center font-thin h-fit w-full tracking-wide flex flex-col text-on-surface capitalize items-center justify-center pb-2 sm:pb-4 lg:pb-9 text-sm opacity-0 tech-events-tagline-div"
                >
                    featuring three flagship events that redefine the boundaries
                    of technology and celebration!
                </div>
            </div>
        </div>
    </div>
</div>
