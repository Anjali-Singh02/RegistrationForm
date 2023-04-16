import React, { Fragment } from 'react';

export const Header = () => {
	return (
		<Fragment>
			<div className="header">
				<ul>
					<li>Home</li>
				</ul>
				<div className="btnContainer">
					<button className="btn registerBtn">Register</button>
					<button className="btn signInBtn">Sign in</button>
				</div>
			</div>
		</Fragment>
	);
};
