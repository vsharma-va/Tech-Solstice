<script>
    import Navbar from "$lib/common/Navbar.svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
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
        let onLoadTimeline = gsap.timeline();
        onLoadTimeline.to('.on-load-replace-text', {
            text: "EVENTS PORTAL",
            duration: 1,
        })
    })

    function displayRegistrationForm() {
        gsap.to('.registration-form', {
            y: 0,
            ease: "power4.out",
        })
    }
    function hideRegistrationForm() {
        gsap.to('.registration-form', {
            y: "100%",
            ease: "power4.out"
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

    function attemptEventRegistration({formData}) {
        formData.set('selectedEventPriority', selectedEvent);
        formData.set('isTeam', isTeam);
        formData.set('teamName', teamName);
        formData.set('maxTeamLength', maxTeamLength);
        formData.set('eventName', eventName);
    }
</script>

<div class="min-h-screen max-h-fit w-full bg-surface relative">
    <Navbar/>
    <div class="absolute top-0 h-screen w-full backdrop-blur-3xl translate-y-[100%] z-[3] flex items-center justify-center registration-form">
        <button class="h-screen w-full bg-transparent absolute top-0" on:click={() => {hideRegistrationForm()}}></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 py-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <form action="?/registerForEvent" method="post" use:enhance={(event) => {
                    attemptEventRegistration(event);
                }}>
                    <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">SELECT AN EVENT TO
                        REGISTER!</p>
                    {#if form?.error}
                        <p class="regular-font text-error text-xl text-center mt-5">{form.detail}</p>
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
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="h-fit w-full flex flex-col items-center justify-center pt-16">
        <p class="brand-font text-7xl text-on-surface on-load-replace-text">
            P&%$! E%$#^*
        </p>
    </div>
    <div class="h-[60vh] w-full overflow-x-hidden">
        <div class="h-[60vh] relative pl-5 py-[10px]">
            {#if data?.registrations.teamOrSolo.length > 0}
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
                                     isTeamLeader="{true}"
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
                                     isTeamLeader="{true}"
                            />
                        {/if}
                    {/each}
                </div>
            {/if}
            {#if data?.registrations.teamMember.length > 0}
                <div
                        class="relative w-full h-full flex flex-row items-center justify-start lg:justify-center flex-nowrap box-border gap-0 px-5 horizontal-scroll-element overflow-x-scroll py-9 no-scrollbar"
                        use:dragscroll>
                    {#each data?.registrations.teamMember as reg, index}
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
                            />
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    <div class="h-fit w-full flex flex-col items-center justify-center group">
        <button class="px-2 py-1 h-fit w-fit flex items-center justify-center bg-primary text-on-primary text-3xl brand-font tracking-wide transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[5px_5px_0px_0px_rgba(97,44,138,1)]"
        on:click={() => {displayRegistrationForm()}}>
            ADD NEW REGISTRATION
        </button>
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