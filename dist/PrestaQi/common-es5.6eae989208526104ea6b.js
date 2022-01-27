function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+ti9":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("wd/R"),a=n("lJxs"),o=n("fXoL"),r=n("tk/3"),l=n("7RFJ"),s=n("RL7/"),c=function(){var t=function(){function t(e,n,i){_classCallCheck(this,t),this.http=e,this.constant=n,this.auth=i}return _createClass(t,[{key:"getMyAdvances",value:function(){return this.http.get("".concat(this.constant.api,"Advances/GetByAccredited/").concat(this.auth.id))}},{key:"calculateAdvance",value:function(t){var e=new FormData;return e.append("amount","0"),e.append("PaySheetsJson",JSON.stringify(t.map((function(t){return t.toJson()})))),t.forEach((function(t){e.append(t.uuid,t.file)})),this.http.post(this.constant.api+"Advances/CalculateAdvance",e).pipe(Object(a.a)((function(t){var e,n;return(null===(n=null===(e=t.data)||void 0===e?void 0:e.advance)||void 0===n?void 0:n.maximum_Amount)||0})))}},{key:"preAdvance",value:function(t,e){var n=new FormData;return n.append("amount",e.toString()),n.append("PaySheetsJson",JSON.stringify(t.map((function(t){return t.toJson()})))),t.forEach((function(t){n.append(t.uuid,t.file)})),this.http.post(this.constant.api+"Advances/CalculateAdvance",n)}},{key:"getInfoBank",value:function(){return this.http.get(this.constant.api+"Users/GetUser")}},{key:"uploadPaySheet",value:function(t){return this.http.post(this.constant.apiBinaria+"ocr/api/OCROnline/OCRNomina",{imageID:t},{headers:{"Ocp-Apim-Subscription-Key":this.constant.tokenBinariaOCR,"content-type":"application/json"}})}},{key:"syncIneAccredited",value:function(t,e,n){var a=i(t.birthDate),o=new FormData;return o.append("Name",t.name),o.append("LastName",t.lastName),o.append("Curp",t.curp),o.append("BirthDate",a.isValid?a.format("yyyy/MM/dd"):"1800/01/01"),o.append("Address",t.address),o.append("ClaveElector",t.claveElector),o.append("ClaveElectorBack",e.claveElector),o.append("Meta",t.meta),o.append("AccreditedId",n.toString()),o.append("File",t.file),o.append("FileBack",e.file),this.http.post(this.constant.api+"BinariaFiles/IneAccount",o)}},{key:"syncStatusAccount",value:function(t,e){var n=new FormData;return n.append("KeyAccount",t.keyAccount),n.append("Address",t.address),n.append("Name",t.name),n.append("Periodo",t.periodo),n.append("Rfc",t.rfc),n.append("NameBank",t.nameBank),n.append("BusinessNameBank",t.businesNameBank),n.append("NumberAccount",t.numberAccount),n.append("AccreditedId",e.toString()),n.append("Meta",t.meta),n.append("File",t.file),this.http.post(this.constant.api+"BinariaFiles/StatusAccount",n)}},{key:"syncPaysheet",value:function(t,e){var n=new FormData;return n.append("AccreditedId",e.toString()),n.append("PaySheetsJson",JSON.stringify(t.map((function(t){return t.toJson()})))),t.forEach((function(t){n.append(t.uuid,t.file)})),this.http.post(this.constant.api+"BinariaFiles/Paysheet",n)}},{key:"requestAdvance",value:function(t,e){var n=new FormData;return n.append("amount",t.toString()),n.append("PaySheetsJson",JSON.stringify(e.map((function(t){return t.toJson()})))),e.forEach((function(t){n.append(t.uuid,t.file)})),this.http.post(this.constant.api+"Advances",n)}},{key:"syncSelfie",value:function(t,e){var n=new FormData;return n.append("AccreditedId",e.toString()),n.append("URL1",t.URL1),this.http.post(this.constant.api+"BinariaFiles/Selfie",n)}},{key:"completeUploadFiles",value:function(t){return this.http.put(this.constant.api+"BinariaFiles/CompleteUploadFiles",{id:t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Wb(r.b),o.Wb(l.a),o.Wb(s.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"1yaQ":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var i=n("fXoL"),a=n("j14s"),o=n("wd/R"),r=n.n(o).a||o,l=new i.q("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function s(t,e){for(var n=Array(t),i=0;i<t;i++)n[i]=e(i);return n}var c=function(){var t=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var a;return _classCallCheck(this,n),(a=e.call(this))._options=i,a.setLocale(t||r.locale()),a}return _createClass(n,[{key:"setLocale",value:function(t){var e=this;_get(_getPrototypeOf(n.prototype),"setLocale",this).call(this,t);var i=r.localeData(t);this._localeData={firstDayOfWeek:i.firstDayOfWeek(),longMonths:i.months(),shortMonths:i.monthsShort(),dates:s(31,(function(t){return e.createDate(2017,0,t+1).format("D")})),longDaysOfWeek:i.weekdays(),shortDaysOfWeek:i.weekdaysShort(),narrowDaysOfWeek:i.weekdaysMin()}}},{key:"getYear",value:function(t){return this.clone(t).year()}},{key:"getMonth",value:function(t){return this.clone(t).month()}},{key:"getDate",value:function(t){return this.clone(t).date()}},{key:"getDayOfWeek",value:function(t){return this.clone(t).day()}},{key:"getMonthNames",value:function(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}},{key:"getDateNames",value:function(){return this._localeData.dates}},{key:"getDayOfWeekNames",value:function(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}},{key:"getYearName",value:function(t){return this.clone(t).format("YYYY")}},{key:"getFirstDayOfWeek",value:function(){return this._localeData.firstDayOfWeek}},{key:"getNumDaysInMonth",value:function(t){return this.clone(t).daysInMonth()}},{key:"clone",value:function(t){return t.clone().locale(this.locale)}},{key:"createDate",value:function(t,e,n){var i=this._createMoment({year:t,month:e,date:n}).locale(this.locale);return i.isValid(),i}},{key:"today",value:function(){return this._createMoment().locale(this.locale)}},{key:"parse",value:function(t,e){return t&&"string"==typeof t?this._createMoment(t,e,this.locale):t?this._createMoment(t).locale(this.locale):null}},{key:"format",value:function(t,e){return t=this.clone(t),this.isValid(t),t.format(e)}},{key:"addCalendarYears",value:function(t,e){return this.clone(t).add({years:e})}},{key:"addCalendarMonths",value:function(t,e){return this.clone(t).add({months:e})}},{key:"addCalendarDays",value:function(t,e){return this.clone(t).add({days:e})}},{key:"toIso8601",value:function(t){return this.clone(t).format()}},{key:"deserialize",value:function(t){var e;if(t instanceof Date)e=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;e=this._createMoment(t,r.ISO_8601).locale(this.locale)}return e&&this.isValid(e)?this._createMoment(e).locale(this.locale):_get(_getPrototypeOf(n.prototype),"deserialize",this).call(this,t)}},{key:"isDateInstance",value:function(t){return r.isMoment(t)}},{key:"isValid",value:function(t){return this.clone(t).isValid()}},{key:"invalid",value:function(){return r.invalid()}},{key:"_createMoment",value:function(t,e,n){var i=this._options||{},a=i.strict;return i.useUtc?r.utc(t,e,n,a):r(t,e,n,a)}}]),n}(a.c);return t.\u0275fac=function(e){return new(e||t)(i.Wb(a.g,8),i.Wb(l,8))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac}),t}()},"4/4Q":function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var i=n("LcAk"),a=n("wd/R"),o=function(){function t(){var e=this;_classCallCheck(this,t),this.toJson=function(){return{UUID:e.uuid,Name:e.name,Rfc:e.rfc,Curp:e.curp,Nss:e.nss,DateInitial:a(e.dateInitial).format("YYYY-MM-DD"),DateFinish:a(e.dateFinish).format("YYYY-MM-DD"),Neto:e.neto.toString(),Total:e.total.toString(),Meta:e.meta}}}return _createClass(t,null,[{key:"fromJson",value:function(e){var n,i,o,r,l,s,c,u,p,d,f=new t;return f.name=null!==(n=e.nombre)&&void 0!==n?n:"",f.rfc=null!==(i=e.rfc)&&void 0!==i?i:"",f.curp=null!==(o=e.curp)&&void 0!==o?o:"",f.nss=null!==(r=e.nss)&&void 0!==r?r:"",f.dateInitial=a(null!==(l=e.fechainicio)&&void 0!==l?l:"","DD/MM/YYYY").toDate(),f.dateFinish=a(null!==(s=e.fechafin)&&void 0!==s?s:"","DD/MM/YYYY").toDate(),f.neto=null!==(u=parseFloat((null!==(c=e.netonomina)&&void 0!==c?c:"0").replace(",","").replace("$","")))&&void 0!==u?u:0,f.total=null!==(d=parseFloat((null!==(p=e.netopagar)&&void 0!==p?p:"0").replace(",","").replace("$","")))&&void 0!==d?d:0,f.meta=JSON.stringify(e),f}}]),t}(),r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"formatDate",value:function(t){return a(t).format("dd/MM/yyyy")}}]),t}(),l=n("xm3d"),s=n("fXoL"),c=n("TY1r"),u=n("0DX0"),p=n("J0hL"),d=n("Xlwt"),f=n("G/Ji"),b=n("jhN1"),m=n("RL7/"),h=n("XiUz"),v=n("ofXK"),g=n("znSr"),y=["boxInput"],k=["inputFile"];function R(t,e){1&t&&(s.Sb(0,"button",14),s.Sb(1,"mat-icon"),s.Jc(2,"close"),s.Rb(),s.Rb()),2&t&&s.kc("mat-dialog-close",!1)}function S(t,e){if(1&t&&(s.Qb(0),s.Sb(1,"div",16),s.Sb(2,"mat-icon",17),s.Jc(3,"remove_circle_outline"),s.Rb(),s.Sb(4,"span"),s.Jc(5),s.fc(6,"date"),s.fc(7,"date"),s.Rb(),s.Sb(8,"mat-icon",18),s.Jc(9,"done"),s.Rb(),s.Rb(),s.Pb()),2&t){var n=s.ec().$implicit,i=s.ec();s.zb(5),s.Mc("",s.hc(6,2,i.listFiles[n-1].dateInitial,"dd/MM/yyyy")," - ",s.hc(7,5,i.listFiles[n-1].dateFinish,"dd/MM/yyyy"),"")}}function _(t,e){1&t&&(s.Qb(0),s.Sb(1,"div",19),s.Sb(2,"mat-icon",17),s.Jc(3,"file_copy"),s.Rb(),s.Sb(4,"span"),s.Jc(5,"Archivo"),s.Rb(),s.Sb(6,"mat-icon",18),s.Jc(7,"schedule"),s.Rb(),s.Rb(),s.Pb())}function F(t,e){if(1&t&&(s.Qb(0),s.Hc(1,S,10,8,"ng-container",15),s.Hc(2,_,8,0,"ng-container",15),s.Pb()),2&t){var n=e.$implicit,i=s.ec();s.zb(1),s.kc("ngIf",!!i.listFiles[n-1]),s.zb(1),s.kc("ngIf",!i.listFiles[n-1])}}function I(t,e){1&t&&(s.Sb(0,"div",28),s.Nb(1,"mat-spinner",29),s.Rb()),2&t&&(s.zb(1),s.kc("diameter",30))}function x(t,e){if(1&t&&(s.Sb(0,"div",20),s.Sb(1,"div",21,22),s.Nb(3,"mat-icon",23),s.Nb(4,"br"),s.Nb(5,"input",24,25),s.Sb(7,"label",26),s.Jc(8,"Subir (formatos: jpg, jpeg, png, pdf)"),s.Rb(),s.Rb(),s.Hc(9,I,2,1,"div",27),s.Rb()),2&t){var n=s.ec();s.zb(9),s.kc("ngIf",n.uploadingFile)}}var D,E=function(){return{"font-family":"MontserratBold"}},C=((D=function(){function t(e,n,i,a,o,r){_classCallCheck(this,t),this.dialogRef=e,this.data=n,this.matIconRegistry=i,this.domSanitizer=a,this.auth=o,this.snackBar=r,this.totalFilesRequire=1,this.listFiles=[],this.uploadingFile=!1,this.dialogRef.disableClose=!0,this.matIconRegistry.addSvgIcon("uploadPayRollReceipt",this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/ico-recibo-nomina.svg")),this.matIconRegistry.addSvgIcon("logoUpload",this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../../assets/icons/ico-subir-archivo.svg"))}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;this.boxInput.nativeElement.addEventListener("click",(function(e){t.inputFile.nativeElement.click()})),this.inputFile.nativeElement.addEventListener("change",(function(e){t.deleteDefaultEvent(e);var n=e.target.files;if(n.length>0){var i=new FileReader;i.onload=function(e){t.uploadingFile=!0,t.data.service.uploadPaySheet(i.result.toString()).subscribe((function(e){t.profilePaySheet(e,n[0])}),(function(e){t.uploadingFile=!1,t.snackBar.openFromComponent(l.a,{data:{message:"ERROR",subMessage:"Error al procesar el archivo, o su recibo de nomina es incorrecto",type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:2500})}),(function(){return t.uploadingFile=!1}))},i.readAsDataURL(n[0])}})),this.boxInput.nativeElement.addEventListener("drag",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("dragstart",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("dragend",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("dragover",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("dragenter",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("dragleave",(function(e){t.deleteDefaultEvent(e)})),this.boxInput.nativeElement.addEventListener("drop",(function(e){t.deleteDefaultEvent(e);var n=e.dataTransfer.files;if(n.length>0){var i=new FileReader;i.onload=function(e){t.uploadingFile=!0,t.data.service.uploadPaySheet(i.result.toString()).subscribe((function(e){t.profilePaySheet(e,n[0])}),(function(e){t.uploadingFile=!1,t.snackBar.openFromComponent(l.a,{data:{message:"ERROR",subMessage:"Error al procesar el archivo, o su recibo de nomina es incorrecto",type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:2500})}),(function(){return t.uploadingFile=!1}))},i.readAsDataURL(n[0])}}))}},{key:"deleteDefaultEvent",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"profilePaySheet",value:function(t,e){var n=o.fromJson(t);console.log("Invalid Date"===n.dateFinish.toString());var i="Invalid Date"===n.dateFinish.toString(),l="Invalid Date"===n.dateInitial.toString(),s=null===n.total||0===n.total,c=null===n.neto||0===n.neto;if(i||l)this.showMessage("ERROR","El documento tiene una fecha no valida","error");else if(s||c)this.showMessage("ERROR","El total no es valido","error");else{var u=a(),p=a(n.dateInitial),d=a(n.dateFinish),f=u.diff(p,"days"),b=d.diff(p,"days"),m=t.rfc,h=this.data.rfc||this.auth.rfc;this.countRequired(b),f>38?this.showMessage("ERROR","El documento no pertenece al ultimo periodo","error"):this.listFiles.some((function(e){return r.formatDate(e.dateInitial)===r.formatDate(t.fechainicio)&&r.formatDate(e.dateFinish)===r.formatDate(t.fechafin)}))?this.showMessage("ERROR","El periodo ya fue agregado","error"):h.substring(0,h.length>7?8:0).toLowerCase()===m.substring(0,m.length>7?8:0).toLowerCase()?(n.uuid=Date.now().toString(),n.file=e,this.listFiles.push(n),this.listFiles.sort((function(t,e){return t.dateInitial>e.dateInitial?1:0}))):this.showMessage("ERROR","El documento tiene un rfc distinto al del usuario","error")}}},{key:"countRequired",value:function(t){t<=6?this.totalFilesRequire=4:t>6&&t<=16&&(this.totalFilesRequire=2),this.data.onlyOne&&(this.totalFilesRequire=1)}},{key:"continue",value:function(){this.listFiles.length===this.totalFilesRequire&&this.dialogRef.close(this.listFiles)}},{key:"showMessage",value:function(t,e,n){this.snackBar.openFromComponent(l.a,{data:{message:t,subMessage:e,type:n},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:3500})}},{key:"closeModal",get:function(){return!this.data.onlyOne}},{key:"message",get:function(){return this.data.onlyOne?"Sube tu \xdaltimo Recibo de N\xf3mina":"Suba sus recibos de su ultimo mes de pago"}},{key:"numberFilesRequire",get:function(){return Array.from({length:this.totalFilesRequire},(function(t,e){return e+1}))}}]),t}()).\u0275fac=function(t){return new(t||D)(s.Mb(i.h),s.Mb(i.a),s.Mb(c.c),s.Mb(b.b),s.Mb(m.a),s.Mb(u.b))},D.\u0275cmp=s.Gb({type:D,selectors:[["app-upload-payroll-receipt"]],viewQuery:function(t,e){var n;1&t&&(s.Oc(y,!0),s.Oc(k,!0)),2&t&&(s.tc(n=s.bc())&&(e.boxInput=n.first),s.tc(n=s.bc())&&(e.inputFile=n.first))},decls:17,vars:7,consts:[[1,"dialog-content-wrapper"],["matDialogTitle","",1,"m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title",3,"ngStyle"],["mat-button","","class","toggle-button-navbar mat-icon-button",3,"mat-dialog-close",4,"ngIf"],["mat-dialog-content","",1,"pl-25","pr-25","m-0"],[1,"cnt-icon"],["svgIcon","uploadPayRollReceipt"],[1,"label"],[1,"cnt-files"],[4,"ngFor","ngForOf"],["class","content-upload-file",4,"ngIf"],["mat-dialog-actions","","fxLayoutAlign","center center",1,"m-0"],["mat-button","",1,"btn",3,"disabled","click"],["mat-button","",1,"toggle-button-navbar","mat-icon-button",3,"mat-dialog-close"],[4,"ngIf"],[1,"item-file","active"],[1,"left"],[1,"rigth"],[1,"item-file"],[1,"content-upload-file"],[1,"box-input"],["boxInput",""],["svgIcon","logoUpload",1,"icon-upload"],["type","file","id","file",1,"input-file"],["inputFile",""],["for","file"],["class","loadingUpload",4,"ngIf"],[1,"loadingUpload"],[3,"diameter"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"mat-toolbar",1),s.Sb(2,"div",2),s.Sb(3,"span",3),s.Jc(4,"Recibo de N\xf3mina"),s.Rb(),s.Hc(5,R,3,1,"button",4),s.Rb(),s.Rb(),s.Sb(6,"div",5),s.Sb(7,"div",6),s.Nb(8,"mat-icon",7),s.Rb(),s.Sb(9,"p",8),s.Jc(10),s.Rb(),s.Sb(11,"div",9),s.Hc(12,F,3,2,"ng-container",10),s.Rb(),s.Hc(13,x,10,1,"div",11),s.Rb(),s.Sb(14,"div",12),s.Sb(15,"button",13),s.ac("click",(function(){return e.continue()})),s.Jc(16,"CONTINUAR"),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.zb(3),s.kc("ngStyle",s.nc(6,E)),s.zb(2),s.kc("ngIf",e.closeModal),s.zb(5),s.Kc(e.message),s.zb(2),s.kc("ngForOf",e.numberFilesRequire),s.zb(1),s.kc("ngIf",e.listFiles.length!==e.totalFilesRequire),s.zb(2),s.kc("disabled",e.uploadingFile||e.listFiles.length!==e.totalFilesRequire))},directives:[p.a,i.i,h.b,h.f,h.e,v.w,g.d,v.t,i.f,c.a,v.s,i.c,d.b,i.d,f.c],pipes:[v.f],styles:["app-upload-payroll-receipt .cnt-icon{text-align:center;margin-top:30px}app-upload-payroll-receipt .cnt-icon .mat-icon{font-size:60px;width:60px;height:60px}app-upload-payroll-receipt .cnt-icon .mat-icon svg{fill:#41434c}app-upload-payroll-receipt .label{color:grey}app-upload-payroll-receipt .cnt-files{margin-top:36px;margin-bottom:36px}app-upload-payroll-receipt .cnt-files .item-file{display:flex;justify-content:center;align-items:center;gap:24px;margin-bottom:12px}app-upload-payroll-receipt .cnt-files .item-file:last-child{margin-bottom:0}app-upload-payroll-receipt .cnt-files .item-file:not(.active){opacity:.5}app-upload-payroll-receipt .cnt-files .item-file.active .left{color:red}app-upload-payroll-receipt .cnt-files .item-file.active span{color:#41434c}app-upload-payroll-receipt .cnt-files .item-file.active .rigth{color:green}app-upload-payroll-receipt .content-upload-file{position:relative}app-upload-payroll-receipt .content-upload-file .box-input{text-align:center;outline:2px dashed #92b0b3;outline-offset:-10px;transition:outline-offset .15s ease-in-out,background-color .15s linear;font-size:1.25rem;position:relative;padding:50px 20px}app-upload-payroll-receipt .content-upload-file .box-input label{color:#a6a6a6;font-size:15px}app-upload-payroll-receipt .content-upload-file .box-input .input-file{width:100%;opacity:0;overflow:hidden;position:absolute;z-index:-1}app-upload-payroll-receipt .content-upload-file .box-input .icon-upload{display:contents;color:#32379e}app-upload-payroll-receipt .content-upload-file .box-input .icon-upload svg{width:60px;height:60px}app-upload-payroll-receipt .content-upload-file .loadingUpload{position:absolute;width:100%;height:100%;top:0;background-color:hsla(0,0%,100%,.84);display:flex;justify-content:center;align-items:center}app-upload-payroll-receipt .btn{background-color:#41434c;color:#fff;border-radius:20px;margin-bottom:12px}app-upload-payroll-receipt .btn:disabled{color:#fff!important;opacity:.5}"],encapsulation:2}),D)},PbJI:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("lJxs"),a=n("fXoL"),o=n("tk/3"),r=n("7RFJ"),l=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.constant=n}return _createClass(t,[{key:"fetchPeriodic",value:function(){return this.http.get(this.constant.api+"Periods/GetByType?type=1")}},{key:"fetchTableInvestors",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.http.post(this.constant.api+"Investors/GetInvestors",{page:t,numRecord:e,filter:n})}},{key:"newCallCapital",value:function(t){return this.http.post(this.constant.api+"Capitals",t)}},{key:"fetchFile",value:function(t){return this.http.get(this.constant.api+"Investors/GetFile?type="+t,{responseType:"blob"}).pipe(Object(i.a)((function(e){return{filename:1===t?"Inversionistas.xlsx":"Inversionistas.pdf",data:e}})))}},{key:"fetchFileMyInvestment",value:function(t){return this.http.get(this.constant.api+"Capitals/ExportMyInvestment?type="+t,{responseType:"blob"}).pipe(Object(i.a)((function(e){return{filename:1===t?"MisInversiones.xlsx":"MisInversiones.pdf",data:e}})))}},{key:"delete",value:function(t,e){return this.http.put(this.constant.api+"Administrative/ChangeStatusUser",{userid:t,type:e,IsDelete:!0})}},{key:"getBanks",value:function(){return this.http.get(this.constant.api+"Institutions/GetList")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Wb(o.b),a.Wb(r.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},RiJK:function(t,e,n){"use strict";function i(t){return new RegExp(/^(\d+)?$/m).exec(t.value)?null:{isNotNumber:!0}}function a(t){var e=new RegExp(/^(\d+)?$/m);return t.value&&!e.exec(t.value)?{isNotNumber:!0}:null}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},Y4ud:function(t,e,n){"use strict";n.d(e,"a",(function(){return J}));var i=n("LcAk"),a=n("3Pt+"),o=n("xm3d"),r=n("fXoL"),l=n("0DX0"),s=n("J0hL"),c=n("Xlwt"),u=n("TY1r"),p=n("IRfi"),d=n("A2Vd"),f=n("/o1g"),b=n("2+6u"),m=n("SSqQ"),h=n("tk/3"),v=n("7RFJ"),g=n("XiUz"),y=n("ofXK"),k=n("znSr"),R=n("TnAc"),S=n("j14s");function _(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El nombre es requerido "),r.Rb())}function F(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El apellido es requerido "),r.Rb())}function I(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El mail es requerido "),r.Rb())}function x(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," Por favor ingresa un mail valido "),r.Rb())}function D(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El monto total pactado es requerido "),r.Rb())}function E(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," La fecha es requerida "),r.Rb())}function C(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," La fecha es requerida "),r.Rb())}function w(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El rfc es requerido "),r.Rb())}function N(t,e){if(1&t&&(r.Sb(0,"mat-option",38),r.Jc(1),r.Rb()),2&t){var n=e.$implicit;r.kc("value",n.id),r.zb(1),r.Kc(n.description)}}function M(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El banco es requerido "),r.Rb())}function A(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," La clabe es requerida "),r.Rb())}function O(t,e){1&t&&(r.Sb(0,"mat-error"),r.Jc(1," El n\xfamero de cuenta es requerido "),r.Rb())}var P=function(){return{"font-family":"MontserratBold"}},J=function(){var t=function(){function t(e,n,i,o,r,l){var s,c,u,p,d,f,b,m,h,v,g,y,k,R,S,_=this;_classCallCheck(this,t),this.dialogRef=e,this.formBuilder=n,this.http=i,this.snackBar=o,this.constant=r,this.data=l,this.loading=!1,this.formErrors={first_Name:{},last_Name:{},total_Amount_Agreed:{},start_Date_Prestaqi:{},limit_Date:{},rfc:{},institution_Id:{},clabe:{},account_Number:{},is_Moral_Person:{},mail:{}},this.formGroup=this.formBuilder.group({id:[null===(s=null==l?void 0:l.user)||void 0===s?void 0:s.id,a.F.required],first_Name:[null===(c=null==l?void 0:l.user)||void 0===c?void 0:c.first_Name,a.F.required],last_Name:[null===(u=null==l?void 0:l.user)||void 0===u?void 0:u.last_Name,a.F.required],total_Amount_Agreed:[null===(p=null==l?void 0:l.user)||void 0===p?void 0:p.total_Amount_Agreed,[a.F.required,a.F.pattern("^\\d*$")]],start_Date_Prestaqi:[null===(d=null==l?void 0:l.user)||void 0===d?void 0:d.start_Date_Prestaqi,a.F.required],limit_Date:[null===(f=null==l?void 0:l.user)||void 0===f?void 0:f.limit_Date,a.F.required],rfc:[null===(b=null==l?void 0:l.user)||void 0===b?void 0:b.rfc,a.F.required],institution_Id:[null===(m=null==l?void 0:l.user)||void 0===m?void 0:m.institution_Id,a.F.required],clabe:[null===(h=null==l?void 0:l.user)||void 0===h?void 0:h.clabe,[a.F.required,a.F.minLength(18),a.F.maxLength(18)]],account_Number:[null===(v=null==l?void 0:l.user)||void 0===v?void 0:v.account_Number,[a.F.required,a.F.pattern("^\\d*$"),a.F.minLength(1),a.F.maxLength(11)]],enabled:[null===(g=null==l?void 0:l.user)||void 0===g?void 0:g.enabled,a.F.required],is_Moral_Person:[null===(y=null==l?void 0:l.user)||void 0===y?void 0:y.is_Moral_Person,a.F.required],mail:[null===(k=null==l?void 0:l.user)||void 0===k?void 0:k.mail,[a.F.required,a.F.email]],first_Login:[null!==(S=null===(R=null==l?void 0:l.user)||void 0===R?void 0:R.first_Login)&&void 0!==S&&S]}),this.formGroup.valueChanges.subscribe((function(){_.onFormValuesChanged()}))}return _createClass(t,[{key:"onFormValuesChanged",value:function(){for(var t in this.formErrors)if(this.formErrors.hasOwnProperty(t)){this.formErrors[t]={};var e=this.formGroup.get(t);e&&e.dirty&&!e.valid&&(this.formErrors[t]=e.errors)}}},{key:"submit",value:function(){var t=this;this.loading=!0,this.http.put(this.constant.api+"Investors",this.formGroup.value).subscribe((function(e){e.success?(t.snackBar.openFromComponent(o.a,{data:{message:"EXITOSO",subMessage:e.message,type:"success"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:2500}),t.dialogRef.close(!0)):(t.snackBar.openFromComponent(o.a,{data:{message:"ERROR",subMessage:e.message,type:"error"},panelClass:"snack-message",horizontalPosition:"right",verticalPosition:"top",duration:2500}),t.dialogRef.close(!1)),t.loading=!1}),(function(e){t.dialogRef.close(!1),t.loading=!1}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Mb(i.h),r.Mb(a.f),r.Mb(h.b),r.Mb(l.b),r.Mb(v.a),r.Mb(i.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-edit-investor"]],decls:98,vars:26,consts:[[1,"dialog-content-wrapper"],["matDialogTitle","",1,"m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title",3,"ngStyle"],["mat-button","",1,"toggle-button-navbar","mat-icon-button",3,"mat-dialog-close"],["mat-dialog-content","","appPerfectScrollbar","",1,"pl-25","pr-25","m-0",3,"formGroup"],[1,"label"],["fxLayout","row","fxLayoutAlign","space-between"],["fxFlex","50",2,"padding-right","12.5px"],["appearance","outline"],["matInput","","formControlName","first_Name"],[4,"ngIf"],["fxFlex","50",2,"padding-left","12.5px"],["matInput","","formControlName","last_Name"],["matInput","","formControlName","mail"],["matInput","","formControlName","total_Amount_Agreed"],["fxFlex","33",2,"padding-right","12.5px"],[3,"ngStyle"],["matInput","","formControlName","start_Date_Prestaqi",3,"matDatepicker"],["matSuffix","",3,"for"],["pickerComunity",""],["fxFlex","33",2,"padding-left","12.5px","padding-right","12.5px"],["matInput","","formControlName","limit_Date",3,"matDatepicker"],["pickerCapital",""],["fxFlex","33",2,"padding-left","12.5px"],["matInput","","formControlName","rfc"],["formControlName","institution_Id"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","clabe"],["matInput","","formControlName","account_Number"],[1,"content-type-person"],["formControlName","is_Moral_Person"],["mat-dialog-actions","","fxLayoutAlign","space-around center",1,"m-0"],[1,"content-botton"],[1,"content-btn-left"],["mat-button","",3,"disabled","click"],[1,"content-btn-right"],["mat-button","",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){if(1&t&&(r.Sb(0,"div",0),r.Sb(1,"mat-toolbar",1),r.Sb(2,"div",2),r.Sb(3,"span",3),r.Jc(4,"Editar Inversionista"),r.Rb(),r.Sb(5,"button",4),r.Sb(6,"mat-icon"),r.Jc(7,"close"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"div",5),r.Sb(9,"p",6),r.Jc(10,"DATOS GENERALES"),r.Rb(),r.Sb(11,"div",7),r.Sb(12,"div",8),r.Sb(13,"mat-form-field",9),r.Sb(14,"mat-label"),r.Jc(15,"Nombres"),r.Rb(),r.Nb(16,"input",10),r.Hc(17,_,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(18,"div",12),r.Sb(19,"mat-form-field",9),r.Sb(20,"mat-label"),r.Jc(21,"Apellidos"),r.Rb(),r.Nb(22,"input",13),r.Hc(23,F,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Rb(),r.Sb(24,"div",7),r.Sb(25,"div",8),r.Sb(26,"mat-form-field",9),r.Sb(27,"mat-label"),r.Jc(28,"Email"),r.Rb(),r.Nb(29,"input",14),r.Hc(30,I,2,0,"mat-error",11),r.Hc(31,x,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(32,"div",12),r.Sb(33,"mat-form-field",9),r.Sb(34,"mat-label"),r.Jc(35,"Monto total pactado"),r.Rb(),r.Nb(36,"input",15),r.Hc(37,D,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Rb(),r.Sb(38,"div",7),r.Sb(39,"div",16),r.Sb(40,"mat-form-field",9),r.Sb(41,"mat-label"),r.Jc(42,"Fecha inicio en comunidad "),r.Sb(43,"span",17),r.Jc(44,"SNAC"),r.Rb(),r.Rb(),r.Nb(45,"input",18),r.Nb(46,"mat-datepicker-toggle",19),r.Nb(47,"mat-datepicker",null,20),r.Hc(49,E,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(50,"div",21),r.Sb(51,"mat-form-field",9),r.Sb(52,"mat-label"),r.Jc(53,"Fecha limite de llamada de capital"),r.Rb(),r.Nb(54,"input",22),r.Nb(55,"mat-datepicker-toggle",19),r.Nb(56,"mat-datepicker",null,23),r.Hc(58,C,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(59,"div",24),r.Sb(60,"mat-form-field",9),r.Sb(61,"mat-label"),r.Jc(62,"RFC"),r.Rb(),r.Nb(63,"input",25),r.Hc(64,w,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Rb(),r.Sb(65,"p",6),r.Jc(66,"DATOS BANCARIOS"),r.Rb(),r.Sb(67,"div",7),r.Sb(68,"div",16),r.Sb(69,"mat-form-field",9),r.Sb(70,"mat-label"),r.Jc(71,"Banco"),r.Rb(),r.Sb(72,"mat-select",26),r.Hc(73,N,2,2,"mat-option",27),r.Rb(),r.Hc(74,M,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(75,"div",21),r.Sb(76,"mat-form-field",9),r.Sb(77,"mat-label"),r.Jc(78,"CLABE interbancaria (18 digitos)"),r.Rb(),r.Nb(79,"input",28),r.Hc(80,A,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Sb(81,"div",24),r.Sb(82,"mat-form-field",9),r.Sb(83,"mat-label"),r.Jc(84,"N\xfamero de cuenta"),r.Rb(),r.Nb(85,"input",29),r.Hc(86,O,2,0,"mat-error",11),r.Rb(),r.Rb(),r.Rb(),r.Sb(87,"div",30),r.Sb(88,"mat-checkbox",31),r.Jc(89," Persona Moral "),r.Rb(),r.Rb(),r.Rb(),r.Sb(90,"div",32),r.Sb(91,"div",33),r.Sb(92,"div",34),r.Sb(93,"button",35),r.ac("click",(function(){return e.submit()})),r.Jc(94,"GUARDAR CAMBIOS"),r.Rb(),r.Rb(),r.Sb(95,"div",36),r.Sb(96,"button",37),r.Jc(97,"CANCELAR"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){var n=r.uc(48),i=r.uc(57);r.zb(3),r.kc("ngStyle",r.nc(24,P)),r.zb(2),r.kc("mat-dialog-close",!1),r.zb(3),r.kc("formGroup",e.formGroup),r.zb(9),r.kc("ngIf",e.formErrors.first_Name.required),r.zb(6),r.kc("ngIf",e.formErrors.last_Name.required),r.zb(7),r.kc("ngIf",null==e.formErrors.mail?null:e.formErrors.mail.required),r.zb(1),r.kc("ngIf",!(null!=e.formErrors&&null!=e.formErrors.mail&&e.formErrors.mail.required)&&(null==e.formErrors||null==e.formErrors.mail?null:e.formErrors.mail.email)),r.zb(6),r.kc("ngIf",e.formErrors.total_Amount_Agreed.required),r.zb(6),r.kc("ngStyle",r.nc(25,P)),r.zb(2),r.kc("matDatepicker",n),r.zb(1),r.kc("for",n),r.zb(3),r.kc("ngIf",e.formErrors.start_Date_Prestaqi.required),r.zb(5),r.kc("matDatepicker",i),r.zb(1),r.kc("for",i),r.zb(3),r.kc("ngIf",e.formErrors.limit_Date.required),r.zb(6),r.kc("ngIf",e.formErrors.rfc.required),r.zb(9),r.kc("ngForOf",e.data.banks),r.zb(1),r.kc("ngIf",e.formErrors.institution_Id.required),r.zb(6),r.kc("ngIf",e.formErrors.clabe.required),r.zb(6),r.kc("ngIf",e.formErrors.account_Number.required),r.zb(7),r.Db("spinner",e.loading),r.kc("disabled",e.formGroup.invalid||e.loading),r.zb(3),r.kc("mat-dialog-close",!1)}},directives:[s.a,i.i,g.b,g.f,g.e,y.w,k.d,c.b,i.d,u.a,i.f,R.a,a.s,a.j,p.b,p.f,d.b,a.c,a.r,a.i,y.t,f.f,f.h,p.i,f.d,b.a,y.s,m.a,i.c,p.a,S.p],styles:['app-edit-investor .mat-dialog-content{padding-top:10px}app-edit-investor .label{color:#41434c;font-weight:700;font-size:12px}app-edit-investor mat-form-field{width:100%}app-edit-investor .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{padding-top:11px}app-edit-investor .mat-dialog-actions .mat-button{border-radius:50px;font-weight:700;padding:5px 0}app-edit-investor .mat-dialog-actions .content-botton{display:flex;justify-content:space-between;width:100%;padding-bottom:20px}app-edit-investor .mat-dialog-actions .content-botton .spinner:before{content:"";box-sizing:border-box;position:absolute;top:50%;left:90%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid #fff;border-top-color:#41434c;-webkit-animation:spinner .8s linear infinite;animation:spinner .8s linear infinite}app-edit-investor .mat-dialog-actions .content-botton .content-btn-left{width:50%;padding-right:12.5px;padding-left:25px}app-edit-investor .mat-dialog-actions .content-botton .content-btn-left .mat-button{width:100%;background:#41434c;color:#fff}app-edit-investor .mat-dialog-actions .content-botton .content-btn-right{width:50%;padding-left:12.5px;padding-right:25px}app-edit-investor .mat-dialog-actions .content-botton .content-btn-right .mat-button{width:100%;background-color:#8e91a2;color:#fff}@-webkit-keyframes giro{0%{transform:rotate(0deg);border-radius:50%}50%{border-radius:20%}to{border-radius:50%;transform:rotate(1turn)}}@keyframes giro{0%{transform:rotate(0deg);border-radius:50%}50%{border-radius:20%}to{border-radius:50%;transform:rotate(1turn)}}@-webkit-keyframes spinner{to{transform:rotate(1turn)}}@keyframes spinner{to{transform:rotate(1turn)}}'],encapsulation:2}),t}()},tAa7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),a=n("tk/3"),o=n("7RFJ"),r=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.constant=n}return _createClass(t,[{key:"createInvestor",value:function(t){return this.http.post(this.constant.api+"Investors",t)}},{key:"createAccredited",value:function(t){return this.http.post(this.constant.api+"Accrediteds",t)}},{key:"createAdmin",value:function(t){return this.http.post(this.constant.api+"Users",t)}},{key:"createLicense",value:function(t){return this.http.post(this.constant.api+"License",t)}},{key:"fetchModule",value:function(){return this.http.get(this.constant.api+"Modules")}},{key:"groupUser",value:function(t,e){return this.http.post(this.constant.api+"Administrative/SaveFileUsers",{File:t,Type:e})}},{key:"groupSnac",value:function(t,e){return this.http.post(this.constant.api+"Administrative/SaveSnacGroup",{File:t,companyId:e})}},{key:"getInstitutions",value:function(){return this.http.get(this.constant.api+"Institutions/GetList")}},{key:"getGender",value:function(){return this.http.get(this.constant.api+"Genders")}},{key:"getPeriodos",value:function(t){return this.http.get("".concat(this.constant.api,"Periods/GetByType?type=").concat(t))}},{key:"getTypeContract",value:function(){return this.http.get(this.constant.api+"TypeContract")}},{key:"getLicenses",value:function(){return this.http.get(this.constant.api+"License/All")}},{key:"getCompanies",value:function(){return this.http.get(this.constant.api+"Companies/GetList")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Wb(a.b),i.Wb(o.a))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);