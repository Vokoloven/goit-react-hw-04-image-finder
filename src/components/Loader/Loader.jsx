import styled from 'styled-components';
import { ColorRing } from 'react-loader-spinner';

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <DivFlex>
      <ColorRing width={150} height={150} />
    </DivFlex>
  );
};
