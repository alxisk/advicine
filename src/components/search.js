import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSearchResults } from '../actions/searchActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconDisplay: 'inline',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const query = (/^\/search\//).test(pathname) ?
      pathname.replace('/search/', '') : '';
    if (query) {
      this.setState({ iconDisplay: 'none' });
      this.searchInput.value = query;
      this.props.fetchSearchResults(query);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = this.searchInput.value;
    if (query) {
      this.props.fetchSearchResults(query);
      this.props.history.push(`/search/${query}`);
    }
  }

  handleChange(event) {
    event.preventDefault();
    if (this.searchInput.value) {
      this.setState({ iconDisplay: 'none' });
    } else {
      this.setState({ iconDisplay: 'inline' });
    }
  }

  render() {
    return (
      <div className="search">
        <div className="wrap search__wrap">
          <form onSubmit={this.handleSubmit}>
            <div className="search__input-wrap">
              <input
                type="text"
                ref={(input) => { this.searchInput = input; }}
                className="search__input"
                placeholder="     Search.."
                onChange={this.handleChange}
              />
              <span
                ref={(icon) => { this.searchIcon = icon; }}
                className="search__input-icon"
                style={{ display: this.state.iconDisplay }}>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearchResults: bindActionCreators(fetchSearchResults, dispatch),
  };
}

Search.propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
