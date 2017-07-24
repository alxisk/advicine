import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { genreIds, genreList } from '../constants/genres';
import { fetchAdvancedSearchResults } from '../actions/searchActions';

class AdvancedSearch extends Component {
  constructor() {
    super();
    this.state = {
      langValue: { label: 'english', value: 'en' },
      genreValue: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLangSelectChange = this.handleLangSelectChange.bind(this);
    this.handleGenreSelectChange = this.handleGenreSelectChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const dateMin = this.inputDateMin.value;
    const dateMax = this.inputDateMin.value;
    const genres = this.state.genreValue.map(item => item.value);
    const lang = this.state.langValue.value;
    const runtimeMin = this.inputRuntimeMin.value;
    const runtimeMax = this.inputRuntimeMax.value;

    this.props.fetchAdvancedSearchResults(
      { dateMin, dateMax }, genres, lang, { runtimeMin, runtimeMax }
    );
  }

  handleLangSelectChange(langValue) {
    this.setState({ langValue });
  }

  handleGenreSelectChange(genreValue) {
    this.setState({ genreValue });
  }

  render() {
    const langOptions = [
      { label: 'english', value: 'en' },
      { label: 'russian', value: 'ru' },
    ];
    const genreOptions = genreList.map(
      item => ({ label: item, value: genreIds[item] })
    );

    return (
      <section className="adv-search">
        <div className="wrap">
          <form
            className="adv-search__form"
            onSubmit={this.handleSubmit}
            ref={(form) => { this.searchForm = form; }}
          >
            <div className="adv-search__form-block">
              <fieldset className="adv-search__min-max-fieldset">
                <label className="adv-search__label" htmlFor="inputDateMin">
                  Release date
                  <input
                    type="text"
                    id="inputDateMin"
                    className="adv-search__input input"
                    ref={(input) => { this.inputDateMin = input; }}
                  />
                </label>
                <label className="adv-search__label" htmlFor="inputDateMax"> {/* eslint-disable-line no-trailing-spaces */}
                  <input
                    type="text"
                    id="inputDateMax"
                    className="adv-search__input input"
                    ref={(input) => { this.inputDateMax = input; }}
                  />
                </label>
              </fieldset>
            </div>
            <div className="adv-search__form-block">
              <label className="adv-search__label" htmlFor="genreSelect">
                Genres
                <Select
                  id="genreSelect"
                  className="adv-search__select"
                  multi
                  value={this.state.genreValue}
                  options={genreOptions}
                  placeholder={'Select genre..'}
                  onChange={this.handleGenreSelectChange}
                />
              </label>
            </div>
            <div className="adv-search__form-block">
              <label className="adv-search__label" htmlFor="langSelect">
                Original language
                <Select
                  id="langSelect"
                  className="adv-search__select"
                  value={this.state.langValue}
                  options={langOptions}
                  placeholder={'Select language..'}
                  onChange={this.handleLangSelectChange}
                />
              </label>
            </div>
            <div className="adv-search__form-block">
              <fieldset className="adv-search__min-max-fieldset">
                <label className="adv-search__label" htmlFor="inputRuntimeMin">
                  Runtime, m
                  <input
                    id="inputRuntimeMin"
                    type="text"
                    className="adv-search__input input"
                    ref={(input) => { this.inputRuntimeMin = input; }}
                  />
                </label>
                <label className="adv-search__label" htmlFor="inputRuntimeMax"> {/* eslint-disable-line no-trailing-spaces */}
                  <input
                    id="inputRuntimeMax"
                    type="text"
                    className="adv-search__input input"
                    ref={(input) => { this.inputRuntimeMax = input; }}
                  />
                </label>
              </fieldset>
            </div>
            <div className="adv-search__form-block">
              <button className="btn adv-search__btn">Search</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAdvancedSearchResults: bindActionCreators(fetchAdvancedSearchResults, dispatch),
  };
}

AdvancedSearch.propTypes = {
  fetchAdvancedSearchResults: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AdvancedSearch);
