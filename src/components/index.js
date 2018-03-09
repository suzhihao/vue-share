import Vue from 'vue'

// import element-ui packages
import DatePicker from 'element-ui/lib/date-picker'
import Tooltip from 'element-ui/lib/tooltip'
import Switch from 'element-ui/lib/switch'
import Slider from 'element-ui/lib/slider'
import TimePicker from 'element-ui/lib/time-picker'
import TimeSelect from 'element-ui/lib/time-select'
import Button from 'element-ui/lib/button'
import Tree from 'element-ui/lib/tree'
import Steps from 'element-ui/lib/steps'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
import Cascader from 'element-ui/lib/cascader'
import Step from 'element-ui/lib/step'

// import custom compoments
import uiPortlet from './ui-portlet'
import uiPortletFullscreenBtn from './ui-portlet/tools/fullscreen-btn'
import uiPortletFullscreenBtnXs from './ui-portlet/tools/fullscreen-btn-xs'
import uiPortletCollapseBtn from './ui-portlet/tools/collapse-btn'
import uiPortletRemoveBtn from './ui-portlet/tools/remove-btn'
import uiPagination from './ui-pagination'
import uiLoadingSpinner from './ui-loading-spinner'

// element-ui
Vue.component(Tree.name, Tree)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Switch.name, Switch)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Slider.name, Slider)
Vue.component(TimePicker.name, TimePicker)
Vue.component(TimeSelect.name, TimeSelect)
Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Steps.name, Steps)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Cascader.name, Cascader)
Vue.component(Step.name, Step)

// custom compoment
Vue.component(uiPortlet.name, uiPortlet)
Vue.component(uiPortletFullscreenBtn.name, uiPortletFullscreenBtn)
Vue.component(uiPortletFullscreenBtnXs.name, uiPortletFullscreenBtnXs)
Vue.component(uiPortletCollapseBtn.name, uiPortletCollapseBtn)
Vue.component(uiPortletRemoveBtn.name, uiPortletRemoveBtn)
Vue.component(uiPagination.name, uiPagination)
Vue.component(uiLoadingSpinner.name, uiLoadingSpinner)
