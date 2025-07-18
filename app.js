const http = require("http");
const routes=require("./routes");
const server = http.createServer(routes.handler);

routes.test();

server.listen(3000, () => {
    console.log("Server is listening");
})