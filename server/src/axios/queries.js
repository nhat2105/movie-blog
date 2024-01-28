const db = require('./connection.js')

module.exports = {
    getMovieDetail: (movieId) => { 
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM movie WHERE mid = ?', [movieId], (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
  },  
};