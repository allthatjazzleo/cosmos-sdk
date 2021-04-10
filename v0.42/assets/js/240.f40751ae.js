(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{754:function(e,t,o){"use strict";o.r(t);var s=o(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bech32-on-cosmos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bech32-on-cosmos"}},[e._v("#")]),e._v(" Bech32 on Cosmos")]),e._v(" "),o("p",[e._v("The Cosmos network prefers to use the Bech32 address format wherever users must handle binary data. Bech32 encoding provides robust integrity checks on data and the human readable part(HRP) provides contextual hints that can assist UI developers with providing informative error messages.")]),e._v(" "),o("p",[e._v("In the Cosmos network, keys and addresses may refer to a number of different roles in the network like accounts, validators etc.")]),e._v(" "),o("h2",{attrs:{id:"hrp-table"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hrp-table"}},[e._v("#")]),e._v(" HRP table")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("HRP")]),e._v(" "),o("th",[e._v("Definition")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("cosmos")]),e._v(" "),o("td",[e._v("Cosmos Account Address")])]),e._v(" "),o("tr",[o("td",[e._v("cosmospub")]),e._v(" "),o("td",[e._v("Cosmos Account Public Key")])]),e._v(" "),o("tr",[o("td",[e._v("cosmosvalcons")]),e._v(" "),o("td",[e._v("Cosmos Validator Consensus Address")])]),e._v(" "),o("tr",[o("td",[e._v("cosmosvalconspub")]),e._v(" "),o("td",[e._v("Cosmos Validator Consensus Public Key")])]),e._v(" "),o("tr",[o("td",[e._v("cosmosvaloper")]),e._v(" "),o("td",[e._v("Cosmos Validator Operator Address")])]),e._v(" "),o("tr",[o("td",[e._v("cosmosvaloperpub")]),e._v(" "),o("td",[e._v("Cosmos Validator Operator Public Key")])])])]),e._v(" "),o("h2",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("p",[e._v("While all user facing interfaces to Cosmos software should exposed Bech32 interfaces, many internal interfaces encode binary value in hex or base64 encoded form.")]),e._v(" "),o("p",[e._v("To covert between other binary representation of addresses and keys, it is important to first apply the Amino encoding process before bech32 encoding.")]),e._v(" "),o("p",[e._v("A complete implementation of the Amino serialization format is unnecessary in most cases. Simply prepending bytes from this "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/encoding.md#public-key-cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("table"),o("OutboundLink")],1),e._v(" to the byte string payload before bech32 encoding will sufficient for compatible representation.")])])}),[],!1,null,null,null);t.default=r.exports}}]);