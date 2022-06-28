import styled from "styled-components"

const StyledButton = styled.button`
  font-family: "julee", cursive;

  height: 40px;
  padding: 10px;

  font-size: 25px;
  line-height: 5px;

  margin-right: 10px;

  background-color: #ca221f;

  border-radius: 4px;

  text-shadow: 0.5px 0px #fff;

  span {
    position: absolute;
    top: 7px;
    right: 7px;

    line-height: 18px;

    background-color: #fff;
    font-size: 15px;
    border-radius: 30px;

    min-width: 18px;
    min-height: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
    padding: 30px;
  }

  :hover {
    background-color: #8c2318;
    transition: 0.4s;
  }
`

export default StyledButton
