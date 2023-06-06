var sql=require("mysql");
var __class__=require("./class")
function get_list(name_str,where_str,callback){
    var result=[];
    var sql_str="select * from "+name_str+" where "+where_str;
    var conn=sql.createConnection({
        host:"localhost",
        user:"root",
        password:"192831",
        database:"findboreholesystem"
    });
    conn.connect();
    conn.query(sql_str,function(error,re){
        if(error!=null){
            callback([],true);
        }else{
            for (r in re) {
                var o = eval("new __class__." + name_str + "()");
                for (let key in re[r]) {
                    o[key]=re[r][key];
                }
                result.push(o);
            }

            callback(false,result);
            conn.end();
        }
    });
}
exports.get_list=get_list