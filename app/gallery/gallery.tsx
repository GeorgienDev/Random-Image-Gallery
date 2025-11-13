"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImage = async () => {
    try {
      const response = await axios.get('https://image-generator-cjso.onrender.com/'); 
      const newImageUrl = response.data.url;

      if (!images.includes(newImageUrl)) {
        setImages((prevImages) => [newImageUrl, ...prevImages]);
      } else {
        console.log("exists in the list");
        fetchImage(); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <Button onClick={fetchImage} variant="primary" className="btn btn-dark w-100" style={{height: 50}}>Generate Image</Button>
        <Row className="mt-5 justify-content-center">
          {images.length ? (
            images.map((image, index) => (
              <Col key={index} xs={12} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={image} />
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center w-100 mt-3">No images yet. Click the button to generate!</div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Gallery;
