const express = require("express"),
  app = express();
(http = require("http").createServer(app)), (port = 8001);

const routes = require("./routes/"); // index.js 는 / 와 같으므로 생략 가능
app.use(routes); // use 는 경로에 대한 확장성을 의미한다.

http.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
