<script>
    import {browser} from '$app/environment';
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    let isLogin;
    let isLoggedOut;
    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        isLogin = urlParams.has('signedIn');
        setTimeout(() => {
            window.history.pushState({}, document.title, window.location.pathname);
        }, 1000);

        isLoggedOut = urlParams.has('signedOut');
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

{#if isLogin}
    <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
        <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
            <div class="flex flex-row h-fit w-fit">
                <span class="letter-down -translate-y-[20px]">W</span><span
                    class="letter-down -translate-y-[40px]">E</span><span
                    class="letter-down -translate-y-[60px]">L</span><span
                    class="letter-down -translate-y-[80px]">C</span><span
                    class="letter-down -translate-y-[100px]">O</span><span
                    class="letter-down -translate-y-[120px]">M</span><span
                    class="letter-down -translate-y-[140px]">E</span>
            </div>
            <p>VAIBHAV!</p>
        </div>
    </div>
{/if}
{#if isLoggedOut}
    <div class="fixed -top-[100%] left-1/2 -translate-x-1/2 w-fit h-fit z-[10] bg-surface border-2 border-on-surface px-4 py-2 rounded-2xl login-notif">
        <div class="brand-font flex flex-row text-3xl text-on-surface tracking-wide gap-1 h-fit w-fit">
            <div class="flex flex-row h-fit w-fit">
                <span class="letter-down -translate-y-[20px]">L</span><span
                    class="letter-down -translate-y-[40px]">O</span><span
                    class="letter-down -translate-y-[60px]">G</span><span
                    class="letter-down -translate-y-[80px]">G</span><span
                    class="letter-down -translate-y-[100px]">E</span><span
                    class="letter-down -translate-y-[120px]">D</span>
                <span class="letter-down -translate-y-[160px]">&nbsp;</span>
                <span class="letter-down -translate-y-[180px]">O</span>
                <span class="letter-down -translate-y-[200px]">U</span>
                <span class="letter-down -translate-y-[220px]">T</span>
            </div>
        </div>
    </div>
{/if}