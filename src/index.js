import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store } from './redux/store/main'
import Root from './common/root'
import 'antd/dist/antd.css'
import './styles/index.scss'

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <Root />
  </ConnectedRouter>
</Provider>, document.getElementById('root'))
