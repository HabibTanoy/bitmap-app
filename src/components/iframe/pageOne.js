import React, { Component } from 'react';
// import Iframe from 'react-iframe'

class PageOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
           {/* <Iframe url="http://bit-map.surge.sh/"
        width="100%"
        height="100vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        /> */}
        <iframe src="http://bit-map.surge.sh/" className="name" ></iframe>
            </div>
         );
    }
}
 
export default PageOne;