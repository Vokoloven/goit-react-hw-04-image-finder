import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const StyledOverlay = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const StyledModal = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 400px;
  min-width: 800px;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); */
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const StyledImg = styled.img``;

// export const Modal = ({ posts, idImg }) => {
//   if (idImg) {
//     const filtered = posts.filter(post => post.id === idImg);
//     const [{ largeImageURL, id }] = filtered;
//   }
// };

export class Modal extends Component {
  state = {
    img: [],
  };

  componentDidMount() {
    this.getData();
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  getData = () => {
    const filtered = this.props.posts.filter(
      post => post.id === this.props.idImg
    );
    const [filter] = filtered;
    this.setState(state => ({
      img: filter,
    }));
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { img } = this.state;

    return (
      <StyledOverlay onClick={this.handleBackDropClick}>
        <StyledModal>
          {img && <StyledImg src={img.largeImageURL} id={img.id} />}
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  idImg: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
