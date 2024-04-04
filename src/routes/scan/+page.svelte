<script>
    import {enhance} from "$app/forms";
    import {gsap} from "gsap/dist/gsap";

    export let data;
    export let form;

    let passId;
    let selectedEventPriority;
    let selectedEventName;
    let isMahe;
    let errors = {passIdError: "", selectedEventPriorityError: ""};

    function checkPassId() {
        if (passId.length === 6) {
            errors.passIdError = "";
        } else {
            errors.passIdError = "Please Enter A Valid Pass Id"
        }
    }

    function checkSelectedEvent() {
        if (selectedEventPriority !== -1) {
            errors.selectedEventPriorityError = "";
        } else {
            errors.selectedEventPriorityError = "Please Select An Event";
        }
    }

    function attemptMarking({formData}) {
        formData.set("passId", passId);
        formData.set("selectedEventPriority", selectedEventPriority);
        for (let event of data.permission) {
            if (event.attributes.EventPriority === selectedEventPriority) {
                selectedEventName = event.attributes.EventName;
            }
        }
        formData.set("eventName", selectedEventName);
        formData.set("isMahe", isMahe);
    }

    function errorAnimation() {
        gsap.to('.error-box', {
            top: 0
        })
        gsap.to('.error-box', {
            top: "-100%",
            delay: 4,
        })
    }
    function successAnimation() {
        gsap.to('.success-box', {
            top: 0
        })
        gsap.to('.success-box', {
            top: "-100%",
            delay: 4,
        })
    }

    $: if (form?.error === true) {
        console.log("HELLO");
        errorAnimation();
    }
    $: if(form?.success === true) {
        successAnimation();
    }
</script>

<div class="h-screen w-full bg-surface relative">
    <div class="absolute z-[5] -top-[100%] h-fit w-full flex items-center justify-center pt-5 error-box">
        <div class="h-fit w-fit border-2 border-on-surface px-3 py-2">
            <p class="brand-font text-error text-3xl capitalize tracking-wide">{form?.detail}</p>
        </div>
    </div>
    <div class="absolute z-[5] -top-[100%] h-fit w-full flex items-center justify-center pt-5 success-box">
        <div class="h-fit w-fit border-2 border-on-surface px-3 py-2">
            <p class="brand-font text-success text-3xl capitalize tracking-wide">{form?.detail}</p>
        </div>
    </div>
    <div class="h-full w-full flex backdrop-blur-2xl data-form items-center justify-center z-[3] px-4 py-4">
        <button class="h-screen w-full bg-transparent absolute top-0"></button>
        <div class="h-fit w-fit relative border-2 border-on-surface bg-surface flex flex-col items-start justify-center z-[6] px-5 pt-5 gap-5">
            <div class="h-fit w-fit flex flex-col gap-1">
                <p class="brand-font text-primary text-[40px] leading-8 tracking-wide">CHECK PASS AND MARK
                    ATTENDANCE</p>
                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left mt-1">PASS
                    IDs ARE CASE SENSITIVE</p>
                <!--                <p class="regular-font text-on-primary-container/70 text-lg leading-5 tracking-wide text-left"></p>-->
            </div>
            <div class="h-fit w-full flex flex-col gap-2">
                <form action="?/markAttendance" method="post" use:enhance={(event) => attemptMarking(event)}>
                    <div class="form__group field mt-2 mb-2">
                        <select class="form__field regular-font bg-surface text-on-surface border-2 border-on-surface mb-10"
                                type="input"
                                required=""
                                bind:value={selectedEventPriority} on:change={checkSelectedEvent}>
                            <option value="-1" class="bg-surface text-on-surface" selected disabled>
                                Select An Event
                            </option>
                            {#each data.permission as event}
                                <option value="{event.attributes.EventPriority}"
                                        class="bg-surface text-on-surface">{event.attributes.EventName}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="form__group field mt-2 mb-2">
                        <select class="form__field regular-font bg-surface text-on-surface border-2 border-on-surface"
                                type="input"
                                required=""
                                bind:value={isMahe}>
                            <option value="-1" class="bg-surface text-on-surface" selected disabled>
                                MAHE Student?
                            </option>
                            <option value="{true}" class="bg-surface text-on-surface">YES</option>
                            <option value="{false}" class="bg-surface text-on-surface">NO</option>
                        </select>
                    </div>
                    <div class="form__group field mb-2">
                        <input type="input" class="form__field regular-font" placeholder="Pass Id" required=""
                               bind:value={passId} on:input={checkPassId}>
                        <label for="name" class="form__label regular-font">Pass Id</label>
                        <!--{#if form?.userNameError}-->
                        <!--    <p class="text-sm text-error regular-font from-form">{form.userNameError}</p>-->
                        <!--{/if}-->
                        <p class="text-sm text-error regular-font">{errors.passIdError}</p>
                    </div>
                    {#if !errors.passIdError && passId}
                        <button class="w-full h-fit bg-primary text-on-primary text-3xl py-1 brand-font mt-2 mb-2"
                                type="submit">
                            Submit
                        </button>
                    {/if}
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .form__group {
        position: relative;
        padding: 20px 0 0;
        width: 100%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: none;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 17px;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        font-size: 17px;
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: #9b9b9b;
        pointer-events: none;
    }

    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #490f72, #e1b6ff);
        border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 17px;
        color: #e1b6ff;
        font-weight: 700;
    }

    /* reset input */
    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }
</style>