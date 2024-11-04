import { useEffect, useState } from "react";
import "./UserList.css";
import User from "../Card/User/User";

export default function Userlist({ }) {
    const [listUser, setListUser] = useState([]);
    const [page, setPage] = useState(0);

    const getUsers = async (page) => {
        let result = await fetch(`http://localhost:3000/user/${page}`, {
            method: "POST"
        });
        let data = await result.json();
        setListUser([...listUser, ...data.data]);
    }

    const nextPage = () => {
        getUsers(page + 1);
        setPage(page + 1);
    }

    const handleScroll = (e) => {
        if(e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight -1 ){
            nextPage();
        }
    }
    useEffect(() => {
        nextPage();
    },[])
    

    return (
        <div onScroll={handleScroll} className="user-list">
            {listUser.map(user => <User user={user} />)}
        </div>
    )
}