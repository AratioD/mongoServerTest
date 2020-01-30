const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    //I know this is not a best practice, but this is just a test
    password: 'NytTestataanMariaDB2020',
    database: 'bookstoredb',
    connectionLimit: 5

});
pool.getConnection()
    .then(conn => {
        conn.query("SELECT * FROM authorstbl")
            .then((rows) => {
                console.log(rows); 
                //Table must have been created before 
                let value = "INSERT INTO authorstbl (AuthorName) VALUES ('Mika Hakkinen')"
                //return conn.query("INSERT INTO authorstbl (AuthorName) VALUES ('Mika Hakkinen');
                conn.query(value, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                })

                console.log(rows)
            })
            .then((res) => {
                conn.end();
            })
            .catch(err => {
                //handle error
                console.log(err);
                conn.end();
            })

    }).catch(err => {
        print("not connected")
    });




