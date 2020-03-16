<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return{
            isShow: false,
            message: ''
        }
    },
    methods: {
        show(message='默认文字', duration=2000){
            this.isShow= true;
            this.message= message;

            setTimeout(()=>{
                this.isShow= false;
                this.message= ''
            }, duration)
        }
    }
}
</script>

<style scoped>
.toast{
    background-color: #999;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    width: 120px;
    line-height: 30px;
    border-radius: 5px;
    font-size: 15px;
}
</style>