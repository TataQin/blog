import React, { Component, Fragment } from 'react'
import { Button, Dropdown, Avatar, Menu } from 'antd'
// import AuthModal from '../authModal'

class UserInfo extends Component {
  renderAvatarDropdownMenu () {
    return (
      <Menu>
        <Menu.Item>
          <span className='user-logout' onClick={() => this.props.openAuthModal('updateUser')}>
            修改账户信息
          </span>
        </Menu.Item>
        <Menu.Item>
          <span className='user-logout' onClick={this.props.logout}>
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    )
  }

  render () {
    const { username, avatarColor } = this.props
    return (
      <div id='header-userInfo'>
        {username ? (
          <Dropdown placement='bottomCenter' overlay={this.renderAvatarDropdownMenu()} trigger={['click', 'hover']}>
            <Avatar className='user-avatar' size='large' style={{ backgroundColor: avatarColor }}>
              {username}
            </Avatar>
          </Dropdown>
        ) : (
          <Fragment>
            <Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              onClick={() => this.props.openAuthModal('login')}>
              登录
            </Button>
            <Button ghost type='danger' size='small' onClick={() => this.props.openAuthModal('register')}>
              注册
            </Button>
          </Fragment>
        )}

        {/* <AuthModal /> */}
      </div>
    )
  }
}

export default UserInfo
