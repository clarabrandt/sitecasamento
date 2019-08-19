import React from 'react';
import Portal from './Portal';
import './Modal.css';

class Modal extends React.Component {
  render = () => {
    const { children, toggleFn, isOpen = false } = this.props;
    return (
      <Portal>
        {
          isOpen &&
          <div className={`modal ${!!isOpen ? 'visible' : 'hidden'}`}>
            <div className={`modal__container ${!!isOpen ? 'visible' : 'hidden'}`}>
              <div className="modal__header">
                <div className="modal__title" />
                <div className="modal__close" onClick={toggleFn}>
                  X
                </div>
              </div>
              <div className="modal__body">{children}</div>
            </div>
          </div>
        }
      </Portal>
    );
  };
}

export default Modal;
