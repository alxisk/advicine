import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTitleData } from '../actions/titlesActions';
import LoadingIcon from '../assets/icons/loadingIcon';

class MoviePage extends Component {
  componentDidMount() {
    const titleId = parseInt(this.props.match.params.title);
    if (this.props.match.params.tv) {
      this.props.fetchTitleData(titleId, true);
    } else {
      this.props.fetchTitleData(titleId);
    }
  }

  render() {
    const movie = this.props.movie;
    if (!movie.hasOwnProperty('isFetching') || movie.isFetching) {
      return (
        <div className="loading-icon">
          <LoadingIcon fill="#fff" stroke="#c53211" />
        </div>
      );
    }

    const screenWidth = document.documentElement.clientWidth;
    const posterSize = screenWidth < 768 ? 154 : 185;
    let date;
    let runtime;
    let budget;
    let revenue;
    let episodes;
    let seasons;

    if (this.props.match.params.tv) {
      date = (
        <p className="movie-page__release-date">
          ({parseInt(movie.first_air_date)} - {parseInt(movie.last_air_date)})
        </p>
      );
      runtime = (
        <p className="movie-page__info-item">
          <span>Episode runtime</span>
          {`${movie.episode_run_time instanceof Array ?
              movie.episode_run_time.join('/') :
              movie.episode_run_time}m`}
        </p>
      );
      episodes = (
        <p className="movie-page__info-item">
          <span>Episodes</span>
          {movie.number_of_episodes}
        </p>
      );
      seasons = (
        <p className="movie-page__info-item">
          <span>Seasons</span>
          {movie.number_of_seasons}
        </p>
      );
    } else {
      date = (
        <p className="movie-page__release-date">
          ({parseInt(movie.release_date)})
        </p>
      );
      runtime = (
        <p className="movie-page__info-item">
          <span>Runtime</span>
          {`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}
        </p>
      );
      budget = (
        <p className="movie-page__info-item">
          <span>Budget</span>
          {movie.budget}$
        </p>
      );
      revenue = (
        <p className="movie-page__info-item">
          <span>Revenue</span>
          {movie.revenue}$
        </p>
      );
    }

    return (
      <article className="movie-page">
        <div className="wrap movie-page__wrap">
          <div className="movie-page__description">
            <div className="movie-page__poster">
              <img
                src={`https://image.tmdb.org/t/p/w${posterSize}${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            </div>
            <h2 className="movie-page__title">{movie.title || movie.name}</h2>
            {date}
            <p className="movie-page__overview">{movie.overview}</p>
          </div>
          <div className="movie-page__info">
            {runtime}
            <p className="movie-page__info-item">
              <span>Original language</span>
              {movie.original_language}
            </p>
            {budget}
            {revenue}
            {episodes}
            {seasons}
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movie: state.titles[parseInt(ownProps.match.params.title)] || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTitleData: bindActionCreators(fetchTitleData, dispatch),
  };
}

MoviePage.propTypes = {
  fetchTitleData: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      tv: PropTypes.string,
    }),
  }).isRequired,
  movie: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
