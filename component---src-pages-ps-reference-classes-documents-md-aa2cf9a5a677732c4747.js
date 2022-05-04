(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[3845],{92688:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return i}});var n=a(22122),m=a(19756),r=(a(15007),a(64983)),d=a(99536),p=["components"],o={},l={_frontmatter:o},s=d.Z;function i(e){var t=e.components,a=(0,m.Z)(e,p);return(0,r.mdx)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"documents"},"Documents"),(0,r.mdx)("p",null,"A collections class allowing for array access into the applications\nlist of documents that are currently open,\nwhile also providing familiar methods from ExtendScript, like ",(0,r.mdx)("inlineCode",{parentName:"p"},"getByName")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Iterate through all the documents\napp.documents.forEach(h => console.log(h.title));\n")),(0,r.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("em",{parentName:"p"},"Array"),"<",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document")),">"),(0,r.mdx)("p",{parentName:"li"},"↳ ",(0,r.mdx)("strong",{parentName:"p"},"Documents")))),(0,r.mdx)("h2",{id:"indexable"},"Indexable"),(0,r.mdx)("p",null,"▪ ","[index: ",(0,r.mdx)("em",{parentName:"p"},"number"),"]",": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document"))),(0,r.mdx)("p",null,"Used to access the documents in the collection"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Iterate through all the documents\napp.documents.forEach(h => console.log(h.title));\n")),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"length"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Number of ",(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/document/"},"Document")," elements in this collection")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/photoshop/"},(0,r.mdx)("em",{parentName:"a"},"Photoshop"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The owner application of this Documents collection")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The name for this object collection: Documents")))),(0,r.mdx)("h2",{id:"methods"},"Methods"),(0,r.mdx)("h3",{id:"add"},"add"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document")),">"),(0,r.mdx)("p",null,"Create a new document."),(0,r.mdx)("p",null,'No options will create a document of 7 x 5 inches at 300 pixels per inch.\nThis is the same as the "Default Photoshop Size" preset.'),(0,r.mdx)("p",null,"An object with a 'preset' string parameter can be used to specify any of\nthe other presets that come installed with Photoshop or created by users."),(0,r.mdx)("p",null,"An object with one or more parameters can also be supplied. Any parameter\nmissing will be set to the default of: width 2100 pixels, height 1500 pixels,\nresolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with\nno transparency."),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/createoptions/documentcreateoptions/"},(0,r.mdx)("em",{parentName:"a"},"DocumentCreateOptions"))),(0,r.mdx)("td",{parentName:"tr",align:"left"},"@DocumentCreateOptions")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getbyname"},"getByName"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,r.mdx)("em",{parentName:"a"},"Document"))),(0,r.mdx)("p",null,"Find the first document with the matching name"),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-documents-md-aa2cf9a5a677732c4747.js.map