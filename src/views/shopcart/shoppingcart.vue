<template>
    <div class="shopcart">
        <nav-bar class="cart-nav-bar"><div slot="center">购物车({{$store.state.cartList.length}})</div></nav-bar>
        <cart-list class="cart-list"/>
        <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';
    
    export default {
        name: "shoppingcart",
        components: {
            NavBar,
            CartList,
            CartBottomBar
        }
    }
</script>

<style scoped>
.shopcart{
    height: 100%
}
.cart-nav-bar{
    background-color: #f85c9d;
    color: #fff;
    line-height: 44px;
    font-size: 18px;
}
.cart-list{
    overflow: hidden;
}
</style>