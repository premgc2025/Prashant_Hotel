import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />
      <h3>{room.name}</h3>
      <p>{room.description}</p>
      <p>Price: NPR. {room.price}</p>
      <button><Link to="/booking" className="room-booking-btn">Book Now</Link> </button>
    </div>
  );
};

export default RoomCard;
