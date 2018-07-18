webpackJsonp([25663703906378],{361:function(n,s){n.exports={data:{page:{id:"C:/Users/Greg/_dev/mynpms/react-custom-share/docs/content/pages/4--share-button-rectangle/index.md absPath of file >>> MarkdownRemark",html:'<h2>Demo</h2>\n<p><a href="../live-share-button-rectangle">Live demo</a></p>\n<h2>Description</h2>\n<p><code class="language-text">ShareButtonRectangle</code> is one of the built-in <code class="language-text">react-custom-share</code>styled buttons.</p>\n<p>It renders the base <code class="language-text">ShareButton</code> component with some styling.</p>\n<h2>Usage</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> FaTwitter <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/twitter"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaFacebook <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/facebook"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaGooglePlus <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/google-plus"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaEnvelope <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/envelope"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaPinterest <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/pinterest"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaLinkedin <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/linkedin"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ShareButtonRectangle<span class="token punctuation">,</span> ShareBlockStandard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-custom-share"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> shareBlockProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"https://github.com/greglobinski/react-custom-share"</span><span class="token punctuation">,</span>\n    button<span class="token punctuation">:</span> ShareButtonRectangle<span class="token punctuation">,</span>\n    buttons<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Twitter"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaTwitter <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Facebook"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaFacebook <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"GooglePlus"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaGooglePlus <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Email"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaEnvelope <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        network<span class="token punctuation">:</span> <span class="token string">"Pinterest"</span><span class="token punctuation">,</span>\n        icon<span class="token punctuation">:</span> FaPinterest<span class="token punctuation">,</span>\n        media<span class="token punctuation">:</span>\n          <span class="token string">"https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Linkedin"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaLinkedin <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">"Give it a try - react-custom-share component"</span><span class="token punctuation">,</span>\n    longtext<span class="token punctuation">:</span>\n      <span class="token string">"Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ShareBlockStandard <span class="token punctuation">{</span><span class="token operator">...</span>shareBlockProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>ShareButtonRectangle’s props</h2>\n<p>The same as <a href="../share-button">ShareButton</a></p>',frontmatter:{title:"<ShareButtonRectangle />"}},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/share-button-rectangle/"}}}});
//# sourceMappingURL=path---share-button-rectangle-a888d5b605bb7ab152eb.js.map