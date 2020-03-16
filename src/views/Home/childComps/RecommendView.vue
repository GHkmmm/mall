<template>
    <div class="recommend">
        <div class="recommenditem" v-for="item in recommends" :key="item.id">
            <a :href="item.link">
                <img :src="item.image">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends:{
            type: Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    width: 100%;
    border-bottom: 7px solid #eee;
}
.recommenditem{
    padding: 12px;
    flex: 1;
}
.recommend img{
    width: 66px;
    height: 66px;
    padding-bottom: 5px;
}
</style>