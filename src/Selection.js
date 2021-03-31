import React from "react"


export default function Selection(props){
    console.log(props)
    const{title, key, name, price, brand ,image} = props 

    return(
        <div>
                <h1 className='title-one'>{title}</h1>
                <h3>{name}</h3>
                <h3>{brand}</h3>
                <h2>{price}</h2>
                <img src= {image} alt="Error" height="auto" width="25%"/>



            
        </div>

    )
}