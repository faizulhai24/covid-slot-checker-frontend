(this.webpackJsonpcowin=this.webpackJsonpcowin||[]).push([[0],{133:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a,i,o,c=n(0),r=n.n(c),s=n(6),l=n.n(s),d=(n(133),n(11)),b=n(50),p=n(19),u=n(48),j=n(49),x=function(e,t){return Object(j.a)(a||(a=Object(u.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"])),e,t,t,e,t,e,t)},f=Object(j.a)(i||(i=Object(u.a)([""," color: #555;"])),x("#ffffff","#d5d5d5")),h=x("#4f93ce","#285f8f"),m=j.b.div(o||(o=Object(u.a)(["\n  font-family: sans-serif;\n\n  h1 {\n    text-align: center;\n    color: #222;\n    margin-left: 8px;\n    margin-right:8px;\n  }\n\n  h2 {\n    text-align: center;\n    color: #222;\n        margin-left: 8px;\n    margin-right:8px;\n  }\n\n  & > div {\n    margin: 5px;\n    text-align: center;\n  }\n\n  & > a {\n    display: block;\n    text-align: center;\n    color: #222;\n    margin-bottom: 10px;\n  }\n\n  form {\n    width: 500px;\n    max-width: 80vw;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n    position: relative;\n    \n\n    & > .buttons {  \n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 10px;\n      &[type='submit'] {\n        ",";\n      }\n      &[type='button'] {\n        ",";\n      }\n    }\n    .error {\n      display: flex;\n      font-weight: bold;\n      color: #800;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n    .Select {\n      width: 100%;\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n    \n    .textfield {\n      div {z-index: 0}\n    }\n  }\n"])),h,f),O=n(9),g=n(127),v=n(34),w=n.n(v),y=n(35),S=n.n(y),T=n(86),_=n(126),k=n.n(_),P=n(81),N=n.n(P),C=n(84),L=n.n(C),W=n(85),A=n(2),F=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),o=Object(p.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(!1),u=Object(p.a)(l,2),j=u[0],x=u[1],f=Object(c.useState)(0),h=Object(p.a)(f,2),v=h[0],y=h[1],_=Object(c.useState)(!1),P=Object(p.a)(_,2),C=P[0],F=P[1],J=Object(c.useState)(""),D=Object(p.a)(J,2),E=D[0],R=D[1],z="https://cdn-api.co-vin.in/api/v2/admin/location/",B="https://cowin-webserver-slotlocker2.cloud.okteto.net/",I=Object(W.useToasts)().addToast;Object(c.useEffect)((function(){w.a.get("".concat(z,"states")).then((function(e){if(e){var t=S()(e,"data.states",[]);a(t)}}))}),[]);var M=function(e){var t=e.input,n=e.options,a=Object(b.a)(e,["input","options"]);return Object(A.jsx)(T.a,Object(d.a)(Object(d.a)(Object(d.a)({placeholder:"Select State..."},t),{},{options:n,getOptionLabel:function(e){return e.state_name},getOptionValue:function(e){return e.state_id}},a),{},{searchable:!0}))},V=function(e){var t=e.input,n=(e.options,Object(b.a)(e,["input","options"]));return Object(A.jsx)(T.a,Object(d.a)(Object(d.a)(Object(d.a)({placeholder:"Select District...",isMulti:!0},t),{},{options:r,getOptionLabel:function(e){return e.district_name},getOptionValue:function(e){return e.district_id}},n),{},{searchable:!0}))},q=function(e){var t=e.input,n=e.meta,a=Object(b.a)(e,["input","meta"]);return Object(A.jsx)(L.a,Object(d.a)(Object(d.a)(Object(d.a)({},t),a),{},{onChange:function(e,n){return t.onChange(n)},errorText:n.touched?n.error:""}))},G=function(e){return e?void 0:"Required"};function H(){var e={phone_number:E,otp:v};w.a.post("".concat(B,"api/v1/user/otp/submit/"),e).then((function(e){F(!0),I("Successfully registered for a WhatsApp notification. Stay Safe!",{appearance:"success"})}),(function(e){var t=S()(e,"response.data.message","Please enter correct OTP");I(t,{appearance:"error"})}))}function K(e){y(e.target.value)}return Object(A.jsx)(k.a,{muiTheme:N()(),children:Object(A.jsxs)(m,{children:[Object(A.jsx)("h1",{className:"font-roboto",children:"Get notified on WhatsApp when a vaccination slot is "}),Object(A.jsx)("h1",{className:"font-roboto",children:"available in your city!"}),Object(A.jsx)("h2",{className:"font-roboto",children:"Register below & relax, while we scan Co-win for available slots"}),C?Object(A.jsx)("h2",{children:"Successfully registered for a WhatsApp notification. Stay Safe!"}):Object(A.jsx)(O.b,{onSubmit:function(e){if(!j){var t=JSON.parse(JSON.stringify(e)),n=e.state.state_id,a=e.district.map((function(e){return e.district_id}));t.state_id=n,t.district_ids=a,delete t.state,delete t.district,R(t.phone_number),10===t.phone_number.length?t.message_consent?w.a.post("".concat(B,"api/v1/user/"),t).then((function(e){x(!0),I("Please Enter the OTP received on your phone number",{appearance:"success"})}),(function(e){console.log(e);var t=S()(e,"response.data.message","Something went wrong");I(t,{appearance:"error"})})):I("Please allow updates on Whatsapp to register for notification",{appearance:"error"}):I("Please enter a 10 digit phone number without country code",{appearance:"error"})}},render:function(e){var t=e.handleSubmit,a=e.form,i=e.submitting,o=e.pristine;e.values;return Object(A.jsxs)("form",{onSubmit:t,children:[Object(A.jsx)("div",{style:{marginTop:"20px"},children:Object(A.jsx)(O.a,{name:"state",component:M,validate:G,options:n})}),Object(A.jsx)(g.a,{name:"state",children:function(e,t){var n;n=e.state_id,w.a.get("".concat(z,"districts/").concat(n)).then((function(e){if(e){var t=S()(e,"data.districts",[]);s(t)}}))}}),Object(A.jsx)("div",{style:{marginTop:"20px"},children:Object(A.jsx)(O.a,{name:"district",component:V,validate:G,options:r})}),Object(A.jsx)("div",{className:"textfield",children:Object(A.jsx)(O.a,{name:"first_name",component:q,validate:G,hintText:"Name",floatingLabelText:"Name"})}),Object(A.jsx)("div",{className:"textfield",children:Object(A.jsx)(O.a,{name:"phone_number",component:q,validate:G,hintText:"Phone Number",floatingLabelText:"Phone Number (no country code)"})}),Object(A.jsxs)("div",{style:{marginTop:"20px"},children:[Object(A.jsx)(O.a,{name:"message_consent",component:"input",type:"checkbox"}),Object(A.jsx)("label",{children:"Allow updates on Whatsapp"})]}),j&&Object(A.jsxs)("div",{children:[Object(A.jsx)(L.a,{variant:"standard",name:"otp",hintText:"OTP",floatingLabelText:"OTP",onChange:K}),Object(A.jsx)("button",{type:"submit",onClick:H,children:"Submit OTP"})]}),!j&&Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)("button",{type:"submit",disabled:i,children:"Submit"}),Object(A.jsx)("button",{type:"button",onClick:a.reset,disabled:i||o,children:"Reset"})]})]})}})]})})},J=function(){return Object(A.jsx)(W.ToastProvider,{autoDismiss:!0,children:Object(A.jsx)(F,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};l.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(J,{})}),document.getElementById("root")),D()}},[[310,1,2]]]);
//# sourceMappingURL=main.5bd2b70a.chunk.js.map