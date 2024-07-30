<template>
    <div class="flex align-middle items-center flex-col page-hero justify-center" v-for="page in getMatchedPage" :key="page">
        <img src="../assets/img/logo.png" alt="">
        <h2 class="text-5xl"> {{ page }}</h2>
        <p>Home > {{ page }}</p>
    </div>
</template>

<script>

import router from "@/router";

export default {
  data() {
    return {
      path: "",
      pageName: ['Home', 'Shop', 'Contact', 'About', 'Cart', 'Checkout']
    };
  },

  computed: {
    getMatchedPage() {
      // Filter products based on the matchValue
      this.path = this.$route.name;
      return this.pageName.filter(page => page === this.path);
    },
  },

};
</script>

<style lang="scss" scoped>
.page-hero{
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("/src/assets/img/shop-hero.jpg");
    height: 315px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img{
        width: 4%;
    }
    h2, p{
        z-index: 2;
    }
}
</style>