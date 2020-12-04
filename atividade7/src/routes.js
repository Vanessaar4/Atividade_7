const routes = () =>{

    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'projetotdig'
    });

    const select = () => {
        con.connect(function (err){
            if(err) throw err;
            con.query('SELECT * FROM aluno', function (err, result, fields) {
                if (err) throw err;
                return result;
            });
        });
    }
}

export default routes;