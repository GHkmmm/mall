<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="Img" src="~assets/img/tabbar/tabbarhome.svg">
                <img slot="activeImg" src="~assets/img/tabbar/tabbarhomeselect.svg">
                <div slot="test">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/class">
                <img slot="Img" src="~assets/img/tabbar/fenleishouye.svg">
                <img slot="activeImg" src="~assets/img/tabbar/kinds.svg">
                <div slot="test">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/shoppingcart">
                <img slot="Img" src="~assets/img/tabbar/gouwuche-2.svg">
                <img slot="activeImg" src="~assets/img/tabbar/gouwuche.svg">
                <div slot="test">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/me">
                <img slot="Img" src="~assets/img/tabbar/xiazai4.svg">
                <img slot="activeImg" src="~assets/img/tabbar/wodedangxuan.svg">
                <div slot="test">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../common/TabBar/TabBar";
    import TabBarItem from "../common/TabBar/TabBarItem";

    export default {
        name: 'MainTabber',
        components: {TabBar,TabBarItem}
    }
</script>

<style scoped>

</style>