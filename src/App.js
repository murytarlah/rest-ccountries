import CountriesList from './CountriesList';
import './App.css';
import Header from './Header'
import { useState, useEffect } from 'react';


function App() {


  // states
  const [darktheme, setDarkTheme] = useState(false);
  const [countries, setCountries] = useState(null);
  const [IsLoaded, setIsLoaded] = useState(false);

  // functions 


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
        setIsLoaded(true)
      }
      )
  }, []);
  return (
    <div className={ darktheme ? "App dark":"App"}>
      <div className="content">
        <Header
          onThemeChange={() => setDarkTheme(!darktheme)}
          darkTheme={darktheme}
        />
        {/* <Header darktheme={darktheme} handleTheme={handleTheme} /> */}
        {IsLoaded && <CountriesList countries={countries} />}
      </div>
    </div>
  );
}

export default App;
