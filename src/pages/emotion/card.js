import React from 'react';
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import url from "./ImgUrl"

const ResultCard = () => (
    <>
        <div>
            <Col xs={12} md={12}>
                <Image style={{display:"block",margin:"auto",width:"280px",height:"420px",objectFit:"cover",overflow:"hidden", marginBottom:"50px"}}
                src={url.url}></Image>
            </Col>

        </div>
    </>
);

export default ResultCard;