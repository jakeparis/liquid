import{r as s,h as e,a as t}from"./p-694e6e18.js";const r=class{constructor(e){s(this,e),this.mode="error"}render(){let s="ld-input-message";return s+=` ld-input-message--${this.mode}`,e("span",{class:s},e("img",{class:"ld-input-message__icon",alt:"",role:"presentation",src:t(`./assets/${this.mode}.svg`)}),e("span",{"aria-live":"assertive"},e("slot",null)))}static get assetsDirs(){return["assets"]}};r.style=".ld-input-message{display:inline-flex;align-items:flex-start;font:var(--ld-typo-body-s);line-height:1.5}.ld-input-message--valid{color:var(--ld-col-rg-default)}.ld-input-message--error{color:var(--ld-col-rr-default)}.ld-input-message__icon{transform:translateY(.1rem);margin-top:var(--ld-sp-2);margin-right:var(--ld-sp-6);flex-shrink:0}";export{r as ld_input_message}