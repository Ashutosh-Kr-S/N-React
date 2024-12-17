# Recat projcet 🚀


# Parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement (means refreshing when ans changes are made)
- File Watching Algo - witten in C++
- Cashing = Faster builds
- Image optimization
- Minification of file
- Bundling the files
- Compressing
- Consistent Hashing =  is a technique used in distributed systems to store data and ensure that it's balanced and efficiently retrieved
- Code splitting
- Differential Bundling = so that it works smoothly on older browsers.
- Diagnostics
- Error Handlaing
- Https = if we to work on ssl then we can
- Tree shaking - remove unused code
- Different dev and production bundles

Two types of export/import
 - Default export/import
 export default <component_name>
 import <component_name> from "path"

 - Named export/import
 export const variable_name;
 import {variable_name} from "path"

<Header />           first we want header to render then dpendingly any below
{/* if path is = / */}
<Body />
{/* if path is = /about */}
<About />
{/* if path is = /contact */}
<Contact />


-> 2 types of routing 
1. Client side routing
2. Server side routing

<!--  class method creations -->
import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state={                     // state variable
          count:0,
          count2:2,
        };

        console.log('Child Constructor');

    }


    componentDidMount(){
        console.log('Child Component Did Mount');
    }


    render(){
        const {name,location} = this.props;
        const {count,count2} = this.state;

        console.log('Child Render');


        return (
            <div className='user-card'>
              {/* <h2>Name: Ashutosh </h2> */}
              {/* <h3>Count: {this.state.count2}</h3> */}
              <h3>Count: {count}</h3>

              <button className='count-btn' onClick={() => {
                // N  EVER UPDATE THE STATE VARIABLE DIRECTLY
                this.setState({count:count+1})
              }}>

              </button>

              <h3>Name: {this.props.name} </h3>
              <h3>Location:{location}</h3>
              <h3>Contact: @ashutosh99</h3>
            </div>
          )
    }
}

export default UserClass

<!-- for React lifecycle methods -->
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app
- Slice (cart slice)
- dispatch (action)
- selector