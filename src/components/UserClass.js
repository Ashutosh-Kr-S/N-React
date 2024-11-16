import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state={                     // state variable
          userInfo:{
            name:'Dummy',
            location:'Default location',
          }
        };

        // console.log('Child Constructor');

    }


    async componentDidMount(){
        // console.log('Child Component Did Mount');
        // const data = await fetch('https://api.github.com/users/Ashutosh-Kr-S');
        // const json = await data.json();
        // console.log(json);

        this.setState({
          // userInfo:json
        })

        this.timer = setInterval(() => {
            console.log('Ticking');
        }, 1000);
    }

    componentDidUpdate(){
        // console.log('Child Component Did Update');
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log('Child Component Will Unmount');
    }

    render(){
        // const {name,location} = this.props;
        const {name,location,avatar_url} = this.state.userInfo;
        // console.log('Child Render');
        return (
            <div className='user-card'>
              <img src={avatar_url} alt='avatar'/>
              <h3>Name: {name} </h3>
              <h3>Location:{location}</h3>
              <h3>Contact: @ashutosh99</h3>
            </div>
          )
    }
}

export default UserClass