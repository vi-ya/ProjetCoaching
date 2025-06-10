import { NavLink, useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const navigate = useNavigate()

    // back to previous page (-1)
    const handleClick = () => {
        navigate(-1)
    }

    return (

        <main className="container">
            <section className="not_found_p ">
                <h2>ERREUR '404</h2>
                <h3>Page introuvable</h3>
                <article className="not_found_container">
                    <p className="not_found_path not_found_xywh-path">.</p>
                </article>
                <NavLink to={"/"}><button>Revenir à la page d'accueil</button></NavLink>
                <button onClick={handleClick}>Page précédente</button>
            </section>
        </main>
    );
};

export default PageNotFound;