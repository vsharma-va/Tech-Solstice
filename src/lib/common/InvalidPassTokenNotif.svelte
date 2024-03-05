<script>
    import {browser} from '$app/environment';
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    let isJWTInvalid;
    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        isJWTInvalid = urlParams.has('invalidPassToken');
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


        let tlOut = gsap.timeline();
        tl.to('.logout-notif', {
            top: 56,
            duration: 1,
            ease: "elastic.out(1,0.3)",
        });
        tl.to('.letter-down', {
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1,0.3)",
        }, "<")
        tl.to('.logout-notif', {
            top: "-100%",
            delay: 2,
        })
    })
</script>

{#if isJWTInvalid}
    <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
        <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
            <div class="flex flex-row h-fit w-fit">
                <span class="letter-down -translate-y-[20px]">I</span><span
                    class="letter-down -translate-y-[40px]">N</span><span
                    class="letter-down -translate-y-[60px]">V</span><span
                    class="letter-down -translate-y-[80px]">A</span><span
                    class="letter-down -translate-y-[100px]">L</span><span
                    class="letter-down -translate-y-[120px]">I</span>
                <span class="letter-down -translate-y-[140px]">D</span>
                <span class="letter-down -translate-y-[160px]">&nbsp;</span>
                <span class="letter-down -translate-y-[180px]">T</span>
                <span class="letter-down -translate-y-[200px]">O</span>
                <span class="letter-down -translate-y-[220px]">K</span>
                <span class="letter-down -translate-y-[240px]">E</span>
                <span class="letter-down -translate-y-[260px]">N</span>
            </div>
        </div>
    </div>
{/if}