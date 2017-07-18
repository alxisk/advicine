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

export default tmdbApi;
