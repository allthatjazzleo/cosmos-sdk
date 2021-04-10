(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{702:function(e,t,a){"use strict";a.r(t);var i=a(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"application-specific-blockchains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-specific-blockchains"}},[e._v("#")]),e._v(" Application-Specific Blockchains")]),e._v(" "),a("h2",{attrs:{id:"what-are-application-specific-blockchains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-application-specific-blockchains"}},[e._v("#")]),e._v(" What are application-specific blockchains?")]),e._v(" "),a("p",[e._v("Application-specific blockchains are blockchains customized to operate a single application. Instead of building a decentralised application on top of an underlying blockchain like Ethereum, developers build their own blockchain from the ground up. This means building a full-node client, a light-client, and all the necessary interfaces (CLI, REST, ...) to interract with the nodes.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAgQnVpbHQgd2l0aCBDb3Ntb3MgU0RLCiAgICAgICAgICAgICAgICB8ICB8ICBTdGF0ZS1tYWNoaW5lID0gQXBwbGljYXRpb24gIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KQmxvY2tjaGFpbiBub2RlIHwgIHwgICAgICAgICAgIENvbnNlbnN1cyAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgIHwgICBUZW5kZXJtaW50IENvcmUKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgTmV0d29ya2luZyAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),e._v(" "),a("h2",{attrs:{id:"what-are-the-shortcomings-of-smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-shortcomings-of-smart-contracts"}},[e._v("#")]),e._v(" What are the shortcomings of Smart Contracts?")]),e._v(" "),a("p",[e._v("Virtual-machine blockchains like Ethereum addressed the demand for more programmability back in 2014. At the time, the options available for building decentralised applications were quite limited. Most developers would build on top of the complex and limited Bitcoin scripting language, or fork the Bitcoin codebase which was hard to work with and customize.")]),e._v(" "),a("p",[e._v("Virtual-machine blockchains came in with a new value proposition. Their state-machine incorporates a virtual-machine that is able to interpret turing-complete programs called Smart Contracts. These Smart Contracts are very good for use cases like one-time events (e.g. ICOs), but they can fall short for building complex decentralised platforms. Here is why:")]),e._v(" "),a("ul",[a("li",[e._v("Smart Contracts are generally developed with specific programming languages that can be interpreted by the underlying virtual-machine. These programming languages are often immature and inherently limited by the constraints of the virtual-machine itself. For example, the Ethereum Virtual Machine does not allow developers to implement automatic execution of code. Developers are also limited to the account-based system of the EVM, and they can only choose from a limited set of functions for their cryptographic operations. These are examples, but they hint at the lack of "),a("strong",[e._v("flexibility")]),e._v(" that a smart contract environment often entails.")]),e._v(" "),a("li",[e._v("Smart Contracts are all run by the same virtual machine. This means that they compete for resources, which can severly restrain "),a("strong",[e._v("performance")]),e._v(". And even if the state-machine were to be split in multiple subsets (e.g. via sharding), Smart Contracts would still need to be interpeted by a virtual machine, which would limit performance compared to a native application implemented at state-machine level (our benchmarks show an improvement on the order of x10 in performance when the virtual-machine is removed).")]),e._v(" "),a("li",[e._v("Another issue with the fact that Smart Contracts share the same underlying environment is the resulting limitation in "),a("strong",[e._v("sovereignty")]),e._v(". A decentralised application is an ecosystem that involves multiple players. If the application is built on a general-purpose virtual-machine blockchain, stakeholders have very limited sovereignty over their application, and are ultimately superseded by the governance of the underlying blockchain. If there is a bug in the application, very little can be done about it.")])]),e._v(" "),a("p",[e._v("Application-Specific Blockchains are designed to address these shortcomings.")]),e._v(" "),a("h2",{attrs:{id:"application-specific-blockchains-benefits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-specific-blockchains-benefits"}},[e._v("#")]),e._v(" Application-Specific Blockchains Benefits")]),e._v(" "),a("h3",{attrs:{id:"flexibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flexibility"}},[e._v("#")]),e._v(" Flexibility")]),e._v(" "),a("p",[e._v("Application-specific blockchains give maximum flexibility to developers:")]),e._v(" "),a("ul",[a("li",[e._v("In Cosmos blockchains, the state-machine is typically connected to the underlying consensus engine via an interface called the "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI"),a("OutboundLink")],1),e._v(". This interface can be wrapped in any programming language, meaning developers can build their state-machine in the programming language of their choice.")]),e._v(" "),a("li",[e._v("Developers can choose among multiple frameworks to build their state-machine. The most widely used today is the Cosmos SDK, but others exist (e.g. "),a("a",{attrs:{href:"https://github.com/nomic-io/lotion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lotion"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/iov-one/weave",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weave"),a("OutboundLink")],1),e._v(", ...). The choice will most of the time be done based on the programming language they want to use (Cosmos SDK and Weave are in Golang, Lotion is in Javascript, ...).")]),e._v(" "),a("li",[e._v("The ABCI also allows developers to swap the consensus engine of their application-specific blockchain. Today, only Tendermint is production-ready, but in the future other consensus engines are expected to emerge.")]),e._v(" "),a("li",[e._v("Even when they settle for a framework and consensus engine, developers still have the freedom to tweak them if they don't perfectly match their requirements in their pristine forms.")]),e._v(" "),a("li",[e._v("Developers are free to explore the full spectrum of tradeoffs (e.g. number of validators vs transaction throughput, safety vs availability in asynchrony, ...) and design choices (DB or IAVL tree for storage, UTXO or account model, ...).")]),e._v(" "),a("li",[e._v("Developers can implement automatic execution of code. In the Cosmos SDK, logic can be automatically triggered at the beginning and the end of each block. They are also free to choose the cryptographic library used in their application, as opposed to being constrained by what is made available by the underlying environment in the case of virtual-machine blockchains.")])]),e._v(" "),a("p",[e._v("The list above contains a few examples that show how much flexibility application-specific blockchains give to developers. The goal of Cosmos and the Cosmos SDK is to make developer tooling as generic and composable as possible, so that each part of the stack can be forked, tweaked and improved without losing compatibility. As the community grows, more alternative for each of the core building blocks will emerge, giving more options to developers.")]),e._v(" "),a("h3",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),a("p",[e._v("Decentralised applications built with Smart Contracts are inherently capped in performance by the underlying environment. For a decentralised application to optimise performance, it needs to be built as an application-specific blockchains. Next are some of the benefits an application-specific blockchains brings in terms of performance:")]),e._v(" "),a("ul",[a("li",[e._v("Developers of application-specific blockchains can choose to operate with novel consensus engine such as Tendermint BFT. Compared to Proof-of-Work (used by most virtual-machine blockchains today), it offers significant gains in throuhgput.")]),e._v(" "),a("li",[e._v("An application-specific blockchain only operates a single application, so that the application does not compete with others for computation and storage. This is the opposite of most non-sharded virtual-machine blockchains today, where smart contracts all compete for computation and storage.")]),e._v(" "),a("li",[e._v("Even if a virtual-machine blockchain offered application-based sharding coupled with an efficient consensus algorithm, performance would still be limited by the virtual-machine itself. The real throughput bottleneck is the state-machine, and requiring transactions to be interpreted by a virtual-machine significantly increases the computational complexity of processing them.")])]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("p",[e._v("Security is hard to quantify, and greatly varies from platform to platform. That said here are some important benefits an application-specific blockchain can bring in terms of security:")]),e._v(" "),a("ul",[a("li",[e._v("Developers can choose proven programming languages like Golang when building their application-specific blockchains, as opposed to smart contract programming languages that are often more immature.")]),e._v(" "),a("li",[e._v("Developers are not constrained by the cryptographic functions made available by the underlying virtual-machines. They can use their own custom cryptography, and rely on well-audited crypto libraries.")]),e._v(" "),a("li",[e._v("Developers do not have to worry about potential bugs or exploitable mechanisms in the underlying virtual-machine, making it easier to reason about the security of the application.")])]),e._v(" "),a("h3",{attrs:{id:"sovereignty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sovereignty"}},[e._v("#")]),e._v(" Sovereignty")]),e._v(" "),a("p",[e._v("One of the major benefits of application-specific blockchains is sovereignty. A decentralised application is an ecosystem that involves many actors: users, developers, third-party services, and more.  When developers build on virtual-machine blockchain where many decentralised applications coexist, the community of the application is different than the community of the underlying blockchain, and the latter supersedes the former in the governance process. If there is a bug or if a new feature is needed, stakeholders of the application have very little leeway to upgrade the code. If the community of the underlying blockchain refuses to act, nothing can happen.")]),e._v(" "),a("p",[e._v("The fundamental issue here is that the governance of the application and the governance of the network are not aligned. This issue is solved by application-specific blockchains. Because application-specific blockchains specialize to operate a single application, stakeholders the application has full control over the entire chain. This ensures the community will not be stuck if a bug is discovered, and that it has the entire freedom to choose how it is going to evolve.")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn more about the "),a("RouterLink",{attrs:{to:"/intro/sdk-app-architecture.html"}},[e._v("high-level architecture")]),e._v(" of an SDK application")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);