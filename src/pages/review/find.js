import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import See from './see.js';
import SearchBox from "./searchBox";
import './re_main.css';

const Review = () => (
  <>
    <div>
        <InputGroup className="mb-3">
            <SearchBox></SearchBox>

         </InputGroup>

        <Button variant="outline-secondary" id="button-addon2">
        리뷰 보러 가기 👀
        </Button>

        <See></See>
    </div>
  </>
);

export default Review;

       