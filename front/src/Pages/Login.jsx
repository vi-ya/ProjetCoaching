import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const isErrorMessage = (msg) => {
        const errorKeywords = ["erreur", "incorrect", "échec", "aucun", "invalide"];
        return errorKeywords.some(keyword => msg.toLowerCase().includes(keyword));
    };


    const handleChange = (e) => {

        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        let dataForm = {
            password: password,
            email: email
        }

        axios.post(`${process.env.REACT_APP_API}/login`, dataForm)
            .then((res) => {
                const { user, token, message } = res.data;

                console.log("Réponse backend :", res.data)
                // setMessage(res.data.message)
                setMessage(message || `Bienvenue ${user.login} !|| "utilisateur" `);

                if (user && token) {
                    // res.data contains : { user: { login, role }, 
                    localStorage.setItem("user", JSON.stringify(res.data));
                    window.dispatchEvent(new Event("authChange"));
                    setTimeout(() => navigate("/"), 2000);
                } else {
                    setMessage(message || "Échec de connexion.");
                }
            })
            .catch(() => {
                setMessage("Erreur de connexion. Vérifiez vos identifiants.");
            });

    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("authChange"));
        localStorage.removeItem("shop");
        setMessage("Déconnecté avec succès.");
        setEmail("");
        setPassword("");
        setTimeout(() => {
            navigate("/");
        }, 5000);

    };


    return (

        <main className="container">
            <section className="form_c">
                <h2>Connexion</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <fieldset className='form_s'>
                        <section>
                            <label>Email</label>
                            <input type="email" placeholder="g@hotmail.com" name="email" onChange={handleChange} required />
                            <label>Mot de passe</label>
                            <input type="password" placeholder="aA12345.!" name="password" onChange={handleChange} required />
                        </section>
                        <section>
                            {/* <NavLink to={"/"}></NavLink> */}
                            <button type="submit" >Connectez-vous</button>

                            <button type="button" onClick={handleLogout}>Déconnexion</button>

                            <NavLink to={"/inscription"}><p>Créer un compte</p></NavLink>
                            {message && (
                                <span className={isErrorMessage(message) ? "message-error" : "message-success"}>
                                {message}
                                </span>
                            )}
                        </section>
                    </fieldset>
                </form>
            </section>
        </main>
    );
};

export default Login;