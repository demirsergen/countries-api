import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import  '../index.css';

const Countries = () => {

    const url = 'https://restcountries.eu/rest/v2/all';

    const [countries, setCountries] = useState([]);

    const fetchCountryData = async () => {
            const response = await fetch(url);
            const countries = await response.json()
            setCountries(countries);
        };

    useEffect(() => {
        fetchCountryData();
    }, []);
        return (
        <>
        <section className="grid">
                    {countries.map(country => {
                    const { numericCode, name, population, region, capital, flag} = country;
                    
            return (
            <div className="gridElement">
                <article id= {numericCode}>
                    <div>
                        <img src={flag} alt={name}/>
                        <h3>{name}</h3>
                        <h4>Population: <span>{population}</span></h4>
                        <h4>Region: <span>{region}</span></h4>
                        <h4>Capital: <span>{capital}</span></h4>
                        <Link to={`/countries/${name}`} className="btn-primary">Learn More</Link>
                    </div>
                </article>
            </div>
            )
            })}
            </section>
        </>
        ) 
}

export default Countries
