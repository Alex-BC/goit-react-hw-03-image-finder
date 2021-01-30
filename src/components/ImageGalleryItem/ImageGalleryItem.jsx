import { Component } from 'react';

export default class imageGalleryItem extends Component {
    state = {
        image: null
    }

    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.image;
        const nextImage = this.props.image;

        if (prevImage !== nextImage) {
            console.log('изменилось название картинки');
           
            fetch('https://pixabay.com/api/?q={nextImage}&page=1&key=19201386-219bb908558d098454af3ef41&image_type=photo&orientation=horizontal&per_page=12')
                .then(res => res.json())
                .then(image => this.setState({image}));
                
        }
    }
    
    render() {
        return (
            // <li className="ImageGalleryItem">{this.props.image}
            //     <img src="" alt="" className="ImageGalleryItem-image" />
            // </li>
            <div>
                <h1>ImageInfo</h1>
                {this.state.image && <div>{this.state.image.hits[1]}</div>}
                
            </div>
        )
    }
}