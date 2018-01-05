<template>
  <div>
    <h1>message</h1>
    <Button type="primary" @click="info">显示普通提醒</Button>
    <Button @click="success">显示成功提示</Button>
    <Button @click="warning">显示警告提示</Button>
    <Button @click="error">显示错误提示</Button>
    <Button @click="loading">显示加载中...</Button>
    <Button @click="closable">显示一个可关闭的提示</Button>
    <h1>alert</h1>
    <Alert type="error" show-icon>
      错误提示文案
      <span slot="desc">
            自定义错误描述文案。
        </span>
    </Alert>
    <Alert show-icon>
      自定义图标
      <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
      <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
    <Alert show-icon>
      消息提示文案
      <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success" show-icon>
      成功提示文案
      <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" show-icon closable>
      警告提示文案
      <template slot="desc">
        警告的提示描述文案警告的提示描述文案警告的提示描述文案
      </template>
    </Alert>
    <h1>notice</h1>
    <Button @click="info1(true)">消息只有标题</Button>
    <Button @click="info1(false)">消息</Button>
    <Button type="primary" @click="time">打开提醒，点击x才可以关闭</Button>
    <h1>modeal</h1>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <Modal
      v-model="modal1"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
    </Modal>
  </div>
</template>
<script>
    export default {
        data () {
          return {
            modal1: false
          }
        },
      methods:{
        ok () {
          this.$Message.info('点击了确定');
        },
        cancel () {
          this.$Message.info('点击了取消');
        },
        info () {
          this.$Message.info('这是一条普通的提醒');
        },
        success () {
          this.$Message.success('这是一条成功的提示');
        },
        warning () {
          this.$Message.warning('这是一条警告的提示');
        },
        error () {
          this.$Message.error('对方不想说话，并且向你抛出了一个异常');
        },
        loading () {
          const msg = this.$Message.loading({
            content: '正在加载中...',
            duration: 0
          });
          setTimeout(msg, 3000);
        },
        closable () {
          this.$Message.info({
            content: '可手动关闭的提示',
            duration: 5 ,
            closable: true
          });
        },
        info1 (nodesc) {
          this.$Notice.info({
            title: '这是通知标题',
            desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
          });
        },
        time () {
          this.$Notice.open({
            title: '这是通知标题',
            desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
            duration: 0
          });
        }
      }
    }
</script>
<style scoped>

</style>
