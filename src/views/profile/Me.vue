<template>
    <div>
        <nav-bar class="profile-nav"><div slot="center">超级商场</div></nav-bar>
        
        <user-info/>
    </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar';
import UserInfo from './childComps/UserInfo';

export default {
    name: "Me",
    components: {
        NavBar,
        UserInfo
    }
}
</script>

<style scoped>
.profile-nav{
    line-height: 44px;
    background-color: #f85c9d;
    color: #fff;
}
</style>