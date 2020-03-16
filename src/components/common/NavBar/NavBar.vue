<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>

    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        width: 100%;
    }
    .center{
        width: 60%;
        text-align: center;
    }
    .left,
    .right{
        width: 20%;
    }
</style>