import styled from "styled-components"

const Container = styled.div`
  .ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: rgba(31, 30, 30, 0.4);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 100ms;
    transition-duration: 100ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    will-change: width, height, transform, border;
    z-index: 999;
    pointer-events: none;

    p {
      display: none;
    }
  }
  .dot {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 999;
    pointer-events: none;
  }
  .ring.hovered {
    /* width: fit-content; */
    /* height: fit-content; */
    width: 139px;
    height: 139px;
    border-width: 3px;
    background-color: transparent;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: block;
      text-align: center;
    }
  }
  .dot.hovered {
    display: none;
  }
`
export default Container
