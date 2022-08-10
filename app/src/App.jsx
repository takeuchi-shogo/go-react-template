
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

export const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	)
}
