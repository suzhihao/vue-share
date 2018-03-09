/**
 * Created by zhihao_su on 2017/11/13.
 */
import { toastr } from '../../core/ui-service'
export default {
  name: 'ui-pagination',

  props: {
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    pagesInPage: {
      type: Number,
      default: 10
    },
    showGoto: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      curPage: this.page,
      inputPage: this.page
    }
  },

  computed: {
    start() {
      return (this.curPage - 1) * this.size + 1
    },
    end() {
      return Math.min(this.curPage * this.size, this.total)
    },
    pageCount() {
      return Math.ceil(this.total / this.size)
    },
    startPage() {
      let startPage = Math.max(this.curPage - Math.floor(this.pagesInPage / 2), 1)
      if (startPage !== 1) {
        if ((startPage + this.pagesInPage) > this.pageCount) {
          startPage = Math.max(this.pageCount - this.pagesInPage + 1, 1)
        }
      }
      return startPage
    },
    endPage() {
      return Math.min(this.startPage + this.pagesInPage - 1, this.pageCount)
    },
    prev() {
      return this.startPage > 1 ? this.startPage - 1 : ''
    },
    next() {
      return this.endPage < this.pageCount ? this.endPage + 1 : ''
    }
  },

  created() {},

  methods: {
    clickPage(page) {
      if (this.isPageValid(page)) {
        if (this.curPage !== page) {
          this.curPage = parseInt(page)
          this.$emit('update:page', this.curPage)
          this.$emit('pageChange', this.curPage)
        }
      } else {
        this.$refs.input.select()
      }
    },
    onInputKeyDown(e) {
      if (e.keyCode === 13) {
        this.clickPage(this.inputPage)
      }
    },
    // check page is valid or not
    isPageValid(page) {
      if (parseInt(page)) {
        if (page <= 0) {
          toastr.error('请输入正确的页码！')
          return false
        } else if (page > this.pageCount) {
          toastr.error('超出页码范围！')
          return false
        } else {
          return true
        }
      } else {
        toastr.error('请输入正确的页码！')
        return false
      }
    }
  },

  watch: {
    page(val) {
      this.curPage = val
      this.inputPage = val
    }
  }
}
