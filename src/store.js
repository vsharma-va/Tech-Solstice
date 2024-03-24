import {writable} from "svelte/store";

export const clickedPassRedirectToken = writable('');
export const beforeFormSubmissionPositionEvents = writable(0);
export const destroyRedirectPaymentCookie = writable(0);