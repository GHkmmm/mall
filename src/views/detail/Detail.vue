<template>
    <div class="detail">

        <detail-nav-bar class="detail-nav" @detailTabClick="DetailTabClick" ref="nav"/>
        <scroll class="content" 
                ref="scroll"
                :probeType="3"
                @showBackTop="showBackTop">
            <detail-swiper :swiperImg="swiperImg"/>
            <div class="goods-info"><detail-goods-info :goodsInfo="goodsInfo"/></div>
            <div class="shop-info"><detail-shop-info :shopInfo="shopInfo" /></div>
            <div><detail-info class="info" :detailInfo="detailInfo" ref="info" @detailImgLoad="detailImgLoad"/></div>
            <div><detail-params-info class="params-info" :paramsInfo="paramsInfo" /></div>
            <div><detail-comment-info class="comment-info" :commentInfo="commentInfo" ref="comment"/></div>
            <goods-list :goods="recommendInfo" ref="recommend"/>
        </scroll>

        <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
        
        <toast ref="toast"/>
        <detail-bottom-bar @addCart="addCart"/>
    </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import Scroll from "components/common/scroll/Scroll"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailInfo from './childComps/DetailInfo';
import DetailParamsInfo from './childComps/DetailParamsInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import GoodsList from 'components/content/goods/GoodsList';
import BackTop from "components/content/backTop/BackTop"
import Toast from 'components/common/toast/Toast';

import DetailBottomBar from './childComps/DetailBottomBar';

import {getDetailData, getRecommend, Goods, Shop, ParamsInfo} from "network/detail"

export default {
    name: 'Detail',
    data(){
        return{
            iid: null,
            swiperImg: [],
            goodsInfo: {},
            shopInfo: {},
            detailInfo: {},
            paramsInfo: {},
            commentInfo: {},
            recommendInfo: [],
            isShowBackTop: false,
            infoTop: 0,
            commentTop: 0,
            recommendTop: 0
        }
    },
    components: {
        DetailNavBar,
        Scroll,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        BackTop,
        Toast,
        DetailBottomBar
    },
    created(){
        this.iid= this.$route.params.id;

        this.getDetailData(this.iid);
        this.getRecommend();
    },
    mounted(){
        this.$bus.$on('imgLoad', ()=>{
            this.$refs.scroll.scroll.refresh();
        })
    },
    destroyed(){
        this.$bus.$off('imgLoad')
    },
    methods: {
        DetailTabClick(index){
            this.calcTop()

            switch(index){
                case 0: 
                    this.$refs.scroll.scrollTo(0, 0, 300);
                    break;
                case 1:
                    this.$refs.scroll.scrollTo(0, -this.infoTop, 300)
                    break;
                case 2:
                    this.$refs.scroll.scrollTo(0, -this.commentTop, 300)
                    break;
                case 3:
                    this.$refs.scroll.scrollTo(0, -this.recommendTop, 300)
                    break;
            }
        },
        detailImgLoad(){
            this.$refs.scroll.scroll.refresh();
        },
        showBackTop(yPosition){
            this.calcTop()

            //滚动切换navbar的颜色
            if(-yPosition>=this.recommendTop){
                this.$refs.nav.currentIndex=3;
            }else if(-yPosition>=this.commentTop){
                this.$refs.nav.currentIndex=2;
            }else if(-yPosition>=this.infoTop){
                this.$refs.nav.currentIndex=1;
            }else{
                this.$refs.nav.currentIndex=0;
            }
            //判断backtop图标是否显示
            if(-yPosition>1000){
                this.isShowBackTop= true
            }else{
                this.isShowBackTop= false;
            }
        },
        calcTop(){
            this.infoTop= this.$refs.info.$el.offsetTop
            this.commentTop= this.$refs.comment.$el.offsetTop
            this.recommendTop= this.$refs.recommend.$el.offsetTop
        },
        backTop(){
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        addCart(){
            const product= {};
            product.img= this.swiperImg[0];
            product.title= this.goodsInfo.title;
            product.desc= this.goodsInfo.desc;
            product.realPrice= this.goodsInfo.realPrice;
            product.iid= this.iid;
            this.$store.dispatch('addToCart', product).then(res => {
                this.$toast.show(res)
            })
        },

        /**
         * 
         * 网络请求相关方法
         * 
         * */

        getDetailData(iid){
            getDetailData(iid).then(res =>{
                const data= res.result;
                //1.轮播图数据
                this.swiperImg= data.itemInfo.topImages;

                //2.商品标题数据
                this.goodsInfo= new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                //3.店铺信息数据
                this.shopInfo= new Shop(data.shopInfo)

                //4.商品的详细数据
                this.detailInfo= data.detailInfo

                //5.获取商品的尺码信息
                this.paramsInfo= new ParamsInfo(data.itemParams.info, data.itemParams.rule)

                //6.获取商品评论信息
                if(data.rate.cRate!=0){
                    this.commentInfo= data.rate.list[0]
                }
            })
        },

        getRecommend(){
            getRecommend().then(res =>{
                this.recommendInfo= res.data.list
            })
        }
    }
}
</script>

<style scoped>
.detail-nav{
    position: absolute;
    z-index: 9
}
.content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    z-index: 8;
    background-color: #fff;
}
.goods-info, .info, .params-info, .comment-info{
    border-bottom: 4px solid #ddd;
}
.shop-info{
    padding-bottom: 5px;
    border-bottom: 4px solid #ddd;
}
</style>