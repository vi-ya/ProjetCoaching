import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../auth/auth";
import { NavLink } from 'react-router-dom';


const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API}/users`, { headers: auth() })
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
    }, [])

    return (

        <main>
            <section>
                    <table className='t_admin_u' >
                        <caption>Utilisateurs</caption>
                        <thead >
                            <tr>
                            <th scope="col">Login</th>
                            <th scope="col" >Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((oneUser, i) => (
                                <tr key={i}>
                                    <td><strong>{oneUser.login}</strong></td>
                                    <td>{oneUser.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <NavLink className="btn_c" to={"/dashboard"}>
                    <button>Revenir en arrière</button>
                </NavLink>
            </section>
        </main>
    );
};

export default AllUser;