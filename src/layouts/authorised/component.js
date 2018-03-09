import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
import resizeDetector from 'element-resize-detector'
import appHeader from '../../components/app-header'
import appSideBar from '../../components/app-sidebar'
import appFooter from '../../components/app-footer'
import uiScrolltoTop from '../../components/ui-scroll-to-top'
import appPageHeader from '../../components/app-page-header'
import examples from '../../data/examples'
import Vue from 'vue'
import browserDetector from '../../utils/browser-detector'
import globalEvents from '../../core/global-events'

const applyAppState = (self, menus) => {
  self.setMenus({menus: menus})
  Vue.nextTick(function () {
    self.setActive({to: self.$router.currentRoute})
    self.initPageInfo({currentRoute: self.$router.currentRoute})
    self.patchPageInfo(self.$router.currentRoute)
    Vue.nextTick(function() {
      // 手动打开
      $(self.$refs.sidebar.$el).find('> ul > li > a.active').closest('li').find('>ul').show()
    })
  })
}

export default {
  name: 'app',
  components: {
    [appHeader.name]: appHeader,
    [appSideBar.name]: appSideBar,
    [appFooter.name]: appFooter,
    [uiScrolltoTop.name]: uiScrolltoTop,
    [appPageHeader.name]: appPageHeader
  },

  computed: {
    ...mapState('appState', {
      mini: state => state.mini,
      collapsed: state => state.collapsed,
      fixed: state => state.fixed
    })
  },

  mounted() {
    applyAppState(this, [examples])

    // responsive callback
    $(() => {
      let resizeCallback = () => {
        if ($(document).width() <= 768) { // 768
          $('.sidebar-container-wrapper').attr('style', 'min-height:0px')
          $('.content-container-wrapper').attr('style', 'min-height:0px')
        } else {
          let footerHeight = $('.footer').innerHeight()
          let availableHeight = $(window).height() - $('.page-container').offset().top - footerHeight
          let sidebarHeight = $('.sidebar').innerHeight()
          let contentHeight = $('.content-container-inner').innerHeight()
          let toggleHeight = $(this.$refs.sidebarToggleContainer).innerHeight() || 0

          let h = Math.max(availableHeight, sidebarHeight)
          h = Math.max(h, contentHeight)

          $('.sidebar-container-wrapper').attr('style', 'min-height:' + (this.fixed ? (availableHeight) : (h - toggleHeight)) + 'px')
          $('.content-container-wrapper').attr('style', 'min-height:' + (h) + 'px')
        }
      }
      this.$resizeCallback = resizeCallback

      resizeCallback()
      let debounced = _.debounce(resizeCallback, 100)

      $(window).on('resize', debounced)

      const isIE = browserDetector.isIE()
      if (!isIE) { // enable resize detector if not IE
        let detector = resizeDetector()
        detector.listenTo($('.sidebar')[0], element => {
          debounced()
        })
        detector.listenTo($('.content-container-inner')[0], element => {
          debounced()
        })
      }

      globalEvents.on('responsive-callback', () => {
        if (isIE) {
          resizeCallback()
        }
      })
    })
  },

  methods: {
    ...mapActions('appState', [
      'setMenus',
      'setActive',
      'initPageInfo',
      'setTitleVisiable',
      'setBreadcrumbVisiable',
      'setSidebarFixed'
    ]),
    patchPageInfo(route) {
      this.setTitleVisiable(!route.meta.hideTitle)
      this.setBreadcrumbVisiable(!route.meta.hideBreadcrumb)
    },
    togglePin() {
      this.setSidebarFixed(!this.fixed)
      this.$resizeCallback()
    }
  },

  watch: {
    $route(to, from) {
      this.setActive({from, to})
      this.patchPageInfo(to)
      $('html,body').animate({
        scrollTop: 0
      }, 500)

      Vue.nextTick(() => {
        globalEvents.emit('responsive')
      })
    }
  }
}
