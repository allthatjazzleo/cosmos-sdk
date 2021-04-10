(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{756:function(e,l,d){"use strict";d.r(l);var c=d(1),o=Object(c.a)({},(function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"beginblocker-and-endblocker"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#beginblocker-and-endblocker"}},[e._v("#")]),e._v(" BeginBlocker and EndBlocker")]),e._v(" "),d("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),d("ul",[d("li",{attrs:{prereq:""}},[d("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1)]),e._v(" "),d("h2",{attrs:{id:"beginblocker-and-endblocker-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#beginblocker-and-endblocker-2"}},[e._v("#")]),e._v(" BeginBlocker and EndBlocker")]),e._v(" "),d("p",[d("code",[e._v("BeginBlocker")]),e._v(" and "),d("code",[e._v("EndBlocker")]),e._v(" are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain.")]),e._v(" "),d("p",[e._v("When needed, "),d("code",[e._v("BeginBlocker")]),e._v(" and "),d("code",[e._v("EndBlocker")]),e._v(" are implemented as part of the "),d("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodule"}},[d("code",[e._v("AppModule")]),e._v(" interface")]),e._v(". The "),d("code",[e._v("BeginBlock")]),e._v(" and "),d("code",[e._v("EndBlock")]),e._v(" methods of the interface implemented in "),d("code",[e._v("module.go")]),e._v(" generally defer to "),d("code",[e._v("BeginBlocker")]),e._v(" and "),d("code",[e._v("EndBlocker")]),e._v(" methods respectively, which are usually implemented in a "),d("strong",[d("code",[e._v("abci.go")])]),e._v(" file.")],1),e._v(" "),d("p",[e._v("The actual implementation of "),d("code",[e._v("BeginBlocker")]),e._v(" and "),d("code",[e._v("EndBlocker")]),e._v(" in "),d("code",[e._v("./abci.go")]),e._v(" are very similar to that of a "),d("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[d("code",[e._v("handler")])]),e._v(":")],1),e._v(" "),d("ul",[d("li",[e._v("They generally use the "),d("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[d("code",[e._v("keeper")])]),e._v(" and "),d("RouterLink",{attrs:{to:"/core/context.html"}},[d("code",[e._v("ctx")])]),e._v(" to retrieve information about the latest state.")],1),e._v(" "),d("li",[e._v("If needed, they use the "),d("code",[e._v("keeper")]),e._v(" and "),d("code",[e._v("ctx")]),e._v(" to trigger state-transitions.")]),e._v(" "),d("li",[e._v("If needed, they can emit "),d("RouterLink",{attrs:{to:"/core/events.html"}},[d("code",[e._v("events")])]),e._v(" via the "),d("code",[e._v("ctx")]),e._v("'s "),d("code",[e._v("EventManager")]),e._v(".")],1)]),e._v(" "),d("p",[e._v("A specificity of the "),d("code",[e._v("EndBlocker")]),e._v(" is that it can return validator updates to the underlying consensus engine in the form of an "),d("a",{attrs:{href:"https://tendermint.com/docs/app-dev/abci-spec.html#validatorupdate",target:"_blank",rel:"noopener noreferrer"}},[d("code",[e._v("[]abci.ValidatorUpdates")]),d("OutboundLink")],1),e._v(". This is the preferred way to implement custom validator changes.")]),e._v(" "),d("p",[e._v("It is possible for developers to defined the order of execution between the "),d("code",[e._v("BeginBlocker")]),e._v("/"),d("code",[e._v("EndBlocker")]),e._v(" functions of each of their application's modules via the module's manager "),d("code",[e._v("SetOrderBeginBlocker")]),e._v("/"),d("code",[e._v("SetOrderEndBlocker")]),e._v(" methods. For more on the module manager, click "),d("RouterLink",{attrs:{to:"/building-modules/module-manager.html#manager"}},[e._v("here")]),e._v(".")],1),e._v(" "),d("p",[e._v("See an example implementation of "),d("code",[e._v("BeginBlocker")]),e._v(" from the "),d("code",[e._v("distr")]),e._v(" module:")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmVnaW5CbG9ja2VyIHNldHMgdGhlIHByb3Bvc2VyIGZvciBkZXRlcm1pbmluZyBkaXN0cmlidXRpb24gZHVyaW5nIGVuZGJsb2NrCi8vIGFuZCBkaXN0cmlidXRlIHJld2FyZHMgZm9yIHRoZSBwcmV2aW91cyBibG9jawpmdW5jIEJlZ2luQmxvY2tlcihjdHggc2RrLkNvbnRleHQsIHJlcSBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrLCBrIGtlZXBlci5LZWVwZXIpIHsKCS8vIGRldGVybWluZSB0aGUgdG90YWwgcG93ZXIgc2lnbmluZyB0aGUgYmxvY2sKCXZhciBwcmV2aW91c1RvdGFsUG93ZXIsIHN1bVByZXZpb3VzUHJlY29tbWl0UG93ZXIgaW50NjQKCWZvciBfLCB2b3RlSW5mbyA6PSByYW5nZSByZXEuTGFzdENvbW1pdEluZm8uR2V0Vm90ZXMoKSB7CgkJcHJldmlvdXNUb3RhbFBvd2VyICs9IHZvdGVJbmZvLlZhbGlkYXRvci5Qb3dlcgoJCWlmIHZvdGVJbmZvLlNpZ25lZExhc3RCbG9jayB7CgkJCXN1bVByZXZpb3VzUHJlY29tbWl0UG93ZXIgKz0gdm90ZUluZm8uVmFsaWRhdG9yLlBvd2VyCgkJfQoJfQoKCS8vIFRPRE8gdGhpcyBpcyBUZW5kZXJtaW50LWRlcGVuZGVudAoJLy8gcmVmIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9pc3N1ZXMvMzA5NQoJaWYgY3R4LkJsb2NrSGVpZ2h0KCkgJmd0OyAxIHsKCQlwcmV2aW91c1Byb3Bvc2VyIDo9IGsuR2V0UHJldmlvdXNQcm9wb3NlckNvbnNBZGRyKGN0eCkKCQlrLkFsbG9jYXRlVG9rZW5zKGN0eCwgc3VtUHJldmlvdXNQcmVjb21taXRQb3dlciwgcHJldmlvdXNUb3RhbFBvd2VyLCBwcmV2aW91c1Byb3Bvc2VyLCByZXEuTGFzdENvbW1pdEluZm8uR2V0Vm90ZXMoKSkKCX0KCgkvLyByZWNvcmQgdGhlIHByb3Bvc2VyIGZvciB3aGVuIHdlIHBheW91dCBvbiB0aGUgbmV4dCBibG9jawoJY29uc0FkZHIgOj0gc2RrLkNvbnNBZGRyZXNzKHJlcS5IZWFkZXIuUHJvcG9zZXJBZGRyZXNzKQoJay5TZXRQcmV2aW91c1Byb3Bvc2VyQ29uc0FkZHIoY3R4LCBjb25zQWRkcikKfQ=="}})],1),e._v(" "),d("p",[e._v("and an example implementation of "),d("code",[e._v("EndBlocker")]),e._v(" from the "),d("code",[e._v("staking")]),e._v(" module:")]),e._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBFbmRCbG9ja2VyKGN0eCBzZGsuQ29udGV4dCwgayBrZWVwZXIuS2VlcGVyKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlIHsKCS8vIENhbGN1bGF0ZSB2YWxpZGF0b3Igc2V0IGNoYW5nZXMuCgkvLwoJLy8gTk9URTogQXBwbHlBbmRSZXR1cm5WYWxpZGF0b3JTZXRVcGRhdGVzIGhhcyB0byBjb21lIGJlZm9yZQoJLy8gVW5ib25kQWxsTWF0dXJlVmFsaWRhdG9yUXVldWUuCgkvLyBUaGlzIGZpeGVzIGEgYnVnIHdoZW4gdGhlIHVuYm9uZGluZyBwZXJpb2QgaXMgaW5zdGFudCAoaXMgdGhlIGNhc2UgaW4KCS8vIHNvbWUgb2YgdGhlIHRlc3RzKS4gVGhlIHRlc3QgZXhwZWN0ZWQgdGhlIHZhbGlkYXRvciB0byBiZSBjb21wbGV0ZWx5CgkvLyB1bmJvbmRlZCBhZnRlciB0aGUgRW5kYmxvY2tlciAoZ28gZnJvbSBCb25kZWQgLSZndDsgVW5ib25kaW5nIGR1cmluZwoJLy8gQXBwbHlBbmRSZXR1cm5WYWxpZGF0b3JTZXRVcGRhdGVzIGFuZCB0aGVuIFVuYm9uZGluZyAtJmd0OyBVbmJvbmRlZCBkdXJpbmcKCS8vIFVuYm9uZEFsbE1hdHVyZVZhbGlkYXRvclF1ZXVlKS4KCXZhbGlkYXRvclVwZGF0ZXMgOj0gay5BcHBseUFuZFJldHVyblZhbGlkYXRvclNldFVwZGF0ZXMoY3R4KQoKCS8vIFVuYm9uZCBhbGwgbWF0dXJlIHZhbGlkYXRvcnMgZnJvbSB0aGUgdW5ib25kaW5nIHF1ZXVlLgoJay5VbmJvbmRBbGxNYXR1cmVWYWxpZGF0b3JRdWV1ZShjdHgpCgoJLy8gUmVtb3ZlIGFsbCBtYXR1cmUgdW5ib25kaW5nIGRlbGVnYXRpb25zIGZyb20gdGhlIHViZCBxdWV1ZS4KCW1hdHVyZVVuYm9uZHMgOj0gay5EZXF1ZXVlQWxsTWF0dXJlVUJEUXVldWUoY3R4LCBjdHguQmxvY2tIZWFkZXIoKS5UaW1lKQoJZm9yIF8sIGR2UGFpciA6PSByYW5nZSBtYXR1cmVVbmJvbmRzIHsKCQllcnIgOj0gay5Db21wbGV0ZVVuYm9uZGluZyhjdHgsIGR2UGFpci5EZWxlZ2F0b3JBZGRyZXNzLCBkdlBhaXIuVmFsaWRhdG9yQWRkcmVzcykKCQlpZiBlcnIgIT0gbmlsIHsKCQkJY29udGludWUKCQl9CgoJCWN0eC5FdmVudE1hbmFnZXIoKS5FbWl0RXZlbnQoCgkJCXNkay5OZXdFdmVudCgKCQkJCXR5cGVzLkV2ZW50VHlwZUNvbXBsZXRlVW5ib25kaW5nLAoJCQkJc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5BdHRyaWJ1dGVLZXlWYWxpZGF0b3IsIGR2UGFpci5WYWxpZGF0b3JBZGRyZXNzLlN0cmluZygpKSwKCQkJCXNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5RGVsZWdhdG9yLCBkdlBhaXIuRGVsZWdhdG9yQWRkcmVzcy5TdHJpbmcoKSksCgkJCSksCgkJKQoJfQoKCS8vIFJlbW92ZSBhbGwgbWF0dXJlIHJlZGVsZWdhdGlvbnMgZnJvbSB0aGUgcmVkIHF1ZXVlLgoJbWF0dXJlUmVkZWxlZ2F0aW9ucyA6PSBrLkRlcXVldWVBbGxNYXR1cmVSZWRlbGVnYXRpb25RdWV1ZShjdHgsIGN0eC5CbG9ja0hlYWRlcigpLlRpbWUpCglmb3IgXywgZHZ2VHJpcGxldCA6PSByYW5nZSBtYXR1cmVSZWRlbGVnYXRpb25zIHsKCQllcnIgOj0gay5Db21wbGV0ZVJlZGVsZWdhdGlvbihjdHgsIGR2dlRyaXBsZXQuRGVsZWdhdG9yQWRkcmVzcywKCQkJZHZ2VHJpcGxldC5WYWxpZGF0b3JTcmNBZGRyZXNzLCBkdnZUcmlwbGV0LlZhbGlkYXRvckRzdEFkZHJlc3MpCgkJaWYgZXJyICE9IG5pbCB7CgkJCWNvbnRpbnVlCgkJfQoKCQljdHguRXZlbnRNYW5hZ2VyKCkuRW1pdEV2ZW50KAoJCQlzZGsuTmV3RXZlbnQoCgkJCQl0eXBlcy5FdmVudFR5cGVDb21wbGV0ZVJlZGVsZWdhdGlvbiwKCQkJCXNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5RGVsZWdhdG9yLCBkdnZUcmlwbGV0LkRlbGVnYXRvckFkZHJlc3MuU3RyaW5nKCkpLAoJCQkJc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5BdHRyaWJ1dGVLZXlTcmNWYWxpZGF0b3IsIGR2dlRyaXBsZXQuVmFsaWRhdG9yU3JjQWRkcmVzcy5TdHJpbmcoKSksCgkJCQlzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkF0dHJpYnV0ZUtleURzdFZhbGlkYXRvciwgZHZ2VHJpcGxldC5WYWxpZGF0b3JEc3RBZGRyZXNzLlN0cmluZygpKSwKCQkJKSwKCQkpCgl9CgoJcmV0dXJuIHZhbGlkYXRvclVwZGF0ZXMKfQ=="}})],1),e._v(" "),d("h2",{attrs:{hide:"",id:"next"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),d("p",{attrs:{hide:""}},[e._v("Learn about "),d("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[d("code",[e._v("keeper")]),e._v("s")])],1)])}),[],!1,null,null,null);l.default=o.exports}}]);