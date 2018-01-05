<template>
    <div class="page no-navbar no-toolbar scrollHandlerSet">
        <headerView :headerObject="headerObject" v-if="headerObject"></headerView>
        <div class="page-content">
            <div class="content-block">
                WebSocket示例
            </div>
            <div class="content-block">
                自己和其他人都收到推送
            </div>
            <form id="demoform-1" class="store-data list-block">
                <ul>
                    <li class="align-top">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-input">
                                    <textarea name="infos" v-model="info"></textarea>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="send">发送数据</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import headerView from '../../components/headerView'
export default {
    data() {
        return {
            info: '',
            headerObject: {
                title1: '后退',
                title2: '点银宝',
                title3: '',
            }
        }
    },
    components: {
        headerView
    },
    methods: {
        send(e) {
            var msg = this.info;
            this.ws.send(this.$data.info);
        }
    },
    mounted() {
        this.info = '测试数据';
    },
    beforeMount() {

    },
    beforeRouteEnter(to, from, next) {
        next();
    },
    beforeDestroy() {
        this.$root.$f7.closeModal();
    }
}
</script>

<style scoped>

</style>
