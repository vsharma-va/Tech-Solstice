<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
    import {onMount} from "svelte";
    import EventCard from "$lib/Events/EventCard.svelte";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {browser} from "$app/environment";
    import {beforeFormSubmissionPositionEvents} from "../../store.js";
    import {goto} from "$app/navigation";

    export let data;

    let isMobile;
    let contentStrapiUrl = "https://content.mitblrfest.in"
    let strapiKey = "298b35a62cad6355f0bfa06ffd7ae42c739c87fe0e3bc2ba4978116cbed29991873264fecca48f2cb119c07bfb70b6121b25f8aedc2b7da56fac282793f34e97ddb672a2a4396fc8c9b37e9b752840ad215149c57ad151092c5b34b8f1f95840ad124ef3092509c1b1cbd75dceef1adf9234e772194b7539d63ff26062acd8a8";

    let FeaturedEvents = [];
    let TechEvents = [];
    let EsportsEvents = [];

    onMount(async () => {
        let eventData = (await (await fetch(`${contentStrapiUrl}/api/events`, {
            headers: {Authorization: `Bearer ${strapiKey}`}
        })).json()).data

        let FeaturedEventsTemp = []
        let TechEventsTemp = []
        let EsportsEventsTemp = []
        for (let festEvent of eventData) {
            if (data.isRegisteredForAtLeastOne) {
                let foundFlag = false;
                for (let event of data.data) {
                    if (festEvent.attributes.EventPriority === event.event_priority) {
                        console.log(event.event_priority);
                        festEvent.attributes.isRegistered = true;
                        foundFlag = true;
                        break;
                    }
                }
                if (!foundFlag) {
                    festEvent.attributes.isRegistered = false;
                }
            }
            if (festEvent.attributes.EventPriority <= 1000) {
                FeaturedEventsTemp.push(festEvent);
            } else if (festEvent.attributes.EventPriority <= 2000) {
                TechEventsTemp.push(festEvent);
            } else {
                EsportsEventsTemp.push(festEvent);
            }
        }

        FeaturedEventsTemp.sort((a, b) => a.attributes.EventPriority - b.attributes.EventPriority);
        TechEventsTemp.sort((a, b) => a.attributes.EventPriority - b.attributes.EventPriority);
        EsportsEventsTemp.sort((a, b) => a.attributes.EventPriority - b.attributes.EventPriority);

        FeaturedEvents = FeaturedEventsTemp;
        TechEvents = TechEventsTemp;
        EsportsEvents = EsportsEventsTemp;

        isMobile = function () {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollToPlugin);



        let onLoadTimeline = gsap.timeline({
            onStart: () => {
                gsap.set('.letter-down', {
                    clearProps: true,
                })
            }
        });
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

        if (browser) {
            if ($beforeFormSubmissionPositionEvents !== 0) {
                $beforeFormSubmissionPositionEvents = 0;
            }
        }

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
            opacity: 1,
            scale: 0.75,
            yPercent: 10,
        });

        let technical = gsap.timeline({
            scrollTrigger: {
                trigger: '.starting-cultural-events',
                start: 'top center',
                end: 'top 30%',
                scrub: true,
                markers: false,
            }
        })
        technical.to('.actual-heading-text', {
            text: "TECHNICAL"
        })

        let esports = gsap.timeline({
            scrollTrigger: {
                trigger: '.starting-esports-events',
                start: 'top center',
                end: 'top 30%',
                scrub: true,
                markers: false,
            }
        })
        esports.to('.actual-heading-text', {
            text: "ESPORTS"
        })
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
<svelte:head>
    <title>EVENTS</title>
</svelte:head>


<div class="h-fit w-full bg-surface main-events-trigger">
    <Navbar/>
    <div class="h-fit w-full flex flex-col gap-10">
        <div class="h-[90vh] w-full flex flex-col items-center justify-center sticky top-0 intro-banner">
            <div class="h-fit w-full flex flex-col overflow-hidden">
                <div
                        class="pt-14 px-5 brand-font text-left h-fit w-full -translate-x-9 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip actual-heading-text">
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
                <div class="w-full h-fit flex items-center justify-center pt-5">
                    <button class="px-2 py-1 bg-primary text-on-primary text-3xl lg:text-5xl brand-font transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(97,44,138,1)]"
                    on:click={() => goto('/events/compete')}>
                        GO TO COMPETE PORTAL
                    </button>
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

        {#if FeaturedEvents.length > 0}
            {#each FeaturedEvents as festEvent}
                <EventCard descriptionText="{festEvent.attributes.EventDescription}"
                           eventName="{festEvent.attributes.EventName}" taglineHere="{festEvent.attributes.Tagline}"
                           includedWith="Flagship" showPrizePool="{false}" flagship="{true}"
                           isRegistered="{festEvent.attributes.isRegistered}"
                           priority="{festEvent.attributes.EventPriority}"
                           userPasses="{data.userPasses}"/>
            {/each}
        {/if}
        <div class="h-[90vh] w-full starting-cultural-events"></div>
        {#if TechEvents.length > 0}
            {#each TechEvents as festEvent}
                <EventCard descriptionText="{festEvent.attributes.EventDescription}"
                           eventName="{festEvent.attributes.EventName}" taglineHere="{festEvent.attributes.Tagline}"
                           includedWith="Flagship" showPrizePool="{true}" first="{festEvent.attributes.FirstPrize}"
                           second="{festEvent.attributes.SecondPrize}" third="{festEvent.attributes.ThirdPrize}"
                           handbookLink="{festEvent.attributes.RulebookGDriveLink}" technical="{true}"
                           isRegistered="{festEvent.attributes.isRegistered}"
                           priority="{festEvent.attributes.EventPriority}" userPasses="{data.userPasses}"/>
            {/each}
        {/if}
        <div class="h-[90vh] w-full starting-esports-events"></div>
        {#if EsportsEvents.length > 0}
            {#each EsportsEvents as festEvent}
                <EventCard descriptionText="{festEvent.attributes.EventDescription}"
                           eventName="{festEvent.attributes.EventName}" taglineHere="{festEvent.attributes.Tagline}"
                           includedWith="Esports" showPrizePool="{true}" first="{festEvent.attributes.FirstPrize}"
                           second="{festEvent.attributes.SecondPrize}" third="{festEvent.attributes.ThirdPrize}"
                           handbookLink="{festEvent.attributes.RulebookGDriveLink}" esports="{true}"
                           isRegistered="{festEvent.attributes.isRegistered}"
                           priority="{festEvent.attributes.EventPriority}" userPasses="{data.userPasses}"/>
            {/each}
        {/if}
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