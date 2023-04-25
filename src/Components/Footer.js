import React, { Fragment } from 'react';

import {
	FacebookOutlined,
	InstagramOutlined,
	LinkedinOutlined,
	TwitterOutlined,
} from '@ant-design/icons';

export const Footer = () => {
	return (
		<Fragment>
			<footer className="footer">
				<div className="icons">
					<ul>
						<li>
							<InstagramOutlined />
						</li>
						<li>
							<FacebookOutlined />
						</li>
						<li>
							<TwitterOutlined />
						</li>
						<li>
							<LinkedinOutlined />
						</li>
					</ul>
					<p>RegistrationForm &copy; Copyright</p>
				</div>
			</footer>
		</Fragment>
	);
};
