(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{72:function(e,t,n){},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),s=n.n(c),i=(n(71),n(72),n(10)),o=n.n(i),l=n(14),u=n(5),j=(n(74),n(9)),b=n(6),h=n(2),d=n(21),p=n.n(d),m=n(1);function x(e){var t=Object(a.useState)({username:"",email:"",password1:"",password2:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],s=(j.f,Object(a.useState)(null)),i=Object(u.a)(s,2),d=i[0],x=i[1];function O(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},n,a))}))}function f(e){console.warn(e)}function v(){return(v=Object(l.a)(o.a.mark((function t(n){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r.password1===r.password2){t.next=5;break}x("Passwords do not match!"),t.next=18;break;case 5:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(r)},t.next=8,fetch("/rest-auth/registration/",a).catch(f);case 8:if(c=t.sent){t.next=13;break}console.log(c),t.next=18;break;case 13:return t.next=15,c.json();case 15:s=t.sent,p.a.set("Authorization","Token".concat(s.key)),e.history.push("/");case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("form",{className:"mt-3 col-6 ",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(m.jsxs)("div",{className:"form-group text-left mb-3 ",children:[Object(m.jsx)("label",{htmlFor:"username",children:"username"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"enter username.",onChange:O,required:!0,name:"username",value:r.username})]}),Object(m.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",children:"email"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"enter email.",onChange:O,required:!0,name:"email",value:r.email})]}),Object(m.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(m.jsx)("label",{htmlFor:"password1",children:"password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"enter password.",onChange:O,required:!0,name:"password1",value:r.password1})]}),Object(m.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(m.jsx)("label",{htmlFor:"password2",children:"confirm password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"confirm password.",onChange:O,required:!0,name:"password2",value:r.password2}),d&&Object(m.jsx)("span",{className:"text-danger",children:d})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Register"})]})})}var O=Object(j.h)((function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];function s(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},n,a))}))}function i(e){console.warn(e)}function j(){return(j=Object(l.a)(o.a.mark((function t(n){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(r)},t.next=4,fetch("/rest-auth/login/",a).catch(i);case 4:if(c=t.sent){t.next=9;break}console.log(c),t.next=15;break;case 9:return t.next=11,c.json();case 11:s=t.sent,p.a.set("Authorization","Token".concat(s.key)),e.setUser((function(e){return Object(h.a)(Object(h.a)({},e),{},{isAuth:!0})})),e.history.push("/my-contributions");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("form",{className:"container",onSubmit:function(e){return j.apply(this,arguments)},children:[Object(m.jsx)("div",{className:"form-group text-left mb-3",children:Object(m.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"enter username.",onChange:s,required:!0,name:"username",value:r.username})}),Object(m.jsx)("div",{className:"form-group text-left mb-3",children:Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"enter password.",onChange:s,required:!0,name:"password",value:r.password})}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Login"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary mt-3 register-here-button",onClick:function(){e.history.push("/registration")},children:"Click to register."})]})})),f=n.p+"static/media/logo.1a4137e6.png";var v=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("section",{className:"horiz-container",children:[Object(m.jsxs)("div",{className:"half-text",children:[Object(m.jsx)("h1",{children:"Don't be a hater."}),Object(m.jsx)("h4",{children:"86 Hate is a movement to share resources and connect people to non-profits in Greenville."}),Object(m.jsx)("button",{className:"btn",children:"Learn More"})]}),Object(m.jsx)("div",{className:"header-login-form",children:Object(m.jsx)(O,{})})]}),Object(m.jsxs)("section",{className:"horiz-container",children:[Object(m.jsxs)("div",{className:"half-text",children:[Object(m.jsx)("h3",{children:"What does 86 Hate mean?"}),Object(m.jsx)("p",{children:"Eighty-six or 86 is American English slang used to indicate that an item is no longer available, traditionally from a food or drinks establishment; or referring to a person or people who are not welcome in the premises. Hate is no longer available here."})]}),Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:f})})]})]})},g=n(84),y=n(87);var k=function(){var e=Object(a.useState)({ein:"",charity:"",in_dollars:"",in_hours:"",text:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(u.a)(c,2),i=s[0],j=s[1],d=Object(a.useState)(!1),x=Object(u.a)(d,2),O=x[0],f=x[1],v=function(){return f(!1)};function k(){return(k=Object(l.a)(o.a.mark((function e(t){var a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(n)},e.next=4,fetch("/api_v1/contributions/",a);case 4:if(c=e.sent){e.next=9;break}console.log(c),e.next=15;break;case 9:return console.log(c),e.next=12,c.json();case 12:s=e.sent,r(s),f(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){var t=e.target,n=t.name,a=t.value;console.log(n,a),r((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},n,a))}))}return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.data.charitynavigator.org/v2","/Organizations?app_id=").concat("0523b096","&app_key=").concat("ed9cb1c120b866a6232e01a7affb00c5","&search=").concat(n.charity,"&rated=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log("data",a),j(a.slice(0,5));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n.charity]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(g.a,{variant:"primary",onClick:function(){return f(!0)},children:"Add Contribution"}),Object(m.jsxs)(y.a,{show:O,onHide:v,children:[Object(m.jsx)(y.a.Header,{closeButton:!0,children:Object(m.jsx)(y.a.Title,{children:"Log Your Contribution"})}),Object(m.jsx)(y.a.Body,{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("div",{className:"form-search",children:Object(m.jsx)("input",{type:"text",placeholder:"Search for a charity",name:"charity",value:n.charity,onChange:N})}),Object(m.jsx)("ul",{children:null===i||void 0===i?void 0:i.map((function(e){return Object(m.jsxs)("li",{className:"charitysearchlist",children:[e.charityName,Object(m.jsx)("button",{type:"button",className:"select-button",onClick:void r({ein:i.ein,charity:i.charity}),value:n.charity,children:"Select"})]},e.id)}))}),Object(m.jsxs)("div",{className:"form-data",children:[Object(m.jsx)("input",{type:"text",placeholder:"Search for a charity",name:"charity",value:n.charity,onChange:N}),Object(m.jsx)("input",{type:"number",placeholder:"Dollar Amount",name:"in_dollars",value:n.in_dollars,onChange:N}),Object(m.jsx)("input",{type:"number",placeholder:"Volunteer hours",name:"in_hours",value:n.in_hours,onChange:N}),Object(m.jsx)("input",{type:"text",placeholder:"Description",name:"text",value:n.text,onChange:N})]})]})}),Object(m.jsxs)(y.a.Footer,{children:[Object(m.jsx)(g.a,{variant:"secondary",onClick:v,children:"Close"}),Object(m.jsx)(g.a,{variant:"primary",type:"submit",onClick:function(e){return k.apply(this,arguments)},children:"Save Changes"})]})]})]})})},N=n(26),w=n(42),C=n(85),S=n(86);function A(e){return Object(m.jsx)(w.a,{collapseOnSelect:!0,expand:"lg",className:"container-fluid nav-top-level",children:Object(m.jsxs)(C.a,{children:[Object(m.jsx)(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(w.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(S.a,{className:"me-auto container-fluid",children:[Object(m.jsx)(w.a.Brand,{children:Object(m.jsx)("li",{children:Object(m.jsx)(N.b,{className:"navbar-brand",to:"/",children:Object(m.jsx)("img",{src:f})})})}),Object(m.jsx)(S.a.Link,{children:Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(N.b,{to:"/",children:"Blog"})})}),Object(m.jsx)(S.a.Link,{children:Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(N.b,{to:"/organizations",children:"Organizations"})})}),Object(m.jsx)(S.a.Link,{children:Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(N.b,{to:"/",children:"About Us"})})}),Object(m.jsx)(S.a.Link,{children:Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(N.b,{to:"/my-contributions",children:"My Contributions"})})}),e.isAuth&&Object(m.jsx)(S.a.Link,{children:Object(m.jsx)("li",{className:"btn-logout",children:Object(m.jsx)("button",{className:"btn btn-link logout",type:"button",onClick:function(){return e.handleLogoutSubmit()},children:"Logout"})})})]})})]})})}var T=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/contributions/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("contribs",n),r(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsx)("div",{className:"container",children:null===n||void 0===n?void 0:n.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("h6",{children:[e.charity,": ",e.text]})})}))})},F="https://api.data.charitynavigator.org/v2",L="0523b096",_="ed9cb1c120b866a6232e01a7affb00c5";var z=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return j.g,Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F,"/Organizations?app_id=").concat(L,"&app_key=").concat(_,"&search=unitd ministries&rated=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("charities",n),r(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(m.jsxs)("li",{children:[e.charityName,Object(m.jsx)("img",{className:"stars-img",src:e.currentRating.ratingImage.large})]})}))})};var D=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(j.f)();function i(){return(i=Object(l.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":p.a.get("csrftoken")},body:JSON.stringify(e.user)},t.next=3,fetch("/rest-auth/logout/",a);case 3:if(r=t.sent){t.next=8;break}console.log(r),t.next=15;break;case 8:return console.log(r),t.next=11,r.json();case 11:t.sent,p.a.remove("Authorization"),c({isAuth:!1}),s.push("/");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/rest-auth/user");case 2:if((t=e.sent).ok){e.next=7;break}c({isAuth:!1}),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,c({isAuth:!0,isAdmin:n.is_staff});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var b=null===r||void 0===r?void 0:r.isAuth;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{handleLogoutSubmit:function(e){return i.apply(this,arguments)}}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/registration",children:Object(m.jsx)(x,{})}),Object(m.jsx)(j.a,{path:"/login",children:Object(m.jsx)(O,{isAuth:b,setUser:c})}),Object(m.jsx)(j.a,{path:"/organizations",children:Object(m.jsx)(z,{})}),Object(m.jsxs)(j.a,{path:"/my-contributions",children:[Object(m.jsx)(T,{isAuth:b,user:r}),Object(m.jsx)(k,{isAuth:b,user:r})]}),Object(m.jsx)(j.a,{path:"/",children:Object(m.jsx)(v,{})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N.a,{children:Object(m.jsx)(D,{})})}),document.getElementById("root")),E()}},[[82,1,2]]]);
//# sourceMappingURL=main.0ab8bbd1.chunk.js.map