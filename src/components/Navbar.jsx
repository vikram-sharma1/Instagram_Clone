import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const NAvbar = () => {
    return(      
    <nav className="aaaaa">
        
      <div>logo</div>
      <div>searchbar</div>
       
       <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
       </ul>


    </nav>
    )
}






const StyledNav=styled(NAvbar)`

display: flex;
width: 100%;
background-color: black;

`
export {StyledNav}