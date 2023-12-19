const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname,'books.db');
const db = new sqlite3.Database(dbPath);

function createBook(Titel, Forfatter, Forlag, Udgave, Pris) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO Books(Titel, Forfatter, Forlag, Udgave, Pris) VALUES (?, ?, ?, ?, ?)', [Titel, Forfatter, Forlag, Udgave, Pris], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  function getAllBooks() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM Books', async function (err,Books) {
        if (err) {
          reject(err);
        } else {
          resolve(Books);
        }
      });
    });
  }
  module.exports = {
    createBook,
    getAllBooks
  }