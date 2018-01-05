<template>
  <div>
    <p>
      <Button type="primary" @click="showActionSheet">模拟登录操作</Button>
      <Button type="primary" @click="getTable">获取桌台</Button>
      <Button type="primary" @click="getStoreBills">获取账单</Button>
    </p>
    <br>
    <Table border :columns="columns7" :data="tableData"></Table>
    <Page :total="100" :class="'ivu-menu-horizontal'"></Page>
    <Modal v-model="modal1" title="编辑桌台" @on-ok="saveTable">
      <Row>
        <Col span="1"></Col>
        <Col span="21">
        <Form :label-width="100">
          <FormItem label="类型选择">
            <RadioGroup v-model="tableDatas.TypeId">
              <Radio label="1">
                <span>包间</span>
              </Radio>
              <Radio label="2">
                <span>大堂</span>
              </Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="餐桌人数">
            <RadioGroup v-model="tableDatas.Seat">
              <Radio label="2">
                <span>2</span>
              </Radio>
              <Radio label="4">
                <span>4</span>
              </Radio>
              <Radio label="6">
                <span>6</span>
              </Radio>
              <Radio label="8">
                <span>8</span>
              </Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="餐桌名称">
            <Input placeholder="请输入" v-model="tableDatas.Name"></Input>
          </FormItem>
        </Form>
        </Col>
        <Col span="2"></Col>
      </Row>
    </Modal>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import tools from '../../common/tools'
import { getStoreBills } from '../../services/store'
export default {
  data() {
    return {
      modal1: false,
      //定义一个变量
      _index: 0,
      //用来存储桌台显示的数据
      tableData: [],
      //这是我请求数据参数
      apiData: {
        storeId: 32651,
        status: -1,
        isset: true,
        pagesize: 10
      },
      tableDatas: {},
      popData: {},   //弹窗参数
      s: [],
      columns7: [
        {
          title: '类型',
          key: 'TypeName',
        },
        {
          title: '人数',
          key: 'Seat'
        },
        {
          title: '桌台名称',
          key: 'Name'
        },
        {
          title: '操作',
          key: 'config',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.index);
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.config(params.index)
                  }
                }
              }, '编辑')
            ]);
          }
        }
      ]
    }
  },
  computed: {
    ...mapState({
      'user': 'userInfo'
    })
  },
  methods: {
    ...mapActions(['getTableData', 'updateTableData', 'login', 'FetchLoading']),
    ...mapMutations(['SET_USERINFO']),
    showActionSheet() {
      var json = {
        'username': '33893.13554282399',
        'password': '123456',
        'usertype': 3
      };
      var that = this;
      that.login(json).then(function(res) {
        var token = res.jsondata.access_token.substring(0, 100);
        that.SET_USERINFO(res.jsondata);
        tools.setLocalStorage('USER', JSON.stringify(res.jsondata));
        that.$Message.success('登录成功');
      })
    },
    //获取桌台
    getTable() {
      let that = this;
      this.getTableData(this.apiData).then(function(response) {
        if (response.errcode == "I00000") {
          //这是获取到的桌台数据
          that.tableData = response.jsondata;
          console.log(that.tableData);
        }
      }).catch(function(err) {
        console.log(err);
      });
    },
    getStoreBills() {
      let that = this;
      let params = {
        storeId: 32651,
        eatType: 2,
        pageIndex: 1,
        pageSize: 5,
        startTime: '2016-05-01',
        endTime: '2017-10-18'
      };
      getStoreBills(params).then(function(response) {
        debugger;
        if (response.errcode == "I00000") {
          //这是获取到的桌台数据
          console.log(that.tableData);
          that.$Message.info('获取到订单数量' + response.jsondata.totalCount);
        }
      }).catch(function(err) {
        that.$Message.info('获取失败');
      });
    },
    //编辑桌台
    show(index) {
      this.$Modal.info({
        title: '查看桌台',
        content: `Id：${this.tableData[index].Id}<br>类型Id：${this.tableData[index].TypeId}<br>类型名称：${this.tableData[index].Name}`
      })
    },
    config(index) {
      this.modal1 = true;
      this.tableDatas = this.tableData[index];
    },
    //提交后台进行更新
    saveTable() {
      var that = this;
      //这是准备的数据
      var _temp = {};
      _temp.StoreId = '32651';
      _temp.TableShow = {
        'Id': this.tableDatas.Id,
        'Name': this.tableDatas.Name,
        'Seat': this.tableDatas.Seat,
        'TagId': this.tableDatas.TagId,
        'TypeId': this.tableDatas.TypeId
      };
      this.updateTableData(_temp).then(function(response) {
        if (response.errcode == "I00000") {
          //这个地方是再次获取了一遍，不获取也可以，使用对象的引用
          // that.getTable();
          that.$Message.info('更新成功');
        }
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
  mounted() {

  },
  beforeMount() {

  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeDestroy() {
    // this.$root.$f7.closeModal();
  }
}
</script>

<style scoped>

</style>
