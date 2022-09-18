/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import React, { FC, ReactElement, useEffect } from "react"
import { useState } from "react"
import Layout from "src/layout"
import Container from "./styles"

const obj = [
  {
    id: 1,
    q: "Be the number one go-to platform to discover and explore new interest groups",
  },
  {
    id: 2,
    q: "Provide exclusive discounts to groups of people to enhance their hangout experiences",
  },
  {
    id: 3,
    q: "Provide cash reward opportunities/ incentives for our loyal community",
  },
  {
    id: 4,
    q: "Support businesses through awareness and increase their customer base",
  },
]

const inside = [
  {
    id: 1,
    a: "Interests",
    q: "This will be the binding ingredient. Users would select what their interests are upon sign up and see others who also share the same interests as them",
    video:
      "https://res.cloudinary.com/odd-developer/image/upload/v1663143622/ezgif.com-gif-maker_3_ucynuu.gif",
  },
  {
    id: 2,
    a: "Tribes",
    q: "Tribes are interest groups created according to specific categories by users on Jekaconnect and can either be public or private tribes. Users can create their personal tribes, and if public, other users are able to join, or admin can share invite link to others within or outside the jekaconnect platform.",
    video:
      "https://res.cloudinary.com/odd-developer/image/upload/v1663143623/ezgif.com-gif-maker_4_oiz5np.gif",
  },
  {
    id: 3,
    a: "Deals",
    q: "We have the tribes, we also have their interests. We then show curated deals and offers for members of these tribe can have",
    video:
      "https://res.cloudinary.com/odd-developer/image/upload/v1663143625/ezgif.com-gif-maker_j7obyl.gif",
  },
]

const target = [
  {
    id: "+",
    q: "Tribes",
    a: "These will be a band of people coming together to form a group of shared interests. Users could create one or join one",
  },
  {
    id: "o",
    q: "Interests",
    a: "This will be the binding ingredient. Users would select what their interests are see other who share the same interests as them",
  },
  {
    id: "o",
    q: "Deals and offers",
    a: "We have the tribes, we also have their interests. We then show curated deals and offers for members of these tribe can have",
  },
  {
    id: "+",
    q: "Rewards",
    a: "These will be a band of people coming together to form a group of shared interests. Users could create one or join one",
  },
]

const who = [
  {
    id: "THE EXTROVERT",
    name: "Julie",
    dets: "As an outgoing character and a more socially active individual, this user likes to engage on social platforms, meet new people to broaden their circle of friends, participate in group discussions and enjoys hanging out with groups of people (either new or known friends). T`his user will be able to create their own tribe based on their interest and invite friends to join, they appreciate the self-managed option for their community of friends, they tend to hang out a lot and the exclusive deals on JekaConnect is a dream come through for them. They redeem deals regularly with their group of friends. Even though the cash reward incentive isn’t top priority for them, they enjoy the competitive nature of being top on the leaderboard whilst earning passive cash/crypto rewards. JekaConnect is such a breath of fresh air to them…As an outgoing character and a more socially active individual, this user likes to engage on social platforms, meet new people to broaden their circle of friends, participate in group discussions and enjoys hanging out with groups of people (either new or known friends). T`his user will be able to create their own tribe based on their interest and invite friends to join, they appreciate the self-managed option for their community of friends, they tend to hang out a lot and the exclusive deals on JekaConnect is a dream come through for them. They redeem deals regularly with their group of friends. Even though the cash reward incentive isn’t top priority for them, they enjoy the competitive nature of being top on the leaderboard whilst earning passive cash/crypto rewards. JekaConnect is such a breath of fresh air to them…",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1662673790/girl-shutterstock_1959826084_iuzw4u.png",
  },
  {
    id: "AN INTROVERT - LOOKING TO COME OUT OF THEIR SHELL, BY INTERACTING AND HANGING OUT MORE",
    name: "Tola",
    dets: "As a more reserved and “shy” individual, this user acknowledges their current state and seeks to be more socially active through exciting and interesting activities. They explore different tribes on JekaConnect based on their interest, join these tribes and view other profiles, consume daily content etc within the tribe. They see and seize occasional opportunities to join a group of people within their tribe to redeem offers available through JekaConnect and meet up with their “online” friends in real-life. Over time, they are able to break down their previous barriers and awkwardness during social events with a renewed delight in connecting with others. They owe this to JekaConnect…",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1662673800/girl-shutterstock_1918201157_avmbxk.png",
  },
  {
    id: "MORE PRIVATE, SMALL-CIRCLE",
    name: "Mary",
    dets: "This user likes to keep their circle as small and tight as possible. They don’t particularly enjoy having random conversations online with people they do not know. However, they can be quite bubbly in the company of known friends and acquittances. They also like to have a good-time when out and about. They’ve heard of JekaConnect and decide to explore the deals and offers available exclusively on JekaConnect. They share this deal with their friend outside of JekaConnect by inviting them to redeem deal together and an opportunity to catch up after a while. They like the fact that they can create a more private tribe on JekaConnect and only keep conversations and offers within their tribe. Thanks to them as well, JekaConnect benefits from their referrals…",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1662673806/girl-shutterstock_1544774489_or8yyg.png",
  },
]

const Jekaconnect = () => {
  const router = useRouter()

  return (
    <Container>
      <div className="case__header">
        <p>jekaconnect</p>
      </div>
      <div className="case__staff">
        <div className="case__staff__grid">
          <div className="left__grid">
            <div className="left__gridInner">
              <p>FOCUS</p>
              <p>ART DIRECTION, PRODUCT DESIGN</p>
            </div>
            <div className="left__gridInner">
              <p>INDUSTRY</p>
              <p>LIFESTYLE</p>
            </div>
            <div className="left__gridInner">
              <p>YEAR</p>
              <p>2022</p>
            </div>
          </div>
          <div className="right__grid">
            <div className="right__gridInner">
              <p>DURATION</p>
              <p>3 MONTHS</p>
            </div>
            <div className="right__gridInner">
              <p>PRODUCT MANAGER</p>
              <p>TEMITOPE AKINPELU</p>
            </div>
          </div>
        </div>

        <div className="img__contain">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662119516/Group_24300_q4j3iu.png"
            alt=""
          />
        </div>
      </div>
      <div className="case__synopsis">
        <div className="title">SYNOPISIS</div>
        <h3>
          Connecting people through real-life experiences and shared interests
        </h3>
        <p className="dets">
          The product we were to build will have three main goals; to provide an
          amazing opportunity for our users to discover and explore interest
          groups with an option to redeem exclusive discounts at their favourite
          hangout spots, to provide an opportunity for our users to earn rewards
          by fulfilling set in-app quests and to provide added value to
          businesses through promotional and awareness activities that leads to
          more customers and footfall traffic.
        </p>
      </div>
      <div className="case__questions">
        <h4>The objectives</h4>
        <div className="obj__grid">
          {obj.map((o, index) => (
            <div className="obj__item" key={index}>
              <div className="id">
                <p>{o.id}</p>
              </div>
              <p>{o.q}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="case__scene">
        <div className="title">SCENARIOS</div>
        <h3>Who were we creating this experience for?</h3>
        <p className="dets">
          Before we started any concepts on what the product was going to be
          like or act like, we needed to know who we were creating this for.
          What were their passions, what did they like? What were any
          reservations they had towards this kind of concept. For this we
          created scenarios
        </p>
        <div className="who__section">
          {who.map((wh, index) => (
            <div className="who__item" key={index}>
              <img src={wh.img} alt="" />
              <div className="who__dets">
                <h4>{wh.name}</h4>
                <p>{wh.id}</p>
                <p>{wh.dets}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="case__target">
        <h4>What we set out to do</h4>
        <p>
          In order to achieve our objectives, we had to map out the key stages
          or functions that will be necessary to the experience to the product
        </p>
        <div className="obj__grid">
          {target.map((o, index) => (
            <div className="obj__item" key={index}>
              <div className="id">
                <p>{o.id}</p>
              </div>
              <p className="sub">{o.q}</p>
              <p>{o.a}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="case__insider">
        {inside.map((o, index) => (
          <div className="item" key={index}>
            <div className="left">
              <h3>{o.a}</h3>
              <p>{o.q}</p>
            </div>
            <div className="right">
              <div className="right__background">
                <img src={o.video} alt="" className="flow__video" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="explainers">
        <div className="explainers__top">
          <p className="secHeader">Reward system</p>
          <p>
            We will create a gamified experience with badges, quests, ranks and
            points to enhance customer experience. This will also serve as a
            loyalty scheme to reward customers with repeated activities on the
            platform, essentially through participation in tasks and quests to
            earn points.
          </p>
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662673663/Group_24387_mknwtg.png"
            alt=""
          />
        </div>
      </div>
      <div className="explainers__bottom">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1663143623/ezgif.com-gif-maker_2_tjdykl.gif"
          alt=""
        />
      </div>
      <div className="prefoot">
        <h4>Art Style</h4>
        <p>
          For the overall art style of the project, we decided to go with a more
          vibrant color pallete and “fun” “happy” illustration set. A
          combination of 2D and 3D assets were used. Mostly minimal
          illustrations, similar to conventional cartoon art style. Pastel
          design and not overly ladened with complex lines and shadings
        </p>
        <div className="centered">
          <div className="slider">
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1662675502/Group_24332_taa4zi.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1662675502/Group_24331_bjjwlb.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1662675502/Group_24335_unhrpp.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1662675502/Group_24333_jt4f98.png"
              alt=""
            />
          </div>
        </div>
        <h4>Final notes...</h4>
        <p>
          Designing an experience for young folks to truly experience and be
          excited by is quite interesting. What’s interesting is, finding out
          what these set of people really wanted out of an app like ours if it
          existed and then bringing these ideas to life. Pretty interesting. As
          we finally roll out, and we have the first set of users on the
          platform, we can learn from direct user feedbacks and see what works
          and what we can tweak for the next version
        </p>

        <div className="cta">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662125769/Group_24286_ssxdjh.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1662125769/Group_24290_y6tqul.svg"
            alt=""
          />
        </div>
      </div>

      <div className="footer">
        <p className="prod">jekaconnect</p>
        <div className="navs">
          <p onClick={() => router.push(`/case-study/max_ds`)}>
            PREVIOUS PROJECT
          </p>
          <p onClick={() => router.push(`/flip`)}>FLIP</p>
          <p onClick={() => router.push(`/case-study/green_pacific`)}>
            NEXT PROJECT
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Jekaconnect

Jekaconnect.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
