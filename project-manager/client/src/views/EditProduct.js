import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default props => {

    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                setProduct(res.data.results);
                setLoaded(true);
        })
    },[id])
    
    const editProduct = product => {
        axios.put(`http://localhost:8000/api/product/${id}`, product)
        .then(res =>console.log(res));
        
    }
                    
    return (
        <div>
            <h2>Edit Product: </h2>
                {loaded && (
                    <>
                        <ProductForm 
                            onSubmitProp={editProduct}
                            initialTitle={product.title}
                            initialPrice={product.price}
                            initialDescription={product.description}
                        />

                        <DeleteButton 
                            productId={product._id} 
                            successCallback={() => navigate('/')} 
                        />
                    </>
                )}
        </div>
    );
}
