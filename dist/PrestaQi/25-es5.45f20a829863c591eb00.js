function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,a,e){return a&&_defineProperties(t.prototype,a),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"f+RC":function(t,a,e){"use strict";e.r(a),e.d(a,"RequestAdvanceModule",(function(){return $t}));var n=e("ofXK"),i=e("4TcP"),c=e("tyNb"),o=e("wd/R"),r=e("Xxza"),d=e("LcAk"),l=e("cp0P"),s=e("xm3d"),b=e("fXoL"),u=e("0DX0"),m=e("J0hL"),f=e("Xlwt"),p=e("TY1r"),h=e("G/Ji"),g=e("XiUz"),v=e("znSr"),y=e("3uU/");function R(t,a){1&t&&(b.Sb(0,"div",22),b.Nb(1,"mat-spinner",23),b.Rb()),2&t&&(b.zb(1),b.kc("diameter",30))}function x(t,a){if(1&t&&(b.Qb(0),b.Sb(1,"div",24),b.Sb(2,"div",14),b.Jc(3),b.Rb(),b.Rb(),b.Nb(4,"mat-divider"),b.Pb()),2&t){var e=a.$implicit;b.zb(3),b.Kc(e)}}var k,S=function(){return{"font-family":"MontserratBold"}},w=((k=function(){function t(a,e,n){var i=this;_classCallCheck(this,t),this.dialogRef=a,this.data=e,this.snackBar=n,this.loading=!0,this.amount=0,this.bank="",this.account="**** **** **** 0000",this.totalDiscount=0,this.dateDetails=[],this.dayForPayment=0,this.comission=0,this.totalWithhold=0,this.totalWeek=0,this.amount=this.data.amount,Object(l.a)([this.data.service.getInfoBank(),this.data.service.preAdvance(this.data.paysheet,this.amount)]).subscribe((function(t){i.bank=t[0].data.user.institution_Name,i.account="**** **** **** "+t[0].data.user.account_Number.slice(-4),i.totalDiscount=t[1].data.advance.total_Withhold,i.dateDetails=t[1].data.details.map((function(t){return o(t.date_Payment).format("DD/MM/yyyy")})),i.dayForPayment=t[1].data.advance.day_For_Payment,i.comission=t[1].data.advance.comission,i.totalWithhold=t[1].data.advance.total_Withhold,i.loading=!1,t[1].data.details.length>0&&(i.totalWeek=t[1].data.details[0].total_Payment)}),(function(t){i.snackBar.openFromComponent(s.a,{data:{message:"ERROR",subMessage:t.message,type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:3500}),i.loading=!1,i.dialogRef.close(!1)}))}return _createClass(t,[{key:"confirm",value:function(){this.dialogRef.close({dayForPayment:this.dayForPayment,comission:this.comission,totalWithhold:this.totalWithhold,dates:this.dateDetails,totalWeek:this.totalWeek})}}]),t}()).\u0275fac=function(t){return new(t||k)(b.Mb(d.h),b.Mb(d.a),b.Mb(u.b))},k.\u0275cmp=b.Gb({type:k,selectors:[["app-confirm-advance"]],decls:50,vars:23,consts:[[1,"dialog-content-wrapper"],["matDialogTitle","",1,"m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title",3,"ngStyle"],["mat-button","",1,"toggle-button-navbar","mat-icon-button",3,"mat-dialog-close"],["mat-dialog-content","",1,"pl-25","pr-25","m-0"],["class","cnt-loading",4,"ngIf"],[1,"content-amount"],[1,"label",3,"ngStyle"],[1,"amount",3,"ngStyle"],[1,"line"],[1,"cnt-info"],["fxLayout","row","fxLayoutAlign","space-between center"],["fxLayout","column",1,"label"],["fxLayout","column",1,"value"],[1,"ctn-details"],[4,"ngFor","ngForOf"],["mat-dialog-actions","","fxLayoutAlign","space-around center",1,"m-0"],[1,"content-btn-left"],["mat-button","",3,"disabled","click"],[1,"content-btn-right"],["mat-button","",3,"mat-dialog-close"],[1,"cnt-loading"],[3,"diameter"],["fxLayout","row","fxLayoutAlign","center center"]],template:function(t,a){1&t&&(b.Sb(0,"div",0),b.Sb(1,"mat-toolbar",1),b.Sb(2,"div",2),b.Sb(3,"span",3),b.Jc(4,"Confirmar Adelanto"),b.Rb(),b.Sb(5,"button",4),b.Sb(6,"mat-icon"),b.Jc(7,"close"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(8,"div",5),b.Hc(9,R,2,1,"div",6),b.Sb(10,"div",7),b.Sb(11,"p",8),b.Jc(12,"Cantidad Solicitada"),b.Rb(),b.Sb(13,"p",9),b.Jc(14),b.fc(15,"currency"),b.Rb(),b.Nb(16,"span",10),b.Rb(),b.Sb(17,"div",11),b.Sb(18,"div",12),b.Sb(19,"div",13),b.Jc(20,"Banco"),b.Rb(),b.Sb(21,"div",14),b.Jc(22),b.fc(23,"uppercase"),b.Rb(),b.Rb(),b.Nb(24,"mat-divider"),b.Sb(25,"div",12),b.Sb(26,"div",13),b.Jc(27,"Cuenta"),b.Rb(),b.Sb(28,"div",14),b.Jc(29),b.Rb(),b.Rb(),b.Nb(30,"mat-divider"),b.Sb(31,"div",12),b.Sb(32,"div",13),b.Jc(33,"Total a descontar"),b.Rb(),b.Sb(34,"div",14),b.Jc(35),b.fc(36,"currency"),b.Rb(),b.Rb(),b.Nb(37,"mat-divider"),b.Nb(38,"br"),b.Rb(),b.Sb(39,"div",15),b.Sb(40,"p"),b.Jc(41,"Fecha de cobro"),b.Rb(),b.Hc(42,x,5,1,"ng-container",16),b.Rb(),b.Rb(),b.Sb(43,"div",17),b.Sb(44,"div",18),b.Sb(45,"button",19),b.ac("click",(function(){return a.confirm()})),b.Jc(46,"ACEPTAR"),b.Rb(),b.Rb(),b.Sb(47,"div",20),b.Sb(48,"button",21),b.Jc(49,"RECHAZAR"),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.zb(3),b.kc("ngStyle",b.nc(20,S)),b.zb(2),b.kc("mat-dialog-close",!1),b.zb(4),b.kc("ngIf",a.loading),b.zb(2),b.kc("ngStyle",b.nc(21,S)),b.zb(2),b.kc("ngStyle",b.nc(22,S)),b.zb(1),b.Kc(b.gc(15,14,a.amount)),b.zb(8),b.Kc(b.gc(23,16,a.bank)),b.zb(7),b.Kc(a.account),b.zb(6),b.Kc(b.gc(36,18,a.totalDiscount)),b.zb(7),b.kc("ngForOf",a.dateDetails),b.zb(3),b.Db("spinner",a.loading),b.kc("disabled",a.loading),b.zb(3),b.kc("mat-dialog-close",!1))},directives:[m.a,d.i,g.b,g.f,g.e,n.w,v.d,f.b,d.d,p.a,d.f,n.t,y.a,n.s,d.c,h.c],pipes:[n.d,n.G],styles:["app-confirm-advance .content-amount{background-color:#eff4ff;padding:12px 24px;border:2px solid #dee3ed;border-radius:5px;margin-top:24px;margin-bottom:24px}app-confirm-advance .content-amount p{margin:0;text-align:center}app-confirm-advance .content-amount p.label{color:#8e91a2}app-confirm-advance .content-amount p.amount{font-size:30px;font-weight:700;color:#006}app-confirm-advance .cnt-info{min-width:300px}app-confirm-advance .cnt-info .label{padding:5px 0}app-confirm-advance .cnt-info .value{padding:5px 0;font-weight:700}app-confirm-advance .ctn-details{margin-bottom:24px}app-confirm-advance .ctn-details p{margin:0 0 24px;text-align:center}app-confirm-advance .ctn-details .value{padding:5px 0;font-weight:700}app-confirm-advance .content-btn-left{margin-bottom:12px}app-confirm-advance .content-btn-left button{background-color:#41434c;color:#fff}app-confirm-advance .content-btn-left button:disabled{color:#fff!important;opacity:.5}app-confirm-advance .content-btn-right{margin-bottom:12px}app-confirm-advance .mat-dialog-content{position:relative}app-confirm-advance .mat-dialog-content .cnt-loading{position:absolute;background-color:#fff;width:100%;height:100%;z-index:1;left:0;display:flex;justify-content:center;align-items:center}"],encapsulation:2}),k),P=e("3Pt+"),C=e("IRfi"),D=e("A2Vd"),z=e("GBlY");function J(t,a){1&t&&(b.Sb(0,"div",13),b.Nb(1,"mat-spinner",14),b.Rb()),2&t&&(b.zb(1),b.kc("diameter",30))}function W(t,a){if(1&t){var e=b.Tb();b.Qb(0),b.Nb(1,"mat-slider",15),b.Sb(2,"div",16),b.Sb(3,"span"),b.Jc(4,"$0"),b.Rb(),b.Sb(5,"span"),b.Jc(6),b.fc(7,"currency"),b.Rb(),b.Rb(),b.Sb(8,"div",17),b.Sb(9,"button",18),b.ac("click",(function(){return b.yc(e),b.ec().request()})),b.Jc(10,"SOLICITAR"),b.Rb(),b.Rb(),b.Pb()}if(2&t){var n=b.ec();b.zb(1),b.kc("max",n.maxAmount),b.zb(5),b.Kc(b.gc(7,3,n.maxAmount)),b.zb(3),b.kc("disabled",n.form.invalid||n.maxAmount<=1)}}var A,H=function(){return{"font-family":"MontserratBold"}},M=((A=function(){function t(a,e,n,i){var c=this;_classCallCheck(this,t),this.dialogRef=a,this.data=e,this.snackBar=n,this.formBuild=i,this.maxAmount=0,this.loading=!0,this.form=this.formBuild.group({amount:[{value:0,disabled:!1},P.F.min(1)]}),this.data.service.calculateAdvance(this.data.paysheet).subscribe((function(t){c.maxAmount=t,c.loading=!1}),(function(t){c.snackBar.openFromComponent(s.a,{data:{message:"ERROR",subMessage:t.message,type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:3500}),c.loading=!1,c.dialogRef.close(!1)}))}return _createClass(t,[{key:"request",value:function(){this.dialogRef.close({amount:this.form.get("amount").value})}}]),t}()).\u0275fac=function(t){return new(t||A)(b.Mb(d.h),b.Mb(d.a),b.Mb(u.b),b.Mb(P.f))},A.\u0275cmp=b.Gb({type:A,selectors:[["app-new-advance"]],decls:20,vars:7,consts:[[1,"dialog-content-wrapper"],["matDialogTitle","",1,"m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title",3,"ngStyle"],["mat-button","",1,"toggle-button-navbar","mat-icon-button",3,"mat-dialog-close"],["mat-dialog-content","",1,"pl-25","pr-25","m-0",3,"formGroup"],[1,"content-input"],["appearance","outline",2,"width","100%"],["matPrefix",""],["matInput","","disabled","true",3,"value"],["matSuffix",""],["fxLayout","row","class","mb-12","fxLayoutAlign","center center",4,"ngIf"],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"mb-12"],[3,"diameter"],["formControlName","amount","min","0","step","1000",2,"width","100%",3,"max"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-12"],["fxLayout","row","fxLayoutAlign","center center",1,"ctn-btn","mb-12"],["mat-button","",3,"disabled","click"]],template:function(t,a){1&t&&(b.Sb(0,"div",0),b.Sb(1,"mat-toolbar",1),b.Sb(2,"div",2),b.Sb(3,"span",3),b.Jc(4,"Pedir Paro"),b.Rb(),b.Sb(5,"button",4),b.Sb(6,"mat-icon"),b.Jc(7,"close"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(8,"div",5),b.Sb(9,"h2"),b.Jc(10,"\xbfCu\xe1nto dinero necesitas?"),b.Rb(),b.Sb(11,"div",6),b.Sb(12,"mat-form-field",7),b.Sb(13,"mat-icon",8),b.Jc(14,"attach_money"),b.Rb(),b.Nb(15,"input",9),b.Sb(16,"mat-icon",10),b.Jc(17,"keyboard"),b.Rb(),b.Rb(),b.Rb(),b.Hc(18,J,2,1,"div",11),b.Hc(19,W,11,5,"ng-container",12),b.Rb(),b.Rb()),2&t&&(b.zb(3),b.kc("ngStyle",b.nc(6,H)),b.zb(2),b.kc("mat-dialog-close",!1),b.zb(3),b.kc("formGroup",a.form),b.zb(7),b.kc("value",a.form.get("amount").value),b.zb(3),b.kc("ngIf",a.loading),b.zb(1),b.kc("ngIf",!a.loading))},directives:[m.a,d.i,g.b,g.f,g.e,n.w,v.d,f.b,d.d,p.a,d.f,P.s,P.j,C.b,C.h,D.b,C.i,n.t,h.c,z.a,P.r,P.i],pipes:[n.d],styles:[".mat-slider-horizontal .mat-slider-track-background,.mat-slider-horizontal .mat-slider-track-fill,.mat-slider-horizontal .mat-slider-track-wrapper,.mat-slider-horizontal .mat-slider-wrapper{height:5px!important}app-new-advance .content-input input{font-size:18px;font-weight:700;text-align:center}app-new-advance .ctn-btn button{border-radius:50px;background-color:#41434c;color:#fff}app-new-advance .ctn-btn button:disabled{color:#fff!important;opacity:.5}"],encapsulation:2}),A),_=e("7RFJ"),L=e("RL7/"),F=e("jhN1");function I(t,a){1&t&&(b.Qb(0),b.Nb(1,"mat-spinner",5),b.Pb()),2&t&&(b.zb(1),b.kc("diameter",30))}function T(t,a){if(1&t){var e=b.Tb();b.Qb(0),b.Sb(1,"button",6),b.ac("click",(function(){return b.yc(e),b.ec().accept()})),b.Jc(2,"ACEPTAR"),b.Rb(),b.Sb(3,"button",6),b.ac("click",(function(){return b.yc(e),b.ec().cancel()})),b.Jc(4,"RECHAZAR"),b.Rb(),b.Pb()}}var N,O=((N=function(){function t(a,e,n,i,c,o){_classCallCheck(this,t),this.dialogRef=a,this.data=e,this.snacBar=n,this.constant=i,this.auth=c,this.sanitizer=o,this.loading=!1,this.dialogRef.disableClose=!0}return _createClass(t,[{key:"accept",value:function(){var t=this;this.loading=!0,this.data.service.requestAdvance(this.data.advance.amount,this.data.paysheet).subscribe((function(a){t.loading=!1,a.success?(t.dialogRef.close(!0),t.snacBar.openFromComponent(s.a,{data:{message:"EXITOSO",subMessage:"Se ha realizado la solicitud correctamente.",type:"success"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:2500})):(t.dialogRef.close(!1),t.snacBar.openFromComponent(s.a,{data:{message:"ERROR",subMessage:a.message,type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:3500}))}),(function(a){t.loading=!1,t.dialogRef.close(!1),t.snacBar.openFromComponent(s.a,{data:{message:"ERROR",subMessage:"Ocurrio un error intentalo mas tarde.",type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:3500})}))}},{key:"cancel",value:function(){this.dialogRef.close(!1)}},{key:"urlCarta",get:function(){var t=localStorage.getItem("token"),a="&amount=".concat(this.data.advance.amount,"&days=").concat(this.data.advance.dayForPayment,"&commision=").concat(this.data.advance.comission,"&totalAmount=").concat(this.data.advance.totalWithhold,"&totalWeek=").concat(this.data.advance.totalWeek);return this.data.advance.dates.length>0&&(a="".concat(a,"&dates=").concat(this.data.advance.dates.join(","))),this.sanitizer.bypassSecurityTrustResourceUrl("".concat(this.constant.api,"Users/GetCartaMandato?token=").concat(t).concat(a))}}]),t}()).\u0275fac=function(t){return new(t||N)(b.Mb(d.h),b.Mb(d.a),b.Mb(u.b),b.Mb(_.a),b.Mb(L.a),b.Mb(F.b))},N.\u0275cmp=b.Gb({type:N,selectors:[["app-show-carta-mandato"]],decls:6,vars:3,consts:[[1,"dialog-content-wrapper"],["mat-dialog-content","",1,"pl-24","pr-24","m-0"],[1,"iframe-content",3,"src"],["mat-dialog-actions","","fxLayoutAlign","center center",1,"cnt-button"],[4,"ngIf"],[3,"diameter"],["mat-button","",1,"btn",3,"click"]],template:function(t,a){1&t&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Nb(2,"iframe",2),b.Rb(),b.Sb(3,"div",3),b.Hc(4,I,2,1,"ng-container",4),b.Hc(5,T,5,0,"ng-container",4),b.Rb(),b.Rb()),2&t&&(b.zb(2),b.kc("src",a.urlCarta,b.Ac),b.zb(2),b.kc("ngIf",a.loading),b.zb(1),b.kc("ngIf",!a.loading))},directives:[d.f,d.c,g.e,n.t,h.c,f.b],styles:["app-show-carta-mandato .dialog-content-wrapper .mat-dialog-content{max-height:none;background-image:url(loading.9a117e7790fe3298f22b.gif);background-repeat:no-repeat;background-position:50%}app-show-carta-mandato .dialog-content-wrapper .iframe-content{border:none;min-height:600px;min-width:450px}app-show-carta-mandato .dialog-content-wrapper .cnt-button{margin-bottom:12px;margin-top:12px}app-show-carta-mandato .dialog-content-wrapper .cnt-button .btn{background-color:#41434c;color:#fff;border-radius:20px}"],encapsulation:2}),N),Q=e("4/4Q"),E=e("+ti9"),q=e("R0Ic"),j=e("tmTa"),B=e("sCmA"),$=["cFolio"],Y=["cDate"],K=["cAmount"],G=["cDatePayment"],V=["cCommission"],X=["cInteres"],U=["cVat"],Z=["total"];function tt(t,a){1&t&&(b.Sb(0,"th",17,18),b.Jc(2," Folio "),b.Rb())}function at(t,a){if(1&t&&(b.Sb(0,"td",19),b.Jc(1),b.Rb()),2&t){var e=a.$implicit;b.zb(1),b.Lc(" ",e.id," ")}}function et(t,a){1&t&&(b.Sb(0,"th",17,20),b.Jc(2," Fecha de Solicitud "),b.Rb())}function nt(t,a){if(1&t&&(b.Sb(0,"td",19),b.Jc(1),b.fc(2,"date"),b.Rb()),2&t){var e=a.$implicit;b.zb(1),b.Lc(" ",b.hc(2,1,e.created_at,"dd/MM/yyyy")," ")}}function it(t,a){1&t&&(b.Sb(0,"th",17,21),b.Jc(2," Cantidad "),b.Rb())}function ct(t,a){if(1&t&&(b.Sb(0,"td",19),b.Jc(1),b.fc(2,"currency"),b.Rb()),2&t){var e=a.$implicit;b.zb(1),b.Lc(" ",b.gc(2,1,e.amount)," ")}}function ot(t,a){1&t&&(b.Sb(0,"th",17,22),b.Jc(2," Fecha de Cobro "),b.Rb())}function rt(t,a){1&t&&b.Nb(0,"td",19)}function dt(t,a){1&t&&(b.Sb(0,"th",17,23),b.Jc(2," Comisi\xf3n "),b.Rb())}function lt(t,a){if(1&t&&(b.Sb(0,"td",19),b.Jc(1),b.fc(2,"currency"),b.Rb()),2&t){var e=a.$implicit;b.zb(1),b.Lc(" ",b.gc(2,1,e.comission)," ")}}function st(t,a){1&t&&(b.Sb(0,"th",17,24),b.Jc(2," Inter\xe9s "),b.Rb())}function bt(t,a){1&t&&b.Nb(0,"td",19)}function ut(t,a){1&t&&(b.Sb(0,"th",17,25),b.Jc(2," IVA "),b.Rb())}function mt(t,a){1&t&&b.Nb(0,"td",19)}function ft(t,a){1&t&&(b.Sb(0,"th",17,26),b.Jc(2," Total a Pagar "),b.Rb())}function pt(t,a){if(1&t&&(b.Sb(0,"td",19),b.Jc(1),b.fc(2,"currency"),b.Rb()),2&t){var e=a.$implicit;b.zb(1),b.Lc(" ",b.gc(2,1,e.total_Withhold)," ")}}var ht=function(t){return{width:t}};function gt(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cFolioWidth+"px"))}}function vt(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cDateWidth+"px"))}}function yt(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cAmountWidth+"px"))}}function Rt(t,a){if(1&t&&(b.Sb(0,"del"),b.Jc(1),b.fc(2,"date"),b.Rb()),2&t){var e=b.ec().$implicit;b.zb(1),b.Kc(b.hc(2,1,e.detail.date_Payment,"dd/MM/yyyy"))}}function xt(t,a){if(1&t&&(b.Qb(0),b.Jc(1),b.fc(2,"date"),b.Pb()),2&t){var e=b.ec().$implicit;b.zb(1),b.Lc(" ",b.hc(2,1,e.detail.date_Payment,"dd/MM/yyyy")," ")}}var kt=function(t){return{width:t,"padding-left":"16px"}};function St(t,a){if(1&t&&(b.Sb(0,"td",27),b.Hc(1,Rt,3,4,"del",32),b.Hc(2,xt,3,4,"ng-container",32),b.Rb()),2&t){var e=a.$implicit,n=b.ec(2);b.kc("ngStyle",b.oc(3,kt,n.cDatePaymentWidth+"px")),b.zb(1),b.kc("ngIf",n.payed(e.detail.date_Payment)),b.zb(1),b.kc("ngIf",!n.payed(e.detail.date_Payment))}}function wt(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cCommissionWidth+"px"))}}function Pt(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cInteresWidth+"px"))}}function Ct(t,a){if(1&t&&b.Nb(0,"td",27),2&t){var e=b.ec(2);b.kc("ngStyle",b.oc(1,ht,e.cVatWith+"px"))}}function Dt(t,a){if(1&t&&(b.Sb(0,"del"),b.Jc(1),b.fc(2,"currency"),b.Rb()),2&t){var e=b.ec().$implicit;b.zb(1),b.Kc(b.gc(2,1,e.detail.total_Payment))}}function zt(t,a){if(1&t&&(b.Qb(0),b.Jc(1),b.fc(2,"currency"),b.Pb()),2&t){var e=b.ec().$implicit;b.zb(1),b.Lc(" ",b.gc(2,1,e.detail.total_Payment)," ")}}function Jt(t,a){if(1&t&&(b.Sb(0,"td",27),b.Hc(1,Dt,3,3,"del",32),b.Hc(2,zt,3,3,"ng-container",32),b.Rb()),2&t){var e=a.$implicit,n=b.ec(2);b.kc("ngStyle",b.oc(3,kt,n.cTotalWith+"px")),b.zb(1),b.kc("ngIf",n.payed(e.detail.date_Payment)),b.zb(1),b.kc("ngIf",!n.payed(e.detail.date_Payment))}}function Wt(t,a){1&t&&b.Nb(0,"tr",33)}var At=function(){return{padding:0}};function Ht(t,a){if(1&t&&(b.Sb(0,"td",27),b.Sb(1,"div",28),b.Sb(2,"div",29),b.Sb(3,"table",30),b.Qb(4,2),b.Hc(5,gt,1,3,"td",13),b.Pb(),b.Qb(6,5),b.Hc(7,vt,1,3,"td",13),b.Pb(),b.Qb(8,6),b.Hc(9,yt,1,3,"td",13),b.Pb(),b.Qb(10,7),b.Hc(11,St,3,5,"td",13),b.Pb(),b.Qb(12,8),b.Hc(13,wt,1,3,"td",13),b.Pb(),b.Qb(14,9),b.Hc(15,Pt,1,3,"td",13),b.Pb(),b.Qb(16,10),b.Hc(17,Ct,1,3,"td",13),b.Pb(),b.Qb(18,11),b.Hc(19,Jt,3,5,"td",13),b.Pb(),b.Hc(20,Wt,1,0,"tr",31),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t){var e=a.$implicit,n=b.ec();b.kc("ngStyle",b.nc(5,At)),b.Ab("colspan",n.columnsToDisplay.length),b.zb(1),b.kc("@detailExpand",e==n.expandedElement?"expanded":"collapsed"),b.zb(2),b.kc("dataSource",n.orderDetails(e.details)),b.zb(17),b.kc("matRowDefColumns",n.columnsToDisplay)}}function Mt(t,a){1&t&&b.Nb(0,"tr",34)}function _t(t,a){if(1&t){var e=b.Tb();b.Sb(0,"tr",35),b.ac("click",(function(){b.yc(e);var t=a.$implicit,n=b.ec();return n.expandedElement=n.expandedElement===t?null:t})),b.Rb()}if(2&t){var n=a.$implicit,i=b.ec();b.Db("expanded-row",i.expandedElement===n)}}function Lt(t,a){1&t&&b.Nb(0,"tr",36)}var Ft,It=function(){return["expandedDetail"]},Tt=((Ft=function(){function t(a,e){_classCallCheck(this,t),this.dialog=a,this.cdRef=e,this.dataSource=new j.o([]),this.columnsToDisplay=["folio","date","amount","date_payment","commission","interes","vat","total"],this.cFolioWidth=0,this.cDateWidth=0,this.cAmountWidth=0,this.cDatePaymentWidth=0,this.cCommissionWidth=0,this.cInteresWidth=0,this.cVatWith=0,this.cTotalWith=0,this.changePage=new b.n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;setTimeout((function(){t.updatedWidthColumns()}),500)}},{key:"changeTable",value:function(t){this.changePage.emit(t)}},{key:"orderDetails",value:function(t){return t.sort((function(t,a){return t.detail.date_Payment>a.detail.date_Payment?1:0}))}},{key:"updatedWidthColumns",value:function(){this.cFolioWidth=this.cFolio.nativeElement.clientWidth,this.cDateWidth=this.cDate.nativeElement.clientWidth,this.cAmountWidth=this.cAmount.nativeElement.clientWidth,this.cDatePaymentWidth=this.cDatePayment.nativeElement.clientWidth,this.cCommissionWidth=this.cCommission.nativeElement.clientWidth,this.cInteresWidth=this.cInteres.nativeElement.clientWidth,this.cVatWith=this.cVat.nativeElement.clientWidth,this.cTotalWith=this.cTotal.nativeElement.clientWidth,this.cdRef.detectChanges()}},{key:"payed",value:function(t){var a=o(t).weekday(),e=o(t);return 0===a&&(a=7),a<6?e=e.add(5-a,"days"):6===a?e=e.add(6,"days"):7===a&&(e=e.add(5,"days")),e<o()}},{key:"data",set:function(t){this.dataSource=new j.o(t)}}]),t}()).\u0275fac=function(t){return new(t||Ft)(b.Mb(d.b),b.Mb(b.h))},Ft.\u0275cmp=b.Gb({type:Ft,selectors:[["app-table-advance"]],viewQuery:function(t,a){var e;1&t&&(b.Oc($,!0),b.Oc(Y,!0),b.Oc(K,!0),b.Oc(G,!0),b.Oc(V,!0),b.Oc(X,!0),b.Oc(U,!0),b.Oc(Z,!0),b.Fc(B.a,!0)),2&t&&(b.tc(e=b.bc())&&(a.cFolio=e.first),b.tc(e=b.bc())&&(a.cDate=e.first),b.tc(e=b.bc())&&(a.cAmount=e.first),b.tc(e=b.bc())&&(a.cDatePayment=e.first),b.tc(e=b.bc())&&(a.cCommission=e.first),b.tc(e=b.bc())&&(a.cInteres=e.first),b.tc(e=b.bc())&&(a.cVat=e.first),b.tc(e=b.bc())&&(a.cTotal=e.first),b.tc(e=b.bc())&&(a.paginator=e.first))},inputs:{data:"data",totalRow:"totalRow"},outputs:{changePage:"changePage"},decls:31,vars:5,consts:[["mat-table","","multiTemplateDataRows","",3,"dataSource"],["table",""],["matColumnDef","folio"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","amount"],["matColumnDef","date_payment"],["matColumnDef","commission"],["matColumnDef","interes"],["matColumnDef","vat"],["matColumnDef","total"],["matColumnDef","expandedDetail"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","element-row",3,"expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["cFolio",""],["mat-cell",""],["cDate",""],["cAmount",""],["cDatePayment",""],["cCommission",""],["cInteres",""],["cVat",""],["total",""],["mat-cell","",3,"ngStyle"],[1,"element-detail"],[1,"element-description"],["mat-table","",1,"sub-table",3,"dataSource"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["mat-row",""],["mat-header-row",""],["mat-row","",1,"element-row",3,"click"],["mat-row","",1,"detail-row"]],template:function(t,a){1&t&&(b.Sb(0,"table",0,1),b.Qb(2,2),b.Hc(3,tt,3,0,"th",3),b.Hc(4,at,2,1,"td",4),b.Pb(),b.Qb(5,5),b.Hc(6,et,3,0,"th",3),b.Hc(7,nt,3,4,"td",4),b.Pb(),b.Qb(8,6),b.Hc(9,it,3,0,"th",3),b.Hc(10,ct,3,3,"td",4),b.Pb(),b.Qb(11,7),b.Hc(12,ot,3,0,"th",3),b.Hc(13,rt,1,0,"td",4),b.Pb(),b.Qb(14,8),b.Hc(15,dt,3,0,"th",3),b.Hc(16,lt,3,3,"td",4),b.Pb(),b.Qb(17,9),b.Hc(18,st,3,0,"th",3),b.Hc(19,bt,1,0,"td",4),b.Pb(),b.Qb(20,10),b.Hc(21,ut,3,0,"th",3),b.Hc(22,mt,1,0,"td",4),b.Pb(),b.Qb(23,11),b.Hc(24,ft,3,0,"th",3),b.Hc(25,pt,3,3,"td",4),b.Pb(),b.Qb(26,12),b.Hc(27,Ht,21,6,"td",13),b.Pb(),b.Hc(28,Mt,1,0,"tr",14),b.Hc(29,_t,1,2,"tr",15),b.Hc(30,Lt,1,0,"tr",16),b.Rb()),2&t&&(b.kc("dataSource",a.dataSource),b.zb(28),b.kc("matHeaderRowDef",a.columnsToDisplay),b.zb(1),b.kc("matRowDefColumns",a.columnsToDisplay),b.zb(1),b.kc("matRowDefColumns",b.nc(4,It)))},directives:[j.n,j.c,j.i,j.b,j.k,j.m,j.h,j.a,n.w,v.d,n.t,j.l,j.j],pipes:[n.f,n.d],styles:["app-table-advance table{width:100%;border-radius:5px;border:1px solid #cacee6}app-table-advance table tr.back-color-row{background-color:#f9f9f9}app-table-advance table tr.detail-row{height:0}app-table-advance table tr.detail-row:not(.expanded-row):hover{background-color:#f5f5f5}app-table-advance table tr.detail-row:not(.expanded-row):active{background-color:#efefef}app-table-advance table tr.detail-row td .element-detail{overflow:hidden;display:flex}app-table-advance table tr.detail-row td .element-detail table{width:100%;border:none}app-table-advance table tr.detail-row td .element-detail table del{color:red}"],encapsulation:2,data:{animation:[Object(q.p)("detailExpand",[Object(q.m)("collapsed",Object(q.n)({height:"0px",minHeight:"0"})),Object(q.m)("expanded",Object(q.n)({height:"*"})),Object(q.o)("expanded <=> collapsed",Object(q.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),Ft);function Nt(t,a){1&t&&(b.Sb(0,"div",15),b.Nb(1,"mat-spinner",16),b.Rb()),2&t&&(b.zb(1),b.kc("diameter",30))}var Ot,Qt,Et,qt=function(){return{"font-family":"MontserratBold"}},jt=[{path:"",component:(Ot=function(){function t(a,e){_classCallCheck(this,t),this.service=a,this.matDialog=e,this.data=[],this.loading=!1,this.totalRow=0,this.nextDatePayment=o();var n=this.nextDatePayment.weekday();0===n&&(n=7),n<6?this.nextDatePayment=this.nextDatePayment.add(5-n,"days"):6===n?this.nextDatePayment=this.nextDatePayment.add(6,"days"):7===n&&(this.nextDatePayment=this.nextDatePayment.add(5,"days"))}return _createClass(t,[{key:"ngOnInit",value:function(){this.getAdvances()}},{key:"getAdvances",value:function(){var t=this;this.loading=!0,this.service.getMyAdvances().subscribe((function(a){var e,n,i,c,o=null!==(n=null===(e=null==a?void 0:a.data)||void 0===e?void 0:e.befores)&&void 0!==n?n:[],r=null!==(c=null===(i=null==a?void 0:a.data)||void 0===i?void 0:i.currents)&&void 0!==c?c:[];t.data=o.concat(r)}),(function(t){}),(function(){t.loading=!1}))}},{key:"newRequest",value:function(t){var a=this;this.matDialog.open(M,{data:{service:this.service,paysheet:t}}).afterClosed().subscribe((function(e){(null==e?void 0:e.amount)&&e.amount>0&&a.confirmRequest(e.amount,t)}))}},{key:"confirmRequest",value:function(t,a){var e=this;this.matDialog.open(w,{data:{service:this.service,amount:t,paysheet:a}}).afterClosed().subscribe((function(n){console.log(n),("boolean"!=typeof n||n)&&e.showCarta(n,t,a)}))}},{key:"showCarta",value:function(t,a,e){var n=this;this.matDialog.open(O,{data:{advance:{amount:a,dayForPayment:t.dayForPayment,comission:t.comission,totalWithhold:t.totalWithhold,dates:t.dates,totalWeek:t.totalWeek},service:this.service,paysheet:e}}).afterClosed().subscribe((function(t){n.getAdvances()}))}},{key:"uploadPayrollReceipt",value:function(){var t=this;this.matDialog.open(Q.a,{data:{service:this.service}}).afterClosed().subscribe((function(a){"boolean"!=typeof a&&t.newRequest(a)}))}},{key:"totalToPay",get:function(){var t=this;return this.data.reduce((function(a,e){return a+e.details.filter((function(a){return o(a.detail.date_Payment).format("DD/MM/YYYY")==t.nextDatePayment.format("DD/MM/YYYY")})).reduce((function(t,a){return t+a.detail.total_Payment}),0)}),0)}}]),t}(),Ot.\u0275fac=function(t){return new(t||Ot)(b.Mb(E.a),b.Mb(d.b))},Ot.\u0275cmp=b.Gb({type:Ot,selectors:[["app-request-advance"]],decls:27,vars:11,consts:[[1,"container","module-container"],["fxLayout","row","fxLayoutAlign","space-between end",1,"content-breadcrumbs"],[3,"ngStyle"],[1,"breadcrumbs"],[1,"content-table","mat-elevation-z3"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column","fxLayoutAlign","space-between center"],["fxFlex","30","fxFle.sm","100","fxFlex.xs","100"],[1,"title"],[1,"line"],["fxFlex","30","fxFle.sm","100","fxFlex.xs","100","fxLayoutAlign","end center"],[1,"ctn-btn"],["mat-button","",3,"click"],["id","contentTable",1,"table"],["class","content-loading",4,"ngIf"],[3,"data","totalRow"],[1,"content-loading"],[3,"diameter"]],template:function(t,a){1&t&&(b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"div"),b.Sb(3,"h1",2),b.Jc(4,"Pedir Paro"),b.Rb(),b.Sb(5,"div",3),b.Jc(6,"Snac > Pedir Paro"),b.Rb(),b.Rb(),b.Sb(7,"div"),b.Sb(8,"p"),b.Sb(9,"b"),b.Jc(10),b.Rb(),b.Jc(11),b.fc(12,"currency"),b.Rb(),b.Rb(),b.Rb(),b.Sb(13,"div",4),b.Sb(14,"div",5),b.Sb(15,"div",6),b.Sb(16,"div",7),b.Sb(17,"h3",2),b.Jc(18,"Adelantos"),b.Rb(),b.Nb(19,"span",8),b.Rb(),b.Rb(),b.Sb(20,"div",9),b.Sb(21,"div",10),b.Sb(22,"button",11),b.ac("click",(function(){return a.uploadPayrollReceipt()})),b.Jc(23,"Pedir Paro"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(24,"div",12),b.Hc(25,Nt,2,1,"div",13),b.Nb(26,"app-table-advance",14),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.zb(3),b.kc("ngStyle",b.nc(9,qt)),b.zb(7),b.Lc("Total a pagar (",a.nextDatePayment.format("DD/MM/YYYY"),"): "),b.zb(1),b.Kc(b.gc(12,7,a.totalToPay)),b.zb(6),b.kc("ngStyle",b.nc(10,qt)),b.zb(8),b.kc("ngIf",a.loading),b.zb(1),b.kc("data",a.data)("totalRow",a.totalRow))},directives:[g.f,g.e,n.w,v.d,g.b,f.b,n.t,Tt,h.c],pipes:[n.d],styles:["app-request-advance .container{padding:25px}app-request-advance .container .content-breadcrumbs h1{color:#41434c;font-size:27px}app-request-advance .container .content-table{margin-top:25px;background-color:#fff;padding:20px;height:calc(100% - 92px);border-top-left-radius:10px;border-top-right-radius:10px}@media (max-width:959px){app-request-advance .container .content-table{height:auto;border-top-left-radius:10px;border-top-right-radius:10px}}app-request-advance .container .content-table .title h3{margin:0;color:#41434c;font-size:20px}app-request-advance .container .content-table .title .line{background-color:#65bcb5;width:78px;height:5px;display:block;border-radius:5px}app-request-advance .container .content-table .ctn-btn button{border-radius:50px;background-color:#41434c;color:#fff}app-request-advance .container .content-table .table{margin-top:25px;overflow:auto!important;position:relative;height:calc(100% - 55px)}app-request-advance .container .content-table .table .content-loading{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-color:hsla(0,0%,100%,.5);z-index:101}"],encapsulation:2,data:{animation:r.a}}),Ot)}],Bt=((Et=function t(){_classCallCheck(this,t)}).\u0275mod=b.Kb({type:Et}),Et.\u0275inj=b.Jb({factory:function(t){return new(t||Et)},imports:[[c.h.forChild(jt)],c.h]}),Et),$t=((Qt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Kb({type:Qt}),Qt.\u0275inj=b.Jb({factory:function(t){return new(t||Qt)},providers:[E.a],imports:[[n.c,i.a,Bt]]}),Qt)}}]);