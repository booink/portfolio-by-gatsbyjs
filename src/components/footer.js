import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import './style.scss';

const Footer = () => (
  <footer className="footer center has-background-light">
    <div className="content has-text-centered">
      <p className="is-size-4">
        This website is made using <a href="https://github.com/amandeepmittal/gatsby-bulma-quickstart">gatsby-bulma-quickstart</a>
      </p>
    </div>
  </footer>
);

export default Footer;
