<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div> 
                <div><img src="~assets/img/detail/kefu.svg" alt=""></div>
                <span>客服</span>
            </div>
            <div>
                <div><img src="~assets/img/detail/dianpu.svg" alt=""></div>
                <span>店铺</span>
            </div>
            <div>
                <div><img src="~assets/img/detail/shoucang.svg" alt=""></div>
                <span>收藏</span>
            </div>
        </div>
       
        <div class="bar-item bar-right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailBottomBar",
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 10;
    background-color: #fff;
    height: 49px;
    width: 100%;
    text-align: center;
    font-size: 13px;
}
.bar-left{
    display: flex;
    width: 50%;
}
.bar-left img{
    width: 33%;
    padding-top: 2px;
}
.bottom-bar span{
    position: relative;
    bottom: 2px;
}
.bar-right{
    display: flex;
    line-height: 44px;
    width: 50%;
    text-align: center;
    font-size: 15px;
}
.cart{
    width: 50%;
    background-color: yellow;
}
.buy{
    width: 50%;
    color: #fff;
    background-color: #f85c9d;
}
</style>