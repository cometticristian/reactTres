import React from 'react';
import NavTop from '../components/NavTop';
import Section from '../components/Section';
import Footer from '../components/Footer';


function NavBar() {
	return (
		<div id="content-wrapper" className="d-flex flex-column">

			<div id="content">

				<NavTop />

				<Section />

			</div>

			<Footer />

		</div>
	)
}

export default NavBar;