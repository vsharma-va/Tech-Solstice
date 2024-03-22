<script>
import {goto} from "$app/navigation";
</script>

<div class="h-screen w-full bg-surface flex items-center justify-center">
    <div class="h-screen w-fit p-5 flex flex-col items-center justify-center">
        <p class="brand-font text-8xl w-full text-primary text-left">DISCLAIMER!</p>
        <ul class="list-disc marker:text-primary text-2xl p-5">
            <li>
                <p class="regular-font text-xl text-on-surface text-left mt-7">Your pass will be generated on the
                    website by
                    monday.</p>
            </li>
            <li>
                <p class="regular-font text-xl text-on-surface text-left">You can still make a payment and enjoy the
                    early bird
                    offer.</p>
            </li>
            <li>
                <p class="regular-font text-xl text-on-surface text-left">Just to be safe make sure to take a
                    screenshot
                    of the
                    final payment screen and save the receipt.</p>
            </li>
            <li>
                <p class="regular-font text-xl text-on-surface text-left">We are sorry for this inconvenience.</p>
            </li>
            <li>
                <p class="regular-font text-xl text-on-surface text-left">Also make sure to enter the same details as entered on the fests website.</p>
            </li>
        </ul>
        <button class="w-full h-fit bg-primary py-1 brand-font text-3xl text-on-primary" on:click={() => {
            window.location.href = "https://payment.manipal.edu/Tech-solstice-nexus-Login"
        }}>Continue</button>
    </div>
</div>