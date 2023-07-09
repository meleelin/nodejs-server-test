// 引入所需的模組
const express = require("express");

// 建立 Express 應用程式物件
const app = express();

// 路由處理函式
app.get("/", (req, res) => {
  res.send("歡迎使用 Express 應用程式！");
});

// port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on the http://localhost:${port}`);
});
