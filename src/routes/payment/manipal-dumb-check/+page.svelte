<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {goto} from "$app/navigation";
    import {destroyRedirectPaymentCookie} from "../../../store.js";

    let currentPageNumber = 1;
    let totalNumberOfPages;
    let checkStartButton;

    async function fetchPaymentLogs() {
        let response = await fetch('/api/generate-pass', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPageNumber: currentPageNumber,
            }),
        });
        return await response.json();
    }

    onMount(async () => {
        gsap.registerPlugin(TextPlugin);
        // if (form?.generatedPasses) {
        //     form = undefined;
        //     document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        //     replaceTextSuccess();
        //     setTimeout(async () => {
        //         goto('/my-passes');
        //     }, 2500);
        // } else {
        //     replaceTextFailure();
        //     form = undefined;
        //     if ($destroyRedirectPaymentCookie === 1) {
        //         document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        //         $destroyRedirectPaymentCookie = 0;
        //     } else {
        //         $destroyRedirectPaymentCookie += 1;
        //     }
        //     setTimeout(() => {
        //         replaceTextBack();
        //     }, 2500);
        // }
    })

    async function onClickCheckPayment() {
        while (true) {
            let jsonResponse = await fetchPaymentLogs();
            console.log(jsonResponse.generatedPasses);
            totalNumberOfPages = jsonResponse.totalPages;
            if (jsonResponse.generatedPasses === false) {
                if (jsonResponse.currentPageNumber === jsonResponse.totalPages) {
                    replaceTextFailure();
                    setTimeout(replaceTextBack, 4000);
                    break;
                } else if (jsonResponse.totalPages > jsonResponse.currentPageNumber) {
                    currentPageNumber = jsonResponse.currentPageNumber + 1;
                }
            } else if (jsonResponse.generatedPasses === true) {
                document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                if(jsonResponse.semi) {
                    replaceTextSemiSuccess();
                    setTimeout(() => {
                        goto('/my-passes')
                    }, 4000);
                    break;
                }
                replaceTextSuccess();
                setTimeout(() => {
                    goto('/my-passes')
                }, 4000);
                break;
            }
        }
    }

    function replaceTextSemiSuccess() {
        gsap.to('.heading-text', {
            text: "PASS ALREADY EXISTS!",
            duration: 1,
        })
    }

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
        progressPercentage = 0;
        checkStartButton.disabled = false;
        gsap.to('.heading-text', {
            text: "JUST COMPLETED THE PAYMENT?",
            duration: 1,
        })
    }

    $: animatedPageNumber = currentPageNumber;
    $: animatedTotalNumberOfPages = totalNumberOfPages;
    $: progressPercentage = (animatedPageNumber / animatedTotalNumberOfPages) * 100;
</script>

<div class="h-screen w-full bg-surface flex flex-col items-center justify-center p-5">
    <div class="h-screen w-fit p-5 flex flex-col items-center justify-center gap-5">
        <p class="brand-font text-6xl w-full text-primary text-center heading-text">JUST COMPLETED THE PAYMENT?</p>
        <div class="w-full h-fit flex flex-row items-center justify-between">
            <button class="px-2 py-1 bg-primary brand-font text-on-primary text-2xl tracking-wide"
                    bind:this={checkStartButton}
                    on:click={() => {onClickCheckPayment(); checkStartButton.disabled = true;}}>
                CLICK HERE TO GET YOUR PASS
            </button>
            <button class="px-2 py-1 bg-primary brand-font text-on-primary text-2xl tracking-wide" on:click={
                async () => {
                    document.cookie = "triedPaying=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                    $destroyRedirectPaymentCookie = 0;
                    await goto('/passes');
                }
            }>GO BACK
            </button>
        </div>
        <div class="h-[8px] self-start w-0 flex items-center justify-center bg-gradient-to-r from-[#490f72] to-[#e1b6ff] transition-all duration-400"
             style="width: {progressPercentage}%"></div>
    </div>
</div>