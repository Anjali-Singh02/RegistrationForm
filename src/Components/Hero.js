import React, { Fragment } from 'react';
import { SignIn } from './SignIn';
import { Register } from './Register';
import './CssComp/style.css';

export const Hero = () => {
	return (
		<Fragment>
			<div className="formContainer">
				<Register />
				<SignIn />
			</div>
		</Fragment>
	);
};
