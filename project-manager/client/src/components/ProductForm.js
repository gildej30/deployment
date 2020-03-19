import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input 
                    type="text" 
                    name="title" value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
                <label>Price: </label>
                <input 
                    type="text" 
                    name="price"  value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div>
                <label>Description: </label>
                <input 
                    type="text" 
                    name="description" value={description} 
                    onChange={(e) => { setDescription(e.target.value)}} />
            </div>
            <input type="submit" value="submit" />
        </form>
    );
}