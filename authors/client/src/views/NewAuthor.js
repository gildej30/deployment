import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import AuthorForm from "../Components/AuthorForm";
import axios from "axios";

const NewAuthor = (props) => {
    const initialState = {
        name:"",
        bookOne:"",
        bookTwo:"",
        bookThree:""
    }

    const [newAuthor, setNewAuthor] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChange = (e) => {
        setNewAuthor({
            ...newAuthor,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", newAuthor)
            .then(res => {
                navigate('/');
            })
            .catch(err => setErrors(err.response.data));
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <AuthorForm 
                form={newAuthor}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitValue="add author"
            />
        </div>
    )
}

export default NewAuthor;