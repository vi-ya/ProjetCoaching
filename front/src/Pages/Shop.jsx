import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../auth/auth';

const Shop = () => {

    const [shop, setShop] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"))
    const [message, setMessage] = useState("");
    const [confirmationRequested, setConfirmationRequested] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const stockage = JSON.parse(localStorage.getItem("shop")) || [];
        setShop(stockage)

    }, [])

    const handleDelete = (index) => {

        // Copy
        const updatedShop = [...shop];

        // Delete index
        updatedShop.splice(index, 1);

        // Update local status 
        setShop(updatedShop);

        // Update localStorage 
        localStorage.setItem("shop", JSON.stringify(updatedShop));

        // Notify Cart Change
        // const shopChangeEvent = new Event("shopChange");
        // window.dispatchEvent(shopChangeEvent);
    }

    const approveShop = () => {

        // let approvalCommand = window.confirm("Voulez-vous confirmer votre commande?")

        // if (!approvalCommand) {
        //     return null
        // }


        if (!confirmationRequested) {
            setMessage("Cliquez à nouveau pour confirmer votre commande.");
            setConfirmationRequested(true);
            return;
        }


        let shop = JSON.parse(localStorage.getItem("shop")) || []
        console.log(localStorage)

        const order = {
            user: user.id,
            articles: shop

        }

        axios.post(`${process.env.REACT_APP_API}/new_command`, order, { headers: auth() })
            .then((res) => {
                setMessage(res.data.message || "Commande bien enregistrée")
                setConfirmationRequested(false);
                localStorage.removeItem("shop");
                setShop([]);
            })



    }

    const handleReturnHome = () => {
        navigate("/");
    }

    return (

        <main className="container" >
            <section className='shopping' >
                <h2>Panier</h2>
                {Array.isArray(shop) && shop.length > 0 ? (
                    <table className="shop">
                        <thead>
                            <tr>
                                <th id="produit" scope="col">Produit</th>
                                <th id="supprimer" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {shop.map((s, i) =>
                                <tr key={i}>
                                    <td className='shop_info'>
                                        <small ><strong>{s.title}</strong></small>
                                        <small><span>Réf :</span> {s.ref}</small>
                                        <small><span>Mode :</span> {s.choice}</small>
                                        <small><span>Thématique :</span> {s.subjects}</small>
                                        <small><span>Lieu :</span> {s.locations}</small>
                                        <small ><strong >Prix :</strong> {s.price.toFixed(2)}€</small>
                                    </td>
                                    <td><NavLink title='Eliminer le coaching du panier' name={i} onClick={() => handleDelete(i)}><i className='fa-solid fa-xmark' /></NavLink></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                ) : (
                    <p>Votre panier est vide.</p>  // Message if basket empty
                )}
                {user && shop.length > 0 && (
                    <section className="coachings_list">
                        <div onClick={approveShop}>
                            <button>Valider mon panier</button>
                        </div>
                    </section>
                )}
                {message && (
                    <>
                        <p className={message.includes("erreur") ? "message-error" : "message-success"}>{message}</p>
                        {message && message.toLowerCase().includes("enregistrée") && (
                            <div className='btn_shop'>
                            <button onClick={handleReturnHome}>Revenir à l'accueil</button>
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
};

export default Shop;