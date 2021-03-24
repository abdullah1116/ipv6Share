const config = {
  port: 5050,
  connect: (data) => console.log('connect'),
  listening: (data) => {},
  error: (data) => console.log('error'),
};

module.exports = {
  serveVal: (param) => {
    Object.assign(config, param);
    //
    const server = require('http').createServer(function (req, res) {
      try {
        res.end(
          (() => {
            try {
              return JSON.stringify(config.value);
            } catch (e) {
              return config.value;
            }
          })()
        );
      } catch (e) {
        return e;
      }
    });

    server.on('error', config.error);
    server.on('listening', config.listening);
    server.listen(config.port);
    console.log('listening', config.port);
  },
  serveChangeVal: (value) => {
    config.value = value;
  },
};
