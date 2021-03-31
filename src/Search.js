import {useHistory} from "react-router-dom"
import "./styles.css"
import React, {useState, useContext, useEffect} from "react"
import {RecommendationContext} from "./RecommendationContext.js"

export default function Search(){
    const history = useHistory()
    const {getData, allLipsticksData} = useContext(RecommendationContext)
    console.log("In Search Component, is alllipstick data defined?", allLipsticksData)
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
        getData(choice)
        setClicked(true)
         console.log("Submitting...")
         setTimeout(() => {
             history.push({pathname:"/Recommendation", state: allLipsticksData})
         }, 2000)
    }

    const handleChange=(e)=>{
        e.preventDefault()
        const {value, name} = e.target
        setChoice( value)
    }
    

    return(
        <div>
            <form onSubmit= {handleSubmit}>
                 
        <label>
                Which Category of LipServices Are You Interested In?
                    <select onChange={handleChange}> 
                        <option onChange={handleChange} >Make Selection</option>                                               
                        <option value="product_type=lipstick" name="lipstick" onChange={handleChange} >Lipsticks</option>
                        <option value="product_type=blush" name="blush" onChange={handleChange}>Blush</option>
                        <option value="product_type=bronzer" name="bronzer" onChange={handleChange} >Bronzer</option>
                        <option value="product_type=eyebrow" name="eyebrow" onChange={handleChange}>Eyebrow</option>
                    </select>
        </label>
                <button>Submit</button>
           </form>
        </div>
        
    )
}


// onChange={handleChange}







// const [choice, setChoice] = useState('Canadian')
//     const [allMakeupData, setAllMakeupData] = useState([])
//     let priceRangeinDollars = 10
//     let brandName = 
//     if(maxPrice === 10){
//         setChoice('price_greater_than=10.00')
//     }

//     React.useEffect(() => {
//        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?${choice}"
//        //http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=10.00
       
//        .then(res => setAllMakeUpData(makeup.data) )//get all the data and save in state of an array )
//        .catch(err => console.log(err))
//        )
       
       


// const handleChange=(e) =>{
    //     const {value, name, checked} = e.target
    // const { form } = state;
    // let MakeupObj = {};
    // if (name === "choice") {
    //   // handle the change event of makeup field
    //   if (checked) {
    //     // push selected value in list
    //     MakeupObj = { ...form };
    //     MakeupObj[name].push(value);
    //   } else {
    //     // remove unchecked value from the list
    //     formObj = {
    //       ...form,
    //       [name]: form[name].filter(x => x !== value)
    //     };
    //   }
    // } else {
    //   // handle change event except
    //   MakeupObj = {
    //     ...form,
    //     [name]: value
    //   };
    // }
    // this.setChoice({ form: MakeupObj });

    // }