// Navigates you to the node-fetch project page on GitHub
require('node-fetch') 

// This will bring you to the NodeJS documenation page for this module
require('url') 

// Follows relative imports
require('./index.js') 

// OctoLinker supports many different languages including: 
// composer, docker, go, Haskell, Homebrew, Java, 
// nodejs, python, Ruby, Rust and more

const websiteUrl = "https://octolinker.now.sh";
const chromeUrl = "https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp";
const firefoxUrl = "https://addons.mozilla.org/en-US/firefox/addon/octolinker/";
const operaUrl = "https://addons.opera.com/en/extensions/details/octolinker/";
const edgeUrl = "https://microsoftedge.microsoft.com/addons/detail/lbbanfffjfmfdahnfbklminikafhcjjb";

module.exports = `<div class="demo-frame">
    <div class="warn">
        <span>This is not GitHub.com</span>
    </div>
</div>
<div class="octolinker-header">
    <div class="inner">
        <a href="${websiteUrl}" class="logo" data-ga-click="Header, logo link clicked">
            <h2>OctoLinker Demo</h2>
        </a>
        <div class="cta">
            <p>Like what you see? Install <a href="${websiteUrl}" data-ga-click="Header, text link clicked">OctoLinker</a> now!</p>
            <div class="browser-logos">
                <a href="${chromeUrl}" data-ga-click="Header, go to chrome" rel="nofollow"><img src="/static/chrome.png" width="20"></a>
                <a href="${firefoxUrl}" data-ga-click="Header, go to firefox" rel="nofollow"><img src="/static/firefox.png" width="20"></a>
                <a href="${edgeUrl}" data-ga-click="Header, go to edge" rel="nofollow"><img src="/static/edge.png" width="20"></a>
                <a href="${operaUrl}" data-ga-click="Header, go to opera" rel="nofollow"><img src="/static/opera.png" width="20"></a>
            </div>
        </div>
    </div>
</div>`;
