import React, {Component} from 'react';
import CKEditor from 'ckeditor4-react';
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardWriteForm extends Component{
    state={
        data:""
    };

    writeBoard=()=>{
        const send_param = {
            headers,
            _id: $.cookie("login_id"),
            title: this.boardTitle.value,
            content: this.state.data,
          };
          axios
            .post("http://localhost:8080/board/write", send_param)
            //정상 수행
            .then(returnData => {
              if (returnData.data.message) {
                alert(returnData.data.message);
              } else {
                alert("글쓰기 실패");
              }
            })
            //에러
            .catch(err => {
              console.log(err);
            });
    }

    onEditorChange=(evt)=>{
        this.setState({
            data: evt.editor.getData()
        }); 
    };

    render(){
        const divStyle = {
            margin : 50
        };
        return(
            <div style={divStyle} className="App">
                <h2>글쓰기 {this.props._id}</h2>
                <Form.Control type="text" placeholder="글 제목" ref={ref => (this.boardTitle = ref)} />
                <CKEditor data={this.state.data} onChange={this.onEditorChange}></CKEditor>
                <Button onClick={this.writeBoard}>저장하기</Button>
            </div>
        );
    }
}

export default BoardWriteForm;