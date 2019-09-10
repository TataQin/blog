import React from 'react'
import routes from './routesConfig'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function Root (props) {
  function renderRoutes (routes, contextPath) {
    const children = []
    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
      newContextPath = newContextPath.replace(/\/+/g, '/')
      if (item.component && item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={props => <item.component {...props}>{childRoutes}</item.component>}
            path={newContextPath}
          />
        )
      } else if (item.component) {
        children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
      } else if (item.childRoutes) {
        item.childRoutes.forEach(r => renderRoute(r, newContextPath))
      }
    }
    routes.forEach(item => renderRoute(item, contextPath))
    return <Switch>{children}</Switch>
  }
  const children = renderRoutes(routes, '/')
  return <BrowserRouter>{children}</BrowserRouter>
}

export default Root
