import { Suspense, lazy, useEffect, useState } from "react";
import "./List.css";

export default function List({ type }) {
    const typeCard = type.substring(0, 1).toUpperCase() + type.substring(1);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    let Card = lazy(() => import(`./../Card/${typeCard}/${typeCard}.jsx`))

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
    }, [])


    return (
        <Suspense>
            <div onScroll={handleScroll} className="list">
                {list.map(element => <Card element={element} />)}
            </div>
        </Suspense>
    )
}