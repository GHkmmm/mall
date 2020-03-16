<template>
    <div ref="gridView" class="grid-view">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GirdView',
    props: {
        cols: {
            type: Number,
            default: 2
        },
        hMargin: {
		    type: Number,
            default: 8
        },
        vMargin: {
		    type: Number,
            default: 8
        },
        itemSpace: {
		    type: Number,
            default: 8
        },
        lineSpace: {
		    type: Number,
            default: 8
        }
    },
    mounted(){
        setTimeout(this.autoLayout, 300)
    },
    methods: {
        autoLayout(){
            let gridEl= this.$refs.gridView;
            let children= gridEl.children;

            gridEl.style.padding= `${this.vMargin}px ${this.hMargin}px`

            let itemWidth= (gridEl.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols
            console.log(itemWidth);

            for(let i=0;i<=children.length;i++){
                let item= children[i];
                item.style.width= itemWidth+ 'px'
                if ((i+1) % this.cols !== 0) {
                    item.style.marginRight = this.itemSpace + 'px'
                }
                if (i >= this.cols) {
                    item.style.marginTop = this.lineSpace + 'px'
                }
            }
        }
    }
}
</script>

<style scoped>
.grid-view{
    display: flex;
    flex-wrap: wrap;
}
</style>