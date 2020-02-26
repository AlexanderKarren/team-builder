import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form-container">
            <div>
                <h2>Add Hacker</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="psuedoynm" />
                    </div>
                    <div>
                        <label htmlFor="specialty">Specialty</label>
                        <input type="text" id="specialty" name="specialty" />
                    </div>
                    <div>
                        <label htmlFor="date">Joined</label>
                        <input type="date" id="date" name="joined" />
                    </div>
                    <div><button type="submit">Add</button></div>
                </form>
            </div>
        </div>
    )
}

export default Form;