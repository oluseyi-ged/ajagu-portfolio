/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import React, { FC, ReactElement, useContext, useEffect } from "react"
import { useState } from "react"
import Cursor from "src/component/Cursor"
import { MouseContext } from "src/component/MouseContext"
import Layout from "src/layout"
import Container from "./styles"

const works = [
  {
    name: "Green Pacific",
    focus: "product design",
    industry: "insurance",
    year: "2020",
    image:
      "https://res.cloudinary.com/odd-developer/image/upload/v1661629096/Mask_Group_4_fxjbvb.png",
    link: "green_pacific",
  },
  {
    name: "MAX DS",
    focus: "design ops",
    industry: "transportation",
    year: "2021",
    image:
      "https://res.cloudinary.com/odd-developer/image/upload/v1661629082/Mask_Group_5_jgw5te.png",
    link: "max_ds",
  },
  {
    name: "Jekaconnect",
    focus: "product design",
    industry: "lifestyle",
    year: "2022",
    image:
      "https://res.cloudinary.com/odd-developer/image/upload/v1662667032/Mask_Group_50_gqmn15.png",
    link: "jekaconnect",
  },
  {
    name: "GIGX",
    focus: "BRAND, PRODUCT DESIGN",
    industry: "lifestyle",
    year: "2022",
    image:
      "https://res.cloudinary.com/odd-developer/image/upload/v1662667051/Mask_Group_51_hua2hl.png",
    link: "",
  },
]

const Works = () => {
  const [arrayId, setArrayId] = useState(0)
  const [current, setCurrent] = useState(works[arrayId])
  const { cursorChangeHandler } = useContext(MouseContext)

  const router = useRouter()
  const handleNext = () => {
    setArrayId(arrayId + 1)
  }

  useEffect(() => {
    setCurrent(works[arrayId])
  }, [arrayId])

  return (
    <>
      <Cursor />
      <Container>
        <div className="work__dets">
          <h1>{current?.name}</h1>
          <div className="work__dets__list">
            <div className="work__dets__list__item">
              <p>focus</p>
              <p>{current?.focus}</p>
            </div>
            <div className="work__dets__list__item">
              <p>industry</p>
              <p>{current?.industry}</p>
            </div>
            <div className="work__dets__list__item">
              <p>year</p>
              <p>{current?.year}</p>
            </div>
          </div>

          <div className="triggers">
            {arrayId > 0 && (
              <p
                className={
                  arrayId === works.length ? "prev__trigger" : "prev__canClick"
                }
                onClick={() => setArrayId(arrayId - 1)}
              >
                prev
              </p>
            )}

            <p
              className={
                arrayId === works.length - 1 ? "next__end" : "next__trigger"
              }
              onClick={handleNext}
            >
              next project
            </p>
          </div>
        </div>
        <div
          className="work__image"
          onClick={() => router.push(`case-study/${current?.link}`)}
        >
          <img
            src={current.image}
            alt=""
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          />
        </div>
      </Container>
    </>
  )
}

export default Works

Works.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
