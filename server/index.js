const express = require('express')
const db = require('./config/db');
const cors = require('cors');

const app = express()

const PORT = 3001
app.use(cors());
app.use(express.json());

app.get("/api/getFromID/:id", (req, res)=> {
    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log(err);
            }
          res.send(res);
        });
});

app.get("/api/get", (req, res)=> {
    db.query(
        "SELECT * FROM posts",
        (err, res) => {
            if (err){
                console.log(err);
            }
          res.send(res)
        });
});

app.post('/api/create', (req,res)=> {

    const creator = req.body.creator;
    const title = req.body.title;
    const content = req.body.content;
    db.query(`INSERT INTO posts('title', 'content', 'creator') VALUES (${title},${content},${creator})`,
    (err, result) =>{
        if(err){
            console.log(err);
        }
        
        console.log(result);
    });
});



app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});