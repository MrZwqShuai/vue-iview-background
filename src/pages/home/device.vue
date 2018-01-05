<template>
    <div class="page no-navbar no-toolbar">
        <headerView :headerObject="headerObject" v-if="headerObject"></headerView>
        <div class="page-content">
            <div class="content-block">
                调用手机操作系统硬件（仅APP内有效）
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-green" @click="doCamaera">摄像头</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="doCamaera">相册</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="getContacts">通讯录</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-green" @click="doLoc">GPS定位</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue">消息推送</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="showStatusBar">设置状态栏</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="hideStatusBar">隐藏状态栏</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="setStatusBarTransparent">设置状态栏透明</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Device from '@/common/device'
import headerView from '../../components/headerView'
export default {
    data() {
        return {
            destinationType: null,
            headerObject: {
                title1: '后退',
                title2: '点银宝',
                title3: '',
            }
        }
    },
    methods: {
        doCamaera(e) {
            Device.capturePhoto();
        },
        doLoc(e) {
            Device.getCurrentPosition();
        },
        showStatusBar(){
            Device.showStatusBar("#ff8800");
        },
        hideStatusBar(){
            Device.hideStatusBar();
        },
        setStatusBarTransparent(){
            Device.setStatusBarTransparent();
        },
        getContacts(){
            Device.getContacts();
        }
    },
    components: { headerView },
    mounted() {

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
