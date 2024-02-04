const db = require('./connection.js')

module.exports = {
    getAllMovies: () => { 
        return new Promise((resolve, reject) => {
        const q = 'SELECT mid, title, poster FROM movie ORDER BY title asc'
        db.query(q, (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
        });
    }
}