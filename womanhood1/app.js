var express    = require("express"),
    app        = express(),
    bodyparser = require("body-parser"); 




app.use(bodyparser.urlencoded({extended:true}));
app.use('/public',express.static('public'));

app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("index");
})

app.post("/predict",function(req,res){
  
});
let port=process.env.PORT;
if(port==null||port==""){
  port=2500;
}
app.listen(port, function () {
  console.log("Server started successfully at port 2500");
});
