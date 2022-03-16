const Serve = require('./server.js');

function main () {
    const srv = new Server(3000);
    srv.initServer();
}
main();