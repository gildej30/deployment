import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const ProductDetails = ({id}) => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => 
                setProduct(
                res.data.results
            ))
    }, [id])

const destroyProduct = (e) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res=> {
            navigate("/");
        })
}

    return(
        <div>
            <h1>{product.title}</h1>
            <h3>Price : ${product.price}</h3>
            <h5>Description:</h5>
            <p>{product.description}</p>
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
            <button onClick={(e) => destroyProduct(e)}>Delete</button>
        </div>
    )
}

export default ProductDetails;