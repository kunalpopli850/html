let fs=require("fs");
let cheerio=require("cheerio")

let content =fs.readFileSync("./q1.html")
let ch=cheerio.load(content);

//let pkatag=ch("p").text();
let pkatag=ch("p");

console.log(pkatag);
