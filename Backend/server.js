const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

app.use(express.json());
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crudapps'
});
   

app.get('/api/v1/users',(req,res) => {
    const sql = 'select * from user';
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/api/v1/users/adduser', (req, res) => {
    const sql = "INSERT INTO user (`Email`, `First_Name`,`Last_Name` ) VALUES (?)";
    const values = [
    req.body.Email,
    req.body.Fname,
    req.body.Lname
    ]
    db.query(sql, [values], (err, data) =>  {
    if(err) return res.json("Error");
    return res.json (data);
    })

})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE `user` SET `Email`=?,`First_Name`=?,`Last_Name`=? WHERE `id`=?";
    const values = [
    req.body.Email,
    req.body.Fname,
    req.body.Lname
    ]
    const id = req.params.id;
    db.query(sql, [...values,id], (err, data) =>  {
    if(err) return res.json("Error");
    return res.json (data);
    })

})

app.delete('/user/:id', (req, res) => {
    const sql = "DELETE FROM user WHERE id = ? ";
    
    const id = req.params.id;
    db.query(sql, [id], (err, data) =>  {
    if(err) return res.json("Error");
    return res.json (data);
    })

})



app.listen(8080,() => {
    console.log('server is working on http://localhost:8080');
})