<template>
    <PageHero/>
    <div class="grid grid-cols-3 gap-4 px-12 py-20">
        <div class="col-span-2 table-wrapper">
            <table class="table-auto">
                <thead>
                    <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><img src="../assets/img/product-cart.png" alt=""></td>
                    <td class="product-name">Asgaard sofa</td>
                    <td class="product-price">Rs. 250,000.00</td>
                    <td><input type="number" name="product_quantity" id="product_quantity" class="border rounded focus:outline-none text-center" value="1"></td>
                    <td>Rs. 250,000.00</td>
                    <td><img src="../assets/img/delete.svg" alt=""></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cart-details px-14 pt-6 pb-20">
            <h2 class="text-5xl font-semibold text-center">Cart Total</h2>
            <div class="flex justify-between mt-12 mb-3">
                <h4 class="font-medium">Subtotal</h4>
                <p class="subcolor">Rs. 250,000.00</p>
            </div>
            <div class="flex justify-between mb-8">
                <h4 class="font-medium">Total</h4>
                <p class="text-fn-primary text-xl">Rs. 250,000.00</p>
            </div>
            <div class="text-center">
                <button type="submit" class="text-center rounded-lg border border-black px-8 py-2">Checkout</button>
            </div>
            
        </div>
    </div>
    <Service/>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue';
import Service from '@/components/Service.vue';


</script>

<style lang="scss" scoped>
.table-wrapper{
    thead{
        background-color: #F9F1E7;
        th{
            padding-right: 150px;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    tbody{
        #product_quantity{
            width: 25%;
        }
        .product-name, .product-price{
            color: #9F9F9F;
        }
    }
}
.cart-details{
    background-color: #F9F1E7;
    .subcolor{
        color: #9F9F9F;
    }
}
</style>