# User Authentification basic

### api setting

1. GET: <http://localhost:3000/users>

2. POST: <http://localhost:3000/users>
JSON CONTENT
{
  "name": "Kyle",
  "password": "password1"
}

3. POST: <http://localhost:3000/users/login>
JSON CONTENT
{
  "name": "Kyle",
  "password": "password1"
}

-> password1 -> success\
-> password2 -> Not allowed

1번 api - user 확인\
2번 api - user 생성\
3번 api - user 검증(로그인)
