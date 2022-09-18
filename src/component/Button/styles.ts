import styled from "styled-components"

export const Container = styled.div`
  width: 200px;

  .btn__container {
    padding: 15px;
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.primary};
    border: none;
    outline: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: ${({ theme }) => theme.light};
      font-size: 14px;
      width: 100%;
      cursor: pointer;
    }
  }
`
