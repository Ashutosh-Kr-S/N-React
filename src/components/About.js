import React from 'react'
import UserClass from './UserClass'
import User from './User'


class About extends React.Component {

  constructor(props) {
    super(props);

    // console.log('Parent Constructor');
  }

  comspentDidMount() {
    // console.log('Parent Component Did Mount');
  }


  render() {

    // cosnole.log('Parent Render');

    return (
      <div>
        <h1>About Us</h1>
        <h2>This is about us content</h2>
        {/* <User/> */}
  
        <User name="Ashutosh Kumar Sahu" location="New Delhi"/>
      </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is about us content</h2>
//       <User/>

//       <UserClass name="Ashutosh Kumar Sahu" location="New Delhi"/>
//     </div>
//   )
// }

export default About
