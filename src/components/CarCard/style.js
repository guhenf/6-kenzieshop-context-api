import styled from "styled-components"

const StyledLi = styled.li`
  width: 100%;
  background-color: #fffff1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  margin-bottom: 15px;

  border: 4px solid #000;

  border-bottom-right-radius: 80px;

  box-shadow: 4px 4px 4px 0px #000;

  div {
    padding: 15px;
    font-size: 15px;
  }

  img {
    width: 100%;
  }

  h3 {
    border-bottom: #ca221f 5px solid;
    border-left: #ca221f 5px solid;

    padding: 0 0 5px 10px;
    margin-bottom: 5px;
  }

  button {
    font-family: "Julee", cursive;
    font-size: 30px;
    letter-spacing: 4px;

    width: 100%;
    background-color: #ca221f;
    height: 40px;

    text-shadow: 1px 0px #fff;

    :hover {
      background-color: #8c2318;
      transition: 0.4s;
      transform: scale(1.3);
    }
  }
`

export default StyledLi
