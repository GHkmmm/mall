<template>
    <div v-if="Object.keys(paramsInfo).length !== 0"> 
        <table class="sizes" v-for="table in paramsInfo.sizes" :key="table.id">
            <tr v-for="items in table" :key="items.id">
                <td v-for="item in items" :key="item.id">{{item}}</td>
            </tr>
        </table>
        <table class="infos">
            <tr v-for="items in paramsInfo.infos" :key="items.id">
                <td v-for="(value, key, pindex) in items" :key="pindex" :style="showColor(key)">{{value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "DetailParamsInfo",
    props: {
        paramsInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        showColor(key){
            if(key=='value') return {color: '#f85c9d'}
        }
    }
}
</script>

<style scoped>
.sizes, .infos{ 
    width: 95%;
    font-size: 15px;
    color: #666;
    margin: 10px;
}
.sizes td, .infos td{
    padding: 5px;
}
.sizes{
    border-bottom: 2px solid #ddd;
}
.infos td{
    width: 15px;
}
</style>