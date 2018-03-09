/**
 * Created by Wu Jian Ping on - 2017/11/15.
 */
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-page-header',
  computed: {
    ...mapState('appState', {
      title: state => state.pageInfo.title,
      subtitle: state => state.pageInfo.subtitle,
      breadcrumb: state => state.pageInfo.breadcrumb,
      showTitle: state => state.showTitle,
      showBreadCrumb: state => state.showBreadCrumb
    })
  },
  methods: {
    ...mapActions('appState', [
      'initPageInfo'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.initPageInfo({currentRoute: to})
    }
  }
}
