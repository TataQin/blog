import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

class Nav extends Component {
  render () {
    const { navList } = this.props
    return (
      // selectedKeys={[this.props.location.pathname]}
      <Menu mode='horizontal' className='header-nav'>
        {navList.map(nav => (
          <Menu.Item key={nav.link}>
            <Link to={nav.link}>
              {nav.icon && <Icon type={nav.icon} />}
              <span className='nav-text'>{nav.title}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

export default Nav
