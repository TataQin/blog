import React, { Component } from 'react'
import { Layout, Icon, Row, Col, BackTop } from 'antd'
import Header from '../header/Header'
import BolgSider from '../sider/Sider'
import './Layout.scss'
class WebLayout extends Component {
  render () {
    const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
    const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

    return (
      <Layout className='app-container'>
        <Header />
        <Row className='main-wrapper'>
          <Col {...siderLayout}>
            <BolgSider />
          </Col>
          <Col {...contentLayout}>
            <div className='content-wrapper'>
              {this.props.children}
            </div>
          </Col>
        </Row>
        {/* <BackTop target={() => document.querySelector('.content-wrapper')} /> */}
      </Layout>
    )
  }
}

export default WebLayout
