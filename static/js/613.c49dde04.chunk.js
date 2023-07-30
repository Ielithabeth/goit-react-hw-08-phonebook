"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{6613:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,i=t(9434),s=t(2791),o=t(1417),c=function(n){return n.filter.search},u=function(n){return n.contacts.items},l=t(168),d=t(5867),p=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-bottom: 40px;\n\n  button {\n    margin-top: 20px;\n\n    width: 200px;\n    height: 36px;\n\n    border-radius: 18px;\n  }\n"]))),h=t(3329),m=function(){var n=(0,i.I0)(),e=(0,i.v9)(u);return(0,h.jsxs)(p,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.name.value,a=t.target.elements.number.value,i={name:r,number:a};e.find((function(n){return n.number===a}))?alert("".concat(a," is already in contacts.")):n((0,o.uK)(i)),t.target.reset()},children:[(0,h.jsxs)("label",{children:["Name",(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{children:["Number",(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",children:"Add Contact"})]})},x=d.ZP.li(a||(a=(0,l.Z)(["\ndisplay: flex;\ngap: 8px;\nmargin-bottom: 16px;\n\np {\n    font-weight: 600;\n}\n\nbutton {\n    margin-left: 12px;\n    padding: 0px;\n\n    width: 20px;\n    height: 20px;\n\n    border-radius: 10px;\n\n    align-items: center;\n}\n"]))),f=function(){var n=(0,i.I0)(),e=(0,i.v9)(c),t=(0,i.v9)(u),r=(0,s.useMemo)((function(){if(!e)return t;t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))}),[t,e]);return(0,h.jsx)("ul",{children:r.map((function(e){var t=e.name,r=e.number,a=e.id;return(0,h.jsxs)(x,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:t}),(0,h.jsx)("span",{children:r})]}),(0,h.jsx)("button",{type:"button",onClick:function(){return n((0,o.GK)(a))},children:"\xd7"})]},a)}))})},b=t(4296),j=function(){var n=(0,i.I0)(),e=(0,i.v9)(c);return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{children:["Find contacts by name",(0,h.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,b.x)(e.target.value))}})]})})},g=function(){var n,e=(0,i.I0)();return(0,s.useEffect)((function(){e((0,o.yF)())}),[e]),(0,h.jsxs)("section",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(m,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Contacts"}),n.contacts.length?(0,h.jsx)("p",{children:"Your phonebook is empty. Add your first contact"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j,{}),(0,h.jsx)(f,{})]})]})]})}}}]);
//# sourceMappingURL=613.c49dde04.chunk.js.map