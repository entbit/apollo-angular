(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return n?r.a.createElement(g,s(s({ref:t},c),{},{components:n})):r.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},35:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(151)),i={title:"Using Fragments"},s={unversionedId:"features/fragments",id:"version-1.0/features/fragments",isDocsHomePage:!1,title:"Using Fragments",description:"A GraphQL fragment is a shared piece of query logic.",source:"@site/versioned_docs/version-1.0/features/fragments.md",slug:"/features/fragments",permalink:"/docs/1.0/features/fragments",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/fragments.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Updating the Store",permalink:"/docs/1.0/features/cache-updates"},next:{title:"Subscriptions",permalink:"/docs/1.0/features/subscriptions"}},l=[{value:"Reusing Fragments",id:"reusing-fragments",children:[]},{value:"Colocating Fragments",id:"colocating-fragments",children:[{value:"Creating Fragments",id:"creating-fragments",children:[]},{value:"Filtering With Fragments",id:"filtering-with-fragments",children:[]},{value:"Importing fragments when using Webpack",id:"importing-fragments-when-using-webpack",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"http://graphql.org/learn/queries/#fragments"},"GraphQL fragment")," is a shared piece of query logic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'fragment NameParts on Person {\n  firstName\n  lastName\n}\n\nquery getPerson {\n  people(id: "7") {\n    ...NameParts\n    avatar(size: LARGE)\n  }\n}\n')),Object(o.b)("p",null,"There are two principal uses for fragments in Apollo:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sharing fields between multiple queries, mutations or subscriptions."),Object(o.b)("li",{parentName:"ul"},"Breaking your queries up to allow you to co-locate field access with the places they are used.")),Object(o.b)("p",null,"In this document we'll outline patterns to do both; we'll also make use of utilities in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client"},Object(o.b)("inlineCode",{parentName:"a"},"graphql-anywhere"))," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag"},Object(o.b)("inlineCode",{parentName:"a"},"graphql-tag"))," packages which aim to help us, especially with the second problem."),Object(o.b)("h2",{id:"reusing-fragments"},"Reusing Fragments"),Object(o.b)("p",null,"The most straightforward use of fragments is to reuse parts of queries (or mutations or subscriptions) in various parts of your application. For instance, in GitHunt on the comments page, we want to fetch the same fields after posting a comment as we originally query. This way we can be sure that we render consistent comment objects as the data changes."),Object(o.b)("p",null,"To do so, we can simply share a fragment describing the fields we need for a comment:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import gql from 'graphql-tag';\n\nCommentsPage.fragments = {\n  comment: gql`\n    fragment CommentsPageComment on Comment {\n      id\n      postedBy {\n        login\n        html_url\n      }\n      createdAt\n      content\n    }\n  `,\n};\n")),Object(o.b)("p",null,"We put the fragment on ",Object(o.b)("inlineCode",{parentName:"p"},"CommentsPage.fragments.comment")," by convention, and use the familiar ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," helper to create it."),Object(o.b)("p",null,"When it's time to embed the fragment in a query, we simply use the ",Object(o.b)("inlineCode",{parentName:"p"},"...Name")," syntax in our GraphQL, and embed the fragment inside our query GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const SUBMIT_COMMENT_MUTATION = gql`\n  mutation submitComment($repoFullName: String!, $commentContent: String!) {\n    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {\n      ...CommentsPageComment\n    }\n  }\n  ${CommentsPage.fragments.comment}\n`;\n\nexport const COMMENT_QUERY = gql`\n  query Comment($repoName: String!) {\n    # ...\n    entry(repoFullName: $repoName) {\n      # ...\n      comments {\n        ...CommentsPageComment\n      }\n      # ...\n    }\n  }\n  ${CommentsPage.fragments.comment}\n`;\n")),Object(o.b)("h2",{id:"colocating-fragments"},"Colocating Fragments"),Object(o.b)("p",null,"A key advantage of GraphQL is the tree-like nature of the response data, which in many cases mirrors your rendered component hierarchy. This, combined with GraphQL's support for fragments, allows you to split your queries up in such a way that the various fields fetched by the queries are located right alongside the code that uses the field."),Object(o.b)("p",null,"Although this technique doesn't always make sense (for instance it's not always the case that the GraphQL schema is driven by the UI requirements), when it does, it's possible to use some patterns in Apollo client to take full advantage of it."),Object(o.b)("p",null,"Imagine this view hierarchy:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"FeedPage\n\u2514\u2500\u2500 Feed\n    \u2514\u2500\u2500 FeedEntry\n        \u251c\u2500\u2500 RepoInfo\n        \u2514\u2500\u2500 VoteButtons\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"FeedPage")," conducts a query to fetch a list of ",Object(o.b)("inlineCode",{parentName:"p"},"Entry"),"s, and each of the subcomponents requires different subfields of each ",Object(o.b)("inlineCode",{parentName:"p"},"Entry"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-anywhere")," package gives us tools to easily construct a single query that provides all the fields that each subcomponent needs, and allows to easily pass the exact field that a component needs to it."),Object(o.b)("h3",{id:"creating-fragments"},"Creating Fragments"),Object(o.b)("p",null,"To create the fragments, we again use the ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," helper and attach to subfields of ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentClass.fragments"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"VoteButtons.fragments = {\n  entry: gql`\n    fragment VoteButtons on Entry {\n      score\n      vote {\n        vote_value\n      }\n    }\n  `,\n};\n")),Object(o.b)("p",null,"If our fragments include sub-fragments then we can pass them into the ",Object(o.b)("inlineCode",{parentName:"p"},"gql")," helper:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"FeedEntry.fragments = {\n  entry: gql`\n    fragment FeedEntry on Entry {\n      commentCount\n      repository {\n        full_name\n        html_url\n        owner {\n          avatar_url\n        }\n      }\n      ...VoteButtons\n      ...RepoInfo\n    }\n    ${VoteButtons.fragments.entry}\n    ${RepoInfo.fragments.entry}\n  `,\n};\n")),Object(o.b)("h3",{id:"filtering-with-fragments"},"Filtering With Fragments"),Object(o.b)("p",null,"We can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-anywhere")," package to filter the exact fields from the ",Object(o.b)("inlineCode",{parentName:"p"},"entry")," before passing them to the subcomponent. So when we render a ",Object(o.b)("inlineCode",{parentName:"p"},"VoteButtons"),", we can simply do:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { filter } from 'graphql-anywhere';\n\n<VoteButtons\n  entry={filter(VoteButtons.fragments.entry, entry)}\n  canVote={loggedIn}\n  onVote={type => onVote({\n    repoFullName: full_name,\n    type,\n  })}\n/>\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"filter()")," function will grab exactly the fields from the ",Object(o.b)("inlineCode",{parentName:"p"},"entry")," that the fragment defines."),Object(o.b)("h3",{id:"importing-fragments-when-using-webpack"},"Importing fragments when using Webpack"),Object(o.b)("p",null,"When loading ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag/blob/master/loader.js"},"graphql-tag/loader"),", we can include fragments using ",Object(o.b)("inlineCode",{parentName:"p"},"import")," statements. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'#import "./someFragment.graphql"\n')),Object(o.b)("p",null,"Will make the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"someFragment.graphql")," available to the current file. See the ",Object(o.b)("a",{parentName:"p",href:"/docs/1.0/recipes/webpack#fragments"},"Webpack Fragments")," section for additional details."))}p.isMDXComponent=!0}}]);