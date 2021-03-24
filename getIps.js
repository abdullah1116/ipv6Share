module.exports = {
  getIps: (prams = undefined) => {
    const os = require('os');

    let props = {
      family: 'IPv6',
      exclude: ['::1'],
    };
    props = { ...props, prams };
    //

    return Object.keys(os.networkInterfaces())
      .map((key) => {
        return os
          .networkInterfaces()
          [key].filter((data) => data.family == props.family)
          .map((data) =>
            props.exclude.indexOf(data.address) ? data.address : undefined
          );
      })
      .flat()
      .filter((data) => !!data);
  },
};
