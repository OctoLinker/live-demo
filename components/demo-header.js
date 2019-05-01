const websiteUrl = 'https://octolinker.now.sh';
const chromeUrl =
  'https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp';
const firefoxUrl = 'https://addons.mozilla.org/en-US/firefox/addon/octolinker/';
const operaUrl = 'https://addons.opera.com/en/extensions/details/octolinker/';

module.exports = `<div class="octolinker-header">
    <div class="warn">
        <span>This is not GitHub.com</span>
    </div>
    <div class="inner">
        <a href="${websiteUrl}">
            <img src="${websiteUrl}/static/octolinker.png" height="30" alt="OctoLinker – browser extension for GitHub">
        </a>
        <h2>OctoLinker Demo</h2>
        <div class="cta">
            <p>Like what you see? Install <a href="${websiteUrl}">OctoLinker</a> now!</p>
            <div class="browser-logos">
                <a href="${chromeUrl}" rel="nofollow"><img src="/static/chrome.png" width="20"></a>
                <a href="${firefoxUrl}" rel="nofollow"><img src="/static/firefox.png" width="20"></a>
                <a href="${operaUrl}" rel="nofollow"><img src="/static/opera.png" width="20"></a>
            </div>
        </div>
    </div>
</div>`;