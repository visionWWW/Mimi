import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './see.js';
import './re_main.css';

const Review = () => (
    <>
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    id="in"
                    placeholder="닉네임"
                    aria-label="username"
                    aria-describedby="basic-addon2"
                />
                <FormControl
                    id="in"
                    placeholder="비밀번호"
                    aria-label="pw"
                    aria-describedby="basic-addon2"
                />

            </InputGroup>
            <Button variant="outline-secondary" id="bt2">
            확인
            </Button>
        </div>
    </>
);

export default Review;

