import { useState, useEffect } from 'react'
//import React from "react";
//import { useParams } from "react-router-dom";
//import Results from './results';
function Form(props) { 
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
        

       
        props.disneysearch(formData.searchterm);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
            <br/>
            <p>Search for all <strong>Disney </strong><em>Characters' Movies</em> </p>
            <br/>

            <button><strong>Search Disney Characters Movies'</strong></button>
        </div>
    )
}
export default Form;