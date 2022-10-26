import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import { getApiService } from '../services/post.service';
import { Status } from '../config';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
export class App extends Component {
  state = {
    status: Status.INIT,
    posts: [],
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

  render() {
    const { status, posts } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSearchRequest} />
        <ImageGallery posts={posts} />
        {status === Status.SUCCESS && <Button onClick={this.onClickButton} />}
      </>
    );
  }
}
