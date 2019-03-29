import React from "react"
import BackgroundImage from "gatsby-background-image"
import Typed from "react-typed"

const BackgroundImageSection = ({ imageData, className }) => {
  return (
    <BackgroundImage className={className} fluid={imageData}>
      <Typed
        strings={["Coffe", "Hot Tea", "Green Tea"]}
        typeSpeed={80}
        loop
        className="text-primary font-weight-bold text-center"
      />
    </BackgroundImage>
  )
}

export default BackgroundImageSection
