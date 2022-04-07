import Country from "./Country";

const CountriesList = ({ countries }) => {
    return (
        <main className="countries">
            {countries.map((country,i) => (
                <Country key={i} country={country} />
            ))}
        </main>
    );
}

export default CountriesList;

