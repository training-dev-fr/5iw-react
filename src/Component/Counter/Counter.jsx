
import { decrement, increment } from "../../store/reducers";
import "./Counter.css";
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    const count = useSelector(state => state.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="count">
                {count}
                <button onClick={() => dispatch(increment())}>Incrémenter</button>
                <button onClick={() => dispatch(decrement())}>Décrémenter</button>
            </div>
        </div>
    )
}