import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from "../auth/auth";

const Command = () => {

    const [commands, setCommands] = useState([]);
    


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/commands_user`, { headers: auth() })
            .then((res) => {
                console.log(res.data); 
                setCommands(res.data)
                
            })
            .catch((err) => {
            console.error("Erreur API commandes :", err.response?.data || err.message);
        });
    }, [])


    return (
        <main className="container" >

            <section className="commands">
                <h2>Commandes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Commande</th>
                            <th>Prix total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commands.map((c, i) => (
                            <tr key={c._id}>
                                <td>{new Date(c.date).toLocaleString()}</td>
                                <td>
                                    {c.articles.map((art, i) =>
                                        <ul key={art._id}>
                                            <li><strong>Réf. </strong>{art.ref}</li>
                                            <li><strong>Titre : </strong>{art.title}</li>
                                            <li><strong>Option : </strong>{art.choice}</li>
                                            <li><strong>Lieu : </strong>{art.locations}</li>
                                            <li><strong>Thématique : </strong>{art.subjects}</li>
                                            <li><strong>Prix : </strong>{art.price.toFixed(2)}€</li>
                                        </ul>)}</td>
                                <td><strong>{c.total_price.toFixed(2)}€</strong></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </section>
        </main>
    );
};

export default Command;