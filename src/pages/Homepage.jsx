import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  // React state for count
  const [count, setCount] = useState(1);

  return (
    <>
      <Navbar count={count} setCount={setCount}/>
      <div className="body">
        <div className="product">
          <img 
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/samsung-galaxy-s24-ultra-220053812-1x1.jpg?VersionId=nUTaKjLW7ZN9eel9CjkTnxLECy8KDo9H" 
            alt="Samsung Galaxy S25 Ultra"
          />
          <p><b>Name:</b> Samsung Galaxy S25 Ultra</p>
          <p><b>Price:</b> 1,24,000</p>

          <button className='dItem' onClick={() => setCount(prev => Math.max(prev - 1, 0))}>-</button>
          <span id='incrementItem'>{count}</span>
          <button className='iItem' onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>

        <div className="product">
          <p><b>Name:</b> Samsung Galaxy S25 Ultra</p>
          <p><b>Price:</b> 1,24,000</p>
          <h3>Specifications:</h3>
          <ul>
            <li>12GB RAM | 512 GB ROM</li>
            <li>17.53cm (6.9 inch) Quad HD+ Display</li>
            <li>5000mAH Battery</li>
            <li>8 Elite Snapdragon</li>
            <br /><br />
            <center>
              <p><b>Quantity:</b> {count}* 1,24,000</p>
              <p><b>Total Price:</b> {count * 124000}</p>
              <button id='btn'>Buy</button>
            </center>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Homepage
