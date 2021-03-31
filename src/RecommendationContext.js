import React from "react"
import axios from "axios"
import {useState} from "react"
const RecommendationContext = React.createContext()


function RecommendationProvider(props){
   
    const [alllipsticksData, setAlllipsticksData] = useState([])

    // key= {selection.id}
    //             name={selection.name}
    //             price={selection.price}
    //             brand={selection.brand}
    //             image={selection.api_featured_image}
    
    function getData(selection) {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?${selection}`)   
        .then(res => {
            setAlllipsticksData(res.data)
    })
    
        .catch(err => console.log(err))
        }

      console.log("Context alllipdata", alllipsticksData) //getting alllipstick data here
     return(
     <RecommendationContext.Provider value={{alllipsticksData, getData}}>
         {props.children}
         </RecommendationContext.Provider>
     )}

    export {RecommendationProvider, RecommendationContext}

   
     