import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchSearchResults } from '../actions/searchActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = this.searchInput.value;
    if (!query) return;
    this.props.onSubmit(query);
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
    onSubmit: bindActionCreators(fetchSearchResults, dispatch)
  };
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Search);
