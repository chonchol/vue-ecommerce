<template>
    <div class="hero-wrap bg-cover bg-center bg-no-repeat w-full h-screen flex justify-end items-center pr-12">
        <div class="hero-content p-10 rounded-xl">
            <span class="font-semibold">New Arrival</span>
            <h2 class="font-bold mt-3 mb-6">Discover Our New Collection</h2>
            <p class="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <router-link :to="{ name: 'Shop' }">
                <button class="text-white py-5 px-16 mt-12">BUY NOW</button>
            </router-link>
            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero-wrap{
    background-image: url('../assets/img/hero-bg.png');
}
.hero-content{
    background: #FFF3E3;
    width: 643px;
    height: 443px;
}
span{
    color: var(--Font-Color, #333);
    letter-spacing: 3px;
}
h2{
    color: var(--Primary, #B88E2F);
    font-size: 52px;
    line-height: 65px; /* 125% */
}
p{
    color: var(--Font-Color, #333);
    font-size: 18px;
    line-height: 24px; 
}
button{
    background-color: var(--Primary, #B88E2F);
}
</style>