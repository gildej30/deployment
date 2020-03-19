
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from '../Components/AuthorForm';

const EditAuthor = ({id}) => {
    
    const initialState = {
        name:"",
        bookOne:"",
        bookTwo:"",
        bookThree:""
    }

    const [editAuthor, setEditAuthor] = useState({});
    const [errors, setErrors] = useState(initialState)

    useEffect (() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res=> setEditAuthor(res.data))
        .catch(err => console.log(err))
    }, [id])
    
    const handleChange = (e) => {
        setEditAuthor ({
            ...editAuthor,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, editAuthor)
            .then(res => navigate('/'))
            .catch(err => setErrors(err.response.data))
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Edit to Author</h2>
            <AuthorForm
                form={editAuthor}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue={` Edit ${editAuthor.name}` } />
        </div>
    )
}

export default EditAuthor;