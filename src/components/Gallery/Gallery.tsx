import React, { useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImage = async () => {
  try {
    const response = await axios.get('https://image-generator-cjso.onrender.com/');
    const newImageUrl = response.data.url;

    if (!images.includes(newImageUrl)) {
      setImages((prevImages) => [newImageUrl, ...prevImages]);
    } else {
      console.log("Image already exists in the list fetchingnew");
      fetchImage(); 
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <button onClick={fetchImage} className="btn btn-dark w-100" style={{height: 50}}>Generate Image</button>
        <div className="row mt-5 justify-content-center">
          {images.length ? (
            images.map((image, index) => (
              <div key={index} className="col-12 mb-4">
                <div className="card">
                  <img className="card-img-top" src={image} alt={`Generated ${index}`} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100 mt-3">No images yet. Click the button to generate!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
