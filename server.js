const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

//application to accept json
app.use(express.json())

let users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const user = {name: req.body.name, password: req.body.password}
    users.push(user)
    res.status(201).send()
    hash(salt + 'password') //password 암호화해서 저장 salt는 비밀번호 같은 사람도 다르게 저장하기 위해서 -> 보안 훨씬 강화됨
})

app.listen(3000);