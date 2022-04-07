import './App.css';
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import Home from './Home'
import CountryDetails from './CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


	// states
	const [darktheme, setDarkTheme] = useState(false);
	// const [countries, setCountries] = useState(null);
	// // const [CountryLink,setCountryLink] = useState(null)

	// // functions 
	// useEffect(() => {
	//   fetch('https://restcountries.com/v2/all')
	//     .then(res => {
	//       if (!res.ok) {
	//         throw Error('could not fetch countires data')
	//       }
	//       return res.json()
	//     })
	//     .then(data => {
	//       setCountries(data)
	//       setIsLoaded(true)
	//     }
	//     )
	// }, []);
	return (
		<Router>
			<div className={darktheme ? "App dark" : "App"}>
				<div className="content">
					<Navbar
						onThemeChange={() => setDarkTheme(!darktheme)}
						darkTheme={darktheme}
					/>
					<Routes>
						<Route exact path='/' element={<Home />}>
						</Route>
						<Route exact path='/:name' element={<CountryDetails />}>
						</Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
