<template>
  <div>
    <h1>文字提示</h1>
    <div class="top">
      <Tooltip content="Top Left 文字提示" placement="top-start">
        <Button>上左</Button>
      </Tooltip>
      <Tooltip content="Top Center 文字提示" placement="top">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip content="Top Right 文字提示" placement="top-end">
        <Button>上右</Button>
      </Tooltip>
    </div>
    <div class="center">
      <div class="center-left">
        <Tooltip content="Left Top 文字提示" placement="left-start">
          <Button>左上</Button>
        </Tooltip><br><br>
        <Tooltip content="Left Center 文字提示" placement="left">
          <Button>左边</Button>
        </Tooltip><br><br>
        <Tooltip content="Left Bottom 文字提示" placement="left-end">
          <Button>左下</Button>
        </Tooltip>
      </div>
      <div class="center-right">
        <Tooltip content="Right Top 文字提示" placement="right-start">
          <Button>右上</Button>
        </Tooltip><br><br>
        <Tooltip content="Right Center 文字提示" placement="right">
          <Button>右边</Button>
        </Tooltip><br><br>
        <Tooltip content="Right Bottom 文字提示" placement="right-end">
          <Button>右下</Button>
        </Tooltip>
      </div>
    </div>
    <div class="bottom">
      <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip content="Bottom Center 文字提示" placement="bottom">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
        <Button>下右</Button>
      </Tooltip>
    </div>
    <h1>气泡提示</h1>
    <Poptip trigger="hover" title="提示标题" content="提示内容">
      <Button>hover 激活</Button>
    </Poptip>
    <Poptip title="提示标题" content="提示内容">
      <Button>click 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
      <Button>focus 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" :content="title">
      <i-input placeholder="输入框的 focus" v-model="title"></i-input>
    </Poptip>
    <Poptip confirm title="您确认删除这条内容吗？">
      <Button>删除</Button>
    </Poptip>
    <Poptip confirm title="Are you sure delete this task?" ok-text="yes" cancel-text="no">
      <Button>国际化</Button>
    </Poptip>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '123'
    }
  }
}
</script>
<style scoped>
.top,
.bottom {
  text-align: center;
}

.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}

.center-left {
  float: left;
}

.center-right {
  float: right;
}
</style>
