import React, { Fragment, useState } from 'react';
import { Register } from './Register';

export const Header = () => {
	const { showComponent, setShowComponent } = useState(false);

	const handleOnClick = () => {
		setShowComponent(true);
	};
	return (
		<Fragment>
			<div className="header">
				<ul>
					<li>Home</li>
				</ul>
				<div className="btnContainer">
					<div>
						<button
							className="btn registerBtn"
							onClick={handleOnClick}
						>
							Register
						</button>
						{showComponent && <Register />}
					</div>
					<button className="btn signInBtn">Sign in</button>
				</div>
			</div>
		</Fragment>
	);
};
