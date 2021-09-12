import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ReviewCardTest from "./reviewcardtext";

class ReviewCard extends Component {
    render(){
        return(
        <div id = "reviewcard">
        <CardGroup>
    <Card>
    <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1-8noao2KTy9n3OWVfuMIVtSqZTgtQqCJ" width="300px" height="300px" />
    <Card.Body>
      <Card.Title>포돈</Card.Title>
      <Card.Text>
        <ReviewCardTest/>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src = "http://drive.google.com/uc?export=view&id=15dW5OCXrACR-kg4oW3BueGjR81zIJLXv" width="300px" height="300px"/>
    <Card.Body>
      <Card.Title>고씨네</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="http://drive.google.com/uc?export=view&id=1z18J_fnHBvtCnjSluv0oLwxLkFsB2OzZ" width="300px" height="300px"/>
    <Card.Body>
      <Card.Title>빨봉분식</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
)
}
}

export default ReviewCard;