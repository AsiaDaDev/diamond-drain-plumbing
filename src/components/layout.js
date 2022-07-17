import * as React from "react"
import Nav from "../components/nav"
import "../styles/layout.css"

// markup
const Layout = ({pageTitle, children}) => {
  return (
    <div>
        <title>{pageTitle}</title>
        <Nav></Nav>
        {children}
    </div>
  )
}

export default Layout