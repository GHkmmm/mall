<template>
    <div>
        <nav-bar class="class-nav-bar">
            <div slot="center">商品分类</div>
        </nav-bar>
    </div>
    
</template>

<script>
import NavBar from 'components/common//NavBar/NavBar';
export default {
    name: "ClassNavBar",
    components: {
        NavBar
    }
}
</script>

<style scoped>
.class-nav-bar{
    height: 44px;
    background-color: #f85c9d;
    color: #fff;
    line-height: 44px;
    font-size: 18px;
}
</style>