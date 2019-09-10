import React, { Component } from 'react'
import { Divider,Icon } from 'antd'
import './Sider.scss'
class BolgSider extends Component {
  render () {
    return (
      <div className='sider-wrapper'>
        <img src='https://images.unsplash.com/photo-1564298933903-2a8686e64633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' className='sider-avatar' alt='' />
        <div className='title' />
        <div class='info '>
          <div class='list title'><Icon type='user' /><span class='list-content'>周沁 (echo zhou), <span>90后。</span></span></div>
          <div class='list title'><Icon type='bug' /><span class='list-content'>热爱coding、阅读、音乐。</span></div>
          <div class='list title'><Icon type='home' /> <span class='list-content'>《老友记》忠实粉丝。</span></div>
          <div class='list title'><Icon type='coffee' /><span class='list-content'>Hello world!</span></div>
          <div class='list title'><Icon type='contacts' />
            <span class='list-content icons'>
              <a href='https://github.com/jkchao' target='_blank'><Icon type='github' />
              </a></span></div>
        </div>
        <Divider orientation='left'>热门文章</Divider>
        <Divider orientation='left'>标签</Divider>
      </div>
    )
  }
}

export default BolgSider
