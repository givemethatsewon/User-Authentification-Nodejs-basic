const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

//application to accept json
app.use(express.json())

let users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        //const salt = await bcrypt.genSalt() default == 10이라서 bycript.hash()에 한번에 적을 수 있음
        const hashedPassword = await bcrypt.hash(req.body.password, 10) //password 암호화해서 DB에 저장: salt는 비밀번호 같은 사람도 다르게 저장하기 위해서 -> 보안 훨씬 강화됨 
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) { //첫번째 매개변수: 서버로 넘어온 password, 두번째 매개변수: 서버에 있는 hashedPassword
            res.status(200).send('Success')
        } else {
            res.status(200).send('Not allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000);