import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routerMode } from './common/env'

Vue.use(VueRouter)

// const home = r => require.ensure([], () => r(require('@/pages/home/index.vue')), 'home')
// const blank = r => require.ensure([], () => r(require('@/pages/home/blank.vue')), 'blank')
// const test = r => require.ensure([], () => r(require('@/pages/home/test.vue')), 'test')
// const ajax = r => require.ensure([], () => r(require('@/pages/home/ajax.vue')), 'ajax')
// const device = r => require.ensure([], () => r(require('@/pages/home/device.vue')), 'device')
// //api请求
// const api_op = r => require.ensure([], () => r(require('@/pages/home/api_op.vue')), 'api_op')
// const socket = r => require.ensure([], () => r(require('@/pages/home/socket.vue')), 'socket')
//
// const about = r => require.ensure([], () => r(require('@/pages/home/about.vue')), 'about')
// const pull = r => require.ensure([], () => r(require('@/components/downPullRefresh.vue')), 'pull')
// const topPull = r => require.ensure([], () => r(require('@/components/topPullMore.vue')), 'topPull')


//这是表单
const form = r => require.ensure([], () => r(require('@/pages/home/form.vue')), 'form')
//这是表格
const table = r => require.ensure([], () => r(require('@/pages/home/table.vue')), 'table')

//跑马灯
const carousel = r => require.ensure([], () => r(require('@/pages/home/carousel.vue')), 'carousel')
//消息提示
const message = r => require.ensure([], () => r(require('@/pages/home/message.vue')), 'message')
//图表
const echarts = r => require.ensure([], () => r(require('@/pages/home/echarts.vue')), 'echarts')
//上传文件
const upload = r => require.ensure([], () => r(require('@/pages/home/upload.vue')), 'upload')
//气泡
const tooltip = r => require.ensure([], () => r(require('@/pages/home/tooltip.vue')), 'tooltip')
//ajax
const ajax = r => require.ensure([], () => r(require('@/pages/home/api_op.vue')), 'ajax')
//日期控件
const datePicker = r => require.ensure([], () => r(require('@/pages/home/datePicker.vue')), 'datePicker')
const router = new VueRouter({
    mode: routerMode,
    routes: [
        {
            path: '/',
            component: App,
            meta: { keepAlive: true },
            children: [
                { path: '', redirect: '/home/form' },
            ]
        },
        {
            path: '/home',
            component: App,
            meta: { keepAlive: true },
            children: [
                { path: '', redirect: '/home/form' },
                //这是一个表单页面
                { path: 'form', component: form },
                //这是表格
                { path: 'table', component: table },
                //跑马灯
                { path: 'carousel', component: carousel },
                //消息
                { path: 'message', component: message },
                //图表
                { path: 'echarts', component: echarts },
                //上传文件
                { path: 'upload', component: upload },
                //气泡
                { path: 'tooltip', component: tooltip },
                //日期控件
                { path: 'datepicker', component: datePicker },


                { path: 'ajax', component: ajax },

                // { path: '/home/device', component: device },
                // { path: '/home/api_op', component: api_op },
                // { path: '/home/socket', component: socket, meta: { title: 'Socket示例' } },
                // { path: '/pull', component: pull },
                // { path: '/topPull', component: topPull }
            ]
        }, {
            path: '/order',
            component: App,
            meta: { keepAlive: true },
            children: [
                { path: 'list', component: table },
            ]
        }
    ]
});

export default router
