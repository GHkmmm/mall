<template>
        <scroll class="cart-content" ref="scroll">
            <cart-list-item v-for="items in list[0]" :key="items.iid" :listItem="items"/>
        </scroll>
</template>

<script>
import cartListItem from './cartListItem';
import Scroll from 'components/common/scroll/Scroll';

export default {
    name: "CartList",
    components: {
        Scroll,
        cartListItem,
    },
    data(){
        return{
            list: []
        }
    },
    mounted(){
        this.list.push(this.$store.state.cartList)
        console.log(this.list);
    },
    activated(){
        this.$refs.scroll.scroll.refresh();
    }
}
</script>

<style scoped>
.cart-content{
    position: absolute;
    top: 44px;
    bottom: 99px;
    width: 100%;
}
</style>