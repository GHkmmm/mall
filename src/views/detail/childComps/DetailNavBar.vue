<template>
    <nav-bar class="nav-bar">
        <div slot="left" class="back" @click="backClick"><img src="~assets/img/detail/back.svg" ></div>
        <div slot="center" class="tab">
            <div v-for="(item, index) in titles" 
                 :key="(item,index)" 
                 class="tab-item" 
                 :class="{ active: currentIndex==index}"
                 @click="tabClick(index)">
                 {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar"

export default {
    name: "DetailNavBar",
    components: {
        NavBar
    },
    data(){
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        backClick(){
            this.$router.go(-1);
        },
        tabClick(index){
            this.currentIndex= index;
            this.$emit('detailTabClick', index)
        }
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: #ffff;
    height: 44px;
}
.back{
    height: 44px;
    position: relative;
}
.back img{
    width: 100%;
    height: 25px;
    position: absolute;
    bottom: 10px;
}
.tab{
    display: flex;
    line-height: 44px;
}
.tab-item{
    flex: 1;
}
.active{
    color: #f85c9d;
}
</style>