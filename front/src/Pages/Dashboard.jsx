import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

    return (
        <main>
            <section className='nav_board'>
                <nav>
                    <NavLink to={"/admin"} className="active">Services</NavLink>
                    <NavLink to={"/users"} >Utilisateurs</NavLink>
                </nav>
            </section>
        </main>
    );
};

export default Dashboard;