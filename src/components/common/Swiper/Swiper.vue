<template>
    <div class="swiper" name="swiper">
        <div class="swiperImg" name="swiperImg" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <slot name="indicator">
        </slot>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index.id"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: {
            interval: {
              type: Number,
              default: 3000
            },
            animDuration: {
                type: Number,
                default: 300
            },
            //设置移动多少就切换图片的参数
            moveRadio: {
                type: Number,
                default: 0.25
            },
            showIndicator: {
                type: Boolean,
                default: true
            }
        },
        data(){
          return{
              slideCount: 0,
              currentIndex: 1,
              scrolling: false,
              swiperStyle:{},
              totalWidth: 0
          }
        },
        mounted() {
            setTimeout(() => {
                this.handleDom();
                this.startTimer();
            },100)
        },
        methods:{
            // 开启计时器
            startTimer(){
                this.playTimer= window.setInterval(() => {
                    this.currentIndex++;
                    this.scrollImg(-this.currentIndex * this.totalWidth);
                },this.interval)
            },
            // 停止计时器
            stopTimer(){
                window.clearInterval(this.playTimer)
            },

            scrollImg(currentPosition){
                //设置正在滚动
              this.scrolling= true;
              //开始滚动动画
              this.swiperStyle.transition= 'transform '+ this.animDuration+ 'ms';
              this.setTransform(currentPosition);

              this.checkPosition();

              //滚动结束
              this.scrolling= false;
            },

            // 校验正确位置
            checkPosition(){
                window.setTimeout(()=>{
                    this.swiperStyle.transition= '0ms';
                    
                    if (this.currentIndex>= this.slideCount){
                        this.currentIndex= 0;
                        this.setTransform(-this.currentIndex * this.totalWidth);
                    } else if(this.currentIndex<= 0){
                        this.currentIndex= this.slideCount;
                        this.setTransform(-this.currentIndex * this.totalWidth);
                    }

                    this.$emit('transitionEnd', this.currentIndex-1)
                }, this.animDuration)
            },

            setTransform(position){
                this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
                this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
                this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
            },

            handleDom(){
                //获取要操作的元素
                let swiperEl= document.querySelector('.swiperImg');
                let slideEls= document.getElementsByClassName('slide');

                //保存图片的个数
                this.slideCount= slideEls.length;
                console.log('slide的个数'+slideEls.length);

                if (this.slideCount> 1){
                    let cloneFirst = slideEls[0].cloneNode(true);
                    let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
                    swiperEl.insertBefore(cloneLast, slideEls[0]);
                    swiperEl.appendChild(cloneFirst);
                    this.totalWidth= swiperEl.offsetWidth;
                    this.swiperStyle= swiperEl.style;
                }
                this.setTransform(-this.totalWidth);
            },

            touchStart(e){
                if(this.scrolling) return;

                this.stopTimer();

                this.startX= e.touches[0].pageX;
            },
            touchMove(e){
                this.currentX= e.touches[0].pageX;
                this.distance= this.currentX- this.startX;

                let currentPosition= -this.currentIndex * this.totalWidth;
                let moveDistance= this.distance+ currentPosition;

                this.setTransform(moveDistance);
            },
            touchEnd(e){
                let currentMove= Math.abs(this.distance);

                if(this.distance== 0){
                    return;
                }else if(this.distance>0 && currentMove>this.totalWidth* this.moveRadio){
                    this.currentIndex--;
                }else if(this.distance<0 && currentMove>this.totalWidth* this.moveRadio){
                    this.currentIndex++;
                }

                this.scrollImg(-this.currentIndex* this.totalWidth);

                this.startTimer();
            }
        },
    }
</script>

<style scoped>
    .swiper{
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .swiperImg{
        display: flex;
    }
    .indicator{
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 8px;
        width: 100%;
    }
    .indi-item{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        margin: 0 5px;
    }
    .active{
        background-color: #009ce6;
    }
</style>