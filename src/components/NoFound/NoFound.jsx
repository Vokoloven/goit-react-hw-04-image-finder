import styled from 'styled-components';
import funnyteam from '../../img/FunnyTeam.jpg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: orange;
  font-size: 60px;
  font-weight: bold;
`;

export const NoFound = () => {
  return (
    <StyledDiv>
      <p>Sorry, but we didn't find image.</p>
      <img src={funnyteam} alt="Sorry" width={1200}></img>
      <p>Just try again</p>
    </StyledDiv>
  );
};
