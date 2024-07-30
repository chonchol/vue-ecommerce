<template>
    <div class="flex justify-center align-middle items-center py-14 px-3 service-wrap">
        <div class="flex justify-center items-center mr-6">
            <img src="../assets/img/trophy.svg" alt="">
            <div class="service-item ml-3">
                <h3 class="font-bold text-2xl">High Quality</h3>
                <p class="text-xl">crafted from top materials</p>
            </div>
        </div>
        <div class="flex justify-center items-center mr-6">
            <img src="../assets/img/guarantee.svg" alt="">
            <div class="service-item ml-3">
                <h3 class="font-bold text-2xl">Warranty Protection</h3>
                <p class="text-xl">Over 2 years</p>
            </div>
        </div>
        <div class="flex justify-center items-center mr-6">
            <img src="../assets/img/shipping.svg" alt="">
            <div class="service-item ml-3">
                <h3 class="font-bold text-2xl">Free Shipping</h3>
                <p class="text-xl">Order over 150 $</p>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <img src="../assets/img/customer-support.svg" alt="">
            <div class="service-item ml-3">
                <h3 class="font-bold text-2xl">24 / 7 Support</h3>
                <p class="text-xl">Dedicated support</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.service-wrap{
    background-color: #FAF3EA;
    img{
        width: 16%;
    }
    .service-item{
        h3{
            color: #242424;
        }
        p{
            color: #898989;
        }
    }
}
</style>