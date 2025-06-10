import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Coachings = () => {

    const [services, setServices] = useState([])
    const [commercial, setCommercial] = useState([])
    const [management, setManagement] = useState([])
    const [option, setOption] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API}/service`)
            .then((res) => {
                setServices(res.data)
            })

        axios.get(`${process.env.REACT_APP_API}/coachings`)
            .then((res) => {
                console.log(res.data)
                let ref_1 = []
                let ref_2 = []
                let ref_3 = []

                for (const coaching of res.data) {

                    if (coaching.title.includes("Coaching en Ventes")) {
                        ref_1.push(coaching)
                    }
                    else if (coaching.title.includes("Coaching en Leadership")) {
                        ref_2.push(coaching)
                    }
                    else if (coaching.title.includes("Coaching à la carte")) {
                        ref_3.push(coaching)
                    }
                }
                setCommercial(ref_1)
                setManagement(ref_2)
                setOption(ref_3)
            })
    }, [])

    return (

        <main className="container">
            <section className='coaching' >
                <ol className="nav_access_services">
                    <li><a href="#Coaching en vente">Coaching en Ventes</a></li>
                    <li><a href="#Coaching en leadership">Coaching en Leadership</a></li>
                    <li><a href="#Divers coachings">Coaching à la Carte</a></li>
                </ol>
                { }
                {services.map((oneService, i) => (
                    <article  key={oneService._id}>
                        {oneService.title === "Coaching en Ventes" && (
                            <section className='coachings'>
                                {commercial.map((oneCoaching, i) => (
                                    <section key={oneCoaching._id}>
                                        <h2 id="Coaching en vente">{oneCoaching.title}</h2>
                                        <div className='back'>
                                            <p>Commencez votre parcours de coaching</p>
                                        </div>
                                        <div className='block'>
                                            <article className='details'>
                                                <section className='card'>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-person-chalkboard"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail' >
                                                        <h3>Mode</h3>
                                                        {oneCoaching.modes.map((oneMode, i) =>
                                                            <li key={oneMode._id || oneMode.mode}>
                                                                {oneMode.mode}
                                                            </li>)}</ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-handshake"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Thématique</h3>
                                                        {oneCoaching.subjects.map((oneSubject, i) =>
                                                            <li key={oneSubject._id || oneSubject.subject}>
                                                                {oneSubject.subject}
                                                            </li>)}</ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-house-laptop"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Lieu</h3>
                                                        {oneCoaching.locations.map((oneLocation, i) =>
                                                            <li key={oneLocation._id || oneLocation.location}>
                                                                {oneLocation.location}
                                                            </li>)}</ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-people-group"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Public</h3>
                                                        {oneCoaching.peoples.map((onePeople, i) =>
                                                            <li key={onePeople._id || onePeople.people}>
                                                                {onePeople.people}
                                                            </li>)}
                                                    </ul>
                                                </section>
                                            </article>
                                            <article>
                                                <section className='description'>
                                                    <h3>Description</h3>
                                                    <p>{oneCoaching.description}</p>
                                                    <h3>Objectif</h3>
                                                    <p>{oneCoaching.target}</p>
                                                    <h3>Contenu</h3>
                                                    <p>{oneCoaching.content}</p>
                                                    <h3>Avantages</h3>
                                                    <p>{oneCoaching.benefit}</p>
                                                    <h3>Programme</h3>
                                                    <p>{oneCoaching.program}</p>
                                                    <div>
                                                    <NavLink className="btn_service" to={`/coaching/${oneCoaching._id}`}>
                                                        <button>Commencez votre coaching</button>
                                                    </NavLink>
                                                    </div>
                                                </section>
                                            </article>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        )}
                        {oneService.title === "Coaching en Leadership" && (
                            <section className='coachings'>
                                {management.map((oneCoaching, i) => (
                                    <section key={oneCoaching._id}>
                                        <h2 id="Coaching en leadership">{oneCoaching.title}</h2>
                                        <div className='back'>
                                            <p>Commencez votre parcours de coaching en management </p>
                                        </div>
                                        <div className='block'>
                                            <article className='details'>
                                                <section className='card'>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-person-chalkboard"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Mode</h3>
                                                        {oneCoaching.modes.map((oneMode, i) =>
                                                            <li key={oneMode._id || oneMode.mode}>
                                                                {oneMode.mode}
                                                            </li>)}
                                                    </ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-handshake"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Thématique</h3>
                                                        {oneCoaching.subjects.map((oneSubject, i) =>
                                                            <li key={oneSubject._id || oneSubject.subject}>
                                                                {oneSubject.subject}
                                                            </li>)}
                                                    </ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-house-laptop"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Lieu</h3>
                                                        {oneCoaching.locations.map((oneLocation, i) =>
                                                            <li key={oneLocation._id || oneLocation.location}>
                                                                {oneLocation.location}
                                                            </li>)}
                                                    </ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-people-group"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Public</h3>
                                                        {oneCoaching.peoples.map((onePeople, i) =>
                                                            <li key={onePeople._id || onePeople.people}>
                                                                {onePeople.people}
                                                            </li>)}
                                                    </ul>
                                                </section>
                                            </article>
                                            <article>
                                                <section className='description'>
                                                    <h3>Description</h3>
                                                    <p>{oneCoaching.description}</p>
                                                    <h3>Objectif</h3>
                                                    <p>{oneCoaching.target}</p> <h3>Contenu</h3>
                                                    <p>{oneCoaching.content}</p>
                                                    <h3>Avantages</h3>
                                                    <p>{oneCoaching.benefit}</p>
                                                    <h3>Programme</h3>
                                                    <p>{oneCoaching.program}</p>
                                                    <div>
                                                    <NavLink className="btn" to={`/coaching/${oneCoaching._id}`}>
                                                        <button>Commencez votre coaching</button>
                                                    </NavLink>
                                                    </div>
                                                </section>
                                            </article>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        )}
                        {oneService.title === "Coaching à la carte" && (
                            <section className='coachings'>
                                {option.map((oneCoaching, i) => (
                                    <section key={oneCoaching._id}>
                                        <h2 id="Divers coachings">{oneCoaching.title}</h2>
                                        <div className='back'>
                                            <p>Concevez votre programme de coaching</p>
                                        </div>
                                        <div className='block'>
                                            <article className='details'>
                                                <section className='card'>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-person-chalkboard"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail' >
                                                        <h3>Mode</h3>
                                                        {oneCoaching.modes.map((oneMode, i) =>
                                                            <li key={oneMode._id || oneMode.mode}>
                                                                {oneMode.mode}
                                                            </li>)}
                                                    </ul>

                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-handshake"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Thématique</h3>
                                                        {oneCoaching.subjects.map((oneSubject, i) =>
                                                            <li key={oneSubject._id || oneSubject.subject}>
                                                                {oneSubject.subject}
                                                            </li>)}
                                                    </ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-house-laptop"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Lieu</h3>
                                                        {oneCoaching.locations.map((oneLocation, i) =>
                                                            <li key={oneLocation._id || oneLocation.location}>
                                                                {oneLocation.location}
                                                            </li>)}
                                                    </ul>
                                                    <ul className='icon'>
                                                        <li><i className="fa-solid fa-people-group"></i></li>
                                                    </ul>
                                                    <ul className='icon_detail'>
                                                        <h3>Public</h3>
                                                        {oneCoaching.peoples.map((onePeople, i) =>
                                                            <li key={onePeople._id || onePeople.people}>
                                                                {onePeople.people}
                                                            </li>)}
                                                    </ul>
                                                </section>
                                            </article>
                                            <article>
                                                <section className='description'>
                                                    <h3>Description</h3>
                                                    <p>{oneCoaching.description}</p>
                                                    <h3>Objectif</h3>
                                                    <p>{oneCoaching.target}</p>
                                                    <h3>Contenu</h3>
                                                    <p>{oneCoaching.content}</p>
                                                    <h3>Avantages</h3>
                                                    <p>{oneCoaching.benefit}</p>
                                                    <h3>Programme</h3>
                                                    <p>{oneCoaching.program}</p>
                                                    <div>
                                                    <NavLink className="btn" to={`/coaching/${oneCoaching._id}`}>
                                                        <button>Commencez votre coaching</button>
                                                    </NavLink>
                                                    </div>
                                                </section>
                                            </article>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        )}
                    </article>
                ))}
            </section>
        </main >
    );
};

export default Coachings;