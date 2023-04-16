import OracleDB from 'oracledb';
import express from 'express';
const app = express();

const dbConfig = {
    user: 'user101',
    password: 'pass101',
    connectString: '10.242.237.74/XE'
};

app.get('/query/:id', (req, res) => {
    const id = req.params.id;
    OracleDB.getConnection(dbConfig, (err, connection) => {
        if (err) {
            console.error(err.message);
            res.send('Error');
            return;
        }
        const query = `SELECT * FROM Crashes WHERE State = ${id}`;
        connection.execute(query, (err, result) => {
            if (err) {
                console.error(err.message);
                res.send('Error');
            } else {
                res.send(result.rows);
            }
            connection.close();
        });
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});