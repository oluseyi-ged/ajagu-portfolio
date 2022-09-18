/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import React, { FC, ReactElement, useEffect } from "react"
import { useState } from "react"
import Layout from "src/layout"
import Container from "./styles"

const indQ = [
  {
    id: 1,
    q: "Requirement Gathering",
  },
  {
    id: 2,
    q: "User flow diagrams",
  },
  {
    id: 3,
    q: "PRD v1 MVP",
  },
  {
    id: 4,
    q: "Design Prototype",
  },
  {
    id: 5,
    q: "User Testing",
  },
  {
    id: 6,
    q: "Development Sprint",
  },
]

const busQ = [
  {
    id: 1,
    q: "So we have about a handful of staffs",
    a: "Is there a provision where I can handle all of these policies for my different staffs? That’s just one",
  },
  {
    id: 2,
    q: "How can I manage claims?",
    a: "Well..we will have to one day manage incoming claims. Do we have a provision for that?",
  },
  {
    id: 3,
    q: "Insurance Brokers…yes?",
    a: "Since you will be acting as the insurance brokers and not the insurance providers, do we get to have the best option in the market?",
  },
]

const MaxDs = () => {
  const router = useRouter()

  return (
    <Container>
      <div className="case__header">
        <p>max design</p>
      </div>
      <div className="case__staff">
        <div className="case__staff__grid">
          <div className="left__grid">
            <div className="left__gridInner">
              <p>FOCUS</p>
              <p>PRODUCT DESIGN, DESIGN OPS</p>
            </div>
            <div className="left__gridInner">
              <p>INDUSTRY</p>
              <p>TRANSPORT</p>
            </div>
            <div className="left__gridInner">
              <p>YEAR</p>
              <p>2021</p>
            </div>
          </div>
          <div className="right__grid">
            <div className="right__gridInner">
              <p>SENIOR DESIGNER</p>
              <p>HAROLD AJAGU</p>
            </div>
            <div className="right__gridInner">
              <p>COMPANY</p>
              <p>METRO AFRICA EXPRESS</p>
            </div>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1662112603/Image_9_hb4cor.png"
          alt=""
        />
      </div>
      <div className="case__synopsis">
        <h3>Creating the building blocks for the MAX product ecosystem</h3>
        <p className="dets">
          For a company like MAX which has a set of internal products to manage
          operations and drive efficiency across board in all business
          operations, the software needed to be made in such a way its intuitive
          and also, the experience should be uniform with all products. To
          achieve this, a system would be built to serve as a guideline and
          blueprint in coming up with these products
        </p>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1662671802/Group_24400_uw6ced.png"
          alt=""
        />
      </div>
      <div className="case__questions">
        <h4>First things first...</h4>
        <p className="explanation">
          Let’s look at the process flow for building an internal product in the
          MAX ecosystem and seeing where designs falls into; this will give us a
          much clearer picture on the current system and how we can best
          optimise it for faster product launch and later iterations and scale
        </p>

        <div className="questions__grid">
          <div className="questions__gridLeft">
            {indQ.map((ques) => (
              <div className="question__card" key={ques.id}>
                <p>{ques.q}</p>
              </div>
            ))}
          </div>
          <div className="identifier">
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1662115783/Group_23939_mo3oqg.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="explainers">
        <div className="explainers__top">
          <p>
            Given this process and seeing where we fall in, we needed to create
            a system that will make products shipping faster, and support scale
            in the long run
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1662671840/Group_23933_nvvmf3.png"
          alt=""
          className="process__img"
        />
        <div className="explainers__bottom">
          <p className="secHeader">A closer look...</p>
          <p>
            Next step is to take our concerned stage and create an efficient
            system of managing the design system, coming up with deliverables
            for sprints and managing user expectations
          </p>
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662671861/Group_23928_znuvd9.png"
            alt=""
          />
        </div>

        <div className="flow">
          <p>THE PROCESS FLOW</p>
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662671876/Group_24352_h3zg6g.png"
            alt=""
          />
        </div>
        <div className="explainers__bottom">
          <p>
            Using this process, we make the Design system an ever changing and
            dynamic library growing along with all the products in the
            ecosystem. A continuous update to the DS library will make a process
            such as - Feature update fast and easy to achieve, and also in
            coming up with components for new products in the ecosystem
          </p>
        </div>
      </div>
      <div className="prefoot">
        <h4>The result</h4>
        <p>
          Using this approach we were able to cut down the time it takes from
          the requirements gathering phase to the Dev sprint planning when
          launching new features for our products
        </p>
        <div className="centered">
          <h4>2.5wks</h4>
          <h4>5 days</h4>
        </div>
        <p>
          The time here varied between products and the nature of features we
          wanted to push. But the foundation and the principles still remained
          and this was what we built upon. Having components that were more
          focused on functions rather than the products gave us the ability to
          share these components among the different products in the ecosystem
        </p>
        <div className="prefooter__img">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662671895/Group_24398_kxqozl.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        <p className="prod">max ds</p>
        <div className="navs">
          <p onClick={() => router.push(`/case-study/green_pacific`)}>
            PREVIOUS PROJECT
          </p>
          <p onClick={() => router.push(`/flip`)}>FLIP</p>
          <p onClick={() => router.push(`/case-study/jekaconnect`)}>
            NEXT PROJECT
          </p>
        </div>
      </div>
    </Container>
  )
}

export default MaxDs

MaxDs.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
