import React from 'react';
import WIP from '../static/images/img/wip.png';

const Home = props => {

    return (
        <div className="home-div">
            <div className="home-sub">
                <img src={WIP} alt="work in progress"/>
                <h1>
                    Home is under construction 
                </h1>
                <h3>
                    You can go to navigation buttons "To do", "Doing", "Done"
                </h3>
            </div>
        </div>
    )
}

export default Home;