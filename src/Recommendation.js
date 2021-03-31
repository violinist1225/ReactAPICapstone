import React, {useEffect, useState, useContext} from "react"
import {RecommendationContext} from "./RecommendationContext.js"
import Selection from "./Selection"


export default function Recommendation(){
    const {selection, getData, clicked, setClicked, allLipstickData} = useContext(RecommendationContext)
    console.log("Rec. component Lipstick data", allLipstickData)
    useEffect(() => {
        getData(selection)
        if(clicked){
            setClicked(false)
        }
    }, [clicked])
  
    

    // brand name price_sign price currency image_link website_link description 
        
    return(
        <div>
            <p className="title-one">Here are your recommendations</p>
            {/* {allLipstickData.map((selection) => {
                <Selection 
                key= {selection.id}
                name={selection.name}
                price={selection.price}
                brand={selection.brand}
                image={selection.api_featured_image}
                
            
                /> */}




            }



            )



            }
        </div>
    )
}

