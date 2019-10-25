(window.webpackJsonpcourseinfo=window.webpackJsonpcourseinfo||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),l=n(15),u=n(14),i=n(2),m=(n(21),function(e){var t=e.person,n=e.onClick;return r.a.createElement("div",{className:"card bg-light"},r.a.createElement("h4",{className:"text-gray text-left"},t.name,r.a.createElement("button",{style:{float:"right"},className:"btn btn-danger btn-sm",onClick:function(){return n(t)}},"Delete")),r.a.createElement("h4",{className:"text-gray text-left"},t.number))}),s=function(e){var t=e.persons,n=e.onClick;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(m,{key:e.name,person:e,onClick:n})}))},f=function(e){return r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.newName,type:"text",onChange:function(t){return e.handleChangeName(t.target.value)},required:!0})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:e.newNumber,type:"text",onChange:function(t){return e.handleChangeNumber(t.target.value)},required:!0})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn-success btn-block"},"Add")))},d=function(){return r.a.createElement("div",{className:"text-center text-dark"},r.a.createElement("br",null),r.a.createElement("em",null,"Copyright \xa9 Julius Kimuli"))},b=function(e){return r.a.createElement("input",{value:e.searchText,type:"text",onChange:function(t){return e.handleChangeSearchText(t.target.value)}})},h=function(e){var t=e.message;return t.length>0?r.a.createElement("p",{style:{color:"green",background:"lightgrey",fontSize:16,borderStyle:"solid",borderRadius:2,padding:10,marginBottom:10}}," ",t):r.a.createElement(r.a.Fragment,null," ")},g=function(e){var t=e.message;return t.length>0?r.a.createElement("p",{style:{color:"red",background:"lightgrey",fontSize:16,borderStyle:"solid",borderRadius:2,padding:10,marginBottom:10}}," ",t):r.a.createElement(r.a.Fragment,null," ")},p=n(3),E=n.n(p),v="/api/persons",y=function(){return E.a.get(v).then(function(e){return e.data})},O=function(e){return E.a.post(v,e).then(function(e){return e.data})},w=function(e,t){return E.a.put("".concat(v,"/").concat(e),t).then(function(e){return e.data})},j=function(e){return E.a.delete("".concat(v,"/").concat(e)).then(function(e){return e.data})},N=function(e){var t=e.title,n=e.icon;return r.a.createElement("div",{className:"navbar bg-primary"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",t))};N.defaultProps={title:"My Phonebook",icon:"fas fa-address-book"};var S=N;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var C=function(){Object(a.useEffect)(function(){y().then(function(e){c(e)}).catch(function(e){return console.log(e)})},[]);var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),m=Object(i.a)(o,2),p=m[0],E=m[1],v=Object(a.useState)(""),N=Object(i.a)(v,2),C=N[0],x=N[1],P=Object(a.useState)(""),D=Object(i.a)(P,2),T=D[0],A=D[1],B=Object(a.useState)(""),F=Object(i.a)(B,2),J=F[0],q=F[1],z=Object(a.useState)(""),L=Object(i.a)(z,2),R=L[0],I=L[1],K=function(e){q(e),setTimeout(function(){q("")},3e3)},M=function(e){I(e.error),setTimeout(function(){I("")},3e3)};return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement("div",{className:"container grid-2"},r.a.createElement("div",{className:"card m-1"},J&&r.a.createElement("p",null,r.a.createElement(h,{message:J})),R&&r.a.createElement("p",null,r.a.createElement(g,{message:R})),r.a.createElement("h5",null,"Search Phonebook:"),r.a.createElement(b,{searchText:T,handleChangeSearchText:function(e){A(e)}}),r.a.createElement("br",null),r.a.createElement("h5",{className:"text-center"},"Add New Phone Number:"),r.a.createElement(f,{onSubmit:function(e){if(e.preventDefault(),n.map(function(e){return e.name}).includes(p)){window.confirm("".concat(p," already exists in the phonebook,replace the old number with the new number?"));var t=n.filter(function(e){return e.name===p});console.log(t[0].id);var a=t[0].id;console.log(a);var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t[0],{number:C});w(a,r).then(function(e){c(n.map(function(t){return t.id!==a?t:e})),E(""),x(""),K("".concat(e.name," number changed!"))}).catch(function(e){return M(e.response.data)})}else{var o={name:p,number:C};O(o).then(function(e){c([].concat(Object(l.a)(n),[o])),E(""),x(""),K("".concat(o.name," has been added"))}).catch(function(e){E(""),x(""),M(e.response.data)})}},handleChangeName:function(e){console.log(e),E(e)},handleChangeNumber:function(e){console.log(e),x(e)},newName:p,newNumber:C})),r.a.createElement("div",null,r.a.createElement(s,{persons:n.filter(function(e){return e.name.toLowerCase().includes(T.toLowerCase())}),onClick:function(e){var t=e.id;window.confirm("Delete ".concat(e.name,"?"))&&j(t).then(function(a){c(n.filter(function(e){return e.id!==t})),K("".concat(e.name," has been deleted"))}).catch(function(e){return M(e.response.data)})}}))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(d,null))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4b562599.chunk.js.map