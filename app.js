const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //url,method
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        //form
        res.setHeader('content-Type', 'text/html');
        fs.readFile("formatValues.txt", (err, data) => {
            res.end(
                `
            <form action="/message" method="POST">
                <label>Name: </label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
            <h1>${data.toString()}</h1>
            `
            )
        })

    } else if (url === '/message') {
        res.setHeader('content-Type', 'text/html');
        const body = [];
        req.on('data', (chunks) => body.push(chunks));
        req.on('end', () => {
            let buffer = Buffer.concat(body);
            console.log(buffer);

            let formData = buffer.toString();
            console.log(formData);

            let formValues = formData.split("=")[1];
            console.log(formValues);

            fs.writeFile("formatValues.txt", formValues, (err) => {
                res.statusCode = 302; // redirected
                res.setHeader('location', '/');
                res.end();
            });
        })

    } else if (url === "/read") {
        // read from the file.
        fs.readFile('formatValues.txt', (err, data) => {
            console.log(data.toString());

            res.end(`<h1>${data.toString()}</h1>`);

        })
    }
})

server.listen(3000, () => {
    console.log("Server is listening");
})