import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/tomoya92/pybbs">源码地址</a>&nbsp;|&nbsp;
        <a href="https://github.com/tomoya92/pybbs/blob/master/api.md">文档/API地址</a>
        <p>致力于搭建一个分享发现好玩东西的社区</p>
      </div>
    )
  }
}

export default Footer;