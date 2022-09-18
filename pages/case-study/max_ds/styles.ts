import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  position: relative;
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
    position: relative;
    height: 80vh;

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
      width: 100%;
      max-width: calc(100% - 50px);
      position: absolute;
      margin-top: 150px;
    }
  }

  .case__synopsis {
    padding: 50px 0px 0px 0px;
    background: #fff8cb;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1250px;

    h3 {
      width: 680px;
      font-size: 40px;
      max-width: calc(100% - 50px);
      margin-bottom: 40px;
      text-align: center;
      margin-top: 500px;
    }

    .dets {
      width: 680px;
      max-width: calc(100% - 50px);
      font-size: 14px;
      text-align: center;
      margin-bottom: 224px;
    }
  }

  .case__questions {
    padding: 155px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;

    h4 {
      font-size: 40px;
      margin-bottom: 40px;
    }

    .explanation {
      font-size: 14px;
      text-align: center;
      width: 680px;
      max-width: calc(100% - 50px);
    }

    .questions__grid {
      margin-top: 156px;
      display: flex;
      gap: 16px;
      position: relative;

      .questions__gridLeft {
        padding: 0 148px;
        max-width: calc(100% - 50px);
        display: flex;
        gap: 19.13px;
        z-index: 5;

        .question__card {
          height: 162px;
          /* width: 152px; */
          background: #f5f5f5;
          margin-bottom: 83px;
          display: flex;
          align-items: center;
          padding: 0 63px 0 29px;

          p {
            width: 100px;
            text-align: left;
          }
        }
      }
      .identifier {
        position: absolute;
        right: 480px;
        z-index: 2;
      }
    }
  }

  .explainers {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 156px;

    .explainers__top {
      text-align: center;
      margin: 0 auto;
      width: 650px;
      max-width: calc(100% - 50px);
    }

    .process__img {
      padding: 0 189px;
    }

    .explainers__bottom {
      width: 650px;
      max-width: calc(100% - 50px);
      text-align: center;
      margin: 0 auto;

      .secHeader {
        font-size: 40px;
        margin-bottom: 40px;
      }
      p {
        font-size: 16px;
        margin-bottom: 67px;
      }
    }

    .flow {
      margin: 0 auto;
      text-align: center;

      p {
        margin-bottom: 90px;
        font-size: 14px;
      }
    }
  }
  .prefoot {
    padding: 118px 0;
    background: transparent linear-gradient(180deg, #f4f6fa 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .prefooter__img {
      margin-top: 209px;
      width: 80%;
      margin-bottom: 500px;
    }
  }
  .footer {
    background-color: #fff8cb;
    padding: 255px 148px;

    .prod {
      font-size: 60px;
      border-bottom: 1px solid #00000050;
      padding-bottom: 150px;
      text-align: center;
    }
    .navs {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;

      p {
        cursor: pointer;
      }
    }
  }
`
export default Container
