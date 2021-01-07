import { cartEvent } from "./cart-events.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", cartEvent);
} else {
  cartEvent();
}
