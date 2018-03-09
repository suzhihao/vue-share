/**
 * Created by Wu Jian Ping on - 2017/11/23.
 */
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('appState', {
      user: state => state.user
    })
  }
}
