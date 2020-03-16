<template>
    <div class="tabBar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "TabBar",
        components: {}
    }
</script>

<style scoped>
    .tabBar{
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: whitesmoke;
        width: 100%;
        height: 49px;
    }
</style>