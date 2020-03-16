<template>
    <div class="goods-list-item" @click="goodClick">
        <img :src="showImage" @load="imgLoad">
        <div class="product-info">
            <p class="title">{{product.title}}</p>
            <span class="price">{{pPrice}}</span>
            <span class="cfav">{{pCfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListitem",
    props: {
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            iid: this.product.iid
        }
    },
    computed: {
        showImage(){
            return this.product.image || this.product.img || this.product.show.img 
        },
        pPrice(){
            return '¥'+this.product.price
        },
        pCfav(){
            return '🌟'+this.product.cfav
        }
    },
    methods: {
        imgLoad(){
            this.$bus.$emit('imgLoad');
        },
        goodClick(){
            this.$router.push('/detail/'+this.iid)
        }
    }
}
</script>

<style scoped>
.goods-list-item{
    width: 46%;
    position: relative;
    padding-top:10px;
}
.goods-list-item img{
    width: 100%;
    border-radius: 5px;
}
.product-info{
    width: 100%;
    text-align: center;
}
.title{
    font-size: 13px;
    margin: 0;
    padding-bottom: 5px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
}
span{
    font-size: 10px;
}
.price{
    padding-right: 20px; 
    color: #f85c9d;
}
</style>