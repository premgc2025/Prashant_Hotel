
import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='about'>
 
      <div className="hotel-info">
        <h2>Hotel Information</h2>
        <p><span>Location</span>: Dang Deukhuri, Nepal</p>
        <p><span>Owner</span>: Prashant Neupane</p>
        <p><span>Established</span>: 3 years ago</p>
      </div>
      <div className="about-summary">
        <h3>Facilities</h3>
        <ul>
            <li><p><span>Lodging</span>: The hotel offers comfortable, well-maintained rooms with modern amenities, suitable for both short and long stays. Rooms are designed to ensure a comfortable experience for single travelers, couples and families, with catering options.</p></li>
            <li><p><span>Fooding</span>: The hotel serves a variety of delicious, locally inspired dishes alongside popular international cuisines. The restaurant ensures quality and hygiene, serving freshly prepared food to suit all tastes. Vegetarian and non-vegetarian options are available.</p></li>
            <li><p><span>About the Owner</span>: Prashant Neupane, the proud owner of the hotel, is dedicated to providing a welcoming environment to all guests. With a keen focus on hospitality, he strives to provide a seamless experience for visitors, ensuring they feel at home from check-in to check-out.</p></li>
            <p>For anyone visiting Dang Deukhuri, Nepal, this hotel stands out as a place that balances comfort with quality service.</p>
        </ul>
      </div>
    </div>
  );
}

export default About;
