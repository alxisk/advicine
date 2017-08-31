import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentMovies } from '../actions/collectionsActions';
import LoadingIcon from '../assets/icons/loadingIcon';

const CurrentMoviesItem = ({ id, title, name, poster_path }) => {
  const movieTitle = title || name;
  return (
    <li className="current-movies__item">
      <Link
        to={`/titles/${name ? 'tv/' : ''}${id}-${movieTitle}`}
        className="current-movies__link"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${poster_path})` }} // eslint-disable-line camelcase
      >
        <div className="current-movies__overlay">
          <p className="current-movies__title">{movieTitle}</p>
        </div>
      </Link>
    </li>
  );
};

class CurrentMovies extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovies();
  }

  render() {
    const currentMovies = this.props.currentMovies;
    if (!currentMovies.hasOwnProperty('upcomingMovies') ||
        currentMovies.isFetching) {
      return (
        <div className="loading-icon">
          <LoadingIcon fill="#fff" stroke="#c53211" />
        </div>
      );
    }

    const upcomingMovies = this.props.currentMovies.upcomingMovies;
    const latestTVShows = this.props.currentMovies.latestTVShows;

    return (
      <section className="current-movies">
        <div className="wrap">
          <div className="current-movies__block">
            <h2 className="current-movies__block-name">Upcoming Movies</h2>
            <ul className="current-movies__list">
              {upcomingMovies.slice(0, 8).map(
                item => <CurrentMoviesItem key={item.id} {...item} />
              )}
            </ul>
          </div>
          <div className="current-movies__block">
            <h2 className="current-movies__block-name">Latest TV Shows</h2>
            <ul className="current-movies__list">
              {latestTVShows.slice(0, 8).map(
                item => <CurrentMoviesItem key={item.id} {...item} />
              )}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMovies: state.collections.currentMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentMovies: bindActionCreators(fetchCurrentMovies, dispatch),
  };
}

CurrentMovies.propTypes = {
  fetchCurrentMovies: PropTypes.func.isRequired,
  currentMovies: PropTypes.shape({
    upcomingMovies: PropTypes.array,
    latestTVShows: PropTypes.array,
  }).isRequired,
};

CurrentMoviesItem.defaultProps = {
  title: undefined,
  name: undefined,
};

CurrentMoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMovies);
