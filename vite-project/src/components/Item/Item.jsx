import { Link } from "react-router-dom"
import {Btn} from "../Boton/Btn"
import style from "../Item/Item.module.css"


export const Item = ({id, name, price, pictureUrl}) => {


    return(
        <>
            <div className={style.itemStyle}>
                <img className={style.imgStyle} src={pictureUrl} alt="imagen producto"></img>
                <h3 className={style.textNameStyle}>{name}</h3>
                <div className={style.divStyle}>
                    <h4 className={style.textPriceStyle}>$ {price}</h4>
                    <Link className={style.linkStyle} to={`/item/${id}`}>
                        <Btn variant="btnDetalles" text="detalles"/>
                    </Link>
                </div>
            </div>
        </>

    )
}