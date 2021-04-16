import Register from "../components/Admin/Register";
import Login from "../components/Admin/Login";
//redux
import {useSelector} from 'react-redux'


export default function Admin() {
    const userData = useSelector(state => state.userData.value)

    return (
        <div>
            <Login />
            {userData &&
                <h1>Hello world</h1>
            }
        </div>
    )
}