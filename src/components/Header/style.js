import styled from "styled-components"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  background-color: #000000;
  box-shadow: 0px 10px 40px 10px #000;

  width: 100%;
  height: 12vh;
  padding-left: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 14vh;
    max-width: 100px;
    border-radius: 2px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 760px) {
      display: none;
    }
  }

  h1 {
    font-size: 2rem;
    color: #fff;

    text-shadow: 2px 0px #ca221f;

    margin: 0 1vh 1vh;

    @media (min-width: 760px) {
      font-size: 4rem;
    }
  }
`

export default StyledHeader
