import{r as a,h as t,H as e}from"./p-765a6fc5.js";const s=class{constructor(t){a(this,t),this.loaded=!1}async setDarkMode(a){this.darkMode=a}updateDarkMode(a){this.loaded&&this.iframe.contentWindow.postMessage({mode:"updateDarkmode",darkMode:a})}componentDidLoad(){this.iframe.addEventListener("load",(()=>{this.loaded=!0,this.updateDarkMode(this.darkMode)}))}render(){return t(e,{class:"docs-iframe"},t("iframe",{ref:a=>this.iframe=a,src:this.src}))}static get watchers(){return{darkMode:["updateDarkMode"]}}};s.style=".docs-iframe{inset:0;left:max(calc(var(--docs-nav-width) + 50vw - var(--docs-max-width)/2),var(--docs-nav-width));position:fixed;top:var(--docs-header-height)}@media (max-width:52rem){.docs-iframe{left:0}}.docs-iframe iframe{height:100%;width:100%}";export{s as docs_iframe}