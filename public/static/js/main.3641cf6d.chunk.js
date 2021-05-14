(this["webpackJsonp09-calendar-app"]=this["webpackJsonp09-calendar-app"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=(n(70),n(10)),s=n(9),i=n(38),u=n(13),l=(n(74),n(26)),d=n(5),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},r),{},Object(l.a)({},t.name,t.value)))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)};return[r,o,s]},b=n(12),m=n.n(b),v=n(23),f=n(14),p=n.n(f),O={uiOpenModal:"[ui] Modal opened",uiCloseModal:"[ui] modal closed",eventSetActive:"[event] Active event Setted",eventLogout:"[event] Logged Out",eventStartAddNew:"[event] Start add new",eventAddNew:"[event] Event Added",eventClearActiveEvent:"[event] Event cleared",eventUpdated:"[event] Event updated",eventDeleted:"[event] Event deleted",eventLoaded:"[event] Events loaded",authCheckingFinish:"[auth] Finish checking login state",authLogin:"[auth] Start login",authStartRegister:"[auth] Start Register",authLogout:"[auth] Logout"},h="http://mern-calendar.herokuapp.com/api",g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(h,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(h,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},y=n(18),w=n.n(y),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{start:w()(e.start).toDate(),end:w()(e.end).toDate()})}))},E=function(e){return{type:O.eventAddNew,payload:e}},k=function(){return{type:O.eventClearActiveEvent}},S=function(e){return{type:O.eventUpdated,payload:e}},C=function(){return{type:O.eventDeleted}},A=function(e){return{type:O.eventLoaded,payload:e}},D=function(){return{type:O.authCheckingFinish}},L=function(e){return{type:O.authLogin,payload:e}},T=function(){return function(e){localStorage.clear(),e({type:O.eventLogout}),e(I())}},I=function(){return{type:O.authLogout}},P=n(2),M=function(){var e=Object(o.b)(),t=j({loginEmail:"",loginPassword:""}),n=Object(u.a)(t,2),a=n[0],r=n[1],c=a.loginEmail,s=a.loginPassword,i=j({registerName:"",registerEmail:"",registerPassword:"",passwordConfirmation:""}),l=Object(u.a)(i,2),d=l[0],b=l[1],f=d.registerName,O=d.registerEmail,h=d.registerPassword,x=d.passwordConfirmation;return Object(P.jsx)("div",{className:"container login-container",children:Object(P.jsxs)("div",{className:"row",children:[Object(P.jsxs)("div",{className:"col-md-6 login-form-1 mb-5",children:[Object(P.jsx)("h3",{children:"Login"}),Object(P.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(v.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(L({uid:c.uid,name:c.name}))):p.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(P.jsx)("div",{className:"form-group",children:Object(P.jsx)("input",{name:"loginEmail",value:c,onChange:r,type:"text",className:"form-control",placeholder:"Correo",autoComplete:"off"})}),Object(P.jsx)("div",{className:"form-group mb-4",children:Object(P.jsx)("input",{name:"loginPassword",value:s,onChange:r,type:"password",className:"form-control",autoComplete:"off"})}),Object(P.jsx)("div",{className:"form-group text-center",children:Object(P.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(P.jsxs)("div",{className:"col-md-6 login-form-2 mb-5",children:[Object(P.jsx)("h3",{children:"Register"}),Object(P.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),h!==x)return p.a.fire("Error","Las contrase\xf1as deben coincidir","error");var n,a,r;e((n=f,a=O,r=h,function(){var e=Object(v.a)(m.a.mark((function e(t){var c,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(L({uid:o.uid,name:o.name}))):(s=o.errors?Object.values(o.errors)[0].msg:o.msg,p.a.fire("Error",s,"error"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(P.jsx)("div",{className:"form-group",children:Object(P.jsx)("input",{name:"registerName",type:"text",className:"form-control",placeholder:"Name",autoComplete:"off",onChange:b,value:f})}),Object(P.jsx)("div",{className:"form-group",children:Object(P.jsx)("input",{name:"registerEmail",type:"email",className:"form-control",placeholder:"Email",autoComplete:"off",onChange:b,value:O})}),Object(P.jsx)("div",{className:"form-group",children:Object(P.jsx)("input",{name:"registerPassword",type:"password",className:"form-control",placeholder:"Password",autoComplete:"off",onChange:b,value:h})}),Object(P.jsx)("div",{className:"form-group mb-4",children:Object(P.jsx)("input",{name:"passwordConfirmation",type:"password",className:"form-control",placeholder:"Password Confirmation",autoComplete:"off",onChange:b,value:x})}),Object(P.jsx)("div",{className:"form-group text-center",children:Object(P.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create Account"})})]})]})]})})},_=function(){return{type:O.uiOpenModal}},F=n(55),R=(n(78),n(79),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),G=n(20),H=n(21),U=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(P.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(P.jsx)("span",{className:"navbar-brand",children:e}),Object(P.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),t(T())},children:[Object(P.jsx)(G.a,{icon:H.c}),"\xa0Salir"]})]})},V=function(e){var t=e.event,n=t.title,a=t.user;return Object(P.jsxs)("div",{children:[Object(P.jsx)("strong",{children:n}),Object(P.jsxs)("span",{children:["\xa0-\xa0",a.name]})]})},B=n(50),J=n.n(B),z=n(51),X=n.n(z),q={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},K=w()().minutes(0).seconds(0).add(1,"hours"),Q=K.clone().add(1,"hours"),W={title:"",notes:"",start:K.toDate(),end:Q.toDate()},Y=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(K.toDate()),c=Object(u.a)(r,2),s=c[0],i=c[1],j=Object(a.useState)(Q.toDate()),b=Object(u.a)(j,2),f=b[0],h=b[1],g=Object(a.useState)(!0),y=Object(u.a)(g,2),N=y[0],C=y[1],A=Object(a.useState)(!0),D=Object(u.a)(A,2),L=D[0],T=D[1],I=Object(a.useState)(W),M=Object(u.a)(I,2),_=M[0],F=M[1],R=_.notes,U=_.title,V=_.start,B=_.end;Object(a.useEffect)((function(){F(t||W)}),[t,F]);var z=function(e){var t=e.target;F(Object(d.a)(Object(d.a)({},_),{},Object(l.a)({},t.name,t.value)))},Y=function(){n({type:O.uiCloseModal}),n(k()),F(W)};return J.a.setAppElement("#root"),Object(P.jsxs)(J.a,{isOpen:e,onRequestClose:Y,style:q,closeTimeoutMS:250,className:"modal",overlayClassName:"modal-fondo",children:[Object(P.jsx)("button",{className:"btn btn-secondary btn-close",onClick:Y,children:Object(P.jsx)(G.a,{icon:H.d})}),Object(P.jsx)("h1",{children:t?"Editar evento":"Nuevo evento"}),Object(P.jsx)("hr",{}),Object(P.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a=w()(V),r=w()(B);return a.isSameOrAfter(r)?p.a.fire("Error","La fecha final debe de ser mayor a la fecha de inicio","error"):U.trim().length<3?(C(!1),void p.a.fire("Error","El t\xedtulo debe ser mayor a 3 caracteres","error")):(R.trim().length<8&&(T(!1),p.a.fire("Error","Las notas deben ser mayor a 8 caracteres","error")),C(!0),T(!0),n(t?function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x("events/".concat(e.id),e,"PATCH");case 3:return a=t.sent,t.next=6,a.json();case 6:(r=t.sent).ok?(n(S(e)),p.a.fire({position:"center",icon:"success",title:"El evento ha sido actualizado",showConfirmButton:!1,timer:1500})):p.a.fire("Error",r.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(_):function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n,a){var r,c,o,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,x("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:c,name:o},n(E(e)),p.a.fire({position:"center",icon:"success",title:"El evento ha sido creado",showConfirmButton:!1,timer:1500})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(_)),void Y())},children:[Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Fecha y hora inicio"}),Object(P.jsx)(X.a,{onChange:function(e){i(e),F(Object(d.a)(Object(d.a)({},_),{},{start:e}))},value:s,className:"form-control"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Fecha y hora fin"}),Object(P.jsx)(X.a,{onChange:function(e){h(e),F(Object(d.a)(Object(d.a)({},_),{},{end:e}))},value:f,minDate:s,className:"form-control"})]}),Object(P.jsx)("hr",{}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Titulo y notas"}),Object(P.jsx)("input",{type:"text",className:"form-control ".concat(!N&&"is-invalid"),placeholder:"Evento",name:"title",autoComplete:"off",value:U,onChange:z}),Object(P.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("textarea",{type:"text",className:"form-control ".concat(!L&&"is-invalid"),placeholder:"Notas",rows:"5",name:"notes",onChange:z,value:R}),Object(P.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(P.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(P.jsx)(G.a,{icon:H.b}),"\xa0",Object(P.jsx)("span",{children:"Guardar"})]})]})]})},Z=function(){var e=Object(o.b)();return Object(P.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(_())},children:Object(P.jsx)(G.a,{icon:H.a})})},$=function(){var e=Object(o.b)();return Object(P.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(v.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,x("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?(t(C()),p.a.fire({position:"center",icon:"success",title:"El evento ha sido eliminado",showConfirmButton:!1,timer:1500})):p.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(P.jsx)(G.a,{icon:H.e})})};w.a.locale("es");var ee=Object(F.b)(w.a),te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(u.a)(s,2),l=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(v.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=N(a.events),a.ok&&t(A(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(P.jsxs)("div",{className:"calendar-screen",children:[Object(P.jsx)(U,{}),Object(P.jsx)(F.a,{localizer:ee,events:n,startAccessor:"start",endAccessor:"end",messages:R,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#3667F7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"#ffffff"}}},onSelectEvent:function(t){e(function(e){return{type:O.eventSetActive,payload:e}}(t))},onDoubleClickEvent:function(t){e(_())},onView:function(e){d(e),localStorage.setItem("lastView",e)},onSelectSlot:function(){e(k())},selectable:!0,view:l,components:{event:V}}),Object(P.jsx)(Y,{}),r&&Object(P.jsx)($,{}),Object(P.jsx)(Z,{})]})},ne=function(e){var t=e.msg,n=Object(a.useState)("Loading"),r=Object(u.a)(n,2),c=r[0],o=r[1];return t&&o(t),Object(P.jsx)("div",{className:"bg-dark d-flex justify-content-center align-items-center",style:{height:"100vh"},children:Object(P.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(P.jsxs)("span",{className:"sr-only",children:[c," ..."]})})})},ae=n(41),re=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ae.a)(e,["isAuthenticated","component"]);return Object(P.jsx)(s.b,Object(d.a)(Object(d.a)({},a),{},{component:function(e){return t?Object(P.jsx)(s.a,{to:"/"}):Object(P.jsx)(n,Object(d.a)({},e))}}))},ce=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ae.a)(e,["isAuthenticated","component"]);return Object(P.jsx)(s.b,Object(d.a)(Object(d.a)({},a),{},{component:function(e){return t?Object(P.jsx)(n,Object(d.a)({},e)):Object(P.jsx)(s.a,{to:"/login"})}}))},oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(v.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return t(D()),e.abrupt("return");case 4:return e.next=6,x("auth/renew");case 6:return n=e.sent,e.next=9,n.json();case 9:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(L({uid:a.uid,name:a.name}))):t(D());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(P.jsx)(ne,{}):Object(P.jsx)(i.a,{children:Object(P.jsx)("div",{children:Object(P.jsxs)(s.d,{children:[Object(P.jsx)(re,{exact:!0,path:"/login",component:M,isAuthenticated:!!r}),Object(P.jsx)(ce,{exact:!0,path:"/",component:te,isAuthenticated:!!r}),Object(P.jsx)(s.a,{to:"/"})]})})})},se=n(27),ie=n(65),ue={modalOpen:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.uiOpenModal:return Object(d.a)(Object(d.a)({},e),{},{modalOpen:!0});case O.uiCloseModal:return Object(d.a)(Object(d.a)({},e),{},{modalOpen:!1});default:return e}},de=n(56),je={events:[],activeEvent:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.eventSetActive:return Object(d.a)(Object(d.a)({},e),{},{activeEvent:t.payload});case O.eventAddNew:return Object(d.a)(Object(d.a)({},e),{},{events:[].concat(Object(de.a)(e.events),[t.payload])});case O.eventClearActiveEvent:return Object(d.a)(Object(d.a)({},e),{},{activeEvent:null});case O.eventUpdated:return Object(d.a)(Object(d.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O.eventDeleted:return Object(d.a)(Object(d.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O.eventLoaded:return Object(d.a)(Object(d.a)({},e),{},{events:Object(de.a)(t.payload)});case O.eventLogout:return Object(d.a)({},je);default:return e}},me={checking:!0},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.authLogin:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{checking:!1});case O.authCheckingFinish:return Object(d.a)(Object(d.a)({},e),{},{checking:!1});case O.authLogout:return{checking:!1};default:return e}},fe=Object(se.b)({ui:le,calendar:be,auth:ve}),pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,Oe=Object(se.d)(fe,pe(Object(se.a)(ie.a))),he=function(){return Object(P.jsx)(o.a,{store:Oe,children:Object(P.jsx)(oe,{})})};c.a.render(Object(P.jsx)(he,{}),document.getElementById("root"))},74:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.3641cf6d.chunk.js.map