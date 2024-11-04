import { Suspense, lazy, useEffect, useRef, useState } from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal.jsx";

export default function List({ type }) {
    const typeCard = type.substring(0, 1).toUpperCase() + type.substring(1);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    let Card = lazy(() => import(`./../Card/${typeCard}/${typeCard}.jsx`));
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ element: { id: null }, type: type });

    const getData = async (page) => {
        let result = await fetch(`http://localhost:3000/${type}/${page}`, {
            method: "POST"
        });
        let data = await result.json();
        setList([...list, ...data.data]);
    }

    const nextPage = () => {
        getData(page + 1);
        setPage(page + 1);
    }

    const handleScroll = (e) => {
        if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight - 1) {
            nextPage();
        }
    }
    useEffect(() => {
        nextPage();
    }, []);

    const modalDelete = (element) => {
        setData({ type: data.type, element: element });
        setOpen(true);
    }

    const remove = () => {
        fetch(`http://localhost:3000/${type}/${data.element.id}`, {
            method: "DELETE"
        })
        setOpen(false);
    }

    const cancel = () => {
        setOpen(false);
    }

    return (
        <>
            <Suspense>
                <div onScroll={handleScroll} className="list">
                    {list.map(element =>
                        <Card element={element}>
                            <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => modalDelete(element)} />
                        </Card>
                    )}
                </div>
            </Suspense>
            <Modal remove={remove} cancel={cancel} open={open} data={data} />
        </>

    )
}