import React, { Component } from 'react';
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

  render() {
    const { children } = this.props;

    return (
      <div className={css.Overlay} onClick={this.props.onCloseModal}>
        <div className={css.Modal}>{children}</div>
      </div>
    );
  }
}


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


