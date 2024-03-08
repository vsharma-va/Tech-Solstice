<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";

    export let data;
    onMount(() => {
        let loadTimeline = gsap.timeline();
        loadTimeline.to(".call-to-action-letter-down", {
            y: 0,
        })
        setTimeout(() => {
            window.location = data.redirectUrl;
        }, 3000)
    })
</script>

<div class="h-[100dvh] w-full bg-surface flex flex-col items-center justify-center">
    <div class="brand-font h-fit w-full font-bold flex flex-row items-center justify-center text-[14vw] text-on-surface overflow-y-clip">
        <span class="call-to-action-letter-down -translate-y-[70px]">D</span>
        <span class="call-to-action-letter-down -translate-y-[90px]">O</span>
        <span class="call-to-action-letter-down -translate-y-[110px]">N'</span>
        <span class="call-to-action-letter-down -translate-y-[130px]">T</span>
        <span class="call-to-action-letter-down -translate-y-[150px]">&nbsp;</span>
        <span class="call-to-action-letter-down -translate-y-[170px]">R</span>
        <span class="call-to-action-letter-down -translate-y-[190px]">E</span>
        <span class="call-to-action-letter-down -translate-y-[210px]">F</span>
        <span class="call-to-action-letter-down -translate-y-[230px]">R</span>
        <span class="call-to-action-letter-down -translate-y-[250px]">E</span>
        <span class="call-to-action-letter-down -translate-y-[270px]">S</span>
        <span class="call-to-action-letter-down -translate-y-[290px]">H</span>
        <span class="call-to-action-letter-down -translate-y-[310px]">!</span>
    </div>
    <p class="brand-font h-fit w-full font-bold tracking-wide text-primary text-center text-2xl">Even if it looks like it is stuck</p>
</div>