(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc5fb71c"],{"0f36":function(t,s,i){},2891:function(t,s,i){"use strict";var e=i("3c5e"),n=i.n(e);n.a},"36fd":function(t,s,i){},"3c5e":function(t,s,i){},"439f":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"music-item"},[i("div",{staticClass:"song-list"},[i("ul",t._l(t.songs,(function(s,e){return i("li",{key:s.id,on:{click:function(s){return t.selectItem(e)}}},[i("h2",[i("span",{staticClass:"name"},[t._v(t._s(s.name))]),i("span",{staticClass:"icon-add",on:{click:function(i){return i.stopPropagation(),t.addSong(s)}}})]),i("p",t._l(s.singer,(function(s){return i("span",{key:s.id},[t._v(t._s(s.name))])})),0)])})),0)])])},n=[],o=(i("c740"),i("5530")),c=i("2f62"),a={props:{songs:{type:Array}},computed:Object(o["a"])({},Object(c["b"])({playList:"playList",sequenceList:"sequenceList"})),methods:{selectItem:function(t){this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)},addSong:function(t){this.$store.commit("setSongItem",t)},isPlayList:function(t){var s=this.playList.findIndex((function(s){return s.mid==t.mid}));return s}}},r=a,A=(i("f1ad"),i("2877")),l=Object(A["a"])(r,e,n,!1,null,"cd82e95a",null);s["a"]=l.exports},8325:function(t,s,i){"use strict";var e=i("0f36"),n=i.n(e);n.a},a58f:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs,value:"歌单"}})],1)},n=[],o=(i("4160"),i("b0c0"),i("159b"),i("96cf"),i("1da1")),c=i("ec7f"),a={components:{musicList:c["a"]},data:function(){return{songs:[]}},methods:{checkSongList:function(){this.songList.content_id||this.$router.back()},fetchSongListDetail:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var i,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.songs=[],s.next=3,t.$http.get("/api/songlist?id="+t.songList.content_id);case 3:if(i=s.sent,e=i.data.data,t.songs=e.songlist,void 0!=t.songs){s.next=9;break}return t.songList=[],s.abrupt("return");case 9:t.songs.forEach((function(t){t.mid=t.songmid,t.name=t.songname,t.album={id:t.albumid,mid:t.albummid,name:t.albumname}}));case 10:case"end":return s.stop()}}),s)})))()}},computed:{songList:{get:function(){return this.$store.state.songList},set:function(){}},title:function(){return this.songList.title},bgImage:function(){return this.songList.cover}},mounted:function(){this.checkSongList(),this.fetchSongListDetail()},watch:{songList:function(){this.fetchSongListDetail()}}},r=a,A=(i("2891"),i("2877")),l=Object(A["a"])(r,e,n,!1,null,"7ae96de7",null);s["default"]=l.exports},b0c0:function(t,s,i){var e=i("83ab"),n=i("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,r="name";e&&!(r in o)&&n(o,r,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b9d7:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loading"},[e("img",{attrs:{width:"24",height:"24",src:i("cf1c")}}),e("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},n=[],o={props:{title:{type:String,default:"正在载入中..."}}},c=o,a=(i("bd49"),i("2877")),r=Object(a["a"])(c,e,n,!1,null,"93e406b4",null);s["a"]=r.exports},bd49:function(t,s,i){"use strict";var e=i("36fd"),n=i.n(e);n.a},cf1c:function(t,s){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},d665:function(t,s,i){},ec7f:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"music-list"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"detail-header",style:t.opacityStyle},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}})]),i("scroll",{ref:"scroll",staticClass:"song-scroll",attrs:{list:t.songs,probeType:t.probeType,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[i("div",[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"}),i("span",{staticClass:"title"},[t._v(t._s(t.title))])]),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle}),i("div",{staticClass:"song-list"},[i("div",{staticClass:"text"},[i("p",{on:{click:t.random}},[i("span",{staticClass:"icon-play"}),t._v("随机播放全部")]),i("p",{on:{click:t.toggleFavorite}},[i("span",[i("i",{class:t.getFavoriteIcon()})]),i("span",[t._v(t._s(this.$store.state.value))])])]),i("MusicItem",{attrs:{songs:t.songs}})],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:void 0==t.songs||0==t.songs.length,expression:"songs == undefined || songs.length ==0"}],staticClass:"loading-container"},[i("loading")],1)],1)},n=[],o=i("3ce5"),c=i("b9d7"),a=i("439f"),r=i("510f"),A={mixins:[r["b"],r["a"]],components:{Scroll:o["a"],loading:c["a"],MusicItem:a["a"]},props:["bgImage","title","songs"],data:function(){return{showTitle:!1,probeType:3,listenScroll:!0,scrollY:0,opacityStyle:{opacity:0}}},methods:{handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.scroll.$el.style.bottom=s,this.$refs.scroll.refresh()},back:function(){this.$router.back()},scroll:function(t){if(!(t.y>0))if(this.scrollY=Math.abs(t.y),this.scrollY>40){var s=this.scrollY/263;s=s>1?1:s,this.opacityStyle={opacity:s},this.showTitle=!0}else this.showTitle=!1},selectItem:function(t){this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)},random:function(){var t=Math.floor(Math.random()*this.songs.length);this.$store.commit("setMode",2),this.$store.commit("setCurrentIndex",t),this.$store.commit("setPlayList",this.songs),this.$store.commit("setSequenceList",this.songs),this.$store.commit("setFullScreen",!0)}},computed:{bgStyle:function(){return"background-image:url(".concat(this.bgImage,");")}}},l=A,u=(i("8325"),i("2877")),m=Object(u["a"])(l,e,n,!1,null,"2cd8410a",null);s["a"]=m.exports},f1ad:function(t,s,i){"use strict";var e=i("d665"),n=i.n(e);n.a}}]);
//# sourceMappingURL=chunk-dc5fb71c.779b8c18.js.map