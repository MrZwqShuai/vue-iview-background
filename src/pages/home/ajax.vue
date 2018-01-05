<template>
    <div class="page no-navbar no-toolbar">
        <headerView :headerObject="headerObject" v-if="headerObject"></headerView>
        <div class="page-content">
            <div class="content-block">
                <p id="abc">异步图片加载</p>
            </div>
            <img width="100%" data-src="http://img06.tooopen.com/images/20170723/tooopen_sy_217707092736.jpg" class="lazy lazy-fadein" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p>
                <img data-src="http://mp.91dddj.net/test.jpg" width="100%" class="lazy lazy-fadeIn">
            </p>
            <div class="content-block">
                这是一个数据请求页面
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-green" @click="doGet">Get数据请求</a>
                    </li>
                </ul>
            </div>
            <div class="list-block inset">
                <ul>
                    <li>
                        <a class="button button-big button-fill color-blue" @click="doPost">Post数据请求</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import headerView from '../../components/headerView'
import { getFoods } from '../../services/store'

export default {
    data() {
        return {
            headerObject: {
                title1: '后退',
                title2: '点银宝',
                title3: '',
            }
        }
    },
    components: { headerView },
    computed: {
        ...mapState({
            fetchLoading: state => state.fetchLoading
        })
    },
    methods: {
        ...mapActions(['login', 'getTestData', 'FetchLoading']),
        doGet(e) {
            var that = this;
            that.FetchLoading(true);
            let params = {
                'storeId': 33893,
                'shortCode': '',
                'typeId': -1,
                'pageIndex': 1,
                'pageSize': 12
            };
            getFoods(params).then(function(response) {
                that.$f7.alert(response.errmsg);
                that.FetchLoading(false);
            }, function() {
                that.$f7.alert(response.errmsg);
                that.FetchLoading(false);
            });
        },
        doPost(e) {
            //this.$f7.confirm("事件触发", "提示");
        }
    },
    mounted() {
        // 异步图片加载加上此行
        this.$f7.initImagesLazyLoad('.page-content');
    },
    beforeMount() {

    },
    beforeRouteEnter(to, from, next) {
        next();
    },
    beforeDestroy() {

    }
}
</script>


<style lang='sass' scoped>

</style>
