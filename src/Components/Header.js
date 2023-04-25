import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
	return (
		<Fragment>
			<div className="header">

				<ul>
					<Link to='/' style={{color:'white', textDecoration:'none'}}>
					Home
					</Link>
				</ul>
				<div className="btnContainer">
					<Link to='/register'>
					<div>
						<button
							className="btn registerBtn"
						>
							Register
						</button>
					</div>
					</Link>
					<Link to='/signin'>
					<button className="btn signInBtn">Sign in</button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};
