const db = require('../connection.axios')

module.exports = {
    getMoviePost: (movieId) => { 
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM movies WHERE id = ?', [movieId], (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
  },  
};