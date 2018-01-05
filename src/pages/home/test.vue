<template>
    <div>
        <headerView :headerObject="headerObject" v-if="headerObject"></headerView>
        <div class="page-content">
            这是一个空白页面
        </div>
    </div>
</template>

<script>
import back from '@/components/back.vue'
import headerView from '../../components/headerView'

export default {
    name: 'about',
    data() {
        return {
            msg: 'Welcome to about',
            //头部
            headerObject: {
                title1: '返回',
                title2: '链接1',
                title3: ' ',
                //最右边是否显示
                rightShow: true
            }
        }
    },
    components: {
        back,
        headerView
    }
}
</script>

<style scoped>

</style>
