import React from 'react';

const NotFound = props => {

    return (
        <div style={{width:"100%"}} className="home-sub">
            <div style={{height:0,paddingBottom:"66.66666666666666%",position:"relative",width:"100%"}}>
                {/* <iframe allowFullScreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/26FPGt0CsPqPAmXg4" style={{left:0,position:"absolute",top:0}} width="100%"></iframe> */}
                <iframe src="https://giphy.com/embed/26FPGt0CsPqPAmXg4" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" allowFullScreen aria-disabled disabled/>
            </div>

            <h2 style={{marginTop: 32}}>
                <a href="/">
                    Back to Home
                </a>
            </h2>
        </div>
    )
}

export default NotFound;