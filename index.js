const fetch = require('node-fetch');
const demoHeader = require('./components/demo-header');
const demoFrame = require('./components/demo-frame');

// This code runs the demo you are currently looking at.
// Inspired by https://twitter.com/rauchg/status/1123374389863505921
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');
  const html = (await (await fetch('https://github.com' + req.url, {
    headers: {
      'User-Agent': req.headers['user-agent'],
    }
  })).text())
    .replace(/(href=.)https?:\/\/github.com/g, '$1//' + req.headers.host)
    .replace('</body>', 
      `<script>window.chrome = window.chrome || {}</script>
      <script src="/static/octolinker.js"></script></body>`)
    .replace(
      '</head>',
      `<link media="all" href="/static/demo.css" rel="stylesheet" />
      </head>
      ${demoFrame}${demoHeader}`
    )
    .replace(
      '<meta name="google-analytics" content="UA-3769691-2">',
      '<meta name="google-analytics" content="UA-88792224-5">'
    )

  res.end(html);
};