import{r as o,h as t,H as e,g as r}from"./p-e8a734d8.js";const c='.docs-toc__content:before{background-color:var(--ld-col-neutral-050)}@media (prefers-color-scheme:dark){.docs-toc__content:before{background-color:var(--ld-col-neutral-400)}}.docs-ui-dark .docs-toc__content:before{background-color:var(--ld-col-neutral-400)}.docs-ui-light .docs-toc__content:before{background-color:var(--ld-col-neutral-050)}.docs-toc{--docs-toc-heading-height:2rem}.docs-toc__content{overflow:hidden;padding:var(--ld-sp-8) var(--ld-sp-24) var(--ld-sp-24) 0}.docs-toc__content:before{border-radius:var(--ld-br-full);bottom:1.25rem;content:"";display:block;left:0;position:absolute;top:calc(1.25rem + var(--docs-toc-heading-height));transform:translateY(-.4rem);width:.1875rem}.docs-toc__nav{margin-right:-3rem;max-height:calc(100vh - var(--docs-toc-top) - 4rem);overflow:visible scroll;padding-right:3rem;position:relative}.docs-toc__nav ol{list-style:none;padding-left:var(--ld-sp-24)}.docs-toc__nav li{margin-top:var(--ld-sp-12)}.docs-toc__nav a{font:var(--ld-typo-label-s);-webkit-text-decoration:none;text-decoration:none}.docs-toc__nav a:before{border-radius:var(--ld-br-full);content:"";display:block;height:2.2rem;left:0;position:absolute;transform:translateY(-.4rem);width:.1875rem}.docs-toc__nav a.docs-toc__link--is-active,.docs-toc__nav a.docs-toc__link--is-target{color:var(--ld-thm-secondary)}.docs-toc__nav a.docs-toc__link--is-active:before{background-color:var(--ld-thm-secondary);z-index:1}.docs-toc__nav a[href="#methods"]+ol a{word-break:break-all}[href="#graph"],[href="#graph"]+ol,[href="#overview"],[href="#overview"]+ol,[href="#shadow-parts"],[href="#shadow-parts"]+ol{display:none}.docs-toc__heading{display:block;font:var(--ld-typo-cap-m);font-weight:400;height:var(--docs-toc-heading-height);text-transform:uppercase}';const s=class{constructor(t){o(this,t);this.headings=undefined}createObserver(o){const t={rootMargin:"-60px 0px -70% 0px",threshold:1};const e=t=>this.handleObserver(t,o);return new IntersectionObserver(e,t)}handleObserver(o,t){for(let e=o.length;e--;){const r=o[e];const{target:c,isIntersecting:s,intersectionRatio:a}=r;if(s&&a>=1){const o=c.getAttribute("id");this.updateLinks(o,t);return}}}updateLinks(o,t){if(["overview","shadow-parts","graph"].includes(o)||!t.find((t=>t.href.split("#")[1]===o))){return}const e=document.getElementById(o);if(e&&e.tagName==="H1"){t.map((o=>{o.classList.remove("docs-toc__link--is-active")}));t[0].classList.add("docs-toc__link--is-active");return}t.map((t=>{const e=t.getAttribute("href");t.classList.remove("docs-toc__link--is-active");if(e===`#${o}`){t.classList.add("docs-toc__link--is-active")}}))}handleClick(o){var t;if(o.target.tagName!=="A")return;o.preventDefault();(t=this.el.querySelector(".docs-toc__link--is-active"))===null||t===void 0?void 0:t.classList.remove("docs-toc__link--is-active");o.target.classList.add("docs-toc__link--is-active");const e=o.target.getAttribute("href").replace("#","");const r=this.headings.find((o=>o.getAttribute("id")===e));r.setAttribute("tabindex","-1");r.focus();window.scroll({top:r.offsetTop-80})}componentDidLoad(){setTimeout((()=>{this.headings=Array.from(document.querySelectorAll("#main > h1, #main > h2, #main > h3"));const o=Array.from(this.el.querySelectorAll("a"));const t=this.createObserver(o);this.headings.map((o=>t.observe(o)))}))}render(){return t(e,{class:"docs-toc"},t("aside",{class:"docs-toc__content"},t("h2",{class:"docs-toc__heading","aria-label":"Content"},"Content"),t("slot",null)))}get el(){return r(this)}};s.style=c;export{s as docs_toc};
//# sourceMappingURL=p-c3e56b2d.entry.js.map