(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{362:function(e,t,n){var content=n(374);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("5a50522a",content,!0,{sourceMap:!1})},373:function(e,t,n){"use strict";var r=n(362);n.n(r).a},374:function(e,t,n){(t=n(25)(!1)).push([e.i,'.heading-font{text-transform:uppercase;font-weight:800;border-top:2px solid hsla(0,0%,46.7%,.4);color:hsla(0,0%,46.7%,.4);padding:.5rem .3rem;font-size:85%}.hamburger{padding:15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible}.hamburger:hover{opacity:.7}.hamburger-box{width:40px;height:24px;display:inline-block;position:relative}.hamburger-inner{display:block;top:50%;margin-top:-2px}.hamburger-inner,.hamburger-inner:after,.hamburger-inner:before{width:40px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner:after,.hamburger-inner:before{content:"";display:block}.hamburger-inner:before{top:-10px}.hamburger-inner:after{bottom:-10px}.hamburger--spin .hamburger-inner{transition-duration:.22s;transition-timing-function:cubic-bezier(.55,.055,.675,.19)}.hamburger--spin .hamburger-inner:before{transition:top .1s ease-in .25s,opacity .1s ease-in}.hamburger--spin .hamburger-inner:after{transition:bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19)}.hamburger--spin.is-active .hamburger-inner{transform:rotate(225deg);transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.hamburger--spin.is-active .hamburger-inner:before{top:0;opacity:0;transition:top .1s ease-out,opacity .1s ease-out .12s}.hamburger--spin.is-active .hamburger-inner:after{bottom:0;transform:rotate(-90deg);transition:bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s}.bael-slideout{position:fixed;right:0;top:0;width:auto;min-width:180px;height:100vh;z-index:1000;background-color:#fff;transform:translate3D(100%,0,0);transition:transform .6s}.bael-slideout.isOpen{transform:translateZ(0);transition:transform .6s}.bael-slideout-opener{position:absolute;top:-4px;right:100%;transform:scale(.5);margin-right:0;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#000;cursor:pointer}.bael-slideout-opener:hover{text-decoration:underline}.bael-slideout-menu{font-weight:600;transition:transform 1.6s ease(out-cubic)}.bael-slideout-menu .menu-logo{padding:.5rem .3rem}.bael-slideout-menu-item,.bael-slideout-menu-item--small{text-transform:uppercase}.bael-slideout-menu-item--small{font-weight:800;text-transform:uppercase}.bael-slideout-menu-item--small a{cursor:pointer;border-top:1px solid #666;display:block;padding:.5rem .3rem}.bael-slideout-menu-item--small a:hover{background:var(--hover-bg)}.bael-slideout-menu-item--small a :active,.bael-slideout-menu-item--small a:focus{background:var(--active-bg)}.bael-slideout-menu-item--small a:hover{text-decoration:none}',""]),e.exports=t},390:function(e,t,n){"use strict";n.r(t);n(12);var r=n(2),o={fetchOnServer:!0,fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("page").fetch();case 2:n=t.sent,e.pages=n;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{isOpen:!1,links:null,pages:null}},computed:{info:function(){return this.$store.state.info},categories:function(){return this.$store.state.categories}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},toggle:function(){this.$store.commit("toggleMenuState");document.querySelector(".hamburger");this.isOpen?this.close():this.open()}}},l=(n(373),n(16)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bael-slideout xs-border xs-text-6 md-text-5",class:{isOpen:e.$store.state.menuIsActive}},[n("div",{staticClass:"bael-slideout-opener"},[n("div",{staticClass:"hamburger hamburger--spin js-hamburger",class:{"is-active":e.$store.state.menuIsActive},on:{click:e.toggle}},[e._m(0)])]),e._v(" "),n("ul",{staticClass:"bael-slideout-menu list-unstyled"},[n("li",{staticClass:"bael-slideout-menu-item menu-logo"},[e.info.siteicon&&e.info.showmenu?n("nuxt-link",{staticClass:"text-black black-font site--name",staticStyle:{color:"#000"},attrs:{to:"/",exact:""}},[n("img",{staticClass:"xs-block xs-fit xs-mb2",staticStyle:{width:"64px"},attrs:{src:e.info.siteicon,alt:e.info.sitename}})]):e._e()],1),e._v(" "),n("li",{staticClass:"bael-slideout-menu-item--small"},[n("nuxt-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),e._v(" "),e.categories.length?n("li",{staticClass:"bael-slideout-menu-item--small"},[n("nuxt-link",{attrs:{to:"/categories",exact:""}},[e._v("Categories")])],1):e._e(),e._v(" "),e._l(e.pages,(function(p,i){return n("li",{key:"pg-"+i,staticClass:"bael-slideout-menu-item--small"},[n("nuxt-link",{attrs:{to:p.path}},[e._v(e._s(p.title))])],1)})),e._v(" "),e.info.menu?n("li",{staticClass:"xs-mt5 bael-slideout-menu-item heading-font"},[e._v("Links")]):e._e(),e._v(" "),e._l(e.info.menu,(function(t){return n("li",{key:t.position,staticClass:"bael-slideout-menu-item--small"},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.name))])])}))],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hamburger-box"},[t("div",{staticClass:"hamburger-inner"})])}],!1,null,null,null);t.default=component.exports}}]);