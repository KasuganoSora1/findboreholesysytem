express=require("express")
var router = express.Router();
var orm=require("../sql/orm");
var model=require("../sql/class");

/* GET home page. */
router.get('/', function(req, res, next) {
  var x=req.query.x;
  var y=req.query.y;
  var dis=req.query.dis;
  var name=req.query.name;
  if (name != undefined && name != "") {
    var sql_str = "";
    sql_str = sql_str + "project_name like '%" + name + "%'";
    orm.get_list("borehole", sql_str, function (error, re) {
      res.render('index', {
        boreholes: re,
        X: "被关闭",
        Y: "被关闭",
        s:"500",
        name:name
      });
    });
  } else if (x == undefined || y == undefined || x == "" || y == "" || dis == undefined || dis == "") {
    res.render("index", {
      X: "undefined",
      Y: "undefined",
      s: "undefined",
      boreholes: [],
      name:""
    });
  } else {
    //添加搜索功能 4个值均不为undifiend 和 空时
    var sql_str = "";
    sql_str = sql_str + "X>" + (parseFloat(x) - parseInt(dis)).toString();
    sql_str = sql_str + " and X<" + (parseFloat(x) + parseInt(dis)).toString();
    sql_str = sql_str + " and Y>" + (parseFloat(y) - parseInt(dis)).toString();
    sql_str = sql_str + " and Y<" + (parseFloat(y) + parseInt(dis)).toString();
    orm.get_list("borehole", sql_str, function (error, re) {
      var result = [];
      for (var r in re) {
        re[r]["dis"] = Math.sqrt((parseFloat(x) - re[r]["X"]) * (parseFloat(x) - re[r]["X"]) + (parseFloat(y) - re[r]["Y"]) * (parseFloat(y) - re[r]["Y"]));
        if (re[r]["dis"] < parseInt(dis)) {
          result.push(re[r]);
        }
      }
      result.sort(function (a, b) {
        return a.dis - b.dis;
      });
      res.render('index', {
        boreholes: result,
        X: x,
        Y: y,
        s: dis,
        name:""
      });
    });
  };
});

module.exports = router;
