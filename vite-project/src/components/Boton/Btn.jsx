import style from "../Boton/Btn.module.css"

export const Btn = ({text="btn", functionClick, variant }) => {
    const estilo = style[variant]
    return(
        <button className={estilo} onClick={functionClick}>{text}</button>
    )
}