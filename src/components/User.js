import React, { useEffect } from 'react'
import { useState } from 'react'

const User = () => {
  const{count,setCount}=useState(0);
  const {count2} = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Ticking');
    }, 1000);

    console.log("Use Effect Called");

    return () => {
      clearInterval(timer);
      console.log("Cleanup");
    }
  },[]);

  return (
    console.log("Rendered"),

    <div className='user-card'>
      <h3>Count: {count}</h3>
      <h3>Name: Ashutosh </h3>
      <h3>Location: Delhi</h3>
      <h3>Contact: @ashutosh</h3>
    </div>
  )
}

export default User

