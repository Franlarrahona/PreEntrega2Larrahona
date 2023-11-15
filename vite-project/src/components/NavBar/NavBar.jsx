import { Btn } from "../boton/Btn"
import { CartWidget } from "../CartWidget/CartWidget"
import Style from "./NavBar.module.css"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return(
        <>
        <div className={Style.navBar}>
            <Link to={"/"} className={Style.linkStyle}>
            <h1 className={Style.h1}> React Sneakers</h1>
            </Link>
            <div className={Style.btnbar}>
                <CartWidget />
                <p>0</p>
                <Link to={"/"}>
                <Btn variant="btnNav" text="inicio" />
                </Link>
                <Link to={'/category/nike'}>
                    <Btn variant="btnNav" text="Nike" />
                </Link>
                <Link to={"/category/puma"}>
                <Btn variant="btnNav" text="Puma" />
                </Link>
                <Link to={"/category/adidas"}>
                <Btn variant="btnNav" text="Adidas" />
                </Link>
                <Link to={"/category/vans"}>
                <Btn variant="btnNav" text="Vans" />
                </Link>
                <Btn variant="btnNav" text="contacto" />
            </div>
            
        </div>
        </>
        
    )
}