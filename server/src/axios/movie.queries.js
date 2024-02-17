const db = require('./connection.js')

module.exports = {
  getMovieDetail: (movieId) => { 
    return new Promise((resolve, reject) => {
      const q = 'SELECT * FROM movie, review WHERE movie.mid = ? and movie.rid = review.rid'
      db.query(q, [movieId], (error, results) => {
          if (error) reject(error);
          else resolve(results);
      });
    });
  }, 
  
  getGallery: (movieId) => { 
    return new Promise((resolve, reject) => {
      const q = 'SELECT url FROM movie_shots WHERE mid = ?'
      db.query(q, [movieId], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },
  
  getRef: (movieId) => { 
    return new Promise((resolve, reject) => {
      const q = 'SELECT url, poster, rid FROM movie_references WHERE mid = ?'
      db.query(q, [movieId], (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },  
};