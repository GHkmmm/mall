<template>
    <div class="cart-bottom-bar">
        <div class="allSelect">
            <div style="width: 30px">
                <div class="total-selector" @click="showImg" :style="{border: noSelected}">
                    <img v-show="isShowImg" src="~assets/img/shopcart/xuanze.svg" alt="">
                </div>
            </div>
            <span>全选</span>
        </div>
        
        <div class="total-price">合计：{{showTotalPrice}}</div>
        <div class="buy-product" @click="Buy">去结算({{account}})</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "CartBottomBar",
    data(){
        return{
            isShowImg: false,
            noSelected: '1px solid #666',
            totalPrice: 0,
            selectCount: 0
        }
    },
    computed: {
        ...mapGetters(['cartList']),

        showTotalPrice(){
            this.getTotalPrice();
            return '¥'+ this.totalPrice;
        },
        account(){
            this.countChecked();
            return this.selectCount
        }
    },
    methods: {
        showImg(){
            this.isShowImg= !this.isShowImg;
            if(this.isShowImg){
                this.noSelected= '0px'
                for(let item of this.cartList){
                    item.checked=true;
                }
            }else{
                this.noSelected= '1px solid #666';
                for(let item of this.cartList){
                    item.checked=false;
                }
            }
        },
        getTotalPrice(){
            this.$bus.$off('Selected')
            this.$bus.$off('noSelected')
            this.$bus.$on('Selected', totalPrice =>{
                this.totalPrice+=totalPrice;
                this.getShowImg();
            })
            this.$bus.$on('noSelected', totalPrice =>{
                this.totalPrice-=totalPrice;
                this.getShowImg();
            })
        },

        getShowImg(){
            this.countChecked();
            console.log(this.selectCount,this.cartList.length);
            if(this.selectCount==this.cartList.length){
                this.isShowImg= true;
            }else{
                this.isShowImg= false;
            }
        },

        Buy(){
            if(this.selectCount==0){
                this.$toast.show('请选择商品')
            }else{
                this.$toast.show('正在跳转....')
            }
        },

        countChecked(){
            this.selectCount= this.cartList.filter(item =>{
                return item.checked==true
            }).length
        }
    }
}
</script>

<style scoped>
.cart-bottom-bar{
    display: flex;
    position: absolute;
    bottom: 49px;
    line-height: 50px;
    width: 100%;
    background-color: #eee;
    align-items: center;
    font-size: 16px;
}
.allSelect{
    width: 20%; 
    display:flex;
    align-items: center;
}
.total-selector{
    height: 20px;
    width: 20px;
    margin: 2px;
    border-radius: 100%;
}
.cart-bottom-bar img{
    width: 25px;
    height: 25px;
    position: relative;
    bottom: 9px;
    right: 2px;
}
.total-price{
    padding-left: 10px;
    width: 50%;
}
.buy-product{
    color: #fff;
    text-align: center;
    background-color: #c90064;
    width: 30%;
}
</style>