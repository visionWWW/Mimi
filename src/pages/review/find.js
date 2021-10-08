import InputGroup from 'react-bootstrap/InputGroup';
import See from './see.js';
import SearchBox from "./searchBox";
import './re_main.css';

const Review = (props) => (
   <>
    <div>
        <InputGroup style={{display:"block"}}>
            <SearchBox value={props.value}></SearchBox>
         </InputGroup>

        {/*<Button variant="outline-secondary" id="button-addon2" style={{ width: '10rem' }}>*/}
        {/*리뷰 쓰러 가기 ✍🏻*/}
        {/*</Button>*/}

        <See></See>
    </div>
  </>
);

export default Review;

       