<template>
    <div class="flex single-breadcamp py-5 px-10">
        <p>Home > Shop > | Product Name</p>
    </div>
    <div class="single-product-wrap flex px-10 pt-5 pb-12">
        <div class="flex w-1/2">
            <div>
                <img src="../assets/img/thumbnail.png" alt="" class="mb-5">
                <img src="../assets/img/thumbnail1.png" alt="">
            </div>
            <div>
                <img src="../assets/img/single-product.png" alt="">
            </div>
        </div>

        <div class="product-details w-1/2">
            <h2 class="text-4xl ">Asgaard sofa</h2>
            <h4 class="text-2xl mt-4 mb-5"> Rs. 250,000.00 </h4>
            <div class="flex">
                <img src="../assets/img/review.svg" alt="">
                <span> | </span>
                <p> 5 Customer Review</p>
            </div>
            <p class="text-sm py-5">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <p class="text-sm labelp">Size</p>
            <div class="my-4">
                <button class="bg-fn-primary text-white py-1 px-5 rounded mr-3">L</button>
                <button class="py-1 px-5 rounded mr-3 inactive-btn">XL</button>
                <button class="py-1 px-5 rounded inactive-btn">XS</button>
            </div>
            <p class="text-sm labelp">Color</p>
            <div class="mt-4 mb-5">
                <input type="radio" name="product_color" id="product_color1" class="w-12 h-12 rounded-full border border-opacity-10">
                <input type="radio" name="product_color" id="product_color2" class="w-12 h-12">
                <input type="radio" name="product_color" id="product_color3" class="w-12 h-12">
            </div>
            <div>
                <input type="number" value="1" name="" id="" class="border-black border rounded-lg p-2 text-center w-20 mr-5">
                <button class="border-black border rounded-lg px-9 py-2">Add to Cart</button>
            </div>
            <hr class="mt-14 mb-7">
            <div>
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class=""></th>
                            <th class="pr-5"></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>SKU</td>
                        <td>:</td>
                        <td>SS001</td>
                        </tr>
                        <tr>
                        <td>Category</td>
                        <td>:</td>
                        <td>Sofas</td>
                        </tr>
                        <tr>
                        <td>Tags</td>
                        <td>:</td>
                        <td>Sofa, Chair, Home, Shop</td>
                        </tr>
                        <tr>
                        <td>Share</td>
                        <td>:</td>
                        <td class="flex items-center">
                            <a href=""><img src="../assets/img/facebook.svg" alt="" class="mr-2"></a>
                            <a href=""><img src="../assets/img/linkedin.svg" alt="" class="mr-2"></a>
                            <a href=""><img src="../assets/img/twitter.svg" alt=""></a>
                        </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <hr>
    <div class="product-description">

    </div>
    <hr>
    <Product/>
</template>

<script>
import Product from "@/components/Product.vue";
import router from "@/router";

export default {
    components: { Product }
};
</script>

<style lang="scss" scoped>
.single-breadcamp{
    background-color: #FAF3EA;
}
.product-details{
    h4{
        color: #9f9f9f;
    }
    tbody{
        color: #9f9f9f;
    }
    .labelp{
        color: #9f9f9f;
    }
    .inactive-btn{
        background-color: #F9F1E7;
    }
    #product_color1{
        accent-color: #816DFA;
    }
    #product_color2{
        accent-color: black;
    }
    #product_color3{
        accent-color: #B88E2F;
    }
}
</style>