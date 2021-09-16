import React from "react";
import {ToggleButtonGroup} from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";


const RvForm = () => (
    <>
        <ToggleButtonGroup type="checkbox" style={{textAlign:"center",display:"block",marginTop:"30px"}}>
            <ToggleButton id="tbg-check-1" value={1} style={{marginRight:"10px", width:"120px"}}>
                <br></br> #가정식
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={2} style={{marginRight:"10px", width:"120px"}}>
                <br></br> #혼밥
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={3} style={{marginRight:"10px",width:"120px"}}>
                <br></br> #포장가능한
            </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup type="checkbox" style={{textAlign:"center",display:"block",marginTop:"10px"}}>
            <ToggleButton id="tbg-check-1" value={4} style={{marginRight:"10px", width:"120px"}}>
                <br></br> #비건
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={5} style={{marginRight:"10px", width:"120px"}}>
                <br></br> #대식가
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={6} style={{marginRight:"10px",width:"120px"}}>
                <br></br> #가성비
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={7} style={{marginRight:"10px",width:"120px"}}>
                <br></br> #웨이팅
            </ToggleButton>
        </ToggleButtonGroup>

    </>
);

export default RvForm;