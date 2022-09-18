import styled from "styled-components"

const Container = styled.div`
  height: 83vh;
  position: relative;

  .case__header {
    padding: 70px 148px;
    font-size: 90px;
    font-weight: lighter;
    border-bottom: 1px solid #00000050;
    /* width: 100%; */
    height: fit-content;
  }

  .case__staff {
    padding-top: 90px;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    /* height: 80vh; */
    width: 100%;
    align-items: center;
    margin: 0 auto;

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

    .img__contain {
      height: 520px;
      overflow: hidden;

      img {
        max-width: calc(100% - 50px);
        margin: 0 auto;
        overflow: hidden;
        text-align: center;
        display: block;
      }
    }
  }

  .case__synopsis {
    padding: 161px 148px;
    background: transparent linear-gradient(150deg, #ffeedb 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;

    .title {
      font-size: 14px;
      letter-spacing: 2px;
    }

    h3 {
      width: 600px;
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
    padding: 155px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 40px;
      margin-bottom: 50px;
    }

    .obj__grid {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 70px;
      position: relative;
      padding: 0 230px;

      .obj__item {
        width: 448px;
        height: 214px;
        background: #f4f6fa;
        display: flex;
        align-items: center;
        text-align: left;
        position: relative;
        margin-top: 50px;

        p {
          width: 321px;
          padding-left: 50px;
        }
        .id {
          background-color: #ffab62;
          height: 90px;
          width: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 10px solid #fff;
          border-radius: 50%;
          position: absolute;
          top: -50px;
          left: -50px;

          p {
            background: -webkit-linear-gradient(#ffffff, #ffd1a8, #ffab62);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 30px;
            padding-right: 50px;
          }
        }
      }
    }
  }

  .case__scene {
    padding: 0 148px;

    .title {
      font-size: 14px;
      letter-spacing: 2px;
    }

    h3 {
      width: 600px;
      font-size: 40px;
      max-width: calc(100% - 50px);
      margin-bottom: 40px;
    }

    .dets {
      width: 680px;
      max-width: calc(100% - 50px);
      font-size: 18px;
    }

    .who__section {
      display: flex;
      flex-direction: column;
      gap: 37px;
      margin-top: 142px;

      .who__item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        &:nth-child(2) {
          flex-direction: row-reverse;
        }

        img {
          /* object-fit: contain; */
          width: 500px;
          height: 530px;
          max-width: calc(100% - 50px);
        }

        .who__dets {
          background-color: #f7f7f7;
          padding: 87px 71px;
          width: 500px;
          max-width: calc(100% - 50px);
          height: 350px;

          h4 {
            font-size: 30px;
          }
          p:nth-child(2) {
            color: #ff8f2f;
            margin-top: 11px;
            margin-bottom: 25px;
          }
          p:nth-child(3) {
            color: #65728d;
            font-size: 12px;
          }
        }
      }
    }
  }

  .case__target {
    padding: 155px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 40px;
      margin-bottom: 50px;
    }

    p {
      width: 650px;
    }

    .obj__grid {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 70px;
      position: relative;
      padding: 0 230px;

      .obj__item {
        width: 448px;
        height: 214px;
        background: #f4f6fa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        position: relative;
        margin-top: 50px;

        .sub {
          color: #fc963d;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        p {
          width: 321px;
          padding-left: 50px;
        }
        .id {
          background-color: #ffab62;
          height: 90px;
          width: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 10px solid #fff;
          border-radius: 50%;
          position: absolute;
          top: -50px;
          left: -50px;

          p {
            background: -webkit-linear-gradient(#ffffff, #ffd1a8, #ffab62);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 60px;
            padding-right: 50px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }

  .case__insider {
    .item {
      display: flex;
      padding: 0 148px;
      margin-top: 100px;

      &:nth-child(2) {
        flex-direction: row-reverse;
      }

      .left {
        width: 564px;
        padding-left: 148px;
        padding-top: 148px;

        h3 {
          font-size: 40px;
          font-weight: 600;
          margin-bottom: 49px;
        }
        p {
          font-size: 16px;
          width: 364px;
        }
      }

      .right {
        background: transparent
          linear-gradient(180deg, #f4f6fa 0%, #ffffff 100%) 0% 0% no-repeat
          padding-box;
        opacity: 1;
        width: 564px;
        height: 682px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 100px;

        &__background {
          background: url("https://res.cloudinary.com/odd-developer/image/upload/v1662673737/iPhone_12_Pro_frpru1.png");
          background-repeat: no-repeat;
          background-position: 100px;
          background-size: 300px;
          width: 100%;
          align-items: center;
          margin: 0 auto;
          display: flex;
          text-align: center;
          justify-content: center;
          height: 600px;
        }

        .positioning {
          position: absolute;
          z-index: 1;
        }

        .flow__video {
          width: 54%;
          z-index: 10;
          height: 570px;
          border-radius: 40px;
        }
      }
    }
  }

  .explainers {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 253px;
    position: relative;
    margin-bottom: 300px;

    .explainers__top {
      text-align: center;
      margin: 0 auto;
      width: 650px;
      max-width: calc(100% - 50px);
      .secHeader {
        font-size: 40px;
        margin-bottom: 40px;
      }
      p {
        font-size: 16px;
        margin-bottom: 67px;
      }
    }
  }

  .explainers__bottom {
    background: red;
    width: 100%;
    background: transparent linear-gradient(180deg, #f4f6fa 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    height: 682px;
    display: flex;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      top: -180px;
      width: 317px;
      height: 641px;
    }
  }

  .prefoot {
    padding: 100px 0;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    position: relative;

    h4 {
      font-size: 40px;
      margin-bottom: 29px;
    }
    p {
      font-size: 16px;
      width: 680px;
      max-width: calc(100% - 50px);
    }

    .centered {
      display: flex;
      font-size: 60px;
      gap: 100px;
      margin-top: 40px;
      margin-bottom: 60px;
    }

    .cta {
      margin-top: 100px;
      display: flex;
      gap: 18px;
    }
  }
  .slider {
    display: flex;
    gap: 41px;
    padding-left: 150px;
    overflow: scroll;
    margin: 100px 0;

    img {
      width: 480px;
      height: 397px;
      max-width: calc(100% - 50px);
    }
  }

  .footer {
    background-color: #103441;
    padding: 255px 148px;

    .prod {
      font-size: 60px;
      border-bottom: 1px solid #fff7dd20;
      padding-bottom: 150px;
      text-align: center;
      color: #fff7dd;
    }
    .navs {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;

      p {
        cursor: pointer;
        color: #fff7dd;
      }
    }
  }
`
export default Container
