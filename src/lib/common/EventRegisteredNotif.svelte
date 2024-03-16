<script>
    import {browser} from '$app/environment';
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    let isAlreadyOwned;
    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        isAlreadyOwned = urlParams.has('registered');
        setTimeout(() => {
            window.history.pushState({}, document.title, window.location.pathname);
        }, 1000);
    }

    onMount(() => {
        let tl = gsap.timeline();
        tl.to('.login-notif', {
            top: 56,
            duration: 1,
            ease: "elastic.out(1,0.3)",
        });
        tl.to('.letter-down', {
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1,0.3)",
        }, "<")
        tl.to('.login-notif', {
            top: "-100%",
            delay: 2,
        })
    })
</script>

{#if isAlreadyOwned}
    <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
        <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
            <div class="flex flex-row h-fit w-fit">
                <span class="letter-down -translate-y-[20px]">R</span><span
                    class="letter-down -translate-y-[40px]">E</span><span
                    class="letter-down -translate-y-[60px]">G</span><span
                    class="letter-down -translate-y-[80px]">I</span><span
                    class="letter-down -translate-y-[100px]">S</span><span
                    class="letter-down -translate-y-[120px]">T</span>
                <span class="letter-down -translate-y-[140px]">E</span>
                <span class="letter-down -translate-y-[160px]">R</span>
                <span class="letter-down -translate-y-[180px]">E</span>
                <span class="letter-down -translate-y-[200px]">D</span>
                <span class="letter-down -translate-y-[220px]">!</span>
            </div>
        </div>
    </div>
{/if}