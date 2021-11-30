import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import api from "../../utils/api";
import {useSelector} from "react-redux";

const WriteArea: React.FC = (props: any) => {
    const [validated, setValidated] = useState(false);
    const token = useSelector((state: any) => state.Auth.token);
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
  
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        setValidated(false);
        return;
      }
  
      setValidated(true);
      // Form.Grou의 controlid는 control의 id를 생성 => form[id] => control 노드 로 접근
      const explain = {
        explain: form.contentText.value,
      }
      console.log(explain);
      addReview(explain);
    };
  
    const addReview = async (explain: { explain: any }) => {
      const res = await api.post('http://mimi-project.kr:5000/api/user', explain);
      console.log(res);
  
      props.history.push('/login');
    }
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="contentText">
          <Form.Control required as="textarea" rows={10} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">내용을 입력하세요!!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          저장
        </Button>
      </Form>
    );
  }
export default WriteArea;