import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTitleData } from '../actions/titlesActions';

class MoviePage extends Component {
  componentDidMount() {
    const titleId = parseInt(this.props.match.params.title);
    this.props.fetchTitleData(titleId);
    console.log(titleId);
  }

  render() {
    const movie = this.props.movie;
    console.log('Movie:', movie);
    if (!movie || movie.isFetching) {
      return (
        <h1>Loading..</h1>
      );
    }
    return (
      <section className="movie-page">
        {console.log('MoviePage:', this.props)}
        <div className="movie-page__poster">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </div>
        <div className="movie-page__description">
          <h2 className="movie-page__title">{movie.title}</h2>
          <p className="movie-page__release-date">({parseInt(movie.release_date)})</p>
          <p className="movie-page__overview">{movie.overview}</p>
        </div>
        <div className="movie-page__info">
          <p className="movie-page__info-item">
            <span>Runtime</span>
            {movie.runtime}m
          </p>
          <p className="movie-page__info-item">
            <span>Original language</span>
            {movie.original_language}
          </p>
          <p className="movie-page__info-item">
            <span>Budget</span>
            {movie.budget}$
          </p>
          <p className="movie-page__info-item">
            <span>Revenue</span>
            {movie.revenue}$
          </p>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movie: state.titles[parseInt(ownProps.match.params.title)]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTitleData: bindActionCreators(fetchTitleData, dispatch)
  };
}

MoviePage.propTypes = {
  fetchTitleData: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  movie: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
