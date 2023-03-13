<template>
    <div class="product">
        <div class="container max-w-6xl px-5 mx-auto mt-10 mb-5" v-if="product">
                <nav class="w-full p-3 m-4 font-sans rounded bg-grey-light">
                    <ol class="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li><a :href="$router.resolve({name: 'Vendor', params: { id: product.vendor.id, slug: sanitizeTitle(`${product.vendor.name}`) }}).href"
                                class="mr-2 text-sm font-medium text-gray-900">{{ product.vendor.name }}</a></li>
                        <li><span class="mx-2">\</span></li>
                        <li class="text-sm">
                            <a class="font-medium text-gray-500 hover:text-gray-600" href="#">{{ product.name}}</a>
                        </li>
                    </ol>
                </nav>
                <div class="grid grid-cols-6 gap-2" v-if="settings">
                    <div class="col-span-full md:col-span-4 md:mr-10">
                        <img v-if="product.photo" v-bind:src="product.photo"
                            class="mx-auto mb-5 rounded-lg w-96 md:w-132">
                        <vue-horizontal ref="horizontal" class="horizontal" responsive v-if="product">
                            <div v-for="photo in product.photos" :key="photo.id" class="flex flex-row px-2 mb-10">
                                <a @click="selectedServiceImage(photo)"
                                    class="flex flex-col items-center justify-center p-2 border border-gray-200 hover:border-gray-600 hover:border-2 h-14">
                                    <img v-if="product" v-bind:src="photo" class="h-12 mx-auto rounded-md">
                                </a>
                            </div>
                        </vue-horizontal>
                    </div>
                    <div class="md:col-start-5 md:col-end-7 col-span-full">
                        <p class="mt-5 text-4xl font-light sm:mt-0 leading-large ">{{ product.name }}</p>
                        <span v-if="product.discount_price > 0">
                            <p class="pt-5 mt-3 text-2xl tracking-wide">{{ currency }}{{
                            product.discount_price.toFixed(2) }}</p>
                            <p class="pb-5 mt-3 text-2xl tracking-wide">{{ currency }}<span class="line-through">{{
                            product.price.toFixed(2) }}</span> </p>
                        </span>
                        <span v-else>
                            <p class="pt-5 mt-3 text-2xl tracking-wide">{{ currency }}{{ product.price.toFixed(2) }}</p>
                        </span>
                        <p class="pb-5 leading-7 text-gray-600">{{ product.description }}</p>

                        <!-- <div class="flex mb-5 space-x-4" v-if="product.vendor.vendor_type.slug != 'product'">
                            <div class="p-2 text-sm font-light text-black border border-green-600"
                                v-if="product.deliverable == 1">Deliverable</div>
                            <div class="p-2 text-xs font-light text-black border border-red-600"
                                v-if="product.deliverable == 0">Not Deliverable</div>
                            <div class="p-2 text-xs font-light text-black border border-gray-500 ">{{ product.capacity
                            }} {{ product.unit }}</div>
                            <div class="p-2 text-xs font-light text-black border border-gray-500">{{
                            product.package_count }} Item(s)</div>
                        </div> -->


                        <div class="mt-1" v-if="settings">

                            <button :style="{ 'background-color': settings.colors.primaryColor }"
                                @click="addServiceToCart(product)"
                                class="w-full px-3 py-5 mr-5 text-xs font-semibold text-white md:py-4">
                                {{ $t('product.continue') }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-20" v-if="product.option_groups">
                    <p class="mb-3 text-4xl" v-if="product.option_groups.length != '0'">{{ $t('product.optionHeader') }}
                    </p>
                    <p class="mt-4 text-sm text-gray-600" v-if="product.option_groups.length != '0'">{{
                    $t('product.optionSubHeader') }}</p>

                    <div v-for="option_group in product.option_groups" :key="option_group.id">
                        <p class="mt-4 text-xs font-medium md:text-xl">{{ option_group.name }}</p>

                        <div class="grid gap-5 md:grid-cols-5" v-if="option_group.multiple == 1">
                            <div class="mt-5 bg-white shadow-md rounded-xl md:w-44"
                                v-for="(option, index) in option_group.options.slice(0, 5)" :key="index">
                                <div class="flex mx-auto">
                                    <div class="flex items-center flex-shrink-0">
                                        <img class="object-contain w-14 h-14" v-if="option" v-bind:src="option.photo"
                                            alt="">
                                    </div>
                                    <div class="self-center px-2 pt-2 md:p-4">
                                        <h5 class="text-xs font-semibold text-gray-400 truncate">{{
                                        truncate(option.name, 13) }}</h5>
                                        <!-- <p class="text-xs text-gray-500">{{ option.description }}</p> -->
                                        <div class="flex flex-row space-x-2">
                                            <p class="text-xs text-center text-black">{{ currency }}{{ option.price }}
                                            </p>
                                            <label class="">
                                                <div
                                                    class="relative flex items-center w-4 h-4 bg-white border-2 border-gray-400 rounded-full ">
                                                    <input type="radio" class="absolute opacity-0"
                                                        v-model="selectedOption" :value="option">
                                                    <svg class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                                                        viewBox="0 0 20 20">
                                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                                    </svg>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="grid gap-5 md:grid-cols-5" v-else-if="option_group.multiple == 0">
                            <!-- .slice(0, 5) -->
                            <div class="mt-5 bg-white shadow-md rounded-xl md:w-44"
                                v-for="(option, index) in option_group.options" :key="index">
                                <div class="flex mx-auto">
                                    <div class="flex items-center flex-shrink-0">
                                        <img class="object-contain w-14 h-14" v-if="option" v-bind:src="option.photo"
                                            alt="">
                                    </div>
                                    <div class="self-center px-2 pt-2 md:p-4">
                                        <h5 class="text-xs font-semibold text-gray-400 truncate">{{
                                        truncate(option.name, 13) }}</h5>

                                        <div class="flex flex-row space-x-2">
                                            <p class="text-xs text-center text-black">{{ currency }}{{ option.price }}
                                            </p>
                                            <div class="flex items-center mb-4">
                                                <input id="default-checkbox" type="checkbox" v-model="selectedOptions"
                                                    :value="option"
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            <!-- </div> -->

        </div>
        <!-- <Recommended /> -->
    </div>
    <Download />
</template>

<script>
import axios from 'axios'
// import Recommended from '@/components/Recommended.vue'
import { notify } from "@kyvg/vue3-notification"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Download from '@/components/Downloads.vue'
import VueHorizontal from "vue-horizontal";
import 'sweetalert2/src/sweetalert2.scss'
import { PlusIcon, MinusIcon } from '@heroicons/vue/outline'
export default {
    name: 'Product',
    components: {
        // Recommended,
        Download,
        VueHorizontal,
        PlusIcon,
        MinusIcon
    },
    data() {
        return {
            product: null,
            currency: null,
            limit: 5,
            quantity: 1,
            selectedOptions: [],
            selectedOption: null,
            animationDown: {
                translateY: 'translateY(-100%)',
                translateY: 'translateY(100%)'
            },
            settings: null,
            base_url: this.$store.state.baseUrl
        }
    },
    computed: {
       

        serviceTotalPrice() {

            let total
            if (this.product.discount_price != 0) {
                total = Number(this.quantity) * Number(this.product.discount_price)
            }
            else {
                total = Number(this.quantity) * Number(this.product.price)
            }



            if (this.selectedOption) {
                total += this.selectedOption.price
            }
            if (this.selectedOptions) {
                this.selectedOptions.forEach((item, i) => {
                    total += Number(item.price);
                })
            }
            return total;
        },
    },
    mounted() {

        axios.get(this.base_url + 'api/services/' + this.$route.params.id)
        .then((response) => {
            this.product = response.data
            // console.log(response)
        })
        .catch(error => console.log(error))

        this.$store.dispatch('fetchSettings', this.items).then(() => {
            this.settings = this.$store.state.settings;
            this.currency = this.settings.strings.currency
        })
    },

    methods: {

        selectedServiceImage(image) {
            this.product.photo = image
        },

        truncate(str, n) {
            return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
        },

        sanitizeTitle(title) {
            var slug = "";
            // Change to lower case
            var titleLower = title.toLowerCase();
            // Letter "e"
            slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
            // Letter "a"
            slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
            // Letter "o"
            slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
            // Letter "u"
            slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
            // Letter "d"
            slug = slug.replace(/đ/gi, 'd');
            // Trim the last whitespace
            slug = slug.replace(/\s*$/g, '');
            // Change whitespace to "-"
            slug = slug.replace(/\s+/g, '-');

            return slug;
        },

        addServiceToCart(product, quantity = this.quantity, selectedOption = this.selectedOption, selectedOptions = this.selectedOptions) {

            if (product.available_qty >= 1 || product.available_qty == null) {
                if (selectedOption) {
                    this.$store.commit('addToCart', { product, quantity, selectedOption, selectedOptions })

                } else if (this.selectedOptions) {

                    this.$store.commit('addToCart', { product, quantity, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions })

                } else {
                    this.$store.commit('addToCart', { product, quantity });
                }
            } else if (product.available_qty == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'product out of stock',
                })
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
                this.quantity--
            }
        },

    }
}
</script>

