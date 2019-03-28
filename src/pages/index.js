import React from "react"

// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="text-center font-weight-bold text-danger">Hi people</h1>
    <p className="text-center">Welcome to your new Gatsby site.</p>
    
  </Layout>
)

export default IndexPage
