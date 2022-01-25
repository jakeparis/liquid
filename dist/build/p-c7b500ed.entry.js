import{r as t,c as e,h as s,H as a,g as i}from"./p-4bb69ba2.js";let l=0,d=class{constructor(s){t(this,s),this.ldtabchange=e(this,"ldtabchange",7),this.idDescriber="ld-tabs-"+l++,this.handleLdtabselect=t=>{t.stopImmediatePropagation();const e=t.target;this.updateTabs(e),this.updateTabPanels(e.id),this.ldtabchange.emit(e.id)}}updateTabs(t){var e;null===(e=Array.from(this.el.querySelectorAll("ld-tab")).find((t=>t.hasAttribute("selected"))))||void 0===e||e.removeAttribute("selected"),t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}updateTabPanels(t){var e,s;const a=Array.from(this.el.querySelectorAll("ld-tabpanel"));null===(e=a.find((t=>!t.hasAttribute("hidden"))))||void 0===e||e.setAttribute("hidden",void 0),null===(s=a.find((e=>e.getAttribute("aria-labelledby")===t)))||void 0===s||s.removeAttribute("hidden")}async switchTab(t){const e="number"==typeof t?this.el.querySelectorAll("ld-tab")[t]:this.el.querySelector(`ld-tab#${t}`);if(!e)throw new Error(`Could not find ld-tab with ${"number"==typeof t?"index":"id"} ${"number"==typeof t?t:`"${t}"`}.`);e.select()}componentDidRender(){let t;this.el.querySelectorAll("ld-tab").forEach(((e,s)=>{e.id=`${this.idDescriber}-tab-${s}`,e.selected&&(t=s)})),this.el.querySelectorAll("ld-tabpanel").forEach(((e,s)=>{e.setAttribute("aria-labelledby",`${this.idDescriber}-tab-${s}`),t===s?e.removeAttribute("hidden"):e.setAttribute("hidden","true")}))}render(){return s(a,{onLdtabselect:this.handleLdtabselect,class:"ld-tabs"},s("slot",null))}get el(){return i(this)}};d.style="";export{d as ld_tabs}