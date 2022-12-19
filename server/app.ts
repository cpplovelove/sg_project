import express from 'express';
import Router from './controller/index.js';

const app = express();
app.use('/api', Router); // use 는 경로에 대한 확장성을 의미한다.
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`✅ Express Server Listening on : http://localhost:${PORT}`);
});
