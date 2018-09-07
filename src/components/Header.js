import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable_redirect: false,
      redirect_url: '/'
    }
  }

  logout() {
    if (window.confirm('确定要登出吗？')) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
      this.setState({
        enable_redirect: true
      })
    }
  }

  render() {
    const username = localStorage.getItem("username");
    return (
      <div className="header">
        {this.state.enable_redirect ? <Redirect to={this.state.redirect_url} /> : null}
        <Link to="/" className="logo">朋也社区</Link>
        {
          username ?
            <div className="right">
              <Link to='/topic/create'>创建话题</Link>
              <Link to={'/user/' + username}>{username}</Link>
              <Link to='/user/settings'>设置</Link>
              <span onClick={() => this.logout()}>登出</span>
            </div>
            :
            <div className="right">
              <Link to="/login">登录</Link>
              <Link to="/register">注册</Link>
            </div>
        }
      </div>
    )
  }
}

export default connect((state) => {
  return {}
})(withRouter(Header))