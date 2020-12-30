(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(5),r=n(10),o=(n(1),n(341)),i={id:"gatsby",title:"GatsbyJS"},s={unversionedId:"integrations/gatsby",id:"integrations/gatsby",isDocsHomePage:!1,title:"GatsbyJS",description:"If you are building apps using GatsbyJS, you can use GraphQL Code Generator to generate TypeScript types.",source:"@site/docs/integrations/gatsby.md",slug:"/integrations/gatsby",permalink:"/docs/integrations/gatsby",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/gatsby.md",version:"current",sidebar:"sidebar",previous:{title:"Create-React-App",permalink:"/docs/integrations/create-react-app"},next:{title:"Prettier & Linters",permalink:"/docs/integrations/prettier"}},c=[{value:"Community Plugins",id:"community-plugins",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are building apps using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"GatsbyJS"),", you can use GraphQL Code Generator to generate TypeScript types."),Object(o.b)("p",null,"The codegen knows automatically to look for the import of the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," tag for ",Object(o.b)("inlineCode",{parentName:"p"},"gatsby")," package."),Object(o.b)("p",null,"Using the following config file, it should cover everything specific to Gastby:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:8000/___graphql\ndocuments:\n  - ./src/**/*.{ts,tsx}\n  - ./node_modules/gatsby*/!(node_modules)/**/*.js\ngenerates:\n  ./src/graphqlTypes.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(o.b)("p",null,"Now, the codegen should be able to load your GraphQL operations from your source code, and also load all the internal fragments from ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Note on ",Object(o.b)("inlineCode",{parentName:"h5"},"documents")," section")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The glob expression above should get you started quickly, but note that it's very broad and might load many files that matches the ",Object(o.b)("inlineCode",{parentName:"p"},"./node_modules/gatsby*/!(node_modules)/**/*.js")," pattern.\nIf you are having issues with this glob expression, or if you are seeing performance issues, please note that you need to narrow this expression to the bare minimum that is being loaded by your Gatsby instance."),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/issues/5024"}),"This issue might help")))),Object(o.b)("h2",{id:"community-plugins"},"Community Plugins"),Object(o.b)("p",null,"There are also community Gatsby plugins that integrate with @graphl-codegen:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/d4rekanguok/gatsby-typescript/tree/master/packages/gatsby-plugin-graphql-codegen"}),"gatsby-plugin-graphql-codegen")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cometkim/gatsby-plugin-typegen"}),"gatsby-plugin-typegen"))))}l.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(1),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),g=a,m=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);