import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component { 
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

    scroll = () => {
    this.props.onClick();
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  render() {
    return (
      <button onClick={this.scroll} className="Button" type="button">
        Load more
      </button>
    );
  }
}