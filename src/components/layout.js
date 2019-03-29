import React from "react"
import "./bootstrap.min.css"
import PropTypes from "prop-types"
import "./Layout.css"

import Navbar from "./Global/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>

  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
