const sqlite3 = require('sqlite3').verbose();

const db = {
  sql : new sqlite3.Database('./database.db', console.log('Connected to SQLite3 server')),

  findUser : function(username, password, callback){
    let value =  false;

    this.sql.get('SELECT * FROM userdata WHERE username = ?', [username], (err, row)=>{
      if(row.password == password){ // debe cambiar a un compare con el decode que se seleccione
        value = true;
      }
      callback(value);
    })
  },
  findByUsername: function(username, callback){
    let value = false;
    this.sql.get('SELECT * FROM userdata WHERE username = ?', [username], (err, row)=>{
      if(row){
        value = true;
      }
      callback(value);
    });
  }
}

module.exports = db;