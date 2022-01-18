import{r as o,h as e,H as l}from"./p-4bb69ba2.js";import{g as s}from"./p-891005fd.js";let d=class{constructor(e){o(this,e),this.stacked=!1,this.opened=!1,this.themable=!1,this.hasPadding=!1,this.currentTheme="ocean",this.isCodeVisible=this.opened,this.isWebComponent=!0}handlePickTheme(o){this.currentTheme=o.detail}handleToggleCode(o){this.isCodeVisible=o.detail}handleSwitchComponent(o){this.isWebComponent=o.detail}render(){const o=["docs-example",this.isCodeVisible&&"docs-example--code-visible",this.hasPadding&&"docs-example--has-padding",this.isWebComponent?"docs-example--web-component":" docs-example--css-component"];let d="docs-example__show";return this.themable&&this.currentTheme&&(d+=" ld-theme-"+this.currentTheme.toLowerCase()),this.stacked&&(d+=" docs-example__show--stacked"),this.background&&(d+=` docs-example__show--${this.background}`),e(l,{class:s(o)},e("div",{class:d},e("slot",{name:"show"}),e("slot",{name:"showCssComponent"})),e("div",{class:"docs-example__tools-scroll-container"},e("div",{class:"docs-example__tools"},this.codeCssComponent&&e("docs-switch-web-css",null),e("div",{class:"docs-example__tool-buttons"},this.themable&&e("docs-pick-theme",null),e("docs-copy-to-cb",{textToCopy:decodeURIComponent(this.isWebComponent?this.code:this.codeCssComponent)}),e("docs-toggle-code",{isOn:this.isCodeVisible})))),e("div",{class:"docs-example__code"},e("slot",{name:"code"}),e("slot",{name:"codeCssComponent"})))}};d.style=".docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-100);border-color:var(--ld-col-neutral-100)}.docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-example__tool-buttons{filter:none}@media (prefers-color-scheme:dark){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__tool-buttons{filter:invert(1) hue-rotate(180deg)}}.docs-ui-light .docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-ui-light .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-100);border-color:var(--ld-col-neutral-100)}.docs-ui-light .docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-ui-light .docs-example__tool-buttons{filter:none}.docs-ui-dark .docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-ui-dark .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-600);border-color:var(--ld-col-neutral-600)}.docs-ui-dark .docs-example__tools{stroke:var(--ld-col-wht)}.docs-ui-dark .docs-example__tool-buttons{filter:invert(1) hue-rotate(180deg)}.docs-example{display:block}.docs-example__code{overflow:hidden;display:none;border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__code pre{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__tools-scroll-container{position:relative;overflow:auto;display:flex;width:100%;border-style:solid;border-width:var(--ld-sp-1);border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__tools{padding:var(--ld-sp-8);display:flex;justify-content:space-between;align-items:center;flex-grow:1}.docs-example__tools .docs-switch-web-css{margin-right:var(--ld-sp-24);flex-shrink:0}.docs-example__tools .docs-example__tool-buttons{display:flex;flex:1 0;align-items:center;justify-content:flex-end}.docs-example__tools .docs-example__tool-buttons>:not(:first-child){margin-left:var(--ld-sp-12)}.docs-example__show{background-color:var(--ld-col-neutral-010);color:var(--ld-col-neutral-900);border-bottom-width:0;border-top-left-radius:var(--ld-br-l);border-top-right-radius:var(--ld-br-l);overflow:hidden}.docs-example--has-padding .docs-example__show{border:var(--ld-sp-1) solid var(--ld-col-neutral-100);padding:0 var(--ld-sp-8) var(--ld-sp-24)}@media (max-width:48rem){.docs-example--has-padding .docs-example__show{padding:0 0 var(--ld-sp-24)}}.docs-example--has-padding .docs-example__show>div>*{margin:var(--ld-sp-24) var(--ld-sp-24) 0;max-width:calc(100% - var(--ld-sp-24)*2)}.docs-example__show>div{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-evenly;width:100%}.docs-example__show--stacked>div{flex-direction:column}.docs-example__show--brand{border-color:transparent}.docs-example__show--brand.ld-theme-ocean{background-color:var(--ld-thm-ocean-primary)}.docs-example__show--brand.ld-theme-bubblegum,.docs-example__show--brand.ld-theme-shake,.docs-example__show--brand.ld-theme-solvent{background-color:var(--ld-thm-shake-primary)}.docs-example__show--brand.ld-theme-tea{background-color:var(--ld-thm-tea-primary)}.docs-example__show--light{background-color:var(--ld-col-wht)}.docs-example--code-visible .docs-example__tools-scroll-container{border-radius:0}.docs-example--code-visible .docs-example__code{display:block}.docs-example--web-component [slot=codeCssComponent],.docs-example--web-component [slot=showCssComponent]{display:none}.docs-example--css-component [slot=code],.docs-example--css-component [slot=show]{display:none}";export{d as docs_example}