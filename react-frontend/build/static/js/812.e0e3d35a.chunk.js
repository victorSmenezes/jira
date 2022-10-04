"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[812],{5127:function(e,n,t){var r=t(3433),a=t(1413),i=t(9439),o=t(2791),l=t(2711),c=t(6503),s=t(184);n.Z=function(e){var n=e.list,t=e.defaultValue,r=e.type,p=e.variant,h=void 0===p?"normal":p,v=e.dispatch,g=e.actionType,b="multiple"===r,x=(0,o.useState)(b?t?m(n,t):n.slice(1):n),y=(0,i.Z)(x,2),Z=y[0],N=y[1],w=(0,o.useState)(t||(b?[n[0]]:0)),S=(0,i.Z)(w,2),E=S[0],j=S[1],k=(0,o.useState)(!1),z=(0,i.Z)(k,2),C=z[0],_=z[1];(0,o.useEffect)((function(){if(void 0===t){var e=n[0].value;v({type:g,value:b?[e]:e})}}),[]);var R=function(e){return function(){var n=u(e,Z,E),t=(0,i.Z)(n,2),r=t[0],a=t[1];v({type:g,value:b?d(a):Z[e].value}),N(r),j(a),_(!1)}},B=function(e){return function(){if(e===E)return _(!1);j(e),v({type:g,value:Z[e].value}),_(!1)}};return(0,s.jsxs)("div",{className:"relative text-black text-[15px] font-medium ".concat("normal"===h?"":"mb-8"),children:[(0,s.jsx)("button",{onClick:function(){return _((function(e){return!e}))},className:"flex items-center justify-between tracking-wide px-4 bg-[#edf2f7] hover:bg-[#e2e8f0] py-1 border-gray-300 ".concat("normal"===h?"border-[1px] rounded-[4px] w-full":"border-none rounded-sm w-fit"),children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex gap-2 flex-wrap",children:b&&"object"===typeof E?E.length>0?E.map((function(e,n){return(0,s.jsxs)("div",{className:"flex items-center gap-2 border-[1.5px] border-blue-500 px-2 hover:border-green-500",onClick:function(e){return function(e,n){e.stopPropagation();var t=u(n,E,Z),r=(0,i.Z)(t,2),a=r[0],o=r[1];N(o),j(a),v({type:g,value:b?d(a):Z[n].value})}(e,n)},children:[(0,s.jsx)(c.Z,(0,a.Z)({className:"mr-3 w-5 h-5 object-cover rounded-full"},e)),(0,s.jsx)(l.JO,{className:"text-black",icon:"akar-icons:cross"})]},e.value)})):(0,s.jsx)(s.Fragment,{children:"Select"}):(0,s.jsx)(c.Z,(0,a.Z)({className:f(r)},n[E]))}),(0,s.jsx)(l.JO,{className:"ml-3 ".concat("normal"===h?"":"text-[12px]"),icon:"la:angle-down"})]})}),C&&(0,s.jsx)("ul",{className:"absolute w-full bottom-0 z-10 translate-y-[calc(100%+5px)] bg-white py-2 rounded-[3px] shadow-md",children:Z.length>0?Z.map((function(e,t){return(0,s.jsx)("li",{className:"px-4 py-2 hover:bg-[#e2e8f0] cursor-pointer",onClick:(b?R:B)(t),children:(0,s.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:f(r)},n[E]),e))},e.value)})):(0,s.jsx)("span",{className:"text-center block my-2",children:"no member left"})})]})};var u=function(e,n,t){var a=n.slice(0),i=a.splice(e,1)[0];return[a,[].concat((0,r.Z)(t),[i])]},d=function(e){return e.map((function(e){return e.value}))},m=function(e,n){return e.filter((function(e){var t=e.value;return!n.some((function(e){return e.value===t}))}))},f=function(e){return"normal"===e?"mr-4 w-4 h-4":"mr-4 w-6 h-6 object-cover rounded-full"}},6503:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.text,t=e.icon,a=e.className;return(0,r.jsxs)("div",{className:"flex items-center font-normal truncate text-c-1",children:[void 0!==t&&(t?(0,r.jsx)("img",{src:t,alt:n,className:a}):(0,r.jsx)("div",{className:"bg-amber-800 text-white grid place-items-center w-5 h-5 mr-2 rounded-full",children:n.slice(0,1).toUpperCase()})),n]})}},320:function(e,n,t){var r=t(2796),a=t(4164),i=t(184);n.Z=function(e){var n=e.onClose,t=e.onSubmit,o=e.isLoading,l=e.children,c=e.className;return(0,a.createPortal)((0,i.jsx)("div",{onClick:n,className:"fixed top-0 left-0 w-screen h-screen bg-[#0d67cc40] overflow-auto z-20 grid place-items-center",children:(0,i.jsxs)(r.E.div,{className:"rounded-[4px] bg-white p-6 w-[90%] my-8 ".concat(null!==c&&void 0!==c?c:"max-w-[31rem]"),initial:{scale:.9},animate:{scale:1},onClick:function(e){return e.stopPropagation()},children:[l,t&&(0,i.jsxs)("div",{className:"flex justify-end mt-8 gap-x-3",children:[(0,i.jsx)("button",{onClick:n,className:"px-3 py-1 rounded-[3px] text-c-1 hover:bg-c-3",children:"cancel"}),(0,i.jsx)("button",{onClick:t,className:"btn",children:o?"creating ...":"Create"})]})]})}),document.getElementById("portal"))}},9591:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.label,t=e.margin,a=e.labelClass,i=e.children;return(0,r.jsxs)("div",{className:null!==t&&void 0!==t?t:"mt-5",children:[n&&(0,r.jsx)("span",{className:"font-medium text-[14px] text-c-1 mb-2 block "+a,children:n}),i]})}},5777:function(e,n,t){t.d(n,{zx:function(){return j}});var r=t(4942),a=t(1413),i=t(5987),o=t(9439),l=t(2791),c=t(1507),s=t(251),u=t(2965),d=t(2680),m=t(9194),f=["children","className"],p=["label","placement","spacing","children","className","__css"],h=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],v=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=["icon","children","isRound","aria-label"],b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},x=function(e){return e?"":void 0},y=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),Z=(0,o.Z)(y,2),N=Z[0],w=Z[1];function S(e){var n=e.children,t=e.className,r=(0,i.Z)(e,f),o=(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,c=b("chakra-button__icon",t);return l.createElement(s.m$.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:c}),o)}function E(e){var n=e.label,t=e.placement,o=e.spacing,c=void 0===o?"0.5rem":o,u=e.children,d=void 0===u?l.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):u,f=e.className,h=e.__css,v=(0,i.Z)(e,p),g=b("chakra-button__spinner",f),x="start"===t?"marginEnd":"marginStart",y=(0,l.useMemo)((function(){var e;return(0,a.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,r.Z)(e,x,n?c:0),(0,r.Z)(e,"fontSize","1em"),(0,r.Z)(e,"lineHeight","normal"),e),h)}),[h,n,x,c]);return l.createElement(s.m$.div,(0,a.Z)((0,a.Z)({className:g},v),{},{__css:y}),d)}S.displayName="ButtonIcon",E.displayName="ButtonSpinner";var j=(0,s.Gp)((function(e,n){var t=w(),r=(0,s.mq)("Button",(0,a.Z)((0,a.Z)({},t),e)),d=(0,u.Lr)(e),m=d.isDisabled,f=void 0===m?null==t?void 0:t.isDisabled:m,p=d.isLoading,v=d.isActive,g=d.children,y=d.leftIcon,Z=d.rightIcon,N=d.loadingText,S=d.iconSpacing,j=void 0===S?"0.5rem":S,z=d.type,C=d.spinner,_=d.spinnerPlacement,R=void 0===_?"start":_,B=d.className,I=d.as,F=(0,i.Z)(d,h),L=(0,l.useMemo)((function(){var e=(0,a.Z)((0,a.Z)({},null==r?void 0:r._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},r),!!t&&{_focus:e})}),[r,t]),T=function(e){var n=(0,l.useState)(!e),t=(0,o.Z)(n,2),r=t[0],a=t[1];return{ref:(0,l.useCallback)((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(I),W=T.ref,A=T.type,H={rightIcon:Z,leftIcon:y,iconSpacing:j,children:g};return l.createElement(s.m$.button,(0,a.Z)({disabled:f||p,ref:(0,c.qq)(n,W),as:I,type:null!==z&&void 0!==z?z:A,"data-active":x(v),"data-loading":x(p),__css:L,className:b("chakra-button",B)},F),p&&"start"===R&&l.createElement(E,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:j},C),p?N||l.createElement(s.m$.span,{opacity:0},l.createElement(k,(0,a.Z)({},H))):l.createElement(k,(0,a.Z)({},H)),p&&"end"===R&&l.createElement(E,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:j},C))}));function k(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return l.createElement(l.Fragment,null,n&&l.createElement(S,{marginEnd:a},n),r,t&&l.createElement(S,{marginStart:a},t))}j.displayName="Button",(0,s.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,c=e.className,u=e.spacing,d=void 0===u?"0.5rem":u,m=e.isAttached,f=e.isDisabled,p=(0,i.Z)(e,v),h=b("chakra-button__group",c),g=(0,l.useMemo)((function(){return{size:t,colorScheme:r,variant:o,isDisabled:f}}),[t,r,o,f]),x={display:"inline-flex"};return x=m?(0,a.Z)((0,a.Z)({},x),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,a.Z)((0,a.Z)({},x),{},{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),l.createElement(N,{value:g},l.createElement(s.m$.div,(0,a.Z)({ref:n,role:"group",__css:x,className:h,"data-attached":m?"":void 0},p)))})).displayName="ButtonGroup",(0,s.Gp)((function(e,n){var t=e.icon,r=e.children,o=e.isRound,c=e["aria-label"],s=(0,i.Z)(e,g),u=t||r,d=(0,l.isValidElement)(u)?(0,l.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return l.createElement(j,(0,a.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":c},s),d)})).displayName="IconButton"},2948:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7462),a=t(3366),i=t(2791),o=i.useLayoutEffect,l=function(e,n){"function"!==typeof e?e.current=n:e(n)},c=function(e,n){var t=(0,i.useRef)();return(0,i.useCallback)((function(r){e.current=r,t.current&&l(t.current,null),t.current=n,n&&l(n,r)}),[n])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},u=function(e){Object.keys(s).forEach((function(n){e.style.setProperty(n,s[n],"important")}))},d=null;var m=function(){},f=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],p=!!document.documentElement.currentStyle,h=function(e){var n=function(e){var n=i.useRef(e);return o((function(){n.current=e})),n}(e);(0,i.useLayoutEffect)((function(){var e=function(e){n.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},v=function(e,n){var t=e.cacheMeasurements,o=e.maxRows,l=e.minRows,s=e.onChange,v=void 0===s?m:s,g=e.onHeightChange,b=void 0===g?m:g,x=(0,a.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var y=void 0!==x.value,Z=(0,i.useRef)(null),N=c(Z,n),w=(0,i.useRef)(0),S=(0,i.useRef)(),E=function(){var e=Z.current,n=t&&S.current?S.current:function(e){var n=window.getComputedStyle(e);if(null===n)return null;var t,r=(t=n,f.reduce((function(e,n){return e[n]=t[n],e}),{})),a=r.boxSizing;return""===a?null:(p&&"border-box"===a&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(n){S.current=n;var r=function(e,n,t,r){void 0===t&&(t=1),void 0===r&&(r=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),u(d)),null===d.parentNode&&document.body.appendChild(d);var a=e.paddingSize,i=e.borderSize,o=e.sizingStyle,l=o.boxSizing;Object.keys(o).forEach((function(e){var n=e;d.style[n]=o[n]})),u(d),d.value=n;var c=function(e,n){var t=e.scrollHeight;return"border-box"===n.sizingStyle.boxSizing?t+n.borderSize:t-n.paddingSize}(d,e);d.value="x";var s=d.scrollHeight-a,m=s*t;"border-box"===l&&(m=m+a+i),c=Math.max(m,c);var f=s*r;return"border-box"===l&&(f=f+a+i),[c=Math.min(f,c),s]}(n,e.value||e.placeholder||"x",l,o),a=r[0],i=r[1];w.current!==a&&(w.current=a,e.style.setProperty("height",a+"px","important"),b(a,{rowHeight:i}))}};return(0,i.useLayoutEffect)(E),h(E),(0,i.createElement)("textarea",(0,r.Z)({},x,{onChange:function(e){y||E(),v(e)},ref:N}))},g=(0,i.forwardRef)(v)}}]);
//# sourceMappingURL=812.e0e3d35a.chunk.js.map