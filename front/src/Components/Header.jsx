import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    // Check admin status
    const checkAdmin = () => {

        const user = JSON.parse(localStorage.getItem("user"))
        console.log("User in header:", user);
        setIsAdmin(user?.user?.role === "Admin");

    };
    // useEffect(() => {
    // if (!user) {
    //     return;
    // }
    // if (user.role === "Admin") {
    //     setIsAdmin(true)
    // } else {
    //     setIsAdmin(false)
    // }

    // if (user?.role === "Admin") {
    //     setIsAdmin(true);
    // }
    // }, [])

    useEffect(() => {
        checkAdmin();
        // listening to custom events + storage (login/logout)
        window.addEventListener("authChange", checkAdmin);
        window.addEventListener("storage", checkAdmin);

        return () => {
             // cleaning to prevent memory leaks
            window.removeEventListener("authChange", checkAdmin);
            window.removeEventListener("storage", checkAdmin);
        };
    }, []);




    // Logout
    const handleClick = () => {
        localStorage.removeItem("user");
        setIsAdmin(false)
        // window.location.href = "/"; 
        window.dispatchEvent(new Event("authChange"));
        navigate("/");
    }

    return (
        <header >

            <section className="nav_logo">
                <NavLink to={"/"}>
                    <img src={process.env.PUBLIC_URL + "/img/logo/logo.svg"} alt="Logo de la entreprise" />
                </NavLink >
            </section>
            <nav className="nav_list ">
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="check_btn_on"><i className="fa-solid fa-bars"></i></label>
                <div className="nav_bar ">
                    <NavLink to={"/"} className="active">Home</NavLink>
                    <NavLink to={"./about"} >À propos</NavLink>
                    <NavLink to={"/coachings"} >Services</NavLink>
                    <NavLink to={"#"} >Réalisations</NavLink>
                    <NavLink to={"#"} >Réserver une session</NavLink>
                    {isAdmin && (
                        <>
                            <NavLink to={"/dashboard"} >Admin</NavLink>
                            <button onClick={handleClick} className="logout-button">Déconnexion</button>
                        </>
                    )}
                </div>
            </nav>
            <section >
                
                    <div className="nav_login">
                        <NavLink to={"/connexion"}>
                            <i className="fa-solid fa-user"></i>
                            <p>Login</p>
                        </NavLink >
                        <NavLink to={"/shop"}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p>Shop</p>
                        </NavLink >
                    </div>
              
            </section>
        </header>
    );
};

export default Header;



