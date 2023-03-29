<template>
  <div class="service product-page">
    <div class="container max-w-6xl mx-auto mt-10 mb-5" v-if="product">
      <nav class="w-full p-3 m-4 font-sans rounded bg-grey-light">
        <ol
          class="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <a
              :href="
                $router.resolve({
                  name: 'Vendor',
                  params: {
                    id: product.vendor.id,
                    slug: sanitizeTitle(`${product.vendor.name}`),
                  },
                }).href
              "
              class="mr-2 text-sm font-medium text-gray-900"
              >{{ product.vendor.name }}</a
            >
          </li>
          <li><span class="mx-2">\</span></li>
          <li class="text-sm">
            <a class="font-medium text-gray-500 hover:text-gray-600" href="#">{{
              product.name
            }}</a>
          </li>
        </ol>
      </nav>
      <div class="grid grid-cols-12 gap-2 product-slide" v-if="settings">
        <div class="col-span-full md:col-span-6 product-slide-inner">
          <div class="main-img" v-if="product.photo">
            <img
              v-bind:src="product.photo"
              class="mx-auto mb-5 rounded-lg w-96 md:w-132"
            />
          </div>
          <vue-horizontal
            ref="horizontal"
            class="horizontal"
            responsive
            v-if="product"
          >
            <div
              v-for="photo in product.photos"
              :key="photo.id"
              class="flex flex-row px-2 mb-10 horizontal-slide"
            >
              <a
                @click="selectedImage(photo)"
                class="flex flex-col items-center justify-center p-2 border border-gray-200 hover:border-gray-600 hover:border-2 h-16"
              >
                <img
                  v-if="product"
                  v-bind:src="photo"
                  class="h-12 mx-auto rounded-md"
                />
              </a>
            </div>
          </vue-horizontal>
        </div>
        <div class="md:col-start-8 col-span-full product-details">
          <p
            class="text-4xl font-extrabold sm:mt-0 leading-large heading capitalize"
          >
            {{ product.name }}
          </p>
          <div class="d-flex align-items-center">
            <div v-for="(item, index) in 4" :key="index">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
                viewBox="0 0 576 512"
              >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4"
              viewBox="0 0 576 512"
            >
              <path
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
              />
            </svg>
          </div>
          <hr />

          <span v-if="product.discount_price > 0">
            <div class="flex">
              <!-- <p class="pt-2 text-2xl pr-5 text-gray-400">Price:</p> -->
              <p
                class="pt-2 text-3xl font-bold text-red-800 tracking-wide pr-3"
              >
                {{ currency }} {{ product.discount_price.toFixed(2) }}
              </p>
              <p class="pt-3 text-base tracking-wide">
                <span class="line-through text-gray-400">
                  {{ currency }}{{ product.price.toFixed(2) }}</span
                >
              </p>
            </div>
            <!-- <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide">
             {{ currency }} {{ product.discount_price.toFixed(2) }}
            </p>  -->
            <!-- <p class="pb-2 text-2xl tracking-wide">
              {{ currency
              }}<span class="line-through">{{ product.price.toFixed(2) }}</span>
            </p> -->
          </span>
          <span v-else>
            <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide pr-3">
              {{ currency }} {{ product.price.toFixed(2) }}
            </p>
          </span>
          <p class="pb-2 leading-7 text-gray-600">{{ product.description }}</p>

          <div
            class="flex mb-4 space-x-4"
            v-if="product.vendor.vendor_type.slug != 'service'"
          >
            <div
              class="p-2 text-sm font-light border bg-green-800 text-white rounded-full px-4 border-green-600 shadow-md"
              v-if="product.deliverable == 1"
            >
              Deliverable
            </div>
            <div
              class="p-2 text-xs font-light text-white border bg-red-800 border-red-600 rounded-full px-4"
              v-if="product.deliverable == 0"
            >
              Not Deliverable
            </div>
            <div class="p-2 text-sm font-normal text-black">
              {{ product.capacity }} {{ product.unit }}
            </div>
            <div
              class="p-2 text-xs font-light text-black border bg-gray-200 border-gray-500 rounded-full px-4"
            >
              {{ product.package_count }} Item(s)
            </div>
          </div>

          <!-- <div v-if="product.option_groups">
                    <p class="mb-3 text-4xl" v-if="product.option_groups.length != '0'">{{ $t('product.optionHeader') }}</p>
                    <p class="mt-4 text-sm text-gray-600" v-if="product.option_groups.length != '0'">{{ $t('product.optionSubHeader') }}</p>
                     <select v-model="selectedOption" id="" class="block w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                     <option selected>Select Options</option>
                        <optgroup  v-for="option_group in product.option_groups" :key="option_group.id" :label=" option_group.name">
                            <option  :value="option" v-for="(option, index) in option_group.options" :key="index">
                                {{ truncate(option.name, 13) }}
                            </option>
                        </optgroup>
                    </select>    
                </div> -->

          <div class="flex" v-if="product.vendor.vendor_type.slug != 'service'">
            <p class="flex items-center px-2 text-sm mt-3">
              {{ $t("product.quantity") }}:
            </p>
            <!-- <div> -->
            <div class="flex items-center">
              <button
                class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-full cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                @click="decrement()"
              >
                <MinusIcon class="w-6 h-6 text-gray-500" />
              </button>
              <div class="w-10 h-10 overflow-hidden">
                <input
                  class="w-full h-full text-lg font-light text-center"
                  v-model="quantity"
                />
              </div>
              <button
                class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-full cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                @click="increment(product)"
              >
                <PlusIcon class="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <!-- </div> -->
          </div>
          <!-- <div class=""  v-if="product.available_qty > 0">
                    <p class="my-5 text-xs">
                        {{ $t('Instock') }}: <span>{{ product.available_qty }}</span>
                    </p>
                </div>
                <div v-else>
                    <p class="my-5 text-xs">
                        {{ $t('Outofstock') }}
                    </p>
                </div> -->
          <div class="mt-4 btn-wrap" v-if="settings">
            <button
              :style="{ 'background-color': settings.colors.primaryColor }"
              @click="addToCart(product)"
              class="w-full px-3 py-3 mr-5 text-xs font-semibold text-white md:py-4"
            >
              {{ $t("product.addtocart") }} {{ currency }}
              {{ totalPrice.toFixed(2) }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="card grid grid-cols-6 gap-2 product-slide"
        aria-hidden="true"
        v-if="settings == null"
      >
        <div class="card-body">
          <div class="row card-text placeholder-glow">
            <div class="col-md-8 col-12 product-img-placeholder">
              <div class="product-img-placeholder--1">
                <span class="placeholder placeholder-lg col-10"></span>
              </div>
              <div class="product-img-placeholder--2 mt-4">
                <div class="placeholder placeholder-lg col-2"></div>
              </div>
            </div>
            <div
              class="col-md-4 col-12 card-text placeholder-glow mt-10 md:mt-0"
            >
              <span class="placeholder placeholder-lg col-7"></span>
              <span class="placeholder placeholder-lg col-7 mt-4"></span>
              <span class="placeholder placeholder-lg col-7 mt-4"></span>
              <div class="mt-4">
                <span class="placeholder placeholder-lg mt-2 col-12"></span>
                <span class="placeholder placeholder-lg mt-2 col-12"></span>
                <span class="placeholder placeholder-lg mt-2 col-12"></span>
                <span class="placeholder placeholder-lg mt-2 col-12"></span>
                <span class="placeholder placeholder-lg mt-2 col-12"></span>
              </div>
              <div class="mt-5">
                <span class="placeholder placeholder-lg col-2 mr-2"></span>
                <span class="placeholder placeholder-lg col-3 mr-2"></span>
                <span class="placeholder placeholder-lg col-2 mr-2"></span>
              </div>
              <div class="mt-4">
                <span class="placeholder placeholder-lg col-6"></span>
              </div>
              <div class="mt-2">
                <span class="placeholder placeholder-lg col-12"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20" v-if="product.option_groups">
        <p class="mb-3 text-4xl" v-if="product.option_groups.length != '0'">
          {{ $t("product.optionHeader") }}
        </p>
        <p
          class="mt-4 text-sm text-gray-600"
          v-if="product.option_groups.length != '0'"
        >
          {{ $t("product.optionSubHeader") }}
        </p>

        <div
          v-for="option_group in product.option_groups"
          :key="option_group.id"
        >
          <p class="mt-4 text-xs font-medium md:text-xl">
            {{ option_group.name }}
          </p>

          <div
            class="grid gap-5 md:grid-cols-5"
            v-if="option_group.multiple == 1"
          >
            <div
              class="mt-5 bg-white shadow-md rounded-xl md:w-44"
              v-for="(option, index) in option_group.options.slice(0, 5)"
              :key="index"
            >
              <div class="flex mx-auto">
                <div class="flex items-center flex-shrink-0">
                  <img
                    class="object-contain w-14 h-14"
                    v-if="option"
                    v-bind:src="option.photo"
                    alt=""
                  />
                </div>
                <div class="self-center px-2 pt-2 md:p-4">
                  <h5 class="text-xs font-semibold text-gray-400 truncate">
                    {{ truncate(option.name, 13) }}
                  </h5>
                  <!-- <p class="text-xs text-gray-500">{{ option.description }}</p> -->
                  <div class="flex flex-row space-x-2">
                    <p class="text-xs text-center text-black">
                      {{ currency }}{{ option.price }}
                    </p>
                    <label class="">
                      <div
                        class="relative flex items-center w-4 h-4 bg-white border-2 border-gray-400 rounded-full"
                      >
                        <input
                          type="radio"
                          class="absolute opacity-0"
                          v-model="selectedOption"
                          :value="option"
                        />
                        <svg
                          class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid gap-5 md:grid-cols-5"
            v-else-if="option_group.multiple == 0"
          >
            <!-- .slice(0, 5) -->
            <div
              class="mt-5 bg-white shadow-md rounded-xl md:w-44"
              v-for="(option, index) in option_group.options"
              :key="index"
            >
              <div class="flex mx-auto">
                <div class="flex items-center flex-shrink-0">
                  <img
                    class="object-contain w-14 h-14"
                    v-if="option"
                    v-bind:src="option.photo"
                    alt=""
                  />
                </div>
                <div class="self-center px-2 pt-2 md:p-4">
                  <h5 class="text-xs font-semibold text-gray-400 truncate">
                    {{ truncate(option.name, 13) }}
                  </h5>

                  <div class="flex flex-row space-x-2">
                    <p class="text-xs text-center text-black">
                      {{ currency }}{{ option.price }}
                    </p>
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        v-model="selectedOptions"
                        :value="option"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Recommended /> -->
  </div>
  <Download />
</template>

<script>
import axios from "axios";
// import Recommended from '@/components/Recommended.vue'
import { notify } from "@kyvg/vue3-notification";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Download from "@/components/Downloads.vue";
import VueHorizontal from "vue-horizontal";
import "sweetalert2/src/sweetalert2.scss";
import { PlusIcon, MinusIcon } from "@heroicons/vue/outline";
export default {
  name: "Product",
  components: {
    // Recommended,
    Download,
    VueHorizontal,
    PlusIcon,
    MinusIcon,
  },
  data() {
    return {
      product: null,
      service: null,
      currency: null,
      limit: 5,
      quantity: 1,
      selectedOptions: [],
      selectedOption: null,
      animationDown: {
        translateY: "translateY(-100%)",
        translateY: "translateY(100%)",
      },
      settings: null,
      base_url: this.$store.state.baseUrl,
    };
  },
  computed: {
    totalPrice() {
      let total;
      if (this.product.discount_price != 0) {
        total = Number(this.quantity) * Number(this.product.discount_price);
      } else {
        total = Number(this.quantity) * Number(this.product.price);
      }

      if (this.selectedOption) {
        total += this.selectedOption.price;
      }
      if (this.selectedOptions) {
        this.selectedOptions.forEach((item, i) => {
          total += Number(item.price);
        });
      }
      return total;
    },

    serviceTotalPrice() {
      let total;
      if (this.service.discount_price != 0) {
        total = Number(this.quantity) * Number(this.service.discount_price);
      } else {
        total = Number(this.quantity) * Number(this.service.price);
      }

      if (this.selectedOption) {
        total += this.selectedOption.price;
      }
      if (this.selectedOptions) {
        this.selectedOptions.forEach((item, i) => {
          total += Number(item.price);
        });
      }
      return total;
    },
  },
  mounted() {
    axios
      .get(this.base_url + "api/products/" + this.$route.params.id)
      .then((response) => {
        this.product = response.data;
        // console.log(this.product)
      })
      .catch((error) => console.log(error));

    axios
      .get(this.base_url + "api/services/" + this.$route.params.id)
      .then((response) => {
        this.service = response.data;
        // console.log(this.service)
      })
      .catch((error) => console.log(error));

    this.$store.dispatch("fetchSettings", this.items).then(() => {
      this.settings = this.$store.state.settings;
      this.currency = this.settings.strings.currency;
    });
  },

  methods: {
    selectedImage(image) {
      this.product.photo = image;
    },

    selectedServiceImage(image) {
      this.service.photo = image;
    },

    truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },

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

    addToCart(
      product,
      quantity = this.quantity,
      selectedOption = this.selectedOption,
      selectedOptions = this.selectedOptions
    ) {
      if (product.available_qty >= 1 || product.available_qty == null) {
        if (selectedOption) {
          this.$store.commit("addToCart", {
            product,
            quantity,
            selectedOption,
            selectedOptions,
          });
        } else if (this.selectedOptions) {
          this.$store.commit("addToCart", {
            product,
            quantity,
            selectedOption: this.selectedOption,
            selectedOptions: this.selectedOptions,
          });
        } else {
          this.$store.commit("addToCart", { product, quantity });
        }
      } else if (product.available_qty == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Product out of stock",
        });
      }
    },

    addServiceToCart(
      service,
      quantity = this.quantity,
      selectedOption = this.selectedOption,
      selectedOptions = this.selectedOptions
    ) {
      if (service.available_qty >= 1 || service.available_qty == null) {
        if (selectedOption) {
          this.$store.commit("addToCart", {
            service,
            quantity,
            selectedOption,
            selectedOptions,
          });
        } else if (this.selectedOptions) {
          this.$store.commit("addToCart", {
            service,
            quantity,
            selectedOption: this.selectedOption,
            selectedOptions: this.selectedOptions,
          });
        } else {
          this.$store.commit("addToCart", { service, quantity });
        }
      } else if (service.available_qty == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "service out of stock",
        });
      }
    },

    increment(product) {
      if (product.available_qty == 0) {
        notify({
          type: "error",
          title: "Cart",
          text: "Product out of stock",
        });
      } else {
        this.quantity++;
        if (product.discount_price != 0) {
          this.totalPrice = product.discount_price + this.quantity;
        } else {
          this.totalPrice = product.price + this.quantity;
        }
      }
    },

    decrement() {
      if (this.quantity === 1) {
        notify({
          type: "error",
          title: "Cart",
          text: "You cannot add 0 product",
        });
      } else {
        this.quantity--;
      }
    },
  },
};
</script>
