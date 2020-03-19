import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";

const Details = ({id}) => {

    const [author, setAuthor] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res=> setAuthor(res.data) )
            .catch(err => console.log(err))
    }, [id])

    // useEffect (() => {
    //     axios.get(`http://localhost:8000/api/authors`)
    //         .then(res=> setAuthors(res.data.sort((author1, author2) => author1.name > author2.name ? 1 : -1 )) )
    //         .catch(err => console.log(err))
    // }, [])

    const destroyAuthor = () => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => navigate('/'))
    }

    return (
        <div>
            <Link to="/" >Home</Link>
            <div className="card">
                
                <h2>{author.name}</h2>

                <button className="btn btn-danger col-5 mx-auto" onClick={() => destroyAuthor()}>Destory {author.name}</button>

                <div>
                    <h4>Books:</h4>
                        <ol>
                            <li>{author.bookOne}</li>
                            <li>{author.bookTwo}</li>
                            <li>{author.bookThree}</li>
                        </ol>
                </div>
            </div>
        </div>
    )
}

export default Details;