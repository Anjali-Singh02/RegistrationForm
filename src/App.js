import { Fragment } from 'react';

import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Footer } from './Components/Footer';
function App() {
	return (
		<Fragment>
			<Header />
			<Hero />
			<Footer />
		</Fragment>
	);
}

export default App;
