sap.ui.define(["sap/m/MessageToast"],function(t){"use strict";return{revsumbit:async function(e){debugger;var s=window.location.href;var a=/pototcomp\('([^']+)'\)/;var o=(a.exec(s)||[])[1];var n=sap.ui.getCore().byId("vencomplaint::vendor_poheaders_pototcompObjectPage--fe::CustomSubSection::Comps-innerGrid").mAggregations.content[0].mAggregations.content.mAggregations.items[2].mAggregations.items[1]._lastValue;var i="Submitted";var r="/odata/v4/my/complains/"+o;var u=JSON.stringify({complainno:o,cdesc:n,cstatus:i});let c="submitcomplaints";var m=this._view.getModel().bindContext(`/${c}(...)`);m.setParameter("data",u);m.setParameter("status",JSON.stringify({status:"patchComp"}));var g=new sap.m.Dialog({title:"SUBMIT",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to Submit?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(e){debugger;await m.execute();g.close();t.show("Successfully submitted");window.history.go(-3)}}),new sap.m.Button({text:"No",press:function(){g.close();t.show("Cancelled")}})]}).addStyleClass("myCustomDialogClass");g.open()},revcancel:function(){window.history.go(-3)}}});