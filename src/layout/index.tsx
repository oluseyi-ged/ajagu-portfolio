import React from "react"
import Navbar from "src/component/Navbar"
import Container from "./styles"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container>
      <div className="link__container">
        <Navbar />
      </div>
      <main className="link__children">{children}</main>
    </Container>
  )
}

export default Layout
