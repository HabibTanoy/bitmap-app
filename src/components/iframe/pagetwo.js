import React, { Component } from 'react';
// import Iframe from 'react-iframe'

class PageTwo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
           {/* <Iframe url="http://bit-info.surge.sh/"
        width="100%"
        height="990vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
        <iframe src="http://bit-info.surge.sh/" className="name" ></iframe>
            </div>
         );
    }
}
 
export default PageTwo;