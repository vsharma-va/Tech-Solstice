<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    export let data;

    onMount(() => {
        let onLoadTimeline = gsap.timeline({});
        onLoadTimeline.to('.call-to-action-letter-down', {
            y: 0,
        });
        onLoadTimeline.to('.underline-text', {
            width: "100%",
        }, "<");
        setTimeout(() => {
            window.location = data.redirectUrl;
        }, 3000)
    })
</script>

<div class="h-screen w-full flex flex-col items-center justify-center bg-surface">
    {#if !data?.error}
        <div class="brand-font h-fit w-fit font-bold flex flex-row items-center justify-center text-[14vw] text-on-surface overflow-y-clip relative">
            <span class="call-to-action-letter-down -translate-y-[70px]">T</span>
            <span class="call-to-action-letter-down -translate-y-[90px]">H</span>
            <span class="call-to-action-letter-down -translate-y-[110px]">A</span>
            <span class="call-to-action-letter-down -translate-y-[130px]">N</span>
            <span class="call-to-action-letter-down -translate-y-[150px]">K</span>
            <span class="call-to-action-letter-down -translate-y-[170px]">&nbsp;</span>
            <span class="call-to-action-letter-down -translate-y-[190px]">Y</span>
            <span class="call-to-action-letter-down -translate-y-[210px]">O</span>
            <span class="call-to-action-letter-down -translate-y-[230px]">U</span>
            <span class="call-to-action-letter-down -translate-y-[250px]">!</span>
            <div class="absolute bottom-0 h-[4vw] w-0 bg-primary underline-text"></div>
        </div>
        <p class="brand-font h-fit w-full font-bold tracking-wide text-primary text-center text-[2vw]"></p>
    {:else}
        <p class="brand-font h-fit w-fit font-bold items-center justify-center text-[14vw] text-on-surface overflow-y-clip relative">
            Payment Status: <span class="text-primary">{data.paymentStatus}</span>
        </p>
    {/if}
</div>