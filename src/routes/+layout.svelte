<script>
    import "../app.css";
    import Lenis from '@studio-freight/lenis';
    import {onMount} from "svelte";

    onMount(() => {
        // if (ScrollTrigger.isTouch !== 1) {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        // }
    })
</script>
<slot />