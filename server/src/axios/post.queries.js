const db = require('./connection.js')

module.exports = {
    getPosts: () => {
        return new Promise((resolve, reject) => {
        const q = `SELECT * from post order by pid desc` 
            
        db.query(q, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
        });
    },

    //need a lists of post type, post description, post_scenes,
    //movie id, movie poster, movie title
    getPostDetail: (postId) => { 
        return new Promise((resolve, reject) => {
        const q = `SELECT p.type, p.description, p.rating, m.poster, m.mid, m.title, ps.scene_one, ps.scene_two
            FROM movie m, post_scenes ps, post p WHERE p.pid = ? and m.mid = p.mid and ps.pid = p.pid`
            
        db.query(q, [postId], (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
        }); 
  }, 
   
};