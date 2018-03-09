<template>
<div class="row">
  <div class="col-md-24">
    <h3>固定时间点</h3>
    <p>提供几个固定的时间点供用户选择</p>
    <br/>
    <el-time-select v-model="value1" :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }" placeholder="选择时间">
    </el-time-select>
    <br/>
    <h3>任意时间点</h3>
    <p>可以选择任意时间</p>
    <br/>
    <el-time-picker v-model="value2" :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }" placeholder="任意时间点">
    </el-time-picker>
    <el-time-picker arrow-control v-model="value3" :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }" placeholder="任意时间点">
    </el-time-picker>
    <br/>
    <h3>固定时间范围</h3>
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
    <br/>
    <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
    </el-time-select>
    <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
    </el-time-select>
    <br/>
    <h3>任意时间范围</h3>
    <p>可选择任意的时间范围</p>
    <br/>
    <el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
    </el-time-picker>
    <el-time-picker is-range arrow-control v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
    </el-time-picker>
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
      value1: '',
      value2: new Date(2016, 9, 10, 18, 40),
      value3: new Date(2016, 9, 10, 18, 40),
      startTime: '',
      endTime: '',
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  },
  methods: {}
}
</script>
