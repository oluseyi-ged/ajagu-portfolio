import styled from "styled-components"

const Container = styled.div`
  background: #000000;
  position: relative;
  height: 100%;
  padding-top: 73px;
  width: 100%;

  .nav__top {
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    padding: 0 148px;
    font-size: 14px;
  }

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  .scroll__section {
    /* height: 80vh; */
    position: relative;
    /* background: red; */

    .parallax__img {
      position: absolute;
      top: 50px;
      left: 20%;
      z-index: 3;
    }

    .m-scroll {
      display: flex;
      position: relative;
      width: 100%;
      height: 600px;
      /* margin: auto; */
      background-color: transparent;
      overflow: hidden;
      z-index: 1;
    }
    .m-scroll__title {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100;
      left: 0;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      transform: scale(2);
      transition: all 1s ease;
      margin-top: 300px;
      padding-top: 70px;

      .the__flex {
        display: flex;
        gap: 50px;

        &:nth-child(1) {
          h1:nth-child(2) {
            color: black;
            font-size: 40px;
            -webkit-text-stroke-width: 0.16px;
            -webkit-text-stroke-color: white;
          }
        }
        &:nth-child(3) {
          h1:nth-child(1) {
            color: black;
            font-size: 40px;
            -webkit-text-stroke-width: 0.16px;
            -webkit-text-stroke-color: white;
          }
        }
        &:nth-child(2) {
          h1:nth-child(3) {
            color: black;
            font-size: 40px;
            -webkit-text-stroke-width: 0.16px;
            -webkit-text-stroke-color: white;
          }
        }
      }

      div {
        display: flex;
        animation: scrollText 33s infinite linear;
      }
      h1 {
        margin: 0;
        font-size: 40px;
        color: #ffffff;
        transition: all 2s ease;
      }
      a {
        text-decoration: none;
        color: white;
        &:hover {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      }
    }
  }
  .banner {
    text-align: center;
    margin-top: 200px;
  }
  .grid {
    display: flex;
    gap: 20px;
    padding: 32px;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

    &__right {
      margin-top: 500px;
    }
  }
  .grid__left__item,
  .grid__right__item {
    background: transparent
      linear-gradient(180deg, #242424 0%, #242424fc 1%, #00000000 100%) 0% 0%
      no-repeat padding-box;
    /* background: red; */
    opacity: 1;
    width: 450px;
    height: 831px;
    padding: 74px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /* align-items: center; */

    img {
      width: 80%;
      align-items: center;
    }

    .content {
      margin-top: auto;
      margin-bottom: 0;

      p:nth-child(1) {
        color: #fff;
        font-size: 12px;
        letter-spacing: 2.1px;
      }
      p:nth-child(2) {
        color: #fff;
        font-size: 12px;
        letter-spacing: 2.1px;
        margin: 5px 0;
      }
      p:nth-child(3) {
        color: #6a6a6a;
        font-size: 11px;
        letter-spacing: 2.1px;
        margin: 5px 0;

        span {
          background-color: #1d1d1d;
          border-radius: 3px;
          padding: 5px;
        }
      }
    }
  }

  .grid__right__item {
    img {
      padding-top: 250px;
    }

    &:nth-child(2) {
      img {
        width: 100%;
      }
    }
  }

  .finalBanner {
    padding-bottom: 100px;
  }
`
export default Container
