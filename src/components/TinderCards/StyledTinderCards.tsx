import styled from "styled-components";

const StyledTinderCards = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 1vh; */
`;

export const Cards = styled.div<{ backgroundImage: string }>`
  /* position: relative; */
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 58vh;
  border-radius: 20px;
  background-size: cover;
  /* object-fit: cover; */

  background-position: center;
  background-image: ${(props) =>
    props.backgroundImage && props.backgroundImage};
`;

export default StyledTinderCards;
