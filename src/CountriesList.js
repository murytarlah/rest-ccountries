import Country from "./Country";

const CountriesList = ({ countries }) => {
    return (
        <div className="countries">
            {countries.map((country,i) => (
                <Country key={i} country={country} />
            ))}
        </div>
    );
}

export default CountriesList;

