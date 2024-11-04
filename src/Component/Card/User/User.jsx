import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./User.css";
import { faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

export default function User({ element,children }) {
    return (
        <div className="card-user">
            <div className="content">
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <span>{element.firstName} {element.lastName}</span>
                {children}
            </div>
        </div>
    )
}