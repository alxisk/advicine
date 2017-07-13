import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentMovies } from '../actions/currentMoviesActions';

const CurrentMoviesItem = ({ id, title, name, poster_path }) => {
  const movieTitle = title || name;
  return (
    <li className="currentMovies__item">
      <Link
        to={`/titles/${id}-${movieTitle}`}
        className="currentMovies__link"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${poster_path})` }} // eslint-disable-line camelcase
      >
        <div className="currentMovies__overlay">
          <p className="currentMovies__title">{movieTitle}</p>
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
        <h2>loading..</h2>
      );
    }

    const upcomingMovies = this.props.currentMovies.upcomingMovies;
    const latestTVShows = this.props.currentMovies.latestTVShows;

    return (
      <section className="currentMovies">
        <div className="wrap">
          <div className="currentMovies__block">
            <h2 className="currentMovies__block-name">Upcoming Movies</h2>
            <ul className="currentMovies__list">
              {upcomingMovies.slice(0, 8).map(
                item => <CurrentMoviesItem key={item.id} {...item} />
              )}
            </ul>
          </div>
          <div className="currentMovies__block">
            <h2 className="currentMovies__block-name">Latest TV Shows</h2>
            <ul className="currentMovies__list">
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
    currentMovies: state.currentMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentMovies: bindActionCreators(fetchCurrentMovies, dispatch),
  };
}

CurrentMovies.propTypes = {
  fetchCurrentMovies: PropTypes.func.isRequired,
  currentMovies: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
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
