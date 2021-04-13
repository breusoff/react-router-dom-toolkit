(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(90));const l={title:"useTitle",slug:"/use-title"},o={unversionedId:"use-title",id:"use-title",isDocsHomePage:!1,title:"useTitle",description:"React side-effect hook that sets title of the page.",source:"@site/docs/use-title.md",slug:"/use-title",permalink:"/react-router-dom-toolkit/docs/use-title",editUrl:"https://github.com/vbdzzz/react-router-dom-toolkit/edit/master/docs/docs/use-title.md",version:"current",sidebar:"docs",previous:{title:"useScrollToTop",permalink:"/react-router-dom-toolkit/docs/use-scroll-to-top"},next:{title:"useParameter",permalink:"/react-router-dom-toolkit/docs/use-parameter"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[{value:"ITitleOptions",id:"ititleoptions",children:[]},{value:"IAppNameOptions",id:"iappnameoptions",children:[]}]}],p={toc:i};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React side-effect hook that sets title of the page."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport {useTitle} from \'react-router-dom-toolkit\';\n\nconst App = () => {\n    useTitle("Hello World")\n    // => Hello World\n\n    useTitle("Hello World", {app: {\n        name: "App Name",\n    }})\n    // => Hello World | App Name\n\n    useTitle("Hello World", {app: {\n        name: "App Name",\n        nameBeforeDelimiter: true,\n    }})\n    // => App Name | Hello World\n\n    useTitle("Hello World", {app: {\n        name: "App Name",\n        delimiter: " # ",\n    }})\n    // => Hello World # App Name\n\n    return (\n        <div>\n            App\n        </div>\n    );\n};\n')),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Props"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Default"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"title"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"-"),Object(a.b)("td",{parentName:"tr",align:null},"some text in title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},"ITitleOptions"),Object(a.b)("td",{parentName:"tr",align:null},"-"),Object(a.b)("td",{parentName:"tr",align:null},"other title options")))),Object(a.b)("h3",{id:"ititleoptions"},"ITitleOptions"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Props"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Default"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"app"),Object(a.b)("td",{parentName:"tr",align:null},"IAppNameOptions"),Object(a.b)("td",{parentName:"tr",align:null},"-"),Object(a.b)("td",{parentName:"tr",align:null},"props for application title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"restoreOnUnmount"),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"false"),Object(a.b)("td",{parentName:"tr",align:null},"restore old title after component unmount")))),Object(a.b)("h3",{id:"iappnameoptions"},"IAppNameOptions"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Props"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Default"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"name"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"-"),Object(a.b)("td",{parentName:"tr",align:null},"application name")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"delimiter"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},'" ',"|",' "'),Object(a.b)("td",{parentName:"tr",align:null},"symbol between application name and title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"nameBeforeDelimiter"),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"false"),Object(a.b)("td",{parentName:"tr",align:null},"if ",Object(a.b)("strong",{parentName:"td"},"true")," put name before title")))))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(s,i(i({ref:t},b),{},{components:n})):a.a.createElement(s,i({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);