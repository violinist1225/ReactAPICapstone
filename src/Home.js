import React from "react"
import "./styles.css"
import {useHistory} from "react-router-dom"

export default function Home(){

const history = useHistory()
const handleSearch=()=>{
    
        history.push({pathname:"/Search"})
    
}
    return(
    <div id="homeContainer">
        <div class="centeredPic">
            <h1 class="title-one">Search for The Best Makeup </h1>

            <img src="https://pyxis.nymag.com/v1/imgs/f8c/744/0d948e9a35fc2fd6aeb563ddf3c5f05d59-27-pmg-mattetrance-lipstick.rsquare.w700.jpg" alt="Pat Mcgrath Lipsticks" ></img>
  
    
                <button id="searchButton" onClick={handleSearch} >Search for Makeup</button>
            
        </div>
    </div>
    )
}