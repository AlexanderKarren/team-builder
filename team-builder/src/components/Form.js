import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [hacker, updateHacker] = useState({
        psuedonym: "",
        specialty: "",
        joined: "",
    })

    const handleChange = event => {
        updateHacker({ ...hacker, [event.target.name]: event.target.value });
        console.log(hacker);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addHacker(hacker);
    }

    return (
        <div className="form-container">
            <div>
                <h2>Add Hacker</h2>
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
                    <div><button type="submit">Add</button></div>
                </form>
            </div>
        </div>
    )
}

export default Form;