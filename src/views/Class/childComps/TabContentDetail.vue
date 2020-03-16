<template>
    <grid-view :lineSpace="15" :v-margin="10">
        <goods-listitem v-for="(item, index) in classDetail" :key="index" :product="item" class="class-list-item" />
    </grid-view>
</template>

<script>
import GoodsListitem from 'components/content/goods/GoodsListitem';
import GridView from 'components/common/grid/GridView';

export default {
    name: 'TabContentDetail',
    props: {
        classDetail: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GoodsListitem,
        GridView
    },
    mounted(){
        console.log(this.classDetail)
    }
}
</script>

<style scoped>
.class-list-item{
    margin: 2%;
}
</style>