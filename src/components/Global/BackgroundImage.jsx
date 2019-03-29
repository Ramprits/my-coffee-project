import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundImageSection = ({ imageData, className }) => {
  return (
    <BackgroundImage className={className} fluid={imageData}>
      <h2 className="text-white font-weight-bold">Welcome to Coffee shop</h2>
    </BackgroundImage>
  )
}

export default BackgroundImageSection
