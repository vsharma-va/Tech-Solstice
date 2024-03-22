<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";

    let footerText;
    onMount(() => {
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
    })

</script>

<div class="h-[40vh] w-full bg-surface sticky top-[100%] z-[870]">
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
            <p class="brand-font text-3xl text-primary tracking-wide">Code Available On <a
                    href="https://github.com/vsharma-va/Tech-Solstice"
                    class="relative h-fit w-fit group bg-primary text-on-primary px-2 py-1" target="_blank">Github
            </a></p>
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