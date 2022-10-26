import styled from 'styled-components';

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
      <img
        src="https://media.makeameme.org/created/im-so-sorry-9y2ia9.jpg"
        alt="Sorry"
        width={500}
      ></img>
      <p>Just try again</p>
    </StyledDiv>
  );
};
