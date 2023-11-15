import { useState } from "react"
import { Btn } from "../boton/Btn"
import style from "../ItemCount/ItemCount.module.css"

export const ItemCount = ({variant, stock, onAdd, initial =1}) =>{
    const estilo = style[variant]

    const [count,setCount] = useState(initial);
    
    const increment = () => {
        if(count < stock){
            return setCount(count + 1);
        }else{
            setCount(count);
        };
    }

    const decrement = () => {
        if(count == 0 ){
            setCount(0);
        }else{
        setCount (count -1); }
        }
        
    return(
        <>
        <div className={estilo}>
            <Btn variant="btnCountItemDetail" text="+" functionClick={increment}/> 
            <p className={style.p}>{count}</p>
            <Btn variant="btnCountItemDetail" text="-" functionClick={decrement}/>
            <Btn variant="btnCountItemDetail" text="Agregar al carrito" />
        </div>
        </>
    )
}