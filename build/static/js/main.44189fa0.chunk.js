(this.webpackJsonpcowin=this.webpackJsonpcowin||[]).push([[0],{133:function(t,e,n){},310:function(t,e,n){"use strict";n.r(e);var a,i,c,o=n(0),r=n.n(o),s=n(6),d=n.n(s),b=(n(133),n(11)),l=n(50),p=n(18),u=n(48),j=n(49),x=function(t,e){return Object(j.a)(a||(a=Object(u.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"])),t,e,e,t,e,t,e)},f=Object(j.a)(i||(i=Object(u.a)([""," color: #555;"])),x("#ffffff","#d5d5d5")),h=x("#4f93ce","#285f8f"),O=j.b.div(c||(c=Object(u.a)(["\n  font-family: sans-serif;\n\n  h1 {\n    text-align: center;\n    color: #222;\n    margin-left: 8px;\n    margin-right:8px;\n  }\n\n  h2 {\n    text-align: center;\n    color: #222;\n        margin-left: 8px;\n    margin-right:8px;\n  }\n\n  & > div {\n    margin: 5px;\n    text-align: center;\n  }\n\n  & > a {\n    display: block;\n    text-align: center;\n    color: #222;\n    margin-bottom: 10px;\n  }\n\n  form {\n    width: 500px;\n    max-width: 80vw;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n    position: relative;\n    \n\n    & > .buttons {  \n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 10px;\n      &[type='submit'] {\n        ",";\n      }\n      &[type='button'] {\n        ",";\n      }\n    }\n    .error {\n      display: flex;\n      font-weight: bold;\n      color: #800;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n    .Select {\n      width: 100%;\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n    \n    .textfield {\n      div {z-index: 0}\n    }\n  }\n"])),h,f),m=n(9),g=n(127),v=n(33),w=n.n(v),S=n(34),y=n.n(S),T=n(86),k=n(126),_=n.n(k),P=n(81),C=n.n(P),N=n(84),L=n.n(N),F=n(85),W=n(2),J=function(){var t=Object(o.useState)([]),e=Object(p.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)([]),c=Object(p.a)(i,2),r=c[0],s=c[1],d=Object(o.useState)(!1),u=Object(p.a)(d,2),j=u[0],x=u[1],f=Object(o.useState)(0),h=Object(p.a)(f,2),v=h[0],S=h[1],k=Object(o.useState)(!1),P=Object(p.a)(k,2),N=P[0],J=P[1],A=Object(o.useState)(""),D=Object(p.a)(A,2),E=D[0],V=D[1],z="https://cdn-api.co-vin.in/api/v2/admin/location/",B="https://cowin-webserver-slotlocker2.cloud.okteto.net/",I=Object(F.useToasts)().addToast;Object(o.useEffect)((function(){w.a.get("".concat(z,"states")).then((function(t){if(t){var e=y()(t,"data.states",[]);a(e)}}))}),[]);var M=function(t){var e=t.input,n=t.options,a=Object(l.a)(t,["input","options"]);return Object(W.jsx)(T.a,Object(b.a)(Object(b.a)(Object(b.a)({placeholder:"Select State..."},e),{},{options:n,getOptionLabel:function(t){return t.state_name},getOptionValue:function(t){return t.state_id}},a),{},{searchable:!0}))},R=function(t){var e=t.input,n=(t.options,Object(l.a)(t,["input","options"]));return Object(W.jsx)(T.a,Object(b.a)(Object(b.a)(Object(b.a)({placeholder:"Select District...",isMulti:!0},e),{},{options:r,getOptionLabel:function(t){return t.district_name},getOptionValue:function(t){return t.district_id}},n),{},{searchable:!0}))},q=function(t){var e=t.input,n=t.meta,a=Object(l.a)(t,["input","meta"]);return Object(W.jsx)(L.a,Object(b.a)(Object(b.a)(Object(b.a)({},e),a),{},{onChange:function(t,n){return e.onChange(n)},errorText:n.touched?n.error:""}))},G=function(t){return t?void 0:"Required"};function H(){var t={phone_number:E,otp:v};w.a.post("".concat(B,"api/v1/user/otp/submit/"),t).then((function(t){J(!0),I("Successfully registered for a WhatsApp notification. Stay Safe!",{appearance:"success"})}),(function(t){var e=y()(t,"response.data.message","Please enter correct OTP");I(e,{appearance:"error"})}))}function K(t){S(t.target.value)}return Object(W.jsx)(_.a,{muiTheme:C()(),children:Object(W.jsxs)(O,{children:[Object(W.jsx)("h1",{children:"Find a Vaccination Slot on Co-Win"}),Object(W.jsx)("h2",{children:"Get notified via Whatsapp whenever a slot becomes available"}),N?Object(W.jsx)("h2",{children:"Successfully registered for a WhatsApp notification. Stay Safe!"}):Object(W.jsx)(m.b,{onSubmit:function(t){if(!j){var e=JSON.parse(JSON.stringify(t)),n=t.state.state_id,a=t.district.map((function(t){return t.district_id}));e.state_id=n,e.district_ids=a,delete e.state,delete e.district,V(e.phone_number),w.a.post("".concat(B,"api/v1/user/"),e).then((function(t){x(!0),I("Please Enter the OTP received on your phone number",{appearance:"success"})}),(function(t){console.log(t);var e=y()(t,"response.data.message","Something went wrong");I(e,{appearance:"error"})}))}},render:function(t){var e=t.handleSubmit,a=t.form,i=t.submitting,c=t.pristine;t.values;return Object(W.jsxs)("form",{onSubmit:e,children:[Object(W.jsx)("div",{style:{marginTop:"20px"},children:Object(W.jsx)(m.a,{name:"state",component:M,validate:G,options:n})}),Object(W.jsx)(g.a,{name:"state",children:function(t,e){var n;n=t.state_id,w.a.get("".concat(z,"districts/").concat(n)).then((function(t){if(t){var e=y()(t,"data.districts",[]);s(e)}}))}}),Object(W.jsx)("div",{style:{marginTop:"20px"},children:Object(W.jsx)(m.a,{name:"district",component:R,validate:G,options:r})}),Object(W.jsx)("div",{className:"textfield",children:Object(W.jsx)(m.a,{name:"first_name",component:q,validate:G,hintText:"Name",floatingLabelText:"Name"})}),Object(W.jsx)("div",{className:"textfield",children:Object(W.jsx)(m.a,{name:"phone_number",component:q,validate:G,hintText:"Phone Number",floatingLabelText:"Phone Number (no country code)"})}),Object(W.jsxs)("div",{style:{marginTop:"20px"},children:[Object(W.jsx)(m.a,{name:"message_consent",component:"input",type:"checkbox"}),Object(W.jsx)("label",{children:"Allow updates on Whatsapp"})]}),j&&Object(W.jsxs)("div",{children:[Object(W.jsx)(L.a,{variant:"standard",name:"otp",hintText:"OTP",floatingLabelText:"OTP",onChange:K}),Object(W.jsx)("button",{type:"submit",onClick:H,children:"Submit OTP"})]}),!j&&Object(W.jsxs)("div",{className:"buttons",children:[Object(W.jsx)("button",{type:"submit",disabled:i,children:"Submit"}),Object(W.jsx)("button",{type:"button",onClick:a.reset,disabled:i||c,children:"Reset"})]})]})}})]})})},A=function(){return Object(W.jsx)(F.ToastProvider,{autoDismiss:!0,children:Object(W.jsx)(J,{})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};d.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(A,{})}),document.getElementById("root")),D()}},[[310,1,2]]]);
//# sourceMappingURL=main.44189fa0.chunk.js.map