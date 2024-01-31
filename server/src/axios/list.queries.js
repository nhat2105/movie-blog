const db = require('./connection.js')

module.exports = {
  getLists: () => {
    return new Promise((resolve, reject) => {
      const q = `SELECT * from list order by lid`
        
      db.query(q, (error, results) => {
          if (error) reject(error);
          else resolve(results);
      });
    });
  },

    //need a lists of movies and posters
  getListDetail: (listId) => { 
    return new Promise((resolve, reject) => {
      const q = `SELECT l.title, l.description, lm.item_id, m.poster, m.mid FROM movie m,
        list_movie lm, list l WHERE l.lid = ? and m.mid = lm.mid and l.lid = lm.lid
        order by lm.item_id asc`
        
      db.query(q, [listId], (error, results) => {
          if (error) reject(error);
          else resolve(results);
      });
    });
  }, 
   
};