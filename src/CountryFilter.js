const CountryFilter = ({continent, onContinentChange}) => {

    return ( 
        <section className="country-filter">
            <label htmlFor="filters">
                <select name="filters" value={continent} onChange={onContinentChange} id="filters">
                    <option value="all">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </label>
        </section>
     );
}
 
export default CountryFilter;
