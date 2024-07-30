<template>
    <div class="header-wrapper">
        <div class="w-full flex justify-between items-center py-8">
            <div class="flex justify-start items-center">
                <router-link class="text-black text-3xl font-bold flex items-center" to="/">
                    <img class="w-14" src="../assets/img/logo.png" alt="">
                    Furniro
                </router-link>
            </div>
            <div class="flex justify-end items-center">
                <ul class="flex justify-center items-center">
                    <router-link class="font-medium text-base mr-10" to="/">Home</router-link>
                    <router-link class="font-medium text-base mr-10" to="/shop">Shop</router-link>
                    <router-link class="font-medium text-base mr-10" to="/about">About</router-link>
                    <router-link class="font-medium text-base mr-10" to="/contact">Contact</router-link>
                </ul>
            </div>
            <div class="flex justify-start items-center">
                <router-link to="#">                
                    <img class="w-7 mr-5" src="../assets/img/account-alert.svg" alt="">
                </router-link>
                <router-link to="#">
                    <img class="w-7 mr-5" src="../assets/img/icons_search.svg" alt="">
                </router-link>
                <router-link to="#">
                    <img class="w-7 mr-5" src="../assets/img/icons_heart.svg" alt="">
                </router-link>
                <router-link to="#" @click="open = true">
                    <img class="w-7 mr-5" src="../assets/img/shopping-cart.svg" alt="">
                </router-link>
            </div>
        </div>
    </div>


    <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-2xl font-semibold">Shopping Cart</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <img src="../assets/img/cart-close.svg" alt=""  @click="open = false" style="cursor: pointer;">
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="product in products" :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a :href="product.href">{{ product.name }}</a>
                                  </h3>
                                  <p class="ml-4 text-fn-primary">{{ product.price }}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-fn-primary hover:text-fn-primary">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p class="text-fn-primary">$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-fn-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:fn-primary">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{{ ' ' }}
                        <button type="button" class="font-medium text-fn-primary hover:text-fn-primary" @click="open = false">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>



</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const open = ref(false);

</script>

<style lang="scss" scoped>
li:last-child{
    margin-right: 0;
}
</style>