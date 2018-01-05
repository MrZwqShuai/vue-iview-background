<template>
  <div style="height:800px">
  <Form :model="formItem" :label-width="80" >
    <FormItem label="单双日期">
      <Row>
        <Col span="11">
        <!--这是单日期-->
        <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="日期格式">
      <Row>
        <Col span="11">
        <DatePicker type="datetime" placeholder="选择日期和时间" style="width: 200px"></DatePicker>
        <br>
        <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></DatePicker>
        <br>
        <DatePicker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></DatePicker>
        <br>
        <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></DatePicker>

        </Col>
      </Row>
    </FormItem>
    <FormItem label="年月日期">
      <Row>
        <Col span="12">
        <DatePicker type="year" placeholder="选择年" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="month" placeholder="选择月" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="不可选日期">
      <Row>
        <Col span="12">
        <DatePicker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="date" :options="options2" placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="确认日期">
      <Row>
        <Col span="12">
        <DatePicker type="date" confirm placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </FormItem>
  </Form>
  </div>

</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                //不可选日期
                options1: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options2: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
