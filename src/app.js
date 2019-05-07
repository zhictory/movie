const Express = require("express");
const cors = require("cors");
const router = Express.Router();
const Movie = require("../back/db").Movie;
const app = new Express();

router.get("/api/movie/list", (req, res) => {
  Movie.find(function(err, docs) {
    // count 返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
    if (docs) {
      console.log("找到所有电影");
      res.send(docs);
    } else {
      console.log("找不到任何电影");
    }
  });
});

router.patch("/api/movie/watched", (req, res) => {
  Movie.updateOne({ title: req.body.title }, { watched: req.body.watched }, function(err, docs) {
    res.end();
  });
});

router.post("/api/movie/add", (req, res) => {
  console.log(req.body);
  
  Movie.create(req.body, function(err, docs) {
    res.end();
  });
});

app.use(Express.json());
app.use(Express.urlencoded());
app.use(cors());
app.use(router);
app.listen(9999);
