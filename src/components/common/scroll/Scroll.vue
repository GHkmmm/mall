<template>
    <div class="wrapper" ref="wrapper">
        <div class="cont">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            scroll: null
        }
    },
    mounted(){

        this.scroll= new BScroll(this.$refs.wrapper, {
            click: true,
            mouseWheel: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })

        this.scroll.on('scroll', (position) =>{
            const yPosition=position.y
            this.$emit("showBackTop", yPosition)
        })

        this.scroll.on('pullingUp',() => {
            this.$emit("pullingUp")
        })
    },
    methods: {
        scrollTo(x, y, time){
            this.scroll.scrollTo(x, y, time)
        }
    }
}
</script>

<style scoped>

</style>