<script>
    export let eventName;
    export let teamName;
    export let teamMemberCount;
    export let maxTeamMembers;
    export let cardBackgroundColorClass;
    export let rotateClass;
    export let headingTextColorClass;
    export let headingTextUnderlineColorClass;
    export let entryTextColorClass;
    export let buttonBgColorClass;
    export let buttonTextColorClass;
    export let isTeam;
    export let joinCode;
    export let isTeamLeader;
</script>

<div class="w-[81%] min-[410px]:w-[71%] min-[500px]:w-[56%] min-[600px]:w-[45%] sm:w-[43%] md:w-[34%] lg:w-[23%] xl:w-[19%] h-full flex-shrink-0 flex flex-col items-start justify-start border-2 border-surface pass-1 p-5 hover:-translate-y-[8px] hover:scale-[1.01] transition-all duration-300 {cardBackgroundColorClass} {rotateClass}">
    <div class="h-fit w-fit brand-font text-4xl relative {headingTextColorClass}">
        {eventName}
        <div class="h-[10px] w-full absolute bottom-0 {headingTextUnderlineColorClass}"></div>
    </div>
    <div class="h-full w-full brand-font text-3xl {entryTextColorClass} flex flex-col items-start justify-between gap-4">
        {#if isTeam}
            <div class="h-full w-full flex flex-col items-center justify-center gap-4">
                {teamName}
                <div class="h-fit w-full brand-font text-2xl {entryTextColorClass} flex flex-col items-center justify-center">
                    <p>Number Of Members: {teamMemberCount}</p>
                    <p>Max Members: {maxTeamMembers}</p>
                    <p class="select-text">Join Code: {joinCode}</p>
                </div>
            </div>
        {:else}
            <div class="h-full w-full brand-font text-3xl {entryTextColorClass} flex flex-col items-center justify-center">
                Solo Event
            </div>
        {/if}
        <div class="h-fit w-full flex flex-row items-center justify-between">
            <button class="h-fit w-fit flex flex-col items-center text-3xl px-2 py-1 justify-center {buttonBgColorClass} {buttonTextColorClass}">
                Details
            </button>
            {#if isTeam && isTeamLeader}
                <p class="brand-font text-3xl {entryTextColorClass}">
                    Team Leader
                </p>
            {:else if isTeam && !isTeamLeader}
                <p class="brand-font text-3xl {entryTextColorClass}">
                    Team Member
                </p>
            {/if}
        </div>
    </div>
</div>