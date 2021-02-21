(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{859:function(t,l,a){"use strict";a.r(l);var e=a(1),c=Object(e.a)({},(function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("h2",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[t._v("Any concrete type of authorization defined in the "),a("code",[t._v("x/authz")]),t._v(" module must fulfill the "),a("code",[t._v("Authorization")]),t._v(" interface outlined below. Authorizations determine exactly what privileges are granted. They are extensible and can be defined for any Msg service method even outside of the module where the Msg method is defined. Authorizations use the new "),a("code",[t._v("ServiceMsg")]),t._v(" type from "),a("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[t._v("ADR 031")]),t._v(".")],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBdXRob3JpemF0aW9uIGludGVyZmFjZSB7Cglwcm90by5NZXNzYWdlCgoJLy8gTWV0aG9kTmFtZSByZXR1cm5zIHRoZSBmdWxseS1xdWFsaWZpZWQgTXNnIHNlcnZpY2UgbWV0aG9kIG5hbWUgYXMgZGVzY3JpYmVkIGluIEFEUiAwMzEuCglNZXRob2ROYW1lKCkgc3RyaW5nCgoJLy8gQWNjZXB0IGRldGVybWluZXMgd2hldGhlciB0aGlzIGdyYW50IHBlcm1pdHMgdGhlIHByb3ZpZGVkIHNkay5TZXJ2aWNlTXNnIHRvIGJlIHBlcmZvcm1lZCwgYW5kIGlmCgkvLyBzbyBwcm92aWRlcyBhbiB1cGdyYWRlZCBhdXRob3JpemF0aW9uIGluc3RhbmNlLgoJQWNjZXB0KG1zZyBzZGsuU2VydmljZU1zZywgYmxvY2sgdG1wcm90by5IZWFkZXIpIChhbGxvdyBib29sLCB1cGRhdGVkIEF1dGhvcml6YXRpb24sIGRlbGV0ZSBib29sKQp9"}})],1),t._v(" "),a("h2",{attrs:{id:"built-in-authorizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-authorizations"}},[t._v("#")]),t._v(" Built-in Authorizations")]),t._v(" "),a("p",[t._v("Cosmos-SDK "),a("code",[t._v("x/authz")]),t._v(" module comes with following authorization types")]),t._v(" "),a("h3",{attrs:{id:"sendauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendauthorization"}},[t._v("#")]),t._v(" SendAuthorization")]),t._v(" "),a("p",[a("code",[t._v("SendAuthorization")]),t._v(" implements "),a("code",[t._v("Authorization")]),t._v(" interface for the "),a("code",[t._v("cosmos.bank.v1beta1.Msg/Send")]),t._v(" ServiceMsg, that takes a "),a("code",[t._v("SpendLimit")]),t._v(" and updates it down to zero.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2VuZEF1dGhvcml6YXRpb24gYWxsb3dzIHRoZSBncmFudGVlIHRvIHNwZW5kIHVwIHRvIHNwZW5kX2xpbWl0IGNvaW5zIGZyb20KLy8gdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIFNlbmRBdXRob3JpemF0aW9uIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7OwoKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gc3BlbmRfbGltaXQgPSAxCiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKfQ=="}})],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWV0aG9kTmFtZSBpbXBsZW1lbnRzIEF1dGhvcml6YXRpb24uTWV0aG9kTmFtZS4KZnVuYyAoYXV0aG9yaXphdGlvbiBTZW5kQXV0aG9yaXphdGlvbikgTWV0aG9kTmFtZSgpIHN0cmluZyB7CglyZXR1cm4gJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnL1NlbmQmcXVvdDsKfQoKLy8gQWNjZXB0IGltcGxlbWVudHMgQXV0aG9yaXphdGlvbi5BY2NlcHQuCmZ1bmMgKGF1dGhvcml6YXRpb24gU2VuZEF1dGhvcml6YXRpb24pIEFjY2VwdChtc2cgc2RrLlNlcnZpY2VNc2csIGJsb2NrIHRtcHJvdG8uSGVhZGVyKSAoYWxsb3cgYm9vbCwgdXBkYXRlZCBBdXRob3JpemF0aW9uLCBkZWxldGUgYm9vbCkgewoJaWYgcmVmbGVjdC5UeXBlT2YobXNnLlJlcXVlc3QpID09IHJlZmxlY3QuVHlwZU9mKCZhbXA7YmFuay5Nc2dTZW5ke30pIHsKCQltc2csIG9rIDo9IG1zZy5SZXF1ZXN0LigqYmFuay5Nc2dTZW5kKQoJCWlmIG9rIHsKCQkJbGltaXRMZWZ0LCBpc05lZ2F0aXZlIDo9IGF1dGhvcml6YXRpb24uU3BlbmRMaW1pdC5TYWZlU3ViKG1zZy5BbW91bnQpCgkJCWlmIGlzTmVnYXRpdmUgewoJCQkJcmV0dXJuIGZhbHNlLCBuaWwsIGZhbHNlCgkJCX0KCQkJaWYgbGltaXRMZWZ0LklzWmVybygpIHsKCQkJCXJldHVybiB0cnVlLCBuaWwsIHRydWUKCQkJfQoKCQkJcmV0dXJuIHRydWUsICZhbXA7U2VuZEF1dGhvcml6YXRpb257U3BlbmRMaW1pdDogbGltaXRMZWZ0fSwgZmFsc2UKCQl9Cgl9CglyZXR1cm4gZmFsc2UsIG5pbCwgZmFsc2UKfQ=="}})],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("spent_limit")]),t._v(" keeps track of how many coins left in the authorization.")])]),t._v(" "),a("h3",{attrs:{id:"genericauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genericauthorization"}},[t._v("#")]),t._v(" GenericAuthorization")]),t._v(" "),a("p",[a("code",[t._v("GenericAuthorization")]),t._v(" implements the "),a("code",[t._v("Authorization")]),t._v(" interface, that gives unrestricted permission to execute the provided ServiceMsg on behalf of granter's account.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gR2VuZXJpY0F1dGhvcml6YXRpb24gZ2l2ZXMgdGhlIGdyYW50ZWUgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKLy8gdGhlIHByb3ZpZGVkIG1ldGhvZCBvbiBiZWhhbGYgb2YgdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIEdlbmVyaWNBdXRob3JpemF0aW9uIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7OwoKICAvLyBtZXRob2QgbmFtZSB0byBncmFudCB1bnJlc3RyaWN0ZWQgcGVybWlzc2lvbnMgdG8gZXhlY3V0ZQogIC8vIE5vdGU6IE1ldGhvZE5hbWUoKSBpcyBhbHJlYWR5IGEgbWV0aG9kIG9uIGBHZW5lcmljQXV0aG9yaXphdGlvbmAgdHlwZSwKICAvLyB3ZSBuZWVkIHNvbWUgY3VzdG9tIG5hbWluZyBoZXJlIHNvIHVzaW5nIGBNZXNzYWdlTmFtZWAKICBzdHJpbmcgbWV0aG9kX25hbWUgPSAxIFsoZ29nb3Byb3RvLmN1c3RvbW5hbWUpID0gJnF1b3Q7TWVzc2FnZU5hbWUmcXVvdDtdOwp9"}})],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWV0aG9kTmFtZSBpbXBsZW1lbnRzIEF1dGhvcml6YXRpb24uTWV0aG9kTmFtZS4KZnVuYyAoY2FwIEdlbmVyaWNBdXRob3JpemF0aW9uKSBNZXRob2ROYW1lKCkgc3RyaW5nIHsKCXJldHVybiBjYXAuTWVzc2FnZU5hbWUKfQoKLy8gQWNjZXB0IGltcGxlbWVudHMgQXV0aG9yaXphdGlvbi5BY2NlcHQuCmZ1bmMgKGNhcCBHZW5lcmljQXV0aG9yaXphdGlvbikgQWNjZXB0KG1zZyBzZGsuU2VydmljZU1zZywgYmxvY2sgdG1wcm90by5IZWFkZXIpIChhbGxvdyBib29sLCB1cGRhdGVkIEF1dGhvcml6YXRpb24sIGRlbGV0ZSBib29sKSB7CglyZXR1cm4gdHJ1ZSwgJmFtcDtjYXAsIGZhbHNlCn0="}})],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("method_name")]),t._v(" holds ServiceMsg type.")])])])}),[],!1,null,null,null);l.default=c.exports}}]);