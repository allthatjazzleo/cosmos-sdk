(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{794:function(e,t,a){"use strict";a.r(t);var s=a(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),a("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK Application")])],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("Lifecycle of a Transaction")])],1)]),e._v(" "),a("h2",{attrs:{id:"types-of-application-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-application-interfaces"}},[e._v("#")]),e._v(" Types of Application Interfaces")]),e._v(" "),a("p",[e._v("SDK applications generally have a Command-Line Interface (CLI) and REST Interface to support interactions with a "),a("RouterLink",{attrs:{to:"/core/node.html"}},[e._v("full-node")]),e._v(". The SDK is opinionated about how to create these two interfaces; all modules specify "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra commands"),a("OutboundLink")],1),e._v(" and register routes using "),a("a",{attrs:{href:"https://github.com/gorilla/mux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gorilla Mux routers"),a("OutboundLink")],1),e._v(". The CLI and REST Interface are conventionally defined in the application "),a("code",[e._v("./app/cmd/cli")]),e._v(" folder.")],1),e._v(" "),a("h2",{attrs:{id:"module-vs-application-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-vs-application-interfaces"}},[e._v("#")]),e._v(" Module vs Application Interfaces")]),e._v(" "),a("p",[e._v("The process of creating an application interface is distinct from creating a "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html"}},[e._v("module interface")]),e._v(", though the two are closely intertwined. As expected, module interfaces handle the bulk of the underlying logic, defining ways for end-users to create "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("messages")]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[e._v("queries")]),e._v(" to the subset of application state within their scope. On the other hand, application interfaces aggregate module-level interfaces in order to route "),a("code",[e._v("messages")]),e._v(" and "),a("code",[e._v("queries")]),e._v(" to the appropriate modules. Application interfaces also handle root-level responsibilities such as signing and broadcasting "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(" that wrap messages.")],1),e._v(" "),a("h3",{attrs:{id:"module-developer-responsibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-developer-responsibilities"}},[e._v("#")]),e._v(" Module Developer Responsibilities")]),e._v(" "),a("p",[e._v("With regards to interfaces, module developers need to include the following definitions:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("CLI commands:")]),e._v(" Specifically, "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#transaction-commands"}},[e._v("Transaction commands")]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query-commands"}},[e._v("Query commands")]),e._v(". These are commands that users will invoke when interacting with the application to create transactions and queries. For example, if an application enables sending coins through the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module, users will create "),a("code",[e._v("tx auth send")]),e._v(" transactions.")],1),e._v(" "),a("li",[a("strong",[e._v("Request Handlers:")]),e._v(" Also categorized into Transaction and Query requests. Transactions will require HTTP "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#request-types"}},[e._v("Request Types")]),e._v(" in addition to "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#request-handlers"}},[e._v("Request Handlers")]),e._v(" in order to encapsulate all of the user's options (e.g. gas prices).")],1),e._v(" "),a("li",[a("strong",[e._v("REST Routes:")]),e._v(" Given a router, the module interface registers paths with the aforementioned "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#request-handlers"}},[e._v("Request Handlers")]),e._v(" for each type of request.")],1)]),e._v(" "),a("p",[e._v("Module interfaces are designed to be generic. Both commands and request types  include required user input (through flags or request body) which are different for each application. This section of documents will only detail application interfaces; to read about how to build module interfaces, click "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"application-developer-responsibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-developer-responsibilities"}},[e._v("#")]),e._v(" Application Developer Responsibilities")]),e._v(" "),a("p",[e._v("With regards to interfaces, application developers need to include:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("CLI Root Command:")]),e._v(" The "),a("RouterLink",{attrs:{to:"/interfaces/cli.html#root-command"}},[e._v("root command")]),e._v(" adds subcommands to include all of the functionality for the application, mainly module "),a("RouterLink",{attrs:{to:"/interfaces/cli.html#transaction-commands"}},[e._v("transaction")]),e._v(" and "),a("RouterLink",{attrs:{to:"/interfaces/cli.html#query-commands"}},[e._v("query")]),e._v(" commands from the application's module(s).")],1),e._v(" "),a("li",[a("strong",[e._v("App Configurations:")]),e._v(" All application-specific values are the responsibility of the application developer, including the "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[a("code",[e._v("codec")])]),e._v(" used to marshal requests before relaying them to a node.")],1),e._v(" "),a("li",[a("strong",[e._v("User Configurations:")]),e._v(" Some values are specific to the user, such as the user's address and which node they are connected to. The CLI has a "),a("RouterLink",{attrs:{to:"/interfaces/cli.html#configurations"}},[e._v("configurations")]),e._v(" function to set these values.")],1),e._v(" "),a("li",[a("strong",[e._v("RegisterRoutes Function:")]),e._v(" "),a("RouterLink",{attrs:{to:"/interfaces/rest.html#registerroutes"}},[e._v("Routes")]),e._v(" must be registered and passed to an instantiated "),a("RouterLink",{attrs:{to:"/interfaces/rest.html#rest-server"}},[e._v("REST server")]),e._v(" so that it knows how to route requests for this particular application.")],1)]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Read about the "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html"}},[e._v("Lifecycle of a Query")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);