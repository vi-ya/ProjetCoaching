import React, { useEffect, useState } from 'react';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import Hero from '../Components/Hero';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/service`)
            .then((res) => {
                setServices(res.data)
            })
    }, [])

    return (

        <main>
            <ol className="nav_access_home">
                <li><a href="#Services">Services</a></li>
                <li><a href="#Expertise">Expertise</a></li>
                <li><a href="#Realisations">Réalisations</a></li>
                <li><a href="#Réserver une session">Réserver une session</a></li>
            </ol>
            <Hero></Hero>
            <section className=" services_options ">
            <div className='container'>
            <h2 className="focus title">Mode de fonctionnement</h2>
            <p className="focus">Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <article>
                    <figure>
                        <i className="fa-solid fa-person-chalkboard"></i>
                        <figcaption>Mode</figcaption>
                    </figure>
                    <ul>
                        <li>Individuel</li>
                        <li>Collectif</li>
                    </ul>
                </article>
                <article>
                    <figure>
                        <i className="fa-solid fa-handshake"></i>
                        <figcaption>Thématique</figcaption>
                    </figure>
                    <ul>
                        <li>Management</li>
                        <li>Vente</li>
                    </ul>
                </article>
                <article>
                    <figure>
                        <i className="fa-solid fa-house-laptop"></i>
                        <figcaption>Lieu</figcaption>
                    </figure>
                    <ul>
                        <li>À distance</li>
                        <li>En présentiel</li>
                    </ul>
                </article>
                <article>
                    <figure>
                        <i className="fa-solid fa-people-group"></i>
                        <figcaption>Public</figcaption>
                    </figure>
                    <ul>
                        <li>Manager</li>
                        <li>Commercial</li>
                    </ul>
                </article>
                </div>
            </section>
            <section className='container' id='Services' >
                <h2 className=" title focus">Choisissez votre service</h2>
                <p  className="focus">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="services cards">
                    {services.map((oneService, i) => (
                        <article key={i}>
                            <img src={`${process.env.REACT_APP_API}/img/service/${oneService.image[0].src}`} alt={oneService.image.alt} />
                            <h3>{oneService.title}</h3>
                            <NavLink  to={"./coachings"}>
                                <button>En savoir plus</button>
                            </NavLink>
                        </article>
                    ))}
                </div>
            </section>

            <section id='Expertise' className="expertise">
                <div className='container'>
                <h2 className="title">Notre expertise vous change</h2>
                <article>
                    <h3>Quelques mots sur notre société</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, voluptatem ipsam totam aperiam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia iure magnam harum minus sequi. Porro earum repellat odio sit, beatae a reprehenderit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia iure magnam harum minus sequi.</p>
                   <button>En savoir plus</button> 
                </article>
                <article>
                    <img src= {process.env.PUBLIC_URL + "img/people/group.png"} alt="Coaching à la carte" />
                </article></div>
            </section>
            <section id='Realisations' className="scroller_client">
            <div className='container'>
                <h2 className="title">Ils nous font confiance</h2>
                <ul className='scroller_auto'>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client1.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client2.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client3.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client4.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client5.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client6.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client7.svg"} alt="logo entreprise" /></li>
                    <li><img src={process.env.PUBLIC_URL + "/img/clients/client8.svg"} alt="logo entreprise" /></li>
                </ul>
                </div>
            </section>
            <section id='Réserver une session' className="consulting">
            <div className='container'>
                <article>
                    <h2 className="title">Rejoignez-nous</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure perspiciatis dolor quisquam laborum, inventore aliquid unde voluptate eos accusamus officiis beatae doloremque fuga eligendi dignissimos deserunt ullam eius ratione consequuntur</p>
                    <button>En savoir plus</button>
                </article>
                <article>
                    <img className="img_consulting" src={process.env.PUBLIC_URL + "/img/people/woman.png"} alt="Coaching à la carte" />
                </article>
                </div>
            </section>
        </main>
    );
};

export default Home;