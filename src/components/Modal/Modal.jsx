import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal) {
      if (this.props.showModal) {
        document.addEventListener('keydown', this.handleKeyDown);
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };
// заборона закриття модалки при кліку на зображення
  handleImageClick = (event) => {
    event.stopPropagation();
  };

  render() {
    const { children } = this.props;

    return (
      <div className={css.Overlay} onClick={this.props.onCloseModal}>
        <div className={css.Modal} onClick={this.handleImageClick}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

























// import React from 'react';
// import css from './Modal.module.css'

// export const Modal = ({ children, onCloseModal }) => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onCloseModal();
//       }
//     };
  
//     const handleCloseModal = (event) => {
//       if (event.target === event.currentTarget) {
//         onCloseModal();
//       }
//     };
  
//     return (
//       <div className={css.Overlay} onClick={handleCloseModal} onKeyDown={handleKeyDown} tabIndex="0">
//         <div className={css.Modal}>{children}</div>
//       </div>
//     );
//   };


