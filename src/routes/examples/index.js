import authorisedLayout from '../../layouts/authorised'

export default {
  path: 'examples',
  component: authorisedLayout,
  children: [
    {
      name: 'button',
      path: 'button',
      component: () => import('./button')
    },
    {
      name: 'portlet',
      path: 'portlet',
      component: () => import('./portlet')
    },
    {
      name: 'tabs',
      path: 'tabs',
      component: () => import('./tabs')
    },
    {
      name: 'toastr',
      path: 'toastr',
      component: () => import('./toastr')
    },
    {
      name: 'typography',
      path: 'typography',
      component: () => import('./typography')
    },
    {
      name: 'icon-fonts',
      path: 'icon-fonts',
      component: () => import('./icon-fonts')
    },
    {
      name: 'storage',
      path: 'storage',
      component: () => import('./storage')
    },
    {
      name: 'dashboard-stat',
      path: 'dashboard-stat',
      component: () => import('./dashboard-stat')
    },
    {
      name: 'pagination',
      path: 'pagination',
      component: () => import('./pagination')
    },
    {
      name: 'note',
      path: 'note',
      component: () => import('./note')
    },
    {
      name: 'step',
      path: 'step',
      component: () => import('./step')
    },
    {
      name: 'ajax',
      path: 'ajax',
      component: () => import('./ajax')
    },
    {
      name: 'validator',
      path: 'validator',
      component: () => import('./validator')
    },
    {
      name: 'typeahead',
      path: 'typeahead',
      component: () => import('./typeahead')
    },
    {
      name: 'dialog',
      path: 'dialog',
      component: () => import('./dialog')
    },
    {
      name: 'bootbox',
      path: 'bootbox',
      component: () => import('./bootbox')
    },
    {
      name: 'standard',
      path: 'standard',
      component: () => import('./standard')
    },
    {
      name: 'switch',
      path: 'element-switch',
      component: () => import('./element-switch')
    },
    {
      name: 'timePicker',
      path: 'element-time-picker',
      component: () => import('./element-time-picker')
    },
    {
      name: 'slider',
      path: 'element-slider',
      component: () => import('./element-slider')
    },
    {
      name: 'datetimePicker',
      path: 'element-datetime-picker',
      component: () => import('./element-datetime-picker')
    },
    {
      name: 'datePicker',
      path: 'element-date-picker',
      component: () => import('./element-date-picker')
    },
    {
      name: 'tooltip',
      path: 'element-tooltip',
      component: () => import('./element-tooltip')
    }
  ]
}
