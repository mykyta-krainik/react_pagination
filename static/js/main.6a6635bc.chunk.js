(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),r=c(4),i=c(1),l=c(2),s=c.n(l);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.onPageChange,n=e.currentPage,r=void 0===n?1:n,i=Math.ceil(a/c),l=o(1,i),d=function(e){r===e||e<1||e>i||t(e)};return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===r,onClick:function(){return d(r-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:r===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return d(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:r===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":r===i,onClick:function(){return d(r+1)},children:"\xbb"})})]})};d.defaultProps={currentPage:1};c(11);var u=o(1,42).map((function(e){return"Item ".concat(e)})),p=[3,5,10,20],h=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),c=a[0],t=a[1],n=Object(i.useState)(5),l=Object(r.a)(n,2),s=l[0],o=l[1],h=u.length,m=s*(c-1)+1,b=s*c,g=b<=h?b:h,f=u.slice(m-1,g);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(m," - ").concat(g," of 42)")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:s,onChange:function(e){o(+e.target.value),t(1)},children:p.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h,perPage:s,currentPage:c,onPageChange:t}),Object(j.jsx)("ul",{children:f.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6a6635bc.chunk.js.map