import React, { Component } from 'react';
import Iframe from 'react-iframe'

class PageFive extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
           <Iframe url="http://geoserver.barikoi.com:3000/login"
        width="1300px"
        height="6000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        {/* <iframe src="http://geoserver.barikoi.com:3000/login" className="name" ></iframe> */}
            </div>
         );
    }
}
 
export default PageFive;