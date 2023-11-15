import { Link } from "react-router-dom"
import { Btn } from "../Boton/Btn"
import { ItemCount } from "../ItemCount/ItemCount"
import style from "../ItemDetail/ItemDetail.module.css"

export const ItemDetail = ({name, description, price, pictureUrl, stock}) => {

    
    return(
        <div className={style.itemDetailStyle}>
            <img src={pictureUrl} alt="img zapatilla" />
            <div className={style.divStyle}>
                <div className={style.div2Style}>
                    <h3 className={style.nameStyle}>{name}</h3>
                    <Link className={style.linkStyle} to={"/"}>
                        <Btn text="x" variant="btnCerrar" />
                    </Link>
                </div>
                <h5 className={style.descriptionStyle}>{description}</h5>
                <div className={style.div3Style}>
                    <h4 className={style.priceStyle}>${price}</h4>
                    <ItemCount variant="countItemStyle" stock={stock}/>
                </div>
            </div>
        </div>
    )
}