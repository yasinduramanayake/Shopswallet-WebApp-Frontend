<template>
  <div class="container px-5 mx-auto mt-10 mb-5" v-if="settings">
    <div class="">
      <div class="p-5 mx-auto rounded shadow-lg sm:p-12 md:w-124">
        <p class="mb-5 font-semibold md:text-2xl">Forgot Password</p>
        <div>
           <vue-tel-input
              v-model="phone"
              mode="international"
              :enableCountryCode="true"
              :defaultCountry="'gh'"
              :autoFormat="false"
              :inputOptions="{ showDialCode: true, placeholder: '5555555555' }"
              v-on:country-changed="countryChanged"
            ></vue-tel-input>
          <div class="w-full mt-8" v-if="settings">
            <button
              type="button"
              :style="{ 'background-color': settings.colors.primaryColor }"
              @click="verifyPhone"
              class="w-full px-10 py-2 text-center text-white rounded"
            >
              Submit
            </button>
          </div>
          <div class="flex justify-center mt-8">
          <p class="text-sm text-gray-600">{{ $t('login.alreadyHaveAnAccount') }}</p>
          <router-link to="/login" class="ml-2 text-sm text-gray-600 cursor-pointer">{{ $t('nav.login') }}</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
  <Download />
</template>
<script>
import axios from "axios";
import { VueTelInput } from 'vue-tel-input'
import Download from "@/components/Downloads.vue";
import { notify } from "@kyvg/vue3-notification";
export default {
  name: "Login",
  components: {
    Download,
    VueTelInput,
  },
  data() {
    return {
      phoneNumber: null,
      phone: null,
      settings: null,
      base_url: this.$store.state.baseUrl,
      countryCode: null,
      bindProps: {
        mode: "international",
        defaultCountry: "GH",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        // placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "on",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: true
        }
      }
    };
  },

  mounted() {
    this.$store.commit("loading", true);
    axios
      .get(this.base_url + "api/app/settings")
      .then((response) => {
        this.$store.commit("loading", false);
        this.settings = response.data;
        // console.log(this.settings)
      })
      .catch((error) => console.log(error));
      // console.log(this.base_url)
  },

  methods: {

    randomString(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~$^*()";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },

    countryChanged(country) {
      this.country = country.iso2;
      this.code = country.dialCode;
    },

    verifyPhone() {
      let withoutLeading0 = this.phone.replace(/^0+/, "");
      this.phone = withoutLeading0
      this.phoneNumber = '+'+this.code+this.phone;
      this.$store.commit("loading", true);
       axios.get(this.base_url + "api/verify/phone", {
         params: {
          phone: this.phoneNumber,
         }
        })
        .then((response) => {
           this.$store.commit("loading", false);
           if ( this.settings.strings.enble_otp == "1" && this.settings.strings.otpGateway == "Firebase") {
            notify({
              type: "success",
              title: "Forgot Password",
              text: "You'll be redirected automatically",
            });
            localStorage.setItem("phone", JSON.stringify(this.phoneNumber));
            this.$router.push("/fp/firebase/verify/" + this.randomString(300));
          }else if (this.settings.strings.enble_otp == "1" && this.settings.strings.otpGateway != "None") {
            notify({
              type: "success",
              title: "Forgot Password",
              text: "Please check your phone for OTP",
            });
            localStorage.setItem("phone",JSON.stringify(this.phoneNumber));
            this.$router.push("/fp/verify/" + this.randomString(300));
          }else{
            notify({
              type: "success",
              title: "Forgot Password",
              text: response.data.message,
            });
          }
      
        })
        .catch((error) => {
          console.log(error);
          notify({
            type: "error",
            title: "Forgot Password",
            text: error.response.data.message,
          });
        })
        .finally(() => this.$store.commit("loading", false));
    
    },

    // forgotPassword() {
    //   this.$store.commit("loading", true);
    //   axios
    //     .post(this.base_url + "api/password/reset/init", {
    //       phone: this.phone,
    //       country_code: this.country_code,
    //     })
    //     .then((response) => {
    //       let password = response.data.data;
    //       notify({
    //         type: "success",
    //         title: "Forgot Password",
    //         text: response.data.message,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       notify({
    //         type: "error",
    //         title: "Forgot Password",
    //         text: error.response.data.message,
    //       });
    //     })
    //     .finally(() => this.$store.commit("loading", false));
    // },

    // countryChanged(country) {
    //   this.countryCode = country.dialCode;
    //   console.log(this.countryCode);
    // },
  },
};
</script>

