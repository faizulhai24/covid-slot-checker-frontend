(this.webpackJsonpcowin=this.webpackJsonpcowin||[]).push([[0],{120:function(t,n,e){},298:function(t,n,e){"use strict";e.r(n);var i,a,o,c=e(0),r=e.n(c),s=e(21),b=e.n(s),d=(e(120),e(7)),l=e(44),p=e(23),u=e(42),j=e(43),x=function(t,n){return Object(j.a)(i||(i=Object(u.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"])),t,n,n,t,n,t,n)},f=Object(j.a)(a||(a=Object(u.a)([""," color: #555;"])),x("#ffffff","#d5d5d5")),h=x("#4f93ce","#285f8f"),O=j.b.div(o||(o=Object(u.a)(["\n  font-family: sans-serif;\n\n  h1 {\n    text-align: center;\n    color: #222;\n  }\n\n  h2 {\n    text-align: center;\n    color: #222;\n  }\n\n  & > div {\n    margin: 5px;\n    text-align: center;\n  }\n\n  & > a {\n    display: block;\n    text-align: center;\n    color: #222;\n    margin-bottom: 10px;\n  }\n\n  form {\n    max-width: 500px;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n    position: relative;\n    \n\n    & > .buttons {  \n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 10px;\n      &[type='submit'] {\n        ",";\n      }\n      &[type='button'] {\n        ",";\n      }\n    }\n    .error {\n      display: flex;\n      font-weight: bold;\n      color: #800;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n    .Select {\n      width: 100%;\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n  }\n"])),h,f),m=e(5),g=e(115),v=e(29),w=e.n(v),y=e(73),S=e.n(y),T=e(75),k=e(114),_=e.n(k),C=e(70),L=e.n(C),N=e(74),P=e.n(N),F=e(2),J=function(){var t=Object(c.useState)([]),n=Object(p.a)(t,2),e=n[0],i=n[1],a=Object(c.useState)([]),o=Object(p.a)(a,2),r=o[0],s=o[1],b=Object(c.useState)(!1),u=Object(p.a)(b,2),j=u[0],x=u[1],f=Object(c.useState)(0),h=Object(p.a)(f,2),v=h[0],y=h[1],k=Object(c.useState)(""),C=Object(p.a)(k,2),N=C[0],J=C[1],W="https://cdn-api.co-vin.in/api/v2/admin/location/",B="https://cowin-webserver-slotlocker2.cloud.okteto.net/";Object(c.useEffect)((function(){w.a.get("".concat(W,"states")).then((function(t){if(t){var n=S()(t,"data.states",[]);i(n)}}))}),[]);var D=function(t){var n=t.input,e=t.options,i=Object(l.a)(t,["input","options"]);return Object(F.jsx)(T.a,Object(d.a)(Object(d.a)(Object(d.a)({placeholder:"Select State..."},n),{},{options:e,getOptionLabel:function(t){return t.state_name},getOptionValue:function(t){return t.state_id}},i),{},{searchable:!0}))},E=function(t){var n=t.input,e=(t.options,Object(l.a)(t,["input","options"]));return Object(F.jsx)(T.a,Object(d.a)(Object(d.a)(Object(d.a)({placeholder:"Select District...",isMulti:!0},n),{},{options:r,getOptionLabel:function(t){return t.district_name},getOptionValue:function(t){return t.district_id}},e),{},{searchable:!0}))},G=function(t){var n=t.input,e=t.meta,i=Object(l.a)(t,["input","meta"]);return Object(F.jsx)(P.a,Object(d.a)(Object(d.a)(Object(d.a)({},n),i),{},{onChange:function(t,e){return n.onChange(e)},errorText:e.touched?e.error:""}))},I=function(t){return t?void 0:"Required"};function M(){var t={phone_number:N,otp:v};w.a.post("".concat(B,"api/v1/user/otp/submit"),t).then((function(t){alert("Successfully registered for a Whatsapp notification. Stay Safe!")}),(function(t){console.log(t)}))}function R(t){y(t.target.value)}return Object(F.jsx)(_.a,{muiTheme:L()(),children:Object(F.jsxs)(O,{children:[Object(F.jsx)("h1",{children:"Cowin registration helper"}),Object(F.jsx)("h2",{children:"Get notified by Whatsapp whenever slots open up for 18 - 45 age group."}),Object(F.jsx)(m.b,{onSubmit:function(t){if(!j){var n=JSON.parse(JSON.stringify(t)),e=t.state.state_id,i=t.district.map((function(t){return t.district_id}));n.state_id=e,n.district_ids=i,delete n.state,delete n.district,J(n.phone_number),w.a.post("".concat(B,"api/v1/user"),n).then((function(t){x(!0)}),(function(t){console.log(t)}))}},render:function(t){var n=t.handleSubmit,i=t.form,a=t.submitting,o=t.pristine;t.values;return Object(F.jsxs)("form",{onSubmit:n,children:[Object(F.jsx)("div",{children:Object(F.jsx)(m.a,{name:"first_name",component:G,validate:I,hintText:"Name",floatingLabelText:"Name"})}),Object(F.jsx)("div",{style:{marginTop:"20px"},children:Object(F.jsx)(m.a,{name:"state",component:D,validate:I,options:e})}),Object(F.jsx)(g.a,{name:"state",children:function(t,n){var e;e=t.state_id,w.a.get("".concat(W,"districts/").concat(e)).then((function(t){if(t){var n=S()(t,"data.districts",[]);s(n)}}))}}),Object(F.jsx)("div",{style:{marginTop:"20px"},children:Object(F.jsx)(m.a,{name:"district",component:E,validate:I,options:r})}),Object(F.jsxs)("div",{style:{marginTop:"20px"},children:[Object(F.jsx)(m.a,{name:"message_consent",component:"input",type:"checkbox"}),Object(F.jsx)("label",{children:"Give permission to notify on Whatsapp"})]}),Object(F.jsx)("div",{children:Object(F.jsx)(m.a,{name:"phone_number",component:G,validate:I,hintText:"Phone Number",floatingLabelText:"Phone Number"})}),j&&Object(F.jsxs)("div",{children:[Object(F.jsx)(P.a,{variant:"standard",name:"otp",hintText:"OTP",floatingLabelText:"OTP",onChange:R}),Object(F.jsx)("button",{type:"submit",onClick:M,children:"Submit OTP"})]}),!j&&Object(F.jsxs)("div",{className:"buttons",children:[Object(F.jsx)("button",{type:"submit",disabled:a,children:"Submit"}),Object(F.jsx)("button",{type:"button",onClick:i.reset,disabled:a||o,children:"Reset"})]})]})}})]})})},W=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,299)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),i(t),a(t),o(t),c(t)}))};b.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(J,{})}),document.getElementById("root")),W()}},[[298,1,2]]]);
//# sourceMappingURL=main.c139edac.chunk.js.map