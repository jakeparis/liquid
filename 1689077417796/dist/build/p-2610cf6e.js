async function t(t){if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t)}else{const e=document.activeElement;const n=document.createElement("textarea");n.value=t;n.classList.add("ld-sr-only");document.body.appendChild(n);n.focus({preventScroll:true});n.select();await document.execCommand("copy");n.remove();e.focus({preventScroll:true})}}export{t as c};
//# sourceMappingURL=p-2610cf6e.js.map