import React, { Component } from 'react';
import Modal from '../Modal/Modal';
// import './styles.css';

class App extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState(({showModal} )=> ({
            showModal: !showModal,
        }))
    }

    render() {

        const { showModal } = this.state;

        return (
            <div>
                <button type="button" onClick={this.toggleModal} className="Button">
                    Открыть
                </button>

                {showModal && <Modal onClose={this.toggleModal}>
                    
                </Modal>}

                <button type="button" onClick={this.toggleModal}>Закрыть</button>
            </div>
                
                
        )
    }
}

export default App;
