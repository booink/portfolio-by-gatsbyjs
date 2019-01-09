import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import booinkLogo from '../images/booink.jpg';

const Header = ({ imageUrl }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={booinkLogo} alt="booink" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Hello from Booink
							</h1>
							<p className="subtitle has-text-white is-size-3">
								I'm a Programmer
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
