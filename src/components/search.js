import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSearchResults } from '../actions/searchActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const query = (/^\/search\//).test(pathname) ?
      pathname.replace('/search/', '') : '';
    if (query) {
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

  render() {
    return (
      <div className="search">
        <div className="wrap search__wrap">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref={(input) => { this.searchInput = input; }}
              className="search__input"
              placeholder="Search.."
            />
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
