import React, {useEffect, useState, useContext} from "react"
import {RecommendationContext} from "./RecommendationContext.js"
import Selection from "./Selection"
import {useLocation} from "react-router-dom"


export default function Recommendation(){
    const location = useLocation()
    console.log(location)
    const {getData, alllipsticksData} = useContext(RecommendationContext)
    // console.log("Rec. component Lipstick data", alllipstickData)
    useEffect(() => {
        if(location.choice){
        getData(location.choice)
        console.log(location.choice)
        }
    }, [])

    
    return(
        <div style={{backgroundColor: "pink"}}>
    <h1 class>Here are your recommendations</h1>

     {alllipsticksData && alllipsticksData.map((selection) => {
        console.log("SELECTION.NAME",selection.name)
        return(
        <div>
        
            <h1>{selection.name}</h1>
            <Selection 
                    key= {selection.id}
                    name={selection.name}
                    price={selection.price}
                    brand={selection.brand}
                    image={selection.api_featured_image}
                    />
     </div>
     
        )}) 
        }
        </div>
    )

    }
   
        
    


