import React, { Fragment } from 'react';
import { SignIn } from './SignIn';
import { Register } from './Register';
import {Home} from './Home'
import './CssComp/style.css';
import {Routes, Route} from 'react-router-dom'

export const Hero = () => {
	return (
		<Fragment>
			<div className="formContainer">
				
				<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/register' element={<Register />}/ >
						<Route path='/signin' element={<SignIn />}/ >

				</Routes>
			</div>
		</Fragment>
	);
};
