import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartButton({showCart}){
    let canShowCart = true;

    return(
        <>
             <FontAwesomeIcon icon={faCartShopping} size="lg" onClick={()=>showCart(canShowCart)}/>
        </>
    )
}