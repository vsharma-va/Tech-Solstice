<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
    import {onMount} from "svelte";
    import eventBackground from "$lib/assets/images/example-event-background.webp";

    let isMobile;


    onMount(() => {
        isMobile = function () {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        let onLoadTimeline = gsap.timeline({});
        onLoadTimeline.to('.letter-down', {
            y: 0,
        });
        onLoadTimeline.to(window, {
            scrollTo: 100,
        });
        onLoadTimeline.to('.typewriter-1', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-2', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-3', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-4', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-5', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-6', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-7', {
            opacity: 1,
            duration: 0.25,
        })
        onLoadTimeline.to('.typewriter-8', {
            opacity: 1,
            duration: 0.25,
        })

        let eventsBannerTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main-events-trigger',
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
    });

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
</script>

<div class="h-fit w-full bg-surface main-events-trigger">
    <Navbar/>
    <div class="h-[800dvh] w-full flex flex-col gap-10">
        <div class="h-[90dvh] w-full flex flex-col items-center justify-center sticky top-0 intro-banner">
            <div class="h-fit w-full flex flex-col overflow-hidden">
                <div
                        class="pt-14 px-5 brand-font text-left h-fit w-full -translate-x-9 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                    <span class="letter-down -translate-y-[70px]">F</span>
                    <span class="letter-down -translate-y-[90px]">E</span>
                    <span class="letter-down -translate-y-[110px]">A</span>
                    <span class="letter-down -translate-y-[130px]">T</span>
                    <span class="letter-down -translate-y-[150px]">U</span>
                    <span class="letter-down -translate-y-[170px]">R</span>
                    <span class="letter-down -translate-y-[180px]">E</span>
                    <span class="letter-down -translate-y-[200px]">D</span>
                    <span class="letter-down -translate-y-[220px]">&nbsp;</span>

                </div>
                <div
                        class="px-5 brand-font text-right h-fit w-full translate-x-9 lg:translate-x-24 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                    <span class="letter-down -translate-y-[240px]">E</span>
                    <span class="letter-down -translate-y-[260px]">V</span>
                    <span class="letter-down -translate-y-[280px]">E</span>
                    <span class="letter-down -translate-y-[300px]">N</span>
                    <span class="letter-down -translate-y-[320px]">T</span>
                    <span class="letter-down -translate-y-[340px]">S</span>
                </div>
            </div>
            <div class="h-fit w-full flex flex-col items-center justify-center px-5 mt-24">
                <p class="brand-font text-3xl sm:text-4xl lg:text-5xl text-primary tracking-wide text-center">
                    <span class="typewriter-1 opacity-0">INNOVATE</span><span
                        class="typewriter-2 opacity-0">, CELEBRATE</span><span
                        class="typewriter-3 opacity-0">, ILLUMINATE : </span><span class="typewriter-4 opacity-0"> UNLEASH</span><span
                        class="typewriter-5 opacity-0">&nbsp;THE</span><span
                        class="typewriter-6 opacity-0">&nbsp;FUTURE</span><span
                        class="typewriter-7 opacity-0">&nbsp;AT</span><span class="typewriter-8 opacity-0">&nbsp;SOLSTICE</span>
                </p>
            </div>
        </div>
        <div class="h-fit w-full flex flex-col">
            <div class="h-[85dvh] w-full flex flex-row px-5 lg:px-36 flex-nowrap overflow-x-scroll overflow-y-visible gap-2 no-scrollbar relative event-carousel-1 lg:gap-10">
                <div class="w-full h-full sm:w-[75%] relative text-on-surface flex-shrink-0 image-div-event-1">
                    <img src="{eventBackground}" alt=""
                         class="h-full w-full object-cover inline-block display-image absolute top-0 bottom-0 z-0">
                    <div class="absolute bottom-2 left-2 h-fit w-[75%] flex flex-col items-start justify-center p-5 bg-surface gap-1">
                        <div class="brand-font text-4xl sm:text-5xl tracking-wide text-on-surface leading-[1] h-fit max-w-prose relative">
                            <p>EVENT NAME</p>
                            <div class="absolute bottom-0 h-[10px] w-full bg-primary/70"></div>
                        </div>
                        <p class="brand-font text-2xl lg:text-3xl tracking-wide text-on-surface/80">Tagline Here</p>
                    </div>
                </div>
                <div class="w-full h-full sm:w-[75%] border-[1.5px] border-on-surface relative text-on-surface flex-shrink-0 flex flex-col p-5 lg:p-10 gap-5 lg:gap-9 description-div-event-1 items-start justify-start backdrop-blur-lg">
                    <div class="w-full h-fit flex flex-col gap-2 lg:gap-4">
                        <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                            <p>Description</p>
                            <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                        </div>
                        <p class="regular-font text-sm sm:text-lg lg:text-xl sm:leading-[1.2] text-on-surface/80">Lorem
                            ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium aliquam animi assumenda aut dolorem eum exercitationem fugiat,
                            harum necessitatibus nisi, nobis non nostrum odit officiis quia quo recusandae unde vel?
                        </p>
                        <button class="px-4 py-1 bg-primary w-fit text-on-primary brand-font text-2xl sm:text-3xl flex flex-row">
                            Handbook
                        </button>
                    </div>
                    <div class="w-full h-fit flex flex-col gap-2 lg:gap-4">
                        <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                            <p>Prize Pool</p>
                            <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                        </div>
                        <div class="flex flex-row w-full h-fit items-center justify-around">
                            <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                                <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl  text-on-surface/80">₹1000</p>
                            </div>
                            <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                                <div class="h-3 w-3 rounded-full bg-gray-300"></div>
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl text-on-surface/80">₹1000</p>
                            </div>
                            <div class="h-fit w-fit flex flex-row items-center justify-center gap-2">
                                <div class="h-3 w-3 rounded-full bg-yellow-950"></div>
                                <p class="brand-font text-2xl sm:text-3xl lg:text-4xl text-on-surface/80">₹1000</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-fit flex flex-col gap-3 lg:gap-4">
                        <div class="brand-font text-4xl sm:text-5xl lg:text-6xl text-on-surface h-fit w-fit relative">
                            <p>Included With</p>
                            <div class="absolute bottom-0 w-full bg-primary/70 h-[10px]"></div>
                        </div>
                        <div class="w-full h-fit flex flex-row">
                            <div class="w-fit h-fit bg-on-surface sm:text-2xl flex flex-row px-3 py-1">
                                <p class="brand-font text-2xl lg:text-4xl text-surface">Flagship</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute hidden sm:flex bottom-2 w-fit h-fit left-1/2 -translate-x-1/2 flex-row items-center justify-center gap-2 bg-surface border-[1px] border-on-surface p-2">
                <button class="h-3 w-3 rounded-full bg-primary on-left-indicator"
                        on:mousedown={() => moveCarouselLeft("event-carousel-1", "image-div-event-1")}
                ></button>
                <button class="h-3 w-3 rounded-full bg-primary opacity-[0.2] on-right-indicator"
                        on:mousedown={() => moveCarouselRight("event-carousel-1", "description-div-event-1")}
                ></button>
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
</style>