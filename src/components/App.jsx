
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages, perPage } from '../Api/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { CustomLoader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    modalImageUrl: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then((response) => {
          if (response.hits.length === 0) {
            toast.error('Images not found');
            this.setState({ images: [], loading: false });
          } else {
            this.setState((prevState) => ({
              images: [...prevState.images, ...response.hits],
              loading: false,
            }));
          }
        })
        .catch((error) => {
          this.setState({ error: 'Failed to fetch images', loading: false });
        });
    }
  }

  handleSubmit = (query) => {
    this.setState({ query: query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleOpenModal = (imageUrl) => {
    this.setState({ showModal: true, modalImageUrl: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImageUrl: '' });
  };

  render() {
    const { images, loading, error, showModal, modalImageUrl } = this.state;
    const isLastPage = images.length > 0 && images.length % perPage !== 0; // Перевіряємо, чи це остання сторінка зображень
    
    return (
      <div>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <CustomLoader />}
        {error && <p>{error}</p>}
        <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
        {!isLastPage && images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {showModal && (
          <Modal onCloseModal={this.handleCloseModal} isLastPage={isLastPage}>
            <img src={modalImageUrl} alt={images.tags} />
          </Modal>
        )}
      </div>
    );
  }
}



























// import React, { Component } from 'react';
// import axios from 'axios';

// import {Searchbar} from './Searchbar/Searchbar';
// import {ImageGallery} from './ImageGallery/ImageGallery';
// import {CustomLoader} from './Loader/Loader';
// import {Button} from './Button/Button';
// import {Modal} from './Modal/Modal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export class App extends Component {
//   state = {
//     images: [],
//     loading: false,
//     error: null,
//     query: '',
//     page: 1,
//     showModal: false,
//     modalImageUrl: '',
//   };

//   fetchImages = async () => {
//     const { query, page } = this.state;
//     const apiKey = '36806774-40bfb6ea6dc234a9fdb87e4ab';
//     const perPage = 12;
//     const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

//     try {
//       this.setState({ loading: true });
//       // await new Promise((resolve) => setTimeout(resolve, 5000));
//       const response = await axios.get(url);
//       const data = response.data;

//       if (data.hits.length === 0) {
//         toast.error('Images not found');
//       }

//       this.setState((prevState) => ({
//         images: [...prevState.images, ...data.hits],
//         page: prevState.page + 1,
//       }));
//     } catch (error) {
//       this.setState({ error: 'Failed to fetch images' });
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   handleSubmit = (query) => {
//     this.setState({ images: [], query: query, page: 1 }, () => {
//       this.fetchImages();
//     });
//   };

//   handleLoadMore = () => {
//     this.fetchImages();
//   };

//   handleOpenModal = (imageUrl) => {
//     this.setState({ showModal: true, modalImageUrl: imageUrl });
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: false, modalImageUrl: '' });
//   };
//   handleImagesNotFound = () => {
//     toast.error('Images not found');
//   };
//   render() {
//     const { images, loading, error, showModal, modalImageUrl } = this.state;

//     return (
//       <div>
//         <ToastContainer autoClose={1000}/>
//         <Searchbar onSubmit={this.handleSubmit} />
//         {loading && <CustomLoader />}
//         {error && <p>{error}</p>}
//         <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
//         {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
//         {showModal && (
//           <Modal onCloseModal={this.handleCloseModal}>
//             <img src={modalImageUrl} alt={images.tags} />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }