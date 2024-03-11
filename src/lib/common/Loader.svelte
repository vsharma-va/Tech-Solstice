<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";
    import {afterNavigate, beforeNavigate} from "$app/navigation";
    import {navigating} from "$app/stores";

    let loaderTimeline;

    onMount(() => {
        loaderTimeline = gsap.timeline();
        loaderTimeline.to('.unblur', {
            backdropFilter: "blur(0)",
            duration: 1,
        });
        loaderTimeline.to('.unblur', {
            scale: 600,
            duration: 1,
            delay: 1,
            opacity: 0,
        })
        loaderTimeline.to('.curtain', {
            yPercent: -100,
        })
        loaderTimeline.to('.curtain', {
            display: "none",
        })
        loaderTimeline.pause(0);
    })

    afterNavigate(() => {
        loaderTimeline.play(0);
    });
</script>
<div class="h-screen w-full fixed top-0 z-10 bg-surface flex flex-col items-center justify-center p-8 overflow-hidden curtain">
    <div class="absolute top-[53%] left-1/2 -translate-x-1/2 text-9xl md:text-[10rem] xl:text-[13rem] text-white text-center style-font -translate-y-1/2 flex flex-row items-center justify-center h-full w-full unblur">
        <p class="glitch" data-glitch="Nexus">Nexus</p>
    </div>
    <div class="h-[200px] w-full sm:h-[250px] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:h-[300px] 2xl:w-[30%] bg-transparent backdrop-blur-lg border-2 border-primary unblur">
        <div class="h-[20%] border-b-2 border-primary w-full flex flex-row px-5 justify-between items-center">
            <p class="brand-font text-2xl sm:text-3xl text-on-primary-container tracking-wide w-1/2">Solstice 1.0.1</p>
            <div class="flex flex-row h-full w-full items-center justify-end gap-2">
                <div class="h-3 w-3 rounded-full bg-success"></div>
                <div class="h-3 w-3 rounded-full bg-[#fef836]"></div>
                <div class="h-3 w-3 rounded-full bg-error"></div>
            </div>
        </div>
        <div class="h-[80%] w-full flex flex-col items-center justify-center">
            <p class="brand-font text-on-primary-container tracking-wider text-5xl"></p>
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