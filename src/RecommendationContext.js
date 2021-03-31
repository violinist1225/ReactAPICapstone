import React from "react"
import axios from "axios"
import {useState} from "react"
const RecommendationContext = React.createContext()


function RecommendationProvider(props){
   
    const [allLipsticksData, setAllLipsticksData] = useState([])
    
    function getData(selection) {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?${selection}`)   
        .then(res => {
            setAllLipsticksData(res.data)
            return allLipsticksData
        })
    
        .catch(err => console.log(err))
        }

      console.log("Context alllipdata", allLipsticksData) //getting alllipstick data here
     return(
     <RecommendationContext.Provider value={{...allLipsticksData, getData}}>
         {props.children}
         </RecommendationContext.Provider>
     )}

    export {RecommendationProvider, RecommendationContext}

   
     