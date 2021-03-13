import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Nav from'./components/scripts/Nav'
import Banner from './components/scripts/Banner';
import About from './components/scripts/About';
import Inventory from './components/scripts/Inventory';
import Contact from './components/scripts/Contact';
import Footer from './components/scripts/Footer';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}

		<Nav />
		<Banner />

		<main>

			<About />

			{/* // <!-- division line --> */}
      <div id="hr">
				<hr class="container" />
			</div>

			<Inventory />
			<Contact />
			<Footer />


		</main>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
