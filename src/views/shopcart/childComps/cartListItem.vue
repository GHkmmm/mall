<template>
    <div>
        <div class="cart-list-item">
            <div class="selector" @click="selectorClick">
                <img v-show="showChecked" src="~assets/img/shopcart/xuanze.svg" alt="">
            </div>
            <div class="item-img"><img :src="listItem.img" alt=""></div>
            <div class="item-info">
                <div class="item-title">{{listItem.title}}</div>
                <div class="item-desc">{{listItem.desc}}</div>
                <div class="price">
                    <div class="item-real-price">{{showPrice}}</div>
                    <div class="item-count">
                        <button @click="decrement">-</button>
                        {{showCount}}
                        <button @click="increment">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cartListItem",
    props: {
        listItem: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            
        }
    },
    computed: {
        showPrice(){
            return '¥'+this.listItem.realPrice
        },
        showCount(){
            return this.listItem.count
        },
        showChecked(){
            return this.listItem.checked
        }
    },
    methods: {
        selectorClick(){
            //1.设置是否选择商品
            //this.showSelector= !this.showSelector;

            //2.设置checked值
            this.listItem.checked=!this.listItem.checked
            console.log(this.listItem.checked);

            //3.判断是否选择商品，并计算总价格给bottomBar显示
            let totalPrice= this.listItem.realPrice*this.listItem.count;
            if(this.listItem.checked){
                this.$bus.$emit('Selected', totalPrice)
            }else{
                this.$bus.$emit('noSelected', totalPrice)
            }
        },
        increment(){
            this.listItem.count++;
            if(this.listItem.checked){
                this.$bus.$emit('Selected', this.listItem.realPrice*1)
            }
        },
        decrement(){
            if(this.listItem.count>0){
                this.listItem.count--;
            }
            if(this.listItem.checked){
                this.$bus.$emit('noSelected', this.listItem.realPrice*1)
            }
        }
    }
}
</script>

<style scoped>
.cart-list-item{
    display: flex;
    height: 100px;
    width: 100%;
    overflow: hidden;
    padding: 3px;
    border-bottom: 1px solid #bbb;
    font-size: 16px;
}
.selector{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #333;
    margin: 3px;
    position: relative;
    top: 40px
}
.selector img{
    width: 26px;
    height: 26px;
    position: relative;
    bottom: 3px;
    right: 3px;
}
.item-img{
    width: 80px;
}
.item-img img{
    width: 100%;
    height: 95px;
    margin: 3px;
    border-radius: 5px;
}
.item-info{
    width: 270px;
}
.item-title, .item-desc{
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    margin: 10px;
}
.item-desc{
    color: #666;
    font-size: 12px;
    margin-bottom: 20px;
}
.price{
    display: flex;
    margin: 10px;
}
.item-real-price, .item-count{
    width: 50%;
}
.item-real-price{
    color: #c90064;
}
.item-count{
    text-align: right
}
</style>