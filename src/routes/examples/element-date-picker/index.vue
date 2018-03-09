<template>
<div class="row">
  <div class="col-md-24">
    <h3>选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <br/>
    <h3>其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年</p>
    <div class="block">
      <span class="demonstration">周</span>
      <el-date-picker v-model="value3" type="week" format="yyyy 第 WW 周" placeholder="选择周">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">月</span>
      <el-date-picker v-model="value4" type="month" placeholder="选择月">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">年</span>
      <el-date-picker v-model="value5" align="right" type="year" placeholder="选择年">
      </el-date-picker>
    </div>
    <br/>
    <h3>选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
      </el-date-picker>
    </div>
    <br/>
    <h3>默认显示日期</h3>
    <p>未选择日期时，默认显示今天的日历。使用default-value可以指定其他日期，该值需要能够被new Date()解析。 类型为daterange时，指定左侧日历的日期。</p>
    <div class="block">
      <span class="demonstration">date</span>
      <el-date-picker v-model="value8" type="date" placeholder="选择日期" default-value="2010-10-01">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">daterange</span>
      <el-date-picker v-model="value9" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" default-value="2010-10-01">
      </el-date-picker>
    </div>
    <br/>
    <h3>返回值格式</h3>
    <p>默认情况下，组件接受并返回Date对象。 使用value-format指定返回值的格式，支持的格式与format相同。</p>
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">组件值：{{ value10 }}</div>
      <el-date-picker v-model="value10" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
      </el-date-picker>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">使用 value-format 进行格式化</span>
      <div class="demonstration">组件值：{{ value11 }}</div>
      <el-date-picker v-model="value11" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <br/><br/>
    <p>event事件: change：用户确认选定的值时触发</p>
    <p>event事件: blur：当 input 失去焦点时触发</p>
    <p>event事件: focus：当 input 获得焦点时触发</p>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: ''
    }
  },
  methods: {

  }
}
</script>
