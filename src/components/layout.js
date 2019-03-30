import React from "react"
import "./bootstrap.min.css"
import PropTypes from "prop-types"
import "./Layout.css"

import Navbar from "./Global/Navbar"
import Footer from "./Global/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer>All Rights reserved @ {new Date().getFullYear().toString()}</Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
