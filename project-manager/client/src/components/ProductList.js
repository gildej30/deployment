import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {
    const [product, setProduct] = useState([]);
    
    useEffect (() => {
        axios.get(`http://localhost:8000/api/product`)
            .then( res => setProduct(res.data.results)); //might not need the RESULTS. *CHECK IF ERROR OCCURES*
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }
    
    return (
        <div>
            {product.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/${product._id}`}>
                            {product.title} ${product.price} - {product.description}
                        </Link>

                        <Link to={`/product/edit/${product._id}`}>
                            Edit
                        </Link>

                        <DeleteButton 
                            productId={product._id} 
                            successCallback={ () => removeFromDom(product._id) } />
                    </p>
                )
            })}
        </div>
    )
}

// const ProductList = props => {
//     return (
//         <div>
//             <h2>Product List: </h2>
//             {props.product.map((product, idx)=>{
//                 return <a key={idx} href={`/product/${product._id}`}> {product.title}<br/> </a>
//             })}
//         </div>
//     )
// }
