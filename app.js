
const express_pack=require("express");
const express=express_pack();
const path=require("path");

const CyclicDb = require("@cyclic.sh/dynamodb");
console.log(CyclicDb);
const db = CyclicDb("tr9v3db");

const animals = db.collection("animals");

////////////////////////
express.use(express_pack.static(__dirname+'/apps/Task/deepthought/'));
express.use(express_pack.static(__dirname+'/apps/Task/deepthought_1/'));
////////////////////////
express.get("/",(rq,rs)=>{rs.send("Welcome"); });
express.get("/Front",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought/index.html"); });
express.get("/country",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought_1/index.html"); });

express.get("/api/task/deepthought",(rq,rs)=>{rs.sendFile(__dirname+"/json/deepthought/deepthought.json"); });
express.get("/js/tasks/deepthought/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought/ind.js")); });
express.get("/js/tasks/deepthought_1/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought_1/ind.js")); });

express.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
