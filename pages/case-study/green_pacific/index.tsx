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
    q: "What is even policy?",
    a: "So do you mean they have to give me a policy first before I get insurance. And what is even policy",
  },
  {
    id: 2,
    q: "So how many things can I insure?",
    a: "I mean what if I have a car and a house and maybe another car…you see?! This is why these things are confusing",
  },
  {
    id: 3,
    q: "How much am I even going to pay?",
    a: "What if I want to calculate how much I will be spending on this insurance thing you people are talking about, or even see how much I can even insure my goods…",
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

const colors = [
  "#11BA67",
  "#B4E382",
  "#E2FDCA",
  "#FFF785",
  "#FFFDE0",
  "#2F3431",
  "#929F96",
  "#EEEEEE",
]

const GreenPacific = () => {
  const router = useRouter()

  return (
    <Container>
      <div className="case__header">
        <p>green pacific</p>
      </div>
      <div className="case__staff">
        <div className="case__staff__grid">
          <div className="left__grid">
            <div className="left__gridInner">
              <p>FOCUS</p>
              <p>PRODUCT DESIGN</p>
            </div>
            <div className="left__gridInner">
              <p>INDUSTRY</p>
              <p>INSURETECH</p>
            </div>
            <div className="left__gridInner">
              <p>YEAR</p>
              <p>2020</p>
            </div>
          </div>
          <div className="right__grid">
            <div className="right__gridInner">
              <p>DESIGN</p>
              <p>HAROLD AJAGU</p>
            </div>
            <div className="right__gridInner">
              <p>PRODUCT MANAGER</p>
              <p>OMOSALEWA ADEFIHAN</p>
            </div>
            <div className="right__gridInner">
              <p>CLIENT</p>
              <p>GREEN PACIFIC</p>
            </div>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1661634278/Happy-Family-insured_ueksgr.png"
          alt=""
        />
      </div>
      <div className="case__synopsis">
        <p className="title">SYNOPISIS</p>
        <h3>
          How could we make insurance cheap and easily accessible in a clime
          like Nigeria
        </h3>
        <p className="dets">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          laoreet nisi, id accumsan enim. Aenean at tincidunt tortor. Sed sed
          neque at ex scelerisque cursus ac et eros. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Mauris elementum, massa quis pulvinar rutrum, lacus diam lobortis
          nisi, vel bibendum sapien leo sit amet velit.
        </p>
      </div>
      <div className="case__questions">
        <h4>Recurring questions...</h4>
        <p className="explanation">
          After conducting research and studying our target audience, there was
          a recurring theme. Most of the individuals knew what insurance was,
          but didn’t know how it worked or they had a little idea about it. But
          then, a majority didn’t know, which in turn made us arrive at some
          recurring questions being asked - the businesses were more technical
          and direct with their concerns
        </p>

        <div className="questions__grid">
          <div className="questions__gridLeft">
            <p className="qHeader">Individuals</p>
            {indQ.map((ques) => (
              <div className="question__card" key={ques.id}>
                <p>{ques.q}</p>
                <p>{ques.a}</p>
              </div>
            ))}
          </div>
          <div className="questions__gridRight rightMargin">
            <p className="qHeader goLeft">Businesses</p>
            {busQ.map((ques) => (
              <div className="question__card busCard" key={ques.id}>
                <p>{ques.q}</p>
                <p>{ques.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="explainers">
        <div className="explainers__top">
          <h4>Catering to both groups…</h4>
          <p>
            So we had both audiences we wanted to capture, and also their
            independent concerns regarding “insurance”. Whatever we were going
            to build had to cater to both groups unique problems and also the
            brokers…yeah right, the brokers
          </p>
        </div>
        <div className="explainers__bottom">
          <p className="secHeader">ESTIMATING YOUR PREMIUM</p>
          <p>
            For some reason, people really wanted to know how much they might
            pay even after reading about the benefits and what nots. Why?
            Because they should be able to. How about embedding this on the
            landing page from onset?
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1663143625/ezgif.com-gif-maker_8_tjbhny.gif"
          alt=""
          className="explainers__gif"
        />
        <div className="" style={{ width: "100%" }}>
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662667757/Group_23887_bs0wey.png"
            alt=""
            style={{
              paddingLeft: "148px",
            }}
          />
          <div
            className="explainers__bottom"
            style={{
              marginTop: "250px",
              marginBottom: "183px",
            }}
          >
            <p className="secHeader">POLICY MARKETPLACE</p>
            <p>
              Here the users can explore other policy offerings and see an
              explanation as well as the rate, and an estimated premium before
              an application is tendered
            </p>
          </div>

          <div
            className="explainers__top"
            style={{ marginTop: "250px", marginBottom: "183px" }}
          >
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1663143621/ezgif.com-gif-maker_6_ak9mvp.gif"
              alt=""
              className="bioGif"
            />
            <h4>The back office...</h4>
            <p>
              This is where all policies are managed and processed. The system
              administrator sees an overview of all active and inactive policies
              as well as claims processing. The back office handles all and more
            </p>
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1663143623/ezgif.com-gif-maker_5_imnjur.gif"
              alt=""
              className="dashGif"
            />
          </div>
          <div
            className="explainers__top"
            style={{
              marginTop: "250px",
              marginBottom: "183px",
            }}
          >
            <h4>Styleguide</h4>
            <p>
              Creating a product this extensive and multi-layered requires some
              sort of design system and style guide management
            </p>
          </div>
        </div>
      </div>
      <div className="color__section">
        <div className="color__grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className="grid__item"
              style={{ backgroundColor: color }}
            >
              <p
                style={
                  index === 0 || index === 5 || index === 6
                    ? { color: "#fff" }
                    : { color: "#000" }
                }
              >
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="font__section">
        <div className="font__listing">
          <div className="font__one">
            <p>Font One</p>
            <h3>League Spartan</h3>
          </div>
          <div className="font__two">
            <p>Font Two</p>
            <p>TT Commons</p>
            <p>Medium, Regular, Light</p>
          </div>
        </div>
        <div className="font__display">
          <div className="disp">
            <p>30pt</p>
            <h4>Risk Management and consultancy</h4>
          </div>
          <div className="disp">
            <p>20pt</p>
            <h4>Risk Management and consultancy</h4>
          </div>
          <div className="disp">
            <p>16pt</p>
            <h4>
              This policy provides cover for damage to buildings caused by fire
              and contents by theft accompanied by forcible or violent entry
              into the premises.
            </h4>
          </div>
          <div className="disp">
            <p>14pt</p>
            <h4>
              This policy provides cover for damage to buildings caused by fire
              and contents by theft accompanied by forcible or violent entry
              into the premises.
            </h4>
          </div>
          <div className="disp">
            <p>12pt</p>
            <h4>
              This policy provides cover for damage to buildings caused by fire
              and contents by theft accompanied by forcible or violent entry
              into the premises.
            </h4>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1662667626/Path_200_njvhbr.png"
          alt=""
          className="img"
        />
      </div>
      <div className="footer">
        <div className="explainers__top">
          <h4>Because why not…</h4>
          <p>To appease the dark mode overlords, we herby present you these</p>
        </div>

        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1662667613/Group_23896_nn73mn.png"
          alt=""
        />
        <p className="prod">green pacific</p>
        <div className="navs">
          <p onClick={() => router.push(`/case-study/jekaconnect`)}>
            PREVIOUS PROJECT
          </p>
          <p onClick={() => router.push(`/flip`)}>FLIP</p>
          <p onClick={() => router.push(`/case-study/max_ds`)}>NEXT PROJECT</p>
        </div>
      </div>
    </Container>
  )
}

export default GreenPacific

GreenPacific.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
