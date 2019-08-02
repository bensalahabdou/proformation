import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
 return (
   
     <div className="nav-bar">
        <Link className="nav" to="/home">Home</Link>
        <Link className="nav" to="/actualite">Actualité</Link>
        <Link className="nav" to="/domaine">Domaine</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        
     </div>
  
 );
}
export default NavBar;