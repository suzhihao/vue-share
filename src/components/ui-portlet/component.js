/**
 * Created by zhihao_su on 2017/11/10.
 */
export default {
  name: 'ui-portlet',

  props: {
    tools: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {}
  },

  computed: {},

  mounted() {},

  methods: {
    bindCollapse() {
      $(this.$refs.body).slideToggle('normal', () => {
        this.$emit('collapse')
      })
    },
    bindConfig() {
      this.$emit('config')
    },
    bindReload() {
      this.$emit('reload')
    },
    bindFullscreen() {
      this.$emit('fullscreen')
    },
    bindRemove() {
      this.$emit('remove')
    }
  }
}
