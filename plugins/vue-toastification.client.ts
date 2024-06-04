// import Toast from "vue-toastification";
import Toast, { useToast, POSITION, type PluginOptions } from "vue-toastification";
import type { ErrorMessage } from "~/types/toaster";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// You can set your default options here
const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  hideProgressBar: false,
  icon: true,
  pauseOnHover: true,
  draggablePercent: 1,
  draggable: true,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  showCloseButtonOnHover: false,
  newestOnTop: true,
  closeButton: "button",
};

const toast = useToast();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
  nuxtApp.provide("toast", toast);
});

// export default defineNuxtPlugin((nuxtApp) => {
//   // Doing something with nuxtApp
//   nuxtApp.vueApp.use(Toast, options);
//   nuxtApp.provide("toast", (name: string, value: ErrorMessage) => {
//     if (name === "error") {
//       $toast.error(value.message, { toastClassName: value.className });
//     } else if (name === "success") {
//       $toast.success(value.message, { toastClassName: value.className });
//     } else if (name === "clear") {
//       $toast.clear();
//     }
//   });
// });
