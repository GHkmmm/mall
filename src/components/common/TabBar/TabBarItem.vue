<template>
    <div  class="tabbaritem" @click="itemClick()">
        <div class="imag">
            <slot name="Img" v-if="!isActive"></slot>
            <slot name="activeImg" v-else></slot>
        </div>
        <div :class="{test: isActive}"><slot name="test"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        components: {},
        props:{
            path: String
        },
        data(){
            return{
               active:false
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path==this.path
            }
        }
    }
</script>

<style scoped>
    .tabbaritem {
        flex: 1;
        text-align: center;
        font-size: 15px;
    }
    .imag img{
        height: 18px;
        width: 18px;
        margin-top: 5px;
        margin-bottom: -3px;
    }
    .test{
        color: #f85c9d;
    }
</style>