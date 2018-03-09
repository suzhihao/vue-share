<template>
  <div class="ui-pagination clearfix">
    <nav v-if="total">
      <ul class="pagination">
        <li v-if="prev">
          <a href="javascript:;" @click="clickPage(prev)">
            <span>&laquo;</span>
          </a>
        </li>
        <li v-else class="disabled">
          <a href="javascript:;">
            <span>&laquo;</span>
          </a>
        </li>
        <li v-for="n in (endPage - startPage + 1)" :class="{ active: curPage === (startPage + n - 1) }">
          <a href="javascript:;" @click="clickPage(startPage + n - 1)">{{startPage + n - 1}}</a>
        </li>
        <li v-if="next">
          <a href="javascript:;" @click="clickPage(next)">
            <span>&raquo;</span>
          </a>
        </li>
        <li v-else class="disabled">
          <a href="javascript:;">
            <span>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div v-if="showGoto" class="jump-to">
      跳到
      <input type="text" class="form-control input-sm" @keydown="onInputKeyDown" v-model.number="inputPage" ref="input"/>页
      <button class="btn btn-primary btn-sm" @click="clickPage(inputPage)">确定</button>
    </div>
  </div>
</template>
<script src="./component.js"></script>
<style scoped lang="scss">
  .ui-pagination {
    vertical-align: top;

    > nav {
      float: left;

      > ul {
        margin: 0;
      }
    }

    > .jump-to {
      float: left;
      margin-left: 10px;
      margin-top: 1px;

      > input {
        margin-left: 4px;
        margin-right: 4px;
        width: 50px;
        display: inline-block;
        vertical-align: middle;
      }

      > button {
        margin-left: 4px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .ui-pagination-sm {
    .pagination > li > a,
    .pagination > li > span {
      padding: 5px 10px;
      font-size: 11px;
      line-height: 1.5;
    }
  }
</style>