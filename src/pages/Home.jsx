import React from 'react';
import RoomCard from '../components/RoomCard';
import { useState,useEffect } from 'react';
import '../components/PhotoPagination.css' 
import './Home.css';
import ImageCarousel from '../components/ImageCarousel';
import Chatbot from '../components/Chatbot';

const rooms = [
  { id: 1, name: 'Standard Room', price: 1000, description: 'A comfortable room with basic amenities.', image: './images/standard_room.jpg' },
  { id: 2, name: 'Deluxe Room', price: 2500, description: 'A luxurious room with premium features.', image: './images/delux_room.jpg'},
  { id: 3, name: 'Suite', price: 3500, description: 'A spacious room with all the top-notch amenities.', image: './images/suit_room.jpg'},
  
];

const images = [
    { id: 1, src: './images/hotel_outside.jpg', alt: 'Photo 1' },
    { id: 2, src: './images/loby.jpg', alt: 'Photo 2' },
    { id: 1, src: './images/hotel_outside.jpg', alt: 'Photo 1' },
    { id: 2, src: './images/loby.jpg', alt: 'Photo 2' },
    { id: 1, src: './images/hotel_outside.jpg', alt: 'Photo 1' },
   
  ];

    
  

const Home = () => {
    
  
  return (
    < >
    <ImageCarousel images={images}/>


    <div className="home" id="/">
      <h1>Welcome to Our Hotel</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
        
      </div>

    </div>
    <Chatbot/>
    
    </>
  );
};

export default Home;
