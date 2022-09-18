import styled from "styled-components"

const Container = styled.div`
  height: 83vh;
  display: flex;
  position: relative;
  z-index: 1;
  /* padding-left: 148px; */
  cursor: none;

  .work__dets {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 148px;
    width: 536px;
    max-width: calc(100 - 50px);

    h1 {
      font-weight: bolder;
    }

    &__list {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;

      &__item {
        display: flex;
        gap: 150px;
        font-size: 14px;

        p:nth-child(1) {
          width: 100px;
        }
        p:nth-child(2) {
          /* background-color: red; */
        }
      }
    }

    .triggers {
      display: flex;
      gap: 60px;
      text-transform: uppercase;
      font-size: 14px;
      z-index: 300;

      .prev__trigger {
        color: #00000020;
      }

      .prev__canClick {
        &:hover {
          text-decoration: line-through;
          cursor: pointer;
          text-decoration-color: red;
          text-decoration-thickness: 3px;
        }
      }

      .next__trigger {
        &:hover {
          text-decoration: line-through;
          cursor: pointer;
          text-decoration-color: red;
          text-decoration-thickness: 3px;
        }
      }

      .next__end {
        color: #00000020;
        pointer-events: none;
      }
    }
  }

  .work__image {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 904px;
    max-width: calc(100 - 50px);
    height: 100%;

    img {
      object-fit: cover;
      margin-bottom: auto;
      width: 100%;
    }
  }
`
export default Container
