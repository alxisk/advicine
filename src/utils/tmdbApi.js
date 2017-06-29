const tmdbApi = {
  baseUrl: 'https://api.themoviedb.org/3/',
  key: '5d974471b2e6b4bf9f03e0c32040eebc',

  getTitles(query) {
    const searchQuery = encodeURIComponent(query);
    return fetch(`${this.baseUrl}search/movie?api_key=${this.key}&query=${searchQuery}`)
      .then(response => response.json(),
            error => console.error(error))
      .then(json => json.results);
  },

  getDetails(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}?api_key=${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.error(error));
  },

  getVideos(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}/videos?api_key=${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.error(error))
      .then(response => response.results);
  },
};

export default tmdbApi;
