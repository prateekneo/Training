let http = require('http');
let url = require('url');
let fs = require('fs');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + req.url;
    console.log(typeof(filename));
    console.log(filename);
    // console.log(q.pathname);
    if(filename == './other-page.html'){
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end("404 Not Found");
            }  
            res.writeHead(200, {'Content-Type': 'text/html'});
            
                res.end(data);
            });
    }
        
//     async function img(){

//         await http.get("http://via.placeholder.com/150", (response) => {

//         console.log(typeof(response));
//         response.setEncoding('base64');
//         let body = "data:" + response.headers["content-type"] + ";base64,";
//         response.on('data', (data) => { body += data});
//         response.on('end', () => {
//             console.log(body);
//             console.log(typeof(body));
//             //let k ='<img src="' + body + '" alt="image">';
//             // document.getElementById('loader').style.display = 'none';
//             // document.getElementById('img_load').innerHTML = k;
//             //return res.json({result: body, status: 'success'});
//         });
//         //res.end();
//         /*response.on('data', function (chunk) {
//             //data.push(chunk);
//             //console.log(data);
//             console.log('BODY: ' + chunk );
//         });*/
//     }).on('error', (e) => {
//         console.log(`Got Error: ${e.message}`);
//     });
//    }
   //img();

   //
}).listen(8080);