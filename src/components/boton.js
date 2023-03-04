

import React from "react"


function boton(texto, color){

    return(
        
            <button style={{
                    "backgroundColor": color,
                    "width": "900px",
                    "height": "30px",
                    "border-radius": "12px",
                    "margin": "5px"
                  
            }} className = "boton">{texto}</button>
    )
}


export default boton;