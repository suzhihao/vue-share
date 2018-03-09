/**
 * Created by Wu Jian Ping on - 2017/11/13.
 */

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-sidebar',
  methods: {
    ...mapActions('appState', [
      'setOpen'
    ]),

    toggle(menu, e) {
      if (this.mini && this.collapsed) {
        return
      }
      if (!menu.open) {
        $(e.target).closest('li').find('> ul').slideDown(250)
        this.setOpen({menu})
      } else {
        $(e.target).closest('li').find('> ul').slideUp(250)
        this.setOpen({menu})
      }
    }
  },

  computed: {
    ...mapState('appState', {
      mini: state => state.mini,
      collapsed: state => state.collapsed,
      menus: state => state.menus
    }),
    ...mapGetters('appState', [
      'isActive'
    ])
  }
}
