(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2302f36c"],{2762:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-container"},[e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{id:"canvas",width:"800",height:"500"}})])},i=[],c=e("7a94"),s={data:function(){return{text:"???"}},created:function(){},mounted:function(){this.generate()},methods:{generate:function(){var t=new c["fabric"].Canvas("canvas");t.getContext("2d");c["fabric"].Image.fromURL("https://img2.baidu.com/it/u=2067045147,1367384486&fm=26&fmt=auto&gp=0.jpg",(function(a){a.filters.push(new c["fabric"].Image.filters.Grayscale),a.applyFilters(),a.set({left:0,top:0}),t.add(a)}),{crossOrigin:"anonymous"}),t.isDrawingMode=!0,t.freeDrawingBrush.color="blue",t.freeDrawingBrush.width=5},exportCanvas:function(){var t=this.canvas.toDataURL({width:this.canvas.width,height:this.canvas.height,left:0,top:0,format:"png"}),a=document.createElement("a");a.download="canvas.png",a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},r=s,o=(e("3de4"),e("2877")),d=Object(o["a"])(r,n,i,!1,null,"4d04c121",null);a["default"]=d.exports},"3de4":function(t,a,e){"use strict";e("5887")},5887:function(t,a,e){}}]);
//# sourceMappingURL=chunk-2302f36c.96c09fcb.js.map