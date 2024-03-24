<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {onMount} from "svelte";
    import {dragscroll} from "@svelte-put/dragscroll";

    let contentStrapiUrl = "https://content.mitblrfest.in"
    let strapiKey = "298b35a62cad6355f0bfa06ffd7ae42c739c87fe0e3bc2ba4978116cbed29991873264fecca48f2cb119c07bfb70b6121b25f8aedc2b7da56fac282793f34e97ddb672a2a4396fc8c9b37e9b752840ad215149c57ad151092c5b34b8f1f95840ad124ef3092509c1b1cbd75dceef1adf9234e772194b7539d63ff26062acd8a8";
    let selectedEvent;
    let eventData = [];
    let isTeam = false;

    onMount(async () => {
        eventData = (await (await fetch(`${contentStrapiUrl}/api/events`, {
            headers: {Authorization: `Bearer ${strapiKey}`}
        })).json()).data

        gsap.registerPlugin(TextPlugin);
        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to('.on-load-replace-text', {
            text: "EVENTS PORTAL",
            duration: 1,
        })
    })

    function displayRegistrationForm() {

    }

    function selectIfTeamOrNot() {
        console.log("SOMETHING");
        console.log(selectedEvent);
        for (let event of eventData) {
            if (event.attributes.EventPriority === selectedEvent) {
                console.log("FOUND EVENT");
                isTeam = true;
                break;
            }
        }
    }
</script>

<div class="h-screen w-full bg-surface relative">
    <Navbar/>
    <div class="absolute top-0 h-screen w-full backdrop-blur-3xl z-[3] flex items-center justify-center">
        <button class="h-screen w-full bg-transparent absolute top-0"></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 py-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">SELECT AN EVENT TO REGISTER!</p>
                <!--                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left mt-1">Your-->
                <!--                    details will be used for event registeration</p>-->
                <div class="flex flex-col h-fit w-full gap-2 items-center justify-center">
                    <div class="form__group field mt-9">
                        {#if eventData.length > 0}
                            <select type="input"
                                    class="form__field regular-font bg-surface text-on-surface border-2 border-on-surface"
                                    required=""
                                    bind:value={selectedEvent} on:input={selectIfTeamOrNot}>
                                {#each eventData as event}
                                    {#if event.attributes.EventPriority !== 1 && event.attributes.EventPriority !== 2}
                                        <option value="{event.attributes.EventPriority}"
                                                class="bg-surface text-on-surface">{event.attributes.EventName}</option>
                                    {/if}
                                {/each}
                            </select>
                        {/if}
                        <label for="name" class="form__label regular-font">Event Name</label>
                    </div>
                    {#if isTeam}
                        <div class="form__group field">
                            <input type="text" class="form__field regular-font" placeholder="Team Name" required="">
                            <label for="name" class="form__label regular-font">Team Name</label>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="h-fit w-full flex flex-col items-center justify-center pt-16">
        <p class="brand-font text-7xl text-on-surface on-load-replace-text">
            P&%$! E%$#^*
        </p>
    </div>
    <div class="h-[60vh] w-full overflow-x-hidden">
        <div class="h-[60vh] box-border relative pl-5 py-[10px]">
            <div
                    class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                    use:dragscroll>
                <div class="w-[81%] min-[410px]:w-[71%] min-[500px]:w-[56%] min-[600px]:w-[45%] sm:w-[43%] md:w-[34%] lg:w-[23%] xl:w-[19%] h-full flex-shrink-0 flex flex-col items-start justify-start border-2 border-surface bg-on-surface pass-1 p-5 hover:-translate-y-[8px] hover:scale-[1.01] transition-all duration-300">
                    <div class="h-fit w-fit brand-font text-4xl text-surface relative">
                        Event Name
                        <div class="h-[10px] w-full absolute bottom-0 bg-primary/60"></div>
                    </div>
                    <div class="h-full w-full brand-font text-4xl text-surface flex flex-col items-start justify-between gap-4">
                        <div class="h-full w-full flex flex-col items-center justify-center gap-4">
                            Team Name
                            <div class="h-fit w-full brand-font text-3xl text-surface flex flex-col items-center justify-center">
                                <p>Number Of Members: 4</p>
                                <p>Max Members: 8</p>
                            </div>
                        </div>
                        <button class="h-fit w-fit flex flex-col items-center text-3xl px-2 py-1 justify-center bg-primary text-on-primary">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="h-fit w-full flex flex-col items-center justify-center group">
        <button class="px-2 py-1 h-fit w-fit flex items-center justify-center bg-primary text-on-primary text-3xl brand-font tracking-wide transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_0px_rgba(97,44,138,1)]">
            ADD NEW REGISTRATION
        </button>
    </div>
</div>

<style>
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