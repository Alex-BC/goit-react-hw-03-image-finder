import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImagesInfo from "../ImagesInfo/ImagesInfo";

export default class App extends Component {
    state = {
        imageName: '',
    }

    componentDidMount() {}

    handleFormSubmit = imageName => {
        this.setState({imageName});
    }

    

    render() {

      

        return (
            
            <>
                <ToastContainer autoClose={3000} />

                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImagesInfo imageName={this.state.imageName} />
            </>
        );
    }
}


