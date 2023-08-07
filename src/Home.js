import CountriesList from './CountriesList'
import CountryFilter from './CountryFilter';
import { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import CountrySearch from './CountrySearch';


const Home = ({ loadhandler }) => {

    // states
    const [countries, setCountries] = useState(null);
    const [IsLoaded, setIsLoaded] = useState(false);
    const [countriesFiltered, setCountriesFiltered] = useState(countries);
    const [continent, setContinent] = useState("all");
    const [country, setCountry] = useState('');

    useEffect(() => {
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
    }, []);


    /**
     * handleCountrySearch: sets the country state to the search input
     * 
     * @param {Event} event 
     */
    const handleCountrySearch = (event) => {
        setCountry(event.target.value)
    }

    /**
     * handleContinentChange: sets the continent state to the selected continent
     * 
     * @param {Event} event 
     */
    const handleContinentChange = (event) => {
        setContinent(event.target.value)
    }



    /**
     * searchFilter: filters the countries based on the search input
     * 
     * @param {string} searchcountry 
     * @returns array of countries that match the search
     */
    const searchFilter = (searchcountry) => {
        return countries.filter(country => country.name.toLowerCase().startsWith(searchcountry.toLowerCase()))
    }

    /**
     * filtered: filters the countries based on the continent
     * 
     * @param {string} continent
     * @returns array of countries that match the continent
     */

    const filtered = (continent) => {
        return countries.filter(country => country.region === continent)
    }
    useEffect(() => {
        if (continent !== "all") {
            setCountriesFiltered(filtered(continent))
        }
        else {
            setCountriesFiltered(countries)
        }
        if (country !== '' && continent) {
            setCountriesFiltered(searchFilter(country))
        }
    }, [continent, country]);

    return (

        <div>
            <div className="main-top">
                <CountrySearch country={country} onCountrySearch={handleCountrySearch} />
                <CountryFilter continent={continent} onContinentChange={handleContinentChange} />
            </div>
            {
                IsLoaded ? <CountriesList countries={countriesFiltered} /> : <LoadingSkeleton />
            }
        </div>
    );
}

export default Home;