(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("7cad6dc1",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";var r=n(215);n.n(r).a},232:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,'div[data-v-4fc4b581]{cursor:default}@-webkit-keyframes placeholder_animation-data-v-4fc4b581{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@keyframes placeholder_animation-data-v-4fc4b581{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}.placeholder[data-v-4fc4b581]{-webkit-animation-name:placeholder_animation-data-v-4fc4b581;animation-name:placeholder_animation-data-v-4fc4b581;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.parentPagination[data-v-4fc4b581]{overflow:scroll;margin-right:2px}.parentPagination[data-v-4fc4b581]::-webkit-scrollbar{display:none}.numberPagination[data-v-4fc4b581]{cursor:pointer;border:1px solid #006bc2;margin-right:2px}.checked[data-v-4fc4b581],.numberPagination[data-v-4fc4b581]:hover{border:1px solid #006bc2;background-color:rgba(0,107,194,.1098)}.tmblBiru[data-v-4fc4b581]{color:#fff;background-color:#006bc2;padding:2px;outline:none;border:0}.block-ellipsis[data-v-4fc4b581]{display:block;display:-webkit-box;max-width:100%;height:43px;margin:0 auto;font-size:14px;line-height:1;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.opacityReduced[data-v-4fc4b581]:hover{cursor:pointer;opacity:.5}.fadeEffect[data-v-4fc4b581]{opacity:1;transition:opacity .5s}.fadeEffect[data-v-4fc4b581]:hover{opacity:.5}.sideBarNav[data-v-4fc4b581]{border-right:1px solid #000}@-webkit-keyframes animation-slideKebawah-data-v-4fc4b581{0%{height:0}to{height:210px}}@keyframes animation-slideKebawah-data-v-4fc4b581{0%{height:0}to{height:210px}}@-webkit-keyframes animation-slideKeatas-data-v-4fc4b581{0%{height:210px}to{height:0}}@keyframes animation-slideKeatas-data-v-4fc4b581{0%{height:210px}to{height:0}}.slideKeatas[data-v-4fc4b581]{-webkit-animation-name:animation-slideKeatas-data-v-4fc4b581;animation-name:animation-slideKeatas-data-v-4fc4b581;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:linear;animation-timing-function:linear}.slideKeatas[data-v-4fc4b581],.slideKebawah[data-v-4fc4b581]{-webkit-animation-duration:.5s;animation-duration:.5s}.slideKebawah[data-v-4fc4b581]{-webkit-animation-name:animation-slideKebawah-data-v-4fc4b581;animation-name:animation-slideKebawah-data-v-4fc4b581;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:linear;animation-timing-function:linear}.halamanPencarianUser[data-v-4fc4b581]{font-size:12px}.sidebarComponent[data-v-4fc4b581]{padding:6px;border-bottom:1px solid;color:#fff;background:linear-gradient(270deg,#0068bc,#006fc9);cursor:pointer;transition:opacity .5s}.sidebarComponent[data-v-4fc4b581]:hover{opacity:.5}.hidden[data-v-4fc4b581]{display:none}#sloganHeader[data-v-4fc4b581]{padding:50px}@media screen and (max-width:1200px){#selengkapnya1[data-v-4fc4b581]{display:none}}@media screen and (max-width:1100px){#menuNavigasi[data-v-4fc4b581]{display:none}#drawerToggle[data-v-4fc4b581]{display:flex}#gambarHeader[data-v-4fc4b581]{display:none}#sloganHeader[data-v-4fc4b581]{padding-left:10px}}.tmblDeal[data-v-4fc4b581]{background-color:#0066b9;cursor:pointer}.tmblDeal[data-v-4fc4b581],.tmblDeal[data-v-4fc4b581]:hover{padding:10px;border-radius:5px;display:flex;align-items:center;flex-direction:column;justify-content:center}.tmblDeal[data-v-4fc4b581]:hover{background-color:#00579e}@media screen and (max-width:991px){.sidebarComponent[data-v-4fc4b581]{background:linear-gradient(270deg,#013f78,#0065b7,#0071cd)}.sideBarNav[data-v-4fc4b581]{border-right:0}}@media screen and (max-width:987px){#selengkapnya1[data-v-4fc4b581]{display:"flex"}}@media screen and (max-width:575px){#sloganHeader[data-v-4fc4b581]{padding-left:30px}}.noselect[data-v-4fc4b581]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',""])},241:function(t,e,n){"use strict";n.r(e);n(48),n(67);var r=n(20),o=n(200),d=n(199),l=n(203),c=n(91),m=n.n(c),v={components:{Footer:o.a,Header:d.a,sideNav:l.a},mounted:function(){alert(this.data)},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,d,l,c,v,x,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URLSearchParams).append("params",'{"aksi":"memuatdetailuser","id":"'.concat(e.params.id,'"}')),(r=new URLSearchParams).append("params",'{"aksi":"memuatdetailuser-permintaan","id":"'.concat(e.params.id,'"}')),(o=new URLSearchParams).append("params",'{"aksi":"memuatdetailuser-jasa","id":"'.concat(e.params.id,'"}')),t.next=8,m.a.post("http://localhost/penerjemah.id/server/api/global.php",n);case 8:return d=t.sent,t.next=11,m.a.post("http://localhost/penerjemah.id/server/api/global.php",r);case 11:return l=t.sent,t.next=14,m.a.post("http://localhost/penerjemah.id/server/api/global.php",o);case 14:return c=t.sent,t.next=17,d.data;case 17:return v=t.sent,t.next=20,l.data;case 20:return x=t.sent,t.next=23,c.data;case 23:return f=t.sent,t.abrupt("return",{data:v,permintaan:x,jasa:f});case 25:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),validate:function(t){var e=t.params;return/([^\d+])/.test(e.id)},methods:{berpindah:function(a){alert(a)},navHandler:function(t){var a=t.target.innerHTML;a.match("Profil")?(this.switch.portofolio=!1,this.switch.profil=!0):a.match("Portofolio")&&(this.switch.profil=!1,this.switch.portofolio=!0)}},data:function(){return{debug:"",data:{user:{id:1,namalengkap:"1",username:"sadasd",tanggaldibuat:"222",provinsi:"123",kabupaten:"",permintaandanjasaselesai:0,terakhirlogin:""},thread:{deskripsi:"aaaa"}},switch:{profil:!0,portofolio:!1},permintaan:[],jasa:[]}}},x=(n(231),n(34)),component=Object(x.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"halamanPencarianUser",staticStyle:{"background-color":"#f2f2f2"}},[n("Header"),t._v(" "),n("div",{staticClass:"container-fluid",staticStyle:{padding:"0px","margin-top":"10px","margin-bottom":"10px"}},[n("div",{staticClass:"container",staticStyle:{"padding-left":"5px"}},[n("div",{staticClass:"row",staticStyle:{padding:"10px"}},[n("sideNav"),t._v(" "),n("div",{staticClass:"col-lg-8 col-md-12 col-md-12",staticStyle:{"padding-right":"2px"}},[n("div",{staticStyle:{"font-size":"28px",padding:"10px","border-bottom":"solid 1px","padding-left":"0px","padding-bottom":"5px"}},[t._v(t._s(this.$route.params.id))]),t._v(" "),n("div",{staticStyle:{"margin-top":"35px","border-bottom":"solid 1px",display:"flex","flex-direction":"row"}},[n("div",{staticClass:"tmblBiru fadeEffect",staticStyle:{padding:"8px","margin-right":"5px","font-size":"14px",cursor:"pointer"},on:{click:function(e){return t.navHandler(e)}}},[t._v("Profil")]),t._v(" "),n("div",{staticClass:"tmblBiru fadeEffect",staticStyle:{padding:"8px","font-size":"14px",cursor:"pointer"},on:{click:function(e){return t.navHandler(e)}}},[t._v("Portofolio")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:this.switch.profil,expression:"this.switch.profil"}],staticStyle:{"margin-top":"25px"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8",staticStyle:{"margin-bottom":"25px"}},[t._v(t._s(this.data.thread.deskripsi))]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"tmblDeal noselect",staticStyle:{color:"white",padding:"12px","border-radius":"5px",display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"},on:{click:function(){}}},[n("div",{staticStyle:{"font-size":"17px","font-weight":"450",cursor:"pointer"}},[t._v("Undang Dalam Taruhan")]),t._v(" "),n("div",{staticStyle:{"font-weight":"300",cursor:"pointer"}},[t._v("Permintaan yang Kamu Buat")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticStyle:{"margin-top":"15px","border-top":"solid 1px"}},[n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Nama Lengkap :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.namalengkap))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Username :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.username))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Tanggal Dibuat :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.tanggaldibuat))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Provinsi :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.provinsi))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Kabupaten :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.kabupaten))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Permintaan dan Jasa:")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.permintaandanjasaselesai))])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"row","border-bottom":"solid 1px","padding-top":"6px","padding-bottom":"6px"}},[n("div",{staticStyle:{width:"150px"}},[t._v("Terakhir Login :")]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[t._v(t._s(this.data.user.terakhirlogin))])])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:this.switch.profil,expression:"this.switch.profil"}],staticClass:"row mt-5"},[n("div",{staticClass:"col-lg-12"},[n("div",[n("div",{staticStyle:{"border-bottom":"solid 1px","font-size":"20px","padding-bottom":"5px"}},[t._v("Permintaan")]),t._v(" "),0===this.permintaan.length?n("div",{staticStyle:{height:"125px",display:"flex","justify-content":"center","align-items":"center"}},[n("div",[t._v("Tidak ditemukan permintaan...")])]):n("div",{staticStyle:{"margin-bottom":"25px"}},[n("div",{staticStyle:{"padding-top":"16px","padding-bottom":"10px",display:"flex","flex-direction":"row","overflow-x":"scroll"}},t._l(this.permintaan,function(e,i){return n("div",{key:i,staticClass:"opacityReduced",staticStyle:{display:"flex","flex-direction":"row","margin-right":"10px",cursor:"pointer","background-color":"#e4e4e4",border:"solid 1px",padding:"20px"},on:{click:function(n){return t.berpindah(e.id)}}},[n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"10px"}},[n("div",{staticStyle:{width:"150px"}},[n("b",[t._v(t._s(e.judul))])]),t._v(" "),n("div",[t._v(t._s(e.status))])])])}),0)])]),t._v(" "),n("div",[n("div",{staticStyle:{"border-bottom":"solid 1px","font-size":"20px","padding-bottom":"5px"}},[t._v("Jasa")]),t._v(" "),0===this.jasa.length?n("div",{staticStyle:{height:"125px",display:"flex","justify-content":"center","align-items":"center"}},[n("div",[t._v("Tidak ditemukan jasa...")])]):n("div",[n("div",{staticStyle:{"padding-top":"16px","padding-bottom":"10px",display:"flex","flex-direction":"row","overflow-x":"scroll"}},t._l(this.jasa,function(e,i){return n("div",{key:i,staticStyle:{display:"flex","flex-direction":"row","margin-right":"10px"}},[n("div",{staticStyle:{border:"solid 1px"}},[n("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.background}})]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"10px"}},[n("div",{staticStyle:{width:"150px"}},[n("nuxt-link",{staticStyle:{color:"black"},attrs:{to:"/detail/jasa/"+e.id}},[t._v(t._s(e.judul))])],1),t._v(" "),n("div",[t._v(t._s(e.status))])])])}),0)])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:this.switch.portofolio,expression:"this.switch.portofolio"}],staticStyle:{"margin-top":"15px","margin-bottom":"50px",display:"flex","flex-direction":"row","flex-wrap":"wrap"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])],1)])]),t._v(" "),n("Footer")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"15px"}},[e("div",{staticStyle:{width:"100%",height:"200px",border:"solid 1px"}},[e("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"15px","margin-bottom":"15px"}},[e("div",{staticStyle:{width:"130px",height:"130px",border:"solid 1px"}},[e("img",{attrs:{src:""}})]),this._v(" "),e("div",{staticStyle:{"margin-top":"10px","word-wrap":"wrap",width:"130px"}},[this._v("Lorem ipsum dolor sit amet kesemet lemet")])])}],!1,null,"4fc4b581",null);e.default=component.exports}}]);