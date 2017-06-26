const tmdbApi = {
  key: '5d974471b2e6b4bf9f03e0c32040eebc',

  getTitles(query) {
    query = encodeURIComponent(query);
    // query = 'fight club'; //*delete
    console.log('tmdbApi.getTitles()');
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${query}`)
      .then(response => response.json(),
            error => console.log(error))
      .then(json => json.results);
  }
};

export default tmdbApi;
