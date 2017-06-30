/**
 * Created by jack on 17/6/28.
 */

var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    var url = req.url;
    //设置默认页面开始样式
    switch (url){

        case "/":

            fs.readFile("bridge.jpg", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.end(data);
            }
        });
            break;

        console.log(url);

    //第一张跳转页面
        case "/index01.html":

            fs.readFile("index01.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
            break;

        case "/IMG_1785.jpg":

            fs.readFile("IMG_1785.jpg", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.end(data);
            }
        });
            break;

    //第二张跳转页面
        case "/index02.html":

            fs.readFile("index02.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
            break;

        case "/IMG_1995.jpg":

            fs.readFile("IMG_1995.jpg", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.end(data);
            }
        });
            break;

    //第三张跳转页面
        case "/index03.html":

            fs.readFile("index03.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
            break;


        case "/IMG_1792.jpg":

            fs.readFile("IMG_1792.jpg", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.end(data);
            }
        });
            break;

    //第四张跳转页面
        case "/index04.html":

            fs.readFile("index04.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
            break;

        case "/IMG_2450.jpg":

            fs.readFile("IMG_2450.jpg", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.end(data);
            }
        });
            break;

        default:
            res.end("404");

            break;

    }

}).listen(3000);