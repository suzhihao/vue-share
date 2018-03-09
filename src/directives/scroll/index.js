/**
 * Created by zhihao_su on 2017/11/13.
 */
import Vue from 'vue'
import VIscroll from './scroll'

Vue.use(VIscroll, {
  scrollbars: true,
  mouseWheel: true,
  interactiveScrollbars: true,
  disableTouch: true
  // disablePointer: true,
  // preventDefault: false
})
