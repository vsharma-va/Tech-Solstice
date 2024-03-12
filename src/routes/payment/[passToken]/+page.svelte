<script>
    import {gsap} from "gsap/dist/gsap";
    import {onMount} from "svelte";

    export let data;
    onMount(() => {
        let loadTimeline = gsap.timeline();
        loadTimeline.to(".call-to-action-letter-down", {
            y: 0,
        })
        gsap.to('.loader-dont-refresh', {
            display: "flex",
            scale: 1,
            opacity: 1,
            ease: "circ.out",
            duration: 0.3,
        })
        let load = gsap.timeline({repeat: -1,})
        load.to('.loader-dont-refresh-dot', {
            scale: 0.75,
            opacity: 0.8,
            ease: "bounce.out",
        });
        load.to('.loader-dont-refresh-dot', {
            scale: 1,
            opacity: 1,
            ease: "bounce.out",
        });
        setTimeout(() => {
            window.location = data.redirectUrl;
        }, 1000)
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
    <div class="flex flex-col items-end justify-end loader-dont-refresh mt-5 opacity-0">
        <div class="rounded-full bg-primary h-8 w-8 loader-dont-refresh-dot"></div>
    </div>
</div>