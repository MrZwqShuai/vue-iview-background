<template>
  <div class="page no-navbar no-toolbar">
    <headerView :headerObject="headerObject" v-if="headerObject"></headerView>
    <!-- Scrollable page content-->
    <div class="page-content">
      <div class="content-block">
        <p>{{ msg }}</p>
      </div>
      <div class="content-block">
        <p>
          <router-link to="/home/about/1500" class="button button-big">页面跳转</router-link>
        </p>
        <p>
          <a class="button button-big" @click="getParam">获取路由参数</a>
        </p>
        <h3>当前路由参数：{{ this.$route.params.num }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
//mapGetters 这是辅助函数，store 中的 getters 映射到局部计算属性
//import {mapGetters,mapActions} from 'vuex'  --jinhua  暂时注释
import f_form from './form.vue'
import headerView from '../../components/headerView'

export default {
  name: 'about',
  data() {
    return {
      msg: '路由跳转测试',
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
  computed: {

  },
  methods: {
    getParam() {
      this.$f7.alert(this.$route.params.num, '获取到的参数');
    }
  },
  beforeDestroy() {
    this.$root.$f7.closeModal();
  }
}
</script>
<style>

</style>
