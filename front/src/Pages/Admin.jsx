import React, { useEffect, useState } from 'react';
import axios from "axios"
import { auth } from '../auth/auth';

const Admin = () => {

    const [coachings, setCoachings] = useState([])

    const handleDelete = (id) => {

        axios.delete(`${process.env.REACT_APP_API}/delete/${id}`, { headers: auth() })
            .then((res) => {
                console.log(res.data)
            })
    }

    const handleEdit = (id) => {

        axios.put(`${process.env.REACT_APP_API}/edit/${id}`, { headers: auth() })
            .then((res) => {
                console.log(res.data)
            })
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API}/admin`, { headers: auth() })
            .then((res) => {
                setCoachings(res.data)
                console.log("Admin page loaded");
            })

    }, [])

    return (

        <main className='container'>
            <section className='table_admin' >
                <a className="admin_back" href="/admin/add">
                    <button>Nouveau service</button>
                </a>
                <div className='t_admin_r'>
                    <table className='t_admin_1 ' >
                        <caption>Services offerts</caption>
                        <thead >
                            <tr>
                            <th scope="col">Réf</th>
                            <th scope="col" >Titre</th>
                            <th scope="col">Description</th>
                            <th scope="col" >Objectifs</th>
                            <th scope="col">Contenu</th>
                            <th scope="col" >Avantages</th>
                            <th scope="col">Programme</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coachings.map((oneCoaching, i) => (
                                <tr key={i}>
                                    <td><strong>{oneCoaching.ref}</strong></td>
                                    <td>{oneCoaching.title}</td>
                                    <td>{oneCoaching.description.substring(0, 30)}...</td>
                                    <td>{oneCoaching.target.substring(0, 30)}...</td>
                                    <td>{oneCoaching.content.substring(0, 30)}...</td>
                                    <td>{oneCoaching.benefit.substring(0, 30)}...</td>
                                    <td>{oneCoaching.program.substring(0, 30)}...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table></div>
                <div className='t_admin_r'>
                    <table className='t_admin_2'>
                        <thead >
                            <tr>
                            <th scope="col">Mode</th>
                            <th scope="col">Thématique</th>
                            <th scope="col">Lieu</th>
                            <th scope="col" >Public</th>
                            <th scope="col">Prix</th>
                            {/* <th scope="col">Modifier</th> */}
                            <th scope="col">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coachings.map((oneCoaching, i) => (
                                <tr key={i}>
                                    <td>
                                        {oneCoaching.modes.map((oneMode, i) =>
                                            <li key={i}>
                                                {oneMode.mode}
                                            </li>)}</td>
                                    <td>
                                        {oneCoaching.subjects.map((oneSubject, i) =>
                                            <li key={i}>
                                                {oneSubject.subject}
                                            </li>)}</td>
                                    <td>
                                        {oneCoaching.locations.map((oneLocation, i) =>
                                            <li key={i}>
                                                {oneLocation.location}
                                            </li>)}</td>
                                    <td>
                                        {oneCoaching.peoples.map((onePeople, i) =>
                                            <li key={i}>
                                                {onePeople.people}
                                            </li>)}</td>
                                    <td>
                                        {oneCoaching.choice.map((oneChoice, i) =>
                                            <li key={i}>
                                                {oneChoice.option} : {oneChoice.price}
                                            </li>)}
                                    </td>
                                    {/* <td>
                                        <button className="edit" onClick={() => handleEdit(oneCoaching._id)}> <i className="fa-solid fa-pen-to-square"></i></button>
                                    </td> */}
                                    <td>
                                        <button className="delete" onClick={() => handleDelete(oneCoaching._id)}> <i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section >
        </main >
    );
};

export default Admin;