import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const Young = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5asOo5gj45wo-rMg7cJdnCABR93uCg3_otkI1W1-xAK71C4kAH2VPsz97l4Q&usqp=CAc"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtE8MSHI__Oa8B8BpUb1znrS38uDYSs3vdA_RdtZXEMgbauygK3xt7wCKp23gfPULXOWyWwXu&usqp=CAc"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Young;