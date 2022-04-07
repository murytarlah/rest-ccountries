const CountrySearch = ({country, onCountrySearch}) => {
    return ( 
        <div className="country-searcher">
            <label htmlFor="countrysearch">
                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.25 9.25L12.25 12.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 10.25C8.12335 10.25 10.25 8.12335 10.25 5.5C10.25 2.87665 8.12335 0.75 5.5 0.75C2.87665 0.75 0.75 2.87665 0.75 5.5C0.75 8.12335 2.87665 10.25 5.5 10.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <input onKeyUp={onCountrySearch} type="text" name="countrysearch" placeholder="search by country" />
            </label>
        </div>
     );
}
 
export default CountrySearch;