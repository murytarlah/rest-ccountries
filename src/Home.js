import CountriesList from './CountriesList'
import CountryFilter from './CountryFilter';
import { useState,useEffect } from 'react';
import CountrySearch from './CountrySearch';


const Home = ({countries}) => {

    const [countriesFiltered, setCountriesFiltered] = useState(countries);
    const [continent, setContinent] = useState("all");
    const [country, setCountry] = useState('');

    const handleCountrySearch = (event) =>{
        setCountry(event.target.value)
    }
    const handleContinentChange = (event) =>{
        setContinent(event.target.value)
    }

    const searchFilter = (searchcountry) =>{
        return countries.filter( country => country.name.includes(searchcountry))
    }
    const filtered = (continent) => {
        return countries.filter(country => country.region === continent)
    }
    useEffect(() => {
        if (continent !== "all"){
            setCountriesFiltered(filtered(continent))
        }
        if (country.length > 1){
            setCountriesFiltered(searchFilter(country))
        }
    },[continent,country]);
    
    return ( 
        <div>
            <div className="main-top">
                <CountrySearch country={country} onCountrySearch={handleCountrySearch}/>
                <CountryFilter continent={continent} onContinentChange={handleContinentChange}/>
            </div>
            <CountriesList countries={countriesFiltered}/>
        </div>
     );
}
 
export default Home;