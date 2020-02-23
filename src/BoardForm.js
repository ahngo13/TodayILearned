import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardRow extends Component{
  getBoard=(_id)=>{
    alert(_id);
  }
  render(){
    return(
    <tr onClick={this.getBoard.bind(null,this.props._id)}><td>{this.props.createdAt}</td><td>{this.props.title}</td></tr>
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
          console.log(boardList);
          this.setState({
            boardList : boardList
          })
        } else {
          alert("글목록 조회 실패");
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
    );
  }
}

export default BoardForm;
