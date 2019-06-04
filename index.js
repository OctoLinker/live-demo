const fetch = require('node-fetch');
const frame = require('./frame'); // <- Click here

// OctoLinker
//
// Navigate through GitHub repositories faster than ever before!
//
// 1. Go to a file in GitHub
// 2. Replace github.com with octolinker-demo.now.sh.
//
// OctoLinker is availble as browser extension for Chrome, Firefox and Opera.
//
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

  let inlineScript = 'window.chrome = window.chrome || {};'
  if (req.url.startsWith('/OctoLinker/live-demo/')) {
    inlineScript += `document.body.classList.add('demo-page');`
  }

  const html = (await response.text())
    .replace(/(href=.)https?:\/\/github.com/g, '$1//' + req.headers.host)
    .replace('</body>', 
      `<script>${inlineScript}</script>
      <script src="/static/octolinker.js"></script></body>`)
    .replace(
      '</head>',
      `<link media="all" href="/static/demo.css" rel="stylesheet" />
      </head>
      ${frame}`
    )
    .replace(
      '<meta name="google-analytics" content="UA-3769691-2">',
      '<meta name="google-analytics" content="UA-88792224-5">'
    )

  const restirctedRoutes = ['https://github.com/login', 'https://github.com/join'];
  if (restirctedRoutes.some(url => response.url.startsWith(url))) {
    return res.end(html.replace(/<body[^>]*>(.*?)<\/body>/is, '<body><div class="pt-5 pb-4 text-center"><h3>For security reasons the login and sign-up page are not accessible in this demo.</h3></div></body>'));
  }
  
  res.end(html);
};