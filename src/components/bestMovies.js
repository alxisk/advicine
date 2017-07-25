import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import ReactTooltip from 'react-tooltip';
import { fetchBestMovies } from '../actions/collectionsActions';

const BestMoviesItem = ({ num, id, title, release_date, vote_average, poster_path }) => (
  <li className="collection__item">
    {/* eslint-disable camelcase */}
    <Link to={`/titles/${id}-${title}`} className="collection__link" data-tip data-for={`${id}`}>
      <p className="collection__item-title">
        {`${num}. ${title}`}
        <span className="collection__item-date">({parseInt(release_date)})</span>
      </p>
      <p className="collection__item-rating">★{vote_average}</p>
    </Link>
    <ReactTooltip
      id={`${id}`}
      className="collection__item-tooltip"
      effect="solid"
      place={document.documentElement.clientWidth > 768 ? 'left' : 'top'}
      delayShow={200}
    >
      <img src={`https://image.tmdb.org/t/p/w92${poster_path}`} alt={`poster for ${title}`} />
    </ReactTooltip>
  </li>
);

class BestMovies extends Component {
  constructor(props) {
    super(props);
    this.infiniteScroll = this.infiniteScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.infiniteScroll = throttle(this.infiniteScroll, 200);
    this.onResize = throttle(this.onResize, 300, { leading: false });
  }

  componentDidMount() {
    this.props.fetchBestMovies(1, 0);
    window.addEventListener('scroll', this.infiniteScroll);
    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate() {
    window.scrollTo(0, this.props.scrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.forceUpdate();
  }

  infiniteScroll() {
    const pageHeight = document.documentElement.scrollHeight;
    const pageScrolled = window.pageYOffset;
    const screenHeight = document.documentElement.clientHeight;
    const needMorePages = pageHeight - pageScrolled - screenHeight - 200 < 0;

    if (needMorePages) {
      this.props.fetchBestMovies(this.props.pagesLoaded + 1, window.pageYOffset);
    }
  }

  render() {
    const bestMovies = this.props.bestMovies.list;

    return (
      <section className="collection">
        <div className="wrap">
          {Boolean(this.props.bestMovies.list.length) &&
          <ul className="collection__list">
            {bestMovies.map((item, num) => (
              <BestMoviesItem
                key={item.id}
                num={num + 1}
                {...item}
              />
            ))}
          </ul>
          }
          {this.props.bestMovies.isFetching &&
            <div style={{ textAlign: 'center' }}>LOADING...</div>
          }
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    bestMovies: state.collections.bestMovies,
    pagesLoaded: state.collections.bestMovies.pagesLoaded,
    scrollPosition: state.collections.bestMovies.scrollPosition,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBestMovies: bindActionCreators(fetchBestMovies, dispatch),
  };
}

BestMovies.propTypes = {
  fetchBestMovies: PropTypes.func.isRequired,
  bestMovies: PropTypes.shape({
    list: PropTypes.array,
    isFetching: PropTypes.boolean,
  }).isRequired,
  pagesLoaded: PropTypes.number.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};

BestMoviesItem.propTypes = {
  num: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BestMovies);
