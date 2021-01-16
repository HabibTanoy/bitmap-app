import React, { Component } from 'react';
import Iframe from 'react-iframe'

class PageFour extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
           {/* <Iframe url="https://admin.barikoi.com/#/local/polygon/studio/bit"
        width="100%"
        height="990vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
        <iframe src="https://admin.barikoi.com/#/local/polygon/studio/bit" className="name" ></iframe>
            </div>
         );
    }
}
 
export default PageFour;