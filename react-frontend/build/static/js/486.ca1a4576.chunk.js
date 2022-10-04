"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[486],{3419:function(e,t,r){r.d(t,{UL:function(){return a},Ve:function(){return s},ow:function(){return u},rk:function(){return o}});var n=r(687).h.injectEndpoints({endpoints:function(e){return{authUser:e.query({query:function(){return{url:"user/authUser",credentials:"include"}},providesTags:["AuthUser"]}),publicUser:e.query({query:function(e){return{url:"user/".concat(e),credentials:"include"}}}),updateAuthUser:e.mutation({query:function(e){return{url:"user/authUser/update",method:"PATCH",body:e,credentials:"include"}},invalidatesTags:["AuthUser"]})}},overrideExisting:!1}),a=n.useAuthUserQuery,s=n.useUpdateAuthUserMutation,u=n.usePublicUserQuery,o=function(){return n.useAuthUserQuery(void 0,{selectFromResult:function(e){return{authUser:e.data}}})}},2037:function(e,t,r){var n=r(4569),a=r.n(n)().create({baseURL:"https://jira-clone.onrender.com/",withCredentials:!0});t.Z=a},2252:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),s=r(9439),u=r(1134),o=r(2791),c=r(1465),l=r(3419),i=r(6871),d=r(2037),p=r(184);t.default=function(){var e=(0,u.cI)(),t=e.register,r=e.formState,d=r.errors,f=r.isSubmitting,h=e.handleSubmit,b=(0,l.UL)(),x=b.data,v=b.error,y=(0,o.useState)(""),g=(0,s.Z)(y,2),w=g[0],j=g[1],U=(0,i.s0)();if(v&&401===v.status)return(0,p.jsx)(i.Fg,{to:"/login"});if(!x)return null;var k=x.username,Z=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(""),t.name.trim()===k){e.next=3;break}return e.abrupt("return",j("the name doesn't match"));case 3:return e.prev=3,e.next=6,m(t);case 6:U("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),j((null===(r=e.t0.response)||void 0===r?void 0:r.data).message);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsx)("main",{className:"grid place-items-center w-full bg-[#eee]",children:(0,p.jsxs)("div",{className:"bg-white px-8 pt-12 pb-14 rounded-md w-[25rem]",children:[(0,p.jsx)("h1",{className:"text-xl",children:"You are about to delete your account"}),(0,p.jsxs)("form",{onSubmit:h(Z),className:"mt-6 flex flex-col gap-5",children:[(0,p.jsx)(c.Z,{label:"Please enter your password",placeholder:"account password",register:t("pwd",{required:{value:!0,message:"password must not be empty"},minLength:{value:4,message:"must be at least 4 characters long"},maxLength:{value:14,message:"must be under 15 characters"}}),error:d.pwd,inputClass:"border-gray-500"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:['Please type "',(0,p.jsx)("span",{className:"text-blue-500",children:k}),'" to confirm']}),(0,p.jsx)(c.Z,{label:"",placeholder:k,register:t("name",{required:{value:!0,message:"please fill the box"}}),error:d.name,inputClass:"border-gray-500"})]}),(0,p.jsxs)("div",{className:"mt-2",children:[w&&(0,p.jsx)("span",{className:"text-red-500",children:w}),(0,p.jsx)("button",{className:"btn mt-2 w-full",children:f?"deleting ...":"Delete my account"}),(0,p.jsx)("button",{type:"button",onClick:function(){return U(-1)},className:"btn-crystal w-full hover:bg-slate-100 mt-3 underline",children:"go back"})]})]})]})})};var m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.post("api/user/authUser/delete",t,{withCredentials:!0});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1465:function(e,t,r){var n=r(1413),a=r(184);t.Z=function(e){var t,r=e.darkEnabled,s=void 0!==r&&r,u=e.register,o=e.error,c=e.placeholder,l=e.label,i=e.defaultValue,d=e.readOnly,p=e.autoFocus,m=e.inputClass,f=e.type;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm tracking-wide ".concat(s?"text-c-5":"text-gray-800"),children:l}),(0,a.jsx)("input",(0,n.Z)({defaultValue:null!==i&&void 0!==i?i:"",className:"block w-full focus:border-chakra-blue mt-2 px-3 rounded-sm text-sm py-[3px] border-2 duration-200 outline-none ".concat(s?"hover:bg-c-7 focus:bg-c-1 bg-c-6 text-c-text":"bg-slate-100 hover:border-gray-400"," ").concat(null!==m&&void 0!==m?m:" border-transparent"," ").concat(d?"pointer-events-none":""),placeholder:c,readOnly:d,autoFocus:p,type:f},u)),(0,a.jsx)("span",{className:"text-[13px] text-red-400",children:null===o||void 0===o||null===(t=o.message)||void 0===t?void 0:t.toString()})]})}},1002:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=486.ca1a4576.chunk.js.map