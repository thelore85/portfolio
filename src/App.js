import React, { Component } from 'react';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import Tech from './components/Tech/Tech.js';
import Projects from './components/Projects/Projects.js';

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



////////////////////////////////
/////////TO DO
//////////////////////////////

// PORTFOLIO SECTION
// ABOUT SECTION

class App extends Component{

	render(){
		return(
			<div className='app-container'>
				<Menu />
				<Hero />
				<Services />
				<Tech />
				<About />
				<Projects />
				<Footer />
			</div>
		)
	}
}

export default App