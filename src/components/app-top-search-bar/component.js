import _ from 'lodash'
import queryString from '../../core/query-string'
import transport from '../../core/typeahead/transport'
import uiService from '../../core/ui-service'
import keywordValidator from '../../utils/keyword-validator'

// var Bloodhound = require('imports-loader?define=>false!local-typeahead.js/dist/bloodhound') // eslint-disable-line
// require('imports-loader?define=>false!local-typeahead.js/dist/typeahead.jquery') // eslint-disable-line

export default {
  name: 'app-top-search-bar',
  data() {
    return {
      searchStr: '' // 不加的话ie9placeholder会有问题
    }
  },
  mounted() {
    // let self = this
    //
    // this.$key = $(this.$refs.key)
    // this.$key.val(this.$route.query.keyword || '')
    // this.selectedCompany = null
    // this.qname = ''
    //
    // this.dataSource = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   remote: {
    //     url: '/api/search/suggestion',
    //     replace: function(url, query) {
    //       let q = {key: query}
    //       if (self.qname) {
    //         q.method = self.qname
    //       }
    //       return `${url}?${queryString.stringify(q)}`
    //     },
    //     transport: transport
    //   }
    // })
    //
    // let tpl = _.template('<div style="overflow:hidden"><a href="javascript:;"><span class="match-field"><%=category%>匹配</span><span class="match-value"><%=name||oper_name||credit_no||org_no||reg_no%></span></a></div>')
    //
    // this.$key
    //   .typeahead({
    //     hint: true,
    //     highlight: true,
    //     name: 'compaines',
    //     minLength: 2
    //   }, {
    //     source: this.dataSource,
    //     display: 'name',
    //     templates: {
    //       suggestion: tpl
    //     }
    //   })
    //   .bind('typeahead:cursorchange', (ev, suggestion) => {
    //     if (suggestion && suggestion.eid) {
    //       self.selectedCompany = suggestion
    //       $(self.el).find('.tt-dataset').addClass('tt-dataset-focused')
    //     } else {
    //       self.selectedCompany = null
    //       $(self.el).find('.tt-dataset').removeClass('tt-dataset-focused')
    //     }
    //   })
    //   .bind('typeahead:close', () => {
    //     $(self.el).find('.tt-dataset').removeClass('tt-dataset-focused')
    //   })
    //   .bind('typeahead:select', (ev, suggestion) => {
    //     // 自动联想 suggestion
    //     if (suggestion) {
    //       let name = suggestion.name || suggestion.oper_name || suggestion.credit_no || suggestion.org_no || suggestion.reg_no
    //       this.$router.push({ path: '/company/info', query: { eid: suggestion.eid, keyword: name } })
    //       // this.selectedCompany = null
    //     }
    //   })
  },

  methods: {
    handleSearch() {
      let key = this.$key.val().trim()
      if (keywordValidator.isValid(key)) {
        let query = {}
        query.keyword = key
        this.$router.push({path: '/search/advanced', query})
        this.selectedCompany = null
      } else if (key.length !== 0) {
        uiService.toastr.info('输入合适的关键字！')
      } else {
        uiService.toastr.info('输入你想查询的关键字！')
      }
    },

    // handleEnter() {
    //   if (this.selectedCompany) {
    //     let suggestion = this.selectedCompany
    //     let name = suggestion.name || suggestion.oper_name || suggestion.credit_no || suggestion.org_no || suggestion.reg_no
    //     this.$router.push({ path: '/company/info', query: { eid: suggestion.eid, keyword: name } })
    //     this.selectedCompany = null
    //   } else {
    //     let key = this.$key.val().trim()
    //     if (keywordValidator.isValid(key)) {
    //       let query = _.omit(this.$route.query, ['page', 'key', 'sorter'])
    //       query.keyword = key
    //       this.$router.push({path: '/search/advanced', query})
    //       this.$key.typeahead('close')
    //     } else if (key.length !== 0) {
    //       uiService.toastr.info('输入合适的关键字！')
    //     } else {
    //       uiService.toastr.info('输入你想查询的关键字！')
    //     }
    //   }
    // }
  }
}
