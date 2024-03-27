<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import {enhance} from "$app/forms";
    import {dragscroll} from "@svelte-put/dragscroll";
    import RegCard from "$lib/Events/RegCard.svelte";

    export let form;
    export let data;

    let contentStrapiUrl = "https://content.mitblrfest.in"
    let strapiKey = "298b35a62cad6355f0bfa06ffd7ae42c739c87fe0e3bc2ba4978116cbed29991873264fecca48f2cb119c07bfb70b6121b25f8aedc2b7da56fac282793f34e97ddb672a2a4396fc8c9b37e9b752840ad215149c57ad151092c5b34b8f1f95840ad124ef3092509c1b1cbd75dceef1adf9234e772194b7539d63ff26062acd8a8";
    let selectedEvent;
    let eventData = [];
    let isTeam = false;
    let teamName;
    let maxTeamLength;
    let eventName;
    let teamJoinCode;
    let showJoinCodeSubmit = false;

    let cardColorPallets = [{
        cardBackgroundColorClass: "bg-on-surface",
        headingTextColorClass: "text-surface",
        headingTextUnderlineColorClass: "bg-primary/80",
        entryTextColorClass: "text-surface",
        buttonBgColorClass: "bg-primary",
        buttonTextColorClass: "text-on-primary",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }, {
        cardBackgroundColorClass: "bg-primary-container",
        headingTextColorClass: "text-on-primary-container",
        headingTextUnderlineColorClass: "bg-on-primary-container/80",
        entryTextColorClass: "text-on-primary-container",
        buttonBgColorClass: "bg-on-primary-container",
        buttonTextColorClass: "text-primary-container",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }, {
        cardBackgroundColorClass: "bg-primary",
        headingTextColorClass: "text-primary-container",
        headingTextUnderlineColorClass: "bg-on-primary-container/80",
        entryTextColorClass: "text-primary-container",
        buttonBgColorClass: "bg-primary-container",
        buttonTextColorClass: "text-primary",
        buttonPriceBgColorClass: "bg-on-surface",
        buttonPriceTextColorClass: "text-surface",
    }]

    onMount(async () => {
        eventData = (await (await fetch(`${contentStrapiUrl}/api/events`, {
            headers: {Authorization: `Bearer ${strapiKey}`}
        })).json()).data

        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);

        let onLoadTimeline = gsap.timeline({
            onStart: () => {
                gsap.set('.letter-down', {
                    clearProps: true,
                })
            }
        });
        onLoadTimeline.to(".letter-down", {
            y: 0,
        }, ">");
        // onLoadTimeline.to(window, {
        //     scrollTo: 100,
        // }, ">")
        onLoadTimeline.to('.passes-div', {
            x: 0,
            ease: "back.out(1.7)",
            duration: 1.25,
        }, ">");
        onLoadTimeline.to('.typewriter-1', {
            opacity: 1,
            duration: 0.25,
        }, ">");
        onLoadTimeline.to('.typewriter-2', {
            opacity: 1,
            duration: 0.25,
        }, ">");
        onLoadTimeline.to('.typewriter-3', {
            opacity: 1,
            duration: 0.25,
        }, ">");
        onLoadTimeline.to('.typewriter-4', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-5', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-6', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-7', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-8', {
            opacity: 1,
            duration: 0.25,
        });
        onLoadTimeline.to('.typewriter-9', {
            opacity: 1,
            duration: 0.25,
        });

        let eventsBannerTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.pass-trigger',
                start: 'top top',
                end: 'top -60%',
                scrub: true,
                markers: false,
            }
        });
        eventsBannerTl.to('.intro-banner', {
            opacity: 0.25,
            filter: "blur(5px)",
            scale: 0.75,
            yPercent: 10,
        });
    })

    function displayRegistrationForm() {
        gsap.to('.registration-form', {
            x: 0,
            ease: "power4.out",
        })
    }

    function hideRegistrationForm() {
        if(form?.success) {
            form.success = false;
        }
        gsap.to('.registration-form', {
            x: "-100%",
            ease: "power4.out"
        })
    }

    function displayExistingRegistrationForm() {
        gsap.to('.existing-registration-form', {
            x: 0,
            ease: "power4.out",
        })
    }

    function hideExistingRegistrationForm() {
        if(form?.success) {
            form.success = false;
        }
        gsap.to('.existing-registration-form', {
            x: "-100%",
            ease: "power4.out",
        })
    }

    function selectIfTeamOrNot() {
        console.log(selectedEvent);
        if (form?.error) {
            form.error = false;
        }
        for (let event of eventData) {
            if (event.attributes.EventPriority === selectedEvent) {
                eventName = event.attributes.EventName;
                if (event.attributes.TeamEvent) {
                    isTeam = true;
                    maxTeamLength = event.attributes.MaxTeamMembers;
                } else {
                    maxTeamLength = -1;
                    isTeam = false;
                }
                break;
            }
        }
    }

    function joinCodeCheck() {
        if(form?.errorExisting) {
            form.errorExisting = false;
        }

        if (teamJoinCode) {
            showJoinCodeSubmit = true;
        } else {
            showJoinCodeSubmit = false;
        }
    }

    function attemptEventRegistration({formData}) {
        formData.set('selectedEventPriority', selectedEvent);
        formData.set('isTeam', isTeam);
        formData.set('teamName', teamName);
        formData.set('maxTeamLength', maxTeamLength);
        formData.set('eventName', eventName);
    }

    function attemptExistingEventRegistration({formData}) {
        formData.set('teamJoinCode', teamJoinCode);
    }
</script>

<div class="min-h-screen max-h-fit w-full bg-surface relative">
    <Navbar/>
    <div class="absolute top-0 h-screen w-full backdrop-blur-3xl -translate-x-[100%] z-[3] flex items-center justify-center registration-form">
        <button class="h-screen w-full bg-transparent absolute top-0"
                on:click={() => {hideRegistrationForm()}}></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 py-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <form action="?/registerForEvent" method="post" use:enhance={(event) => {
                    attemptEventRegistration(event);
                }}>
                    <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">SELECT AN EVENT TO
                        REGISTER!
                    </p>
                    {#if form?.error}
                        <p class="regular-font text-error text-xl text-center mt-5">{form.detail}</p>
                    {/if}
                    {#if form?.success}
                        <p class="regular-font text-success text-xl text-center mt-5">Successfully Registered</p>
                    {/if}
                    <!--                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left mt-1">Your-->
                    <!--                    details will be used for event registeration</p>-->
                    <div class="flex flex-col h-fit w-full gap-2 items-center justify-center">
                        <div class="form__group field mt-9">
                            <!--{#if eventData.length > 0}-->
                            <select type="input"
                                    class="form__field regular-font bg-surface text-on-surface border-2 border-on-surface"
                                    required=""
                                    bind:value={selectedEvent} on:change={selectIfTeamOrNot}>
                                <option value="-1" class="bg-surface text-on-surface" selected disabled>
                                    Select an Event
                                </option>
                                {#each eventData as event}
                                    {#if event.attributes.EventPriority !== 1 && event.attributes.EventPriority !== 2 && event.attributes.EventPriority !== 3}
                                        <option value="{event.attributes.EventPriority}"
                                                class="bg-surface text-on-surface">{event.attributes.EventName}</option>
                                    {/if}
                                {/each}
                            </select>
                            <!--{/if}-->
                            <label for="name" class="form__label regular-font">Event Name</label>
                        </div>
                        {#if isTeam}
                            <div class="form__group field">
                                <input type="text" class="form__field regular-font" placeholder="Team Name" required=""
                                       bind:value={teamName}>
                                <label for="name" class="form__label regular-font">Team Name</label>
                            </div>
                        {/if}
                        {#if selectedEvent !== "-1"}
                            {#if isTeam}
                                {#if teamName}
                                    <button class="bg-primary text-on-primary px-2 py-1 brand-font text-2xl w-full mt-2">
                                        Submit
                                    </button>
                                {/if}
                            {:else}
                                <button class="bg-primary text-on-primary px-2 py-1 brand-font text-2xl w-full mt-2">
                                    Submit
                                </button>
                            {/if}
                        {/if}
                        <div class="regular-font text-lg text-primary">Click Outside To Close</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="absolute top-0 h-screen w-full backdrop-blur-3xl -translate-x-[100%] z-[3] flex items-center justify-center existing-registration-form">
        <button class="h-screen w-full bg-transparent absolute top-0"
                on:click={() => {hideExistingRegistrationForm()}}></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 py-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <form action="?/registerExistingEvent" method="post" use:enhance={(event) => {
                    attemptExistingEventRegistration(event);
                }}>
                    <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">
                        SELECT AN EVENT TO REGISTER!
                    </p>
                    {#if form?.errorExisting}
                        <p class="regular-font text-error text-xl text-center mt-5">{form.details}</p>
                    {/if}
                    {#if form?.success}
                        <p class="regular-font text-success text-xl text-center mt-5">Successfully joined a team</p>
                    {/if}
                    <!--                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left mt-1">Your-->
                    <!--                    details will be used for event registeration</p>-->
                    <div class="flex flex-col h-fit w-full gap-2 items-center justify-center">
                        <div class="form__group field mt-9">
                            <input type="text" class="form__field regular-font" placeholder="Join Code" required=""
                                   bind:value={teamJoinCode} on:input={joinCodeCheck}>
                            <label for="name" class="form__label regular-font">Join Code</label>
                        </div>
                        {#if showJoinCodeSubmit}
                            <button class="bg-primary text-on-primary px-2 py-1 brand-font text-2xl w-full mt-2">
                                Submit
                            </button>
                        {/if}
                        <div class="regular-font text-lg text-primary">Click Outside To Close</div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="h-[90vh] w-full flex flex-col items-center justify-center intro-banner sticky top-0">
        <div class="flex flex-row w-fit h-fit items-center justify-center gap-5 px-5">
            <button class="bg-primary text-on-primary text-2xl sm:text-3xl brand-font tracking-wide px-2 py-1 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(97,44,138,1)] transition-all duration-300"
                    on:click={() => {displayRegistrationForm()}}>REGISTER FOR AN EVENT
            </button>
            <button class="bg-primary text-on-primary text-2xl sm:text-3xl brand-font tracking-wide px-2 py-1 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(97,44,138,1)] transition-all duration-300"
                    on:click={() => {displayExistingRegistrationForm()}}>JOIN A TEAM
            </button>
        </div>
        <div class="h-fit w-full flex flex-col overflow-hidden">
            <div
                    class="pt-14 px-5 brand-font text-left h-fit w-full -translate-x-9 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                <span class="letter-down -translate-y-[70px]">E</span>
                <span class="letter-down -translate-y-[90px]">V</span>
                <span class="letter-down -translate-y-[110px]">E</span>
                <span class="letter-down -translate-y-[130px]">N</span>
                <span class="letter-down -translate-y-[150px]">T</span>
                <span class="letter-down -translate-y-[170px]">S</span>
                <span class="letter-down -translate-y-[190px]">&nbsp;</span>

            </div>
            <div
                    class="px-5 brand-font text-right h-fit w-full translate-x-9 lg:translate-x-24 font-bold flex flex-row items-center justify-center text-6xl sm:text-7xl lg:text-9xl text-on-surface overflow-y-clip">
                <span class="letter-down -translate-y-[260px]">P</span>
                <span class="letter-down -translate-y-[280px]">O</span>
                <span class="letter-down -translate-y-[300px]">R</span>
                <span class="letter-down -translate-y-[320px]">T</span>
                <span class="letter-down -translate-y-[340px]">A</span>
                <span class="letter-down -translate-y-[360px]">L</span>
            </div>
        </div>
        <div class="h-fit w-full flex flex-col items-center justify-center px-5 mt-24">
            <p class="brand-font text-3xl sm:text-4xl lg:text-5xl text-primary tracking-wide text-center">
                <span class="typewriter-1 opacity-0">SIGN</span>
                <span class="typewriter-2 opacity-0">UP</span>
                <span class="typewriter-3 opacity-0">FOR</span>
                <span class="typewriter-4 opacity-0">EVENTS</span>
                <span class="typewriter-5 opacity-0">NOW!</span>
            </p>
        </div>
    </div>
    <div class="flex flex-row items-start justify-start h-fit w-full px-6">
        <p class="brand-font text-4xl brand-font text-on-surface text-center">
            USER-LED OR SOLO EVENTS
        </p>
    </div>
    {#if data?.registrations.teamOrSolo.length > 0}
        <div class="h-[60vh] w-full overflow-x-hidden">
            <div class="h-[60vh] relative pl-5 py-[10px]">
                <div
                        class="w-full h-full flex flex-row items-center justify-start lg:justify-start flex-shrink-0 flex-nowrap gap-0 px-5 py-9 overflow-x-scroll no-scrollbar"
                        use:dragscroll>
                    {#each data?.registrations.teamOrSolo as reg, index}
                        {#if (index + 1) % 2 === 0}
                            <RegCard eventName="{reg.event_name}" teamName="{reg.team_name}"
                                     teamMemberCount="{reg.team_member_count}" maxTeamMembers="{reg.max_team_members}"
                                     cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                     headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                     headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                     entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                     buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                     buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                     rotateClass="rotate-[8deg]"
                                     isTeam="{reg.is_team}"
                                     joinCode="{reg.join_code}"
                                     isTeamLeader="{true}"
                                     eventPriority="{reg.event_priority}"
                            />
                        {:else}
                            <RegCard eventName="{reg.event_name}" teamName="{reg.team_name}"
                                     teamMemberCount="{reg.team_member_count}" maxTeamMembers="{reg.max_team_members}"
                                     cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                     headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                     headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                     entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                     buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                     buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                     rotateClass="-rotate-[4deg]"
                                     isTeam="{reg.is_team}"
                                     joinCode="{reg.join_code}"
                                     isTeamLeader="{true}"
                            />
                        {/if}
                    {/each}
                </div>

            </div>
        </div>
    {:else}
        <p class="brand-font text-4xl text-primary text-center mt-5 px-5">
            NO DATA FOUND
        </p>
    {/if}
    <div class="flex flex-row items-start justify-start h-fit w-full px-6">
        <p class="brand-font text-4xl brand-font text-on-surface text-center">
            Teams Joined By User
        </p>
    </div>
    {#if data?.registrations.teamMember.length > 0}
        <div class="h-[60vh] w-full overflow-x-hidden">
            <div class="h-[60vh] relative pl-5 py-[10px]">
                <div
                        class="relative w-full h-full flex flex-row items-center justify-start lg:justify-start flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                        use:dragscroll>
                    {#each data?.registrations.teamMember as reg, index}
                        {#if (index + 1) % 2 === 0}
                            <RegCard eventName="{reg.event_name}" teamName="{reg.team_name}"
                                     teamMemberCount="{reg.team_member_count}"
                                     maxTeamMembers="{reg.max_team_members}"
                                     cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                     headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                     headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                     entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                     buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                     buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                     rotateClass="rotate-[8deg]"
                                     isTeam="{reg.is_team}"
                                     joinCode="{reg.join_code}"
                                     isTeamLeader="{false}"
                            />
                        {:else}
                            <RegCard eventName="{reg.event_name}" teamName="{reg.team_name}"
                                     teamMemberCount="{reg.team_member_count}"
                                     maxTeamMembers="{reg.max_team_members}"
                                     cardBackgroundColorClass="{cardColorPallets[index%(cardColorPallets.length)].cardBackgroundColorClass}"
                                     headingTextUnderlineColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextUnderlineColorClass}"
                                     headingTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].headingTextColorClass}"
                                     entryTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].entryTextColorClass}"
                                     buttonBgColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonBgColorClass}"
                                     buttonTextColorClass="{cardColorPallets[index%(cardColorPallets.length)].buttonTextColorClass}"
                                     rotateClass="-rotate-[4deg]"
                                     isTeam="{reg.is_team}"
                                     joinCode="{reg.join_code}"
                                     isTeamLeader="{false}"
                            />
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <p class="brand-font text-4xl text-primary mt-5 px-5 text-center">
            NO DATA FOUND
        </p>
    {/if}
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