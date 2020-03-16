<template>
   <div class="detail-shop-info">
       <div class="base-info">
           <div class="logo"><img :src="shopInfo.logo"></div>
           <div class="name">{{shopInfo.name}}</div>
       </div>
       <div class="bottom">
        <div class="goods">
            <div class="sells">{{showSells}}<div class="sells-text">总销量</div></div>
            <div class="goods-count">{{shopInfo.goodsCount}}<div class="count-text">全部宝贝</div></div>
        </div>
        <div class="score">
            <div v-for="(item, index) in shopInfo.score" :key="(item, index)" class="score-item">
                <span>{{item.name+': '}}</span>
                <span :style="getStyle(item.isBetter)" style="width: 20%">{{item.score}}</span>
                <span v-show="!item.isBetter" class="low">低</span>
                <span v-show="item.isBetter" class="high">高</span>
            </div>
        </div>
       </div>
   </div> 
</template>

<script>
export default {
    name: "ShopInfo",
    props: {
        shopInfo:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    computed: {
        showSells(){
            if(this.shopInfo.sells>10000)
            return (this.shopInfo.sells/10000).toFixed(1)+ '万'
        }
    },
    methods: {
        getStyle(isBetter){
            if(isBetter) return {color: 'red'}
            else return {color: 'green'}
        }
    }
}
</script>

<style scoped>
.detail-shop-info{
    padding: 3px
}
.base-info{
    display: flex;
    padding-top: 10px;
}
.bottom{
    display: flex;
    margin: 5px;
}
.logo img{
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin: 10px;
    border: 1px solid #aaaaaa
}
.name{
    line-height: 80px;
    color: #888;
}
.goods{
    width: 45%;
    display: flex;
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 20px;
}
.goods-count{
    width: 45%;
    height: 50px;
    padding-right: 20px;
    border-right: 2px solid #777;
}
.sells{
    padding-right: 10px;
    width: 40%;
}
.sells-text, .count-text{
    font-size: 15px;
}
.score{
    width: 45%;
    margin-left: 15px 
}
.score-item{
    height: 22px;
    line-height: 25px;
    display: flex;
    font-size: 15px;
    padding: 5px;
}
.high, .low{
    color: #fff;
    border-radius: 3px;
    margin-left: 4px;
}
.high{
    background-color: red;
}
 .low{
     background-color: green;
 }
</style>