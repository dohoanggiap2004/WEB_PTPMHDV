import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './style.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
