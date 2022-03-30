import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(      
    <nav>
        <div className="nav-wrapper white navV" >
            <Link to="/" className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/createPost">Create Post</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export {Navbar}