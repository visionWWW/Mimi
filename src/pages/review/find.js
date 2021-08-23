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
              placeholder="리뷰할 음식점 찾기"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              🔍
            </Button>
         </InputGroup>
            <a href="/review" id="see">내가 작성한 리뷰 보러가기</a>
    </div>
  </>
);

export default Review;

       