<template>
  <div class="mt-10 sm:mt-0" v-show="isLoggedIn">
    <div class="max-w-xl mx-auto mt-5 overflow-hidden shadow sm:rounded-md">
      <div class="">
        <!-- <form action="#" method="POST"> -->
        <div class="">
          <div class="px-4 py-5 bg-white sm:p-6" v-if="packageTypeView == true">
            <p class="font-bold">{{ $t('parcel.sendPackages') }}</p>
            <div class="flex justify-between">
              <p class="my-1 text-xs font-light text-gray-500">
                {{ $t('parcel.subHeader2') }}
              </p>
              <!-- <button @click="clearAll()" class="text-sm text-green-400">
                {{ $t('parcel.clearAll') }}
              </button> -->
            </div>

            <!-- <p class="text-xl font-extrabold">Package Type</p> -->
            <div class="flex flex-col mt-5">
              <div class="grid grid-cols-1 gap-2 md:grid-cols-1">
                <div
                  class="flex items-center justify-between w-full p-2 mb-3 border border-gray-100 rounded shadow focus:border-blue-400"
                  v-for="packageType in packageTypes" :key="packageType.id">
                  <img :src="packageType.photo" class="h-12" alt="">
                  <div class=" w-88">
                    <h5 class="text-sm text-gray-600">{{ packageType.name }}</h5>
                    <p class="text-xs text-gray-500 truncate">{{ packageType.description }}</p>
                  </div>
                  <input type="radio" v-model="selectedPackageType" :value="packageType"
                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </div>
              </div>
              <div v-if="selectedPackageType == null" class="w-24 p-2 text-center text-gray-500 bg-gray-300 rounded">
                Next</div>
              <button v-else @click="toAddress" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
            </div>

          </div>
          <div class="px-4 py-5 bg-white sm:p-6" v-if="packageTypeView == false && addressView == true">
            <p class="font-bold">{{ $t('parcel.deliveryInfo') }}</p>
            <!-- <div class="flex justify-between">
              <p class="my-1 text-xs font-light text-gray-500">
                {{ $t('parcel.subHeader2') }}
              </p>
            </div> -->
            <div class="flex flex-col">

              <!-- stops -->

              <div v-for="(input, index) in deliveryStops" :key="index" class="mb-2">

                <!-- pickup location input -->
                <div class="" v-if="index == 0">
                  <label for="from" class="space-x-2 text-xl font-medium text-gray-700">
                    <div class="flex justify-between">
                      <div class="flex space-x-2">
                        <TruckIcon class="w-3 h-3 mt-1 text-green-500 md:w-6 md:h-6" aria-hidden="true" />
                        <span class="block mt-1 text-sm font-medium text-gray-700">{{ $t('parcel.fromLocation') }}<span
                            class="text-red-500">*</span>
                        </span>
                      </div>
                      <a href="/profile" class="text-sm font-medium text-green-500 hover:underline">{{ $t('addAddress')
                      }}</a>
                    </div>
                  </label>
                  <div class="flex items-center input wrapper">
                    <select id="to" v-model="deliveryStops[0]"
                      class="block w-full px-3 py-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                      <option v-for="from in addresses" :value="from" :key="from.id">
                        {{ from.name }} [{{ from.address }}]
                      </option>
                    </select>

                  </div>
                </div>
                <!-- other stops -->
                <div v-if="index > 0">
                  <label for="to" class="block space-x-2 text-xl font-medium text-gray-700 sm:flex">
                    <LocationMarkerIcon class="w-3 h-3 mt-1 text-red-500 md:w-6 md:h-6" aria-hidden="true" />
                    <span class="block mt-1 text-sm font-medium text-gray-700">{{ $t('parcel.stopLocation') }}<span
                        class="text-red-500">*</span>
                    </span>
                  </label>

                  <div class="flex items-center input wrapper">
                    <select required id="to" v-model="deliveryStops[index]"
                      class="block w-full px-3 py-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                      <option v-for="to in addresses" :value="to" :key="to.id">
                        {{ to.name }} [{{ to.address }}]
                      </option>
                    </select>



                    <button v-if="deliveryStops.length > 2" @click="removeField(index, deliveryStops)">
                      <MinusCircleIcon class="w-3 h-3 mt-1 text-red-500 md:w-6 md:h-6" aria-hidden="true" />
                    </button>

                  </div>
                </div>
              </div>
              <button class="w-full p-2 my-2 text-white bg-blue-500 rounded" @click="addField({}, deliveryStops)">
                Add stop
              </button>
            </div>
            <div class="flex justify-between">
              <button @click="backToPackageType" class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>
              <div v-if="!canNextStopsSelection()" class="w-24 p-2 text-center text-gray-500 bg-gray-300 rounded">Next
              </div>
              <button v-else @click="toCourier" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
            </div>

          </div>
          <div class="px-4 py-5 bg-white sm:p-6"
            v-if="packageTypeView == false && addressView == false && courierView == true">
            <p class="font-bold">{{ $t('parcel.sendPackages') }}</p>
            <div class="flex justify-between">
              <p class="my-1 text-xs font-light text-gray-500">
                {{ $t('parcel.subHeader2') }}
              </p>
              <!-- <button @click="clearAll()" class="text-sm text-green-400">
                {{ $t('parcel.clearAll') }}
              </button> -->
            </div>

            <!-- <p class="text-xl font-extrabold">Package Type</p> -->
            <div class="flex flex-col mt-5">
              <div class="grid grid-cols-1 gap-2 md:grid-cols-1">
                <span class="" v-if="couriers.length > 0">
                  <div
                    class="flex items-center justify-between w-full p-2 mb-3 border border-gray-100 rounded shadow focus:border-blue-400"
                    v-for="courier in couriers" :key="courier.id">
                    <img :src="courier.feature_image" class="h-8" alt="">
                    <div class=" w-88">
                      <h5 class="text-sm text-gray-600">{{ courier.name }}</h5>
                      <p class="text-xs text-gray-500 truncate">{{ courier.description }}</p>
                    </div>
                    <input type="radio" v-model="selectedCourier" :value="courier"
                      class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </div>
                </span>
                <p v-else class="text-sm font-light text-center text-gray-500">No Courier for this
                  location</p>
              </div>
              <div class="flex justify-between mt-5">
                <button @click="backToAddress" class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>
                <div v-if="selectedCourier == null" class="w-24 p-2 text-center text-gray-500 bg-gray-300 rounded">
                  Next</div>
                <button v-else @click="toRecipients" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
              </div>
            </div>

          </div>
          <div class="px-4 py-5 bg-white sm:p-6"
            v-if="packageTypeView == false && addressView == false && courierView == false && recipientView == true">
            <p class="mb-1 text-3xl font-extrabold">{{ $t('parcel.recipients') }}</p>
            <p class="mb-5 text-xs font-light text-gray-500">{{ $t('parcel.recipientInfo') }}</p>

            <div class="flex flex-col" v-for="(stop, index) in deliveryStops" :key="index">
              <p>{{ $t('parcel.contactInfo') }}({{ stop.name }})</p>


              <!-- <div  v-for="(recipient, i) in recipients" :key="i"> -->

              <div class="mb-3">
                <label for="name" class="block mt-1 space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <UserIcon class="w-4 h-4 mt-1 text-green-500" aria-hidden="true" />
                  <span>{{ $t('login.name') }} <span class="text-red-500">*</span></span>
                </label>
                <input type="text" v-model="recipients[index].name" placeholder="John Doe"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>


              <div class="mb-3">
                <label for="phone" class="block mt-1 space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <PhoneIcon class="w-4 h-4 mt-1 text-green-500" aria-hidden="true" />
                  <span>{{ $t('login.phone') }} <span class="text-red-500">*</span></span>
                </label>
                <input type="tel" v-model="recipients[index].phone" id="phone" placeholder="08000000000"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>


              <div class="">
                <label for="note" class="block mt-1 space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <AnnotationIcon class="w-4 h-4 mt-1 text-green-500" aria-hidden="true" />
                  <span>{{ $t('parcel.notes') }}</span>
                </label>
                <textarea id="about" v-model="recipients[index].note" rows="3"
                  class="block w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com" />
              </div>


              <!-- </div> -->


              <!-- <p class="my-2 text-xs text-gray-500">By confirming I accept this order doesn’t contain illegal/resticted items, if illegal/restricted items are found by Dunzo Partner, they may report it to the law enforcement authorities. Terms and Conditions</p> -->
            </div>


            <div class="flex justify-between mt-5">
              <button @click="backToCourier" class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>
              <button @click="recipientsIsValid" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
            </div>

          </div>
          <div class="px-4 py-5 bg-white sm:p-6"
            v-if="packageTypeView == false && addressView == false && courierView == false && recipientView == false && parametersView == true">
            <p class="mb-1 text-3xl font-extrabold">{{ $t('parcel.packageParameters') }}</p>
            <p class="mb-5 text-xs font-light text-gray-500">{{ $t('parcel.subHeader3') }}</p>
            <div class="flex flex-col">
              <div class="mb-3">
                <label for="weight" class="block space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <span>{{ $t('parcel.weight') }}(kg) <span class="text-red-500">*</span></span>
                </label>
                <input type="number" v-model="parameters.weight" name="weight" id="weight" placeholder="10"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              <div class="mb-3">
                <label for="width" class="block space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <span>{{ $t('parcel.width') }}(cm)</span>
                </label>
                <input type="number" v-model="parameters.width" name="width" id="width" placeholder="10"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div class="mb-3">
                <label for="height" class="block space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  <span>{{ $t('parcel.height') }}(kg)</span>
                </label>
                <input type="number" v-model="parameters.height" name="height" id="height" placeholder="10"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>

              <div class="">
                <label for="plength" class="block space-x-2 text-sm font-medium text-gray-700 sm:flex">
                  {{ $t('parcel.length') }}(kg)
                </label>
                <input type="number" v-model="parameters.length" name="plength" id="plength" placeholder="10"
                  class="block w-full px-3 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <button @click="backToCourier" class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>
              <div
                v-if="parameters.weight == 0 && parameters.width == 0 && parameters.height == 0 && parameters.length == 0"
                class="w-24 p-2 text-center text-gray-500 bg-gray-300 rounded">Next</div>
              <button v-else @click="toSummary" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
            </div>

          </div>
          <div class="px-4 py-5 bg-white sm:p-6"
            v-if="packageTypeView == false && addressView == false && courierView == false && recipientView == false && parametersView == false && summaryView == true">
            <div class="px-4 py-5 bg-white sm:p-6">
              <p class="mb-5 text-2xl font-extrabold">{{ $t('cart.orderSummary') }}</p>
              <div class="flex flex-col">
                <p class="mt-5 mb-1 text-sm font-medium ">{{ $t('parcel.packageTypes') }}</p>
                <div class="p-5 border-2 border-green-500 rounded-md shadow-md">
                  <div class="flex flex-row space-x-2" v-if="selectedPackage">
                    <img :src="selectedPackage.photo" class="w-8 h-8">
                    <div>
                      <p class="text-xs font-medium text-gray-500">{{ selectedPackage.name }}</p>
                      <p class="text-xs font-light text-gray-500">{{ selectedPackage.description }}</p>
                    </div>
                  </div>
                </div>
                <p class="mt-5 mb-1 text-sm font-medium ">{{ $t('parcel.courierVendors') }}</p>
                <div class="p-5 border-2 border-green-500 rounded-md shadow-md">
                  <div class="flex flex-row space-x-2" v-if="selectedPackageCourier">
                    <img :src="selectedPackageCourier.logo" class="w-8 h-8">
                    <div>
                      <p class="text-xs font-medium text-gray-500">{{ selectedPackageCourier.name }}</p>
                      <p class="text-sm font-light text-gray-500">{{ selectedPackageCourier.description }}</p>
                    </div>
                  </div>
                </div>
                <p class="mt-5 mb-1 text-sm font-medium ">{{ $t('parcel.deliveryDetails') }}</p>
                <div class="p-5 border-2 border-green-500 rounded-md shadow-md">
                  <div class="grid gap-2 md:grid-cols-2" v-if="deliveryStops">

                    <!-- <div> -->
                    <p class="text-xs font-bold text-gray-700">{{ $t('parcel.pickup') }}</p>
                    <!-- <p class="text-xs font-normal text-gray-500">{{ deliveryStops[0].name }}</p> -->
                    <!-- </div> -->
                    <p class="text-xs font-bold text-gray-700">{{ $t('parcel.dropoffs') }}</p>
                    <div v-for="drop in deliveryStops" :key="drop.id">

                      <p class="text-xs font-normal text-gray-500">{{ drop.name }}</p>
                    </div>
                  </div>

                  <!-- <div class="grid gap-2 mt-3 md:grid-cols-2">
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.date') }}</p>
                      <p class="text-xs font-normal text-gray-500" v-if="date">{{ date }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.time') }}</p>
                      <p class="text-xs font-normal text-gray-500" v-if="time">{{ time }}</p>
                    </div>
                  </div> -->
                </div>
                <p class="mt-5 mb-1 text-sm font-medium ">{{ $t('parcel.recipientInfo') }}</p>
                <div class="p-5 border-2 border-green-500 rounded-md shadow-md">
                  <div class="flex justify-between" v-for="selectedRecipient in selectedRecipients"
                    :key="selectedRecipient">
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('login.name') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedRecipient.name }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('login.phone') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedRecipient.phone }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.notes') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedRecipient.note }}</p>
                    </div>
                  </div>

                </div>

                <p class="mt-5 mb-1 text-sm font-medium ">{{ $t('parcel.packageParameters') }}</p>
                <div class="p-5 border-2 border-green-500 rounded-md shadow-md" v-if="selectedPackageParameters">
                  <div class="flex justify-between">
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.weight') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedPackageParameters.weight }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.length') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedPackageParameters.length }}</p>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.width') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedPackageParameters.width }}</p>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-700">{{ $t('parcel.height') }}</p>
                      <p class="text-xs font-normal text-gray-500">{{ selectedPackageParameters.height }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between mt-5">
                <button @click="backToPackageParameters"
                  class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>

                <button @click="toPayment" class="w-24 p-2 text-white bg-green-300 rounded">Next</button>
              </div>
            </div>
          </div>
          <div class="px-4 py-5 bg-white sm:p-6"
            v-if="packageTypeView == false && addressView == false && courierView == false && recipientView == false && parametersView == false && summaryView == false && paymentView == true">
            <div class="px-4 py-5 bg-white sm:p-6">
              <p class="mb-5 text-xl font-bold">{{ $t('parcel.payment') }}</p>
              <div class="flex flex-col" v-if="summary">
                <div class="flex justify-between">
                  <p>{{ $t('parcel.distance') }}</p>
                  <p>{{ summary.distance.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between">
                  <p>{{ $t('parcel.deliveryCharges') }}</p>
                  <p>{{ currency }}{{ summary.delivery_fee.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between">
                  <p>{{ $t('parcel.packageSizeCharges') }}</p>
                  <p>{{ currency }}{{ summary.package_type_fee.toFixed(2) }}</p>
                </div>
                <div class="py-4 font-bold divide-y-2 divide-black divide-dashed">
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between">
                  <p>{{ $t('cart.subtotal') }}</p>
                  <p>{{ currency }}{{ summary.sub_total.toFixed(2) }}</p>
                </div>
                <div class="flex justify-between">
                  <p>{{ $t('checkout.tax') }}</p>
                  <p>{{ currency }}{{ summary.tax.toFixed(2) }}</p>
                </div>
                <div class="py-4 font-bold divide-y-2 divide-black divide-dashed">
                  <div></div>
                  <div></div>
                </div>
                <div class="flex justify-between">
                  <p>{{ $t('cart.total') }}</p>
                  <p>{{ currency }}{{ summary.total.toFixed(2) }}</p>
                </div>
              </div>
              <div class="mt-10">
                <p class="text-xl">Who to pay?</p>
                <div class="grid gap-2 md:grid-cols-2">
                  <div class="self-center p-3 mt-5 bg-white border shadow-md hover:border-green-500 md:w-60 rounded-xl">
                    <div class="flex justify-between">

                      <div class="self-center px-2">
                        <div class="self-center text-xs text-gray-600 md:text-sm">
                          Sender
                        </div>
                      </div>
                      <label class="self-center md:items-start md:justify-start md:flex">
                        <div
                          class="relative flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-white border-2 border-gray-400 rounded focus-within:border-blue-500">
                          <input type="radio" class="absolute opacity-0" v-model="payer" value="1" />
                          <svg class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                            viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        </div>
                        <!-- <div class="text-sm font-medium text-black md:text-base">{{ paymentMethod.name }}</div> -->
                      </label>
                    </div>
                  </div>
                  <div class="self-center p-3 mt-5 bg-white border shadow-md hover:border-green-500 md:w-60 rounded-xl">
                    <div class="flex justify-between">

                      <div class="self-center px-2">
                        <div class="self-center text-xs text-gray-600 md:text-sm">
                          Receiver
                        </div>
                      </div>
                      <label class="self-center md:items-start md:justify-start md:flex">
                        <div
                          class="relative flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-white border-2 border-gray-400 rounded focus-within:border-blue-500">
                          <input type="radio" class="absolute opacity-0" v-model="payer" value="0" />
                          <svg class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                            viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        </div>
                        <!-- <div class="text-sm font-medium text-black md:text-base">{{ paymentMethod.name }}</div> -->
                      </label>
                    </div>
                  </div>
                </div>

                <p class="mt-5 text-base" v-if="user">{{ $t('paymentMethods') }}</p>
                <div class="grid gap-2 md:grid-cols-2">
                  <div class="self-center p-3 mt-5 bg-white border shadow-md hover:border-green-500 md:w-60 rounded-xl"
                    v-for="(method, index) in methods" :key="index">
                    <div class="flex justify-between">
                      <div class="flex-shrink-0">
                        <img class="self-center object-cover w-8 h-8" v-if="method" v-bind:src="method.photo"
                          alt="Man looking at item at a store" />
                      </div>
                      <div class="self-center px-2">
                        <div class="self-center text-xs text-gray-600 md:text-sm">
                          {{ method.name }}
                        </div>
                      </div>
                      <label class="self-center md:items-start md:justify-start md:flex">
                        <div
                          class="relative flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-white border-2 border-gray-400 rounded focus-within:border-blue-500">
                          <input type="radio" class="absolute opacity-0" v-model="paymentMethod" :value="method" />
                          <svg class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
                            viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        </div>
                        <!-- <div class="text-sm font-medium text-black md:text-base">{{ paymentMethod.name }}</div> -->
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <button @click="backToSummary" class="w-24 p-2 text-white bg-green-300 rounded">Previous</button>

              <button @click="makePayment" class="w-24 p-2 text-white bg-green-300 rounded">Pay</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <Download />
</template>
<script>
import axios from "axios";
import {
  TruckIcon,
  ClockIcon,
  CalendarIcon,
  PlusSmIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  UserIcon, PhoneIcon, AnnotationIcon
} from "@heroicons/vue/outline";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import Navigation from "./Navigation.vue";
import Download from "@/components/Downloads.vue";
import { notify } from "@kyvg/vue3-notification";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  components: {
    LocationMarkerIcon,
    TruckIcon,
    ClockIcon,
    CalendarIcon,
    PlusSmIcon,
    PlusCircleIcon,
    MinusCircleIcon,
    Download,
    Navigation,
    UserIcon,
    PhoneIcon,
    AnnotationIcon
  },
  data() {
    return {
      packageTypeView: false,
      addressView: false,
      courierView: false,
      parametersView: false,
      recipientView: false,
      summaryView: false,
      paymentView: false,
      packageTypes: [],
      couriers: [],
      packageType: 0,
      courier: 0,
      payer: '',
      parameters: {
        weight: 0,
        width: 0,
        height: 0,
        length: 0
      },
      recipients: [
        {
          name: "",
          phone: "",
          note: ""
        }
      ],
      indices: null,
      selectedPackageType: null,
      selectedCourier: null,
      isLoggedIn: false,
      user: null,
      addresses: null,
      showModal: false,
      addAddress: false,
      fromError: "",
      toError: "",
      from: "",
      to: "",
      deliveryStops: [],
      date: "",
      time: "",
      AuthStr: "Bearer " + localStorage.getItem("authToken"),
      base_url: this.$store.state.baseUrl,
      pickup1: null,
      pickup: null,
      fromSuccess: "",
      toSuccess: "",
      settings: null,
      selectedPackage: null,
      selectedPickAddress: null,
      selectedDestAddress: null,
      selectedPackageCourier: null,
      selectedRecipientsObj: null,
      selectedParameters: null,
      settings: null,
      currency: "",
      methods: [],
      summary: null,
      paymentMethod: null,
      stateView: null,
      cityView: null,
      destinationId: null,
      pickupId: null,
      selectedRecipients: null,
    };
  },

  mounted() {

    // this.$store.dispatch('fetchSettings', this.items).then(() => {
    //   this.settings = this.$store.state.settings;
    //   this.currency = this.settings.strings.currency
    //   console.log(this.settings)
    // })

    axios.get(this.base_url + 'api/app/settings')
      .then((response) => {
        this.settings = response.data
        this.currency = this.settings.strings.currency
      })
      .catch(error => console.log(error))

    axios
      .get(this.base_url + "api/delivery/addresses", {
        headers: { Authorization: this.AuthStr },
      })
      .then((response) => {
        this.addresses = response.data.data
      })
      .catch((error) => console.log(error));

    if (localStorage.getItem("authToken")) {
      this.isLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem("user"));
    }

    if (this.isLoggedIn == false) {
      this.$router.push("/login");
    }

    this.getPackageTypes();

    // this.getCouriers();

    // if (this.$route.query.packageType) {
    //   this.packageType = this.$route.query.packageType;
    // }

    axios
      .get(this.base_url + "api/payment/methods", {
        headers: { Authorization: this.AuthStr },
      })
      .then((response) => (this.methods = response.data.data))
      .catch((error) => console.log(error));


    this.selectedPackage = JSON.parse(localStorage.getItem("packageType"));
    this.deliveryStops = JSON.parse(localStorage.getItem("deliveryStops"));
    if (this.deliveryStops == null || this.deliveryStops.length == 0) {
      this.deliveryStops = [];
      this.addField({}, this.deliveryStops);
      this.addField({}, this.deliveryStops);

    }
    this.selectedPackageCourier = JSON.parse(localStorage.getItem("courier"));
    this.selectedRecipients = JSON.parse(localStorage.getItem("selectedRecipients"));
    this.selectedRecipientsObj = this.selectedRecipients;
    let parameters = localStorage.getItem("parameters");
    this.selectedPackageParameters = JSON.parse(parameters);
    if (this.selectedPackage != null) {
      this.packageTypeView = false;
      this.addressView = true;
    } if (this.selectedPickAddress != null && this.selectedDestAddress != null) {
      this.addressView = false;
      this.courierView = true;
      this.packageTypeView = false;
    } if (this.selectedPackageCourier != null) {
      this.addressView = false;
      this.courierView = false;
      this.packageTypeView = false;
      this.recipientView = true;
    } if (this.selectedRecipientsObj != null) {
      this.addressView = false;
      this.courierView = false;
      this.packageTypeView = false;
      this.recipientView = false;
      this.parametersView = true;
    } if (this.selectedPackageParameters != null) {
      this.addressView = false;
      this.courierView = false;
      this.packageTypeView = false;
      this.recipientView = false;
      this.parametersView = false;
      this.summaryView = true;
    } else {
      this.packageTypeView = true;
    }
  },

  methods: {

    toAddress() {
      localStorage.setItem("packageType", JSON.stringify(this.selectedPackageType));
      this.packageTypeView = false;
      this.addressView = true;
    },

    getPackageTypes() {
      this.$store.commit("loading", true);
      axios
        .get(this.base_url + "api/package/types", {
          headers: { Authorization: this.AuthStr },
        })
        .then(
          function (response) {
            this.$store.commit("loading", false);
            this.packageTypes = response.data;
          }.bind(this)
        );
    },

    canNextStopsSelection() {

      let allowNextPage = true;
      this.deliveryStops.forEach((deliveryStop) => {
        if (deliveryStop == null || Object.keys(deliveryStop).length === 0) {
          allowNextPage = false;
        }
      });

      return allowNextPage;
    },

    recipientsIsValid() {

      let allowNextPage = false;
      this.recipients.forEach((recipient) => {
        if (recipient != null && Object.keys(recipient).length === 3) {
          //check for each node is set
          const rName = recipient.name;
          const rPhone = recipient.phone;
          const rNote = recipient.note;
          if (rName == null || rName == "" || !rName) {
            //alert there is empty name
            notify({
              type: "error",
              title: this.$t('parcel.recipientTitle'),
              text: this.$t('parcel.recipientEmptyName'),
            })
          } else if (rPhone == null || rPhone == "" || !rPhone) {
            //alert there is empty phone number
            notify({
              type: "error",
              title: this.$t('parcel.recipientTitle'),
              text: this.$t('parcel.recipientEmptyPhone'),
            })
          } else {
            allowNextPage = true;
          }
        }
      });


      if (allowNextPage) {
        this.toParameters();
      }

    },

    toCourier() {
      localStorage.setItem("deliveryStops", JSON.stringify(this.deliveryStops));
      // window.location.reload();
      let package_type = JSON.parse(localStorage.getItem("packageType"));

      if (package_type != null) {
        this.$store.commit("loading", true);
        axios.get(this.base_url + "api/vendors?type=package", {
          params: {
            package_type_id: package_type.id,
            vendor_type_id: this.$route.params.id,
          },
          headers: { Authorization: this.AuthStr }
        }).then(function (response) {
          const mCouriers = response.data.data;
          var foundCouriers = [];
          //filter vendor that service selected locations
          mCouriers.forEach((courier) => {

            //
            var allowVendor = false;
            //check that vendor service all the stops
            for (const deliveryStop of this.deliveryStops) {
              allowVendor = this.vendorServiceAddres(courier, deliveryStop);
              if (!allowVendor) {
                break;
              }
            }

            //double check if vendor allowed
            //then add to the array
            if (allowVendor) {
              foundCouriers.push(courier);
            }


          });

          this.couriers = foundCouriers;
          this.$store.commit("loading", false);

        }.bind(this)).catch(function (error) {
          console.log(error);
        }.bind(this));
      }

      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = true;
    },

    vendorServiceAddres(courier, address) {
      const countryAllowed = this.vendorServiceCountry(courier.countries, address.country ?? "");
      const stateAllowed = this.vendorServiceState(courier.states, address.state ?? "");
      const cityAllowed = this.vendorServiceCity(courier.cities, address.city ?? "");
      return countryAllowed || stateAllowed || cityAllowed;
    },

    vendorServiceCountry(countryArray, countryName) {
      var allowed = false;
      countryArray.forEach((countryObject) => {

        if (countryObject["name"].toLowerCase() == countryName.toLowerCase()) {
          allowed = true;
        }
      });

      return allowed;
    },

    vendorServiceState(stateArray, stateName) {
      var allowed = false;
      stateArray.forEach((stateObject) => {

        if (stateObject["name"].toLowerCase() == stateName.toLowerCase()) {
          allowed = true;
        }
      });

      return allowed;
    },

    vendorServiceCity(cityArray, cityName) {
      var allowed = false;
      cityArray.forEach((cityObject) => {

        if (cityObject["name"].toLowerCase() == cityName.toLowerCase()) {
          allowed = true;
        }
      });

      return allowed;
    },

    toRecipients() {
      // let deliveryZtops = JSON.parse(localStorage.getItem("deliveryStops"))
      localStorage.setItem("courier", JSON.stringify(this.selectedCourier));
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = true;

      this.recipients = []
      this.deliveryStops.forEach((deliveryStop) => {
        this.recipients.push({
          name: "",
          phone: "",
          note: ""
        })
      })
    },

    toParameters() {
      localStorage.setItem("selectedRecipients", JSON.stringify(this.recipients));
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = false;
      this.parametersView = true;
    },

    toSummary() {
      window.location.reload();
      localStorage.setItem("parameters", JSON.stringify(this.parameters));
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = false;
      this.parametersView = false;
      this.summaryView = true;
    },

    toPayment() {

      let deliveryZtops = JSON.parse(localStorage.getItem("deliveryStops"))
      let vendor = JSON.parse(localStorage.getItem("courier"))
      let mDeliveryZtops = [];
      deliveryZtops.forEach((deliveryZtop) => {
        mDeliveryZtops.push({ "id": deliveryZtop.id });
      });
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = false;
      this.parametersView = false;
      this.summaryView = false;
      this.paymentView = true;
      axios
        .get(this.base_url + "api/payment/methods", {
          headers: { Authorization: this.AuthStr },
        })
        .then((response) => {
          this.methods = response.data.data
        })
        .catch((error) => console.log(error));

      // order summary method
      axios
        .get(this.base_url + "api/package/order/summary",
          {
            params: {
              ignore_check: true,
              vendor_id: vendor.id,
              package_type_id: this.selectedPackage.id,
              stops: JSON.stringify(mDeliveryZtops),
              weight: this.selectedPackageParameters.weight,
            },
            headers: { Authorization: this.AuthStr },
          }
        )
        .then((response) => {
          this.summary = response.data;
          console.log(this.summary)
        })
        .catch((error) => console.log(error));
    },

    makePayment() {
      let deliveryZtops = JSON.parse(localStorage.getItem("deliveryStops"))
      let selectedRecipients = JSON.parse(localStorage.getItem("selectedRecipients"))
      let mDeliveryZtops = [];
      deliveryZtops.forEach((deliveryZtop, index) => {
        mDeliveryZtops.push({
          "id": deliveryZtop.id,
          "name": selectedRecipients[index].name,
          "phone": selectedRecipients[index].phone,
          "note": selectedRecipients[index].note,
        });
      });
      let vendor = JSON.parse(localStorage.getItem("courier"))
      if (this.paymentMethod == null) {
        notify({
          type: "error",
          title: "Order Checkout",
          text: 'select a payment method',
        })
      } else {
        if (this.user)
          this.$store.commit("loading", true);
          let total_price = this.summary.total
          axios.post(this.base_url + 'api/orders',
          {
            total: total_price,
            sub_total: this.summary.sub_total,
            tax: this.summary.tax,
            note: this.note,
            discount: this.summary.discount ? this.summary.discount : 0,
            vendor_id: vendor.id,
            payment_method_id: this.paymentMethod.id,
            delivery_fee: this.summary.delivery_fee,
            type: "package",
            package_type_id: this.selectedPackage.id,
            weight: this.selectedPackageParameters.weight,
            width: this.selectedPackageParameters.width,
            length: this.selectedPackageParameters.length,
            height: this.selectedPackageParameters.height,
            payer: this.payer,
            stops: mDeliveryZtops,
          },
          { 'headers': { 'Authorization': this.AuthStr } }
        )
          .then((response) => {
            this.$store.commit("loading", false);
            if (this.paymentMethod.is_cash == 1) {
              Swal.fire({
                title: 'Order Successful',
                text: "Please pay rider" + " " + this.currency + total_price.toFixed(2) + " " + " on delivery",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = '/'
                }
              })
            } else {
              notify({
                type: "success",
                title: "Order Checkout",
                text: response.data.message,
              });
              window.location.href = response.data.link
            }
            localStorage.removeItem('packageType')
            localStorage.removeItem('deliveryStops')
            localStorage.removeItem('courier')
            localStorage.removeItem('parameters')
            localStorage.removeItem('selectedRecipients')
          })
          .catch(error => console.log(error))

      }
    },


    addField(value, fieldType) {

      var maxStops = 3;
      if(this.settings){
//
        maxStops = this.settings.strings.maxParcelStops;
      }
        if (maxStops >= this.deliveryStops.length) {
          fieldType.push(value);
        }
      
      // console.log(fieldType)
      //check if the fieldType lenght is equal to the max stop allowed
    },

    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },

    backToPackageType() {
      this.packageTypeView = true;
      this.addressView = false;
    },

    backToAddress() {
      this.packageTypeView = false;
      this.addressView = true;
    },

    backToCourier() {
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = true;
    },

    backToRecipients() {
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = true;
    },

    backToPackageParameters() {
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = false;
      this.parametersView = true;
    },

    backToSummary() {
      this.packageTypeView = false;
      this.addressView = false;
      this.courierView = false;
      this.recipientView = false;
      this.parametersView = false;
      this.summaryView = true;
    },

    clearAll() {
      localStorage.removeItem("packageType");
      localStorage.removeItem("courier");
      localStorage.removeItem("from");
      localStorage.removeItem("to");
      localStorage.removeItem("date");
      localStorage.removeItem("time");
      // this.$router.go();
      this.packageType = "";
      this.courier = "";
      this.from = "";
      this.to = "";
      this.date = "";
      this.time = "";
      this.fromSuccess = "";
      this.fromError = "";
      this.toSuccess = "";
      this.toError = "";
    },

  },
};
</script>
