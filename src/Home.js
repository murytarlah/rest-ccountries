import CountriesList from './CountriesList'
import CountryFilter from './CountryFilter';
import { useState,useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import CountrySearch from './CountrySearch';


const Home = ({loadhandler}) => {


    const [countries, setCountries] = useState(null);
    const [IsLoaded, setIsLoaded] = useState(false);
    // const [CountryLink,setCountryLink] = useState(null)
    const [countriesFiltered, setCountriesFiltered] = useState(countries);

    // functions 
    useEffect(() => {
        setTimeout(() => {

            fetch('https://restcountries.com/v2/all')
            .then(res => {
                if (!res.ok) {
                throw Error('could not fetch countires data')
                }
                return res.json()
            })
            .then(data => {
                setCountries(data)
                setCountriesFiltered(data)
                setIsLoaded(true)
            }
            )
        }, 5000);
    }, []);

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
        else{
            setCountriesFiltered(countries)
        }
        if (country !== ''){
            setCountriesFiltered(searchFilter(country))
        }
    },[continent,country]);
    
    return ( 

        <div>
            <div className="main-top">
                <CountrySearch country={country} onCountrySearch={handleCountrySearch}/>
                <CountryFilter continent={continent} onContinentChange={handleContinentChange}/>
            </div>
            {
                IsLoaded ? <CountriesList countries={countriesFiltered}/>: <LoadingSkeleton/>
            }
        </div>
     );
}
 
export default Home;