<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="输入框">
      <Input v-model="formItem.input" placeholder="请输入"></Input>
    </FormItem>
    <FormItem label="城市">
      <Select  v-model="formItem.select">
        <Option value="beijing" key="1">北京市{{$t("pages.form.city")}}</Option>
        <Option value="shanghai" key="2">上海市</Option>
        <Option value="shenzhen" key="3">深圳市</Option>
      </Select>
    </FormItem>
    <FormItem label="日期控件">
      <Row>
        <Col span="8">
        <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
        -
        <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="单选框">
      <RadioGroup v-model="formItem.radio">
        <Radio label="male">男</Radio>
        <Radio label="female">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="多选框">
      <CheckboxGroup v-model="formItem.checkbox">
        <Checkbox label="吃饭"></Checkbox>
        <Checkbox label="睡觉"></Checkbox>
        <Checkbox label="跑步"></Checkbox>
        <Checkbox label="看电影"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="开关">
      <i-switch v-model="formItem.switch" size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
      </i-switch>
    </FormItem>
    <FormItem label="滑块">
      <Slider v-model="formItem.slider" range></Slider>
    </FormItem>
    <FormItem label="文本域">
      <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary">提交</Button>
      <Button type="ghost" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        input: '',
        select: '123',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>
