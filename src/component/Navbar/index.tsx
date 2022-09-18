/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useState } from "react"
import Nav from "./styles"

const Navbar = () => {
  const [toggle, toggleNav] = useState(false)
  const router = useRouter()

  return (
    <Nav>
      <div className="navbar">
        <p onClick={() => router.push(`/`)}>Harold Ajagu</p>
        <p onClick={() => router.push(`/flip`)}>Flip</p>
      </div>
    </Nav>
  )
}

export default Navbar
