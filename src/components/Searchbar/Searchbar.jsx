import { Component } from 'react';
import { toast } from 'react-toastify';


export default class Searchbar extends Component {
    state = {
    image: "",
    }

    handleNameChange = event => {
        this.setState({ image: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.image.trim() === "") {
            return toast.error("Введите название картинки!");
            
        }

        this.props.onSubmit(this.state.image);
        this.setState({image: ''})
    }

    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.image}
                    onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}