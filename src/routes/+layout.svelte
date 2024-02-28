<script>
    import "../app.css";
    import Lenis from '@studio-freight/lenis';
    import {onMount} from "svelte";

    onMount(() => {
        // if (ScrollTrigger.isTouch !== 1) {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        // }
    })
</script>
<slot />