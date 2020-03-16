<template>
    <div>
        <nav-bar class="navbar">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../common/NavBar/NavBar";
    export default {
        name: "HomeNavBar",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
.navbar{
    width: 100%;
    background-color: #f85c9d;
    font-size: 20px;
    color: white;
    height: 49px;
    line-height: 49px;
}
</style>