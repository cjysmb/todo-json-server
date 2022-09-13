import React from 'react';
import Navbar from './navbar/Navbar';

const Main = ({children}) => {
    
    return(
        <div>
            <Navbar />
            <div className="nav-bot">
                {children}
            </div>
        </div>
    )
}

export default Main;