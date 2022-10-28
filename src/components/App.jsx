import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { getApiService } from '../services/post.service';
import { Status } from '../config';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal';
import { NoFound } from './NoFound';

export const App = () => {
  const [status, setStatus] = useState('init');
  const [params, setParams] = useState({ q: '', page: 1 });
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState({ showModal: false, idImg: 0 });

  const fetchApi = async data => {
    if (params.q !== '') {
      setStatus(Status.LOADING);
    }
    try {
      const response = await getApiService(data);

      if (response.length === 0) {
        return setStatus(Status.NOFOUND);
      }
      if (params.q !== '') {
        setPosts(prevState => {
          return [...prevState, ...response];
        });
        setStatus(Status.SUCCESS);
      }
    } catch {
      setStatus(Status.ERROR);
    }
  };

  useEffect(() => {
    if (params.q === '') {
      return;
    }

    fetchApi(params);
  }, [params]);

  const onSearchRequest = e => {
    e.preventDefault();

    const searchValue = e.target.search.value.toLowerCase();

    setParams(prevState => {
      if (params.q === searchValue) {
        return { ...params, q: searchValue, page: 1 };
      }

      return { ...params, q: searchValue, page: 1 };
    });
    setPosts(prevState => {
      return [];
    });
  };

  const onClickButton = () => {
    setParams(prevState => {
      return { ...params, page: params.page + 1 };
    });
  };

  const toggleModal = e => {
    setToggle(prevState => {
      return { showModal: !toggle.showModal, idImg: Number(e.target.id) };
    });
  };

  const onClose = () => {
    setToggle(prevState => {
      return { showModal: !toggle.showModal };
    });
  };

  return (
    <>
      <Searchbar onSubmit={onSearchRequest} />
      <ImageGallery posts={posts} onClick={toggleModal} />
      {status === Status.NOFOUND && <NoFound />}
      {status === Status.SUCCESS && <Button onClick={onClickButton} />}
      {status === Status.LOADING && <Loader />}
      {toggle.showModal && (
        <Modal posts={posts} idImg={toggle.idImg} onClose={onClose} />
      )}
    </>
  );
};
