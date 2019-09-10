import React, { Component } from 'react'
import './Home.scss'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestPosts } from '../../redux/actions/posts'
class Article extends Component {
  componentDidMount () {
    const { fetchPosts } = this.props
    fetchPosts()
  }
  render () {
    const { isFetching, posts } = this.props
    console.log(isFetching)
    console.log(posts)
    return (
      <div>
        <div className='Home'>
          <ul class='tag-wrapper clearfix'>
            <li><a>Typescript(27)</a></li>
            <li><a>想和这个世界谈谈(7)</a></li>
            <li><a>数据结构与算法(5)</a></li>
            <li><a>数据结构与算法(5)</a></li>
            <li><a>Node.js(6)</a></li>
            <li><a>Http(4)</a></li>
            <li><a>JavaScript(19)</a></li>
            <li><a>React(11)</a></li>
            <li><a>Redux-saga(1)</a></li>
            <li><a>生活(5)</a></li>
            <li><a>JavaScript(19)</a></li>
            <li><a>React(11)</a></li>
            <li><a>Redux-saga(1)</a></li>
            <li><a>JavaScript(19)</a></li>
            <li><a>React(11)</a></li>
            <li><a>Redux-saga(1)</a></li>
          </ul>
        </div>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        <div class='archive'>
          <h2>2019</h2>
          <div class='month-list'>
            <p>july</p>
            <ul class='post-list'>
              <li class='post-item'>
                {posts && posts.map((post, i) => <article>
                  <time>07.13</time>
                  <a href='/article/5d29461a5ad43e4f59a18870' class=''>{post.title}</a>
                  <span data-v-4c031b79='' class='tag'>
                    <Icon type='code' /></span>
                </article>)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    posts: state.rootReducer.posts.items,
    isFetching: state.rootReducer.posts.isFetching
    // loading: state.article.requestState,
    // allTags: state.tags.tags
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: bindActionCreators(requestPosts, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article)
