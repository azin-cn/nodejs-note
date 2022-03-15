/**
 * 导入fs模块，运行
 */

const fs = require('fs');
const path = require('path')

/**
 * 给定一个回调函数，表示成功运行或者失败运行时的回调
 * node的设计是错误先行，所以第一个参数是错误的回调信息
 */

/*
fs.readFile('./1.txt','utf8', function(err, res) {
    console.log(err)
    console.log(res)
})

fs.readFile('./2','utf8',(err,res) => {
    console.log(err)
    console.log(res)
})
*/

/**
 * 演示不同路径下执行读取的错误，路径拼接错误
 */
// fs.readFile('./1.txt','utf8',(err,res) => {
//     console.log(err)
//     console.log(res)
// })


let val = path.join(__dirname,'1.txt')

fs.readFile(path.join(__dirname,'1.txt'),'utf8',(err,res) => {
    console.log(err);
    console.log(res);
})

console.log(path.basename(val));
console.log(path.basename(val,'txt'))
console.log(path.basename(val,path.extname(val)))
