import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(      
    <nav id="navbarV">
        <div className="nav-wrapper white navV" >
            <Link to="/" className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/"><i class="material-icons">home</i></Link></li>
            <li><Link to="/"><i class="material-icons">send</i></Link></li>
            {/* <li><Link to="/"><i class="material-icons">add_box</i></Link></li> */}
            <li><Link to="/createPost"><i class="material-icons">add_box</i></Link></li>
            <li><Link to="/profile"><i class="material-icons">account_circle</i></Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export {Navbar}