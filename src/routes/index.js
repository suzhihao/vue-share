import defaultLayout from '../layouts/default'
import examples from './examples'

const routes = [
  {
    path: '/',
    component: defaultLayout,
    children: [
      {
        path: '',
        redirect: '/examples/button'
      },
      examples
    ]
  },
  {
    path: '*',
    component: defaultLayout,
    children: [
      {
        name: '404',
        path: '',
        component: () => import('./errors/404')
      }
    ]
  }
]

export default routes
