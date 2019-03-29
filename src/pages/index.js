import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImageSection from "../components/Global/BackgroundImage"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImageSection className="default-background" imageData={data.desktop.childImageSharp.fluid} />
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
