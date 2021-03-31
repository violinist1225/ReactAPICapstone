import React from "react"


export default function Selection(props){
    const{title, key, name, price, brand ,image} = props 

    return(
        <div>
                <h1 className='title-one'>{title}</h1>
                <h3>{name}</h3>
                <h3>{brand}</h3>
                <h2>{price}</h2>
                    {image}



            
        </div>

    )
}