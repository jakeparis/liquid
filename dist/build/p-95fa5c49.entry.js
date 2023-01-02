import{r as i,c as a,h as e,g as n}from"./p-765a6fc5.js";import{g as t}from"./p-891005fd.js";import{c as d}from"./p-dfb8e7ac.js";import{t as s}from"./p-f9bdba5e.js";const l=class{constructor(e){i(this,e),this.ldSidenavNavitemTo=a(this,"ldSidenavNavitemTo",7),this.ldSidenavNavitemClick=a(this,"ldSidenavNavitemClick",7),this.updateStackToTop=()=>{s(this.el,!this.sidenavClosable&&this.sidenav.narrow&&this.sidenavCollapsed)},this.getabbreviation=()=>{try{const i=this.el.textContent.trim().split(" ");return(i.length>1?i.map((i=>{const a=i.match(/[a-zA-Z]/);return a&&a[0]||""})):i[0].match(/[a-zA-Z]/g)).filter((i=>i)).slice(0,2).join("").toUpperCase()}catch(i){return""}},this.onClick=()=>{var i;this.to?this.ldSidenavNavitemTo.emit({id:this.to,label:this.el.textContent}):"LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName&&!1!==this.expandOnClick&&this.sidenavCollapsed&&(this.el.parentElement.expanded=!0),this.ldSidenavNavitemClick.emit(),null===(i=this.tooltipRef)||void 0===i||i.hideTooltip(),(this.expandOnClick||(this.to||"LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName)&&!1!==this.expandOnClick)&&(this.sidenav.collapsed=!1)},this.onKeyDown=i=>{[" ","Enter"].includes(i.key)&&(this.to&&i.preventDefault(),this.onClick())},this.updateTooltipIcon=()=>{var i;const a=this.el.closest('[class*="ld-theme-"]');a&&(this.themeClass=a.classList.toString().split(" ").find((i=>i.startsWith("ld-theme-"))),this.secondaryIconHTML=null===(i=this.el.querySelector('[slot="icon-secondary"]'))||void 0===i?void 0:i.outerHTML)},this.selected=!1,this.href=void 0,this.mode=void 0,this.rounded=!1,this.ldTabindex=void 0,this.expandOnClick=void 0,this.target=void 0,this.tetherOptions=void 0,this.to=void 0,this.tooltipContent=void 0,this.abbreviation=void 0,this.inAccordion=void 0,this.isAccordionToggle=void 0,this.sidenavAlignement=void 0,this.sidenavClosable=void 0,this.sidenavCollapsed=void 0,this.sidenavExpandsOnMouseEnter=void 0,this.secondaryIconHTML=void 0,this.closestTheme=void 0,this.themeClass=void 0}async focusInner(){var i;null===(i=this.focusableElement)||void 0===i||i.focus()}handleSidenavCollapsedChange(i){var a;i.target===this.sidenav&&(this.sidenavCollapsed=i.detail.collapsed,this.updateStackToTop(),null===(a=this.tooltipRef)||void 0===a||a.hideTooltip())}handleSidenavBreakpointChange(i){i.target===this.sidenav&&(this.sidenavClosable=i.detail,this.updateStackToTop())}componentWillLoad(){this.inAccordion="LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName,this.isAccordionToggle=this.inAccordion&&"toggle"===this.el.getAttribute("slot"),this.sidenav=d("ld-sidenav",this.el),this.sidenav&&(this.sidenavAlignement=this.sidenav.align,this.sidenavExpandsOnMouseEnter="mouseenter"===this.sidenav.expandTrigger,this.sidenavCollapsed=this.sidenav.collapsed),["secondary","tertiary"].includes(this.mode)||(this.tooltipContent=this.el.textContent.trim(),this.el.querySelector('[slot="icon"]')||(this.abbreviation=this.getabbreviation()))}componentDidLoad(){setTimeout((()=>{this.slotContainerRef.style.boxSizing="border-box"})),setTimeout((()=>{this.slotContainerRef.style.alignItems="center"}),200),setTimeout((()=>{this.updateStackToTop()}))}render(){const i=t(["ld-sidenav-navitem",this.selected&&"ld-sidenav-navitem--selected",this.inAccordion&&"ld-sidenav-navitem--in-accordion",this.rounded&&"ld-sidenav-navitem--rounded",this.mode&&`ld-sidenav-navitem--${this.mode}`,"right"===this.sidenavAlignement&&"ld-sidenav-navitem--right-aligned",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-navitem--collapsed"]),a={color:"var(--ld-thm-primary)",display:"inline-flex",marginLeft:"var(--ld-sp-6)"};return e(this.href?"a":"button",{part:"navitem focusable",class:i,href:this.href,ref:i=>this.focusableElement=i,rel:"_blank"===this.target?"noreferrer noopener":void 0,onClick:this.onClick,onKeyDown:this.onKeyDown,"aria-haspopup":this.to||this.isAccordionToggle?"true":void 0,tabIndex:this.ldTabindex},e("div",{class:"ld-sidenav-navitem__bg",part:"bg"},e("div",{class:"ld-sidenav-navitem__bg-left"}),e("div",{class:"ld-sidenav-navitem__bg-center"}),e("div",{class:"ld-sidenav-navitem__bg-right"})),e("div",{class:"ld-sidenav-navitem__dot",part:"dot"}),e("div",{class:"ld-sidenav-navitem__slot-container-icon",role:"presentation",part:"slot-container-icon"},e("slot",{name:"icon"}),this.abbreviation&&e("span",{class:"ld-sidenav-navitem__abbr",part:"abbreviation"},this.abbreviation),e("ld-tooltip",{arrow:!0,size:"sm",class:"ld-sidenav-navitem__tooltip",disabled:!this.sidenavCollapsed,ref:i=>this.tooltipRef=i,"show-delay":"250",onMouseEnter:this.updateTooltipIcon,position:"left"===this.sidenavAlignement?"right middle":"left middle",tetherOptions:this.tetherOptions,tag:"span"},e("div",{class:"ld-sidenav-navitem__tooltip-trigger",slot:"trigger"}),e("div",{class:this.themeClass,style:{display:"grid",gridAutoFlow:"column",alignItems:"center"}},e("ld-typo",null,this.tooltipContent),this.to?e("ld-icon",{style:a,name:"real-arrow"}):this.secondaryIconHTML&&e("span",{style:a,innerHTML:this.secondaryIconHTML})))),e("div",{class:"ld-sidenav-navitem__slot-container",part:"slot-container",ref:i=>this.slotContainerRef=i},e("slot",null)),e("div",{class:"ld-sidenav-navitem__slot-icon-secondary-container"},this.to?e("ld-icon",{class:"ld-sidenav-navitem__icon-to",name:"real-arrow"}):e("slot",{name:"icon-secondary"})))}get el(){return n(this)}};l.style=':host{display:flex}:host([slot=toggle]) .ld-sidenav-navitem__bg{width:var(--ld-sidenav-navitem-bg-width)}.ld-sidenav-navitem{--ld-sidenav-navitem-height:var(--ld-sp-32);--ld-sidenav-navitem-icon-font-size:90%;--ld-sidenav-navitem-indicator-additional-border-radius:var(--ld-sp-4);--ld-sidenav-navitem-col:var(--ld-col-neutral-800);--ld-sidenav-navitem-col-active:var(--ld-thm-primary-active);--ld-sidenav-navitem-col-hover:var(--ld-thm-primary);--ld-sidenav-navitem-col-focus:var(--ld-thm-primary);--ld-sidenav-navitem-indicator-col:#0000;--ld-sidenav-navitem-indicator-col-active:var(--ld-thm-primary);--ld-sidenav-navitem-indicator-col-hover:var(--ld-col-neutral-050);--ld-sidenav-navitem-indicator-col-focus:var(--ld-thm-primary-focus);--ld-sidenav-navitem-indicator-col-selected:var(--ld-col-neutral-050);--ld-sidenav-navitem-indicator-col-selected-active:var(--ld-thm-primary);--ld-sidenav-navitem-indicator-col-selected-hover:var(--ld-col-neutral-100);--ld-sidenav-navitem-indicator-col-selected-focus:var(\n    --ld-thm-primary-focus\n  );--ld-sidenav-navitem-secondary-icon-color:var(--ld-thm-primary);-webkit-touch-callout:none;align-items:center;background-color:initial;border:0;box-sizing:border-box;color:var(--ld-sidenav-navitem-col);cursor:pointer;display:flex;flex-grow:1;font:var(--ld-typo-body-s);font-weight:700;margin:0 var(--ld-sidenav-padding-x);outline:none;padding:0;position:relative;text-align:left;text-decoration:none;touch-action:manipulation;-webkit-user-select:none;user-select:none}.ld-sidenav-navitem:not(.ld-sidenav-navitem--secondary):not(.ld-sidenav-navitem--tertiary):not(.ld-sidenav-navitem--in-accordion){transform:translateY(0);transform:translateY(var(\n        --ld-sidenav-navitem-move-up-closable,var(--ld-sidenav-navitem-move-up,0)\n      ));transition:var(--ld-sidenav-stack-to-top-transition)}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--secondary,.ld-sidenav-navitem.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--tertiary{transition:visibility 0s calc(var(--ld-sidenav-transition-duration-collapse-expand)*2) linear;visibility:hidden}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed:not(.ld-sidenav-navitem--secondary):not(.ld-sidenav-navitem--tertiary){transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed:not(.ld-sidenav-navitem--right-aligned) .ld-sidenav-navitem__bg{transform:translateX(calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed)))}.ld-sidenav-navitem--in-accordion{margin:0}.ld-sidenav-navitem:active{--ld-sidenav-navitem-col:var(--ld-thm-primary-active);--ld-sidenav-navitem-indicator-col:var(\n      --ld-sidenav-navitem-indicator-col-active\n    )}.ld-sidenav-navitem:active .ld-sidenav-navitem__bg{opacity:.3}@media (hover:hover){.ld-sidenav-navitem:where(:hover){--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-hover);--ld-sidenav-navitem-indicator-col:var(\n        --ld-sidenav-navitem-indicator-col-hover\n      )}}.ld-sidenav-navitem:focus:focus-visible{--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-focus);--ld-sidenav-navitem-indicator-col:var(\n      --ld-sidenav-navitem-indicator-col-focus\n    )}.ld-sidenav-navitem:focus:focus-visible .ld-sidenav-navitem__bg{opacity:.2}.ld-sidenav-navitem:focus:focus-visible:active{--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-active);--ld-sidenav-navitem-indicator-col:var(\n        --ld-sidenav-navitem-indicator-col-active\n      )}.ld-sidenav-navitem:focus:focus-visible:active .ld-sidenav-navitem__bg{opacity:.3}.ld-sidenav-navitem--selected{--ld-sidenav-navitem-col:var(--ld-thm-primary);--ld-sidenav-navitem-indicator-col:var(\n      --ld-sidenav-navitem-indicator-col-selected\n    )}.ld-sidenav-navitem--selected:active{--ld-sidenav-navitem-indicator-col:var(\n        --ld-sidenav-navitem-indicator-col-selected-active\n      )}@media (hover:hover){.ld-sidenav-navitem--selected:where(:hover){--ld-sidenav-navitem-indicator-col:var(\n          --ld-sidenav-navitem-indicator-col-selected-hover\n        )}}.ld-sidenav-navitem--selected:focus:focus-visible{--ld-sidenav-navitem-indicator-col:var(\n        --ld-sidenav-navitem-indicator-col-selected-focus\n      )}.ld-sidenav-navitem--selected:focus:focus-visible:active{--ld-sidenav-navitem-indicator-col:var(\n          --ld-sidenav-navitem-indicator-col-selected-active\n        )}.ld-sidenav-navitem--rounded{--ld-sidenav-navitem-border-radius:calc(var(--ld-sidenav-navitem-icon-size)*0.5)}.ld-sidenav-navitem--tertiary{gap:0;margin-left:var(--ld-sidenav-navitem-tertiary-indent);width:var(--ld-sidenav-navitem-tertiary-width)}.ld-sidenav-navitem__bg{bottom:calc(var(--ld-sidenav-navitem-bg-inset)*-1);display:block;left:calc(var(--ld-sidenav-navitem-bg-inset)*-1);pointer-events:none;position:absolute;right:calc(var(--ld-sidenav-navitem-bg-inset)*-1);top:calc(var(--ld-sidenav-navitem-bg-inset)*-1);transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__bg-center,.ld-sidenav-navitem__bg-left,.ld-sidenav-navitem__bg-right{background-color:var(--ld-sidenav-navitem-indicator-col);bottom:0;pointer-events:all;position:absolute;top:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__bg-left,.ld-sidenav-navitem__bg-right{width:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sidenav-navitem-indicator-additional-border-radius)*2)}.ld-sidenav-navitem__bg-left{border-bottom-left-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sidenav-navitem-indicator-additional-border-radius));border-top-left-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sidenav-navitem-indicator-additional-border-radius));left:0}.ld-sidenav-navitem__bg-right{border-bottom-right-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sidenav-navitem-indicator-additional-border-radius));border-top-right-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sidenav-navitem-indicator-additional-border-radius));right:0}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__bg-right{transform:translateX(calc((var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed))*-1))}.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--in-accordion .ld-sidenav-navitem__bg-right{transform:translateX(calc(var(--ld-sidenav-translate-x-delta)*-1 - var(--ld-sidenav-navitem-icon-size)*-1));transform:translateX(calc((var(--ld-sidenav-translate-x-delta) - var(--ld-sidenav-navitem-icon-size) + var(--ld-sidenav-navitem-bg-right-x-delta, 0px))*-1))}.ld-sidenav-navitem__bg-center{left:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sidenav-navitem-indicator-additional-border-radius));right:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sidenav-navitem-indicator-additional-border-radius));transform-origin:left}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__bg-center{transform:scaleX(0)}.ld-sidenav-navitem__dot,.ld-sidenav-navitem__slot-container,.ld-sidenav-navitem__slot-container-icon{position:relative;z-index:0}.ld-sidenav-navitem__dot{align-self:center;display:none;flex-shrink:0;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__dot{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot{align-items:center;display:flex;justify-content:center;padding:var(--ld-sp-8) 0}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot:before,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{aspect-ratio:1;background-color:var(--ld-thm-primary);background-color:var(\n        --ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary)\n      );border-radius:var(--ld-br-s);content:"";display:block;width:var(--ld-sp-8)}.ld-sidenav-navitem--rounded.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot:before,.ld-sidenav-navitem--rounded.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{border-radius:var(--ld-br-full)}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot{width:var(--ld-sidenav-navitem-icon-size)}.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot{width:calc(var(--ld-sidenav-navitem-icon-size) - var(--ld-sp-8))}.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{background-color:initial;box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-thm-primary);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary))}.ld-sidenav-navitem__slot-container-icon{align-items:center;background-color:var(--ld-thm-primary);background-color:var(\n    --ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary)\n  );border-radius:var(--ld-sidenav-navitem-border-radius);color:var(--ld-thm-secondary-focus);color:var(--ld-sidenav-navitem-icon-col,var(--ld-thm-secondary-focus));display:flex;flex-shrink:0;height:var(--ld-sidenav-navitem-icon-size);justify-content:center;position:relative;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;width:var(--ld-sidenav-navitem-icon-size);z-index:1}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__slot-container-icon,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__slot-container-icon{display:none}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-container-icon{transform:translateX(var(--ld-sidenav-translate-x-delta))}.ld-sidenav-navitem__slot-container-icon>::slotted(*){border-radius:calc(var(--ld-sidenav-navitem-border-radius));height:100%;transform:scale(1.01);width:100%}.ld-sidenav-navitem__tooltip{bottom:calc(var(--ld-sidenav-navitem-bg-inset)*-1);left:calc(var(--ld-sidenav-navitem-bg-inset)*-1);pointer-events:all;position:absolute;right:calc(var(--ld-sidenav-navitem-bg-inset)*-1);top:calc(var(--ld-sidenav-navitem-bg-inset)*-1);z-index:1}.ld-sidenav-navitem__tooltip-trigger{aspect-ratio:1;border-radius:var(--ld-sidenav-navitem-border-radius);cursor:pointer;position:relative;width:calc(var(--ld-sidenav-navitem-icon-size) + var(--ld-sidenav-navitem-bg-inset)*2)}.ld-sidenav-navitem--rounded .ld-sidenav-navitem__tooltip-trigger{border-radius:var(--ld-br-full)}.ld-sidenav-navitem__slot-container{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;line-height:var(--ld-sidenav-line-height);margin-left:var(--ld-sp-12);margin-right:auto;max-height:var(--ld-sidenav-navitem-height);overflow:hidden;padding-right:var(--ld-sp-4);text-overflow:ellipsis;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-container{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__slot-container,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__slot-container{padding:0}.ld-sidenav-navitem__slot-icon-secondary-container{color:var(--ld-sidenav-navitem-secondary-icon-color);display:flex;flex-shrink:0;margin-right:var(--ld-sp-12);position:relative;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-icon-secondary-container{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__abbr{font:var(--ld-typo-cap-m);font-size:var(--ld-sidenav-navitem-icon-font-size);text-transform:uppercase}.ld-sidenav-navitem__icon-to{transform:translateX(var(--ld-sp-6))}';export{l as ld_sidenav_navitem}