<template>
    <swiper class="detailSwiper">
        <swiper-item v-for="item in swiperImg" :key="item">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/Swiper"

export default {
    name: "DetailSwiper",
    props: {
        swiperImg: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.detailSwiper{
    height: 300px;
}
</style>