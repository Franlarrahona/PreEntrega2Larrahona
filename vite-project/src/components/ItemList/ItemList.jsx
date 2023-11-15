import { Item } from "../Item/Item"
import style from "../ItemList/ItemList.module.css"


export const ItemList = ({ products }) => {

return (
    <>
        <div className={style.itemListStyle}>
            {products.map((product) => (
            <Item key={product.id} {...product} /> ))}
        </div>
    </>
    );
};