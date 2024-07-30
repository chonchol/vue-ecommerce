<template>
    <div class="absolute top-0 text-center hover-effect w-full h-full">
        <button class="bg-white text-fn-primary px-5 py-3 mb-5">Add to cart</button>
        <div class="flex justify-center items-center">
            <div class="flex justify-center items-center mr-2">
                <img src="../assets/img/share.svg" alt="">
                <p class="text-white font-semibold">Share</p>
            </div>
            <div class="flex justify-center items-center mr-2">
                <img src="../assets/img/compare.svg" alt="">
                <p class="text-white font-semibold ml-1">Compare</p>
            </div>
            <div class="flex justify-center items-center">
                <img src="../assets/img/heart.svg" alt="">
                <p class="text-white font-semibold ml-1">Like</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hover-effect{
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
    // width: 92%;
    // height: 96%;
    padding-top: 50%;
    
}
</style>