<script>
    import {enhance} from "$app/forms";

    export let data;

    let emailToRemove;

    function attemptKicking({formData}) {
        console.log(emailToRemove);
        formData.set('emailToKick', emailToRemove);
        formData.set('ownerEmail', data.registrationDetails.email);
        formData.set('eventPriority', data.registrationDetails.event_priority);
        formData.set('joinCode', data.registrationDetails.join_code);
    }

    function attemptTeamDeletion({formData}) {
        formData.set('ownerEmail', data.registrationDetails.email);
        formData.set('eventPriority', data.registrationDetails.event_priority);
        formData.set('joinCode', data.registrationDetails.join_code);
    }
</script>

<div class="h-screen w-full bg-surface flex flex-col items-center justify-center gap-10">
    <div class="w-fit h-fit brand-font text-5xl text-primary tracking-wide text-center">
        {data.registrationDetails.event_name} <br> ({data.registrationDetails.team_name})
    </div>
    <div class="w-fit h-fit flex flex-col gap-5">
        {#if data.isLeader}
            <form action="?/deleteTeam" method="post" use:enhance={(event) => {
                attemptTeamDeletion(event);
            }}>
                <button class="w-full h-full brand-font text-3xl px-2 py-1 bg-error text-surface active:-translate-x-1 active:-translate-y-1 active:bg-error/40 transition-all duration-300"
                        type="submit"
                >
                    DELETE TEAM
                </button>
            </form>
        {/if}
        {#each data.registrationDetails.team_members as member}
            <div class="w-full h-full bg-on-surface regular-font text-2xl capitalize tracking-wide p-5 flex flex-col items-center justify-center gap-2">
                {member}
                {#if data.isLeader}
                    {#if data.registrationDetails.email !== member}
                        <form action="?/kickUser" method="post" class="w-full h-fit" use:enhance={(event) => {
                            attemptKicking(event);
                        }}>
                            <button class="w-full h-fit px-2 py-1 bg-error text-surface active:-translate-x-1 active:-translate-y-1 active:bg-error/40 transition-all duration-300"
                                    type="submit"
                                    on:click={() => {emailToRemove = member}}>
                                KICK
                            </button>
                        </form>
                    {/if}
                {/if}
            </div>
        {/each}
    </div>
</div>