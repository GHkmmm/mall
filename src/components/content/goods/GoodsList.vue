<template>
    <div class="goods-list">
        <goods-listitem v-for="item in goods" :key="item.id" :product="item"></goods-listitem>
    </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem";

export default {
    name: "GoodsList",
    props: {
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GoodsListitem
    }
}
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>