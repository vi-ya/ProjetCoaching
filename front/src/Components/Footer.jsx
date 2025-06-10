import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="footer_elements">
                <div className='container'>
                <article>
                    <h3>Nous contacter</h3>
                    <address>
                        <NavLink to={"tel:+330712345678"} ><i className="fa-solid fa-phone"></i>+33 7 61 23 45 67</NavLink>
                        <NavLink to={"mailto:info@gmail.com"} ><i className="fa-solid fa-envelope"></i>info@gmail.com</NavLink>
                        <NavLink to={"#"} ><i className="fa-solid fa-location-dot"></i>20 Boulevard Voltaire <br /> 75001 Paris</NavLink>
                    </address>
                </article>
                <article>
                    <h3>Découvrez notre concept</h3>
                    <ul>
                        <NavLink to={"/about"}>
                            <li>À propos de nous</li>
                        </NavLink>
                        <NavLink to={"/coachings"}>
                            <li>Services</li>
                        </NavLink>
                        <NavLink to={"/commands"}>
                            <li>Espace client</li>
                        </NavLink>
                    </ul>
                </article>
                <article>
                    <h3>Informations légales</h3>
                    <ul>
                        <li>Politique de confidentialité</li>
                        <li>Conditions générales de vente</li>
                        <li>FAQ</li>
                    </ul>
                </article>
                <article>
                    <h3>Newsletter</h3>
                    <ul>
                        <li>Recevez les dernières actualités</li>
                    </ul> 
                    <form className="input_email" action="" method="get" target="_blank">
                        <input type="email" name="EMAIL" placeholder="adresse e-mail" required  autoComplete="off"/>
                        <button>Abonnez-vous</button>
                    </form>
                    <small>Suivez-nous</small>
                    <section className="reseaux">
                        <NavLink to={"https://www.linkedin.com"} className="fa-brands fa-linkedin"></NavLink>
                        <NavLink to={"https://www.youtube.com"} className="fa-brands fa-youtube"></NavLink>
                        <NavLink to={"https://twitter.com"} className="fa-brands fa-square-twitter"></NavLink>
                        <NavLink to={"https://www.facebook.com"} className="fa-brands fa-square-facebook"></NavLink>
                    </section>
                </article>
                </div>
            </section>
            <small className="footer_coop">
                <p>@Copyright 2023. Entreprise tous les droits réservés.</p>
            </small>
        </footer>
    );
};

export default Footer;