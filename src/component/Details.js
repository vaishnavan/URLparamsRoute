import React from 'react'
import {Link, useParams} from 'react-router-dom';

function Details(props) {
    
    let id = useParams().title;
    console.log(id)
    let index = props.pets.findIndex(pet => pet.title === id);
    let pet = props.pets[index];
    return (
        <div>
            <h1>Details</h1>
            <Link to="/">back to home</Link>
            <h1>my bolgid is {pet.id}</h1>
            <h2>blog posted by userid: {pet.userId}</h2>
            <h3>{pet.title}</h3>
            <h3>{pet.body}</h3>
        </div>
    )
}

export default Details
