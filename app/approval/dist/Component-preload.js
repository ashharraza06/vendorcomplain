//@ui5-bundle approval/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"approval/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("approval.Component",{metadata:{manifest:"json"}})});
},
	"approval/ext/controller/Complainsobjpage.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("approval.ext.controller.Complainsobjpage",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:function(e){debugger;var t=window.location.href;var n=/complains\('([^']+)'\)/;var i=n.exec(t);var o=i?i[1]:null;var r=this.base.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[0].mBindingInfos.items.binding;r.filter(new sap.ui.model.Filter({path:"complaintno",operator:sap.ui.model.FilterOperator.EQ,value1:o}))}}}})});
},
	"approval/ext/controller/FurtherAssign.js":function(){sap.ui.define(["sap/m/MessageToast"],function(t){"use strict";return{FurtherAssign:function(e){var s=window.location.href;var a=/complains\('([^']+)'\)/;var n=s.match(a);var o=n[1];var r="Further Assigned";let i=JSON.stringify({complainno:o,cstatus:r});var u="/odata/v4/my/complains/"+o;let l="submitcomplaints";var c=this._view.getModel().bindContext(`/${l}(...)`);c.setParameter("data",i);c.setParameter("status",JSON.stringify({status:"patchComp1"}));debugger;var m=new sap.m.Dialog({title:"Sumbit",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to Further Assign?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(){debugger;await c.execute();m.close();t.show("The complaint has forwarded successfully");location.reload()}}),new sap.m.Button({text:"No",press:function(){m.close();t.show("Cancelled")}})]}).addStyleClass("myCustomDialogClass");m.open()}}});
},
	"approval/ext/controller/ListController.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("approval.ext.controller.ListController",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel();debugger;let t=this.base.getView().getContent()[0].mAggregations.header.mAggregations.content[0].mAggregations.items[0].mAggregations.content.mAggregations.filterItems[0];t.setVisible(false)}}})});
},
	"approval/ext/controller/Resolve.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{Resolve:function(t){debugger;var a=window.location.href;var s=/complains\('([^']+)'\)/;var o=a.match(s);var n=o[1];var l="Resolved";let r=JSON.stringify({complainno:n,cstatus:l});var i="/odata/v4/my/complains/"+n;let u="submitcomplaints";var c=this._view.getModel().bindContext(`/${u}(...)`);c.setParameter("data",r);c.setParameter("status",JSON.stringify({status:"patchComp1"}));var m=new sap.m.Dialog({title:"Resolve",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to Resolve?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(){debugger;await c.execute();m.close();e.show("Complaint has resloved Successfully");location.reload()}}),new sap.m.Button({text:"No",press:function(){m.close();e.show("Cancelled")}})]}).addStyleClass("myCustomDialogClass");m.open()}}});
},
	"approval/ext/controller/RevertBack.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{RevertBack:function(t){debugger;var a=window.location.href;var s=/complains\('([^']+)'\)/;var o=a.match(s);var n=o[1];var r="Reverted";let i=JSON.stringify({complainno:n,cstatus:r});var l="/odata/v4/my/complains/"+n;let u="submitcomplaints";var c=this._view.getModel().bindContext(`/${u}(...)`);c.setParameter("data",i);c.setParameter("status",JSON.stringify({status:"patchComp1"}));var m=new sap.m.Dialog({title:"Revert",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to Revert Back to vendor?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(){debugger;await c.execute();m.close();e.show("Reverted Successfully");location.reload()}}),new sap.m.Button({text:"No",press:function(){m.close();e.show("Cancelled")}})]}).addStyleClass("myCustomDialogClass");m.open()}}});
},
	"approval/ext/fragment/Attachements.fragment.xml":'\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"\ndisplayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" ><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'approval/ext/fragment/Attachements\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="false"\n\t\t\t\t\tuploadButtonInvisible="true" \n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/files\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\tvisibleRemove="false"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t\tenabledRemove="false"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>\n',
	"approval/ext/fragment/Attachements.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Item","sap/m/MessageToast"],function(e){"use strict";var t=this;let a=[];return{onPress:function(e){debugger;var t=window.location.href;var a=/complains\('([^']+)'\)/;var n=(a.exec(t)||[])[1];var o="/odata/v4/my/files?$filter=complaintno eq '"+n+"'";$.ajax({url:o,type:"GET",contentType:"application/json",success:function(e){console.log("Files fetched successfully:",e)},error:function(e,t,a){console.error("Error fetching files:",t,a)}})},onAfterItemAdded:function(e){debugger;var t=e.getParameter("item");var n=function(e){debugger;var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var n={url:"/odata/v4/my/files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(n).done((t,n,o)=>{e(t.ID);debugger;a.push(t.ID)}).fail(e=>{t(e)})})};n(t).then(e=>{var a=`/odata/v4/my/files(${e})/content`;t.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(t)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(t){t.preventDefault();t.getParameter("item").getBindingContext().delete();e.show("Selected file has been deleted")},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();var a=t.getFileName();var n=this._view.getModel().sServiceUrl;n=n.replace("/odata/v4/my/","");var o=function(e){var t={url:n+e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};o(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_download:function(e){var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})},_createEntity:function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var n={url:"/attachments/files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(n).done((t,n,o)=>{e(t.ID);debugger;a.push(t.ID)}).fail(e=>{t(e)})})},_uploadContent:function(e,t){var a=`/attachments/Files(${t})/content`;e.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(e)},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"approval/ext/fragment/Comments.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id= "vv" class = "commentvbox"><Button id="comm" class = "commentbtn" core:require="{ handler: \'approval/ext/fragment/Comments\'}" text="Comments" press="handler.onPress" /><HBox id= "hh"><TextArea id="ta" rows="8" width="90vw" class="commenthbox" placeholder="write a comment"/></HBox></VBox></core:FragmentDefinition>',
	"approval/ext/fragment/Comments.js":function(){sap.ui.define(["sap/m/MessageToast","sap/suite/ui/commons/util/DateUtils"],function(e){"use strict";return{onPress:function(e){debugger;var t=new sap.m.Dialog({title:"Comments",endButton:new sap.m.Button({text:"Close",press:async function(){t.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});t.addContent(new sap.m.VBox({width:"60vw"}));function n(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var n=t+"-"+e;return n}debugger;var a=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+n(),{dateTime:"12/3/34",userNameClickable:false,text:"Demo Comments",userName:"Comments"});t.addContent(a);t.open();debugger}}});
},
	"approval/ext/fragment/WorkflowHistory.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id="v1"><HBox id="buttonContainer" alignItems="End" justifyContent="End" width="100%"><Button core:require="{ handler: \'approval/ext/fragment/WorkflowHistory\'}" text="Comments" press="handler.onPress" id="b2" icon="sap-icon://comment" /></HBox><Title text="Level1" id="title1"/><ScrollContainer id="scrollContainer" height="280px" width="100%"><Table id="table" items="{path: \'/workflow_History\'}"><columns><Column width="11rem" id="c022" styleClass="colClass"><Text text="Title" id="dem"/></Column><Column width="11rem" id="c22" styleClass="colClass"><Text text="Title" id="demo"/></Column><Column id="c1" width="11rem" styleClass="colClass"><Text text="Employee ID" id="t1"/></Column><Column id="c2" width="11rem" styleClass="colClass"><Text text="Employee Name" id="t2" width="11rem"/></Column><Column id="c3" width="11rem" styleClass="colClass"><Text text="Begin Date" id="t3" width="11rem"/></Column><Column id="c4" width="11rem" styleClass="colClass"><Text text="End Date" id="t4"/></Column><Column id="c5" width="11rem" styleClass="colClass"><Text text="Days Taken" id="t5"/></Column><Column id="c6" width="11rem" styleClass="colClass"><Text text="Approved By" id="t06"/></Column></columns><items><ColumnListItem id="cli1"><cells><Text text="{Level}" id="t14"/><Text text="{Title}" id="t6"/><Text text="{Employee_id}" id="t7"/><Text text="{Employee_Name}" id="t8"/><Text text="{Begin_Date_Time}" id="t9"/><Text text="{End_Date_Time}" id="t11"/><Text text="{Days_Taken}" id="t12"/><Text text="{Approved_By}" id="t13"/></cells></ColumnListItem></items></Table></ScrollContainer></VBox></core:FragmentDefinition>',
	"approval/ext/fragment/WorkflowHistory.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(e){var t=new sap.m.Dialog({title:"Approval Comments",endButton:new sap.m.Button({text:"Close",press:async function(){t.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});t.addContent(new sap.m.VBox({width:"60vw"}));function a(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}debugger;var n=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+a(),{dateTime:"12/3/34",title:"demo title1",userNameClickable:false,userPicture:"Photo",text:"Demo Comment1",userName:"username1"});var o=new sap.suite.ui.commons.TimelineItem("thisuniqid2"+a(),{dateTime:"12/3/34",title:"demo title2",userNameClickable:false,userPicture:"Photo",text:"Demo Comment2",userName:"username2"});t.addContent(n);t.addContent(o);t.open();debugger}}});
},
	"approval/i18n/i18n.properties":'# This is the resource bundle for approval\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Approval\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=approval\n',
	"approval/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"approval","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.0","toolsId":"a4501891-571a-463a-8cad-5ced4c7946a0"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"approval-display":{"semanticObject":"approval","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.121.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.suite.ui.commons":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"approval.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"complainsList","target":"complainsList"},{"pattern":"complains({key}):?query:","name":"complainsObjectPage","target":"complainsObjectPage"}],"targets":{"complainsList":{"type":"Component","id":"complainsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/complains","variantManagement":"Page","navigation":{"complains":{"detail":{"route":"complainsObjectPage"}}},"initialLoad":"Enabled"}}},"complainsObjectPage":{"type":"Component","id":"complainsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/complains","content":{"body":{"sections":{"Comments":{"template":"approval.ext.fragment.Comments","position":{"placement":"After"},"title":"Comments","type":"XMLFragment"},"Attachements":{"template":"approval.ext.fragment.Attachements","position":{"placement":"After","anchor":"Comments"},"title":"Attachments","type":"XMLFragment"},"WorkflowHistory":{"template":"approval.ext.fragment.WorkflowHistory","position":{"placement":"After","anchor":"Attachements"},"title":"Workflow History","type":"XMLFragment"}}},"footer":{"actions":{"Resolve":{"press":"approval.ext.controller.Resolve.Resolve","visible":true,"enabled":true,"text":"Resolve"},"FurtherAssign":{"press":"approval.ext.controller.FurtherAssign.FurtherAssign","visible":true,"enabled":true,"text":"Further Assign","position":{"placement":"After","anchor":"Resolve"}},"RevertBack":{"press":"approval.ext.controller.RevertBack.RevertBack","visible":true,"enabled":true,"text":"Revert Back","position":{"placement":"After","anchor":"FurtherAssign"}}}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#approval::complainsObjectPage":{"controllerName":"approval.ext.controller.Complainsobjpage"},"sap.fe.templates.ListReport.ListReportController#approval::complainsList":{"controllerName":"approval.ext.controller.ListController"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"vendorcomplain"}}'
}});
