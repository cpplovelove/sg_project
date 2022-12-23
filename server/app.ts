import express from 'express';
import Router from './controller/index.js';
import db from './models/index.js';
import bodyParser from 'body-parser';
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import cookieParser from 'cookie-parser'

const app = express();
const FileStore = sessionFileStore(session)


app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  httpOnly: true,
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true
  },
  store: new FileStore()
}));


app.use('/api', Router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await db.sequelize.authenticate().then(() => {
    console.log('✅ MySQL Database connection is successful');
  });
  console.log(`✅ Express Server Listening on : http://localhost:${PORT}`);
});
