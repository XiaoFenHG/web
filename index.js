const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置EJS模板引擎
app.set('view engine', 'ejs');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 主页路由
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
