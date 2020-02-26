import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = (props) => {
    const [mode, updateMode] = useState("Add");

    const [hacker, updateHacker] = useState({
        psuedonym: "",
        specialty: "",
        joined: "",
    })

    const handleChange = event => {
        updateHacker({ ...hacker, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (props.memberToEdit !== undefined) {
            props.editHacker(hacker);
        }
        else {
            props.addHacker(hacker);
        }
        clear();
    }

    const clear = () => {
        updateHacker({
            psuedonym: "",
            specialty: "",
            joined: "",
        })
        updateMode("Add");
        props.updateMemberToEdit(undefined);
    }

    useEffect(() => {
        if (props.memberToEdit !== undefined) {
            updateHacker(props.memberToEdit);
            updateMode("Edit");
        }
    }, [updateHacker, props.memberToEdit])

    return (
        <div className="form-container">
            <div>
                <h2>{mode} Hacker</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="psuedonym" onChange={handleChange} value={hacker.psuedonym}/>
                    </div>
                    <div>
                        <label htmlFor="specialty">Specialty</label>
                        <input type="text" id="specialty" name="specialty" onChange={handleChange} value={hacker.specialty}/>
                    </div>
                    <div>
                        <label htmlFor="date">Joined</label>
                        <input type="date" id="date" name="joined" onChange={handleChange} value={hacker.joined}/>
                    </div>
                    <div><button type="submit">{mode}</button></div>
                </form>
                <div><button onClick={clear}>Clear</button></div>
            </div>
        </div>
    )
}

export default Form;