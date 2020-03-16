<template>
    <div class="tabcontrol">
        <div class="tabcontrolitem" 
            :class="{ active: index== currentIndex }" 
            v-for="(item, index) in titles" 
            :key="(item,index)" 
            @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: Array
    },
    data(){
        return{
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex= index;
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style scoped>
.tabcontrol{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    height: 33px;
}
.tabcontrolitem{
    flex: 1;
    padding-bottom: 5px;
    padding: 5px;
}
.active span{
    color: #f85c9d;
    border-bottom: 2px solid #f85c9d;
}
</style>