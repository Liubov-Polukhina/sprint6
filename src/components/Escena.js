
import boton from "./boton"
import React from "react"
import imagenes from "./img/imagenes"
import { useState, useRef } from "react"
// export default function Texto() {
//   return <h1>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</h1>
// }

// const MyComponent = props => <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial
//     {props.param}, {props.param2}

//     <p>{props.children}</p>
// </div>
let posicion = 0
let color1=["f08080","white","white","white"]

const maxPos=imagenes.length
function Escena(){
    const fondo = useRef(imagenes[0].img)
    const [color, setColor] = useState(color1.map((x) => x));
    const adelante = () =>{
        color1[posicion]="white"
        posicion=posicion+1
        if (posicion>= maxPos){
            posicion = 0;
        }
        color1[posicion]="#f08080"
        fondo.current.style.backgroundImage=imagenes[posicion].img
        setColor(color1.map((x) => x))
    };
    const atras = () =>{
        color1[posicion]="white"
        posicion=posicion-1
        if (posicion<0){
            posicion = maxPos-1;
        }
        color1[posicion]="#f08080"
        fondo.current.style.backgroundImage=imagenes[posicion].img
        setColor(color1.map((x) => x))
    };

    return(
        <div className="div" ref={fondo}>

            <div className="b1">
            <button className = "boton1" onClick={()=>atras()}>Anterior</button>
            <button className = "boton1" onClick={()=>adelante()}>Seguent</button>
            </div>
            <div className="b2"> 
            {imagenes.map((element, index) => boton(element.title, color[index]))}
            </div>
           </div>
           
    )
}


export default Escena;