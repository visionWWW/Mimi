import {Alert} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="info" onClose={() => setShow(false)}>
                <Alert.Heading>지금 단계에서는 지원하지 않는 페이지입니다.</Alert.Heading>
                <p>
                   올해 11월 사용자 테스트 때 만나요🤚🏻
                </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="info">
                        알람 창 가리기
                    </Button>
                </div>
            </Alert>
        );
    }
    return <Button variant="info" onClick={() => setShow(true)} style={{display:"block",margin:"auto"}}>알람 확인하기</Button>;
}