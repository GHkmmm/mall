<template>
  <div class="class">
      <class-nav-bar/>
      <div class="content">
        <tab-menu :menu="menu" class="class-menu" @menuItemClick="menuItemClick"/>
        <scroll class="tab-content">
            <tab-content :classProduct="classProduct"/>
            <tab-control :titles="['综合', '新品', '销售']" @tabClick="tabClick" />
            <tab-content-detail :classDetail="showClassDetail" />
        </scroll>
      </div>
      
  </div>
</template>

<script>
import ClassNavBar from './childComps/ClassNavBar'
import TabMenu from './childComps/TabMenu';
import Scroll from 'components/common/scroll/Scroll'
import TabContent from './childComps/TabContent';
import TabControl from 'components/content/TabControl';
import TabContentDetail from './childComps/TabContentDetail';

import { getClass, getSubcategory, getCategoryDetail } from 'network/class';
import { POP, SELL, NEW } from "common/const";
import { MixinTabConrol } from "common/mixin";

export default {
    name: 'Class',
    components: {
        ClassNavBar,
        TabMenu,
        Scroll,
        TabContent,
        TabControl,
        TabContentDetail
    },
    data(){
        return{
            menu:[],
            classProduct: [],
            classData: {},
            currentIndex: -1
        }
    },
    computed: {
        showClassDetail(){
            if(this.currentIndex===-1) return []
            return this.classData[this.currentIndex].classDetail[this.currentType]
        }
    },
    mixins: [MixinTabConrol],
    created(){
        this.getClass()
    },
    methods: {
        // 网络请求相关方法
        getClass(){
            getClass().then(res=>{
                console.log(res);

                //1.获取左侧菜单数据
                this.menu= res.data.category.list;
                console.log(this.menu);


                //2.初始化classData
                //为什么不在created里就初始化？
                //答：还未获取menu的长度 就无法确定classData的总长度
                for(let i=0; i< this.menu.length; i++){
                    this.classData[i] = {
                        subclass:{},
                        classDetail: {
                            'pop': [],
                            'new': [],
                            'sell': []
                        }
                    }
                } 
                //获取“正在流行”的相关数据
                this.getSubclass(0)
            })
        },
        getSubclass(index){
            this.currentIndex = index;
            const maitKey = this.menu[index].maitKey;

            //通过左侧菜单每行对应的maitKey值获取相应的商品数据
            getSubcategory(maitKey).then(res => {
                console.log(res);
                this.classProduct= res.data.list;
                this.classData[index].subclass= res.data;
                this.classData= {...this.classData};

                this.getClassDetail(POP)
                this.getClassDetail(NEW)
                this.getClassDetail(SELL)
            })
        },
        getClassDetail(type){
            const miniWallkey= this.menu[this.currentIndex].miniWallkey;
            getCategoryDetail(miniWallkey, type).then(res =>{
                this.classData[this.currentIndex].classDetail[type]= res;
            })
        },


        //其他方法
        menuItemClick(index){
            this.getSubclass(index);
        }
    }
}
</script>

<style scoped>
.content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    display: flex;
}
.tab-content{
  height: 100%;
  width: 80%;
}
</style>
