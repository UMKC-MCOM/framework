(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();(()=>{var o={163:l=>{l.exports=function(e){var t,p=[].forEach,x=[].some,q=document.body,a=!0,r=" ";function f(s,m){var d,u,g,y=m.appendChild((d=s,u=document.createElement("li"),g=document.createElement("a"),e.listItemClass&&u.setAttribute("class",e.listItemClass),e.onClick&&(g.onclick=e.onClick),e.includeTitleTags&&g.setAttribute("title",d.textContent),e.includeHtml&&d.childNodes.length?p.call(d.childNodes,function(b){g.appendChild(b.cloneNode(!0))}):g.textContent=d.textContent,g.setAttribute("href",e.basePath+"#"+d.id),g.setAttribute("class",e.linkClass+r+"node-name--"+d.nodeName+r+e.extraLinkClasses),u.appendChild(g),u));if(s.children.length){var _=h(s.isCollapsed);s.children.forEach(function(b){f(b,_)}),y.appendChild(_)}}function h(s){var m=e.orderedList?"ol":"ul",d=document.createElement(m),u=e.listClass+r+e.extraListClasses;return s&&(u+=r+e.collapsibleClass,u+=r+e.isCollapsedClass),d.setAttribute("class",u),d}function L(s){var m=0;return s!==null&&(m=s.offsetTop,e.hasInnerContainers&&(m+=L(s.offsetParent))),m}function i(s){return s&&s.className.indexOf(e.collapsibleClass)!==-1&&s.className.indexOf(e.isCollapsedClass)!==-1?(s.className=s.className.split(r+e.isCollapsedClass).join(""),i(s.parentNode.parentNode)):s}return{enableTocAnimation:function(){a=!0},disableTocAnimation:function(s){var m=s.target||s.srcElement;typeof m.className=="string"&&m.className.indexOf(e.linkClass)!==-1&&(a=!1)},render:function(s,m){var d=h(!1);if(m.forEach(function(u){f(u,d)}),(t=s||t)!==null)return t.firstChild&&t.removeChild(t.firstChild),m.length===0?t:t.appendChild(d)},updateToc:function(s){var m;m=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||q.scrollTop,e.positionFixedSelector&&function(){var C;C=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||q.scrollTop;var E=document.querySelector(e.positionFixedSelector);e.fixedSidebarOffset==="auto"&&(e.fixedSidebarOffset=t.offsetTop),C>e.fixedSidebarOffset?E.className.indexOf(e.positionFixedClass)===-1&&(E.className+=r+e.positionFixedClass):E.className=E.className.split(r+e.positionFixedClass).join("")}();var d,u=s;if(a&&t!==null&&u.length>0){x.call(u,function(C,E){return L(C)>m+e.headingsOffset+10?(d=u[E===0?E:E-1],!0):E===u.length-1?(d=u[u.length-1],!0):void 0});var g=t.querySelector("."+e.activeLinkClass),y=t.querySelector("."+e.linkClass+".node-name--"+d.nodeName+'[href="'+e.basePath+"#"+d.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(g===y)return;var _=t.querySelectorAll("."+e.linkClass);p.call(_,function(C){C.className=C.className.split(r+e.activeLinkClass).join("")});var b=t.querySelectorAll("."+e.listItemClass);p.call(b,function(C){C.className=C.className.split(r+e.activeListItemClass).join("")}),y&&y.className.indexOf(e.activeLinkClass)===-1&&(y.className+=r+e.activeLinkClass);var v=y&&y.parentNode;v&&v.className.indexOf(e.activeListItemClass)===-1&&(v.className+=r+e.activeListItemClass);var k=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);p.call(k,function(C){C.className.indexOf(e.isCollapsedClass)===-1&&(C.className+=r+e.isCollapsedClass)}),y&&y.nextSibling&&y.nextSibling.className.indexOf(e.isCollapsedClass)!==-1&&(y.nextSibling.className=y.nextSibling.className.split(r+e.isCollapsedClass).join("")),i(y&&y.parentNode.parentNode)}}}}},547:l=>{l.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}},971:(l,e,t)=>{var p,x,q;x=[],(q=typeof(p=function(a){var r,f,h,L=t(547),i={},s={},m=t(163),d=t(279),u=t(938),g=!!(a&&a.document&&a.document.querySelector&&a.addEventListener);if(typeof window<"u"||g){var y=Object.prototype.hasOwnProperty;return s.destroy=function(){var v=b(i);v!==null&&(i.skipRendering||v&&(v.innerHTML=""),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).removeEventListener("resize",this._scrollListener,!1),r&&document.querySelector(i.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),r&&document.removeEventListener("click",this._clickListener,!1)))},s.init=function(v){if(g){i=function(){for(var S={},A=0;A<arguments.length;A++){var O=arguments[A];for(var j in O)y.call(O,j)&&(S[j]=O[j])}return S}(L,v||{}),this.options=i,this.state={},i.scrollSmooth&&(i.duration=i.scrollSmoothDuration,i.offset=i.scrollSmoothOffset,s.scrollSmooth=t(374).initSmoothScrolling(i)),r=m(i),f=d(i),this._buildHtml=r,this._parseContent=f,this._headingsArray=h,s.destroy();var k=function(S){try{return S.contentElement||document.querySelector(S.contentSelector)}catch{return console.warn("Contents element not found: "+S.contentSelector),null}}(i);if(k!==null){var C=b(i);if(C!==null&&(h=f.selectHeadings(k,i.headingSelector))!==null){var E=f.nestHeadingsArray(h).nest;i.skipRendering||r.render(C,E),this._scrollListener=_(function(S){r.updateToc(h),!i.disableTocScrollSync&&u(i);var A=S&&S.target&&S.target.scrollingElement&&S.target.scrollingElement.scrollTop===0;(S&&(S.eventPhase===0||S.currentTarget===null)||A)&&(r.updateToc(h),i.scrollEndCallback&&i.scrollEndCallback(S))},i.throttleTimeout),this._scrollListener(),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var w=null;return this._clickListener=_(function(S){i.scrollSmooth&&r.disableTocAnimation(S),r.updateToc(h),w&&clearTimeout(w),w=setTimeout(function(){r.enableTocAnimation()},i.scrollSmoothDuration)},i.throttleTimeout),i.scrollContainer&&document.querySelector(i.scrollContainer)?document.querySelector(i.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},s.refresh=function(v){s.destroy(),s.init(v||this.options)},a.tocbot=s,s}function _(v,k,C){var E,w;return k||(k=250),function(){var S=C||this,A=+new Date,O=arguments;E&&A<E+k?(clearTimeout(w),w=setTimeout(function(){E=A,v.apply(S,O)},k)):(E=A,v.apply(S,O))}}function b(v){try{return v.tocElement||document.querySelector(v.tocSelector)}catch{return console.warn("TOC element not found: "+v.tocSelector),null}}}(t.g!==void 0?t.g:window||t.g))=="function"?p.apply(e,x):p)===void 0||(l.exports=q)},279:l=>{l.exports=function(e){var t=[].reduce;function p(a){return a[a.length-1]}function x(a){return+a.nodeName.toUpperCase().replace("H","")}function q(a){if(!(a instanceof window.HTMLElement))return a;if(e.ignoreHiddenElements&&(!a.offsetHeight||!a.offsetParent))return null;const r=a.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(a.textContent)):a.textContent.trim());var f={id:a.id,children:[],nodeName:a.nodeName,headingLevel:x(a),textContent:r};return e.includeHtml&&(f.childNodes=a.childNodes),e.headingObjectCallback?e.headingObjectCallback(f,a):f}return{nestHeadingsArray:function(a){return t.call(a,function(r,f){var h=q(f);return h&&function(L,i){for(var s=q(L),m=s.headingLevel,d=i,u=p(d),g=m-(u?u.headingLevel:0);g>0&&(!(u=p(d))||m!==u.headingLevel);)u&&u.children!==void 0&&(d=u.children),g--;m>=e.collapseDepth&&(s.isCollapsed=!0),d.push(s)}(h,r.nest),r},{nest:[]})},selectHeadings:function(a,r){var f=r;e.ignoreSelector&&(f=r.split(",").map(function(h){return h.trim()+":not("+e.ignoreSelector+")"}));try{return a.querySelectorAll(f)}catch{return console.warn("Headers not found with selector: "+f),null}}}}},374:(l,e)=>{e.initSmoothScrolling=function(t){var p=t.duration,x=t.offset,q=location.hash?a(location.href):location.href;function a(r){return r.slice(0,r.lastIndexOf("#"))}document.body.addEventListener("click",function(r){var f;(f=r.target).tagName.toLowerCase()!=="a"||!(f.hash.length>0||f.href.charAt(f.href.length-1)==="#")||a(f.href)!==q&&a(f.href)+"#"!==q||r.target.className.indexOf("no-smooth-scroll")>-1||r.target.href.charAt(r.target.href.length-2)==="#"&&r.target.href.charAt(r.target.href.length-1)==="!"||r.target.className.indexOf(t.linkClass)===-1||function(h,L){var i,s,m=window.pageYOffset,d={duration:L.duration,offset:L.offset||0,callback:L.callback,easing:L.easing||function(b,v,k,C){return(b/=C/2)<1?k/2*b*b+v:-k/2*(--b*(b-2)-1)+v}},u=document.querySelector('[id="'+decodeURI(h).split("#").join("")+'"]')||document.querySelector('[id="'+h.split("#").join("")+'"]'),g=typeof h=="string"?d.offset+(h?u&&u.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):h,y=typeof d.duration=="function"?d.duration(g):d.duration;function _(b){s=b-i,window.scrollTo(0,d.easing(s,m,g,y)),s<y?requestAnimationFrame(_):(window.scrollTo(0,m+g),typeof d.callback=="function"&&d.callback())}requestAnimationFrame(function(b){i=b,_(b)})}(r.target.hash,{duration:p,offset:x,callback:function(){var h,L;h=r.target.hash,(L=document.getElementById(h.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(L.tagName)||(L.tabIndex=-1),L.focus())}})},!1)}},938:l=>{l.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var p=t.querySelector("."+e.activeListItemClass);p&&(t.scrollTop=p.offsetTop-e.tocScrollOffset)}}}},c={};function n(l){var e=c[l];if(e!==void 0)return e.exports;var t=c[l]={exports:{}};return o[l](t,t.exports,n),t.exports}n.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),n(971)})();function J(o,c,n){for(var l=document.querySelectorAll(c),e=0;e<l.length;e++){var t=o+l[e].outerHTML+n;l[e].outerHTML=t}}J("<div style='display: grid;'><div class='resp-table'>","table:not(.no-resp)","</div></div>");function Q(){var o=document.querySelector(".standard--content"),c=o.querySelectorAll("h1, h2, h3, h4, h5, h6, h7"),n={};Array.prototype.forEach.call(c,function(l){var e=l.id?l.id:l.textContent.trim().toLowerCase().split(" ").join("-").replace(/[!@#$%^&*():]/ig,"").replace(/\//ig,"-");n[e]=isNaN(n[e])?0:++n[e],n[e]?l.id=e+"-"+n[e]:l.id=e})}document.querySelector(".standard--content")!==null&&document.querySelector(".js-toc")!==null&&(Q(),tocbot.init({tocSelector:".js-toc",contentSelector:".standard--content",headingSelector:"h2, h3, h4, h5, h6",hasInnerContainers:!0,collapseDepth:2}));const W=document.querySelectorAll("[data-toggle]");[...W].forEach(o=>{o.addEventListener("click",function(c){c.preventDefault();let n=o.parentNode.closest("div"),l=document.querySelector(o.dataset.toggle),e=o.dataset.focus!==null?o.dataset.focus:"";l.getAttribute("aria-hidden")===null||l.getAttribute("aria-hidden")==="true"?(B(n),o.setAttribute("aria-expanded",!0),l.setAttribute("aria-hidden",!1),e&&document.querySelector(e).focus()):B(n)})});function B(o){o.querySelectorAll("[aria-expanded=true]").forEach(n=>{let l=document.querySelector(n.dataset.toggle);n.setAttribute("aria-expanded",!1),l.setAttribute("aria-hidden",!0)})}const $=document.querySelectorAll("[data-controls]"),X=document.querySelectorAll(".quote__item");[...$].forEach(o=>{o.addEventListener("click",function(c){c.preventDefault(),X.forEach(l=>{l.classList.remove("is-visible")}),$.forEach(l=>{l.classList.remove("quote__bullet--active")}),document.querySelector(o.dataset.controls).classList.add("is-visible"),o.classList.add("quote__bullet--active")})});const H=document.querySelector("#hero-video");if(H!==null)var R=H.querySelectorAll("source");H&&R.length!=0&&(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||([...R].forEach(o=>{o.setAttribute("src",o.dataset.src)}),document.querySelector(".hero__buttons").classList.add("hero__buttons--visible"),H.load()));const Z=document.querySelectorAll("[data-video]");[...Z].forEach(o=>{o.addEventListener("click",function(c){c.preventDefault();let n=document.querySelector(o.dataset.video),l=document.querySelectorAll(".hero__video--toggle .hero__icon"),e=document.querySelector(".hero__video--toggle .sr-only");n.paused?(n.play(),e.innerText="Pause Video"):(n.pause(),e.innerText="Play Video"),[...l].forEach(t=>{t.classList.toggle("hero__icon--active")})})});const T=document.createElement("div");T.setAttribute("id","video-overlay");const N=document.createElement("button");N.classList.add("o-btn");N.classList.add("video__close");N.setAttribute("id","close-video-overlay");N.setAttribute("aria-label","Close Video Overlay");N.innerHTML='<svg class="icon menu__icon"><use xlink:href="#close"></use></svg>';T.appendChild(N);const M=document.createElement("div");M.classList.add("video");const P=document.createElement("div");P.classList.add("embed-container");P.innerHTML='<div class="video-embed" id="player"><iframe frameborder="0" src="" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>';M.appendChild(P);T.appendChild(M);document.body.appendChild(T);const ee=document.querySelectorAll('a[href*="youtu.be"]');[...ee].forEach(o=>{o.addEventListener("click",function(c){c.preventDefault(),T.classList.add("is-visible--flex");let n=c.target.getAttribute("href");document.querySelector("#player iframe").setAttribute("src","//www.youtube.com/embed/"+te(n))})});T.addEventListener("click",function(o){o.preventDefault(),T.classList.remove("is-visible--flex"),document.querySelector("#player iframe").setAttribute("src","")});N.addEventListener("click",function(o){o.preventDefault(),T.classList.remove("is-visible--flex"),document.querySelector("#player iframe").setAttribute("src","")});function te(o){const c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,n=o.match(c);return n&&n[2].length===11?n[2]:null}const ne=document.querySelector(".di"),z=document.getElementById("directory_search"),oe=document.getElementById("dirSearch"),re=document.getElementById("dirSearchCat"),D=document.querySelectorAll(".di__item:not(.di__item--header)"),I=document.createElement("div");I.classList="alert alert--info";I.innerHTML="<p>No results for your search term(s).</p>";const le=async(o,c)=>{I.remove(),[...D].forEach(n=>n.classList.remove("hidden")),(o.length>=3||c)&&([...D].filter(l=>!l.dataset.filter.toLowerCase().includes(c.toLowerCase())||!l.textContent.toLowerCase().includes(o.toLowerCase())).forEach(l=>{l.classList.add("hidden")}),document.querySelectorAll(".di__item.hidden").length==D.length&&ne.appendChild(I))};z!==null&&z.addEventListener("input",o=>{let c=oe.value,n=re.value;le(c,n)});const U=document.querySelectorAll(".resource__checkbox"),F=document.querySelectorAll("[data-filters]"),V=document.getElementById("clear");F!==null&&U.forEach(o=>{o.addEventListener("change",c=>{let n=document.querySelectorAll(".resource__checkbox:checked");ie(n),n.length==0&&K()})});function ie(o){let c=[];[...o].forEach(n=>{c.push(n.dataset.filter)}),[...F].forEach(n=>{let l=n.dataset.filters;se(l,c)?n.classList.remove("hidden"):n.classList.add("hidden")})}function se(o,c){return c.every(n=>o.includes(n))}function K(){[...U].forEach(o=>{o.checked=!1}),[...F].forEach(o=>{o.classList.remove("hidden")})}V!==null&&V.addEventListener("click",o=>{o.preventDefault(),K()});function ce(){let o=document.querySelector("header"),c=document.createElement("div");c.className="site-alert",c.innerHTML='<svg class="icon site-alert__icon"><use xlink:href="#info"></use></svg><div class="site-alert__content">{{content}}</div>',fetch("https://content.getrave.com/rss/umkc/channel1").then(n=>n.ok?n.text():Promise.reject(n)).then(n=>{new window.DOMParser().parseFromString(n,"text/xml").querySelectorAll("item").forEach(t=>{let p=t.querySelector("title").innerHTML,x=t.querySelector("description").innerHTML,q=t.querySelector("pubDate").innerHTML,a=t.querySelector("link").innerHTML,r=new Date(q);if(r=r.setHours(r.getHours()+2),new Date<=r){let f=`<h1 class="site-alert__title">${p}</h1><p>${x}</p>`;a&&(f+=`<p>Additional <a href="${a}">updates and emergency details</a>.</p>`),c.innerHTML=c.innerHTML.replace("{{content}}",f),o.insertAdjacentElement("beforebegin",c)}})}).catch(n=>{})}ce();const Y=document.querySelector(".gdpr"),ae=Y.querySelector(".banner-accept"),de=localStorage.getItem("bannerClosed");ae.addEventListener("click",function(){localStorage.setItem("bannerClosed",!0),G()});function G(){de&&(Y.style.display="none")}G();