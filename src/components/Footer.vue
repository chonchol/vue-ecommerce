<template>
    <hr>
    <div class="px-10">
        <div class="flex justify-between items-start my-12">
            <div class="w-2/6">
                <p class="font-bold text-2xl">Funiro.</p>
                <span class="text-xs">400 University Drive Suite 200 Coral <br> Gables, <br>
                FL 33134 USA</span>
            </div>
            <div class="1/6">
                <h2 class="text-base font-medium mb-14">Links</h2>
                <ul class="flex flex-col">
                    <router-link class="text-base font-medium mb-7" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="text-base font-medium mb-7" :to="{ name: 'Shop' }">Shop</router-link>
                    <router-link class="text-base font-medium mb-7" :to="{ name: 'About' }">About</router-link>
                    <router-link class="text-base font-medium mb-7" :to="{ name: 'Contact' }">Contact</router-link>
                </ul>
            </div>
            <div class="1/6">
                <h2 class="text-base font-medium mb-14">Help</h2>
                <ul class="flex flex-col">
                    <router-link class="text-base font-medium mb-7" to="#">Payment Options</router-link>
                    <router-link class="text-base font-medium mb-7" to="#">Return</router-link>
                    <router-link class="text-base font-medium mb-7" to="#">Privacy Policies</router-link>

                </ul>
            </div>
            <div class="w-2/6">
                <h2 class="text-base font-medium mb-14">Newsletter</h2>
                <input class="focus:outline-none border-b border-black" type="text" placeholder="Enter your email address">
                <button class="border-b border-black font-medium text-sm ml-4">SUBSCRIBE</button>
            </div>
        </div>
        <hr>
        <p class="py-8">2023 furino. All rights reverved</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
span{
    color: #9F9F9F;
}
h2{
    color: #9F9F9F;
}
li:last-child{
    margin-bottom: 0;
}
</style>