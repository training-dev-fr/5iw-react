import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";
import { faDollar, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Product({ element, children }) {
    return (
        <div className="card-product">
            <div className="content">
                <FontAwesomeIcon icon={faDollar} className="icon"/>
                <span>{element.name}</span>
                <span>{element.price}$</span>
                {children}
            </div>
        </div>
    )
}