import Layout from '../components/layout/Layout.jsx'
import Home from '../features/home/Home.jsx'
import Archives from '../features/archives/Archives.jsx'
export default {
  path: '/',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '', component: Home },
    { path: 'archives', component: Archives }
  ]
}
