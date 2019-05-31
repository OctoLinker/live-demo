const fetch = require('node-fetch');
const demoHeader = require('./components/demo-header');
const demoFrame = require('./components/demo-frame');

// This code runs the demo you are currently looking at.
// Inspired by https://twitter.com/rauchg/status/1123374389863505921
module.exports = async (req, res) => {
  
  if (req.url === '/') {
    res.writeHead(308, {
      'Location': '/OctoLinker/live-demo/blob/master/index.js#LO2'
    });
    return res.end();
  }

  res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');
  const response = await fetch('https://github.com' + req.url, {
    headers: {
      'User-Agent': req.headers['user-agent'],
    }
  })

  const html = (await response.text())
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

  const restirctedRoutes = ['https://github.com/login', 'https://github.com/join'];
  if (restirctedRoutes.some(url => response.url.startsWith(url))) {
    return res.end(html.replace(/<body[^>]*>(.*?)<\/body>/is, '<body><div class="pt-5 pb-4 text-center"><h3>For security reasons this url is not accessible in this demo.</h3></div></body>'));
  }
  
  res.end(html);
};