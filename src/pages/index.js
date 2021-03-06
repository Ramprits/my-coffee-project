import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/Info"
import BackgroundImageSection from "../components/Global/BackgroundImage"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImageSection
      className="default-background"
      imageData={data.desktop.childImageSharp.fluid}
    />
    <Info
      title="Our Story"
      description="LGA-3020 is equipped with the most advanced SIEMENS CNC controller available and the high precision electronic gear box module supplied by Siemens. Also integrated in the machine are an 10-axis close-loop servo control system and a direct drive motor such that all axes move simultaneously and very accurately."
    />
  </Layout>
)

export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "aroma-aromatic-art-434213.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default IndexPage
