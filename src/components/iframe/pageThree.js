import React, { Component } from 'react';
// import Iframe from 'react-iframe'

class PageThree extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
           {/* <Iframe url="https://viz.barikoi.com/"
        width="100%"
        height="990vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
        <iframe src="https://viz.barikoi.com/" className="name" ></iframe>
            </div>
         );
    }
}
 
export default PageThree;