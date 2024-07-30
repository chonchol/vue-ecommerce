<template>
    <div class="flex flex-col items-center w-full p-14">
        <div class="text-center pb-12">
            <h3 class="text-3xl font-bold">Browse The Range</h3>
            <p class="text-xl mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="grid grid-cols-3 gap-3">
            <router-link :to="{ name: 'Shop' }" v-for="product in products" :key="product.id" class="text-center mr-6 category-wrap">
                <img class="mb-5 rounded" :src="`${product.image}`" alt=""/>
                <h4 class="text-2xl font-semibold category" :to="{ name: 'Shop' }">{{ product.category }}</h4>
            </router-link>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';


export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products?limit=3").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },
};

</script>

<style lang="scss" scoped>
    h3{
        color:  var(--Font-Color, #333);
    }
    p{
        color:  var(--Font-Color, #666);
    }
    .category-wrap{

        img{
            min-height: 480px;
            max-height: 480px;
            width: 100%;
            object-fit: fill;
        }
        .category{
            text-transform: capitalize;
        }
    }

</style>