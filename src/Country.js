import  { Link } from "react-router-dom";
const Country = ({country}) => {
    return ( 
        <div className="country">
            <div className="country">
                {console.log(country,country.alpha3Code)}
                <Link to={`/${country.alpha3Code}`}> 
                    <div className="country-img">
                        <img src={country.flag} alt={`Flag  of ${country.name}`} /> 
                    </div>
                </Link>
                <div className="country-body">    
                    <div className="country-title">
                        <h1>{country.name}</h1>
                    </div>
                    <div className="country-info">
                        <p><span>Population:</span> {country.population}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Country;