import PropTypes from 'prop-types';
import styled from 'styled-components';

const StlyedList = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ImageGalleryItem = ({ posts, onClick }) => {
  return (
    <>
      {posts &&
        posts.map(post => {
          return (
            <StlyedList key={post.id}>
              <StyledImage
                onClick={onClick}
                src={post.webformatURL}
                alt={post.tags}
                id={post.id}
              />
            </StlyedList>
          );
        })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  // onClick: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
