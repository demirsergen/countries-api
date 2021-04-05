import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const Country = () => {
    

    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json()
            setCountry(country);
        }

        fetchCountry();
    });
    return (
        <>
            <Link to="/" className="btn">Back Home</Link>
            <section className="country">
                {country.map(c => {
                    const {numbericCode, name, population, region, subregion, nativeName, flag, topLevelDomain, capital, currencies, languages,borders} = c;

                    return (
                        <article key={numbericCode}>
                            <div className="flag">
                                <img src={flag} alt=""/>
                            </div>

                            <div className="country-details">
                                <h2>{name}</h2>
                                <div className="country-flex">
                                    <div className="country-flex-left">
                                        <h5>Native Name: <span>{nativeName}</span></h5>
                                        <h5>Population: <span>{population}</span></h5>
                                        <h5>Region: <span>{region}</span></h5>
                                        <h5>Sub Region: <span>{subregion}</span></h5>
                                        <h5>Capital: <span>{capital}</span></h5>
                                    </div>
                                    <div className="country-flex-right">
                                        <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                                        <h5>Currecies: <span>{currencies[0].name}</span></h5>
                                        <h5>Languages: <span>{languages[0].name}</span></h5>
                                    </div>
                                </div>
                                
                                <div className="borders">
                                    <h3>Border Countries: </h3>
                                    {borders.map(b => {
                                        return (
                                            <ul key={b}>         
                                                <li>{b}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Country;