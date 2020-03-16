<template>
    <div class="detail-info">
        <div>{{detailInfo.desc}}</div>
        <div v-for="(items,indexes) in detailInfo.detailImage" :key="(items,indexes)">
            {{items.key}}
            <div class="detail-image" v-for="(item,index) in items.list" :key="(item,index)">
                <img :src="item" alt="" @load="detailImgLoad">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailInfo",
    props: {
        detailInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        detailImgLoad(){
            this.$emit('detailImgLoad')
        }
    }
}
</script>

<style scoped>
.detail-image img{
    width: 100%;
    margin: 5px, 0, 5px, 0 ;
}
</style>