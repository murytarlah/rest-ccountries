const CountryFilter = ({continent, onContinentChange}) => {

    return ( 
        <div className="country-filter">
            <select name="filters" value={continent} onChange={onContinentChange} id="filters">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
     );
}
 
export default CountryFilter;
