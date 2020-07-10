!function(){"use strict";class e{static compile(t,o){const r=e._processTemplate(t);e._diff(r,o),e._updateChildren(r,o)}static createTemplate(e,t){const o=document.createElement("template");let r=[];return o.innerHTML=e.reduce((e,o,i)=>{const a=t[i]||"";if(o.match(/( on.*="?$)/)&&"function"==typeof a)return r.push(a),e+o+"{{e}}";if(o.match(/( .*=$)/))return e+o+`"${a}"`;if("object"==typeof a&&a.template)return r=r.concat(a.events),e+o+a.template.innerHTML;if(Array.isArray(a)&&a[0]&&a[0].template){let t="";for(let e of a)r=r.concat(e.events),t+=e.template.innerHTML;return e+o+t}return e+o+a},""),{template:o,events:r}}static _processTemplate({template:e,events:t}){const o=document.createTreeWalker(e.content,1);let r=o.nextNode(),i=0;for(;r;){if(r.attributes)for(let e of r.attributes){const o=t[i];e.value.match(/{{e}}/)&&(r.addEventListener(e.localName.slice(2),o),r.removeAttribute(e.localName),i++)}r=o.nextNode()}return e.content}static _walk(t,o){return o?t?t.tagName!=o.tagName?t:(e._diff(t,o),e._updateChildren(t,o),o):null:t}static _diff(t,o){1==t.nodeType?e._updateAttributes(t,o):3!=t.nodeType&&8!=t.nodeType||o.nodeValue!=t.nodeValue&&(o.nodeValue=t.nodeValue),"INPUT"==t.nodeName&&e._updateInput(t,o),"OPTION"==t.nodeName&&e._updateAttribute(t,o,"selected"),"TEXTAREA"==t.nodeName&&e._updateTextArea(t,o)}static _updateChildren(t,o){let r=0;for(let i=0;;i++){const a=o.childNodes[i],s=t.childNodes[i-r];if(!a&&!s)break;if(s)if(a)if(e._isSameNode(s,a)){const t=e._walk(s,a);t!=a&&(o.replaceChild(t,a),r++)}else{let t=null;const n=o.childNodes.length;for(let r=i;r<n;r++)if(e._isSameNode(o.childNodes[r],s)){t=o.childNodes[r];break}if(t){const i=e._walk(s,t);i!=t&&r++,o.insertBefore(i,a)}else if(s.id||a.id)o.insertBefore(s,a),r++;else{const t=e._walk(s,a);t!=a&&(o.replaceChild(t,a),r++)}}else o.appendChild(s),r++;else o.removeChild(a),i--}}static _updateAttributes(e,t){const o=t.attributes,r=e.attributes;let i=r.length-1;for(let e=i;e>=0;--e){const o=r[e];o.namespaceURI?t.getAttributeNS(o.namespaceURI,o.localName)!=o.value&&t.setAttributeNS(o.namespaceURI,o.localName,o.value):t.hasAttribute(o.localName)?t.getAttribute(o.localName)!=o.value&&("null"==o.value||"undefined"==o.value?t.removeAttribute(o.localName):t.setAttribute(o.localName,o.value)):t.setAttribute(o.localName,o.value)}i=o.length-1;for(let r=i;r>=0;--r){const i=o[r];i.specified&&(i.namespaceURI?e.hasAttributeNS(i.namespaceURI,i.localName)||t.removeAttributeNS(i.namespaceURI,i.localName):e.hasAttributeNS(null,i.localName)||t.removeAttribute(i.localName))}}static _updateAttribute(e,t,o){e[o]!=t[o]&&(t[o]=e[o],e[o]?t.setAttribute(o,""):t.removeAttribute(o))}static _updateInput(t,o){e._updateAttribute(t,o,"checked"),e._updateAttribute(t,o,"disabled"),t.indeterminate!=o.indeterminate&&(o.indeterminate=t.indeterminate),t.value!=o.value&&(o.setAttribute("value",t.value),o.value=t.value),"null"==t.value&&(o.value="",o.removeAttribute("value")),t.hasAttributeNS(null,"value")?"range"==o.type&&(o.value=t.value):o.removeAttribute("value")}static _updateTextArea(e,t){e.value!=t.value&&(t.value=e.value),t.firstChild&&t.firstChild.nodeValue!=e.value&&(t.firstChild.nodeValue=e.value)}static _isSameNode(e,t){return e.id?e.id==t.id:e.tagName==t.tagName&&(3==e.type&&e.nodeValue==t.nodeValue)}}class t{set(e){this.prototype=Object.assign(this,e)}static create(e){return new Proxy(new t,{set:(o,r,i)=>"prototype"==r||o[r]==i||(null!=o[r]?(o[r]=i,e(r,i),!0):Array.isArray(i)?(o[r]=t.createArrayProxy(i,e),!0):(o[r]=i,!0))})}static createArrayProxy(e,o){return new Proxy(e,{set:(e,r,i)=>"prototype"==r||e[r]==i||(Array.isArray(i)?(e[r]=t.createArrayProxy(i,o),!0):(e[r]=i,o(r,i),!0))})}}class o extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.state=t.create(()=>{e.compile(this.render(),this.root)})}connectedCallback(){e.compile(this.render(),this.root),this.didLoad()}disconnectedCallback(){this.willUnload()}render(){}didLoad(){}willUnload(){}static register(e,t){window.customElements.define(e,t)}}function r(t,...o){return e.createTemplate(t,o)}var i,a;o.register("hamburger-menu",class extends o{style(){return r`<style>#bar1,#bar2,#bar3{width:35px;height:5px;margin:5px;background-color:#fff;border-radius:10px}.toggled #bar1{transform:rotate(-45deg) translate(-7px,6px)}.toggled #bar2{opacity:0}.toggled #bar3{transform:rotate(45deg) translate(-7px,-6px)}.toggled *{transition:transform .4s ease}</style>`}render(){return r`${this.style()}<div id="container" onclick="${this.animate.bind(this)}" ontouchstart="${this.animate.bind(this)}"><div id="bar1"></div><div id="bar2"></div><div id="bar3"></div></div>`}animate(e){e.preventDefault(),this.root.getElementById("container").classList.toggle("toggled")}}),o.register("nirvan-header",class extends o{style(){return r`<style>header{display:flex;justify-content:space-evenly;position:fixed;top:0;height:85px;width:100%}nav{display:flex;justify-content:space-between;width:100%;margin:20px}nav #navbar{display:flex;justify-content:space-between;width:100%}nav a{color:#ddd;font-size:20px;font-weight:100;text-decoration:none;text-transform:lowercase}nav a:hover{color:#ca733e}nav #links a{border-bottom:2px solid #ddd}nav #links a:hover{border-bottom:2px solid #ca733e}nav #logo{width:50px;height:50px;transform:translateY(-10px)}nav #social-icons{display:flex;justify-content:flex-end;width:100%}nav #social-icons img{width:25px;height:25px;margin:0 10px 0 10px}nav #burger{display:none;cursor:pointer}@media screen and (max-width:800px){nav #burger{display:block}nav #links{display:none}nav #navbar{justify-content:flex-start}nav #social-icons{display:none}#navbar #links.mobile{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:fixed;top:85px;left:0;width:100%;height:100%;background-color:#141414}}</style>`}render(){return r`${this.style()}<header><nav><div id="navbar"><div id="links"><a href="/"><span>Home</span></a></div><a href="/"><img id="logo" src="${"./assets/f920a9dc2707162f.png"}" alt="Nirvan's Brickseek"></a></div><div id="social-icons"><a href="https://twitter.com/nirvanbrickseek" target="_blank" rel="noreferrer"><img src="${"./assets/d9b0310dde33d916.svg"}" alt="Follow us on Twitter"> </a><a href="https://www.tiktok.com/@nirvansbrickseek?lang=en" target="_blank" rel="noreferrer"><img src="${"./assets/23be242d73655340.svg"}" alt="Follow us on Tiktok"> </a><a href="https://instagram.com/nirvansbrickseek" target="_blank" rel="noreferrer"><img src="${"./assets/2b2e9646311bda43.svg"}" alt="Follow us on Instagram"></a></div><hamburger-menu id="burger" onclick="${this.toggleMobile.bind(this)}"></hamburger-menu></nav></header>`}toggleMobile(e){e.preventDefault();const t=this.root.querySelector("#links");t.classList.toggle("mobile"),t.classList.contains("mobile")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}didLoad(){window.innerWidth>800&&window.addEventListener("scroll",()=>{window.pageYOffset>130?this.root.querySelector("#logo").style.visibility="hidden":this.root.querySelector("#logo").style.visibility="visible"},{passive:!0})}}),o.register("nirvan-banner",class extends o{style(){return r`<style>section{display:flex;flex-direction:column;align-items:center;margin-top:100px}#banner{display:flex;flex-direction:column}#banner img{max-width:600px;width:100%;height:auto}#banner p{color:#ddd;text-align:center;font-size:20px}#buttons{display:flex;margin-top:20px}#buttons button{background:0 0;border:2px solid #ddd;border-radius:4px;font-family:Futura,sans-serif;color:#ddd;font-size:1.2rem;padding:.3rem;width:300px;cursor:pointer;margin:1rem 10px;user-select:none}#buttons button:hover{background-color:#ddd;color:#000}#buttons button:hover span{display:none}#buttons button:hover:before{content:"Sold Out!"}#join-us{background:0 0;border:2px solid #185fc0;border-radius:4px;font-family:Futura,sans-serif;color:#ddd;font-size:1.2rem;padding:.3rem;width:300px;cursor:pointer;user-select:none}#join-us:hover{background-color:#185fc0;color:#000}</style>`}render(){return r`${this.style()}<section><div id="banner"><img src="${"./assets/fce655b223c27be8.png"}" alt="Nirvan's Brickseek"><p>Make a second source of income on your own time.</p></div><div id="buttons"><button onclick="${this.scrollToJoin}"><span>Buy Membership</span></button></div><button id="join-us" onclick="${()=>window.open("https://discord.gg/WFV4DQz","_blank")}">Join Our Discord Waiting Room</button></section>`}scrollToJoin(){const e=document.querySelector("#faq"),t=e.root.querySelector("#how-do-i-join");e.scrollIntoView(),t.classList.toggle("fade-border-element")}}),o.register("nirvan-offerings",class extends o{style(){return r`<style>section{display:flex;flex-direction:column;align-items:center;margin-top:75px}#section-title{color:#ddd;font-size:50px;border-bottom:2px solid #ca733e}#offerings{display:grid;grid-template-columns:repeat(3,minmax(300px,1fr));grid-template-rows:auto;grid-gap:1rem;width:80%}.offering{padding:20px;font-size:30px;border:2px solid #185fc0;border-radius:30px}.offering:hover{border:2px solid #ca733e}.offering h2{font-size:25px;text-align:center;color:#185fc0}.offering p{font-size:16px;color:#ddd}@keyframes fade-in{from{opacity:0;transform:scale(.7,.7)}to{opacity:1}}.fade-in-element{animation:fade-in 1.4s}@media screen and (max-width:800px){#offerings{width:95%}}@media screen and (max-width:1100px){#offerings{grid-template-columns:1fr}}</style>`}render(){return r`${this.style()}<section><h1 id="section-title">What We Offer</h1><div id="offerings"><div class="offering fade-in-element"><h2>Exclusive Info 😈</h2><p>Nowadays, almost every group has info for items dropping. But we’re not every group. <u>We take it one step further, with our stock numbers, early links, scripts, and bypasses.</u> On top of that, we cook items exclusive to only our group.</p></div><div class="offering fade-in-element"><h2>🤖 > 🧑</h2><p>Nirvan’s Brickseek does not rely on humans for a majority of our flips. 70% of our price errors and instore flips come from <u>machine learning algorithms</u> scouring the internet, <u>making sure we leave no rock unturned.</u> This reflects in our posts, as we find every sellable item, days or weeks before every other group. Why rely on a process that includes human errors?</p></div><div class="offering fade-in-element"><h2>1 on 1 Focus 🔎</h2><p>A lot of groups sell as many memberships as possible. We intentionally keep membership stock as low as possible. We make sure that our staff and infrastructure can <u>put the current members first.</u> We hold 1 on 1 sessions to ensure every member is able to cook, and hold voice sessions to facilitate learning and discussion. All of our members will attest to the fact that any time they’ve had a problem, we’ve made a substantial effort to solve it.</p></div><div class="offering fade-in-element"><h2>The Extra Mile 🥇</h2><p>It’s easy for a group to pay their way to the top providers. On top of the info and items, through our connections, <u>we make getting and reselling items as easy as possible.</u> We have groupbuys for some of the best tools in the game, bulk cashout providers, lengthy guides for every selling platform, along with an abundance of tools like ebay viewers and <u>free slots for all members.</u></p></div><div class="offering fade-in-element"><h2>Services 🍴</h2><p>Although we focus on the resell world, that does not mean our service ends there. <u>From sunrise, to sunset, we’re there for our members.</u> We have a section just for personal deals, discounted food, and homework help - ensuring that in and out of our group, you’re eating.</p></div><div class="offering fade-in-element"><h2>Community 👫</h2><p>An issue we’ve heard from a lot of our members about other groups is the lack of a community. We’ve sought out to fix that from day 1, via our active chat, Q&A sessions, and family feel. From the outside, that’s really hard to understand, so we’ve decided to <u>link a couple of our members' testimonials below, and let them show what we have to offer themselves.</u></p></div></div></section>`}}),o.register("nirvan-testimonials",class extends o{constructor(){super()}style(){return r`<style>section{display:flex;flex-direction:column;align-items:center;margin-top:75px}#section-title{color:#ddd;font-size:50px;border-bottom:2px solid #ca733e}#quotes{display:grid;grid-template-columns:auto;grid-template-rows:repeat(3,auto-fill);grid-gap:1rem;width:80%}.quote{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;font-size:20px;color:#ddd}q{margin:15px}.author{color:#ca733e}.author::before{content:"- "}@media screen and (max-width:800px){#quotes{width:95%}}</style>`}render(){return r`${this.style()}<section><h1 id="section-title">Testimonials</h1><div id="quotes"><div class="quote"><q>Beginning of may, just starting to get eBay sales. I thought I was doing big things. May 25th, I have 30x my sales. Made easily 20,000$ profit within a span of 2-3 weeks. nirvan is the fucking GOAT. Lots of sleepless nights and backbreaking lifting, but it is all worth it. I paid off the car I got 1 week into brickseek 2x over within 2-3 weeks. Not many people can say that.</q><p class="author">RekapKicks#1278</p></div><div class="quote"><q>You can make an insane amount of money from being in this group and profit is all scalable. The more work you put in, the more you make. Even if you do it on the side or you’re doing it full time, you’re going to make money. There’s fast monitors, easy to understand guides, and 1:1 support with staff. There’s no reason why you shouldn’t join.</q><p class="author">Colten#6202</p></div><div class="quote"><q>Nirvan's Brickseek: Only one thing I can say, and that is truly amazing. The best monitors, flips, discounted food, heck even HQ trivia answers. This is a one of a kind group that I am proud to be apart of.</q><p class="author">HyPix#7001</p></div></div></section>`}}),o.register("nirvan-faq",class extends o{style(){return r`<style>section{display:flex;flex-direction:column;align-items:center;margin-top:75px}#section-title{color:#ddd;font-size:50px;border-bottom:2px solid #ca733e}#faq{display:flex;flex-direction:column;width:80%}.q-a{padding:10px}.q-a h3{color:#185fc0;font-size:30px}.q-a p{color:#ddd;font-size:20px}.q-a p a{color:#ca733e;text-decoration:none;border-bottom:2px solid #ca733e}@keyframes fade-border{0%{border-color:#ca733e}100%{border-color:transparent}}.fade-border-element{border:2px solid transparent;border-radius:30px;animation:fade-border 2s}@media screen and (max-width:800px){#faq{width:95%}}</style>`}render(){return r`${this.style()}<section><h1 id="section-title">FAQ</h1><div id="faq"><div class="q-a"><h3>What is this group for?</h3><p>Nirvan’s Brickseek is a group focused on reselling. We find items that are heavily discounted instores, or have an extreme demand online, and use tools and monitors to acquire them, with the intentions of reselling them on sites like ebay.</p></div><div id="how-do-i-join" class="q-a"><h3>How do I join?</h3><p>Memberships are 20 dollars a month and will auto charge every month unless cancelled. Memberships are currently limited, so wait for us to announce a restock or giveaway on our <a href="https://twitter.com/nirvanbrickseek" target="_blank" rel="noreferrer">twitter.</a></p></div><div class="q-a"><h3>Why should I join?</h3><p>Maybe you need some extra cash. Maybe you’re bored. Maybe, you want to get into the world of reselling. Either way, Nirvan’s Brickseek will be the right fit for you.</p></div><div class="q-a"><h3>What is brickseek?</h3><p>Brickseek is a website in which one can find heavily marked down items. In the group, we post ones that can be used to make profit by selling locally, or on ebay. However, there will be some personal deals included that aren't profitable, but are marked down heavily and are good products for in real life uses.</p></div><div class="q-a"><h3>So what do we do with this info?</h3><p>So brickseek allows us to find products that are discounted. Thats it. However, thats where we come in! We have created a setup to find the best items with the highest profits. So whether the cooks are online or in store, they're meant to be flipped for profit. Sometimes, we might post some personal deals, but only if they're super good!</p></div><div class="q-a"><h3>Where do I sell this stuff?</h3><p>A lot of brickseek items get sold the fastest on ebay. However sometimes there are items that are better suited to be sold in real life, locally. Here you can use craigslist, offerup, facebook marketplace -- whatever works for you.</p></div></div></section>`}}),o.register("nirvan-footer",class extends o{style(){return r`<style>footer{display:flex;flex-direction:column;align-items:center;color:#ddd;margin-top:75px}nav a{text-decoration:none;text-transform:lowercase;color:#ddd;border-bottom:2px solid #ddd}nav a:hover{color:#ca733e;border-bottom:2px solid #ca733e}#social-icons{margin-top:20px}#social-icons a{text-decoration:none}#social-icons img{width:25px;height:25px;margin:0 10px 0 10px}span{margin:20px 0 20px 0;font-size:14px}span a{text-decoration:none;color:#ddd;border-bottom:2px solid #ddd}span a:hover{color:#ca733e;border-bottom:2px solid #ca733e}</style>`}render(){return r`${this.style()}<footer><nav><a href="/">Home</a></nav><div id="social-icons"><a href="https://twitter.com/nirvanbrickseek" target="_blank" rel="noreferrer"><img src="${"./assets/d9b0310dde33d916.svg"}" alt="Follow us on Twitter"> </a><a href="https://www.tiktok.com/@nirvansbrickseek?lang=en" target="_blank" rel="noreferrer"><img src="${"./assets/23be242d73655340.svg"}" alt="Follow us on Tiktok"> </a><a href="https://instagram.com/nirvansbrickseek" target="_blank" rel="noreferrer"><img src="${"./assets/2b2e9646311bda43.svg"}" alt="Follow us on Instagram"></a></div><span>Copyright © 2020 Nirvan's Brickseek LLC | <a href="https://docs.google.com/document/d/13t5PgRfGlZ6fPi9W6UmFA2tMbMkjZMIG1CIgCJLuMx4/edit" target="_blank" rel="noreferrer">Privacy Policy</a></span></footer>`}}),i=r`<nirvan-header></nirvan-header><nirvan-banner></nirvan-banner><nirvan-offerings></nirvan-offerings><nirvan-testimonials></nirvan-testimonials><nirvan-faq id="faq"></nirvan-faq><nirvan-footer></nirvan-footer>`,a=document.querySelector("#app"),e.compile(i,a)}();
