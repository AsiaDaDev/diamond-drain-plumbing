import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home">
        <section>
          <h1>Our plumbers only offer the diamond service</h1>
          <h2>Check for service in your area!</h2>
          <div>Call 555-555-5555</div>
          <div>Schedule a Visit</div>
        </section>
      </Layout>
    </div>
  )
}

export default IndexPage
