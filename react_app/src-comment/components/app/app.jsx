import React, {Component} from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component{

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     comments:[
  //       {username: 'Tom', content: 'react 111'},
  //       {username: 'Tom12', content: 'react 112221'},
  //     ]
  //   }
  // }

  //给组件对象指定state属性
  state = {
    comments:[
      {username: 'Tom', content: 'react 111'},
      {username: 'To22m', content: 'react 2222'},
    ]
  }

  //add comments
  addComment = (comment) => {
    //得到原本状态
    const {comments} = this.state
    //修改状态内容
    comments.unshift(comment)
    //更新状态
    this.setState({comments})
  }

  //delete comments, similar to add comments
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
  }


  render() {
        return(
          <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
              //向对应的组件传递函数
              <CommentAdd addComment={this.addComment}/>
              <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
            </div>
          </div>
        )
    }
}
