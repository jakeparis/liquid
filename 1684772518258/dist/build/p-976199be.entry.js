import{r as o,c as i,h as d,H as t,g as r}from"./p-5c3033fa.js";import{g as c}from"./p-1133c92e.js";import{c as l}from"./p-82e9a1aa.js";function a(o,i){let d=getComputedStyle(o);if(d.position==="fixed"){return document.scrollingElement}const t=d.position==="absolute";const r=i?/(auto|scroll|hidden)/:/(auto|scroll)/;for(let i=o;i=i.parentElement;){d=getComputedStyle(i);if(t&&d.position==="static"){continue}if(r.test(d.overflow+d.overflowY+d.overflowX)){return i}}return document.scrollingElement}const e=":host{--ld-accordion-col:var(--ld-col-neutral-900);--ld-accordion-col-disabled:var(--ld-col-neutral-100);--ld-accordion-col-hover:var(--ld-col-neutral-900);--ld-accordion-col-focus:var(--ld-col-neutral-900);--ld-accordion-bg-col:var(--ld-col-wht);--ld-accordion-bg-col-active:var(--ld-col-wht);--ld-accordion-bg-col-disabled:var(--ld-col-neutral-100);--ld-accordion-bg-col-focus:var(--ld-col-neutral-100);--ld-accordion-bg-col-hover:var(--ld-col-neutral-050);--ld-accordion-trigger-icon-col-disabled:var(--ld-col-neutral-100);--ld-accordion-col-active:var(--ld-thm-primary);--ld-accordion-col-selected:var(--ld-thm-primary);--ld-accordion-toggle-col:inherit;--ld-accordion-toggle-indicator-bg-col:#0000;--ld-accordion-toggle-trigger-col:var(--ld-thm-primary);--ld-accordion-trigger-icon-col:var(--ld-thm-primary);--ld-accordion-trigger-icon-col-hover:var(--ld-thm-primary-hover);--ld-accordion-trigger-icon-col-focus:var(--ld-thm-primary-focus);--ld-accordion-trigger-icon-col-active:var(--ld-thm-primary-active);--ld-accordion-toggle-expanded-col:var(--ld-thm-primary);--ld-accordion-padding-y:0.45rem;--ld-accordion-padding-x:1.25rem;--ld-accordion-toggle-size:2.5rem;--ld-accordion-toggle-line-height:180%;--ld-accordion-border-radius-size:0;--ld-accordion-border-radius:var(--ld-accordion-border-radius-size);--ld-accordion-gap:var(--ld-sp-2);--ld-accordion-gap-col:var(--ld-accordion-panel-border-top-col);--ld-accordion-panel-border-top-col:var(--ld-col-neutral-010)}:host(:where(.ld-accordion)){color-scheme:none;color-scheme:var(--ld-accordion-color-scheme,none);display:block;flex-grow:1}:host(.ld-accordion--rounded){--ld-accordion-border-radius-size:var(--ld-br-m)}:host(.ld-accordion--dark){--ld-accordion-bg-col:var(--ld-col-neutral-010);--ld-accordion-bg-col-active:var(--ld-col-neutral-010);--ld-accordion-panel-border-top-col:var(--ld-col-neutral-050)}:host(.ld-accordion--brand-color){--ld-accordion-bg-col-hover:var(--ld-thm-primary-alpha-lowest);--ld-accordion-bg-col-focus:var(--ld-thm-primary-alpha-low)}:host(.ld-accordion--detached){--ld-accordion-gap:var(--ld-sp-8);--ld-accordion-gap-col:#0000}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section){--ld-accordion-border-radius:0}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section:first-of-type){--ld-accordion-border-radius:var(--ld-accordion-border-radius-size) var(--ld-accordion-border-radius-size) 0 0}:host(.ld-accordion:not(.ld-accordion--detached)) ::slotted(ld-accordion-section:last-of-type){--ld-accordion-border-radius:0 0 var(--ld-accordion-border-radius-size) var(--ld-accordion-border-radius-size)}:host ::slotted(ld-accordion-section:not(:first-of-type)){border-top:solid var(--ld-accordion-gap) var(--ld-accordion-gap-col)}";const n=class{constructor(d){o(this,d);this.ldaccordionchange=i(this,"ldaccordionchange",7);this.scrollIntoViewOnTransitionEnd=false;this.scrollIntoView=o=>{var i;const d=a(o);const t=o.querySelector("ld-accordion-toggle");const r=o.querySelector("ld-accordion-panel");const c=Array.from(o.parentElement.children);const l=this.single&&!this.scrollIntoViewOnTransitionEnd?((i=c.slice(0,c.findIndex((i=>i===o))).find((o=>o.classList.contains("ld-accordion-section--expanded"))))===null||i===void 0?void 0:i.children[1].scrollHeight)||0:0;const e=d.scrollTop+r.getBoundingClientRect().top-Math.max(0,d.getBoundingClientRect().top);const n=parseFloat(window.getComputedStyle(d)["scrollPaddingTop"])||0;const s=e+Math.min(r.scrollHeight,d.clientHeight-t.clientHeight-n)-l;if(!this.scrollIntoViewOnTransitionEnd&&d.scrollHeight<s){this.scrollIntoViewOnTransitionEnd=true;return}if(!this.el.closest("ld-accordion-panel")&&d.clientHeight+d.scrollTop<s){const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;d.scrollTo({top:s-d.clientHeight,behavior:o?"auto":"smooth"})}};this.focusToggle=(o,i)=>{var d;const t=(d=i==="prev"?o.parentElement.previousElementSibling:o.parentElement.nextElementSibling)===null||d===void 0?void 0:d.querySelector("ld-accordion-toggle");if(t){t.focusInner()}};this.onKeydown=o=>{if(o.target.tagName!=="LD-ACCORDION-TOGGLE"){return}switch(o.key){case"ArrowUp":{o.preventDefault();this.focusToggle(o.target,"prev");return}case"ArrowDown":{o.preventDefault();this.focusToggle(o.target,"next");return}}};this.onTransitionEnd=o=>{const i=o.target;if(!this.scrollIntoViewOnTransitionEnd||i.tagName!=="LD-ACCORDION-PANEL"||i.closest("ld-accordion")!==this.el||!i.closest("ld-accordion-section").expanded){return}this.scrollIntoView(i.closest("ld-accordion-section"));this.scrollIntoViewOnTransitionEnd=false};this.brandColor=undefined;this.detached=false;this.rounded=false;this.single=false;this.tone=undefined}handleAccordionExpandChange(o){if(o.target.tagName!=="LD-ACCORDION-SECTION")return;if(this.single&&o.target.expanded){const i=[...o.target.parentElement.children].filter((i=>i!==o.target));i.forEach((o=>{o.expanded=false}))}if(o.detail){this.scrollIntoView(o.target)}}render(){const o=c(["ld-accordion",this.detached&&"ld-accordion--detached",this.brandColor&&"ld-accordion--brand-color",!this.brandColor&&this.tone&&`ld-accordion--${this.tone}`,this.rounded&&"ld-accordion--rounded"]);return d(t,{class:o,onKeydown:this.onKeydown,onTransitionEnd:this.onTransitionEnd},d("slot",null))}get el(){return r(this)}};n.style=e;const s=':host{--ld-accordion-panel-transition-duration:var(\n    --ld-transition-duration-instant\n  );background-color:var(--ld-accordion-bg-col);border-radius:var(--ld-accordion-border-radius);border-top-left-radius:inherit;border-top-right-radius:inherit;box-sizing:border-box;display:block;max-height:auto;max-height:var(--ld-accordion-panel-max-height,auto);overflow:hidden;position:relative;will-change:max-height}:host(.ld-accordion-panel--initialized){transition:max-height var(--ld-accordion-panel-transition-duration) ease}@media (prefers-reduced-motion:no-preference){:host(.ld-accordion-panel--initialized){--ld-accordion-panel-transition-duration:var(\n        --ld-transition-duration-normal\n      )}}:host(.ld-accordion-panel--expanded):before{background-color:var(--ld-accordion-panel-border-top-col);content:"";height:var(--ld-sp-2);left:0;position:absolute;right:0;top:0}:host(.ld-accordion-panel--expanded) .ld-accordion-panel__content{opacity:1;transition:opacity var(--ld-accordion-panel-transition-duration) linear;visibility:inherit}.ld-accordion-panel__content{opacity:0;transition:opacity var(--ld-accordion-panel-transition-duration) linear,visibility 0s var(--ld-accordion-panel-transition-duration) linear;visibility:hidden}';const g=class{constructor(d){o(this,d);this.ldaccordionmaxheightchange=i(this,"ldaccordionmaxheightchange",7);this.applyMaxHeight=(o=0)=>{if(o){this.innerPanelExpanding=true}if(this.expanded){this.ldaccordionmaxheightchange.emit(this.el.scrollHeight)}this.maxHeight=this.expanded?this.el.scrollHeight+o:0};this.handleInnerMaxHeightChange=o=>{if(o.target===this.el)return;o.stopImmediatePropagation();this.applyMaxHeight(o.detail)};this.onTransitionEnd=o=>{if(o.target===this.el){this.innerPanelExpanding=false}};this.expanded=undefined;this.initialized=false;this.transitionEnabled=false;this.maxHeight=undefined;this.resizeObserver=undefined;this.innerPanelExpanding=false}async setExpanded(o){this.expanded=o;this.applyMaxHeight()}componentDidLoad(){setTimeout((()=>{this.resizeObserver=new ResizeObserver((()=>{if(!this.innerPanelExpanding){this.applyMaxHeight()}}));this.resizeObserver.observe(this.contentRef);this.initialized=true}))}disconnectedCallback(){if(this.resizeObserver)this.resizeObserver.unobserve(this.contentRef)}render(){const o=c(["ld-accordion-panel",this.expanded&&"ld-accordion-panel--expanded",this.initialized&&"ld-accordion-panel--initialized"]);return d(t,{style:{"--ld-accordion-panel-max-height":this.maxHeight+"px"},class:o,onTransitionEnd:this.onTransitionEnd,onLdaccordionmaxheightchange:this.handleInnerMaxHeightChange},d("div",{part:"content",ref:o=>this.contentRef=o,class:"ld-accordion-panel__content"},d("slot",null)))}get el(){return r(this)}};g.style=s;const h=":host{display:block}";const b=class{constructor(d){o(this,d);this.ldaccordionchange=i(this,"ldaccordionchange",7);this.expanded=undefined;this.initialized=false}updateExpandedState(o){Array.from(this.el.children).forEach((i=>{if(typeof i.setExpanded==="function"){i.setExpanded(o)}}));if(this.initialized){this.ldaccordionchange.emit(o)}}handleToggleClick(o){const i="composedPath"in o?o.composedPath().at(0):o.target;if(l("ld-accordion-section",i)!==this.el){return}this.expanded=!this.expanded}componentWillLoad(){this.updateExpandedState(this.expanded);this.initialized=true}render(){const o=c(["ld-accordion-section",this.expanded&&"ld-accordion-section--expanded"]);return d(t,{class:o,onLdaccordiontoggleclick:this.handleToggleClick.bind(this)},d("slot",null))}get el(){return r(this)}static get watchers(){return{expanded:["updateExpandedState"]}}};b.style=h;const u=':host{border-radius:var(--ld-accordion-border-radius);display:block;position:relative;z-index:1}.ld-accordion-toggle__button,.ld-accordion-toggle__label,.ld-accordion-toggle__trigger{-webkit-touch-callout:none;border:0;box-sizing:border-box;margin:0;text-align:left;touch-action:manipulation;-webkit-user-select:none;user-select:none;width:100%}.ld-accordion-toggle__button{align-items:center;background-color:var(--ld-accordion-bg-col);border-radius:inherit;color:var(--ld-accordion-col);direction:var(--ld-accordion-grid-dir);display:grid;font:var(--ld-typo-body-m);grid-template-columns:1fr var(--ld-accordion-toggle-size);padding:0;position:relative}.ld-accordion-toggle__button[aria-disabled]{color:var(--ld-accordion-col-disabled)}:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:before{background-color:var(--ld-accordion-toggle-indicator-bg-col);border-radius:var(--ld-accordion-border-radius);bottom:0;content:"";left:0;position:absolute;right:0;top:0}:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:not([aria-disabled]):where(:focus:focus-visible){--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-bg-col-focus\n        )}@media (hover:hover){:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:not([aria-disabled]):where(:hover){--ld-accordion-toggle-indicator-bg-col:var(\n            --ld-accordion-bg-col-hover\n          )}}:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:not([aria-disabled]):where(:active:focus-visible){--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-bg-col-active\n        )}:host(.ld-accordion-toggle--expanded:not(.ld-accordion-toggle--split)) .ld-accordion-toggle__button:before{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split):not(.ld-accordion-toggle--expanded)) .ld-accordion-toggle__button:not([aria-disabled]):where(:focus:focus-visible){--ld-accordion-toggle-col:var(--ld-accordion-col-focus)}@media (hover:hover){:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split):not(.ld-accordion-toggle--expanded)) .ld-accordion-toggle__button:not([aria-disabled]):where(:hover){--ld-accordion-toggle-col:var(--ld-accordion-col-hover)}}:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split):not(.ld-accordion-toggle--expanded)) .ld-accordion-toggle__button:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle:not(.ld-accordion-toggle--split):not(.ld-accordion-toggle--expanded)) .ld-accordion-toggle__button:not([aria-disabled]):where(:active:focus-visible){--ld-accordion-toggle-col:var(--ld-accordion-col-active)}.ld-accordion-toggle__button:not([aria-disabled]) .ld-accordion-toggle__trigger{color:var(--ld-accordion-trigger-icon-col)}.ld-accordion-toggle__label,.ld-accordion-toggle__trigger{background-color:initial;font:inherit}button.ld-accordion-toggle__button:not([aria-disabled]),button.ld-accordion-toggle__label:not([aria-disabled]),button.ld-accordion-toggle__trigger:not([aria-disabled]){cursor:pointer}.ld-accordion-toggle__label{border-radius:var(--ld-accordion-border-radius);border-bottom-right-radius:0;border-top-right-radius:0;padding:var(--ld-accordion-padding-y) var(--ld-accordion-padding-x);position:relative}.ld-accordion-toggle__trigger{align-items:center;border-radius:var(--ld-accordion-border-radius);border-bottom-left-radius:0;border-top-left-radius:0;display:grid;height:var(--ld-accordion-toggle-size);justify-items:center;overflow:hidden;place-items:center;position:relative;width:var(--ld-accordion-toggle-size)}.ld-accordion-toggle__label-content,.ld-accordion-toggle__trigger-content{display:grid;position:relative;transform:translateX(calc(-1 * var(--ld-sp-1)))}.ld-accordion-toggle__label:not([aria-disabled]) .ld-accordion-toggle__label-content{color:var(--ld-accordion-toggle-col)}:host(.ld-accordion-toggle--expanded){--ld-accordion-toggle-col:var(--ld-accordion-toggle-expanded-col);border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.ld-accordion-toggle--expanded) .ld-accordion-toggle__trigger-icon{transform:scaleY(-1)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:before,:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:before{border-radius:var(--ld-br-s);bottom:var(--ld-sp-4);content:"";left:var(--ld-sp-4);left:var(--ld-sp-2);position:absolute;right:var(--ld-sp-4);top:var(--ld-sp-4)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label[aria-disabled],:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger[aria-disabled]{color:var(--ld-accordion-col-disabled)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:before{background-color:var(--ld-accordion-toggle-label-indicator-bg-col);transform:translateX(calc(var(--ld-sp-2)))}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:before{background-color:var(--ld-accordion-toggle-trigger-indicator-bg-col)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__button:not([aria-disabled]){background-color:var(--ld-accordion-bg-col)}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:not([aria-disabled]):where(:focus:focus-visible){--ld-accordion-toggle-label-indicator-bg-col:var(\n        --ld-accordion-bg-col-focus\n      )}@media (hover:hover){:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:not([aria-disabled]):where(:hover){--ld-accordion-toggle-label-indicator-bg-col:var(\n          --ld-accordion-bg-col-hover\n        )}}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__label:not([aria-disabled]):where(:active:focus-visible){--ld-accordion-toggle-label-indicator-bg-col:var(\n        --ld-accordion-bg-col-active\n      )}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:focus:focus-visible){--ld-accordion-toggle-trigger-col:var(--ld-accordion-col-focus);--ld-accordion-toggle-trigger-indicator-bg-col:var(\n        --ld-accordion-bg-col-focus\n      )}@media (hover:hover){:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:hover){--ld-accordion-toggle-trigger-col:var(--ld-accordion-col-hover);--ld-accordion-toggle-trigger-indicator-bg-col:var(\n          --ld-accordion-bg-col-hover\n        )}}:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active),:host(.ld-accordion-toggle--split) .ld-accordion-toggle__trigger:not([aria-disabled]):where(:active:focus-visible){--ld-accordion-toggle-trigger-col:var(--ld-accordion-col-active);--ld-accordion-toggle-trigger-indicator-bg-col:var(\n        --ld-accordion-bg-col-active\n      )}.ld-accordion-toggle__content{display:contents}';const p=class{constructor(d){o(this,d);this.ldaccordiontoggleclick=i(this,"ldaccordiontoggleclick",7);this.ldaccordionlabelclick=i(this,"ldaccordionlabelclick",7);this.handleToggleClick=o=>{o.preventDefault();if(this.disabled)return;this.ldaccordiontoggleclick.emit()};this.handleLabelClick=o=>{o.preventDefault();if(this.disabled)return;this.ldaccordionlabelclick.emit()};this.disabled=undefined;this.labelTag="button";this.ldTabindex=undefined;this.split=undefined;this.toggleLabel="Toggle";this.expanded=undefined;this.hasCustomIcon=false}async focusInner(){this.btnRef.focus({preventScroll:true})}async setExpanded(o){this.expanded=o}componentWillLoad(){this.hasCustomIcon=!!this.el.querySelector('[slot="icon"]')}render(){const o=c(["ld-accordion-toggle",this.expanded&&"ld-accordion-toggle--expanded",this.split&&"ld-accordion-toggle--split"]);const i=d("div",{class:"ld-accordion-toggle__trigger-content",part:"trigger-content"},d("slot",{name:"icon"}),!this.hasCustomIcon&&d("ld-icon",{name:"arrow-down",size:"sm",part:"trigger-icon","aria-hidden":"true",class:"ld-accordion-toggle__trigger-icon"}));const r=this.split?d("button",{part:"trigger focusable",class:"ld-accordion-toggle__trigger","aria-disabled":this.disabled?"true":undefined,"aria-expanded":this.expanded?"true":"false","aria-label":this.toggleLabel,onClick:this.handleToggleClick,ref:o=>this.btnRef=o},i):d("div",{part:"trigger",class:"ld-accordion-toggle__trigger"},i);const l=this.labelTag;const a=this.split?d(l,{part:`label${this.labelTag==="button"?" focusable":""}`,"aria-disabled":this.disabled?"true":undefined,class:"ld-accordion-toggle__label",onClick:this.handleLabelClick},d("div",{class:"ld-accordion-toggle__label-content",part:"label-content"},d("slot",null))):d("div",{part:"label",class:"ld-accordion-toggle__label"},d("div",{class:"ld-accordion-toggle__label-content",part:"label-content"},d("slot",null)));const e=d("div",{part:"content",class:"ld-accordion-toggle__content"},a,r);const n=this.split?d("div",{part:"toggle",class:"ld-accordion-toggle__button"},e):d("button",{"aria-disabled":this.disabled?"true":undefined,"aria-expanded":this.expanded?"true":"false",class:"ld-accordion-toggle__button",onClick:this.handleToggleClick,part:"toggle focusable",ref:o=>this.btnRef=o,tabindex:this.ldTabindex},e);return d(t,{class:o},n)}get el(){return r(this)}};p.style=u;export{n as ld_accordion,g as ld_accordion_panel,b as ld_accordion_section,p as ld_accordion_toggle};
//# sourceMappingURL=p-976199be.entry.js.map