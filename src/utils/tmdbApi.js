const tmdbApi = {
  baseUrl: 'https://api.themoviedb.org/3/',
  key: 'api_key=5d974471b2e6b4bf9f03e0c32040eebc',

  getTitles(query) {
    const searchQuery = encodeURIComponent(query);
    return fetch(`${this.baseUrl}search/movie?${this.key}&query=${searchQuery}`)
      .then(response => response.json(),
            error => console.error(error))
      .then(json => json.results);
  },

  getAdvSearchResults(date, genres, lang, runtime) {
    const dateStr = getDateStr(date);
    const runtimeStr = getRuntimeStr(runtime);
    const genreStr = getGenreStr(genres);

    return fetch(`${this.baseUrl}discover/movie?${this.key}&language=en-US&${dateStr}&${runtimeStr}&${genreStr}&with_original_language=${lang}`)
      .then(response => response.json(),
            error => console.error(error))
      .then(json => json.results);
  },

  getDetails(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}?${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.error(error));
  },

  getVideos(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}/videos?${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.error(error))
      .then(response => response.results);
  },

  getUpcoming() {
    return fetch(`${this.baseUrl}movie/upcoming?${this.key}&language=en-US`)
      .then(response => response.json(),
           error => console.error(error))
      .then(response => response.results);
  },

  getLatestTVShows() {
    return fetch(`${this.baseUrl}tv/on_the_air?${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.error(error))
      .then(response => response.results);
  },

  getBestMovies(page) {
    return fetch(`${this.baseUrl}movie/top_rated?${this.key}&language=en-US&page=${page}`)
      .then(response => response.json(),
            error => console.error(error))
      .then(response => response.results);
  },
};

function getDateStr(date) {
  return `release_date.gte=${date.dateMin}&release_date.lte=${date.dateMin}`;
}

function getRuntimeStr(runtime) {
  return `with_runtime.gte=${runtime.runtimeMin}&with_runtime.lte=${runtime.runtimeMax}`;
}

function getGenreStr(genres) {
  return `with_genres=${encodeURIComponent(genres.toString())}`;
}

export default tmdbApi;
