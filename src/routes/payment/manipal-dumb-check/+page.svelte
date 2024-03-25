<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {goto} from "$app/navigation";
    import {destroyRedirectPaymentCookie} from "../../../store.js";

    export let form;

    onMount(() => {
        gsap.registerPlugin(TextPlugin);
        if (form?.generatedPasses) {
            form = undefined;
            document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            replaceTextSuccess();
            setTimeout(async () => {
                goto('/my-passes');
            }, 2500);
        } else {
            replaceTextFailure();
            form = undefined;
            if ($destroyRedirectPaymentCookie === 1) {
                document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                $destroyRedirectPaymentCookie = 0;
            } else {
                $destroyRedirectPaymentCookie += 1;
            }
            setTimeout(() => {
                replaceTextBack();
            }, 2500);
        }
    })

    function replaceTextSuccess() {
        gsap.to('.heading-text', {
            text: "PASS GENERATED!!",
            duration: 1,
        })
    }

    function replaceTextFailure() {
        gsap.to('.heading-text', {
            text: "PAYMENT NOT FOUND!!",
            duration: 1,
        })
    }

    function replaceTextBack() {
        gsap.to('.heading-text', {
            text: "JUST COMPLETED THE PAYMENT?",
            duration: 1,
        })
    }
</script>

<div class="h-screen w-full bg-surface flex flex-col items-center justify-center p-5">
    <div class="h-screen w-fit p-5 flex flex-col items-center justify-center gap-5">
        <p class="brand-font text-6xl w-full text-primary text-center heading-text">JUST COMPLETED THE PAYMENT?</p>
        <div class="w-full h-fit flex flex-row items-center justify-between">
            <form action="?/checkPaymentStatus" method="post">
                <button class="px-2 py-1 bg-primary brand-font text-on-primary text-2xl tracking-wide" type="submit">
                    CLICK HERE TO GET YOUR PASS
                </button>
            </form>
            <button class="px-2 py-1 bg-primary brand-font text-on-primary text-2xl tracking-wide" on:click={
                async () => {
                    document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                    $destroyRedirectPaymentCookie = 0;
                    await goto('/passes');
                }
            }>GO BACK
            </button>
        </div>
    </div>
</div>