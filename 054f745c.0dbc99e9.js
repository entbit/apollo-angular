(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(9),r=(n(0),n(151)),i={title:"Subscriptions"},s={unversionedId:"features/subscriptions",id:"version-1.0/features/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"In addition to fetching data using queries and modifying data using mutations, the GraphQL spec supports a third operation type, called subscription.",source:"@site/versioned_docs/version-1.0/features/subscriptions.md",slug:"/features/subscriptions",permalink:"/docs/1.0/features/subscriptions",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/subscriptions.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Using Fragments",permalink:"/docs/1.0/features/fragments"},next:{title:"Integrating with NativeScript",permalink:"/docs/1.0/features/nativescript"}},l=[{value:"Overview",id:"overview",children:[{value:"When to use subscriptions",id:"when-to-use-subscriptions",children:[]}]},{value:"Client setup",id:"client-setup",children:[]},{value:"subscribeToMore",id:"subscribetomore",children:[]},{value:"Authentication over WebSocket",id:"authentication-over-websocket",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In addition to fetching data using queries and modifying data using mutations, the GraphQL spec supports a third operation type, called ",Object(r.b)("inlineCode",{parentName:"p"},"subscription"),"."),Object(r.b)("p",null,"GraphQL subscriptions are a way to push data from the server to the clients that choose to listen to real time messages from the server. Subscriptions are similar to queries in that they specify a set of fields to be delivered to the client, but instead of immediately returning a single answer, a result is sent every time a particular event happens on the server."),Object(r.b)("p",null,"A common use case for subscriptions is notifying the client side about particular events, for example the creation of a new object, updated fields and so on."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"GraphQL subscriptions have to be defined in the schema, just like queries and mutations:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"type Subscription {\n  commentAdded(repoFullName: String!): Comment\n}\n")),Object(r.b)("p",null,"On the client, subscription queries look just like any other kind of operation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"subscription onCommentAdded($repoFullName: String!) {\n  commentAdded(repoFullName: $repoFullName) {\n    id\n    content\n  }\n}\n")),Object(r.b)("p",null,"The response sent to the client looks as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "commentAdded": {\n      "id": "123",\n      "content": "Hello!"\n    }\n  }\n}\n')),Object(r.b)("p",null,"In the above example, the server is written to send a new result every time a comment is added on GitHunt for a specific repository. Note that the code above only defines the GraphQL subscription in the schema. Read ",Object(r.b)("a",{parentName:"p",href:"#client-setup"},"setting up subscriptions on the client")," and ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/graphql-subscriptions/"},"setting up GraphQL subscriptions for the server")," to learn how to add subscriptions to your app."),Object(r.b)("h3",{id:"when-to-use-subscriptions"},"When to use subscriptions"),Object(r.b)("p",null,"In most cases, intermittent polling or manual refetching are actually the best way to keep your client up to date. So when is a subscription the best option? Subscriptions are especially useful if:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The initial state is large, but the incremental change sets are small. The starting state can be fetched with a query and subsequently updated through a subscription."),Object(r.b)("li",{parentName:"ol"},"You care about low-latency updates in the case of specific events, for example in the case of a chat application where users expect to receive new messages in a matter of seconds.")),Object(r.b)("p",null,"A future version of Apollo or GraphQL might include support for live queries, which would be a low-latency way to replace polling, but at this point general live queries in GraphQL are not yet possible outside of some relatively experimental setups."),Object(r.b)("h2",{id:"client-setup"},"Client setup"),Object(r.b)("p",null,"The most popular transport for GraphQL subscriptions today is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws"},Object(r.b)("inlineCode",{parentName:"a"},"subscriptions-transport-ws")),". This package is maintained by the Apollo community, but can be used with any client or server GraphQL implementation. In this article, we'll explain how to set it up on the client, but you'll also need a server implementation. You can ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/graphql-subscriptions/setup/"},"read about how to use subscriptions with a JavaScript server"),", or enjoy subscriptions set up out of the box if you are using a GraphQL backend as a service like ",Object(r.b)("a",{parentName:"p",href:"https://www.graph.cool/docs/tutorials/worldchat-subscriptions-example-ui0eizishe/"},"Graphcool")," or ",Object(r.b)("a",{parentName:"p",href:"https://scaphold.io/blog/2016/11/09/build-realtime-apps-with-subs.html"},"Scaphold"),"."),Object(r.b)("p",null,"Let's look at how to add support for this transport to Apollo Client."),Object(r.b)("p",null,"First, install the WebSocket Apollo Link (",Object(r.b)("inlineCode",{parentName:"p"},"apollo-link-ws"),") from npm:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save apollo-link-ws\n")),Object(r.b)("p",null,"Then, initialize a GraphQL subscriptions transport link:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import {WebSocketLink} from 'apollo-link-ws';\n\nconst wsClient = new WebSocketLink({\n  uri: `ws://localhost:5000/`,\n  options: {\n    reconnect: true,\n  },\n});\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Apollo } from 'apollo-angular';\nimport { split } from 'apollo-link';\nimport { HttpLink } from 'apollo-angular-link-http';\nimport { WebSocketLink } from 'apollo-link-ws';\nimport { getMainDefinition } from 'apollo-utilities';\n\n@NgModule({ ... })\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    // Create an http link:\n    const http = httpLink.create({\n      uri: 'http://localhost:3000/graphql'\n    });\n\n    // Create a WebSocket link:\n    const ws = new WebSocketLink({\n      uri: `ws://localhost:5000/`,\n      options: {\n        reconnect: true\n      }\n    });\n\n    // using the ability to split links, you can send data to each link\n    // depending on what kind of operation is being sent\n    const link = split(\n      // split based on operation type\n      ({ query }) => {\n        const { kind, operation } = getMainDefinition(query);\n        return kind === 'OperationDefinition' && operation === 'subscription';\n      },\n      ws,\n      http,\n    );\n\n    apollo.create({\n      link,\n      // ... options\n    });\n  }\n}\n")),Object(r.b)("p",null,"Now, queries and mutations will go over HTTP as normal, but subscriptions will be done over the websocket transport."),Object(r.b)("h2",{id:"subscribetomore"},"subscribeToMore"),Object(r.b)("p",null,"With GraphQL subscriptions your client will be alerted on push from the server and you should choose the pattern that fits your application the most:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use it as a notification and run any logic you want when it fires, for example alerting the user or refetching data"),Object(r.b)("li",{parentName:"ul"},"Use the data sent along with the notification and merge it directly into the store (existing queries are automatically notified)")),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"subscribeToMore"),", you can easily do the latter."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"subscribeToMore")," is a method available on every query in ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),". It works just like ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0/features/cache-updates#incremental-loading-fetchmore"},Object(r.b)("inlineCode",{parentName:"a"},"fetchMore")),", except that the update function gets called every time the subscription returns, instead of only once."),Object(r.b)("p",null,"Here is a regular query:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Apollo, QueryRef } from 'apollo-angular';\nimport { Observable } from 'rxjs';\nimport gql from 'graphql-tag';\n\nconst COMMENT_QUERY = gql`\n  query Comment($repoName: String!) {\n    entry(repoFullName: $repoName) {\n      comments {\n        id\n        content\n      }\n    }\n  }\n`;\n\n@Component({ ... })\nclass CommentsComponent {\n  commentsQuery: QueryRef<any>;\n  comments: Observable<any>;\n  params: any;\n\n  constructor(apollo: Apollo) {\n    this.commentsQuery = apollo.watchQuery({\n      query: COMMENT_QUERY,\n      variables: {\n        repoName: `${params.org}/${params.repoName}`\n      }\n    });\n\n    this.comments = this.commentsQuery.valueChanges; // async results\n  }\n}\n")),Object(r.b)("p",null,"Now, let's add the subscription."),Object(r.b)("p",null,"Add a function called ",Object(r.b)("inlineCode",{parentName:"p"},"subscribeToNewComments")," that will subscribe using ",Object(r.b)("inlineCode",{parentName:"p"},"subscribeToMore")," and update the query's store with the new data using ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery"),"."),Object(r.b)("p",null,"Note that the ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery")," callback must return an object of the same shape as the initial query data, otherwise the new data won't be merged. Here the new comment is pushed in the ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," list of the ",Object(r.b)("inlineCode",{parentName:"p"},"entry"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const COMMENTS_SUBSCRIPTION = gql`\n    subscription onCommentAdded($repoFullName: String!){\n      commentAdded(repoFullName: $repoFullName){\n        id\n        content\n      }\n    }\n`;\n\n@Component({ ... })\nclass CommentsComponent {\n  commentsQuery: QueryRef<any>;\n\n  // ... it is the same component as one above\n\n  subscribeToNewComments(params) {\n    this.commentsQuery.subscribeToMore({\n      document: COMMENTS_SUBSCRIPTION,\n      variables: {\n        repoName: params.repoFullName,\n      },\n      updateQuery: (prev, {subscriptionData}) => {\n        if (!subscriptionData.data) {\n          return prev;\n        }\n\n        const newFeedItem = subscriptionData.data.commentAdded;\n\n        return {\n          ...prev,\n          entry: {\n            comments: [newFeedItem, ...prev.entry.comments]\n          }\n        };\n      }\n    });\n  }\n}\n")),Object(r.b)("p",null,"and start the actual subscription by calling the ",Object(r.b)("inlineCode",{parentName:"p"},"subscribeToNewComments")," function with the subscription variables:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"@Component({ ... })\nclass CommentsComponent {\n  // ... same component as one above\n\n  ngOnInit() {\n    this.subscribeToNewComments({\n      repoFullName: params.repoFullName,\n    });\n  }\n}\n")),Object(r.b)("h2",{id:"authentication-over-websocket"},"Authentication over WebSocket"),Object(r.b)("p",null,"In many cases it is necessary to authenticate clients before allowing them to receive subscription results. To do this, the ",Object(r.b)("inlineCode",{parentName:"p"},"SubscriptionClient")," constructor accepts a ",Object(r.b)("inlineCode",{parentName:"p"},"connectionParams")," field, which passes a custom object that the server can use to validate the connection before setting up any subscriptions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { WebSocketLink } from 'apollo-link-ws';\n\nconst wsLink = new WebSocketLink({\n  uri: `ws://localhost:5000/`,\n  options: {\n    reconnect: true,\n    connectionParams: {\n        authToken: user.authToken,\n    },\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"connectionParams")," for anything else you might need, not only authentication, and check its payload on the server side with ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/graphql-subscriptions/authentication/"},"SubscriptionsServer"),".")))}p.isMDXComponent=!0}}]);