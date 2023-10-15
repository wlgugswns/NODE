const express = require('express');
const cors = require('cors');
const app = express();
const port = 19032;

app.use(cors());

app.get('/hi', hi);
app.listen(port, startServer);

function hi(req, res) {
    res.json({ message: '아무 것도 하기 싫다...' });
}

function startServer() {
    console.log(`서버 시작됨 (http://localhost:${port}/hi)`);
}
