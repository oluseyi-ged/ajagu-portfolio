import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  position: relative;
  color: #000;
  width: 100%;
  overflow-x: hidden;

  .case__header {
    padding: 70px 148px;
    font-size: 90px;
    font-weight: lighter;
    border-bottom: 1px solid #00000050;
    width: 100%;
    height: fit-content;
  }

  .case__staff {
    padding-top: 90px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    &__grid {
      display: flex;
      padding: 0 148px;
      justify-content: space-between;
      font-size: 14px;
      padding-bottom: 107px;

      .left__grid {
        display: flex;
        flex-direction: column;
        gap: 2px;

        &Inner {
          display: flex;
          gap: 159px;

          p:nth-child(1) {
            width: 73px;
          }
        }
      }

      .right__grid {
        display: flex;
        flex-direction: column;
        gap: 2px;

        &Inner {
          display: flex;
          gap: 159px;

          p:nth-child(1) {
            width: 148px;
          }
        }
      }
    }

    img {
      margin: 0 auto;
      width: 680px;
      max-width: calc(100% - 50px);
      height: 484px;
    }
  }

  .case__synopsis {
    padding: 161px 148px;
    background: #efffe3;

    .title {
      font-size: 14px;
      letter-spacing: 2px;
    }

    h3 {
      width: 650px;
      font-size: 40px;
      max-width: calc(100% - 50px);
      margin-bottom: 40px;
    }

    .dets {
      width: 680px;
      max-width: calc(100% - 50px);
      font-size: 18px;
    }
  }

  .case__questions {
    padding: 155px 148px;

    h4 {
      font-size: 40px;
      margin-bottom: 40px;
    }

    .explanation {
      font-size: 16px;
      width: 680px;
      max-width: calc(100% - 50px);
    }

    .questions__grid {
      margin-top: 245px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      .rightMargin {
        margin-top: 145px;
      }

      .questions__gridLeft,
      .questions__gridRight {
        width: 564px;
        max-width: calc(100% - 50px);

        .qHeader {
          color: #1ab768;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 37px;
        }

        .question__card {
          padding: 35px 37px;
          background: #f5f5f5;
          margin-bottom: 83px;
        }

        .busCard {
          background: #fffeea;
        }

        .goLeft {
          text-align: right;
        }
      }
    }
  }

  .explainers {
    /* padding: 148px; */
    display: flex;
    flex-direction: column;
    gap: 253px;
    /* width: 564px; */
    width: 100%;
    max-width: calc(100% - 50px);

    h4 {
      font-size: 40px;
      margin-bottom: 40px;
    }

    p {
      font-size: 16px;
      width: 564px;
    }

    .secHeader {
      font-size: 18px;
      margin-bottom: 28px;
      letter-spacing: 1.8px;
      text-align: left;
    }
  }

  .color__section {
    .color__grid {
      display: flex;
      flex-wrap: wrap;

      .grid__item {
        width: 287px;
        max-width: calc(100% - 0px);
        height: 370px;
        display: flex;

        &:nth-child(8) {
          flex-grow: 1;
        }

        p {
          margin-top: auto;
          margin-bottom: 35px;
          margin-left: 39px;
        }
      }
    }
  }

  .font__section {
    display: flex;
    padding: 240px 200px 166px 265px;
    position: relative;

    .font__listing {
      width: 441px;
      max-width: calc(100 - 50px);

      .font__one {
        margin-bottom: 43px;

        p:nth-child(1) {
          color: #11ba67;
        }
        h3 {
          color: #2f3431;
          font-size: 33px;
          font-weight: 700;
        }
      }

      .font__two {
        margin-bottom: 43px;

        p:nth-child(1) {
          color: #11ba67;
        }
        p:nth-child(2) {
          color: #2f3431;
          font-size: 33px;
          font-weight: lighter;
        }
        p:nth-child(3) {
          color: #929f96;
          font-size: 13px;
        }
      }
    }

    .font__display {
      width: 337px;
      max-width: calc(100 - 50px);
      display: flex;
      flex-direction: column;
      gap: 46px;

      .disp {
        display: flex;
        gap: 33px;

        p:nth-child(1) {
          color: #11ba67;
          font-size: 13px;
        }

        &:nth-child(1) {
          h4 {
            font-size: 30px;
            font-weight: 700;
          }
        }
        &:nth-child(2) {
          h4 {
            font-size: 20px;
            font-weight: 700;
          }
        }
        &:nth-child(3) {
          h4 {
            font-size: 16px;
            font-weight: lighter;
          }
        }
        &:nth-child(4) {
          h4 {
            font-size: 14px;
            font-weight: lighter;
          }
        }
        &:nth-child(5) {
          h4 {
            font-size: 12px;
            font-weight: lighter;
          }
        }
      }
    }

    .img {
      position: absolute;
      bottom: 0px;
      z-index: 2;
    }
  }

  .footer {
    background-color: #2f3431;
    padding: 255px 148px;

    .explainers__top {
      padding-left: 148px;
      display: flex;
      flex-direction: column;
      width: 564px;
      max-width: calc(100% - 50px);
      color: #fff;
      margin-bottom: 150px;

      h4 {
        font-size: 40px;
        margin-bottom: 15px;
      }

      p {
        font-size: 16px;
      }
    }

    .prod {
      font-size: 60px;
      border-bottom: 1px solid #fff7dd20;
      padding-bottom: 150px;
      text-align: center;
      color: #fff785;
      margin-top: 321px;
    }
    .navs {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;

      p {
        cursor: pointer;
        color: #fff785;
      }
    }
  }

  .explainers__top {
    padding-left: 148px;
    display: flex;
    flex-direction: column;
    width: 564px;
    max-width: calc(100% - 50px);
    color: #000;
    margin-bottom: 150px;

    h4 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
    }
  }

  .explainers__bottom {
    display: flex;
    flex-direction: column;
    padding-left: 148px;
  }

  .bioGif {
    padding: 100px;
    margin: 0 auto;
    width: 100vh;
  }
  .dashGif {
    padding: 100px;
    margin: 0 auto;
    width: 100vh;
  }

  .explainers__gif {
    width: 100vh;
    margin: 0 auto;
  }
`
export default Container
