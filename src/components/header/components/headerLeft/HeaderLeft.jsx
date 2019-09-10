import React from 'react'
import { Icon, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'

const HeaderLeft = ({ navList }) => {
  const menuNav = (
    <Menu className='header-nav'>
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            {nav.icon && <Icon type={nav.icon} style={{ marginRight: 15 }} />}
            <span className='nav-text'>{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className='header-left'>
      <i className='iconfont icon-airplane' style={{ color: '#055796' }} />
      <span className='blog-name'>塔塔的博客</span>
      <Dropdown overlayClassName='header-dropdown' trigger={['click']} overlay={menuNav}>
        <Icon type='menu-o' className='nav-phone-icon' />
      </Dropdown>
    </div>
  )
}

export default HeaderLeft
