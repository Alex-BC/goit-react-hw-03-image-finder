import React, { Component } from 'react';
import {createPortal} from 'react-dom';
// import '../App/styles.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)    
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
                console.log('Нажали');

                this.props.onClose();
            }
    }


    render() {
        return createPortal(<div className="Overlay">
                <div className="Modal">
                    <img src="" alt="" />{this.props.children}
                </div>
            </div>, modalRoot,);
    }

}
export default Modal;
