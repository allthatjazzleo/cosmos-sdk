(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{703:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"query-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-lifecycle"}},[e._v("#")]),e._v(" Query Lifecycle")]),e._v(" "),o("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/interfaces/interfaces-intro.html"}},[e._v("Introduction to Interfaces")])],1)]),e._v(" "),o("h2",{attrs:{id:"query-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-creation"}},[e._v("#")]),e._v(" Query Creation")]),e._v(" "),o("p",[e._v("A "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("strong",[e._v("query")])]),e._v(" is a request for information made by end-users of applications through an interface and processed by a full-node. Users can query information about the network, the application itself, and application state directly from the application's stores or modules. Note that queries are different from "),o("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(" (view the lifecycle "),o("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v("), particularly in that they do not require consensus to be processed (as they do not trigger state-transitions); they can be fully handled by one full-node.")],1),e._v(" "),o("p",[e._v("For the purpose of explaining the query lifecycle, let's say "),o("code",[e._v("Query")]),e._v(" is requesting a list of delegations made by a certain delegator address in the application called "),o("code",[e._v("app")]),e._v(". As to be expected, the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/staking/spec",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("staking")]),o("OutboundLink")],1),e._v(" module handles this query. But first, there are a few ways "),o("code",[e._v("Query")]),e._v(" can be created by users.")]),e._v(" "),o("h3",{attrs:{id:"cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),o("p",[e._v("The main interface for an application is the command-line interface. Users connect to a full-node and run the CLI directly from their machines - the CLI interacts directly with the full-node. To create "),o("code",[e._v("Query")]),e._v(" from their terminal, users type the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXBwY2xpIHF1ZXJ5IHN0YWtpbmcgZGVsZWdhdGlvbnMgJmx0O2RlbGVnYXRvckFkZHJlc3MmZ3Q7Cg=="}}),e._v(" "),o("p",[e._v("This query command was defined by the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/staking/spec",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("staking")]),o("OutboundLink")],1),e._v(" module developer and added to the list of subcommands by the application developer when creating the CLI. The code for this particular command is the following:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0Q21kUXVlcnlEZWxlZ2F0aW9ucyBpbXBsZW1lbnRzIHRoZSBjb21tYW5kIHRvIHF1ZXJ5IGFsbCB0aGUgZGVsZWdhdGlvbnMKLy8gbWFkZSBmcm9tIG9uZSBkZWxlZ2F0b3IuCmZ1bmMgR2V0Q21kUXVlcnlEZWxlZ2F0aW9ucyhxdWVyeVJvdXRlIHN0cmluZywgY2RjICpjb2RlYy5Db2RlYykgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7ZGVsZWdhdGlvbnMgW2RlbGVnYXRvci1hZGRyXSZxdW90OywKCQlTaG9ydDogJnF1b3Q7UXVlcnkgYWxsIGRlbGVnYXRpb25zIG1hZGUgYnkgb25lIGRlbGVnYXRvciZxdW90OywKCQlMb25nOiBzdHJpbmdzLlRyaW1TcGFjZSgKCQkJZm10LlNwcmludGYoYFF1ZXJ5IGRlbGVnYXRpb25zIGZvciBhbiBpbmRpdmlkdWFsIGRlbGVnYXRvciBvbiBhbGwgdmFsaWRhdG9ycy4KCkV4YW1wbGU6CiQgJXMgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9ucyBjb3Ntb3MxZ2doanV0M2NjZDhheTB6ZHV6ajY0aHdyZTJmeHM5bGQ3NXJ1OXAKYCwKCQkJCXZlcnNpb24uQ2xpZW50TmFtZSwKCQkJKSwKCQkpLAoJCUFyZ3M6IGNvYnJhLkV4YWN0QXJncygxKSwKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoJCQljbGlDdHggOj0gY29udGV4dC5OZXdDTElDb250ZXh0KCkuV2l0aENvZGVjKGNkYykKCgkJCWRlbEFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXJnc1swXSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCWJ6LCBlcnIgOj0gY2RjLk1hcnNoYWxKU09OKHR5cGVzLk5ld1F1ZXJ5RGVsZWdhdG9yUGFyYW1zKGRlbEFkZHIpKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcm91dGUgOj0gZm10LlNwcmludGYoJnF1b3Q7Y3VzdG9tLyVzLyVzJnF1b3Q7LCBxdWVyeVJvdXRlLCB0eXBlcy5RdWVyeURlbGVnYXRvckRlbGVnYXRpb25zKQoJCQlyZXMsIF8sIGVyciA6PSBjbGlDdHguUXVlcnlXaXRoRGF0YShyb3V0ZSwgYnopCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQl2YXIgcmVzcCB0eXBlcy5EZWxlZ2F0aW9uUmVzcG9uc2VzCgkJCWlmIGVyciA6PSBjZGMuVW5tYXJzaGFsSlNPTihyZXMsICZhbXA7cmVzcCk7IGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlyZXR1cm4gY2xpQ3R4LlByaW50T3V0cHV0KHJlc3ApCgkJfSwKCX0KfQ=="}})],1),e._v(" "),o("p",[e._v("Note that the general format is as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXBwY2xpIHF1ZXJ5IFttb2R1bGVOYW1lXSBbY29tbWFuZF0gJmx0O2FyZ3VtZW50cyZndDsgLS1mbGFnICZsdDtmbGFnQXJnJmd0Owo="}}),e._v(" "),o("p",[e._v("To provide values such as "),o("code",[e._v("--node")]),e._v(" (the full-node the CLI connects to), the user can use the "),o("code",[e._v("config")]),e._v(" command to set themn or provide them as flags.")]),e._v(" "),o("p",[e._v("The CLI understands a specific set of commands, defined in a hierarchical structure by the application developer: from the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html#root-command"}},[e._v("root command")]),e._v(" ("),o("code",[e._v("appcli")]),e._v("), the type of command ("),o("code",[e._v("query")]),e._v("), the module that contains the command  ("),o("code",[e._v("staking")]),e._v("), and command itself ("),o("code",[e._v("delegations")]),e._v("). Thus, the CLI knows exactly which module handles this command and directly passes the call there.")],1),e._v(" "),o("h3",{attrs:{id:"rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),o("p",[e._v("Another interface through which users can make queries is through HTTP Requests to a "),o("RouterLink",{attrs:{to:"/interfaces/rest.html#rest-server"}},[e._v("REST server")]),e._v(". The REST server contains, among other things, a "),o("a",{attrs:{href:"#clicontext"}},[o("code",[e._v("CLIContext")])]),e._v(" and "),o("RouterLink",{attrs:{to:"/interfaces/rest.html#gorilla-mux"}},[e._v("mux")]),e._v(" router. The request looks like this:")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"R0VUIGh0dHA6Ly9sb2NhbGhvc3Q6e1BPUlR9L3N0YWtpbmcvZGVsZWdhdG9ycy97ZGVsZWdhdG9yQWRkcn0vZGVsZWdhdGlvbnMK"}}),e._v(" "),o("p",[e._v("To provide values such as "),o("code",[e._v("--node")]),e._v(" (the full-node the CLI connects to) that are required by "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#basereq"}},[o("code",[e._v("baseReq")])]),e._v(", the user must configure their local REST server with the values or provide them in the request body.")],1),e._v(" "),o("p",[e._v("The router automatically routes the "),o("code",[e._v("Query")]),e._v(" HTTP request to the staking module "),o("code",[e._v("delegatorDelegationsHandlerFn()")]),e._v(" function.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSFRUUCByZXF1ZXN0IGhhbmRsZXIgdG8gcXVlcnkgYSBkZWxlZ2F0b3IgZGVsZWdhdGlvbnMKZnVuYyBkZWxlZ2F0b3JEZWxlZ2F0aW9uc0hhbmRsZXJGbihjbGlDdHggY29udGV4dC5DTElDb250ZXh0KSBodHRwLkhhbmRsZXJGdW5jIHsKCXJldHVybiBxdWVyeURlbGVnYXRvcihjbGlDdHgsIGZtdC5TcHJpbnRmKCZxdW90O2N1c3RvbS8lcy8lcyZxdW90OywgdHlwZXMuUXVlcmllclJvdXRlLCB0eXBlcy5RdWVyeURlbGVnYXRvckRlbGVnYXRpb25zKSkKfQ=="}})],1),e._v(" "),o("p",[e._v("Since this function is defined within the module and thus has no inherent knowledge of the application "),o("code",[e._v("Query")]),e._v(" belongs to, it takes in the application "),o("code",[e._v("codec")]),e._v(" and "),o("code",[e._v("CLIContext")]),e._v(" as parameters.")]),e._v(" "),o("p",[e._v("To summarize, when users interact with the interfaces, they create a CLI command or HTTP request. "),o("code",[e._v("Query")]),e._v(" now exists in one of these two forms, but needs to be transformed into an object understood by a full-node.")]),e._v(" "),o("h2",{attrs:{id:"query-preparation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-preparation"}},[e._v("#")]),e._v(" Query Preparation")]),e._v(" "),o("p",[e._v("The interactions from the users' perspective are a bit different, but the underlying functions are almost identical because they are implementations of the same command defined by the module developer. This step of processing happens within the CLI or REST server and heavily involves a "),o("code",[e._v("CLIContext")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"clicontext"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clicontext"}},[e._v("#")]),e._v(" CLIContext")]),e._v(" "),o("p",[e._v("The first thing that is created in the execution of a CLI command is a "),o("code",[e._v("CLIContext")]),e._v(", while the REST Server directly provides a "),o("code",[e._v("CLIContext")]),e._v(" for the REST Request handler. A "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("Context")]),e._v(" is an immutable object that stores all the data needed to process a request on the user side. In particular, a "),o("code",[e._v("CLIContext")]),e._v(" stores the following:")],1),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Codec")]),e._v(": The "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("encoder/decoder")]),e._v(" used by the application, used to marshal the parameters and query before making the Tendermint RPC request and unmarshal the returned response into a JSON object.")],1),e._v(" "),o("li",[o("strong",[e._v("Account Decoder")]),e._v(": The account decoder from the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("auth")]),o("OutboundLink")],1),e._v(" module, which translates "),o("code",[e._v("[]byte")]),e._v("s into accounts.")]),e._v(" "),o("li",[o("strong",[e._v("RPC Client")]),e._v(": The Tendermint RPC Client, or node, to which the request will be relayed to.")]),e._v(" "),o("li",[o("strong",[e._v("Keybase")]),e._v(": A "),o("RouterLink",{attrs:{to:"/basics/accounts.html#keybase"}},[e._v("Key Manager")]),e._v(" used to sign transactions and handle other operations with keys.")],1),e._v(" "),o("li",[o("strong",[e._v("Output Writer")]),e._v(": A "),o("a",{attrs:{href:"https://golang.org/pkg/io/#Writer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Writer"),o("OutboundLink")],1),e._v(" used to output the response.")]),e._v(" "),o("li",[o("strong",[e._v("Configurations")]),e._v(": The flags configured by the user for this command, including "),o("code",[e._v("--height")]),e._v(", specifying the height of the blockchain to query and "),o("code",[e._v("--indent")]),e._v(", which indicates to add an indent to the JSON response.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("CLIContext")]),e._v(" also contains various functions such as "),o("code",[e._v("Query()")]),e._v(" which retrieves the RPC Client and makes an ABCI call to relay a query to a full-node.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ0xJQ29udGV4dCBpbXBsZW1lbnRzIGEgdHlwaWNhbCBDTEkgY29udGV4dCBjcmVhdGVkIGluIFNESyBtb2R1bGVzIGZvcgovLyB0cmFuc2FjdGlvbiBoYW5kbGluZyBhbmQgcXVlcmllcy4KdHlwZSBDTElDb250ZXh0IHN0cnVjdCB7CglGcm9tQWRkcmVzcyAgIHNkay5BY2NBZGRyZXNzCglDbGllbnQgICAgICAgIHJwY2NsaWVudC5DbGllbnQKCUNoYWluSUQgICAgICAgc3RyaW5nCglLZXliYXNlICAgICAgIGNyeXB0b2tleXMuS2V5YmFzZQoJSW5wdXQgICAgICAgICBpby5SZWFkZXIKCU91dHB1dCAgICAgICAgaW8uV3JpdGVyCglPdXRwdXRGb3JtYXQgIHN0cmluZwoJSGVpZ2h0ICAgICAgICBpbnQ2NAoJSG9tZURpciAgICAgICBzdHJpbmcKCU5vZGVVUkkgICAgICAgc3RyaW5nCglGcm9tICAgICAgICAgIHN0cmluZwoJQnJvYWRjYXN0TW9kZSBzdHJpbmcKCVZlcmlmaWVyICAgICAgdG1saXRlLlZlcmlmaWVyCglGcm9tTmFtZSAgICAgIHN0cmluZwoJQ29kZWMgICAgICAgICAqY29kZWMuQ29kZWMKCVRydXN0Tm9kZSAgICAgYm9vbAoJVXNlTGVkZ2VyICAgICBib29sCglTaW11bGF0ZSAgICAgIGJvb2wKCUdlbmVyYXRlT25seSAgYm9vbAoJSW5kZW50ICAgICAgICBib29sCglTa2lwQ29uZmlybSAgIGJvb2wKfQ=="}})],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("CLIContext")]),e._v("'s primary role is to store data used during interactions with the end-user and provide methods to interact with this data - it is used before and after the query is processed by the full-node. Specifically, in handling "),o("code",[e._v("Query")]),e._v(", the "),o("code",[e._v("CLIContext")]),e._v(" is utilized to encode the query parameters, retrieve the full-node, and write the output. Prior to being relayed to a full-node, the query needs to be encoded into a "),o("code",[e._v("[]byte")]),e._v(" form, as full-nodes are application-agnostic and do not understand specific types. The full-node (RPC Client) itself is retrieved using the "),o("code",[e._v("CLIContext")]),e._v(", which knows which node the user CLI is connected to. The query is relayed to this full-node to be processed. Finally, the "),o("code",[e._v("CLIContext")]),e._v(" contains a "),o("code",[e._v("Writer")]),e._v(" to write output when the response is returned. These steps are further described in later sections.")]),e._v(" "),o("h3",{attrs:{id:"arguments-and-route-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-and-route-creation"}},[e._v("#")]),e._v(" Arguments and Route Creation")]),e._v(" "),o("p",[e._v("At this point in the lifecycle, the user has created a CLI command or HTTP Request with all of the data they wish to include in their "),o("code",[e._v("Query")]),e._v(". A "),o("code",[e._v("CLIContext")]),e._v(" exists to assist in the rest of the "),o("code",[e._v("Query")]),e._v("'s journey. Now, the next step is to parse the command or request, extract the arguments, create a "),o("code",[e._v("queryRoute")]),e._v(", and encode everything. These steps all happen on the user side within the interface they are interacting with.")]),e._v(" "),o("h4",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("p",[e._v("In this case, "),o("code",[e._v("Query")]),e._v(" contains an "),o("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[e._v("address")]),e._v(" "),o("code",[e._v("delegatorAddress")]),e._v(" as its only argument. However, the request can only contain "),o("code",[e._v("[]byte")]),e._v("s, as it will be relayed to a consensus engine (e.g. Tendermint Core) of a full-node that has no inherent knowledge of the application types. Thus, the "),o("code",[e._v("codec")]),e._v(" of "),o("code",[e._v("CLIContext")]),e._v(" is used to marshal the address.")],1),e._v(" "),o("p",[e._v("Here is what the code looks like for the CLI command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGVsQWRkciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihhcmdzWzBdKQpieiwgZXJyIDo9IGNkYy5NYXJzaGFsSlNPTih0eXBlcy5OZXdRdWVyeURlbGVnYXRvclBhcmFtcyhkZWxBZGRyKSkK"}}),e._v(" "),o("p",[e._v("Here is what the code looks like for the HTTP Request:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFycyA6PSBtdXguVmFycyhyKQpiZWNoMzJkZWxlZ2F0b3IgOj0gdmFyc1smcXVvdDtkZWxlZ2F0b3JBZGRyJnF1b3Q7XQpkZWxlZ2F0b3JBZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGJlY2gzMmRlbGVnYXRvcikKY2xpQ3R4LCBvayA6PSByZXN0LlBhcnNlUXVlcnlIZWlnaHRPclJldHVybkJhZFJlcXVlc3QodywgY2xpQ3R4LCByKQppZiAhb2sgewoJcmV0dXJuCn0KcGFyYW1zIDo9IHR5cGVzLk5ld1F1ZXJ5RGVsZWdhdG9yUGFyYW1zKGRlbGVnYXRvckFkZHIpCg=="}}),e._v(" "),o("h4",{attrs:{id:"query-route-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query-route-creation"}},[e._v("#")]),e._v(" Query Route Creation")]),e._v(" "),o("p",[e._v('Important to note is that there will never be a "query" object created for '),o("code",[e._v("Query")]),e._v("; the SDK actually takes a simpler approach. Instead of an object, all the full-node needs to process a query is its "),o("code",[e._v("route")]),e._v(" which specifies exactly which module to route the query to and the name of this query type. The "),o("code",[e._v("route")]),e._v(" will be passed to the application "),o("code",[e._v("baseapp")]),e._v(", then module, then "),o("RouterLink",{attrs:{to:"/building-modules/querier.html"}},[e._v("querier")]),e._v(", and each will understand the "),o("code",[e._v("route")]),e._v(" and pass it to the appropriate next step. "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[o("code",[e._v("baseapp")])]),e._v(" will understand this query to be a "),o("code",[e._v("custom")]),e._v(" query in the module "),o("code",[e._v("staking")]),e._v(", and the "),o("code",[e._v("staking")]),e._v(" module querier supports the type "),o("code",[e._v("QueryDelegatorDelegations")]),e._v(". Thus, the route will be "),o("code",[e._v('"custom/staking/delegatorDelegations"')]),e._v(".")],1),e._v(" "),o("p",[e._v("Here is what the code looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cm91dGUgOj0gZm10LlNwcmludGYoJnF1b3Q7Y3VzdG9tLyVzLyVzJnF1b3Q7LCBxdWVyeVJvdXRlLCB0eXBlcy5RdWVyeURlbGVnYXRvckRlbGVnYXRpb25zKQo="}}),e._v(" "),o("p",[e._v("Now, "),o("code",[e._v("Query")]),e._v(" exists as a set of encoded arguments and a route to a specific module and its query type. It is ready to be relayed to a full-node.")]),e._v(" "),o("h4",{attrs:{id:"abci-query-call"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abci-query-call"}},[e._v("#")]),e._v(" ABCI Query Call")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("CLIContext")]),e._v(" has a "),o("code",[e._v("Query()")]),e._v(" function used to retrieve the pre-configured node and relay a query to it; the function takes the query "),o("code",[e._v("route")]),e._v(" and arguments as parameters. It first retrieves the RPC Client (called the "),o("RouterLink",{attrs:{to:"/core/node.html"}},[o("strong",[e._v("node")])]),e._v(") configured by the user to relay this query to, and creates the "),o("code",[e._v("ABCIQueryOptions")]),e._v(" (parameters formatted for the ABCI call). The node is then used to make the ABCI call, "),o("code",[e._v("ABCIQueryWithOptions()")]),e._v(".")],1),e._v(" "),o("p",[e._v("Here is what the code looks like:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcXVlcnkgcGVyZm9ybXMgYSBxdWVyeSB0byBhIFRlbmRlcm1pbnQgbm9kZSB3aXRoIHRoZSBwcm92aWRlZCBzdG9yZSBuYW1lCi8vIGFuZCBwYXRoLiBJdCByZXR1cm5zIHRoZSByZXN1bHQgYW5kIGhlaWdodCBvZiB0aGUgcXVlcnkgdXBvbiBzdWNjZXNzCi8vIG9yIGFuIGVycm9yIGlmIHRoZSBxdWVyeSBmYWlscy4gSW4gYWRkaXRpb24sIGl0IHdpbGwgdmVyaWZ5IHRoZSByZXR1cm5lZAovLyBwcm9vZiBpZiBUcnVzdE5vZGUgaXMgZGlzYWJsZWQuIElmIHByb29mIHZlcmlmaWNhdGlvbiBmYWlscyBvciB0aGUgcXVlcnkKLy8gaGVpZ2h0IGlzIGludmFsaWQsIGFuIGVycm9yIHdpbGwgYmUgcmV0dXJuZWQuCmZ1bmMgKGN0eCBDTElDb250ZXh0KSBxdWVyeShwYXRoIHN0cmluZywga2V5IGNtbi5IZXhCeXRlcykgKHJlcyBbXWJ5dGUsIGhlaWdodCBpbnQ2NCwgZXJyIGVycm9yKSB7Cglub2RlLCBlcnIgOj0gY3R4LkdldE5vZGUoKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHJlcywgaGVpZ2h0LCBlcnIKCX0KCglvcHRzIDo9IHJwY2NsaWVudC5BQkNJUXVlcnlPcHRpb25zewoJCUhlaWdodDogY3R4LkhlaWdodCwKCQlQcm92ZTogICFjdHguVHJ1c3ROb2RlLAoJfQoKCXJlc3VsdCwgZXJyIDo9IG5vZGUuQUJDSVF1ZXJ5V2l0aE9wdGlvbnMocGF0aCwga2V5LCBvcHRzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHJlcywgaGVpZ2h0LCBlcnIKCX0KCglyZXNwIDo9IHJlc3VsdC5SZXNwb25zZQoJaWYgIXJlc3AuSXNPSygpIHsKCQlyZXR1cm4gcmVzLCByZXNwLkhlaWdodCwgZXJyb3JzLk5ldyhyZXNwLkxvZykKCX0KCgkvLyBkYXRhIGZyb20gdHJ1c3RlZCBub2RlIG9yIHN1YnNwYWNlIHF1ZXJ5IGRvZXNuJ3QgbmVlZCB2ZXJpZmljYXRpb24KCWlmIGN0eC5UcnVzdE5vZGUgfHwgIWlzUXVlcnlTdG9yZVdpdGhQcm9vZihwYXRoKSB7CgkJcmV0dXJuIHJlc3AuVmFsdWUsIHJlc3AuSGVpZ2h0LCBuaWwKCX0KCgllcnIgPSBjdHgudmVyaWZ5UHJvb2YocGF0aCwgcmVzcCkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiByZXMsIHJlc3AuSGVpZ2h0LCBlcnIKCX0KCglyZXR1cm4gcmVzcC5WYWx1ZSwgcmVzcC5IZWlnaHQsIG5pbAp9"}})],1),e._v(" "),o("h2",{attrs:{id:"rpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[e._v("#")]),e._v(" RPC")]),e._v(" "),o("p",[e._v("With a call to "),o("code",[e._v("ABCIQueryWithOptions()")]),e._v(", "),o("code",[e._v("Query")]),e._v(" is received by a "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("full-node")]),e._v(" which will then process the request. Note that, while the RPC is made to the consensus engine (e.g. Tendermint Core) of a full-node, queries are not part of consensus and will not be broadcasted to the rest of the network, as they do not require anything the network needs to agree upon.")],1),e._v(" "),o("p",[e._v("Read more about ABCI Clients and Tendermint RPC in the Tendermint documentation "),o("a",{attrs:{href:"https://tendermint.com/rpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"application-query-handling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-query-handling"}},[e._v("#")]),e._v(" Application Query Handling")]),e._v(" "),o("p",[e._v("When a query is received by the full-node after it has been relayed from the underlying consensus engine, it is now being handled within an environment that understands application-specific types and has a copy of the state. "),o("RouterLink",{attrs:{to:"/core/baseapp.html"}},[o("code",[e._v("baseapp")])]),e._v(" implements the ABCI "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query"}},[o("code",[e._v("Query()")])]),e._v(" function and handles four different types of queries: "),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("store")]),e._v(", "),o("code",[e._v("p2p")]),e._v(", and "),o("code",[e._v("custom")]),e._v(". The "),o("code",[e._v("queryRoute")]),e._v(" is parsed such that the first string must be one of the four options, then the rest of the path is parsed within the subroutines handling each type of query. The first three types ("),o("code",[e._v("app")]),e._v(", "),o("code",[e._v("store")]),e._v(", "),o("code",[e._v("p2p")]),e._v(") are purely application-level and thus directly handled by "),o("code",[e._v("baseapp")]),e._v(" or the stores, but the "),o("code",[e._v("custom")]),e._v(" query type requires "),o("code",[e._v("baseapp")]),e._v(" to route the query to a module's "),o("RouterLink",{attrs:{to:"/building-modules/querier.html"}},[e._v("querier")]),e._v(".")],1),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("Query")]),e._v(" is a custom query type from the "),o("code",[e._v("staking")]),e._v(" module, "),o("code",[e._v("baseapp")]),e._v(" first parses the path, then uses the "),o("code",[e._v("QueryRouter")]),e._v(" to retrieve the corresponding querier, and routes the query to the module. The querier is responsible for recognizing this query, retrieving the appropriate values from the application's stores, and returning a response. Read more about queriers "),o("RouterLink",{attrs:{to:"/building-modules/querier.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("Once a result is received from the querier, "),o("code",[e._v("baseapp")]),e._v(" begins the process of returning a response to the user.")]),e._v(" "),o("h2",{attrs:{id:"response"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("Query()")]),e._v(" is an ABCI function, "),o("code",[e._v("baseapp")]),e._v(" returns the response as an "),o("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("abci.ResponseQuery")]),o("OutboundLink")],1),e._v(" type. The "),o("code",[e._v("CLIContext")]),e._v(" "),o("code",[e._v("Query()")]),e._v(" routine receives the response and, if "),o("code",[e._v("--trust-node")]),e._v(" is toggled to "),o("code",[e._v("false")]),e._v(" and a proof needs to be verified, the response is verified with the "),o("code",[e._v("CLIContext")]),e._v(" "),o("code",[e._v("verifyProof()")]),e._v(" function before the response is returned.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gdmVyaWZ5UHJvb2YgcGVyZm9ybSByZXNwb25zZSBwcm9vZiB2ZXJpZmljYXRpb24uCmZ1bmMgKGN0eCBDTElDb250ZXh0KSB2ZXJpZnlQcm9vZihxdWVyeVBhdGggc3RyaW5nLCByZXNwIGFiY2kuUmVzcG9uc2VRdWVyeSkgZXJyb3IgewoJaWYgY3R4LlZlcmlmaWVyID09IG5pbCB7CgkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7bWlzc2luZyB2YWxpZCBjZXJ0aWZpZXIgdG8gdmVyaWZ5IGRhdGEgZnJvbSBkaXN0cnVzdGVkIG5vZGUmcXVvdDspCgl9CgoJLy8gdGhlIEFwcEhhc2ggZm9yIGhlaWdodCBIIGlzIGluIGhlYWRlciBIKzEKCWNvbW1pdCwgZXJyIDo9IGN0eC5WZXJpZnkocmVzcC5IZWlnaHQgKyAxKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCS8vIFRPRE86IEluc3RlYWQgb2YgcmVjb25zdHJ1Y3RpbmcsIHN0YXNoIG9uIENMSUNvbnRleHQgZmllbGQ/CglwcnQgOj0gcm9vdG11bHRpLkRlZmF1bHRQcm9vZlJ1bnRpbWUoKQoKCS8vIFRPRE86IEJldHRlciBjb252ZW50aW9uIGZvciBwYXRoPwoJc3RvcmVOYW1lLCBlcnIgOj0gcGFyc2VRdWVyeVN0b3JlUGF0aChxdWVyeVBhdGgpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJa3AgOj0gbWVya2xlLktleVBhdGh7fQoJa3AgPSBrcC5BcHBlbmRLZXkoW11ieXRlKHN0b3JlTmFtZSksIG1lcmtsZS5LZXlFbmNvZGluZ1VSTCkKCWtwID0ga3AuQXBwZW5kS2V5KHJlc3AuS2V5LCBtZXJrbGUuS2V5RW5jb2RpbmdVUkwpCgoJaWYgcmVzcC5WYWx1ZSA9PSBuaWwgewoJCWVyciA9IHBydC5WZXJpZnlBYnNlbmNlKHJlc3AuUHJvb2YsIGNvbW1pdC5IZWFkZXIuQXBwSGFzaCwga3AuU3RyaW5nKCkpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnJvcnMuV3JhcChlcnIsICZxdW90O2ZhaWxlZCB0byBwcm92ZSBtZXJrbGUgcHJvb2YmcXVvdDspCgkJfQoJCXJldHVybiBuaWwKCX0KCWVyciA9IHBydC5WZXJpZnlWYWx1ZShyZXNwLlByb29mLCBjb21taXQuSGVhZGVyLkFwcEhhc2gsIGtwLlN0cmluZygpLCByZXNwLlZhbHVlKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycm9ycy5XcmFwKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHByb3ZlIG1lcmtsZSBwcm9vZiZxdW90OykKCX0KCglyZXR1cm4gbmlsCn0="}})],1),e._v(" "),o("h3",{attrs:{id:"cli-response"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli-response"}},[e._v("#")]),e._v(" CLI Response")]),e._v(" "),o("p",[e._v("The application "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[o("code",[e._v("codec")])]),e._v(" is used to unmarshal the response to a JSON and the "),o("code",[e._v("CLIContext")]),e._v(" prints the output to the command line, applying any configurations such as "),o("code",[e._v("--indent")]),e._v(".")],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBHZXRDbWRRdWVyeURlbGVnYXRpb25zKHF1ZXJ5Um91dGUgc3RyaW5nLCBjZGMgKmNvZGVjLkNvZGVjKSAqY29icmEuQ29tbWFuZCB7CglyZXR1cm4gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAmcXVvdDtkZWxlZ2F0aW9ucyBbZGVsZWdhdG9yLWFkZHJdJnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtRdWVyeSBhbGwgZGVsZWdhdGlvbnMgbWFkZSBieSBvbmUgZGVsZWdhdG9yJnF1b3Q7LAoJCUxvbmc6IHN0cmluZ3MuVHJpbVNwYWNlKAoJCQlmbXQuU3ByaW50ZihgUXVlcnkgZGVsZWdhdGlvbnMgZm9yIGFuIGluZGl2aWR1YWwgZGVsZWdhdG9yIG9uIGFsbCB2YWxpZGF0b3JzLgoKRXhhbXBsZToKJCAlcyBxdWVyeSBzdGFraW5nIGRlbGVnYXRpb25zIGNvc21vczFnZ2hqdXQzY2NkOGF5MHpkdXpqNjRod3JlMmZ4czlsZDc1cnU5cApgLAoJCQkJdmVyc2lvbi5DbGllbnROYW1lLAoJCQkpLAoJCSksCgkJQXJnczogY29icmEuRXhhY3RBcmdzKDEpLAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWNsaUN0eCA6PSBjb250ZXh0Lk5ld0NMSUNvbnRleHQoKS5XaXRoQ29kZWMoY2RjKQoKCQkJZGVsQWRkciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihhcmdzWzBdKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJYnosIGVyciA6PSBjZGMuTWFyc2hhbEpTT04odHlwZXMuTmV3UXVlcnlEZWxlZ2F0b3JQYXJhbXMoZGVsQWRkcikpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlyb3V0ZSA6PSBmbXQuU3ByaW50ZigmcXVvdDtjdXN0b20vJXMvJXMmcXVvdDssIHF1ZXJ5Um91dGUsIHR5cGVzLlF1ZXJ5RGVsZWdhdG9yRGVsZWdhdGlvbnMpCgkJCXJlcywgXywgZXJyIDo9IGNsaUN0eC5RdWVyeVdpdGhEYXRhKHJvdXRlLCBieikKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCXZhciByZXNwIHR5cGVzLkRlbGVnYXRpb25SZXNwb25zZXMKCQkJaWYgZXJyIDo9IGNkYy5Vbm1hcnNoYWxKU09OKHJlcywgJmFtcDtyZXNwKTsgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCXJldHVybiBjbGlDdHguUHJpbnRPdXRwdXQocmVzcCkKCQl9LAoJfQp9"}})],1),e._v(" "),o("h3",{attrs:{id:"rest-response"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest-response"}},[e._v("#")]),e._v(" REST Response")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/interfaces/rest.html#rest-server"}},[e._v("REST server")]),e._v(" uses the "),o("code",[e._v("CLIContext")]),e._v(" to format the response properly, then uses the HTTP package to write the appropriate response or error.")],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBxdWVyeVZhbGlkYXRvcihjbGlDdHggY29udGV4dC5DTElDb250ZXh0LCBlbmRwb2ludCBzdHJpbmcpIGh0dHAuSGFuZGxlckZ1bmMgewoJcmV0dXJuIGZ1bmModyBodHRwLlJlc3BvbnNlV3JpdGVyLCByICpodHRwLlJlcXVlc3QpIHsKCQl2YXJzIDo9IG11eC5WYXJzKHIpCgkJYmVjaDMydmFsaWRhdG9yQWRkciA6PSB2YXJzWyZxdW90O3ZhbGlkYXRvckFkZHImcXVvdDtdCgoJCXZhbGlkYXRvckFkZHIsIGVyciA6PSBzZGsuVmFsQWRkcmVzc0Zyb21CZWNoMzIoYmVjaDMydmFsaWRhdG9yQWRkcikKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNCYWRSZXF1ZXN0LCBlcnIuRXJyb3IoKSkKCQkJcmV0dXJuCgkJfQoKCQljbGlDdHgsIG9rIDo9IHJlc3QuUGFyc2VRdWVyeUhlaWdodE9yUmV0dXJuQmFkUmVxdWVzdCh3LCBjbGlDdHgsIHIpCgkJaWYgIW9rIHsKCQkJcmV0dXJuCgkJfQoKCQlwYXJhbXMgOj0gdHlwZXMuTmV3UXVlcnlWYWxpZGF0b3JQYXJhbXModmFsaWRhdG9yQWRkcikKCgkJYnosIGVyciA6PSBjbGlDdHguQ29kZWMuTWFyc2hhbEpTT04ocGFyYW1zKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXN0LldyaXRlRXJyb3JSZXNwb25zZSh3LCBodHRwLlN0YXR1c0JhZFJlcXVlc3QsIGVyci5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgoJCXJlcywgaGVpZ2h0LCBlcnIgOj0gY2xpQ3R4LlF1ZXJ5V2l0aERhdGEoZW5kcG9pbnQsIGJ6KQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXN0LldyaXRlRXJyb3JSZXNwb25zZSh3LCBodHRwLlN0YXR1c0ludGVybmFsU2VydmVyRXJyb3IsIGVyci5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgoJCWNsaUN0eCA9IGNsaUN0eC5XaXRoSGVpZ2h0KGhlaWdodCkKCQlyZXN0LlBvc3RQcm9jZXNzUmVzcG9uc2UodywgY2xpQ3R4LCByZXMpCgl9Cn0="}})],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Read about how to build a "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("Command-Line Interface")]),e._v(", or a "),o("RouterLink",{attrs:{to:"/interfaces/rest.html"}},[e._v("REST Interface")])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);