import styled from "styled-components"

const Container = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: url("https://res.cloudinary.com/odd-developer/image/upload/v1663487355/Group_24404_kh8flu.png");
  background-repeat: no-repeat;
  background-position: 400px;
  background-size: 600px;

  .opening__content {
    margin: 0 auto;
    text-align: center;
    width: 35%;

    h1 {
      font-weight: bolder;

      &:hover {
        color: #fff;
        -webkit-text-stroke: 1px black;
      }
    }
  }

  .footer__content {
    text-transform: uppercase;
    display: flex;
    font-size: 14px;
    gap: 90px;
    position: absolute;
    z-index: 100;
    pointer-events: all;
    bottom: 80px;
    left: 148px;

    .footer__link {
      &:hover {
        text-decoration: line-through;
        cursor: pointer;
        text-decoration-color: red;
        text-decoration-thickness: 3px;
      }
    }
  }
`
export default Container
