import{r as d,c as a,h as i,H as e,g as o}from"./p-21a69c18.js";import{c as r}from"./p-71026bf3.js";import{g as l}from"./p-1133c92e.js";import{r as t}from"./p-8dc70a87.js";import{i as s}from"./p-b05f0e4e.js";const n='.ld-radio,:host{--ld-radio-size:1.25rem;--ld-radio-dot-size:0.625rem;--ld-radio-bg-col:var(--ld-col-wht);--ld-radio-bg-col-hover:var(--ld-col-neutral-010);--ld-radio-bg-col-active:var(--ld-col-neutral-050);--ld-radio-disabled-col:var(--ld-col-neutral-300);--ld-radio-disabled-bg-col:var(--ld-col-neutral-100);--ld-radio-dark-bg-col:var(--ld-col-neutral-050);--ld-radio-dark-bg-col-hover:var(--ld-col-neutral-100);--ld-radio-dark-bg-col-active:var(--ld-col-neutral-300);--ld-radio-checked-col:var(--ld-col-wht);--ld-radio-checked-col-active:var(--ld-col-wht);--ld-radio-invalid-checked-col:var(--ld-col-wht);--ld-radio-invalid-checked-col-active:var(--ld-col-wht);--ld-radio-col:var(--ld-thm-primary);--ld-radio-col-hover:var(--ld-thm-primary-hover);--ld-radio-col-active:var(--ld-thm-primary-active);--ld-radio-col-focus:var(--ld-thm-primary-focus);--ld-radio-invalid-col:var(--ld-thm-error);--ld-radio-invalid-col-hover:var(--ld-thm-error-hover);--ld-radio-invalid-col-focus:var(--ld-thm-error-focus);--ld-radio-invalid-col-active:var(--ld-thm-error-active);--ld-radio-warn-col:var(--ld-thm-warning);--ld-radio-warn-col-hover:var(--ld-thm-warning-hover);--ld-radio-warn-col-focus:var(--ld-thm-warning-focus);--ld-radio-warn-col-active:var(--ld-thm-warning-active);--ld-radio-warn-checked-col:var(--ld-thm-warning-active);--ld-radio-warn-checked-col-active:var(--ld-thm-warning-hover);box-sizing:border-box;display:inline-flex;flex-shrink:0;height:var(--ld-radio-size);min-width:auto!important;position:relative;width:var(--ld-radio-size)}.ld-radio input,:host input{-webkit-appearance:none;appearance:none;background-color:initial;height:100%;inset:0;margin:0;position:absolute;width:100%;z-index:1}.ld-radio input:checked~.ld-radio__dot,:host input:checked~.ld-radio__dot{visibility:inherit}.ld-radio input:where(:disabled)~.ld-radio__dot,.ld-radio input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))~.ld-radio__dot,:host input:where(:disabled)~.ld-radio__dot,:host input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))~.ld-radio__dot{background-color:var(--ld-radio-disabled-col)}.ld-radio input:where(:disabled)~.ld-radio__box,.ld-radio input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))~.ld-radio__box,:host input:where(:disabled)~.ld-radio__box,:host input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))~.ld-radio__box{background-color:initial;box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-disabled-bg-col)}.ld-radio input:where(:disabled):checked~.ld-radio__box,.ld-radio input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):checked~.ld-radio__box,:host input:where(:disabled):checked~.ld-radio__box,:host input:where([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):checked~.ld-radio__box{background-color:var(--ld-radio-disabled-bg-col)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))),:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))){cursor:pointer}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__dot,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__dot{background-color:var(--ld-radio-col-active)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__box{box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):focus:focus-visible~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):focus:focus-visible~.ld-radio__box{background-color:initial;box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-focus)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):active:focus-visible~.ld-radio__box,.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):active~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):active:focus-visible~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):active~.ld-radio__box{background-color:var(--ld-radio-bg-col-active);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-active)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked~.ld-radio__dot,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked~.ld-radio__dot{background-color:var(--ld-radio-checked-col)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked~.ld-radio__box{background-color:var(--ld-radio-col);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:focus:focus-visible~.ld-radio__dot,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:focus:focus-visible~.ld-radio__dot{background-color:var(--ld-radio-col-active)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:focus:focus-visible~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:focus:focus-visible~.ld-radio__box{background-color:var(--ld-radio-col-focus);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-focus)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active:focus-visible~.ld-radio__dot,.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active~.ld-radio__dot,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active:focus-visible~.ld-radio__dot,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active~.ld-radio__dot{background-color:var(--ld-radio-checked-col-active)}.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active:focus-visible~.ld-radio__box,.ld-radio input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active:focus-visible~.ld-radio__box,:host input:where(:not(:disabled):not([aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):checked:active~.ld-radio__box{background-color:var(--ld-radio-col-active);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-active)}.ld-radio :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__box,:host :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))))~.ld-radio__box{background-color:var(--ld-radio-bg-col)}@media (hover:hover){.ld-radio :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover~.ld-radio__box,:host :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover~.ld-radio__box{background-color:var(--ld-radio-bg-col-hover);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-hover)}.ld-radio :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover:checked~.ld-radio__dot,:host :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover:checked~.ld-radio__dot{color:var(--ld-radio-checked-col)}.ld-radio :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover:checked~.ld-radio__box,:host :where(input:not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false])))):hover:checked~.ld-radio__box{background-color:var(--ld-radio-col-hover);box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-radio-col-hover)}}.ld-radio.ld-radio--dark :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked)~.ld-radio__box,:host(.ld-radio.ld-radio--dark) :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked)~.ld-radio__box{background-color:var(--ld-radio-dark-bg-col)}@media (hover:hover){.ld-radio.ld-radio--dark :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):hover~.ld-radio__box,:host(.ld-radio.ld-radio--dark) :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):hover~.ld-radio__box{background-color:var(--ld-radio-dark-bg-col-hover)}}.ld-radio.ld-radio--dark :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):active:focus-visible~.ld-radio__box,.ld-radio.ld-radio--dark :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):active~.ld-radio__box,:host(.ld-radio.ld-radio--dark) :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):active:focus-visible~.ld-radio__box,:host(.ld-radio.ld-radio--dark) :where(input):not(:disabled):not(input[aria-disabled]:where(:not([aria-disabled=""]):not([aria-disabled=false]))):not(:checked):active~.ld-radio__box{background-color:var(--ld-radio-dark-bg-col-active)}.ld-radio__dot{height:var(--ld-radio-dot-size);left:50%;top:50%;transform:translate(-50%,-50%);visibility:hidden;width:var(--ld-radio-dot-size);z-index:1}.ld-radio__box,.ld-radio__dot{pointer-events:none;position:absolute}.ld-radio__box{box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-col-rblck4);height:100%;width:100%}.ld-radio,.ld-radio__box,.ld-radio__dot,:host{border-radius:var(--ld-br-full)}.ld-radio--highlight,:host(.ld-radio--highlight){--ld-radio-col:var(--ld-radio-warn-col);--ld-radio-col-hover:var(--ld-radio-warn-col-hover);--ld-radio-col-active:var(--ld-radio-warn-col-focus);--ld-radio-col-focus:var(--ld-radio-warn-col-active);--ld-radio-checked-col:var(--ld-radio-warn-checked-col);--ld-radio-checked-col-active:var(--ld-radio-warn-checked-col-active)}.ld-radio--danger,.ld-radio--invalid,:host(.ld-radio--danger),:host(.ld-radio--invalid){--ld-radio-col:var(--ld-radio-invalid-col);--ld-radio-col-hover:var(--ld-radio-invalid-col-hover);--ld-radio-col-active:var(--ld-radio-invalid-col-focus);--ld-radio-col-focus:var(--ld-radio-invalid-col-active);--ld-radio-checked-col:var(--ld-radio-invalid-checked-col);--ld-radio-checked-col-active:var(--ld-radio-invalid-checked-col-active)}';const h=class{constructor(i){d(this,i);this.ldchange=a(this,"ldchange",7);this.ldinput=a(this,"ldinput",7);this.handleKeyDown=d=>{switch(d.key){case"ArrowUp":case"ArrowLeft":{d.preventDefault();this.focusAndSelect("prev");return}case"ArrowDown":case"ArrowRight":{d.preventDefault();this.focusAndSelect("next");return}}};this.handleChange=d=>{this.el.dispatchEvent(new InputEvent("change",d));this.ldchange.emit(this.checked)};this.handleClick=d=>{if(this.disabled||s(this.el.ariaDisabled)){d===null||d===void 0?void 0:d.preventDefault();return}if(this.checked)return;if(this.name){Array.from(document.querySelectorAll("ld-radio")).filter((d=>d.getAttribute("name")===this.name)).forEach((d=>{d.checked=false;d.groupChecked=true}))}this.checked=true;if(!d.isTrusted){this.el.dispatchEvent(new InputEvent("input",{bubbles:true,composed:true}));this.handleInput();this.el.dispatchEvent(new InputEvent("change",{bubbles:true}));this.ldchange.emit(this.checked)}};this.handleInput=()=>{this.ldinput.emit(this.checked)};this.ariaDisabled=undefined;this.autofocus=undefined;this.checked=false;this.disabled=undefined;this.form=undefined;this.groupChecked=false;this.invalid=undefined;this.ldTabindex=undefined;this.mode=undefined;this.name=undefined;this.readonly=undefined;this.required=undefined;this.tone=undefined;this.value=undefined;this.clonedAttributes=undefined}async focusInner(){if(this.input!==undefined){this.input.focus()}}updateHiddenInput(){const d=this.el.closest("form");if(!this.hiddenInput&&this.name&&(d||this.form)){this.createHiddenInput()}if(this.hiddenInput){if(!this.name){this.hiddenInput.remove();this.hiddenInput=undefined;return}this.hiddenInput.name=this.name;this.hiddenInput.checked=this.checked;if(this.value){this.hiddenInput.value=this.value}else{this.hiddenInput.removeAttribute("value")}if(this.form){this.hiddenInput.setAttribute("form",this.form)}else if(this.hiddenInput.getAttribute("form")){if(d){this.hiddenInput.removeAttribute("form")}else{this.hiddenInput.remove();this.hiddenInput=undefined}}}}createHiddenInput(){this.hiddenInput=document.createElement("input");this.hiddenInput.type="radio";this.hiddenInput.style.visibility="hidden";this.hiddenInput.style.position="absolute";this.hiddenInput.style.pointerEvents="none";this.el.appendChild(this.hiddenInput)}focusAndSelect(d){const a=Array.from(document.querySelectorAll("ld-radio")).filter((d=>d.getAttribute("name")===this.name));a.forEach(((i,e)=>{if(i===this.el){const i=a[e+(d==="next"?1:-1)];if(i){i.focusInner();i.click()}}}))}componentWillLoad(){this.attributesObserver=r.call(this,["tone","mode"]);const d=this.el.closest("form");if(this.name&&(d||this.form)){this.createHiddenInput();this.hiddenInput.checked=this.checked;this.hiddenInput.name=this.name;if(this.form){this.hiddenInput.setAttribute("form",this.form)}if(this.value){this.hiddenInput.value=this.value}}if(this.checked){Array.from(document.querySelectorAll("ld-radio")).filter((d=>d.getAttribute("name")===this.name)).forEach((d=>{d.groupChecked=true}))}t(this.autofocus)}disconnectedCallback(){if(this.attributesObserver)this.attributesObserver.disconnect()}render(){const d=["ld-radio",this.mode&&`ld-radio--${this.mode}`,this.tone&&`ld-radio--${this.tone}`,this.invalid&&"ld-radio--invalid"];return i(e,{part:"root",class:l(d),onClick:this.handleClick},i("input",Object.assign({type:"radio"},this.clonedAttributes,{part:"input focusable",onChange:this.handleChange,onInput:this.handleInput,onKeyDown:this.handleKeyDown,ref:d=>this.input=d,disabled:this.disabled,checked:this.checked,tabIndex:this.disabled||this.checked||!this.groupChecked?this.ldTabindex:-1,value:this.value})),i("div",{part:"dot",class:"ld-radio__dot"}),i("div",{class:"ld-radio__box",part:"box"}))}get el(){return o(this)}static get watchers(){return{checked:["updateHiddenInput"],form:["updateHiddenInput"],name:["updateHiddenInput"],value:["updateHiddenInput"]}}};h.style=n;export{h as ld_radio};
//# sourceMappingURL=p-a088f7d3.entry.js.map