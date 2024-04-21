import express, { Response } from 'express';
import mysql from 'mysql';
import static_path from 'serve-static';
import path from 'path';
import { fileURLToPath } from 'url';
import dbconfig from './config/dbconfig.json' assert { type: 'json' };

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: dbconfig.host,
  port: dbconfig.port,
  user: dbconfig.nickname,
  password: dbconfig.password,
  database: dbconfig.database,
  debug: false,
});

const addUser = (
  id: string,
  password: string,
  nickname: string,
  res: Response,
) => {
  pool.getConnection((err, conn) => {
    console.log('나 에러야', err);
    if (err) {
      conn.release();
      console.log('Mysql getConnection error. aborted');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
      res.write('<h2>DB 서버 연결 실패</h2>');
      res.end();
      return;
    }

    console.log('데이터베이스 연결');

    const exec = conn.query(
      'insert into users (id, password, nickname) values (?,?,?,password(?))',
      [id, password, nickname],
      (err, result) => {
        conn.release();
        console.log('실행된 SQL: ' + exec.sql);

        if (err) {
          console.log('SQL 실행시 오류 발생');
          console.dir(err);
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
          res.write('<h2>SQL 실행 실패</h2>');
          res.end();
          return;
        }

        if (result) {
          console.dir(result);
          console.log('Insert 성공');
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
          res.write('<h2>사용자 추가 성공</h2>');
          res.end();
        } else {
          console.log('Inserted 실패');
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
          res.write('<h2>사용자 추가 실패</h2>');
          res.end();
        }
      },
    );
  });
};

app.use(express.urlencoded({ extended: true })); // http 요청 url 파싱
app.use(express.json());
app.use('/public', static_path(path.join(__dirname, 'public')));

app.post('/process/adduser', (req, res) => {
  console.log('/process/adduser 호출' + req);

  const paramId = req.body.id;
  const paramPassword = req.body.password;
  const paramNickname = req.body.nickname;

  console.log(paramId, paramPassword, paramNickname);

  addUser(paramId, paramPassword, paramNickname, res);
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
