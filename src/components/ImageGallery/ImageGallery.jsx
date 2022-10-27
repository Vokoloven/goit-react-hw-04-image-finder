import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageGalleryItem } from '../ImageGalleryItem';

const StyledImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageGallery = ({ posts, onClick }) => {
  return (
    <StyledImageGallery>
      <ImageGalleryItem posts={posts} onClick={onClick} />
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  posts: PropTypes.array.isRequired,
};
