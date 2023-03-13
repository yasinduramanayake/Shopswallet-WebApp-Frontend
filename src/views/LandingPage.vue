<template>
  <div style=" background-color: #625858;">
    <!-- <div class="flex-col hidden p-2 mt-8 sm:flex md:block w-72" v-if="settings">
      <img
        v-if="settings"
        :src="settings.strings.website.websiteIntroImage"
        class="w-44"
      />
      <p
        class="pt-5 text-sm font-light leading-normal text-gray-600 md:text-2l"
      >
        ShopsWallet {{ $t('landingpageLeft') }}
      </p>
      <div class="flex flex-row mt-4">
        <a :href="settings.strings.androidDownloadLink" target="__blank">
          <img src="/img/play-store.png" class="h-9" />
        </a>
        <a :href="settings.strings.iosDownloadLink" target="__blank">
          <img src="/img/app-store.png" class="h-9" />
        </a>
      </div>
    </div> -->
    <div v-if="settings">
      <div class="container">
        <div class="breaks"></div>


        <div class="flex flex-col mx-auto">
          <h1 style="color: white;">
            {{ $t("landingpageHeader") }}
          </h1>
          <p class="my-2 text-xs font-light text-white md:text-xl">
            {{ $t("landingpageSubHeader") }}
          </p>
        </div>
        <p class="mt-3 text-sm font-light text-white ">Choose a service</p>
      </div>

      <div class="breaks1"></div>

      <!-- <div style="background-color: #625858; opacity: 0.3; transition: 0.3s;">
          <div class="breaks"></div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5">
            <div v-for="vendor in vendors" :key="vendor.id" class="my-4">
              <div>
                <a
                  v-if="vendor"
                  :href="
                    `${vendor.id}/` +
                    sanitizeTitle(`${vendor.slug}/`) +
                    randomString(200)
                  "
                >
                
                  <div
                    class="flex flex-row items-center w-full h-24 p-3 rounded-md shadow-md bg-gray-50"
                  >
                    <img
                      v-if="vendor"
                      v-bind:src="vendor.logo"
                      class="w-16 h-16 mb-3"
                    />
                    <div class="ml-2">
                      <p class="font-medium md:font-bold">{{ vendor.name }}</p>
                      <p class="text-xs font-light md:text-sm">
                        {{ truncate(vendor.description, 85) }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> -->

      <div
        style="
         
          padding-left: 20px;
          padding-right: 20px;
        "
      >
   
        <div class="breaks"></div>

        <div class="row">
          <div class="col-3 my-4" v-for="vendor in vendors" :key="vendor.id">
            <div
              class="card"
              style="
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                transition: 0.9s;
                background-color: #e5e0e0;
              "
            >
              <a
                class="link-dark"
                style="text-decoration: none"
                v-if="vendor"
                :href="
                  `${vendor.id}/` +
                  sanitizeTitle(`${vendor.slug}/`) +
                  randomString(200)
                "
              >
                <div
                  class="flex flex-row items-center w-full h-40 p-3 rounded-md shadow-md"
                  style="opacity: 0.9"
                >
                  <img
                    v-if="vendor"
                    v-bind:src="vendor.logo"
                    class="w-16 h-16 mb-3"
                  />
                  <div class="ml-2">
                    <p class="font-medium md:font-bold">{{ vendor.name }}</p>
                    <p class="text-xs font-light md:text-sm">
                      {{ truncate(vendor.description, 85) }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="breaks"></div>
        <div class="breaks"></div>
        
      </div>

      <div class="flex flex-col mx-auto mt-8 rounded md:mt-20">
        <div class="flex p-3 md:justify-between md:p-8 bg-green-50">
          <div
            class="flex flex-col items-center justify-center w-full lg:w-112"
          >
            <p class="font-medium">{{ $t("landingpageSellerHeader") }}</p>
            <p class="my-3 text-center text-gray-500">
              {{ $t("landingpageSellerSubHeader") }}
            </p>
            <a
              class="px-3 py-2 text-white bg-green-400 rounded-md shadow-sm hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}register#vendor`"
              >{{ $t("landingpageSellerButton") }}</a
            >
          </div>
          <div class="flex items-center justify-center w-full lg:w-112">
            <img
              src="/img/storefront.png"
              class="w-24 mx-auto md:w-32"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mt-8 md:mt-20" id="services"  style="
         
         padding-left: 20px;
         padding-right: 20px;
       ">
        <!-- <p class="text-2xl font-semibold text-center text-black">
          What we offer
        </p>
        <p class="pt-2 mb-16 text-sm font-light text-center">
          Your favourite online food delivery partner
        </p> -->
        <div
          class="grid gap-4 text-center md:grid-cols-2 lg:grid-cols-4"
          v-if="settings"
        >
          <div
            class="flex flex-col items-center justify-center p-2 rounded-md lg:w-full"
            :style="{ 'background-color': settings.colors.accentColor }"
          >
            <img src="/img/order1.png" class="h-12 mx-auto" />
            <h6 class="my-1 text-sm text-white capitalize">
              {{ $t("landingpageSellerFeat1") }}
            </h6>
            <!-- <p class="mb-4 font-light text-center">
              You only need a few steps <br />
              in ordering food
            </p> -->
          </div>
          <div
            class="p-2 text-center rounded-md lg:w-full justify-content-center"
            :style="{ 'background-color': settings.colors.accentColor }"
          >
            <img src="/img/delivery-truck.png" class="h-12 mx-auto" />
            <h6 class="my-1 text-sm text-white capitalize">
              {{ $t("landingpageSellerFeat2") }}
            </h6>
            <!-- <p class="mb-4 font-light text-center">
              Delivery that is always ontime <br />
              even faster
            </p> -->
          </div>
          <div
            class="flex flex-col items-center justify-center p-2 rounded-md lg:w-full"
            :style="{ 'background-color': settings.colors.accentColor }"
          >
            <img src="/img/quality.png" class="h-12 mx-auto" />
            <h6 class="my-1 text-sm text-white capitalize">
              {{ $t("landingpageSellerFeat3") }}
            </h6>
            <!-- <p class="mb-4 font-light text-center">
              Not only fast for us quality is also <br />numbers
            </p> -->
          </div>
          <div
            class="flex flex-col items-center justify-center p-2 rounded-md lg:w-full"
            :style="{ 'background-color': settings.colors.accentColor }"
          >
            <img src="/img/payment.png" class="h-12 mx-auto" />
            <h6 class="my-1 text-sm text-white capitalize">
              {{ $t("landingpageSellerFeat4") }}
            </h6>
            <!-- <p class="mb-4 font-light text-center">
              Not only fast for us quality is also <br />numbers
            </p> -->
          </div>
        </div>
      </div>
      <div class="flex flex-col mx-auto mt-8 rounded-md md:mt-20">
        <div class="flex p-3 md:justify-between md:p-8 bg-green-50">
          <div
            class="flex flex-col items-center justify-center w-full lg:w-112"
          >
            <p class="font-medium">
              {{ $t("landingpageRide.landingpageRiderHeader") }}
            </p>
            <p class="my-3 text-center text-gray-500">
              {{ $t("landingpageRide.landingpageRiderSubHeader") }}
            </p>
            <a
              class="px-3 py-2 text-white bg-green-400 rounded-md shadow-sm hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}register#driver`"
              >{{ $t("landingpageSellerButton") }}</a
            >
          </div>
          <div class="flex items-center justify-center w-full lg:w-112">
            <img
              src="/img/delivery-rider.png"
              class="w-24 mx-auto md:w-32"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="flex" v-if="settings">
      <img src="/img/landingpage1.jpg" class="hidden h-full lg:block w-72" alt="" />
    </div> -->
  </div>
  <Download />
</template>
<script>
import axios from "axios";
import { SearchIcon } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";
import Download from "@/components/Downloads.vue";
export default {
  name: "Vendors",
  components: {
    SearchIcon,
    StarIcon,
    Download,
  },

  data() {
    return {
      vendors: null,
      settings: null,
      base_url: this.$store.state.baseUrl,
      search: null,
      types: null,
    };
  },

  mounted() {
    axios
      .get(this.base_url + "api/app/settings")
      .then((response) => {
        this.settings = response.data;
      })
      .catch((error) => console.log(error));

    axios
      .get(this.base_url + "api/vendor/types")
      .then((response) => {
        this.vendors = response.data;
      })
      .catch((error) => console.log(error));
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

    truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },

    // generate(entry) {
    //   let token = String(entry) + Math.random().toString(36);
    //   return token;
    // },
    sanitizeTitle(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
      // Letter "d"
      slug = slug.replace(/đ/gi, "d");
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, "");
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, "-");

      return slug;
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
