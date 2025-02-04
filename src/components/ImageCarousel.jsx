
import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages,setCurrentImages] = useState([])

  // Show 5 images at a time
  const imagesPerPage = 1;
  const totalImages = images.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);



  // Next Image Function
  const nextPage = () => {
    
   
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // Previous Image Function
  const prevPage = () => {

    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Auto Move to Next Page every 3 seconds
  useEffect(() => {
    const interval = 
    setInterval(() => {
        
        
        nextPage()
       
    }, 5000);
    return () => clearInterval(interval); 
  }, []);

  // Get current 5 images based on currentIndex
  useEffect(() => {
    // Set the first 5 images when the component mounts
    setCurrentImages( images.slice(currentIndex, currentIndex + 1));
  }, [currentIndex]);




  return (
    <div  className="carousel-container" >
      {/* Previous Button */}
      <button className='pre-btn'
    
        onClick={prevPage}
    
      >
        &#10094;
      </button>

      {/* Display the Images */}
      <div className="image-gallery"
     
       >
        {currentImages.map((img, index)  =>(
                <div key={index}  className={`carousel-item ${index === 1 ? 'active' : ''}`} >

                    <img
                      key={index}
                      src={img.src}
                      alt={`Image ${index + 1}`}
                      className={name}
                    />
                </div>
               
        )  )}
      </div>

      {/* Next Button */}
      <button className='next-btn'
     
        onClick={nextPage}
     
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
