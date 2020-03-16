<template>
    <div class="back-top">
        <img src="~assets/img/home/backtop.svg">
    </div>  
</template>

<script>
export default {
    name: "BackTop"
}
</script>

<style scoped>
.back-top{
    position: fixed;
    bottom: 60px;
    right: 10px;
    z-index: 9;
  }
img{
    height: 40px;
    width: 40px;
}
</style>