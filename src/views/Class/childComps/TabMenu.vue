<template>
    <scroll class="menu-content">
        <div class="menu-list">
            <div v-for="(item,index) in menu" 
                 :key="index" 
                 class="menu-list-item" 
                 :class="{actived: currentIndex==index}"
                 @click="itemClick(index)">
                 {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';

export default {
    name: "TabMenu",
    props: {
        menu: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex: 0,
        }
    },
    components: {
        Scroll
    },
    methods: {
        itemClick(index){
            this.currentIndex= index;
            this.$emit('menuItemClick', index)
        }
    }
}
</script>

<style scoped>
.menu-content{
    height: 100%;
    width: 20%;
    text-align: center;
    background-color: #eee;
    color: #666;
    font-size: 14px;
}
.menu-list-item{
    line-height: 45px;
}
.actived{
    background-color: #fff;
    border-left: 4px solid #f85c9d
}
</style>