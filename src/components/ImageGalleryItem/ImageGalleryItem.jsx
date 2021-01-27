import { Component } from 'react';

export default class imageGalleryItem extends Component {

    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.image;
        const nextImage = this.props.image;

        if (prevImage !== nextImage) {
            console.log('изменилось название картинки');
           
            fetch('https://pixabay.com/api/?q=yellow+flower&page=1&key=19201386-219bb908558d098454af3ef41&image_type=photo&orientation=horizontal&per_page=12')
        }
    }
    
    render() {
        return (
            <li className="ImageGalleryItem">{this.props.image}
                <img src="" alt="" className="ImageGalleryItem-image" />
            </li>
        )
    }
}