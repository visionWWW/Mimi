import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './see.js';
import './re_main.css';

function alertClicked() {
    alert('아직 지원하지 않는 기능입니다. 시범 페이지로 이동합니다.');
}


const Review = () => (
    <>
        <div>
            <Card style={{width:"30rem", marginLeft:"auto", marginRight:"auto",marginBottom:"30px"}}>
            <h5 id="subtitle">닉네임과 비밀번호를 입력해주세요</h5>
                <InputGroup>
                    <FormControl
                        id="in"
                        placeholder="닉네임"
                        aria-label="nickname"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <InputGroup>
                    <FormControl
                            id="in"
                            placeholder="비밀번호"
                            aria-label="password"
                            aria-describedby="basic-addon2"
                        />
                </InputGroup>

                <Button onClick={alertClicked} variant="outline-secondary" id="bt2" href="/review/check">확인</Button>
            </Card>
        </div>
    </>
);

export default Review;

