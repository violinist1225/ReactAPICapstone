import React from "react"
import {Link} from "react-router-dom"


export default function NavBar(){

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/Search">Search</Link>
            <Link to="/About">About</Link>
            <Link to="/Recommendation">Recommendation</Link>
 
            
        </div>
    )
}