/**
 * Created by Wu Jian Ping on - 2017/06/06.
 */

const toTop = () => {
  $('html,body').animate({
    scrollTop: 0
  }, 400)
}

const to = (top) => {
  $('html,body').animate({
    scrollTop: top
  }, 400)
}

export default {
  toTop,
  to
}
