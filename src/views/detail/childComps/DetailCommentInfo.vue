<template>
    <div  v-if="Object.keys(commentInfo).length !== 0" class="detail-comment-info">
        <div class="comment-top">
            <span style="text-align: left">用户评价</span>
            <span style="text-align: right">更多</span>
        </div>
        <div class="user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <p>{{commentInfo.content}}</p>
        <div v-if="commentInfo.images" class="commentImg">
            <img v-for="item in commentInfo.images" :key="item.id" :src="item" alt="">
        </div>
        <div class="comment-bottom">
            <span>{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
    </div>
</template>

<script>
import {DateFormat} from '../../../common/util'

export default {
    name: "DetailCommentInfo",
    props: {
        commentInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(value){
            let date= new Date(value*1000)
            return DateFormat(date, 'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
.detail-comment-info{
    padding: 5px;
    padding-bottom: 20px;
}
.comment-top{
    display: flex;
    border-bottom: 2px solid #ddd;
    line-height: 30px;
}
.comment-top span{
    flex: 1;
    margin: 5px;
}
.user{
    margin: 5px;
}
.user span{
    position: relative;
    bottom: 18px;
}
.user img{
    width: 50px;
    border-radius: 100px;
    margin-right: 10px;
}
p{
    font-size: 15px;
    color: #666;
    margin: 5px;
}
.commentImg img{
    width: 50px;
    height: 50px;
    margin: 6px;
    margin-bottom: 0;
}
.comment-bottom{
    font-size: 10px;
    color: #999;
    margin-top: 8px;
}
.comment-bottom span{
    margin: 5px;
}
</style>