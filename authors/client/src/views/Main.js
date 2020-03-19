import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res=> setAuthors(res.data.sort((a, b) => a.name > b.name ? 1 : -1 )))
            .catch(err => console.log(err))
    }, [])

    const destroyAuthor = (e, id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthors(
                authors.filter(author => author._id !== id)
            )
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/author/new">Add an Author</Link>
            <table className="table table-ordered col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                        <th>Like</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author,idx) => {
                        return <tr key={idx} >
                                    <td>
                                        {author.name}
                                    </td>

                                    <td>
                                        <Link className="btn btn-warning" to={`/author/${author._id}/edit`} >Edit</Link>
                                        <Link className="btn btn-success" to={`/author/${author._id}`} >Details</Link>
                                        <Link className="btn btn-danger" to={`/author/${author._id}`} onClick={(e) => destroyAuthor(e,author._id)} >Delete</Link>
                                    </td>

                                    <td>
                                    <Link className="btn btn-primary" to={`/author/${author._id}/edit`} >Like</Link>
                                    </td>
                                </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Main;