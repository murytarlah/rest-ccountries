import './App.css';
import Navbar from './Navbar'
import { useState } from 'react';
import Home from './Home'
import CountryDetails from './CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

	// states
	const [darktheme, setDarkTheme] = useState(false);

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
