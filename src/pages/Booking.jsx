import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify'
import url_email_api from '../components/helper';

import './Booking.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState('');
  const [children, setChildren] = useState('');
  const [roomType, setRoomType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [errors, setErrors] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    const bookingData = {name,email,person,children,roomType,roomNumber,checkIn,checkOut}
    console.log("Data",bookingData)

    if (name.length <= 3) {
      setErrors({ message: "User Name must be grater than three" })
      return

    }
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setErrors({ message: "Email is not correct" })
      return
    }
   
    let seckey = parseInt( prompt("Enter Your Key: 12345 "))
    console.log(seckey)
    if(seckey!==12345){
     
      alert("Try again, Enter Your Key is 12345  ")
      return

    }
   

    const response = await fetch(`${url_email_api}/send-phroom-booking`, {
      method: "POST",
      body: JSON.stringify(bookingData),
      headers: { "Content-Type": "application/json" }


    })
    const data = await response.json();
    console.log(data);
    toast.success('🤓 Successfully Submit!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",


    });

    setName("")
    setEmail("")
    setPerson("")
    setChildren('')
    setRoomType("")
    setRoomNumber("")
    setCheckIn("")
    setCheckOut("")
    

    setTimeout(() => {
      setErrors({})

    }, 1000);
   
  };

  return (
    <div className="booking-container">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
    <div className="booking" id="booking">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className='booking-form'>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
         <label>Person</label>
        <input
          type="number"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          placeholder="Enter Number of Adult Person"
          required
        />
         <label>Children</label>
        <input
          type="number"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          placeholder="Enter Number of Children below 10 Years"
         
        />
       
        <label>Room Type</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
          <option value="">Select Room</option>
          <option value="standard">Standard  (NPR. 1000)</option>
          <option value="deluxe">Deluxe Room (NPR. 2500)</option>
          <option value="suite">Suite (NPR. 3500)</option>
        </select>

        <label>Number of Room</label>
        <input
          type="number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Enter Number of Room"
          required
        />

        <label>Check-in Date</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
        <label>Check-out Date</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
         <div className="error">
              {errors && <p>{errors.message}</p>}
            </div>

        <button type="submit" className='booking-form-btn'>Book Now</button>
      </form>
    </div>
    </motion.div>
    <ToastContainer>

    </ToastContainer>
    </div>
  );
};

export default Booking;
