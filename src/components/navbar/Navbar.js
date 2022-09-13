import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const links = [
        {
            'key': 'todo',
            'link': '/todo',
            'name': 'To do',
        },
        {
            'key': 'doing',
            'link': '/doing',
            'name': 'Doing',
        },
        {
            'key': 'done',
            'link': '/done',
            'name': 'Done',
        },
    ]
     
    return (
        <nav className="navbar-fixed">
            <div className="navbar-child">
                <div>
                    <NavLink to="/" className="nav-link-text">
                        To do app
                    </NavLink>
                </div>
                <div>
                {
                    links.map((item) => {
                        return(
                        <NavLink to={item.link} className="nav-link" key={item.key}>
                            {item.name}
                        </NavLink>
                        )
                    })
                }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;