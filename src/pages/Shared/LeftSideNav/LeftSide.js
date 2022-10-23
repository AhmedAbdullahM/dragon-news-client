import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1>All category: {categories.length} </h1>
            <div>
        {
            categories.map(category=><p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)
        }

            </div>
        </div>
    );
};

export default LeftSide;