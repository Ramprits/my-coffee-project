import React from "react"

const Info = ({ title, description, children }) => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h2 className="text-center font-weight-bold">{title}</h2>
          <p className="text-justify text-center">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Info
