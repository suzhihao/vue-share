/**
 * Created by Wu Jian Ping on - 2017/11/13.
 */

import 'bootstrap-hover-dropdown'
import { mapState, mapActions } from 'vuex'
import appTopSearchBar from '../app-top-search-bar'
import uiService from '../../core/ui-service'

export default {
  name: 'app-header',

  components: {
    [appTopSearchBar.name]: appTopSearchBar
  },

  mounted() {
    $(this.$refs.drp1).dropdownHover()
    $(this.$refs.drp2).dropdownHover()
    $(this.$refs.drp3).dropdownHover()
  },
  computed: {
    ...mapState('appState', {
      mini: state => state.mini,
      collapsed: state => state.collapsed,
      user: state => state.user
    })
  },


  methods: {
    ...mapActions('appState', [
      'setMini',
      'setCollapsed'
    ]),

    toggleSidebar() {
      this.setMini({mini: !this.mini, persist: true})
    },

    collapseSidebar() {
      this.setCollapsed({collapsed: !this.collapsed})
    },

    logout() {
      uiService.bootbox.confirm('您确定退出系统？', (result) => {
        if (result) {
        }
      })
    },
    changePass() {
      this.$router.push({path: '/account/password'})
    }
  }
}
