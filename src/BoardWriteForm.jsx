import React, { Component } from "react";
import CKEditor from "ckeditor4-react";
import { Button, Form} from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardWriteForm extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    if (this.props.location.query !== undefined) {
      this.boardTitle.value = this.props.location.query.title;
      this.setState({
        data: this.props.location.query.content
      });
    }
  }

  writeBoard = () => {
    let url;
    let send_param;

    const boardTitle = this.boardTitle.value;
    const boardContent = this.state.data;

    console.log(this.imgFile);
    const imgFile = this.imgFile.files[0];
    const imgName = this.imgFile.files[0].name;
    const imgExp = /([^\s]+(?=\.(jpg|gif|png))\.\2)/;

    console.log("imgFile" + imgFile);
    console.log("imgName" + imgName);
    console.log("imgExp" + imgExp);

    const formData = new FormData();

    formData.append("headers", headers);
    formData.append("_id", $.cookie("login_id"));
    formData.append("title", boardTitle);
    formData.append("content", boardContent);

     if (imgFile === undefined) {
      formData.append("imgPath", imgName);
    } else {
      formData.append("imgFile", imgFile);
    } 
    if (boardTitle === undefined || boardTitle === "") {
      alert("글 제목을 입력 해주세요.");
      boardTitle.focus();
      return;
    } else if (boardContent === undefined || boardContent === "") {
      alert("글 내용을 입력 해주세요.");
      boardContent.focus();
    } else if (imgFile !== undefined) {
      if (imgName.match(imgExp) === null && imgName !== "") {
        alert("jpg, gif, png 형식의 이미지 파일만 첨부 가능합니다.");
        return;
      }
    }
    
    if (this.props.location.query !== undefined) {
      url = "http://localhost:8080/board/update";
    } else {
      url = "http://localhost:8080/board/write";
    }

    axios
      .post(url, send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "/";
        } else {
          alert("글쓰기 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  onEditorChange = evt => {
    this.setState({
      data: evt.editor.getData()
    });
  };

  render() {
    const divStyle = {
      margin: 50
    };
    const titleStyle = {
      marginBottom: 5
    };
    const buttonStyle = {
      marginTop: 5
    };

    return (
      <div style={divStyle} className="App">
        <h2>글쓰기</h2>
        <Form.Control
          type="text"
          style={titleStyle}
          placeholder="글 제목"
          ref={ref => (this.boardTitle = ref)}
        />
        <CKEditor
          data={this.state.data}
          onChange={this.onEditorChange}
        ></CKEditor>

        <input type="file" ref={ref=>(this.imgFile =ref)}></input>
        <Button style={buttonStyle} onClick={this.writeBoard} block>
          저장하기
        </Button>
      </div>
    );
  }
}

export default BoardWriteForm;
