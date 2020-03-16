<template>
  <div id="home">
    <home-nav-bar class="home-nav"/>

    <tab-control :titles="['流行', '新款', '精选']"
                  class="tab-control" 
                  @tabClick="tabClick"
                  v-show="isShowTC1"
                  ref="tc1"/>

    <scroll class="content"
            :probeType="3"
            :pullUpLoad="true"
            ref="scroll"
            @pullingUp= "pullingUp"
            @showBackTop= "showBackTop">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends= "recommends"/>
      <feature-view/>

      <tab-control :titles="['流行', '新款', '精选']" 
                    class="tab-control" 
                    @tabClick="tabClick"
                    ref="tc2"/>

      <goods-list :goods="showGoods" ref="gl" class="goods-list"/>

    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import HomeNavBar from "components/content/HomeNavBar";
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import TabControl from "components/content/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop"

  import { getHomeMultidata, getHomeGoods } from "network/home";

  export default {
    name: 'Home',
    data(){
      return{
        result: null,
        banners: [],
        recommends: [],
        titles: [],
        goods:{
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        isShowTC1: false
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created(){
      this.getHomeMultidata();

      this.getHomeGoods('pop')
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted(){
      this.$bus.$on('imgLoad', () =>{
        this.$refs.scroll.scroll.refresh();
      })
    },
    activated(){

    },
    deactivated(){
      this.$bus.$off('imgLoad');
    },
    methods: {
      tabClick(index){
        switch(index){
          case 0:
             this.currentType= 'pop';
             break;
          case 1:
            this.currentType= 'new';
            break;
          case 2:
            this.currentType= 'sell';
            break;
        }

        this.$refs.tc1.currentIndex= index;
        this.$refs.tc2.currentIndex= index;
      },
      pullingUp(){
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.scroll.finishPullUp();
      },
      showBackTop(yPosition){
        //判断tabcontrol是否吸顶
        if(-yPosition>= this.$refs.tc2.$el.offsetTop){
          this.isShowTC1= true;
        }else{
          this.isShowTC1= false;
        }

        //判断backtop图标是否显示
        if(-yPosition>1000){
          this.isShowBackTop= true
        }else{
          this.isShowBackTop= false
        }
      },
      backTop(){
        this.$refs.scroll.scrollTo(0, 0, 300);
      },

      /**
       * 
       * 网络请求相关方法
       * 
       * */

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.result= res.data;
        this.banners= res.data.banner.list;
        this.recommends= res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page= this.goods[type].page+1
        getHomeGoods(type, page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

        })
      }
    }
  }

</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .content{
    overflow: hidden;

    position: absolute;
    top: 49px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    background: #ffffff;
    position: relative;
    z-index: 8;
  }
</style> 