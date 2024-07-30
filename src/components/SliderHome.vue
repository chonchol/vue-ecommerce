<template>
  <div class="slider-wrapper flex items-center py-11">
    <div class="pl-10 w-1/3">
      <h2 class="font-bold text-4xl mb-2">50+ Beautiful rooms inspiration</h2>
      <p class="font-medium mb-12">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <router-link
        class="bg-fn-primary px-9 py-3 text-white"
        :to="{ name: 'Shop' }"
        >Explore More</router-link
      >
    </div>
    <div class="w-2/3 pl-6">
      <!-- <div class="relative">
        <img src="../assets/img/slider1.png" alt="" />
        <div class="absolute bottom-5 left-5 block">
          <div class="slider-content px-8 py-6 float-left">
            <div class="flex items-center align-middle">
              <span>01</span>
              <hr class="w-6 mx-2" />
              <span>Bed Room</span>
            </div>

            <h3 class="font-semibold text-2xl mt-2">Inner Peace</h3>
          </div>
          <router-link :to="{ name: 'Shop' }">
            <img
              class="bg-fn-primary float-right p-3"
              src="../assets/img/right-arrow.svg"
              alt=""
            />
          </router-link>
        </div>
      </div> -->


      <swiper
    :cssMode="false"

    :slidesPerView="2"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :mousewheel="false"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="relative">
        <img src="../assets/img/slider1.png" alt="" />
        <div class="absolute bottom-5 left-5 block">
          <div class="slider-content px-8 py-6 float-left">
            <div class="flex items-center align-middle">
              <span>01</span>
              <hr class="w-6 mx-2" />
              <span>Bed Room</span>
            </div>

            <h3 class="font-semibold text-2xl mt-2">Inner Peace</h3>
          </div>
          <router-link :to="{ name: 'Shop' }">
            <img
              class="bg-fn-primary float-right p-3"
              src="../assets/img/right-arrow.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="../assets/img/slider2.png" alt="" />
        <div class="absolute bottom-5 left-5 block">
          <div class="slider-content px-8 py-6 float-left">
            <div class="flex items-center align-middle">
              <span>01</span>
              <hr class="w-6 mx-2" />
              <span>Bed Room</span>
            </div>

            <h3 class="font-semibold text-2xl mt-2">Inner Peace</h3>
          </div>
          <router-link :to="{ name: 'Shop' }">
            <img
              class="bg-fn-primary float-right p-3"
              src="../assets/img/right-arrow.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative">
        <img src="../assets/img/slider3.png" alt="" />
        <div class="absolute bottom-5 left-5 block">
          <div class="slider-content px-8 py-6 float-left">
            <div class="flex items-center align-middle">
              <span>01</span>
              <hr class="w-6 mx-2" />
              <span>Bed Room</span>
            </div>

            <h3 class="font-semibold text-2xl mt-2">Inner Peace</h3>
          </div>
          <router-link :to="{ name: 'Shop' }">
            <img
              class="bg-fn-primary float-right p-3"
              src="../assets/img/right-arrow.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
<!-- 
      <div></div> -->
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  background-color: #fcf8f3;
  h2 {
    color: var(--Color-Gray-1, #3a3a3a);
  }
  p {
    color: var(--Color-Gray-2, #616161);
  }
  .slider-content {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(1.5px);
    hr,
    span {
      color: #616161;
    }
    h3 {
      color: var(--Color-Gray-1, #3a3a3a);
    }
  }

  .swiper-button-prev{
    display: none;
  }
//   .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

}
</style>
