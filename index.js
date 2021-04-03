const { serveVal, serveChangeVal } = require('./serveVal');
const { getIps } = require('./getIps');
const localtunnel = require('localtunnel');
require('dotenv').config();
process.env = Object.assign({ port: 1910 }, process.env);

console.log('IPv6:', getIps());

serveVal({ port: process.env.port });
serveChangeVal(getIps());

(async () => {
  const tunnel = await localtunnel({
    port: process.env.port,
    subdomain: 'ah1910',
  });
  console.log(tunnel.url);
})();
