import React from "react";
import Button from "react-bootstrap/Button";


const RvForm = () => (
    <>
        <div style={{marginTop:"30px",textAlign:"center"}}>
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#가정식</Button>{' '}
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#혼밥</Button>{' '}
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#포장가능한</Button>{' '}
        </div>
        <div style={{marginTop:"10px",textAlign:"center"}}>
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#비건</Button>{' '}
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#대식가</Button>{' '}
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#가성비</Button>{' '}
            <Button style={{display:"inline-block",marginRight:"10px"}} variant="outline-primary">#웨이팅</Button>{' '}
        </div>

    </>
);

export default RvForm;