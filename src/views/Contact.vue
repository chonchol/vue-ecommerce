<template>
    <div>
        <PageHero/>
        <div class="contact-content flex items-center flex-col py-28 px-20">
            <h2 class="font-bold text-5xl mb-4">Get In Touch With Us</h2>
            <p class="w-1/2 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div class="form-wrapper grid grid-cols-3 gap-4 px-28 pb-14">
            <div class="contact-area">
                <div class="flex items-start mb-7">
                    <img src="../assets/img/address.svg" alt="">
                    <div class="ml-4">
                        <h4 class="font-semibold">Address</h4>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div class="flex items-start mb-7">
                    <img src="../assets/img/phone.svg" alt="">
                    <div class="ml-4">
                        <h4 class="font-semibold">Phone</h4>
                        <p>Mobile: +(84) 546-6789</p>
                        <p>Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <img src="../assets/img/clock.svg" alt="">
                    <div class="ml-4">
                        <h4 class="font-semibold">Working Time</h4>
                        <p>Monday-Friday: 9:00 - 22:00
                           <br> Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div class="form-area col-span-2 pl-14">
                <div class="flex flex-col mb-6">
                    <label class="mb-3 font-medium" for="">Your name</label>
                    <input class="border py-3 px-4 rounded" type="text" placeholder="Enter your name">
                </div>
                <div class="flex flex-col mb-6">
                    <label class="mb-3 font-medium" for="">Email address</label>
                    <input class="border py-3 px-4 rounded" type="email" placeholder="Enter your name">
                </div>
                <div class="flex flex-col mb-6">
                    <label class="mb-3 font-medium" for="">Subject</label>
                    <input class="border py-3 px-4 rounded" type="text" placeholder="Enter your name">
                </div>
                <div class="flex flex-col mb-6">
                    <label class="mb-3 font-medium" for="">Message</label>
                    <textarea class="border py-3 px-4 rounded" name="message" id="" cols="30" rows="5"></textarea>
                </div>
                <button type="submit" class="bg-fn-primary rounded text-white py-3 px-12">Submit</button>
            </div>
        </div>

        <Service />

    </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue';
import Service from '@/components/Service.vue';
</script>

<style lang="scss" scoped>

</style>