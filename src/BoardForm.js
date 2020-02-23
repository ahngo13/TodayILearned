import React, { Component } from "react";
import { Table } from "react-bootstrap";
// import {NavLink} from 'react-router-dom';
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardRow extends Component{
  state={
    board : []
  };

  getBoard=(_id)=>{
    const send_param = {
      headers,
      _id
    };
    axios
      .post("http://localhost:8080/board/getOne", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.board[0]) {
          const board = <Table striped bordered hover><thead><tr><th>returnData.data.board[0].title</th></tr></thead><tbody></tbody></Table>;
          this.setState({
            board : board
          });
        } else {
          alert("글 상세 조회 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  }
  render(){
    return(
      <tr onClick={this.getBoard.bind(null,this.props._id)}>
          <td>
            {(this.props.createdAt).substring(0,10)}
          </td>
          <td>
            {this.props.title}
          </td>
        </tr>
    );
  }
}

class BoardForm extends Component {
  state={
    boardList : []
  };

  componentDidMount(){ this.getBoardList(); }

  getBoardList=()=>{
    const send_param = {
      headers,
      _id:$.cookie('login_id')
    }
    axios
    .post("http://localhost:8080/board/getBoardList", send_param)
    .then(returnData => {
      if (returnData.data.list) {
        console.log(returnData.data.list.length);
          const boards = returnData.data.list;
          const boardList = boards.map((item)=>(<BoardRow key={Date.now() + (Math.random() * 500)} _id={item._id} createdAt={item.createdAt} title={item.title}></BoardRow>));
          // console.log(boardList);
          this.setState({
            boardList : boardList
          })
        } else {
          alert("글 목록 조회 실패");
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    const divStyle={
      margin : 50
    };

    return(
    <div>
      <div style={divStyle}>
        <Table striped bordered hover>
          <thead>
            <tr><th>날짜</th><th>글 제목</th></tr>
          </thead>
          <tbody>
            {this.state.boardList}
          </tbody>
        </Table>
      </div>
      <div style={divStyle}>
        {this.state.board}
      </div>
    </div>
    );
  }
}

export default BoardForm;
