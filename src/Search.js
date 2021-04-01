import {useHistory} from "react-router-dom"
import "./styles.css"
import React, {useState, useContext, useEffect} from "react"
import {RecommendationContext} from "./RecommendationContext.js"

export default function Search(){
    const history = useHistory()
    const {getData, alllipsticksData} = useContext(RecommendationContext)
    console.log("In Search Component, is alllipstick data defined?", alllipsticksData)
    const [choice, setChoice] = useState('')
    const [clicked, setClicked] = useState(false)
    //how to set state of eyeliner category and link it to lipstick
        useEffect(() => {
            if(clicked){
                console.log(choice)
                getData(choice)
                setClicked(false)
            }

        }, [clicked])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {value} = e.target
        // getData()
        setClicked(true)
         console.log("Submitting...")
         setTimeout(() => {
             history.push({pathname:"/Recommendation",  choice})
         }, 2000)
    }

    const handleChange=(e)=>{
        e.preventDefault()
        const {value, name} = e.target
        setChoice( value)
    }
    

    return(
        <div id="search">
            <form id="form" onSubmit= {handleSubmit}>
                 
        <label>
                Which Category of LipServices Are You Interested In?
                    <select onChange={handleChange}> 
                        <option onChange={handleChange} >Make Selection</option>                                               
                        <option value="product_type=lipstick" name="lipstick" onChange={handleChange} >Lipsticks</option>
                        <option value="product_type=blush" name="blush" onChange={handleChange}>Blush</option>
                        <option value="product_type=bronzer" name="bronzer" onChange={handleChange} >Bronzer</option>
                        <option value="product_type=eyebrow" name="eyebrow" onChange={handleChange}>Eyebrow</option>
                        <option value="product_type=eyeshadow" name="eyeshadow" onChange={handleChange}>Eyeshadow</option>
                        <option value="product_type=mascara" name="mascara" onChange={handleChange}>Mascara</option>
                    </select>
        </label>
                <button>Submit</button>
           </form>
        </div>
        
    )
}

