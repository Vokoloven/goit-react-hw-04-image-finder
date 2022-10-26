import styled from 'styled-components';

const StyledButtonLoadMore = styled.button`
  background-color: #5d3dd1; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = ({ onClick }) => {
  return (
    <DivFlex>
      <StyledButtonLoadMore onClick={onClick}>Load More</StyledButtonLoadMore>
    </DivFlex>
  );
};
