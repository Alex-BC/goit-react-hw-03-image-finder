import { Component } from 'react';
import ImagesErrorView from '../ImagesErrorView/ImagesErrorView';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class ImagesInfo  extends Component {
    state = {
        image: null,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;

        if (prevName !== nextName) {           
            this.setState({ status: 'pending' });
            
            fetch('https://pixabay.com/api/?q={nextName}&page=1&key=19201386-219bb908558d098454af3ef41&image_type=photo&orientation=horizontal&per_page=12')
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        
                        return Promise.reject(
                            new Error('Нет картинки с именеи ${nextName}')
                        );
                    })
                    .then(image => this.setState({ image, status: 'resolved' }))
                    .catch(error => this.setState({error, status: 'rejected'}));               
        }
    }
    
    render() {
        const { error, status } = this.state;

        if (status === 'idle') {
            return <div>Введите название картинки</div>
        }

        if (status === 'pending') {
            return <ImagePendingView />
        }

        if (status === 'rejected') {
            return <ImagesErrorView message={error.message} />;
        }

        if (status === 'resolved') {
            return <ImageGallery image={this.state.image} />;}/>
        }
        
     
    }
}