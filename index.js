const { serveVal, serveChangeVal } = require('./serveVal');
const { getIps } = require('./getIps');

console.log('IPv6:', getIps());

serveVal({ port: 1910 });
serveChangeVal(getIps());
