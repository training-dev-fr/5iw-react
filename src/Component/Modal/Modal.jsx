import { forwardRef, useState } from "react";
import "./Modal.css";

const Modal = ({data,open,remove,cancel}) => {
    return (
        <div className={`modal ${open ? "open" : ""}`}>
            <div className="modal-content">
                Êtes vous sûr de vouloir supprimer le {data.type} {data.element.id}
                <div className="actions">
                    <button className="delete" onClick={remove}>Oui</button>
                    <button className="cancel" onClick={cancel}>Non</button>
                </div>
            </div>

        </div>
    )
};

export default Modal;