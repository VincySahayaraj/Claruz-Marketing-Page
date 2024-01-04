(function(g){var window=this;'use strict';var pgb=function(a,b){a.Na("onAutonavCoundownStarted",b)},$5=function(a,b,c){g.Up(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.qg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.BL&&(b.lengthText?(e=b.lengthText||null,f=b.zv||null):b.lengthSeconds&&(e=g.YQ(b.lengthSeconds),f=g.YQ(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.zL(d).type;var l=b instanceof g.BL?b.isLivePlayback:null,m=b instanceof g.BL?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],u=[];n&&r.push(n);p&&(r.push(p),u.push(p));q&&u.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.fO("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Mo(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:u.join(" \u2022 "),autoplayAlternativeHeader:b.Hr};b instanceof g.AL&&(c.playlist_length=b.playlistLength);a.update(c)},a6=function(a){var b=a.T(),c=b.C;
g.T.call(this,{G:"a",N:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",
Ia:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"},{G:"div",N:"ytp-autonav-list-overlay",W:[{G:"div",N:"ytp-autonav-mix-text",qa:"Mix"},{G:"div",N:"ytp-autonav-mix-icon"}]}]},{G:"div",Ia:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.F=a;this.suggestion=
null;this.j=c;this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress)},b6=function(a,b){b=void 0===b?!1:b;
g.T.call(this,{G:"div",N:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.T({G:"div",N:"ytp-autonav-endscreen-countdown-container"});g.D(this,this.container);this.container.Ea(this.element);b=a.T();var d=b.C;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.T({G:"div",N:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",N:"ytp-autonav-endscreen-upnext-header"},{G:"div",N:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{G:"a",N:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},W:[{G:"div",Ia:e,X:{style:"{{background}}"},W:[{G:"div",
X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",Ia:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"}]},{G:"div",N:"ytp-autonav-endscreen-video-info",W:[{G:"div",N:"ytp-autonav-endscreen-premium-badge"},{G:"div",N:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{G:"div",N:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{G:"div",N:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},{G:"div",
N:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.D(this,this.j);this.j.Ea(this.container.element);d||this.S(this.j.Da("ytp-autonav-endscreen-link-container"),"click",this.yQ);this.F.qb(this.container.element,this,115127);this.F.qb(this.j.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.T({G:"div",N:"ytp-autonav-overlay"});g.D(this,this.overlay);this.overlay.Ea(this.container.element);this.u=new g.T({G:"div",N:"ytp-autonav-endscreen-button-container"});
g.D(this,this.u);this.u.Ea(this.container.element);this.cancelButton=new g.T({G:"button",Ia:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel autoplay"},qa:"Cancel"});g.D(this,this.cancelButton);this.cancelButton.Ea(this.u.element);this.cancelButton.Qa("click",this.OZ,this);this.F.qb(this.cancelButton.element,this,115129);this.playButton=new g.T({G:"a",Ia:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},qa:"Play Now"});g.D(this,this.playButton);this.playButton.Ea(this.u.element);this.playButton.Qa("click",this.yQ,this);this.F.qb(this.playButton.element,this,115130);this.C=new g.Ip(function(){qgb(c)},500);
g.D(this,this.C);this.xQ();this.S(a,"autonavvisibility",this.xQ);this.F.K("web_autonav_color_transition")&&(this.S(a,"autonavchange",this.NZ),this.S(a,"onAutonavCoundownStarted",this.t5))},c6=function(a){var b=a.F.Dk(!0,a.F.isFullscreen());
g.Up(a.container.element,"ytp-autonav-endscreen-small-mode",a.lh(b));g.Up(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.eI);g.Up(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Qf());g.Up(a.F.getRootNode(),"countdown-running",a.Jk());g.Up(a.container.element,"ytp-player-content",a.F.Qf());g.Qm(a.overlay.element,{width:b.width+"px"});if(!a.Jk()){a.F.Qf()?rgb(a,Math.round(sgb(a)/1E3)):rgb(a);b=!!a.suggestion&&!!a.suggestion.Hr;var c=a.F.Qf()||!b;
g.Up(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Up(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.VP(a.u,a.F.Qf());g.Up(a.element,"ytp-enable-w2w-color-transitions",tgb(a))}},qgb=function(a){var b=sgb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);rgb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Jk()?a.select(!0):a.Jk()&&a.C.start()},sgb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.OI;return-1===a||void 0===a?8E3:a}return 0<=a.F.gs()?a.F.gs():g.eJ(a.F.T().experiments,"autoplay_time")||1E4},tgb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},rgb=function(a,b){b=void 0===b?-1:b;
a=a.j.Da("ytp-autonav-endscreen-upnext-header");g.sf(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.nf("Up next in $SECONDS".slice(0,d)));var e=g.mf("span");g.Op(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.xf(e,b);a.appendChild(e);a.appendChild(g.nf("Up next in $SECONDS".slice(d+c.length)));return}}g.xf(a,"Up next")},d6=function(a,b){g.T.call(this,{G:"div",
Ia:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},e6=function(a){g.T.call(this,{G:"div",
Ia:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",N:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-upnext-top",W:[{G:"span",N:"ytp-upnext-header",qa:"Up Next"},{G:"span",N:"ytp-upnext-title",qa:"{{title}}"},{G:"span",N:"ytp-upnext-author",qa:"{{author}}"}]},{G:"a",N:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},W:[{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
W:[{G:"circle",N:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",N:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",N:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",N:"ytp-upnext-bottom",W:[{G:"span",N:"ytp-upnext-cancel"},{G:"span",N:"ytp-upnext-paused",
qa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Da("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Ip(this.kF,5E3,this);this.u=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.T({G:"button",Ia:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel autoplay"},qa:"Cancel"});g.D(this,this.cancelButton);this.cancelButton.Qa("click",this.PZ,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.qb(this.cancelButton.element,
this,115129);g.D(this,this.C);this.api.qb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.S(b,"click",this.QZ);this.api.qb(b,this,115130);this.zQ();this.S(a,"autonavvisibility",this.zQ);this.S(a,"mdxnowautoplaying",this.g6);this.S(a,"mdxautoplaycanceled",this.h6);g.Up(this.element,"ytp-upnext-mobile",this.api.T().u)},ugb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.OI;return-1===a||void 0===a?8E3:a}return 0<=a.api.gs()?a.api.gs():g.eJ(a.api.T().experiments,"autoplay_time")||1E4},vgb=function(a,b){b=ugb(a,b);
var c=Math,d=c.min;var e=(0,g.M)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Jk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Jk()&&a.j.start()},f6=function(a){d6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.T({G:"div",N:"ytp-suggestion-panel",W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"More videos"}]});this.J=new g.T({G:"div",N:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new b6(this.player);g.D(this,this.u);this.u.Ea(this.element);a.getVideoData().yf?this.j=this.u:(this.j=new e6(a),g.ES(this.player,this.j.element,4),g.D(this,this.j));this.overlay=new g.T({G:"div",
N:"ytp-autonav-overlay-cancelled-state"});g.D(this,this.overlay);this.overlay.Ea(this.element);this.C=new g.aI(this);g.D(this,this.C);g.D(this,this.table);this.table.Ea(this.element);this.table.show();g.D(this,this.J);this.J.Ea(this.table.element);this.hide()},g6=function(a){var b=a.Qf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},h6=function(a,b){g.T.call(this,{G:"button",
Ia:["ytp-watch-on-youtube-button","ytp-button"],qa:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.K("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.pd)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.K(a.watchOnYoutubeButton,g.BKa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.Fg(this.element,this),this.F.Rg(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"Watch again on YouTube";d=156915;break;case 2:c="Continue watching on YouTube";d=156942;break;default:c="Continue watching on YouTube",d=156942}this.update({content:c});this.F.qb(this.element,this,d)}2===this.buttonType&&g.Qp(this.element,"ytp-continue-watching-button");this.Qa("click",this.onClick);g.VP(this,!0)},i6=function(a,b){d6.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.qb(this.element,this,156943);this.watchButton=new h6(a,2);g.D(this,this.watchButton);this.watchButton.Ea(this.element);this.hide()},wgb=function(a){d6.call(this,a,"subscribecard-endscreen");
this.j=new g.T({G:"div",N:"ytp-subscribe-card",W:[{G:"img",N:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",N:"ytp-subscribe-card-right",W:[{G:"div",N:"ytp-author-name",qa:"{{author}}"},{G:"div",N:"html5-subscribe-button-container"}]}]});g.D(this,this.j);this.j.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.$T("Subscribe",null,"Unsubscribe",null,!0,!1,b.fk,b.subscribed,"trailer-endscreen",null,null,a);g.D(this,this.subscribeButton);this.subscribeButton.Ea(this.j.Da("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.La);this.La();this.hide()},j6=function(a){var b=a.T(),c=g.dI||g.$J?{style:"will-change: opacity"}:void 0,d=b.C,e=["ytp-videowall-still"];
b.u&&e.push("ytp-videowall-show-text");g.T.call(this,{G:"a",Ia:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",N:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-info-bg",W:[{G:"span",N:"ytp-videowall-still-info-content",X:c,W:[{G:"span",N:"ytp-videowall-still-info-title",qa:"{{title}}"},
{G:"span",N:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{G:"span",N:"ytp-videowall-still-info-live",qa:"Live"},{G:"span",N:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",N:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",qa:"{{playlist_length}}"},")"]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",N:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.aI(this);g.D(this,this.j);this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress);this.j.S(a,"videodatachange",this.onVideoDataChange);a.Fg(this.element,this);this.onVideoDataChange()},k6=function(a){d6.call(this,a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.V=null;this.u=new g.aI(this);g.D(this,this.u);this.Y=a.K("web_rounded_thumbnails");this.I=new g.Ip(function(){g.Qp(b.element,"ytp-show-tiles")},0);
g.D(this,this.I);var c=new g.T({G:"button",Ia:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},W:[g.aQ()]});g.D(this,c);c.Ea(this.element);c.Qa("click",this.UZ,this);this.table=new g.SP({G:"div",N:"ytp-endscreen-content"});g.D(this,this.table);this.table.Ea(this.element);c=new g.T({G:"button",Ia:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},W:[g.bQ()]});g.D(this,c);c.Ea(this.element);c.Qa("click",this.TZ,this);a.getVideoData().yf?this.j=new b6(a,!0):this.j=new e6(a);
g.D(this,this.j);g.ES(this.player,this.j.element,4);a.qb(this.element,this,158789);this.hide()},l6=function(a){return g.FS(a.player)&&a.dB()&&!a.C},m6=function(a){var b=a.Qf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},n6=function(a){d6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new h6(a,1);g.D(this,this.watchButton);this.watchButton.Ea(this.element);g.$7a(a)&&(this.j=new g.$2(a,g.iS(a)),g.D(this,this.j),this.u=new g.T({G:"div",Ia:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.D(this,this.u),this.j.Ea(this.u.element),this.u.Ea(this.element));a.qb(this.element,this,156914);this.hide()},Agb=function(a){g.oT.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.aI(this);g.D(this,this.listeners);var c=a.T(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.tz(g.sK(c))&&d&&!g.BS(a))this.u=!0,this.endScreen=new i6(a,g.iS(a));else{var e;(c.K("shorts_mode_to_player_api")?a.Sb():null==(e=g.iS(a))?0:e.Sb())?this.endScreen=new n6(a):xgb(a)?(this.C=!0,ygb(this),this.j?this.endScreen=new f6(a):this.endScreen=new k6(a)):c.fh?this.endScreen=new wgb(a):this.endScreen=new d6(a)}g.D(this,this.endScreen);
g.ES(a,this.endScreen.element,4);zgb(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.YD("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.S(a,g.ZD("endscreen"),function(f){b.onCueRangeExit(f)})},ygb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.ql&&a.B===b.yf)return!1;a.j=b.ql;a.B=b.yf;return!0},xgb=function(a){a=a.T();
return a.Dd&&!a.fh},zgb=function(a){a.player.Jf("endscreen");
var b=a.player.getVideoData();b=new g.WD(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.WD(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Be([b,c])};
g.ZV.prototype.Qz=g.ca(36,function(a){this.fO!==a&&(this.fO=a,this.ll())});
g.CU.prototype.Xq=g.ca(35,function(a){this.u!==a&&(this.u=a,this.La())});
g.ZV.prototype.Xq=g.ca(34,function(a){this.shareButton&&this.shareButton.Xq(a)});
g.yU.prototype.Wq=g.ca(33,function(a){this.u!==a&&(this.u=a,this.La())});
g.ZV.prototype.Wq=g.ca(32,function(a){this.overflowButton&&this.overflowButton.Wq(a)});
g.RT.prototype.TD=g.ca(31,function(a){this.gO!==a&&(this.gO=a,this.zp())});
g.rS.prototype.gs=g.ca(5,function(){return this.app.gs()});
g.DZ.prototype.gs=g.ca(4,function(){return this.getVideoData().PR});g.w(a6,g.T);a6.prototype.select=function(){this.F.Nn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.yB||void 0)&&this.F.ob(this.element)};
a6.prototype.onClick=function(a){g.HT(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
a6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.xO(a)||(this.select(),g.yO(a))}};g.w(b6,g.T);g.k=b6.prototype;g.k.CE=function(a){this.suggestion!==a&&(this.suggestion=a,$5(this.j,a),this.playButton.updateValue("url",this.suggestion.Mo()),c6(this))};
g.k.Jk=function(){return 0<this.B};
g.k.Yz=function(){this.Jk()||(this.B=Date.now(),qgb(this),pgb(this.F,sgb(this)),g.Up(this.F.getRootNode(),"countdown-running",this.Jk()))};
g.k.Pv=function(){this.gr();qgb(this);var a=this.j.Da("ytp-autonav-endscreen-upnext-header");a&&g.xf(a,"Up next")};
g.k.gr=function(){this.Jk()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.gr()};
g.k.yQ=function(a){g.HT(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.ob(this.playButton.element):a.currentTarget===this.j.Da("ytp-autonav-endscreen-link-container")&&(a=this.j.Da("ytp-autonav-endscreen-link-container"),this.F.Ua(a,!0),this.F.ob(a)),this.select())};
g.k.OZ=function(){this.F.ob(this.cancelButton.element);g.vS(this.F,!0);this.D&&this.F.Na("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.T0)?void 0:c.command};
g.k.t5=function(a){if(tgb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.iR(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.iR(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.iR(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.iR(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.iR(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.iR(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Up(this.element,"ytp-w2w-animate",!0)}};
g.k.NZ=function(a){this.F.K("web_autonav_color_transition")&&2!==a&&g.Up(this.element,"ytp-w2w-animate",!1)};
g.k.xQ=function(){var a=this.F.Qf();this.I&&this.vb!==a&&g.VP(this,a);c6(this);this.F.Ua(this.container.element,a);this.F.Ua(this.cancelButton.element,a);this.F.Ua(this.j.Da("ytp-autonav-endscreen-link-container"),a);this.F.Ua(this.playButton.element,a)};
g.k.lh=function(a){return 400>a.width||459>a.height};g.w(d6,g.T);g.k=d6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.dB=function(){return!1};
g.k.Qf=function(){return!1};
g.k.SU=function(){return!1};g.w(e6,g.T);g.k=e6.prototype;g.k.kF=function(){this.notification&&(this.C.stop(),this.Hc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.CE=function(a){this.suggestion=a;$5(this,a,"hqdefault.jpg")};
g.k.zQ=function(){g.VP(this,this.api.Qf());this.api.Ua(this.element,this.api.Qf());this.api.Ua(this.Da("ytp-upnext-autoplay-icon"),this.api.Qf());this.cancelButton&&this.api.Ua(this.cancelButton.element,this.api.Qf())};
g.k.p6=function(){window.focus();this.kF()};
g.k.Yz=function(a){var b=this;this.Jk()||(g.hC("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.M)(),this.j=new g.Ip(function(){vgb(b,a)},25),vgb(this,a),pgb(this.api,ugb(this,a)));
g.Sp(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.Jk=function(){return!!this.j};
g.k.Pv=function(){this.gr();this.u=(0,g.M)();vgb(this);g.Qp(this.element,"ytp-upnext-autoplay-paused")};
g.k.gr=function(){this.Jk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.T().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.kF(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.qg()}),this.B=this.S(this.notification,"click",this.p6),this.C.start())}this.gr();this.api.nextVideo(!1,a)};
g.k.QZ=function(a){!g.wf(this.cancelButton.element,g.vO(a))&&g.HT(a,this.api)&&(this.api.Qf()&&this.api.ob(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.PZ=function(){this.api.Qf()&&this.cancelButton&&this.api.ob(this.cancelButton.element);g.vS(this.api,!0)};
g.k.g6=function(a){this.api.getPresentingPlayerType();this.show();this.Yz(a)};
g.k.h6=function(){this.api.getPresentingPlayerType();this.gr();this.hide()};
g.k.oa=function(){this.gr();this.kF();g.T.prototype.oa.call(this)};g.w(f6,d6);g.k=f6.prototype;g.k.create=function(){d6.prototype.create.call(this);this.C.S(this.player,"appresize",this.EA);this.C.S(this.player,"onVideoAreaChange",this.EA);this.C.S(this.player,"videodatachange",this.onVideoDataChange);this.C.S(this.player,"autonavchange",this.AQ);this.C.S(this.player,"autonavcancel",this.RZ);this.onVideoDataChange()};
g.k.show=function(){d6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.vS(this.player,!1);g.FS(this.player)&&this.dB()&&!this.B?(g6(this),2===this.videoData.autonavState?this.player.T().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Yz():3===this.videoData.autonavState&&this.j.Pv()):(g.vS(this.player,!0),g6(this));this.EA()};
g.k.hide=function(){d6.prototype.hide.call(this);this.j.Pv();g6(this)};
g.k.EA=function(){var a=this.player.Dk(!0,this.player.isFullscreen());g6(this);c6(this.u);g.Up(this.element,"ytp-autonav-cancelled-small-mode",this.lh(a));g.Up(this.element,"ytp-autonav-cancelled-tiny-mode",this.wG(a));g.Up(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Qm(this.overlay.element,{width:a.width+"px"});if(!this.D)for(a=0;a<this.videos.length;a++)g.Up(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.K("web_player_autonav_empty_suggestions_fix")){var b=g.lM(this.videoData);b&&(this.j.CE(b),this.j!==this.u&&this.u.CE(b))}if(a&&a.length)for(b=0;b<Bgb.length;++b){var c=Bgb[b];if(a&&a[c]){this.videos[b]=new a6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,$5(d,c));g.D(this,this.videos[b]);this.videos[b].Ea(this.J.element)}}this.EA()}};
g.k.AQ=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.gr(),this.vb&&this.EA()):(this.I=!0,this.Qf()&&(2===a?this.j.Yz():3===a&&this.j.Pv()))};
g.k.RZ=function(a){a?this.AQ(1):(this.B=null,this.I=!1)};
g.k.dB=function(){return 1!==this.videoData.autonavState};
g.k.lh=function(a){return(910>a.width||459>a.height)&&!this.wG(a)&&!(400>=a.width||360>=a.height)};
g.k.wG=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Qf=function(){return this.vb&&g.FS(this.player)&&this.dB()&&!this.B};
var Bgb=[1,3,2,4];g.w(h6,g.T);g.k=h6.prototype;g.k.onClick=function(a){this.F.K("web_player_log_click_before_generating_ve_conversion_params")&&this.F.ob(this.element);this.j?this.F.Na("innertubeCommand",this.j.onTap):g.IT(this.getVideoUrl(),this.F,a);this.F.K("web_player_log_click_before_generating_ve_conversion_params")||this.F.ob(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.T();if(g.bK(b)||g.kK(b)){var c={};b.ya&&g.bK(b)&&g.$R(c,b.loaderUrl);g.bK(b)&&g.gS(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.ZR(c,b);a=g.qj(a,c)}return a};
g.k.Ua=function(){this.F.Ua(this.element,this.vb&&this.xa)};
g.k.show=function(){g.T.prototype.show.call(this);this.Ua()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.Ua()};
g.k.kc=function(a){g.T.prototype.kc.call(this,a);this.Ua()};g.w(i6,d6);i6.prototype.show=function(){3!==this.player.getPlayerState()&&(d6.prototype.show.call(this),this.j.Qz(!0),this.j.Xq(!0),this.F.T().hm||this.j.Wq(!0),this.F.Ua(this.element,!0),this.watchButton.kc(!0))};
i6.prototype.hide=function(){d6.prototype.hide.call(this);this.j.Qz(!1);this.j.Xq(!1);this.j.Wq(!1);this.F.Ua(this.element,!1);this.watchButton.kc(!1)};g.w(wgb,d6);wgb.prototype.La=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.fk;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.w(j6,g.T);j6.prototype.select=function(){this.api.Nn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.yB||void 0)&&this.api.ob(this.element)};
j6.prototype.onClick=function(a){g.HT(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
j6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.xO(a)||(this.select(),g.yO(a))}};
j6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.T();this.u=a.D?!1:b.C};g.w(k6,d6);g.k=k6.prototype;g.k.create=function(){d6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Gp();this.u.S(this.player,"appresize",this.Gp);this.u.S(this.player,"onVideoAreaChange",this.Gp);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.u.S(this.player,"autonavchange",this.gJ);this.u.S(this.player,"autonavcancel",this.SZ);a=this.videoData.autonavState;a!==this.V&&this.gJ(a);this.u.S(this.element,"transitionend",this.C7)};
g.k.destroy=function(){g.ZC(this.u);g.Za(this.stills);this.stills=[];d6.prototype.destroy.call(this);g.Sp(this.element,"ytp-show-tiles");this.I.stop();this.V=this.videoData.autonavState};
g.k.dB=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.vb;d6.prototype.show.call(this);g.Sp(this.element,"ytp-show-tiles");this.player.T().u?g.Kp(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.vS(this.player,!1);l6(this)?(m6(this),2===this.videoData.autonavState?this.player.T().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Yz():3===this.videoData.autonavState&&this.j.Pv()):(g.vS(this.player,!0),m6(this));a!==this.vb&&this.player.Ua(this.element,
!0)};
g.k.hide=function(){var a=this.vb;d6.prototype.hide.call(this);this.j.Pv();m6(this);a!==this.vb&&this.player.Ua(this.element,!1)};
g.k.C7=function(a){g.vO(a)===this.element&&this.Gp()};
g.k.Gp=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.lM(d)];if(e.length){g.Qp(this.element,"ytp-endscreen-paginate");var f=this.F.Dk(!0,this.F.isFullscreen());if(a=g.iS(this.F))a=a.vg()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,u=a<=l-2&&p>=r*n,x=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&x)p-=q*n,b+=2;else if(u)p-=r*n,a+=2;else if(x)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.$m(f,n,p);g.Qm(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.CE(g.lM(this.videoData));this.j instanceof
b6&&c6(this.j);g.Up(this.element,"ytp-endscreen-takeover",l6(this));m6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,u=0,d&&l>=a-2&&m>=b-2?u=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(u=2):u=2),q=g.Ae(q+this.B,c),0!==u){r=this.stills[h];r||(r=new j6(this.player),this.stills[h]=r,f.appendChild(r.element));x=Math.floor(p*m/b);var z=Math.floor(n*l/a),B=Math.floor(p*(m+u)/b)-x-4,F=Math.floor(n*(l+u)/a)-z-4;g.Wm(r.element,z,x);g.$m(r.element,F,B);g.Qm(r.element,"transitionDelay",
(m+l)/20+"s");g.Up(r.element,"ytp-videowall-still-mini",1===u);g.Up(r.element,"ytp-videowall-still-large",2<u);this.Y&&(u=Math.max(F,B),g.Up(r.element,"ytp-videowall-still-round-large",256<=u),g.Up(r.element,"ytp-videowall-still-round-medium",96<u&&256>u),g.Up(r.element,"ytp-videowall-still-round-small",96>=u));q=e[q];r.suggestion!==q&&(r.suggestion=q,u=r.api.T(),x=g.Pp(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",$5(r,q,x),g.bK(u)&&(x=q.Mo(),z={},u.ya&&g.$R(z,u.loaderUrl),
g.gS(r.api,"addEmbedsConversionTrackingParams",[z]),x=g.qj(x,g.ZR(z,"emb_rel_end")),r.updateValue("url",x)),(q=(q=q.sessionData)&&q.itct)&&r.api.Rg(r.element,q));h++}f.ariaBusy="false";g.Up(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.uf(a.element),g.Ya(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Gp())};
g.k.TZ=function(){this.B+=this.stills.length;this.Gp()};
g.k.UZ=function(){this.B-=this.stills.length;this.Gp()};
g.k.SU=function(){return this.j.Jk()};
g.k.gJ=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.gr(),this.vb&&this.Gp()):(this.D=!0,this.vb&&l6(this)&&(2===a?this.j.Yz():3===a&&this.j.Pv()))};
g.k.SZ=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Ua(this.stills[a].element,!0);this.gJ(1)}else this.C=null,this.D=!1;this.Gp()};
g.k.Qf=function(){return this.vb&&l6(this)};g.w(n6,d6);n6.prototype.show=function(){if(3!==this.player.getPlayerState()){d6.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.Up(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.iS(this.player))||c.TD(!0);this.player.Ua(this.element,!0);this.watchButton.kc(!0)}};
n6.prototype.hide=function(){d6.prototype.hide.call(this);var a;null==(a=g.iS(this.player))||a.TD(!1);this.player.Ua(this.element,!1);this.watchButton.kc(!1)};g.w(Agb,g.oT);g.k=Agb.prototype;g.k.mw=function(){var a;if((this.player.T().K("shorts_mode_to_player_api")?this.player.Sb():null==(a=g.iS(this.player))?0:a.Sb())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.lM(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!xgb(this.player)||c;c=a.jj||g.kK(a.B);var d=this.player.JB();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Qf=function(){return this.endScreen.Qf()};
g.k.a4=function(){return this.Qf()?this.endScreen.SU():!1};
g.k.oa=function(){this.player.Jf("endscreen");g.oT.prototype.oa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.yb().hf.get("heartbeat"),d=g.lM(a);!d||b.videoId!==d.videoId||a.UX?(this.player.Nn(b.videoId,void 0,void 0,!0,!0,b),c&&c.CG("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.oT.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.oT.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.mw()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){zgb(this);this.C&&ygb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new f6(this.player):this.endScreen=new k6(this.player),g.D(this,this.endScreen),g.ES(this.player,this.endScreen.element,4))};g.nT("endscreen",Agb);})(_yt_player);