import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { items } from "../public/items.json";
import "./globals.css";

export const ReactBootstrapCarousel = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <>
      <div style={{display: "flex"}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.imageUrl} alt="slides" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button className="btn btn-danger">Visit Docs</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      </>
    );
  };