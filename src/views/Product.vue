<template>
  <div class="service product-page">
    <div class="container max-w-6xl mx-auto mt-10 mb-5" v-if="product">
      <nav class="w-full p-3 m-4 font-sans rounded bg-grey-light">
        <ol class="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <a :href="$router.resolve({name: 'Vendor',params: {id: product.vendor.id, slug: sanitizeTitle(`${product.vendor.name}`),},}).href"
              class="mr-2 text-sm font-medium text-gray-900">
              {{ product.vendor.name }}
            </a>
          </li>
          <li><span class="">/</span></li>
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
          <div class="fw-bold fs-4 mb-3">
            {{ product.name }}
          </div>
          <!-- <p class="text-4xl font-extrabold sm:mt-0 leading-large heading capitalize">
            {{ product.name }}
          </p> -->
          <div class="d-flex align-items-center mb-3">
            <div v-for="(item, index) in 4" :key="index" class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 576 512">
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 me-3" viewBox="0 0 576 512">
              <path
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
              />
            </svg>
            <span class="text-muted">
              (0 reviews)
            </span>
          </div>
          <!-- <hr/> -->

          <div class="d-flex flex-row mb-3" style="font-size: 15px;">
            <div class="me-4">
              <a href="javascript:;" class="text-decoration-none text-warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle mb-1" viewBox="0 0 16 16" style="display: inline;">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
                Product Inquiry
              </a>
            </div>
            <div class="me-4">
              <a href="javascript:;" class="text-decoration-none text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" style="display: inline;">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                Add to wishlist
              </a>
            </div>
            <div class="me-4">
              <a href="javascript:;" class="text-decoration-none text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16" style="display: inline;">
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>
                Add to compare
              </a>
            </div>
          </div>

          <div class="flex flex-row mb-3">
            <div class="text-muted me-3">
              Brand
            </div>
            <div class="fw-bold">
              Calvin Klein
            </div>
          </div>

          <div class="flex flex-row mb-3">
            <div class="fw-bold me-4 mt-2">
              Inhouse product
            </div>
            <div class="fw-bold">
              <button class="btn btn-outline-warning rounded-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16" style="display: inline;">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                Message Seller
              </button>
            </div>
          </div>

          <hr>

          <div class="mb-3">
            <table class="table table-borderless">
              <tr style="vertical-align: middle;">
                <td class="text-muted ps-0">Price</td>
                <td class="text-start">
                  <span class="fw-bold text-danger">
                    {{ currency }} {{ product.discount_price.toFixed(2) }}
                  </span>
                  <span class="text-muted me-1">
                  / PC
                  </span>
                  <span class="badge text-bg-warning text-white rounded-0 pt-2 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16" style="display: inline;">
                      <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                      <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                    </svg>
                    Club Point: 300
                  </span>
                </td>
              </tr>
              <tr style="vertical-align: middle;">
                <td class="text-muted ps-0">Quantity</td>
                <td>
                  <div class="flex items-center">
                    <button
                      class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-0 cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                      @click="decrement()"
                    >
                      <MinusIcon class="w-6 h-6 text-gray-500" />
                    </button>
                    <div class="w-10 h-10 overflow-hidden">
                      <input
                        class="w-full h-full font-light text-center"
                        v-model="quantity"
                      />
                    </div>
                    <button
                      class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-0 cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                      @click="increment(product)"
                    >
                      <PlusIcon class="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style="vertical-align: middle;">
                <td class="text-muted ps-0">Total Price</td>
                <td class="fs-5 fw-bold text-danger text-start">{{ currency }} {{ totalPrice.toFixed(2) }}</td>
              </tr>
            </table>
          </div>

          <div class="mb-3">
            <button type="button" class="btn btn-warning rounded-0 text-white me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill me-2 mb-1" viewBox="0 0 16 16" style="display: unset;">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
              </svg>
              <span class="fw-bold">Add to cart</span>
            </button>
            <button type="button" class="btn btn-danger rounded-0 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart me-2 mb-1" viewBox="0 0 16 16" style="display: unset;">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <span class="fw-bold">Buy Now</span>
            </button>
          </div>

          <div>
            <table class="table table-borderless">
              <tr style="vertical-align: middle;">
                <td class="ps-0 text-muted">Refund</td>
                <td>
                  <div style="background-image: url('/img/refund-sticker.jpg'); width: 230px; height: 50px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
                </td>
                <td>
                  <a href="#" class="text-decoration-none">
                    View Policy
                  </a>
                </td>
              </tr>
              <tr>
                <td class="ps-0 text-muted">Share</td>
                <td colspan="2">
                  <button type="button" class="btn rounded-0 py-2 me-2 text-white" style="background-color: #3490f3;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn rounded-0 py-2 me-2 text-white" style="background-color: #00aced;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn rounded-0 py-2 me-2 text-white" style="background-color: #3b5998;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn rounded-0 py-2 me-2 text-white" style="background-color: #007bb6;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn rounded-0 py-2 me-2 text-white" style="background-color: #29a628;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </button>
                </td>
              </tr>
            </table>
          </div>

          <span v-if="product.discount_price > 0">
            <div class="flex">
              <!-- <p class="pt-2 text-2xl pr-5 text-gray-400">Price:</p> -->
              <!-- <p
                class="pt-2 text-3xl font-bold text-red-800 tracking-wide pr-3"
              >
                {{ currency }} {{ product.discount_price.toFixed(2) }}
              </p>
              <p class="pt-3 text-base tracking-wide">
                <span class="line-through text-gray-400">
                  {{ currency }}{{ product.price.toFixed(2) }}</span
                >
              </p> -->
            </div>
            <!-- <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide">
             {{ currency }} {{ product.discount_price.toFixed(2) }}
            </p>  -->
            <!-- <p class="pb-2 text-2xl tracking-wide">
              {{ currency
              }}<span class="line-through">{{ product.price.toFixed(2) }}</span>
            </p> -->
          </span>
          <!-- <span v-else>
            <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide pr-3">
              {{ currency }} {{ product.price.toFixed(2) }}
            </p>
          </span> -->
          <!-- <p class="pb-2 leading-7 text-gray-600">{{ product.description }}</p> -->

          <!-- <div
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
          </div> -->

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

          <!-- <div class="flex" v-if="product.vendor.vendor_type.slug != 'service'">
            <p class="flex items-center px-2 text-sm mt-3">
              {{ $t("product.quantity") }}:
            </p>
            
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
            
          </div> -->
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
          <!-- <div class="mt-4 btn-wrap" v-if="settings">
            <button
              :style="{ 'background-color': settings.colors.primaryColor }"
              @click="addToCart(product)"
              class="w-full px-3 py-3 mr-5 text-xs font-semibold text-white md:py-4"
            >
              {{ $t("product.addtocart") }} {{ currency }}
              {{ totalPrice.toFixed(2) }}
            </button>
          </div> -->
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
          <div class="border px-3">
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
            <div class="flex flex-row border-bottom mb-3">
              <div style="background-image: url('/img/placeholder.jpg'); width: 100px; height: 100px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
              <div class="align-self-center">
                <div>Product</div>
                <div class="fw-bold text-danger">{{ currency }} 60.00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
          <div class="border p-4 mb-3">
            <div class="fw-bold mb-4">
              Reviews & Ratings
            </div>
            <div class="flex flex-row border border-warning p-4 justify-content-between mb-5" style="background-color: #f3af3d26;">
              <div>
                <div class="d-flex align-items-center">
                  <span class="fs-2 me-3">0</span>
                  <span class="text-muted me-3">out of 5.0</span>
                  <div v-for="(item, index) in 4" :key="index" class="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 576 512">
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 me-3" viewBox="0 0 576 512">
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                    />
                  </svg>
                  <span class="text-muted">
                    (0 reviews)
                  </span>
                </div>
              </div>

              <div class="align-self-center">
                <button class="btn btn-warning text-white rounded-0">Rate this product</button>
              </div>
            </div>

            <div class="text-muted fs-5 text-center mb-3">
              There have been no reviews for this product yet.
            </div>
          </div>

          <div class="border p-4 mb-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="decription-tab" data-bs-toggle="tab" data-bs-target="#decription-tab-pane" type="button" role="tab" aria-controls="decription-tab-pane" aria-selected="true">Description</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video-tab-pane" type="button" role="tab" aria-controls="video-tab-pane" aria-selected="false">Video</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="decription-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <ul class="mt-3" style="list-style-type: circle; font-size: 14px;">
                  <li>90% Polyester, 10% Rayon</li>
                  <li>Imported</li>
                  <li>Zipper closure</li>
                  <li>Dry Clean Only</li>
                  <li>3-piece single breasted suit with notch lapel</li>
                  <li>Suit jacket features notch lapel, two-button closure, and welted pocket at left chest</li>
                  <li>Vest features a four-button placket and welted pockets at front</li>
                  <li>Pant features an expandable waist, pleated front, rear welted pockets, and French fly with button</li>
                </ul>
              </div>
              <div class="tab-pane fade show active" id="video-tab-pane" role="tabpanel" aria-labelledby="video-tab" tabindex="0">
                <iframe class="mt-3" style="width: 100%; height: 500px;" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
              </div>
            </div>
          </div>

          <div class="border p-4 mb-3">
            <div class="fw-bold mb-4">
              Related products
            </div>
            <div>
              <vue-horizontal ref="horizontal" class="horizontal" responsive>
                <div class="flex flex-row px-3" v-for="product in products">
                  <a href="#" class="rounded text-decoration-none text-center text-dark w-60 shadow">
                    <div class="flex items-center justify-center">
                      <div style="background-image: url('/img/placeholder.jpg'); height: 180px; width: 180px; background-repeat: no-repeat; background-position: center; background-size: contain;"></div>
                    </div>
                    <div class="mb-2">
                      Product
                    </div>
                    <div class="mb-4 text-danger fw-bold">
                      {{ currency }} 60.00
                    </div>
                  </a>
                </div>
              </vue-horizontal>
            </div>
          </div>

          <div class="border p-4">
            <div class="fw-bold mb-4">
              Product Queries (0)
            </div>
            <div class="mb-4" style="font-size: 14px;">
              <a href="#" class="text-decoration-none text-danger">Login</a>
              or
              <a href="#" class="text-decoration-none text-danger">Register</a>
              to submit your questions to seller
            </div>

            <div class="fw-bold mb-4">
              Other Questions
            </div>
            <div class="mb-3" style="font-size: 14px;">
              No none asked to seller yet
            </div>
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
import VueHorizontal from "vue-horizontal"
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
      products: [1, 2, 3, 4, 5, 6],
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

<style scoped>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .nav-link {
    color: #666;
  }
  /*.project-tab {
      padding: 10%;
      margin-top: -8%;
  }
  .project-tab #tabs{
      background: #007b5e;
      color: #eee;
  }
  .project-tab #tabs h6.section-title{
      color: #eee;
  }*/
  .project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
      color: #212529;
      background-color: transparent;
      border-color: transparent transparent #f3f3f3;
      border-bottom: 3px solid !important;
      font-size: 16px;
      font-weight: bold;
  }
  /*.project-tab .nav-link {
      border: 1px solid transparent;
      border-top-left-radius: .25rem;
      border-top-right-radius: .25rem;
      color: #0062cc;
      font-size: 16px;
      font-weight: 600;
  }
  .project-tab .nav-link:hover {
      border: none;
  }
  .project-tab thead{
      background: #f3f3f3;
      color: #333;
  }
  .project-tab a{
      text-decoration: none;
      color: #333;
      font-weight: 600;
  }*/
  .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
      color: #212529;
      background-color: transparent;
      border-color: transparent transparent #d00906;
      border-bottom: 3px solid !important;
      font-size: 16px;
      font-weight: bold;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    border-color: white;
  }
  .nav-tabs {
    border-bottom: unset;
  }
</style>
