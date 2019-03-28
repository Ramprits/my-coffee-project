import React from "react"
import "./bootstrap.min.css"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Navbar from "./Global/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <footer className="text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
