<template>
<div class="row">
  <div class="col-md-24">
    <div class="note note-danger">
      <h4 class="block">这边可能会放一个note</h4>
      <p>加点提示什么的</p>
    </div>
    <ui-portlet class="light bordered">
      <template slot="header">
        <div class="caption font-green-seagreen">
          <i class="icon-settings font-green-sharp"></i>
          <span class="caption-subject">这里放Portlet一级标题</span>
          <span class="caption-helper">这里放Portlet二级标题</span></div>
        <div class="actions">
          <button class="btn default btn-xs purple-stripe">这里放几个按钮</button>
          <button class="btn default btn-xs purple-stripe"><i class="fa fa-repeat"></i> 刷新</button>
          <button class="btn default btn-xs purple-stripe"><i class="fa fa-repeat"></i> 筛选条件</button>
          <button class="btn default btn-xs red-stripe"><i class="fa fa-download"></i> 导出数据</button>
          <ui-portlet-fullscreen-btn></ui-portlet-fullscreen-btn>
        </div>
      </template>

      <template slot="body">
        <div class="clearfix">
          <h4>这里放主要内容,可以是一个表格</h4>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="text-center" style="width:50px">#</th>
                <th>Name</th>
                <th style="width: 200px;">最后更新者</th>
                <th style="width: 200px;">最后更新时间</th>
                <th class="text-center" style="width: 140px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sampleData.items" class="text-middle">
                <td class="text-center">{{index}}</td>
                <td>{{item.title}}</td>
                <td>{{item.lastUpdateUser}}</td>
                <td>{{item.lastUpdateTime}}</td>
                <td class="text-center">
                  <button class="btn default btn-xs purple-stripe">
                    <i class="fa fa-edit"></i> 修改
                  </button>
                  <button class="btn default btn-xs red-stripe" @click="handleDelete(item)">
                    <i class="fa fa-trash-o"></i> 删除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="pull-right">
            <ui-pagination :total="sampleData.total" @pageChange="fetchData"></ui-pagination>
          </div>
        </div>
      </template>
    </ui-portlet>
  </div>
</div>
</template>

<script src="./component.js">

</script>
