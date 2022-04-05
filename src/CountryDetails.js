import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from 'react'

const CountryDetails = () => {

    const { name } = useParams()
    const [IsLoaded, setIsLoaded] = useState(false)
    const [country, setCountry] = useState(null)
    // name = country.nativeName.toLowerCase()
    console.log(name.toLowerCase())

    useEffect(() => {
        fetch('https://restcountries.com/v2/alpha/' + name.toLowerCase())
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch countires data')
                }
                return res.json()
            })
            .then(data => {
                setCountry(data)
                setIsLoaded(true)
            }
            )
    }, [name]);

    return (
        <div>

            {IsLoaded &&
                <div className="country-details">
                    <Link className="home" to='/'> 
                        <span>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5L17 5M1 5L5 1M1 5L5 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span><span>Back</span>
                    </Link>
                    <div className="country-flag">
                        <img src={country.flag} alt={`Flag of ${country.name}`} />
                    </div>
                    <div className="country-info">
                        <h1>{country.name}</h1>
                        <div className="infos">
                            <div>
                                <p className="name"><span>Native Name:</span> {country.nativeName}</p>
                                <p className="population"><span>Population:</span> {country.population}</p>
                                <p className="region"><span>Region:</span> {country.region}</p>
                                <p className="sub-region"><span>Sub Region:</span> {country.subregion}</p>
                                <p className="capital"><span>Capital:</span> {country.capital}</p>
                            </div>
                            <div>
                                <p className="domain"><span>Top Level Domain:</span> {country.topLevelDomain[0]}</p>
                                <p className="currency"><span>Currencies:</span> {country.name}</p>
                                <p className="languages"><span>Languages: </span>
                                    {
                                        country.languages.map((language)=> language.name + ' ' )
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="border-countries">
                            <span>Border Countries</span>
                            <div className="borders">
                                {
                                    country.borders.map((border,i) =>
                                        <Link to={`/${border}`} key={i}>
                                            <p> {border} </p>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default CountryDetails;