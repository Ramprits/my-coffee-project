import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/Info"
import BackgroundImageSection from "../components/Global/BackgroundImage"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About Page" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImageSection
      className="about-background"
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
    desktop: file(relativePath: { eq: "art-blur-cappuccino-302899.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default AboutPage
