const db = require('./connection.js')

module.exports = {
    //need a lists of movies and posters
  getListDetail: (listId) => { 
    return new Promise((resolve, reject) => {
      const q = `SELECT l.title, l.description, m.poster, m.mid FROM movie m,
        list_movie lm, list l WHERE l.lid = ? and m.mid = lm.mid and l.lid = lm.lid`
        
      db.query(q, [listId], (error, results) => {
          if (error) reject(error);
          else resolve(results);
      });
    });
  }, 
   
};