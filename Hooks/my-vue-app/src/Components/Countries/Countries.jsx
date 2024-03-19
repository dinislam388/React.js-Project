import { useEffect } from "react";
import { useState } from "react";
import "./Countries.css"


import React from 'react';
import Country from "../Country/Country";

const Countries = () => {
    const [Countries, setCountries] = useState([]);
    const url = "https://restcountries.com/v3.1/all"

    useEffect(() => {
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <>
        <h1>Countries: {Countries.length}</h1>
        <div className="counterMap">
            {Countries.map((country,index) => (
                <Country key={index} country = {country}/>
            ))}
        </div>
        </>
    );
};

export default Countries;
