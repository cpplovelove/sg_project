import express from 'express';
import Router from './controller/index.js';
import db from './models/index.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', Router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await db.sequelize.authenticate().then(() => {
    console.log('✅ MySQL Database connection is successful');
  });
  console.log(`✅ Express Server Listening on : http://localhost:${PORT}`);
});
