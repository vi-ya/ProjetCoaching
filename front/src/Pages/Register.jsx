import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [login, setLogin] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {

        if (e.target.name === "login") {
            setLogin(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
        const emailRegex = /^[\w.-]+@[\w.-]+\.(com|fr|net|org|info|edu|gov)$/i;

        if (!checkPwd.test(password)) {
            setMessage("Le mot de passe ne respecte pas les conditions: 8 caractères, Majuscule, Minuscule et caractères spéciaux. ")
            setMessageType("error");
            return;
        }
        if (!emailRegex.test(email)) {
            setMessage("Veuillez entrer une adresse email valide se terminant par .com, .fr, .net, .org, .info, .edu ou .gov.");
            setMessageType("error");
            return;
        }



        const userForm = {
            login: login,
            email: email,
            password: password
        }

        axios.post(`${process.env.REACT_APP_API}/register`, userForm)
            .then((res) => {
                console.log(res.data)
                setMessage(res.data.message);
                if (res.data.message.includes("bien enregistré")) {
                    setMessageType("success");
                } else {
                    setMessageType("error");
                }
            })
    }

    return (

        <main className="container">
            <section className="form_r">
                <h2>Inscription</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <fieldset className='form_s'>
                        <section>
                            <label>Login</label>
                            <input type="text" placeholder="login" name="login" onChange={handleChange} required />
                            <label>Email</label>
                            <input type="email" placeholder="g@hotmail.com" name="email" onChange={handleChange} required />
                            <label>Mot de passe</label>
                            <input type="password" placeholder="aA12345.!" name="password" onChange={handleChange} required />
                        </section>
                        <section>
                            <button type="submit">Inscrivez-vous</button>
                            <NavLink to={"/connexion"}><p className="forgot-password">Vous avez déjà un compte ?</p></NavLink>
                            {message && (
                                <span className={messageType === "success" ? 'message-success' : 'message-error'}>
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

export default Register;

