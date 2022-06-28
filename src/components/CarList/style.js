import styled from "styled-components"

const StyledUl = styled.ul`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 2000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default StyledUl
