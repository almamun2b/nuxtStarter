import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Or Add this into css:[] in nuxt.comfig.ts recommended
// To Import all fas, fab, far icons IconPack
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// /* To Import specific icons */
// import {
//   faAnglesLeft,
//   faAnglesRight,
//   faAngleUp,
//   faAngleDown,
//   faAngleRight,
//   faAngleLeft,
//   faArrowRight,
//   faArrowLeft,
//   faChevronRight,
//   faChevronLeft,
//   faMagnifyingGlass,
//   faPlus,
//   faMinus,
//   faSpinner,
//   faTimes,
//   faLock,
//   faUser,
//   faPhone,
//   faEnvelope,
//   faClock,
//   faEye,
//   faEyeSlash,
//   faPencil,
//   faCheck,
//   faPause,
// } from "@fortawesome/free-solid-svg-icons";

// import {
//   faFacebook,
//   faXTwitter,
//   faInstagram,
//   faPinterest,
// } from "@fortawesome/free-brands-svg-icons";

// /* Then add icons to the library */
// library.add(
//   faAnglesLeft,
//   faAnglesRight,
//   faAngleUp,
//   faAngleDown,
//   faAngleRight,
//   faAngleLeft,
//   faArrowRight,
//   faArrowLeft,
//   faChevronRight,
//   faChevronLeft,
//   faMagnifyingGlass,
//   faPlus,
//   faMinus,
//   faSpinner,
//   faTimes,
//   faLock,
//   faUser,
//   faPhone,
//   faEnvelope,
//   faClock,
//   faEye,
//   faEyeSlash,
//   faPencil,
//   faCheck,
//   faPause,
//   faFacebook,
//   faXTwitter,
//   faInstagram,
//   faPinterest
// );


/* Add icons IconPack to library */
library.add(fas);
library.add(fab);
// library.add(far);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
