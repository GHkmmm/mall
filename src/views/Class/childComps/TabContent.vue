<template>
    <div>
        <grid-view :cols="3" :lineSpace="15" :v-margin="20">
            <div v-for="item in classProduct" :key="item.id" class="content-item">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </div>
        </grid-view>
    </div>
</template>

<script>
import GridView from 'components/common/grid/GridView';

export default {
    name: "TabContent",
    props: {
        classProduct: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GridView
    }
}
</script>

<style scoped>
.content-item{
    text-align: center;
    font-size: 12px;
}
.content-item img{
    width:80%;
}
.content-item span{
    margin-top: 15px;
}
</style>