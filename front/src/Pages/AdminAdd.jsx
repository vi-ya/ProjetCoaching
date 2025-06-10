import React, { useEffect, useState } from 'react';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import { auth } from '../auth/auth';

const AdminAdd = () => {

    const [ref, setRef] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [target, setTarget] = useState("")
    const [content, setContent] = useState("")
    const [benefit, setBenefit] = useState("")
    const [program, setProgram] = useState("")

    const [subjects, setSubjects] = useState([]);
    const [modes, setModes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [peoples, setPeoples] = useState([]);

    const [mode, setMode] = useState([])
    const [subject, setSubject] = useState([])
    const [location, setLocation] = useState([])
    const [people, setPeople] = useState([])

    const [option, setOption] = useState([])
    const [prices, setPrices] = useState([])
    const [choice, setChoice] = useState([])

    
    const handleChange = (e) => {

        // const { name, value, multiple, selectedOptions } = e.target;
        // const { name, value, type, selectedOptions } = e.target;
        // selectedOptions collection of selected options (for multiple selection lists only)
        // e.target properties
        const { name, value, type, selectedOptions, multiple } = e.target;

        const setters = {
            // each key corresponds to a name attribute of a form field.
            // Each value is a setState function from useState
            ref: setRef,
            title: setTitle,
            description: setDescription,
            target: setTarget,
            content: setContent,
            benefit: setBenefit,
            program: setProgram,
            subject: setSubject,
            mode: setMode,
            location: setLocation,
            people: setPeople,
            option: setOption,
            price: setPrices,
        };

        if (!setters[name]) return;
        // if (multiple) {
        //     const values = Array.from(selectedOptions).map(option => option.value);
        //     setters[name](values);
        // } else {
        //     setters[name](value);
        // }
        // if (e.target.multiple) {
        if (multiple && selectedOptions) {
            // to create a new Array instance and get the value (option.value) of each selected option
            const values = Array.from(selectedOptions).map(opt => opt.value);
            setters[name](values);

            if (name === "option") {
                setPrices(prevPrices =>
                    // selectedOptions.map((_, index) => prevPrices[index] || 0)
                    values.map((_, index) => prevPrices[index] || 0)
                );
            }

        } else if (type === "number") {
            setters[name](Number(value));
        } else {
            setters[name](value);

        }

    }

    const handlePriceChange = (index, value) => {
        const updatedPrices = [...prices];
        updatedPrices[index] = Number(value);
        setPrices(updatedPrices);
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        let addForm = {
            ref,
            title,
            description,
            target,
            content,
            benefit,
            program,
            mode,
            subject,
            location,
            people,
            option,
            price: prices,
        }

        axios.post(`${process.env.REACT_APP_API}/admin/add`, addForm, { headers: auth() })
            .then((res) => {
                console.log(res.data)

            }).catch(err => console.error("Erreur lors de l'envoi :", err));
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API}/admin/fields`, { headers: auth() })
            .then((res) => {
                setModes(res.data.mode || [])
                setLocations(res.data.location || [])
                setSubjects(res.data.subject || [])
                setPeoples(res.data.people || [])
                setChoice(res.data.choice || [])
                console.log(res.data)
            })
            .catch(err => console.error("Erreur lors du chargement des champs :", err));
    }, [])

    return (

        <main className='container'>
            <section className='admin_add'>
                <h2>Ajoutez un Service</h2>
                <h3>Pour sélectionner plusieurs options, veuillez utiliser <strong>Ctrl</strong> (Windows/Linux) ou <strong>Cmd</strong> (Mac)</h3>
                <form method="post" onSubmit={handleSubmit}>
                    <fieldset className='admin_add_desc'>
                        <legend>Description</legend>
                        <section className="field">
                            <label>Référence</label>
                            <input type="text" name="ref" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Titre</label>
                            <input type="text" name="title" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Description</label>
                            <textarea cols="30" rows="10" name="description" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Objectifs</label>
                            <textarea cols="30" rows="10" name="target" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Contenu</label>
                            <textarea cols="30" rows="10" name="content" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Avantages</label>
                            <textarea cols="30" rows="10" name="benefit" onChange={handleChange} />
                        </section>
                        <section className="field">
                            <label>Programme</label>
                            <textarea cols="30" rows="10" name="program" onChange={handleChange} />
                        </section>
                    </fieldset>
                    <fieldset className='admin_add_opt'>
                        <legend>Détails</legend>
                        <section className="field">
                            <label>Thématique</label>
                            <select name="subject" multiple value={subject} onChange={handleChange} size={7} >
                                {subjects.map((s, i) => (
                                    <option key={i} value={s} >{s}</option>
                                ))}
                            </select>
                        </section>
                        <section className="field">
                            <label>Public</label>
                            <select name="people" value={people} multiple onChange={handleChange} size={3} >
                                {peoples.map((p, i) => (
                                    <option key={i} value={p} >{p}</option>
                                ))}
                            </select>
                        </section>
                        <section className="field">
                            <label>Lieu</label>
                            <select name="location" value={location} multiple onChange={handleChange} size={3}>
                                {locations.map((l, i) => (
                                    <option key={i} value={l} >{l}</option>
                                ))}
                            </select>
                        </section>
                        <section className="field">
                            <label>Mode</label>
                            <select name="mode" value={mode} multiple onChange={handleChange} size={3}>
                                {modes.map((m, i) => (
                                    <option key={i} value={m} >{m}</option>
                                ))}
                            </select>
                        </section>
                    </fieldset>
                    <fieldset className='admin_add_price'>
                        <legend>Prix</legend>

                        <section className="field">
                            <label>Options</label>
                            <select name="option" multiple value={option} onChange={handleChange} size={4}>
                                {choice.map((opt, i) => (
                                    <option key={i} value={opt}> {opt}</option>
                                ))}
                            </select>
                        </section>

                        {option.map((opt, index) => (
                            <section className="field" key={opt}>
                                <label>Prix pour {opt}</label>
                                <input
                                    type="number"
                                    value={prices[index] || ""}
                                    onChange={(e) => handlePriceChange(index, e.target.value)}
                                />
                            </section>
                        ))}

                    </fieldset>
                    <section className='admin_add_btn'>
                        <div>
                            <button type="reset">Réinitialiser</button>
                            <button type="submit" name="Envoyer">Enregistrer</button>
                        </div>
                        <NavLink className="btn" to={"/admin"}>
                            Revenir en arrière
                        </NavLink>
                    </section>
                </form>
            </section>
        </main>
    );
}

export default AdminAdd;


