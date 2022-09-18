/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import Container from "./styles"

const itemsLeft = [
  {
    name: "CASHA APP ILLUSTRATIONS",
    id: "EXHIBIT A",
    year: "Y 2022",
    status: "RECALLED",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1663487457/Group_24372_ro4saf.png",
  },
  {
    name: "STELLAS BANK IDENTITY",
    id: "EXHIBIT C",
    year: "Y 2022",
    status: "LIVE",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1663487444/Group_23964_wip5iw.png",
  },
]

const itemsRight = [
  {
    name: "GO FASTER",
    id: "EXHIBIT B",
    year: "Y 2022",
    status: "IN PROGRESS",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1663487469/Group_2_fcvtdr.png",
  },
  {
    name: "*REDACTED*",
    id: "EXHIBIT D",
    year: "Y 2022",
    status: "IN PROGRESS",
    img: "https://res.cloudinary.com/odd-developer/image/upload/v1663487403/Group_24383_ho17dk.png",
  },
]

const Flip = () => {
  const router = useRouter()

  return (
    <Container>
      <div className="nav__top">
        <p onClick={() => router.push(`/`)}>HAROLD AJAGU</p>
        <p>THE PLAYGROUND</p>
        <p>FLIP</p>
      </div>
      <div className="scroll__section">
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div className="the__flex">
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>WELCOME TO THE PLAYGROUND</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
            </div>
            <div className="the__flex">
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>WELCOME TO THE PLAYGROUND</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
            </div>
            <div className="the__flex">
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>WELCOME TO THE PLAYGROUND</h1>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1663491932/Icon_ionic-md-star_ed0j9g.svg"
                alt=""
              />
              <h1>BENDING PIXELS, WEILDING SHAPES</h1>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1663487390/Group_24362_mx50qz.png"
          alt=""
          className="parallax__img"
        />
      </div>
      <div className="banner">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1663487333/Flip-Banner-2_cxhls6.png"
          alt=""
        />
      </div>
      <div className="grid">
        <div className="grid__left">
          {itemsLeft.map((item, i) => (
            <div className="grid__left__item" key={i}>
              <img src={item.img} alt="" />
              <div className="content">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>
                  {item.year} • <span>{item.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid__right">
          {itemsRight.map((item, i) => (
            <div className="grid__right__item" key={i}>
              <img src={item.img} alt="" />
              <div className="content">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>
                  {item.year} • <span>{item.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="finalBanner">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1663487428/Group_24368_jnpbdi.png"
          alt=""
        />
      </div>
    </Container>
  )
}

export default Flip
