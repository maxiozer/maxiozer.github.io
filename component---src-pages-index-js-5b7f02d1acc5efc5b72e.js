(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);a(33),a(74),a(73);var i=a(7),n=a.n(i),o=a(0),r=a.n(o),c=a(152),l=a.n(c),A=a(147),d=a.n(A),s=a(146),p=a(158),m=a(149),I=a(4),u=a.n(I),E=function(e){function t(){var t;return(t=e.call(this)||this).registerEvent=function(e){return s.a.event({category:"Projects",action:"link",label:e})},t.state={},t}n()(t,e);var a=t.prototype;return a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return r.a.createElement("article",{className:"4u 8u$(xsmall) work-item",key:a},r.a.createElement("a",{className:"image fit Project",href:t.src,target:"__blank",onClick:e.registerEvent.bind(e,t.src)},r.a.createElement("img",{alt:t.caption,src:t.thumbnail})),r.a.createElement("h3",null,t.caption),r.a.createElement("p",null,t.description),t.links.map(function(t,a){return r.a.createElement("p",{key:a},r.a.createElement("a",{onClick:e.registerEvent.bind(e,t.href),href:t.href,target:"__blank",className:t.iconClass},t.description))}))});return r.a.createElement("div",{className:"row"},a)}},a.render=function(){return r.a.createElement("div",null,this.renderGallery())},t}(o.Component);E.displayName="Gallery",E.propTypes={images:u.a.array};var b=E,R=function(e){function t(){var t;return(t=e.call(this)||this).registerEvent=function(e){return s.a.event({category:"Experience",action:"link",label:e})},t.state={},t}n()(t,e);var a=t.prototype;return a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return r.a.createElement("article",{className:"4u 24u$(xsmall) work-item",key:a},r.a.createElement("a",{className:"image fit",href:t.src,target:"__blank",onClick:e.registerEvent.bind(e,t.src)},r.a.createElement("img",{alt:t.caption,src:t.thumbnail})),r.a.createElement("h3",null,t.caption),r.a.createElement("h6",null,t.dates),r.a.createElement("p",null,t.description))});return r.a.createElement("div",{className:"row"},a)}},a.render=function(){return r.a.createElement("div",null,this.renderGallery())},t}(o.Component);R.displayName="Gallery",R.propTypes={images:u.a.array};var f=R,g=a(160),k=a.n(g),h=a(161),v=a.n(h),Z=a(162),Q=a.n(Z),D=a(163),B=a.n(D),O=a(164),M=a.n(O),w=a(165),y=a.n(w),T=a(166),S=a.n(T),N=a(167),L=a.n(N),G=a(168),P=a.n(G);s.a.initialize("UA-135456994-1"),s.a.pageview("/"),p.hotjar.initialize(1435377);var j=[{thumbnail:k.a,caption:"Andreani Logistics",dates:"Mar 2014 - Present",src:"http://www.andreani.com",description:"I started as Full-Stack developer, then Technical leader and now Data Engineer. I was in charge of most strategical products for different business divisions."},{thumbnail:v.a,caption:"Virtuacom",src:"http://www.virtuacom.net/",dates:"Apr 2013 - Oct 2013",description:"I was in charge of the maintenance of a Multi-tenant application to different e-commerce business using the best OOP practices and methodologies."},{thumbnail:Q.a,caption:"Grupo Vida (Infobae)",dates:"Oct 2011 - Mar 2013",src:"http://www.grupovi-da.com/",description:"I was in charge of the maintenance of an eBooks e-commerce platform. Now it is the most important e-book seller in Argentina."},{thumbnail:B.a,caption:"DDM",dates:"Jun 2010 - Oct 2011",src:"http://ddm.com.ar/en/",description:"I was in charge of the maintenance of the company´s CMS."}],W=[{thumbnail:S.a,caption:"Andreani Mobile",src:"https://www.andreani.com/noticia/140/implementamos-el-sistema-de-distribucion-mobile",description:"A software solution to follow the activity of 3600 distributors on the street. I led the entire process of development and release with 5 people in my charge.",links:[{iconClass:"icon far fa-youtube",href:"https://www.youtube.com/watch?v=VYFCNWKxyCQ",description:" Youtube demo"},{iconClass:"icon fas fa-link",href:"https://www.enretail.com/2017/08/25/andreani-mobile-una-revolucion-en-la-logistica",description:" Press"}]},{thumbnail:y.a,caption:"General Elections Solution",src:null,description:"Based on Andreani Mobile, this software consolidates the polling stations results across the province, validates them using AI and shows real-time results. It has been used by different Argentinian provinces such as Chaco, Cordoba and San Luis.",links:[]},{thumbnail:M.a,caption:"Bajalibros.com",src:"https://www.bajalibros.com/",description:"BajaLibros is the most important e-book seller in Argentina. I participated in the release and maintenance of the Full-Stack solution.",links:[{iconClass:"icon fas fa-link",href:"https://www.bajalibros.com/",description:" www.bajalibros.com"}]},{thumbnail:L.a,caption:"Tiendas Andreani",src:null,description:"Multi-tenant eCommerce platform. It has been the first step of the company in the e-commerce business.",links:[]}],z=[{thumbnail:P.a,caption:"ORT Insititute - Software Analyst",dates:"2012 - 2015",src:"http://www.ort.edu.ar/informacion-terciario",description:""},{thumbnail:P.a,caption:"ORT High School - Technical diploma - Information Technology and digital media",dates:"2005 - 2009",src:"http://www.ort.edu.ar",description:""}],J=function(e){function t(t){var a;(a=e.call(this,t)||this).registerEventCV=function(){return s.a.event({category:"General",action:"Buttons",label:"Get CV"})};var i=H(t.location.search);return s.a.event({category:"General",action:"ref",label:i.ref||""}),a}return n()(t,e),t.prototype.render=function(){return r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement("title",null,"Maximiliano David Ozernickz"),r.a.createElement("meta",{name:"description",content:"Senior Full-Stack web developer and Technical Leader"})),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"two"},r.a.createElement("h2",null,"Professional Experience"),r.a.createElement(f,{images:j.map(function(e){return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,dates:e.dates}})})),r.a.createElement("section",{id:"three"},r.a.createElement("h2",null,"Projects"),r.a.createElement(b,{images:W.map(function(e){return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,links:e.links}})})),r.a.createElement("section",{id:"four"},r.a.createElement("h2",null,"Education"),r.a.createElement(f,{images:z.map(function(e){return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,dates:e.dates}})}),r.a.createElement("p",null,r.a.createElement("a",{href:d.a,onClick:this.registerEventCV,target:"__blank",className:"button"},"Get CV")))))},t}(r.a.Component),H=function(e){return e.slice(e.indexOf("?")+1).split("&").reduce(function(e,t){var a,i,n=t.indexOf("=");if(n<0)return Object.assign(e,((i={})[t]=null,i));var o=t.slice(0,n),r=t.slice(n+1);return Object.assign(e,((a={})[o]=decodeURIComponent(r),a))},{})};t.default=J},147:function(e,t,a){e.exports=a.p+"static/Maximiliano-David-Ozernickz-CV-fa10324501a6da3a8749a1304d089616.pdf"},148:function(e,t,a){e.exports=a.p+"static/avatar-7eff785b43d86793614629227a434e52.jpg"},149:function(e,t,a){"use strict";var i=a(7),n=a.n(i),o=a(0),r=a.n(o),c=(a(150),a(146)),l=a(147),A=a.n(l),d=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).registerEvent=function(e){return c.a.event({category:"Footer",action:"link",label:e})},t}return n()(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{onClick:this.registerEvent.bind(this,"Linkedin"),href:"https://www.linkedin.com/in/maximilianoozernickz",target:"__blank",rel:"noopener noreferrer",className:"icon fa-linkedin"})),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.registerEvent.bind(this,"CV"),href:A.a,target:"_blank",rel:"noopener noreferrer",className:"icon fa-id-badge"},r.a.createElement("span",{className:"label"},"Email"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.registerEvent.bind(this,"Mail"),href:"mailto:maxoozer@gmail.com",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email"))))))},t}(r.a.Component),s=a(148),p=a.n(s),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"#",className:"image avatar"},r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement("h2",null,r.a.createElement("strong",null,"Maximiliano David Ozernickz")),r.a.createElement("h1",null,r.a.createElement("p",null,"Data Engineer, Senior Full-Stack Web Developer & Technical Leader.")),r.a.createElement(d,null)))},t}(r.a.Component),I=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(m,null),e)},t}(r.a.Component);t.a=I},160:function(e,t,a){e.exports=a.p+"static/Logo-Andreani-150079786609cf8be7108808f1a1652d.jpg"},161:function(e,t,a){e.exports=a.p+"static/Virtuacom-e1b198e8b36d03d20ae0b4ab984047e2.png"},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtEAAAGkCAMAAADAEInaAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAABlBMVEX/gAAAAADwRaKRAAAAAnRSTlP/AOW3MEoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAa7aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDItMjdUMjA6MTk6MjItMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTI4VDExOjU3OjIxLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAyLTI4VDExOjU3OjIxLTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMiIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDAzMWE2YzUtNTIxOC0xMTQ4LWFkMmYtMjQ4M2UxOTI0ZGYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmY0NDllYzRhLWU2YmQtMWQ0Mi1iNjE3LTgxODYxZjlmOGI0MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmY0NDllYzRhLWU2YmQtMWQ0Mi1iNjE3LTgxODYxZjlmOGI0MyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ0OWVjNGEtZTZiZC0xZDQyLWI2MTctODE4NjFmOWY4YjQzIiBzdEV2dDp3aGVuPSIyMDE5LTAyLTI3VDIwOjE5OjIyLTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMzMGUzYzdkLTEwZTAtM2U0OC05YWE2LTU2Y2IxYmI1Yjc5YyIgc3RFdnQ6d2hlbj0iMjAxOS0wMi0yOFQxMTo1NToxNi0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRv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"},163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAEsCAIAAACt+0ZWAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAyLTI3VDE5OjIzOjQ3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMi0yOFQxMzo1OToyMC0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMi0yOFQxMzo1OToyMC0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFjNTc5OGFlLTBmOTgtMmM0NS05MDIxLWVkNTMxOTFiZmJhYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplMDA2MmM4ZC1mYzdiLTQ4NDItOWM3Ny1iN2QzZWJkMzgyNGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMDA2MmM4ZC1mYzdiLTQ4NDItOWM3Ny1iN2QzZWJkMzgyNGUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwMDYyYzhkLWZjN2ItNDg0Mi05Yzc3LWI3ZDNlYmQzODI0ZSIgc3RFdnQ6d2hlbj0iMjAxOS0wMi0yN1QxOToyMzo0Ny0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNzIyODgxNS01NzFkLWQ1NDAtOTVmYi02Njk5ZjM2OWMzNGIiIHN0RXZ0OndoZW49IjIwMTktMDItMjhUMTM6NTc6MzktMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxp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"},164:function(e,t,a){e.exports=a.p+"static/bajalibros-0ec4d3ef204ab53a42380bad11393410.jpg"},165:function(e,t,a){e.exports=a.p+"static/elections-ce20a76b0f24828c9bbcffdab0309dfe.jpg"},166:function(e,t,a){e.exports=a.p+"static/andreani-mobile-e1fe570e4f3b08e154f34f1ac518b9e0.png"},167:function(e,t,a){e.exports=a.p+"static/tiendas andreani-be6bc438ec0f3f8fd75482959ac65d84.jpg"},168:function(e,t,a){e.exports=a.p+"static/logo-ort-c2bfbc650a509eedca94c127622006fd.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-5b7f02d1acc5efc5b72e.js.map