import React, {Component} from "react";
import './re_main.css';
import Input from "./Input.tsx";
import Button from 'react-bootstrap/Button';

class See extends Component {
    constructor(props) {
        super(props)
        this.state = {
            button1State: true,
            button2State: false,
        }
        this.toggleState = this.toggleState.bind(this)
    }

    render() {
        return (
            <div>
                <Button variant="outline-secondary" id="button-addon2" id="see" style={{width:"13em"}}onClick={this.toggleState}>내가 작성한 리뷰 보러가기</Button>
                {this.state.button1State===false&&<Input/>}
            </div>
        )
    }

    toggleState() {
        this.setState({button1State: !this.state.button1State })
        this.setState({button2State: this.state.button2State })
    }


}

export default See;


