!function(){"use strict";class e{static compile(t,n){const a=e._processTemplate(t);e._diff(a,n),e._updateChildren(a,n)}static createTemplate(e,t){const n=document.createElement("template");let a=[];return n.innerHTML=e.reduce((e,n,i)=>{const r=t[i]||"";return n.match(/( on.*="?$)/)&&"function"==typeof r?(a.push(r),e+n+"{{e}}"):n.match(/( .*=$)/)?e+n+`"${r}"`:"object"==typeof r&&r.template?(a=a.concat(r.events),e+n+r.template.innerHTML):e+n+r},""),{template:n,events:a}}static _processTemplate({template:e,events:t}){const n=document.createTreeWalker(e.content,1);let a=n.nextNode(),i=0;for(;a;){if(a.attributes)for(let e of a.attributes){const n=t[i];e.value.match(/{{e}}/)&&"function"==typeof n&&(a.addEventListener(e.localName.slice(2),n),a.removeAttribute(e.localName),i++)}a=n.nextNode()}return e.content}static _walk(t,n){return n?t?t.tagName!=n.tagName?t:(e._diff(t,n),e._updateChildren(t,n),n):null:t}static _diff(t,n){1==t.nodeType?e._updateAttributes(t,n):3!=t.nodeType&&8!=t.nodeType||n.nodeValue!=t.nodeValue&&(n.nodeValue=t.nodeValue),"INPUT"==t.nodeName&&e._updateInput(t,n),"OPTION"==t.nodeName&&e._updateAttribute(t,n,"selected"),"TEXTAREA"==t.nodeName&&e._updateTextArea(t,n)}static _updateChildren(t,n){let a=0;for(let i=0;;i++){const r=n.childNodes[i],l=t.childNodes[i-a];if(!r&&!l)break;if(l)if(r)if(e._isSameNode(l,r)){const t=e._walk(l,r);t!=r&&(n.replaceChild(t,r),a++)}else{let t=null;const s=n.childNodes.length;for(let a=i;a<s;a++)if(e._isSameNode(n.childNodes[a],l)){t=n.childNodes[a];break}if(t){const i=e._walk(l,t);i!=t&&a++,n.insertBefore(i,r)}else if(l.id||r.id)n.insertBefore(l,r),a++;else{const t=e._walk(l,r);t!=r&&(n.replaceChild(t,r),a++)}}else n.appendChild(l),a++;else n.removeChild(r),i--}}static _updateAttributes(e,t){const n=t.attributes,a=e.attributes;let i=a.length-1;for(let e=i;e>=0;--e){const n=a[e];n.namespaceURI?t.getAttributeNS(n.namespaceURI,n.localName)!=n.value&&t.setAttributeNS(n.namespaceURI,n.localName,n.value):t.hasAttribute(n.localName)?t.getAttribute(n.localName)!=n.value&&("null"==n.value||"undefined"==n.value?t.removeAttribute(n.localName):t.setAttribute(n.localName,n.value)):t.setAttribute(n.localName,n.value)}i=n.length-1;for(let a=i;a>=0;--a){const i=n[a];i.specified&&(i.namespaceURI?e.hasAttributeNS(i.namespaceURI,i.localName)||t.removeAttributeNS(i.namespaceURI,i.localName):e.hasAttributeNS(null,i.localName)||t.removeAttribute(i.localName))}}static _updateAttribute(e,t,n){e[n]!=t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}static _updateInput(t,n){e._updateAttribute(t,n,"checked"),e._updateAttribute(t,n,"disabled"),t.indeterminate!=n.indeterminate&&(n.indeterminate=t.indeterminate),t.value!=n.value&&(n.setAttribute("value",t.value),n.value=t.value),"null"==t.value&&(n.value="",n.removeAttribute("value")),t.hasAttributeNS(null,"value")?"range"==n.type&&(n.value=t.value):n.removeAttribute("value")}static _updateTextArea(e,t){e.value!=t.value&&(t.value=e.value),t.firstChild&&t.firstChild.nodeValue!=e.value&&(t.firstChild.nodeValue=e.value)}static _isSameNode(e,t){return e.id?e.id==t.id:e.tagName==t.tagName&&(3==e.type&&e.nodeValue==t.nodeValue)}}class t{set(e){this.prototype=Object.assign(this,e)}static create(e){return new Proxy(new t,{set:(t,n,a)=>"prototype"==n||t[n]==a||(null!=t[n]?(t[n]=a,e(n,a),!0):(t[n]=a,!0))})}}class n extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"open"}),this.state=t.create(()=>{e.compile(this.render(),this.root)})}connectedCallback(){e.compile(this.render(),this.root),this.didLoad()}disconnectedCallback(){this.willUnload()}render(){}didLoad(){}willUnload(){}static register(e,t){window.customElements.define(e,t)}}function a(t,...n){return e.createTemplate(t,n)}var i,r;n.register("hamburger-menu",class extends n{style(){return"\n            #bar1,\n            #bar2,\n            #bar3 {\n                width: 35px;\n                height: 5px;\n                margin: 5px;\n                \n                background-color: white;\n                border-radius: 10px;\n            }\n\n            .toggled #bar1 {\n                transform: rotate(-45deg) translate(-7px, 6px);\n            }\n\n            .toggled #bar2 {\n                opacity: 0;\n            }\n\n            .toggled #bar3 {\n                transform: rotate(45deg) translate(-7px, -6px);\n            }\n\n            .toggled * {\n                transition: transform 0.4s ease;\n            }\n        "}render(){return a`<style>${this.style()}</style><div id="container" onclick="${this.animate.bind(this)}" ontouchstart="${this.animate.bind(this)}"><div id="bar1"></div><div id="bar2"></div><div id="bar3"></div></div>`}animate(e){e.preventDefault(),this.root.getElementById("container").classList.toggle("toggled")}}),n.register("nirvan-header",class extends n{style(){return"\n            header {\n                display: flex;\n                justify-content: space-evenly;\n\n                position: fixed;\n                top: 0;\n                height: 85px;\n                width: 100%;\n            }\n\n            nav {\n                display: flex;\n                justify-content: space-between;\n\n                width: 100%;\n                margin: 20px;\n            }\n\n            nav #navbar {\n                display: flex;\n                justify-content: space-between;\n\n                width: 100%;\n            }\n\n            nav a {\n                color: #dddddd;\n                font-size: 20px;\n                font-weight: 100;\n                text-decoration: none;\n                text-transform: lowercase;\n            }\n\n            nav a:hover {\n                color: #ca733e;\n            }\n\n            nav #logo {\n                width: 50px;\n                height: 50px;\n                transform: translateY(-10px);\n            }\n\n            nav #social-icons {\n                display: flex;\n                justify-content: flex-end;\n\n                width: 100%;\n            }\n\n            nav #social-icons img {\n                width: 25px;\n                height: 25px;\n\n                margin: 0px 10px 0px 10px;\n            }\n\n            nav #burger {\n                display: none;\n                cursor: pointer;\n\n            }\n\n            @media screen and (max-width: 800px) {\n\n                nav #burger {\n                    display: block;\n                }\n\n                nav #links {\n                    display: none;\n                }\n\n                nav #navbar {\n                    justify-content: flex-start;\n                }\n                nav #social-icons {\n                    display: none;\n                }\n\n                #navbar #links.mobile {\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: flex-start;\n                    align-items: center;\n\n                    position: fixed;\n                    top: 85px;\n                    width: 100%;\n                    height: 100%;\n                }\n            }\n\n\n        "}render(){return a`<style>${this.style()}</style><header><nav><div id="navbar"><div id="links"><a href="/"><span>Home</span></a></div><a href="/"><img id="logo" src="${"./assets/875b0de87f9d98e5.png"}" alt="Nirvan's Brickseek"></a></div><div id="social-icons"><a href="https://twitter.com/nirvanbrickseek" target="_blank"><img src="${"./assets/d9b0310dde33d916.svg"}" alt="Twitter"> </a><a href="https://www.tiktok.com/@nirvansbrickseek?lang=en" target="_blank"><img src="${"./assets/23be242d73655340.svg"}" alt="Tiktok"></a></div><hamburger-menu id="burger" onclick="${this.toggleMobile.bind(this)}"></hamburger-menu></nav></header>`}toggleMobile(e){e.preventDefault();const t=this.root.querySelector("#links");t.classList.toggle("mobile"),t.classList.contains("mobile")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}}),n.register("nirvan-banner",class extends n{style(){return"\n            \n        "}render(){return a`<style>${this.style()}</style>`}}),i=a`<nirvan-header></nirvan-header><nirvan-banner></nirvan-banner>`,r=document.querySelector("#app"),e.compile(i,r)}();
