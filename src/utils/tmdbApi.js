const tmdbApi = {
  baseUrl: 'https://api.themoviedb.org/3/',
  key: '5d974471b2e6b4bf9f03e0c32040eebc',

  getTitles(query) {
    query = encodeURIComponent(query);
    // query = 'fight club'; //*delete
    console.log('tmdbApi.getTitles()');
    return fetch(`${this.baseUrl}search/movie?api_key=${this.key}&query=${query}`)
      .then(response => response.json(),
            error => console.log(error))
      .then(json => json.results);
  },

  getDetails(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}?api_key=${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.log(error));
  },

  getVideos(titleId) {
    return fetch(`${this.baseUrl}movie/${titleId}/videos?api_key=${this.key}&language=en-US`)
      .then(response => response.json(),
            error => console.log(error))
      .then(response => response.results);
  }
};

export default tmdbApi;
