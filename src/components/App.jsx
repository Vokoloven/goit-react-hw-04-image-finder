import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import { getApiService } from '../services/post.service';
import { Status } from '../config';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal';
import { NoFound } from './NoFound';
export class App extends Component {
  state = {
    status: Status.INIT,
    posts: [],
    showModal: false,
    idImg: 0,
    params: {
      q: '',
      page: 1,
    },
  };

  componentDidUpdate(_, prevState) {
    if (prevState.params.q !== this.state.params.q) {
      this.fetchApi(this.state.params);
    }
    if (prevState.params.page !== this.state.params.page) {
      this.fetchApi(this.state.params);
    }
  }

  fetchApi = async params => {
    this.setState({ status: Status.LOADING });
    try {
      const response = await getApiService(params);

      if (response.length === 0) {
        return this.setState({ status: Status.NOFOUND });
      }

      this.setState(prevState => {
        return {
          posts: [...prevState.posts, ...response],
          status: Status.SUCCESS,
        };
      });
    } catch {
      this.setState({ status: Status.ERROR });
    }
  };

  onSearchRequest = e => {
    e.preventDefault();

    const searchValue = e.target.search.value;

    this.setState(prevState => {
      return {
        params: { ...prevState.params, q: searchValue },
        posts: [],
      };
    });
  };

  onClickButton = () => {
    this.setState(({ params }) => ({
      params: {
        ...params,
        page: params.page + 1,
      },
    }));
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      idImg: Number(e.target.id),
    }));
  };

  onClose = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { status, posts, showModal, idImg } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSearchRequest} />
        <ImageGallery posts={posts} onClick={this.toggleModal} />
        {status === Status.NOFOUND && <NoFound />}
        {status === Status.SUCCESS && <Button onClick={this.onClickButton} />}
        {status === Status.LOADING && <Loader />}
        {showModal && (
          <Modal posts={posts} idImg={idImg} onClose={this.onClose} />
        )}
      </>
    );
  }
}
