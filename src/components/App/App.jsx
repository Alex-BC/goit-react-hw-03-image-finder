import React, { Component } from 'react';
import Modal from '../Modal/Modal';
// import './styles.css';

class App extends Component {
    state = {
        image: null,
        loading: false,
        showModal: false
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://pixabay.com/api/?q=yellow+flower&page=1&key=19201386-219bb908558d098454af3ef41&image_type=photo&orientation=horizontal&per_page=12')
            .then(res => res.json())
            .then(image => this.setState({ image })).finally(() => this.setState({loading: false}));
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
                {this.state.image && (<div>{this.state.image.hits[1].previewURL}</div>)}
                <button type="button" onClick={this.toggleModal} className="Button">
                    Открыть
                </button>

                {showModal && <Modal onClose={this.toggleModal}>
                    
                </Modal>}

                <button type="button" onClick={this.toggleModal}>Закрыть</button>
                {this.state.loading && <h1>Загружаем...</h1>}
            </div>
                
                
        )
    }
}

export default App;
