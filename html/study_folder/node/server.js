// 用于创建网站服务器的模块
const http = require('http');
// 用于处理url地址
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    // 1.读取文件
    // console.log(req.url);
    // fs.readFile(`./${req.url}`, (err, data) => {
    //     if(err){
    //         res.writeHead(404);
    //         res.end('not found');
    //     }else {
    //         res.end(data);
    //     }
    // })
    // 2.get
    // console.log(url)
    // let query = url.parse(req.url, true);
    // console.log(query);
    // 3. 
    const method = req.method.toLowerCase();
	// 获取请求地址
	const pathname = url.parse(req.url).pathname;

	res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	});
    console.log(method)
	if (method == 'get') {
		if (pathname == '/' || pathname == '/index') {
			res.end('欢迎来到首页')
		}else if (pathname == '/list') {
			res.end('欢迎来到列表页')
		}else {
			res.end('您访问的页面不存在')
		}

	}else if (method == 'post') {

	}
}).listen(8080)