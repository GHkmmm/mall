<template>
    <div class="good-info">
        <div class="title">{{goodsInfo.title}}</div>
        <div class="price">
            <div class="realPrice">{{showPrice}}</div>
            <div class="oldPrice">{{goodsInfo.oldPrice}}</div>
            <div class="discount">{{goodsInfo.discount}}</div>
        </div>
        <div class="columns">
            <div v-for="(item, index) in goodsInfo.columns" :key="(item, index)" class="columnsItem" :style="getStyle(index)">{{item}}</div>
        </div>
        <div class="services">
            <div v-for="(item, index) in goodsInfo.services" :key="(item, index)" class="servicesItem" v-show="index!=3" :style="getStyle(index)">
                <img :src="item.icon">{{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailGoodsInfo",
    props: {
        goodsInfo: {
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
    computed:{
        showPrice(){
            return '¥'+this.goodsInfo.realPrice
        }
    },
    methods: {
        getStyle(index){
            if(index==0) return {textAlign: 'left'};
            if(index==1) return {textAlign: 'center'}
            if(index==2) return {textAlign: 'right'};
        }
    },
}
</script>

<style scoped>
.good-info{
    margin: 10px;
}
.title{
    font-size: 20px
}
.price{
    display: flex;
    padding-top: 5px;
    padding-bottom: 30px;
}
.realPrice{
    color: #f85c9d;
    padding-right: 5px;
    font-size: 18px;
}
.oldPrice{
    color: #ccc;
    font-size: 10px;
    line-height: 24px;
    padding-right: 10px;
    text-decoration: line-through
}
.discount{
    color: #fff;
    border-radius: 10px;
    text-align: center;
    background-color: #f85c9d;
    padding-right: 5px;
    padding-left: 5px;
}
.columns{
    display: flex;
    color: #aaa;
    font-size: 15px;
    padding-bottom: 5px; 
    border-bottom: 1px solid #ddd; 
}
.columnsItem{
    flex: 1;
}
.services{
    display: flex;
    font-size: 15px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;

}
.servicesItem{
    flex: 1;
}
.services img{
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
    padding-right: 2px; 
}
</style>