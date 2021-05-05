const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: '50542',
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connection to server Initialised");
    conn.write('Name: 009')
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
  });

  return conn;
};

module.exports = connect