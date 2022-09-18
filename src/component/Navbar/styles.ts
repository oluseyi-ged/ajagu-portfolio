import styled from "styled-components"

const Nav = styled.div`
  position: relative;

  .navbar {
    padding: 73px 148px 0px 148px;
    font-size: 14px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    p {
      font-weight: bolder;

      &:hover {
        text-decoration: line-through;
        cursor: pointer;
        text-decoration-color: red;
        text-decoration-thickness: 3px;
      }
    }
  }
`
export default Nav
