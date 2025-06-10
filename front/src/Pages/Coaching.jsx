import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import myVideo from '../assets/video/coaching.mp4';

const Coaching = () => {

    const [coaching, setCoaching] = useState("");
    const [locations, setLocations] = useState([]);
    const [choice, setChoice] = useState([]);
    const [price, setPrice] = useState(0);
    const [option, setOption] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();
    const [location, setLocation] = useState();
    const [article, setArticles] = useState([]);
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    let stockage = JSON.parse(localStorage.getItem("shop")) || [];

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API}/coaching/${id}`)
            .then((res) => {
                setCoaching(res.data)
                setChoice(res.data.choice)
                setPrice(res.data.choice[0].price)
                // setOption(res.data.choice[0])
                setOption(null)
                setLocations(res.data.locations)
                // setLocation(res.data.locations[0])
                setLocation(null)
                setSubjects(res.data.subjects)
                // setSubject(res.data.subjects[0].subject)
                setSubject(null)
                setMessage(res.data.message)
            })

    }, [id])

    const handleChange = (e) => {

        if (e.target.name === "choice") {
            setOption(choice[e.target.value]);
            setPrice(choice[e.target.value].price);
        } else if (e.target.name === "location") {
            setLocation(locations[e.target.value]);
        } else if (e.target.name === "subject") {
            setSubject(subjects[e.target.value])
        }
    }

    const handleClick = (e) => {

        if (!user) {
            setMessage("Veuillez vous connecter avant de sélectionner votre service")
            setTimeout(() => {
                navigate("/connexion");
            }, 5000);
            return
        }

        if (!subject || !location || !option) {
            setMessage("Veuillez sélectionner toutes les options avant d'ajouter au panier.");
            setMessageType("error");
            return;
        }

        let article = {
            ref: coaching.ref,
            title: coaching.title,
            price: price,
            choice: option.option,
            locations: location.location,
            subjects: subject.subject
        }

        const isDuplicate = stockage.some(a =>
            a.ref === article.ref &&
            a.choice === article.choice &&
            a.locations === article.locations &&
            a.subjects === article.subjects
        );

        if (isDuplicate) {
            setMessage("Cet article est déjà dans votre panier.");
            setMessageType("error");
            return;
        }


        const updatedShop = [...stockage, article ];
        localStorage.setItem("shop", JSON.stringify(updatedShop));
        setArticles(updatedShop);

        // const notifyEvent = new Event("cartNotify");
        // window.dispatchEvent(notifyEvent)

        setMessage("Article ajouté au panier avec succès !");
        setMessageType("success");
    }

    return (
        <main className='container'>
            <section className='coaching'>
                <article className='one_program'>
                    <h2>Personnalisez votre Programme de Coaching</h2>
                </article>
                <div className='program'>
                    <article>
                        <section className='one_title'>
                            <article>
                                <h2>{coaching.title}</h2>
                                <h4>Réf.  {coaching.ref}</h4>
                            </article>
                            <video className='video_coach' autoPlay loop muted >
                                <source src={myVideo} type='video/mp4' />
                            </video>
                        </section>
                    </article>
                    <article className='one_coaching'>
                        <section className='detail'>
                            <article>
                                <h4>Thématique</h4>
                                <select name="subject" onChange={handleChange}>
                                    <option value="">-Choisissez votre option-</option>
                                    {subjects.map((s, i) => (
                                        <option key={i} value={i}>{s.subject}</option>
                                    ))}
                                </select>
                            </article>
                            <article>
                                <h4>Lieu</h4>
                                <select name="location" onChange={handleChange} size="1" selected="selected">
                                    <option value="location">-Choisissez votre option-</option>
                                    {locations.map((l, i) => (
                                        <option key={i} value={i}>{l.location}</option>
                                    ))}
                                </select>
                            </article>
                            <article>
                                <h4>Mode</h4>
                                <select name="choice" onChange={handleChange} size="1" selected="selected">
                                    <option value="option">-Choisissez votre option-</option>
                                    {choice.map((c, i) => (
                                        <option key={i} value={i}>{c.option}</option>
                                    ))}
                                </select>
                            </article>
                        </section>
                        <section className='price'>
                            <h4>Prix</h4>
                            <strong><p className='box3'>{price}€ HT / Participant</p></strong>
                            <p>(hors frais logistiques)</p>
                        </section>

                        <button onClick={handleClick}>Ajouter au panier</button>
                        <NavLink className="btn_c" to={"/shop"}>
                            <button>Valider mon panier</button>
                        </NavLink>
                        <NavLink className="btn_c" to={"/coachings"}>
                            <button>Revenir en arrière</button>
                        </NavLink>
                        {message && (
                            <span className={messageType === "error" ? "message-error" : "message-success"}>{message}</span>
                        )}
                    </article></div>

            </section>
        </main>
    );
};

export default Coaching;