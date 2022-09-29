import React from 'react'

const About = (props) => (
  <div>
    <h1>About Page</h1>
    <p>Did you get here via Redux? {props.name ? props.name : null}</p>
  </div>
)

export default About
