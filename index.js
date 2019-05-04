const fetch = require('node-fetch');
const demoHeader = require('./components/demo-header');
const demoFrame = require('./components/demo-frame');

// This code runs the demo you are currently looking at.
// Inspired by https://twitter.com/rauchg/status/1123374389863505921
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');
  const html = (await (await fetch('https://github.com' + req.url)).text())
    .replace(/(href=.)https?:\/\/github.com/g, '$1//' + req.headers.host)
    .replace('</body>', '<script src="/static/octolinker.js"></script></body>')
    .replace(
      '</head>',
      `<link media="all" href="/static/demo.css" rel="stylesheet" />
      </head>
      ${demoFrame}${demoHeader}`
    );

  res.end(html);
};
