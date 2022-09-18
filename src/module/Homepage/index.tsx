/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import React, { FC, useCallback, useEffect, useState } from "react"
import Container from "./styles"

const intro = [
  "A multidisciplinary designer with over 7 years of experience crafting beautiful pieces of work",
  "Lived in New Delhi for a while. Very colourful culture. Learnt a lot during my time there",
  "You would be surprised what you find. It’s up to you to find it though. Who cares really?",
  "Worked with brands like; GIGM, Gold’s Gym, MAX NG and some other cool guys I can’t remember",
  "My primary focus now is mainly Product Design and Design OPS, you know what that means right?",
]

const Homepage = () => {
  const [newWord, setnewWord] = useState(
    "A multidisciplinary designer with over 7 years of experience crafting beautiful pieces of work"
  )
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * intro.length)
    setnewWord(intro[index])
  }, [])
  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000)
    return () => clearInterval(intervalID)
  }, [shuffle])

  const router = useRouter()
  return (
    <Container>
      <div className="opening__content">
        <h1>{newWord}</h1>
      </div>
      <div className="footer__content">
        <p className="footer__link" onClick={() => router.push("/works")}>
          see works
        </p>
        <p className="footer__link">download cv</p>
        <p>C 2022</p>
      </div>
    </Container>
  )
}

export default Homepage
