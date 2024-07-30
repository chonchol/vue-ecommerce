<template>
  <div class="filtering-area flex items-center justify-between px-8 py-6" v-if="path == 'Shop'">

      <div class="filter-result">
        <p> Showing 1-16 of 32 results</p>
      </div>
      <div class="filter-func flex">
        <div class="flex items-center mr-6">
          <p class="mr-4">Show</p>
          <div class="bg-white p-2">16</div>
        </div>
        <div class="flex items-center">
          <p class="mr-4">Sort by</p> 
          <div class="bg-white p-2">Default</div>
        </div>
      </div>

  </div>
  <div class="flex flex-col items-center w-full p-12">
    <h3 class="text-center text-3xl font-bold pb-12" v-if="path == 'Home'">
      Our Products
    </h3>
    <h3 class="text-center text-3xl font-bold pb-12" v-if="path == 'SingleProduct'">
      Related Products
    </h3>
    <div class="grid grid-cols-4 gap-4 mb-8">
      <div
          v-for="product in products"
          :key="product.id"
          class="mr-6 relative bg-product-content single-product"
          :class="{ 'activat': active && activeProductId === product.id }"
          @mouseover="toggleHover(true, product.id)"
          @mouseleave="toggleHover(false, null)"
        >
        <img class="mb-2 rounded" :src="`${product.image}`" alt="" />
        <div class="p-4 mb-5">
          <p
            class="absolute text-center right-5 top-5 text-white bg-product-comission w-12 h-12 rounded-3xl pt-3"
          >
            <span class="text-center">{{ product.rating.rate }}</span>
          </p>
          <h3 class="font-semibold text-2xl mb-1 category">
            {{ product.category }}
          </h3>
          <p class="font-medium mb-1 title">{{ product.title }}</p>
          <div class="flex justify-between">
            <p class="font-semibold text-xl mr-1">Rp {{ product.price }}</p>
            <p>Stock: {{ product.rating.count }}</p>
          </div>
        </div>
        <ProductHover v-if="active && activeProductId === product.id" />
      </div>
    </div>
    <router-link :to="{ name: 'Shop' }" v-if="path == 'Home' || path == 'SingleProduct'">
      <button class="text-fn-primary border-fn-primary border px-14 py-2">
        Show More
      </button>
    </router-link>
    <div class="pagination py-8" v-if="path == 'Shop'">
      <nav>
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-5 h-10 ms-0 leading-tight rounded-s-lg mr-5"
              >Prev</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-5 h-10 leading-tight rounded mr-5 active"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-5 h-10 leading-tight rounded mr-5"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-5 h-10 leading-tight rounded mr-5"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-5 h-10 leading-tight rounded-e-lg"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ProductHover from "./ProductHover.vue";
import axios from "axios";
import router from "@/router";

export default {
  components: {
    ProductHover,
  },
  data() {
    return {
      active: false,
      activeProductId: null,
      products: [],
      path: "",
      currentPage: 1,
      pageSize: 8,
    };
  },
  mounted() {
    this.loadProducts();
  },

  methods: {
    loadProducts() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        this.products = response.data.slice(0, this.pageSize * this.currentPage);
      });
    },
    loadMoreProducts() {
      this.currentPage++;
      this.loadProducts();
    },
    detectRouter() {
      this.path = this.$route.name;
    },
    toggleHover(value, productId) {
      this.active = value;
      this.activeProductId = productId;
    },
  },

  created() {
    this.detectRouter();
  },
};
</script>

<style lang="scss" scoped>
.filtering-area{
  background-color: #f9f1e7;
}
.single-product {
  img {
    min-height: 360px;
    max-height: 360px;
    width: 100%;
    object-fit: fill;
  }
  .category {
    text-transform: capitalize;
  }
}
nav {
  ul {
    li {
      a {
        background-color: #f9f1e7;
        color: black;

        &.active {
          background-color: #b88e2f;
          color: white;
        }
      }
    }
  }
}
</style>
