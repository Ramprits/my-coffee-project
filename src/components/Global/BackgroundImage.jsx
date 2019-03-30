import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundImageSection = ({ imageData, className }) => {
  return <BackgroundImage className={className} fluid={imageData} />
}

export default BackgroundImageSection
