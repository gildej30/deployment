import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isSubmitted,setIsSubmitted]  = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                console.log(res.data.results);
                setProduct(res.data.results)
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err.res))
    }, [isSubmitted]) 

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post(`http://localhost:8000/api/product`, product)
            .then( res => {
                setIsSubmitted(!isSubmitted);
            })
    }

    return(
        <div className="App">
            <ProductForm
                onSubmitProp={createProduct} 
                initialTitle="" 
                initialPrice="" 
                initialDescription=""
            />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    );
}
