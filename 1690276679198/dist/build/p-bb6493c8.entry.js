import{r as i,c as t,h as s,H as a,g as e}from"./p-3b3d9802.js";import{g as n}from"./p-1133c92e.js";import{g as d}from"./p-44396e3f.js";import{c as l}from"./p-82e9a1aa.js";const o=':host{--ld-sidenav-line-height:1.15;--ld-sidenav-padding-x:1rem;--ld-sidenav-padding-y:1rem;--ld-sidenav-padding:var(--ld-sidenav-padding-y) var(--ld-sidenav-padding-x);--ld-sidenav-toggle-size:var(--ld-sp-24);--ld-sidenav-toggle-top:calc(2 * var(--ld-sidenav-padding-y) + var(--ld-sidenav-navitem-icon-size) - 0.5 * var(--ld-sidenav-toggle-size));--ld-sidenav-translate-x-delta:calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed));--ld-sidenav-width:15.625rem;--ld-sidenav-width-collapsed:calc(2 * var(--ld-sidenav-padding-x) + var(--ld-sidenav-navitem-icon-size));--ld-sidenav-width-fully-collapsed:calc(-1 * var(--ld-sp-1));--ld-sidenav-navitem-active-indicator-border-width:0.1875rem;--ld-sidenav-navitem-icon-size:var(--ld-sp-32);--ld-sidenav-navitem-bg-inset:var(--ld-sp-6);--ld-sidenav-navitem-border-radius:var(--ld-br-l);--ld-sidenav-navitem-tertiary-indent:calc(3 * var(--ld-sidenav-padding-x) + 0.3125rem);--ld-sidenav-navitem-tertiary-width:calc(100% - (4 * var(--ld-sidenav-padding-x)) - 0.3125rem);--ld-sidenav-collapse-content-transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;--ld-sidenav-transition-delay:0s;--ld-sidenav-transition-delay-collapse-expand:0s;--ld-sidenav-transition-duration:var(--ld-transition-duration-instant);--ld-sidenav-transition-duration-collapse-expand:var(\n    --ld-transition-duration-instant\n  );--ld-sidenav-translate-x-direction:1;--ld-sidenav-stack-to-top-transition:transform var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) ease;--ld-sidenav-bg-color:var(--ld-col-wht);--ld-sidenav-separator-line-bg-col:var(--ld-col-neutral-100);--ld-sidenav-subnav-bg-color:var(--ld-col-wht)}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--transitions){--ld-sidenav-transition-duration:var(--ld-transition-duration-normal);--ld-sidenav-transition-duration-collapse-expand:var(\n        --ld-transition-duration-normal\n      );--ld-sidenav-transition-delay:var(--ld-transition-duration-quick);--ld-sidenav-transition-delay-collapse-expand:var(\n        --ld-transition-duration-quick\n      )}}@media (prefers-reduced-motion:no-preference){:host(.ld-sidenav--toggle-transition-disabled){--ld-sidenav-transition-duration-collapse-expand:var(\n        --ld-transition-duration-instant\n      );--ld-sidenav-transition-delay-collapse-expand:0s}}:host{background-color:var(--ld-sidenav-bg-color);bottom:0;box-sizing:border-box;display:flex;flex-direction:column;font:var(--ld-typo-body-m);left:0;overflow:hidden;position:var(--ld-sidenav-position,fixed);text-align:left;top:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;width:var(--ld-sidenav-width);z-index:var(--ld-sidenav-z-index,1)}:host:before{background-color:var(--ld-sidenav-separator-line-bg-col);bottom:0;content:"";position:absolute;right:0;top:0;width:var(--ld-sp-2);z-index:2}:host .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--closable:not(.ld-sidenav--open)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:hidden}:host(.ld-sidenav--collapsed:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction) * (-100% + var(--ld-sidenav-width-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)){transform:translateX(calc(var(--ld-sidenav-translate-x-direction) * (-100% + var(--ld-sidenav-width-fully-collapsed))))}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)) .ld-sidenav__content{opacity:0;visibility:hidden}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible.ld-sidenav--transitions:not(.ld-sidenav--closable)) .ld-sidenav__content{transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear}:host(.ld-sidenav--right){--ld-sidenav-translate-x-direction:-1;--ld-sidenav-translate-x-delta:0;left:unset;right:0}:host(.ld-sidenav--right):before{left:0;right:unset;transform:translateX(-50%) scaleX(1.5)}:host(.ld-sidenav--closable){--ld-sidenav-collapse-content-transition:none;--ld-sidenav-stack-to-top-transition:none;--ld-sidenav-navitem-move-up-closable:0;--ld-sidenav-translate-x-delta:0;transform:translateX(calc(var(--ld-sidenav-translate-x-direction) * -100%));width:100%}:host(.ld-sidenav--closable.ld-sidenav--open){transform:translateX(0)}:host ::slotted(ld-sidenav-navitem){margin-bottom:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-navitem[slot=bottom]),:host ::slotted(ld-sidenav-navitem[slot=top]){margin-top:var(--ld-sidenav-padding-y)}:host ::slotted(ld-sidenav-heading){margin:var(--ld-sidenav-padding-y) 0}.ld-sidenav__toggle{-webkit-touch-callout:none;aspect-ratio:1;background-color:var(--ld-col-wht);border:0;border-radius:var(--ld-br-full);box-shadow:var(--ld-shadow-stacked);color:var(--ld-thm-primary);cursor:pointer;display:grid;outline-offset:var(--ld-sp-4);place-content:center;position:absolute;right:0;top:var(--ld-sidenav-toggle-top);touch-action:manipulation;transform:translateX(50%);width:var(--ld-sidenav-toggle-size);will-change:transform;z-index:1}.ld-sidenav__toggle:before{inset:0}.ld-sidenav__toggle:after,.ld-sidenav__toggle:before{border-radius:inherit;content:"";display:block;position:absolute}.ld-sidenav__toggle:after{inset:calc(-1 * var(--ld-sp-6))}.ld-sidenav__toggle:focus:focus-visible:not(:active),.ld-sidenav__toggle:hover:not(:active){box-shadow:var(--ld-shadow-sticky)}.ld-sidenav__toggle:where(:focus:focus-visible){color:var(--ld-thm-primary-hover)}.ld-sidenav__toggle:where(:focus:focus-visible):before{background-color:var(--ld-thm-primary-alpha-low)}@media (hover:hover){.ld-sidenav__toggle:where(:hover){color:var(--ld-thm-primary-hover)}}.ld-sidenav__toggle:where(:active),.ld-sidenav__toggle:where(:active:focus-visible){color:var(--ld-thm-primary-active)}:host(.ld-sidenav--right) .ld-sidenav__toggle{left:0;right:unset;transform:translateX(-50%)}.ld-sidenav__toggle-icon{position:relative;transform-origin:center}:host(.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right) .ld-sidenav__toggle-icon{transform:rotate(180deg)}:host(.ld-sidenav--right.ld-sidenav--collapsed) .ld-sidenav__toggle-icon{transform:none}.ld-sidenav__content{display:flex;flex-direction:column;height:100%;overflow:hidden;will-change:transform}.ld-sidenav__slot-container-default{height:100%;position:relative}.ld-sidenav__slot-container-bottom,.ld-sidenav__slot-container-top{background-color:var(--ld-sidenav-bg-color);position:relative;z-index:1}.ld-sidenav__slot-container-bottom:before,.ld-sidenav__slot-container-default:before,.ld-sidenav__slot-container-top:before{background-color:var(--ld-sidenav-subnav-bg-color);content:"";inset:0;opacity:0;position:absolute;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear;visibility:visible;z-index:0}:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-bottom:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-default:before,:host(.ld-sidenav--has-active-subnav) .ld-sidenav__slot-container-top:before{opacity:1}.ld-sidenav__fully-collapsed-click-area{display:none;inset:0;position:absolute;z-index:1}:host(.ld-sidenav--collapsed.ld-sidenav--fully-collapsible:not(.ld-sidenav--closable)) .ld-sidenav__fully-collapsed-click-area{display:block}';const r=class{constructor(s){i(this,s);this.ldSidenavCollapsedChange=t(this,"ldSidenavCollapsedChange",7);this.ldSidenavOpenChange=t(this,"ldSidenavOpenChange",7);this.ldSidenavBreakpointChange=t(this,"ldSidenavBreakpointChange",7);this.ldSidenavBack=t(this,"ldSidenavBack",7);this.ldSidenavNavitemTo=t(this,"ldSidenavNavitemTo",7);this.ldSidenavNavitemClick=t(this,"ldSidenavNavitemClick",7);this.ldSidenavSliderChange=t(this,"ldSidenavSliderChange",7);this.toFocus=undefined;this.focusTimeout=undefined;this.updateFocus=()=>{clearTimeout(this.focusTimeout);if(this.toFocus){if(this.toFocus.tabIndex===-1||window.getComputedStyle(this.toFocus).visibility==="hidden"){this.focusTimeout=setTimeout(this.updateFocus,10);return}this.toFocus.focus();this.toFocus=undefined}};this.toggleCollapsedState=()=>{this.collapsed=!this.collapsed};this.activeSubnavContainsIconsOrHasBack=()=>{const i=Array.from(this.el.children);const t=i.some((i=>i.tagName==="LD-SIDENAV-BACK"));const s=i.some((i=>i.tagName==="LD-SIDENAV-NAVITEM"&&!["secondary","tertiary"].includes(i.mode)));if(t||s){return true}const a=this.el.querySelector("ld-sidenav-slider");const e=a.currentSubnav?this.el.querySelector(`#${a.currentSubnav}`):a;const n=Array.from(e.children).filter((i=>i.tagName==="LD-SIDENAV-NAVITEM"&&i.mode==="primary"));const d=Array.from(e.querySelectorAll('ld-sidenav-accordion > ld-sidenav-navitem[slot="toggle"]')).filter((i=>i.mode==="primary"));const l=n.length+d.length;return!!l};this.isToggleOutside=i=>(i===null||i===void 0?void 0:i.tagName)==="LD-SIDENAV-TOGGLE-OUTSIDE";this.onTransitionEnd=i=>{if(i.target===this.el){this.transitions=true;if(this.fullyCollapsible){if(!this.collapsed){const i=d(this.el);i.focus()}else if(document.activeElement.closest("ld-sidenav")===this.el){const i=this.el.previousElementSibling;if(this.isToggleOutside(i)){i.focusInner()}}}}};this.onMatchMediaChange=i=>{this.closable=i.matches;this.transitions=false;if(this.closable&&this.collapsible)this.collapsed=true;this.ldSidenavBreakpointChange.emit(this.closable)};this.align="left";this.breakpoint="23.4375rem";this.collapsed=false;this.collapseTrigger="toggle";this.collapsible=false;this.expandTrigger="toggle";this.label="Side navigation";this.narrow=false;this.open=false;this.toggleTransitionDisabled=false;this.trapFocus=undefined;this.closable=undefined;this.fullyCollapsible=false;this.hasActiveSubnav=false;this.hasShadowBottom=false;this.hasShadowTop=false;this.transitions=false}async toggle(){if(this.closable){this.open=!this.open}else{this.toggleCollapsedState()}}onCollapsedChange(i){this.ldSidenavCollapsedChange.emit({collapsed:i,fully:this.fullyCollapsible});if(i){this.open=false}}onOpenChange(i){this.ldSidenavOpenChange.emit(i);if(!i&&this.collapsible){this.collapsed=true}}updateFullyCollapsible(){var i;this.fullyCollapsible=this.collapsible&&(!this.narrow||!this.activeSubnavContainsIconsOrHasBack());if(!this.collapsible)this.collapsed=false;(i=this.el.querySelector("ld-sidenav-header"))===null||i===void 0?void 0:i.updateCollapsible()}handleClickOutside(i){if(i.isTrusted&&["clickoutside","mouseout"].includes(this.collapseTrigger)&&l("ld-sidenav",i.target)!==this.el){this.collapsed=this.collapsible}}handleMouseOut(i){if(this.collapseTrigger==="mouseout"&&i.relatedTarget&&i.relatedTarget.closest("ld-sidenav")!==this.el){this.collapsed=this.collapsible}}handleMouseIn(){if(this.fullyCollapsible||this.expandTrigger==="mouseenter"){this.collapsed=false}}handleOpen(){this.open=true}handleClose(){clearTimeout(this.focusTimeout);this.open=false}handleSlideBack(){clearTimeout(this.focusTimeout);const i=Array.from(this.el.querySelectorAll(".ld-sidenav-subnav--active")).pop();const t=i===null||i===void 0?void 0:i.id;const s=i===null||i===void 0?void 0:i.parentElement;this.el.querySelector("ld-sidenav-slider").navigateBack();this.toFocus=s===null||s===void 0?void 0:s.querySelector(`[to='${t}']`).shadowRoot.querySelector('[part*="focusable"]');this.collapsed=false}slideToHandler(){var i;clearTimeout(this.focusTimeout);const t=(i=this.el.querySelector("ld-sidenav-back"))===null||i===void 0?void 0:i.shadowRoot.querySelector(".ld-sidenav-back");this.toFocus=t;this.updateFocus()}slideChangeHandler(i){var t,s;clearTimeout(this.focusTimeout);(t=this.el.querySelector("ld-sidenav-back"))===null||t===void 0?void 0:t.updateLabel((s=i.detail)===null||s===void 0?void 0:s.label);this.hasActiveSubnav=!!i.detail;this.updateFullyCollapsible();this.updateFocus()}handleKeyDown(i){const t=document.activeElement.closest("ld-sidenav")===this.el;if(t&&i.key==="Tab"&&!i.shiftKey&&document.activeElement===this.el.querySelector("ld-sidenav-back")){const{currentSubnav:i}=this.el.querySelector("ld-sidenav-slider");if(i){const t=d(this.el.querySelector(`#${i}`));setTimeout((async()=>{if("focusInner"in t){await t.focusInner()}else{t.focus()}}))}}if(!t&&!this.closable){return}const s=this.el.querySelector("ld-sidenav-slider");if(i.key==="Escape"){if(!s&&this.closable){this.open=false;return}if(this.hasActiveSubnav){this.handleSlideBack()}else if(this.closable){this.open=false}}}async handleFocusout(i){const t=i.relatedTarget;const s=l("ld-sidenav",t)===this.el;if(!s&&t!==null){if(this.collapseTrigger==="mouseout"){this.collapsed=this.collapsible}}if(this.expandTrigger==="mouseenter"&&s){this.collapsed=false}if(!this.closable||!this.open)return;if(this.trapFocus===undefined)return;if(s)return;const a=this.trapFocus!==""&&(!t||(t===null||t===void 0?void 0:t.matches(this.trapFocus)));if(a)return;const e=i.target;const n=e.closest("ld-sidenav")===this.el;const o=this.trapFocus!==""&&!!e.closest(this.trapFocus);if(!n&&!o)return;const r=d(this.el);const v=this.trapFocus===""?[r]:Array.from(document.querySelectorAll(this.trapFocus));const h=v.find(d);const c=r===e;const p=h===e;const u=Array.from(this.el.querySelectorAll("*")).reverse().find(d);const f=v.reverse().find(d);const g=n?c?f:h:p?u:r;if(!g)return;if("focusInner"in g){await g.focusInner()}else{g===null||g===void 0?void 0:g.focus()}}handleHeaderToggleClick(){this.toggle()}componentWillLoad(){this.mediaQuery=window.matchMedia(`(max-width: ${this.breakpoint})`);this.mediaQuery.addEventListener("change",this.onMatchMediaChange);this.closable=this.mediaQuery.matches;this.updateFullyCollapsible()}componentDidLoad(){this.ldSidenavCollapsedChange.emit({collapsed:this.collapsible&&this.collapsed,fully:this.fullyCollapsible});this.ldSidenavOpenChange.emit(this.open);this.ldSidenavBreakpointChange.emit(this.closable);setTimeout((()=>{this.transitions=true}))}disconnectedCallback(){var i;(i=this.mediaQuery)===null||i===void 0?void 0:i.removeEventListener("change",this.onMatchMediaChange)}render(){const i=["ld-sidenav",this.align==="right"&&"ld-sidenav--right",this.transitions&&"ld-sidenav--transitions",this.closable&&"ld-sidenav--closable",this.collapsible&&this.collapsed&&"ld-sidenav--collapsed",this.collapsible&&"ld-sidenav--collapsible",this.fullyCollapsible&&"ld-sidenav--fully-collapsible",this.hasActiveSubnav&&"ld-sidenav--has-active-subnav",this.hasShadowTop&&"ld-sidenav--has-shadow-top",this.hasShadowBottom&&"ld-sidenav--has-shadow-bottom",this.open&&"ld-sidenav--open",this.toggleTransitionDisabled&&"ld-sidenav--toggle-transition-disabled"];return s(a,{onTransitionEnd:this.onTransitionEnd,class:n(i),role:"navigation","aria-label":this.label},s("slot",{name:"header"}),s("div",{class:"ld-sidenav__content"},s("div",{class:"ld-sidenav__slot-container-top",part:"slot-container-top"},s("slot",{name:"top"})),s("ld-sidenav-scroller-internal",{class:"ld-sidenav__scroller",part:"scroll-container"},s("div",{class:"ld-sidenav__slot-container-default",part:"slot-container"},s("slot",null))),s("div",{class:"ld-sidenav__slot-container-bottom",part:"slot-container-bottom"},s("slot",{name:"bottom"}))),s("div",{onClick:this.toggle.bind(this),class:"ld-sidenav__fully-collapsed-click-area"}))}get el(){return e(this)}static get watchers(){return{collapsed:["onCollapsedChange"],open:["onOpenChange"],collapsible:["updateFullyCollapsible"],narrow:["updateFullyCollapsible"]}}};r.style=o;export{r as ld_sidenav};
//# sourceMappingURL=p-bb6493c8.entry.js.map