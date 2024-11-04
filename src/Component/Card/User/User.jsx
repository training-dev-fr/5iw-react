import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./User.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function User({ element }) {
    return (
        <div className="card-user">
            <div className="content">
                <FontAwesomeIcon icon={faUser} className="icon"/>
                {element.firstName} {element.lastName}
            </div>
        </div>
    )
}