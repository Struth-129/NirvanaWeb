(this.webpackJsonpnirvana=this.webpackJsonpnirvana||[]).push([[0],{26:function(e,t,s){},47:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var i,a=s(0),c=s.n(a),n=s(10),l=s.n(n),r=(s(26),s(47),s(21)),h=s.n(r),o=s(55);(i=h.a).fn.navList=function(){var e=i(this).find("a"),t=[];return e.each((function(){var e=i(this),s=Math.max(0,e.parents("li").length-1),a=e.attr("href"),c=e.attr("target");t.push('<a class="link depth-'+s+'"'+("undefined"!==typeof c&&""!=c?' target="'+c+'"':"")+("undefined"!==typeof a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+s+'"></span>'+e.text()+"</a>")})),t.join("")},i.fn.panel=function(e){if(0==this.length)return a;if(this.length>1){for(var t=0;t<this.length;t++)i(this[t]).panel(e);return a}var s,a=i(this),c=i("body"),n=i(window),l=a.attr("id");return"jQuery"!=typeof(s=i.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:a,visibleClass:"visible"},e)).target&&(s.target=i(s.target)),a._hide=function(e){s.target.hasClass(s.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),s.target.removeClass(s.visibleClass),window.setTimeout((function(){s.resetScroll&&a.scrollTop(0),s.resetForms&&a.find("form").each((function(){this.reset()}))}),s.delay))},a.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),s.hideOnClick&&(a.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),a.on("click","a",(function(e){var t=i(this),c=t.attr("href"),n=t.attr("target");c&&"#"!=c&&""!=c&&c!="#"+l&&(e.preventDefault(),e.stopPropagation(),a._hide(),window.setTimeout((function(){"_blank"==n?window.open(c):window.location.href=c}),s.delay+10))}))),a.on("touchstart",(function(e){a.touchPosX=e.originalEvent.touches[0].pageX,a.touchPosY=e.originalEvent.touches[0].pageY})),a.on("touchmove",(function(e){if(null!==a.touchPosX&&null!==a.touchPosY){var t=a.touchPosX-e.originalEvent.touches[0].pageX,i=a.touchPosY-e.originalEvent.touches[0].pageY,c=a.outerHeight(),n=a.get(0).scrollHeight-a.scrollTop();if(s.hideOnSwipe){var l=!1,r=20;switch(s.side){case"left":l=i<r&&i>-20&&t>50;break;case"right":l=i<r&&i>-20&&t<-50;break;case"top":l=t<r&&t>-20&&i>50;break;case"bottom":l=t<r&&t>-20&&i<-50}if(l)return a.touchPosX=null,a.touchPosY=null,a._hide(),!1}(a.scrollTop()<0&&i<0||n>c-2&&n<c+2&&i>0)&&(e.preventDefault(),e.stopPropagation())}})),a.on("click touchend touchstart touchmove",(function(e){e.stopPropagation()})),a.on("click",'a[href="#'+l+'"]',(function(e){e.preventDefault(),e.stopPropagation(),s.target.removeClass(s.visibleClass)})),c.on("click touchend",(function(e){a._hide(e)})),c.on("click",'a[href="#'+l+'"]',(function(e){e.preventDefault(),e.stopPropagation(),s.target.toggleClass(s.visibleClass)})),s.hideOnEscape&&n.on("keydown",(function(e){27==e.keyCode&&a._hide(e)})),a},i.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder)return i(this);if(0==this.length)return t;if(this.length>1){for(var e=0;e<this.length;e++)i(this[e]).placeholder();return t}var t=i(this);return t.find("input[type=text],textarea").each((function(){var e=i(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.addClass("polyfill-placeholder").val(e.attr("placeholder"))})).on("blur",(function(){var e=i(this);e.attr("name").match(/-polyfill-field$/)||""==e.val()&&e.addClass("polyfill-placeholder").val(e.attr("placeholder"))})).on("focus",(function(){var e=i(this);e.attr("name").match(/-polyfill-field$/)||e.val()==e.attr("placeholder")&&e.removeClass("polyfill-placeholder").val("")})),t.find("input[type=password]").each((function(){var e=i(this),t=i(i("<div>").append(e.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=e.attr("id")&&t.attr("id",e.attr("id")+"-polyfill-field"),""!=e.attr("name")&&t.attr("name",e.attr("name")+"-polyfill-field"),t.addClass("polyfill-placeholder").val(t.attr("placeholder")).insertAfter(e),""==e.val()?e.hide():t.hide(),e.on("blur",(function(t){t.preventDefault();var s=e.parent().find("input[name="+e.attr("name")+"-polyfill-field]");""==e.val()&&(e.hide(),s.show())})),t.on("focus",(function(e){e.preventDefault();var s=t.parent().find("input[name="+t.attr("name").replace("-polyfill-field","")+"]");t.hide(),s.show().focus()})).on("keypress",(function(e){e.preventDefault(),t.val("")}))})),t.on("submit",(function(){t.find("input[type=text],input[type=password],textarea").each((function(e){var t=i(this);t.attr("name").match(/-polyfill-field$/)&&t.attr("name",""),t.val()==t.attr("placeholder")&&(t.removeClass("polyfill-placeholder"),t.val(""))}))})).on("reset",(function(e){e.preventDefault(),t.find("select").val(i("option:first").val()),t.find("input,textarea").each((function(){var e,t=i(this);switch(t.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),e=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]"),""==t.val()?(t.hide(),e.show()):(t.show(),e.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("polyfill-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}}))})),t},i.prioritize=function(e,t){var s="__prioritize";"jQuery"!=typeof e&&(e=i(e)),e.each((function(){var e,a=i(this),c=a.parent();if(0!=c.length)if(a.data(s)){if(t)return;e=a.data(s),a.insertAfter(e),a.removeData(s)}else{if(!t)return;if(0==(e=a.prev()).length)return;a.prependTo(c),a.data(s,e)}}))},h()(document).ready((function(){var e=h()(window),t=h()("body"),s=h()("#menu"),i=h()("#sidebar"),a=h()("#main");Object(o.a)({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),h()(e).on("load",(function(){window.setTimeout((function(){t.removeClass("is-preload")}),100)})),s.appendTo(t).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right",target:t,visibleClass:"is-menu-visible"});var c=h()("#search"),n=c.find("input");t.on("click",'[href="#search"]',(function(e){e.preventDefault(),c.hasClass("visible")||(c[0].reset(),c.addClass("visible"),n.focus())})),n.on("keydown",(function(e){27==e.keyCode&&n.blur()})).on("blur",(function(){window.setTimeout((function(){c.removeClass("visible")}),100)}));var l=h()("#intro");o.a.on("<=large",(function(){l.prependTo(a)})),o.a.on(">large",(function(){l.prependTo(i)}))}));var j=s(1);var d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{id:"header",children:[Object(j.jsx)("h1",{children:Object(j.jsx)("a",{href:"index.html",children:"Nirvana"})}),Object(j.jsx)("nav",{class:"links",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Music"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Blogs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/about",children:"About Us"})})]})}),Object(j.jsx)("nav",{class:"mobile",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#"})})})}),Object(j.jsx)("nav",{class:"main",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{class:"search",children:[Object(j.jsx)("a",{class:"fa-search",href:"#search",children:"Search"}),Object(j.jsx)("form",{id:"search",method:"get",action:"#",children:Object(j.jsx)("input",{type:"text",name:"query",placeholder:"Search"})})]}),Object(j.jsx)("li",{class:"menu",children:Object(j.jsx)("a",{class:"fa-bars",href:"#menu",children:"Menu"})})]})})]}),Object(j.jsxs)("section",{id:"menu",children:[Object(j.jsx)("section",{children:Object(j.jsx)("form",{class:"search",method:"get",action:"#",autoComplete:"off",children:Object(j.jsx)("input",{type:"text",name:"query",placeholder:"Search",autoComplete:"off"})})}),Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{class:"links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"/Test",children:[Object(j.jsx)("h3",{children:"Nirvana Stress test"}),Object(j.jsx)("p",{children:"Some content here"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("h3",{children:"Yoga/Medidation"}),Object(j.jsx)("p",{children:"Some content here"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("h3",{children:"Take a tour"}),Object(j.jsx)("p",{children:"Some content here"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("h3",{children:"Niri "}),Object(j.jsx)("p",{children:"Some content here"})]})})]})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("ul",{class:"actions stacked",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"button large fit",children:"Log In"})})}),Object(j.jsx)("ul",{class:"actions stacked",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/signin",class:"button large fit",children:"Sign Up"})})})]})]})]})},b="data:image/png;base64,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",x=s.p+"static/media/cover.420649b8.png";var m=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{id:"sidebar",children:[Object(j.jsxs)("section",{id:"intro",children:[Object(j.jsx)("a",{href:"/",className:"logo",children:Object(j.jsx)("img",{src:b,alt:""})}),Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{children:"Nirvana"}),Object(j.jsxs)("p",{children:[" The simple, easy and secure mental health solution.",Object(j.jsx)("a",{href:"",children:"NIRVANA"})]})]})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("div",{class:"mini-posts",children:[Object(j.jsxs)("article",{class:"mini-post",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"Name"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-20",children:"February 20, 2020"}),Object(j.jsx)("a",{href:"/home",class:"author",children:Object(j.jsx)("img",{src:b,alt:""})})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]}),Object(j.jsxs)("article",{class:"mini-post",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"Name"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-19",children:"October 19, 2015"}),Object(j.jsx)("a",{href:"#",class:"author",children:Object(j.jsx)("img",{src:b,alt:""})})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]}),Object(j.jsxs)("article",{class:"mini-post",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"Name"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-18",children:"October 18, 2015"}),Object(j.jsx)("a",{href:"#",class:"author",children:Object(j.jsx)("img",{src:b,alt:""})})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]}),Object(j.jsxs)("article",{class:"mini-post",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"Name"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-17",children:"October 17, 2015"}),Object(j.jsx)("a",{href:"#",class:"author",children:Object(j.jsx)("img",{src:b,alt:""})})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})]})}),Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{class:"posts",children:[Object(j.jsx)("li",{children:Object(j.jsxs)("article",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"Saket Srivastava"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-20",children:"October 20, 2015"})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("article",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"sasas"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-15",children:"October 15, 2015"})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("article",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"sasasasr"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-10",children:"October 10, 2015"})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("article",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"asasas"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-08",children:"October 8, 2015"})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("article",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:"single.html",children:"asasas"})}),Object(j.jsx)("time",{class:"published",datetime:"2015-10-06",children:"October 7, 2015"})]}),Object(j.jsx)("a",{href:"single.html",class:"image",children:Object(j.jsx)("img",{src:x,alt:""})})]})})]})}),Object(j.jsxs)("section",{class:"blurb",children:[Object(j.jsx)("h2",{children:"About Us"}),Object(j.jsx)("p",{children:"We aim to reach out to everyone to help them relax by the practice of the NIRI Test and NIRI tips based on extensive research and expertise suggestions. Nirvana helps making identification and treatment easy and secure by its encrypted E- counsel and wellness features for all groups of people. ."}),Object(j.jsx)("ul",{class:"actions",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/about",class:"button",children:"Learn More"})})})]}),Object(j.jsxs)("section",{id:"footer",children:[Object(j.jsxs)("ul",{class:"icons",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon brands fa-twitter",children:Object(j.jsx)("span",{class:"label",children:"Twitter"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon brands fa-facebook-f",children:Object(j.jsx)("span",{class:"label",children:"Facebook"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon brands fa-instagram",children:Object(j.jsx)("span",{class:"label",children:"Instagram"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon solid fa-rss",children:Object(j.jsx)("span",{class:"label",children:"RSS"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon solid fa-envelope",children:Object(j.jsx)("span",{class:"label",children:"Email"})})})]}),Object(j.jsxs)("p",{class:"copyright",children:["\xa9 NIRVANA: ",Object(j.jsx)("a",{href:"#",children:"Nirvana"}),". ",Object(j.jsx)("a",{href:"",children:"All right received"}),"."]})]})]})})};var O=function(){return Object(j.jsx)("df-messenger",{"chat-icon":"https://www.breakthroughs.com/sites/default/files/screen_shot_2020-02-20_at_1.06.10_pm.png",intent:"WELCOME","chat-title":"NIRI","agent-id":"995289b0-a227-41c3-9a9f-e5ee1db71677","language-code":"en"})},u=s.p+"static/media/med.c34e14db.png",f=s.p+"static/media/strt.da458ffe.png";var p=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"main",children:[Object(j.jsxs)("article",{className:"post",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"single.html",children:"How NIRVANA helps?"})}),Object(j.jsx)("p",{children:"\u201cYour body is your most priceless possession and its mental health is a very thin thread in it, an issue which so many have chosen to ignore.\u201d"})]}),Object(j.jsxs)("div",{className:"meta",children:[Object(j.jsx)("time",{className:"published",datetime:"2020-10-25",children:"October 25, 2020"}),Object(j.jsxs)("a",{href:"#",className:"author",children:[Object(j.jsx)("span",{className:"name",children:"Nirvana"}),Object(j.jsx)("img",{src:b,alt:""})]})]})]}),Object(j.jsx)("a",{href:"single.html",className:"image featured",children:Object(j.jsx)("img",{src:x,alt:""})}),Object(j.jsx)("p",{children:"Struck with mood swings and psychotic pains enfolding your depression? Or Searching for an anxiety slayer and looking for motivation? Well, here comes NIRVANA for your rescue- a Mental Wellness Spa unlocking a range of mindcological tools. ."}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("ul",{className:"actions",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"single.html",className:"button large",children:"Continue Reading"})})}),Object(j.jsxs)("ul",{className:"stats",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"General"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-heart",children:"28"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-comment",children:"128"})})]})]})]}),Object(j.jsxs)("article",{className:"post",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"single.html",children:"MEDITATION"})}),Object(j.jsx)("p",{children:"\u201cMeditation is a way for nourishing and blossoming the divinity within you.\u201d"})]}),Object(j.jsxs)("div",{className:"meta",children:[Object(j.jsx)("time",{className:"published",datetime:"2020-10-25",children:"October 25, 2020"}),Object(j.jsxs)("a",{href:"#",className:"author",children:[Object(j.jsx)("span",{className:"name",children:"Nirvana"}),Object(j.jsx)("img",{src:b,alt:""})]})]})]}),Object(j.jsx)("a",{href:"single.html",className:"image featured",children:Object(j.jsx)("img",{src:u,alt:""})}),Object(j.jsx)("p",{children:"Meditation is the delicate art of doing nothing but letting go of all the efforts to relax into your factual nature and exploring a special place where each and every place is momentou."}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("ul",{className:"actions",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"single.html",className:"button large",children:"Continue Reading"})})}),Object(j.jsxs)("ul",{className:"stats",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"General"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-heart",children:"28"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-comment",children:"128"})})]})]})]}),Object(j.jsxs)("article",{className:"post",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"single.html",children:"Getting started with mindfulness"})}),Object(j.jsx)("p",{children:"\u201cMindfulness is full presence and conviction in the moment, it\u2019s like living in the moment\u201d "})]}),Object(j.jsxs)("div",{className:"meta",children:[Object(j.jsx)("time",{className:"published",datetime:"2020-10-22",children:"October 22, 2020"}),Object(j.jsxs)("a",{href:"#",className:"author",children:[Object(j.jsx)("span",{className:"name",children:"NIRVANA"}),Object(j.jsx)("img",{src:b,alt:""})]})]})]}),Object(j.jsx)("a",{href:"single.html",className:"image featured",children:Object(j.jsx)("img",{src:f,alt:""})}),Object(j.jsx)("p",{children:"Mindfulness is being aware of your feelings and experiences, unhooking from your anxious thoughts, calming the nervous system to rest your emotions in the present moment and let go of being pulled around by unhelpful thoughts and emotions.  When you become aware of the present moment, you gain access to resources you may not have realized were with you all along\u2014 \u201ca stillness at your core\u201d."}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("ul",{className:"actions",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"single.html",className:"button large",children:"Continue Reading"})})}),Object(j.jsxs)("ul",{className:"stats",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"General"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-heart",children:"28"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"icon solid fa-comment",children:"128"})})]})]})]}),Object(j.jsxs)("ul",{className:"actions pagination",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"",className:"disabled button large previous",children:"Previous Page"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"button large next",children:"Next Page"})})]})]})})},g=s(56),A=s(136),v=s(137),y=s(138),E=s(153),I=s(141),C=s(150),w=0,N=["Hi there"];var Q=function(){var e=c.a.useState("Never"),t=Object(g.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)([]),l=Object(g.a)(n,2),r=l[0],h=l[1];Object(a.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),console.log(r);var o=Object(a.useState)(N[0]),b=Object(g.a)(o,2),x=b[0],m=b[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{id:"main",children:Object(j.jsxs)("div",{className:"test_main",children:[Object(j.jsx)(A.a,{fluid:!0,className:"test_box",children:Object(j.jsxs)(v.a,{fluid:!0,className:"test_middle",children:[Object(j.jsxs)("h3",{className:"display-6",children:[w+1," . ",x]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"upptext lead",children:"Please Select the most suitable option"}),Object(j.jsx)(y.a,{component:"fieldset",children:Object(j.jsxs)(E.a,{className:"active form_btn","aria-label":"response",name:"response",value:s,onChange:function(e){i(e.target.value)},children:[Object(j.jsx)(I.a,{className:"form_btn",value:"Never",control:Object(j.jsx)(C.a,{}),label:"Nil"}),Object(j.jsx)(I.a,{className:"form_btn",value:"mild",control:Object(j.jsx)(C.a,{}),label:"mild"}),Object(j.jsx)(I.a,{className:"form_btn",value:"moderate",control:Object(j.jsx)(C.a,{}),label:"moderate"}),Object(j.jsx)(I.a,{className:"form_btn",value:"serve",control:Object(j.jsx)(C.a,{}),label:"serve"})]})})]})}),Object(j.jsxs)("ul",{className:"actions pagination test_btn",children:[Object(j.jsx)("li",{id:"prev",children:Object(j.jsx)("button",{className:"  disabled  button large previous test_btn_h",children:"Previous Page"})}),Object(j.jsx)("li",{id:"next",children:Object(j.jsx)("button",{className:"button large next test_btn_h",onClick:function(){w++,m(r[w]),console.log(r.length)},children:"Next Page"})})]})]})})]})})};var k=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{id:"main",children:Object(j.jsx)(p,{})}),Object(j.jsx)(m,{})]}),Object(j.jsx)(O,{})]})},B=s(152),R=s(146),T=s(145),M=s(148),W=s(151),F=s(142),S=s(147),X=s(149),Y=s(68),G=s.n(Y),D=s(71),U=s(143),P=s(144);function z(){return Object(j.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(j.jsx)(F.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var K=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),height:40}}}));var L=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{id:"main",children:Object(j.jsxs)("article",{class:"post",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{class:"title",children:[Object(j.jsx)("h2",{children:Object(j.jsx)("a",{href:"#",children:"NIRVANA"})}),Object(j.jsx)("p",{style:{fontStyle:"italic"},children:"Mindfulness is full presence and conviction in the moment, it\u2019s like living in the moment"})]}),Object(j.jsxs)("div",{class:"meta",children:[Object(j.jsx)("time",{class:"published",datetime:"2015-11-01",children:"March 1, 2021"}),Object(j.jsxs)("a",{href:"/about",class:"author",children:[Object(j.jsx)("span",{class:"name",children:"Nirvana team"}),Object(j.jsx)("img",{src:b,alt:""})]})]})]}),Object(j.jsx)("span",{class:"image featured",children:Object(j.jsx)("img",{src:"images/pic01.jpg",alt:""})}),Object(j.jsx)("p",{children:"Nirvana is a team of enthusiasts exploring the untouched spheres of the mental health. With a mission to quantify the burden of those suffering from depression, mental, select neurological or substance problems by creating awareness and developing mental health system we carry our work ahead by working on our idea to provide a truly personalised user experience to combat mental health issues by bridging the gap and hence calm the oscillation of mind towards stability."}),Object(j.jsx)("p",{children:"We aim to reach out to everyone to help them relax by the practice of the NIRI Test and NIRI tips based on extensive research and expertise suggestions. Nirvana helps making identification and treatment easy and secure by its encrypted E- counsel and wellness features for all groups of people. "}),Object(j.jsx)("p",{children:"Nirvana is your \u2018Mental Wellness Spa\u2019. It is simple and easy to use all-in-one development package to bounce you back from your disappointment and psychotic pains and at the same time help you discover ways to tap into your own resilience. Nirvana works in very unique and systematic way encompassing attributes like Yoga, Meditation, Therapy, Health Quantifier, Health blogs, Relaxing music and podcasts, Goal tracker and above all, the intelligent AI based chat bot NIRI. Nirvana helps you attain mindfulness in every possible way as you unzip;"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"NIRI"})," : Your friend at Nirvana"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"E-Mantrana"})," : Your room to therapy"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Chetna"})," : Your guide to Yog and meditation"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Medicpen"})," : Your place to read"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Soul"})," : Your escape into chords"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Saarini"})," : Your chores synchronised"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Dharma "})," : Your purpose to life"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Nirvaan"})," : Your store to happiness "]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"NIRI Test"})," : Your step towards detection"]})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Why Nirvana:"}),Object(j.jsx)("br",{}),"With changing health patterns among Indians, mental, behavioural and substance use disorders are coming to the fore in health care delivery systems. These disorders contribute for significant morbidity, disability and even mortality amongst those affected. Due to the prevailing stigma, these disorders often are hidden by the society and consequently persons with mental disorders lead a poor quality of life. Even though several studies point to the growing burden, the extent, pattern and outcome of these mental, behavioural and substance use disorders are not clearly known. Though unmeasured, the social and economic impact of these conditions is huge. It is also acknowledged that mental health programmes and services need significant strengthening and / or scaling up to deliver appropriate and comprehensive services for the millions across the country who are in need of care. Nirvana is one such step towards catering the needs of those people, recognising the need for good quality, scientific and reliable information to strengthen mental health."]}),Object(j.jsx)("p",{style:{fontStyle:"italic"},children:"Thank you"}),Object(j.jsx)("p",{style:{fontStyle:"italic"},children:"Nirvana Team"}),Object(j.jsx)("footer",{children:Object(j.jsxs)("ul",{class:"stats",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"General"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",class:"icon solid fa-heart",children:"28"})})]})})]})}),Object(j.jsx)(m,{})]}),Object(j.jsx)(O,{})]})},H=s(69),J=s(12);l.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(H.a,{children:Object(j.jsxs)(J.c,{children:[Object(j.jsx)(J.a,{exact:!0,path:"/",component:k}),Object(j.jsx)(J.a,{path:"/Home",component:k}),Object(j.jsx)(J.a,{path:"/Test",component:Q}),Object(j.jsx)(J.a,{path:"/signin",component:function(){var e=K();return Object(j.jsxs)(P.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(T.a,{}),Object(j.jsxs)("div",{className:e.paper,children:[Object(j.jsx)(B.a,{className:e.avatar,children:Object(j.jsx)(G.a,{})}),Object(j.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(j.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(j.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(j.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(j.jsx)(I.a,{control:Object(j.jsx)(W.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(j.jsx)(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(j.jsxs)(S.a,{container:!0,children:[Object(j.jsx)(S.a,{item:!0,xs:!0,children:Object(j.jsx)(F.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(j.jsx)(S.a,{item:!0,children:Object(j.jsx)(F.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(j.jsx)(X.a,{mt:8,children:Object(j.jsx)(z,{})})]})}}),Object(j.jsx)(J.a,{path:"/about",component:L})]})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.702bbb76.chunk.js.map