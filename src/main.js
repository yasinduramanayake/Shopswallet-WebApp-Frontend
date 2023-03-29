import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import "./tailwind.css";
import "../src/assets/css/style.css";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import i18n from "./i18n";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faRocket, faTabletScreenButton, faCreditCard } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faRocket, faTabletScreenButton, faCreditCard)

// Vue.config.productionTip = false

var mapKey = store.state.mapApiKey;
let $mapkey;
function test() {
  store.dispatch("fetchSettings").then(() => {
    let settings = store.state.settings;
    $mapkey = settings.strings.google_maps_key;
    // console.log($mapkey)
    return $mapkey;
  });
}
test;
console.log($mapkey);

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(Notifications)
  .use(VueSweetalert2)
  .use(VueTelInput)
  .use(VueGoogleMaps, {
    load: {
      key: mapKey,
      libraries: "places", // This is required if you use the Autocomplete plugin
    },
    installComponents: true,
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");

const firebaseConfig = {
  apiKey: mapKey,

  authDomain: "fuodz-e9ebc.firebaseapp.com",

  projectId: "fuodz-e9ebc",

  storageBucket: "fuodz-e9ebc.appspot.com",

  messagingSenderId: "977502122572",

  appId: "1:977502122572:web:13da9a2fe4072357c3bae9",

  measurementId: "G-J87MPMLTF6",
};

firebase.initializeApp(firebaseConfig);

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.showLoader) {
      this.$store.commit("loading", true);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.config.showLoader) {
      this.$store.commit("loading", false);
    }
    return Promise.reject(error);
  }
);

require("@/assets/scss/landingpage.scss");
require("@/assets/scss/productPage.scss");

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data

    if (response.config.showLoader) {
      this.$store.commit("loading", true);
    }
    return response;
  },
  function (error) {
    if (error.config.showLoader) {
      this.$store.commit("loading", false);
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {

//         originalRequest._retry = true;
//         localStorage.removeItem('authToken')
//         localStorage.removeItem('user')
//         // store.dispatch('Logout')
//         return router.push('/login')
//     }
//   }
// })
